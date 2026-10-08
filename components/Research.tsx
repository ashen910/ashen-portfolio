const FOCUS = ["Computer security", "Biometric authentication", "User behavior detection", "Theft detection", "Personal device integration in business environments"];
const TECH = ["Python", "Flask", "OpenCV", "TensorFlow", "Keras"];

export default function Research() {
  return (
    <section id="research">
      <div className="w">
        <span className="ey">// research</span>
        <h2 className="rv">Research</h2>
        <div className="card rc rv">
          <div>
            <span className="ty chip">Undergraduate research</span>
            <h3>BYOD Solutions for Small and Medium Businesses</h3>
            <ul>{FOCUS.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div>
            <b style={{ font: "500 .72rem var(--m)", color: "var(--a2)", letterSpacing: ".12em" }}>TECHNOLOGY</b>
            <div style={{ marginTop: 12 }}>{TECH.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            <div style={{ marginTop: 20 }}>
              <a className="btn" href="https://github.com/ashen910/Research_Docs" target="_blank" rel="noopener noreferrer">View research docs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
