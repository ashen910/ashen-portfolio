"use client";
import { useState } from "react";
import { LANGS, SKILLS } from "@/lib/data";

export default function Skills() {
  const cats = Object.keys(SKILLS);
  const [cat, setCat] = useState(cats[0]);
  return (
    <section id="skills">
      <div className="w">
        <span className="ey">// tech stack</span>
        <h2 className="rv">Tools of the trade</h2>
        <div className="tabs" role="tablist">
          {cats.map((c) => (
            <button key={c} role="tab" aria-selected={c === cat} className={c === cat ? "on" : ""} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="card bg" role="tabpanel">
          {SKILLS[cat].map((t) => <span key={`${cat}-${t}`} className="tb">{t}</span>)}
        </div>
        <div className="lg">
          <h3>Languages &amp; Frameworks I&apos;ve Worked With</h3>
          <div className="lr">
            <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
              <defs><linearGradient id="gr"><stop offset="0" stopColor="#7c8cff" /><stop offset="1" stopColor="#38e1c6" /></linearGradient></defs>
            </svg>
            {LANGS.map(([name, pct, logo]) => (
              <div key={name} className="card lc rv">
                <div className="rg" role="img" aria-label={`${name} ${pct}%`}>
                  <svg viewBox="0 0 92 92">
                    <circle className="bgc" cx="46" cy="46" r="40" />
                    <circle className="p" cx="46" cy="46" r="40" style={{ "--o": (251.3 * (1 - pct / 100)).toFixed(1) } as React.CSSProperties} />
                  </svg>
                  <svg className="lo" viewBox="0 0 48 48" dangerouslySetInnerHTML={{ __html: logo }} />
                </div>
                {name}<small>{pct}%</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
