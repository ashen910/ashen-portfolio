"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { OVERVIEWS } from "@/lib/overviews";

export default function ProjectOverviews() {
  const [id, setId] = useState(OVERVIEWS[0].id);
  const [open, setOpen] = useState<number | null>(null); // lightbox index
  const ov = OVERVIEWS.find((o) => o.id === id)!;
  const n = ov.shots.length;

  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, step]);

  const shot = open === null ? null : ov.shots[open];

  return (
    <section id="overviews">
      <div className="w">
        <span className="ey">// project overviews</span>
        <h2 className="rv">Inside the projects</h2>
        <p className="sub">Screens and walkthroughs from selected builds. Select an image to enlarge it.</p>

        <div className="tabs" role="tablist" aria-label="Project overviews">
          {OVERVIEWS.map((o) => (
            <button key={o.id} role="tab" aria-selected={o.id === id} className={o.id === id ? "on" : ""} onClick={() => { setId(o.id); setOpen(null); }}>{o.name}</button>
          ))}
        </div>

        <div className="ovh">
          <div>
            <span className="ty">{ov.type}</span>
            <p>{ov.blurb}</p>
            <div>{ov.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
          </div>
          {ov.repo && <a className="btn" href={ov.repo} target="_blank" rel="noopener noreferrer">View</a>}
        </div>

        {ov.video && (
          <figure className="card vid">
            <video controls preload="metadata" playsInline poster={ov.video.poster} muted={ov.video.muted}>
              <source src={ov.video.src} type="video/mp4" />
            </video>
            <figcaption>{ov.video.caption}</figcaption>
          </figure>
        )}

        {n > 0 && (
          <div className="mas" key={id}>
            {ov.shots.map((s, i) => (
              <button key={s.src} className="card shot" onClick={() => setOpen(i)} aria-label={`Enlarge: ${s.caption}`}>
                <span className="bar"><i /><i /><i /></span>
                <span className="pic">
                  <Image src={s.src} alt={`${ov.name}: ${s.caption}`} width={s.w} height={s.h} sizes="(max-width:760px) 100vw, (max-width:1000px) 50vw, 360px" />
                </span>
                <span className="cap">{s.caption}</span>
              </button>
            ))}
          </div>
        )}

        {n === 0 && !ov.video && <div className="card soon">Screenshots coming soon.</div>}
      </div>

      {shot && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={shot.caption} onClick={() => setOpen(null)}>
          <div className="im" onClick={(e) => e.stopPropagation()}>
            <Image src={shot.src} alt={`${ov.name}: ${shot.caption}`} fill sizes="100vw" priority />
          </div>
          <p className="cp" onClick={(e) => e.stopPropagation()}>{shot.caption} · {open! + 1}/{n}</p>
          <button className="x" aria-label="Close" onClick={() => setOpen(null)}>✕</button>
          {n > 1 && <button className="pv" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>}
          {n > 1 && <button className="nx" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>}
        </div>
      )}
    </section>
  );
}
