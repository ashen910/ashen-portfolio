"use client";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.toLowerCase());
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <nav id="nav" className={scrolled ? "s" : ""}>
      <div className="w nb">
        <a className="logo" href="#home" aria-label="Home">ASHEN<b>.</b></a>
        <ul className={`nl${open ? " o" : ""}`} onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
          {NAV.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? "on" : ""}>{n}</a></li>
          ))}
        </ul>
        <button className="hb" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
      </div>
    </nav>
  );
}
