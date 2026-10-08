import { CERTS } from "@/lib/data";

/** Certificates hang off a central trunk, alternating left/right (single side on mobile). */
export default function Certifications() {
  return (
    <section>
      <div className="w">
        <span className="ey">// certifications</span>
        <h2 className="rv">Certifications</h2>
        <div className="tree">
          {CERTS.map(([title, issuer], i) => (
            <div key={title} className={`card br ${i % 2 ? "r" : "l"} rv`}>{title}<small>{issuer}</small></div>
          ))}
        </div>
      </div>
    </section>
  );
}
