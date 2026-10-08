"use client";
import { EXP } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="w">
        <span className="ey">// experience</span>
        <h2 className="rv">Where I&apos;ve built things</h2>
        <p className="sub">Hover or tap a role to reveal responsibilities and technologies.</p>
        <div className="xl">
          {EXP.map(([role, company, dates, bullets, tech]) => (
            // classList (not state) so the scroll-reveal class isn't overwritten on re-render
            <article key={role} className="card xp rv" tabIndex={0} onClick={(e) => e.currentTarget.classList.toggle("open")}>
              <small>{dates}</small>
              <h3>{role}</h3>
              <div className="co">{company}</div>
              <div className="xb"><div><ul>{bullets.map((b) => <li key={b}>{b}</li>)}</ul></div></div>
              <div>{tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
