import { aboutBlock } from "@/lib/site-content";
import { legalIdentity } from "@/lib/legal";

export default function About() {
  return (
    <section className="section-space border-b border-rule">
      <div className="site-container about-layout">
        <div>
          <p className="eyebrow">06 / Trato directo</p>
          <h2 className="section-title">
            La persona que te escucha
            <br />
            <em>es quien lo pone en marcha.</em>
          </h2>
          <p className="section-description">{aboutBlock.body}</p>
          <p className="founder-name">{legalIdentity.denominacion}</p>
          <p className="text-sm text-ink-faint">
            Detrás de automatizacionesMSL
          </p>
        </div>
        <dl className="about-points">
          {aboutBlock.points.map((point, index) => (
            <div key={point.title}>
              <dt>
                <span className="tabular">0{index + 1}</span>
                {point.title}
              </dt>
              <dd>{point.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
