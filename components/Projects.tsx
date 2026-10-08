"use client";
import { useState } from "react";
import { FEAT, FILTERS, PROJ } from "@/lib/data";

type Row = (typeof PROJ)[number];

function ProjectCard({ p, big }: { p: Row; big?: boolean }) {
  const [name, type, , tech, desc, status, link] = p;
  return (
    <article className={`card pc${big ? " big" : ""} rv in`}>
      <span className="ty">{type}</span>
      {status === "building" && <span className="bd">Currently Building</span>}
      <h3>{name}</h3>
      <p>{desc}</p>
      <div>{tech.split(" · ").map((t) => <span key={t} className="chip">{t}</span>)}</div>
      {link && <div style={{ marginTop: 10 }}><a className="btn" href={link} target="_blank" rel="noopener noreferrer">View code</a></div>}
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const matches = PROJ.filter((p) => filter === "all" || p[2].includes(filter));
  const featured = filter === "all" ? matches.slice(0, FEAT) : [];
  const rest = matches.slice(featured.length);
  const visible = showAll ? rest : rest.slice(0, 6);

  return (
    <section id="projects">
      <div className="w">
        <span className="ey">// projects</span>
        <h2 className="rv">Selected work</h2>
        <p className="sub">From a project platform in active development to production-floor automation.</p>
        <div className="fl" role="group" aria-label="Filter projects">
          {FILTERS.map(([key, label]) => (
            <button key={key} className={filter === key ? "on" : ""} aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}</button>
          ))}
        </div>
        {featured.length > 0 && <div className="fg">{featured.map((p) => <ProjectCard key={p[0]} p={p} big />)}</div>}
        <div className="pg">{visible.map((p) => <ProjectCard key={p[0]} p={p} />)}</div>
        {rest.length > 6 && (
          <div className="more">
            <button className="btn" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less" : `View All Projects (${matches.length})`}</button>
          </div>
        )}
      </div>
    </section>
  );
}
