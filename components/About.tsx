import { EDU, FOCUS } from "@/lib/data";

export default function About() {
  return (
    <section id="about">
      <div className="w">
        <span className="ey">// about</span>
        <h2 className="rv">Engineering across code, cloud and the factory floor.</h2>
        <div className="ab">
          <div className="rv">
            <p>Software engineer with experience spanning full-stack web development, digital automation and Microsoft Power Platform. I build business applications, integrate APIs, work with database systems and explore cloud technologies, turning real operational problems into dependable software.</p>
            <div className="fc">{FOCUS.map((f) => <span key={f} className="chip">{f}</span>)}</div>
          </div>
          <div className="tl rv">
            {EDU.map(([date, title, text]) => (
              <div key={title} className="card ti"><small>{date}</small><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
