"use client";
import { useEffect, useRef } from "react";

type Pt = { bx: number; by: number; ox: number; oy: number; vx: number; vy: number; z: number; r: number; x: number; y: number; d: number };

/** Canvas node/line mesh. Desktop: reacts to the cursor with lerped motion. Touch: autonomous drift. */
export default function InteractiveMesh() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const mob = !fine;
    const dpr = Math.min(window.devicePixelRatio || 1, mob ? 1.5 : 2);
    const LINK = mob ? 105 : 130, RADIUS = 170;
    let W = 0, H = 0, t = 0, raf = 0, visible = true;
    let P: Pt[] = [];
    const M = { x: innerWidth / 2, y: innerHeight / 2, sx: innerWidth / 2, sy: innerHeight / 2, tx: 0, ty: 0, on: false };

    function init() {
      W = innerWidth; H = innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(mob ? 38 : 95, Math.round((W * H) / (mob ? 14000 : 15000)));
      P = Array.from({ length: n }, () => ({
        bx: Math.random() * W, by: Math.random() * H, ox: 0, oy: 0,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        z: Math.random() * 0.8 + 0.2, r: Math.random() * 1.3 + 0.7, x: 0, y: 0, d: 0,
      }));
    }

    function frame() {
      if (!visible) return;
      t += 0.006;
      if (mob || !M.on) { const a = t * 1.3; M.tx = W / 2 + Math.cos(a) * W * 0.3; M.ty = H / 2 + Math.sin(a * 0.8) * H * 0.3; }
      else { M.tx = M.x; M.ty = M.y; }
      M.sx += (M.tx - M.sx) * 0.07; M.sy += (M.ty - M.sy) * 0.07;
      const px = M.sx / W - 0.5, py = M.sy / H - 0.5;
      ctx.clearRect(0, 0, W, H);
      const g = ctx.createRadialGradient(M.sx, M.sy, 0, M.sx, M.sy, mob ? 170 : 240);
      g.addColorStop(0, "rgba(124,140,255,.17)"); g.addColorStop(0.5, "rgba(56,225,198,.05)"); g.addColorStop(1, "transparent");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

      for (const p of P) {
        p.bx += p.vx; p.by += p.vy;
        if (p.bx < -20) p.bx = W + 20; if (p.bx > W + 20) p.bx = -20;
        if (p.by < -20) p.by = H + 20; if (p.by > H + 20) p.by = -20;
        const X = p.bx - px * 60 * p.z, Y = p.by - py * 60 * p.z;
        const dx = X - M.sx, dy = Y - M.sy, d = Math.hypot(dx, dy);
        let tx = 0, ty = 0;
        if (d < RADIUS && d > 1) { const f = (1 - d / RADIUS) * 38; tx = (dx / d) * f; ty = (dy / d) * f; }
        p.ox += (tx - p.ox) * 0.08; p.oy += (ty - p.oy) * 0.08;
        p.x = X + p.ox; p.y = Y + p.oy; p.d = d;
      }
      for (let i = 0; i < P.length; i++) {
        const a = P[i];
        for (let j = i + 1; j < P.length; j++) {
          const b = P[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            const near = Math.max(0, 1 - Math.min(a.d, b.d) / (RADIUS * 1.4));
            const al = (1 - d / LINK) * (0.16 + near * 0.55);
            ctx.strokeStyle = near > 0.15 ? `rgba(110,235,215,${al})` : `rgba(140,150,255,${al})`;
            ctx.lineWidth = 0.6 + near * 0.7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const near = Math.max(0, 1 - a.d / RADIUS);
        ctx.fillStyle = `rgba(${180 - near * 100},${200 + near * 30},255,${0.45 + near * 0.55})`;
        ctx.shadowColor = "rgba(124,140,255,.9)"; ctx.shadowBlur = near * 12 + 3;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r + near * 1.6, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0;
      if (!reduce) raf = requestAnimationFrame(frame);
    }

    const onMove = (e: PointerEvent) => { if (e.pointerType === "touch") return; M.x = e.clientX; M.y = e.clientY; M.on = true; };
    const onLeave = () => { M.on = false; };
    const onVis = () => { visible = !document.hidden; if (visible) { cancelAnimationFrame(raf); frame(); } };

    init(); frame();
    window.addEventListener("resize", init);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas id="mesh" ref={ref} aria-hidden="true" />;
}
