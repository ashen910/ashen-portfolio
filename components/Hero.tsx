import { SOCIAL } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home">
      <div className="w">
        <div className="st fd"><i />Open to Opportunities</div>
        <h1 aria-label="Ashen Wijenayake">
          <span className="ln"><span>ASHEN</span></span>
          <span className="ln"><span>WIJENAYAKE</span></span>
        </h1>
        <p className="role fd">
          <span>Software Engineer</span><em>|</em><span>Full-Stack Developer</span><em>|</em><span>Power Platform Engineer</span>
        </p>
        <p className="hd fd">
          Results-driven Software Engineering graduate with hands-on experience in software development, web application development, and digital automation engineering. Passionate about building reliable, efficient, and user-focused solutions.
        </p>
        <div className="cta fd">
          <a className="btn p mag" href="#projects">View My Work →</a>
          <a className="btn mag" href="#contact">Contact Me</a>
        </div>
        <div className="so fd">
          {SOCIAL.map(([name, href, d]) => (
            <a key={name} className="mag" href={href} aria-label={name} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <svg viewBox="0 0 24 24"><path d={d} /></svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
