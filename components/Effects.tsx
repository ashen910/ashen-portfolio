"use client";
import { useEffect } from "react";

/** Scroll-reveal for `.rv` elements and the magnetic effect for `.mag` buttons. */
export default function Effects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv:not(.in)").forEach((el) => io.observe(el));

    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const onMove = (e: PointerEvent) => {
      document.querySelectorAll<HTMLElement>(".mag").forEach((b) => {
        const r = b.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const near = Math.hypot(dx, dy) < 90;
        b.style.transform = near ? `translate(${dx * 0.25}px,${dy * 0.3}px)` : "";
        b.style.transition = near ? "none" : "transform .4s";
      });
    };
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("pointermove", onMove); };
  }, []);
  return null;
}
