"use client";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/data";

function Count({ n, suffix }: { n: number; suffix: string }) {
  const ref = useRef<HTMLElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - t0) / 1400, 1);
        setV(Math.round(n * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, [n]);
  return <b ref={ref}>{v}{suffix}</b>;
}

export default function Stats() {
  return (
    <section style={{ padding: "0 0 40px" }}>
      <div className="w sg">
        {STATS.map(([n, suffix, label]) => (
          <div key={label} className="card sc rv"><Count n={n} suffix={suffix} /><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
}
