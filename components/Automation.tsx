const APPS = [
  { id: "APP-01 · POWER APPS", title: "Yarn Requesting & Tracking System", text: "Yarn ordering process and request-status tracking, built with Microsoft Power Apps and related Microsoft technologies.", flow: ["Request", "Approve", "Track"], tech: ["Power Apps", "Microsoft 365", "SQL"] },
  { id: "APP-02 · PRODUCTION FLOOR", title: "Sub Assembly Area Digitalization", text: "Production-floor digitalization solution involving scanning, tracking and current production progress review.", flow: ["Scan", "Track", "Review"], tech: ["Power Apps", "Power BI", "SQL"] },
];

export default function Automation() {
  return (
    <section id="automation">
      <div className="w">
        <div className="ind">
          <span className="ey">// automation &amp; business solutions</span>
          <h2>Automation &amp; Business Solutions</h2>
          <p className="sub">Real business applications built at MAS Active using Microsoft Power Apps and related Microsoft technologies.</p>
          <div className="ag">
            {APPS.map((a) => (
              <div key={a.title} className="card ac">
                <span className="id">{a.id}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <div className="flow">
                  {a.flow.map((f, i) => (<span key={f} className="contents"><span>{f}</span>{i < a.flow.length - 1 && <b>→</b>}</span>))}
                </div>
                {a.tech.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
