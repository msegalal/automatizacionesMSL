import { beforeAfter, microcases } from "@/lib/site-content";

export default function BeforeAfter() {
  const { before, after } = beforeAfter;
  return (
    <section id="producto" className="section-space border-b border-rule">
      <div className="site-container">
        <div className="section-intro">
          <p className="eyebrow">01 / El punto de partida</p>
          <h2 className="section-title">
            Recuperar el hilo.
            <br />
            <em>Y saber qué toca después.</em>
          </h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-before">
            <p className="eyebrow">{before.label} / Información dispersa</p>
            <div className="channel-list">
              {before.channels.map((channel, index) => (
                <span key={channel}>
                  <span className="tabular">0{index + 1}</span>
                  {channel}
                </span>
              ))}
            </div>
            <p className="comparison-note">{before.body}</p>
          </div>
          <div className="comparison-after">
            <p className="eyebrow">{after.label} / Una vista compartida</p>
            <p className="comparison-heading">
              Cada oportunidad,
              <br />
              <em>con su contexto.</em>
            </p>
            <ul>
              {after.fields.map((field, index) => (
                <li key={field}>
                  <span className="tabular">0{index + 1}</span>
                  {field}
                </li>
              ))}
            </ul>
            <p className="comparison-note">{after.body}</p>
          </div>
        </div>
        <div className="microcase-strip">
          <p className="eyebrow">¿Te resulta familiar?</p>
          <ul>
            {microcases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
