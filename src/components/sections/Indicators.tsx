import { indicators, indicatorsNote } from "@/lib/site-content";

/*
  Familia de layout: banda de indicadores separada por filetes.
  Sustituye a los porcentajes anteriores, que no tenian fuente,
  periodo ni línea base. La nota metodologica va visible, no en letra pequena.
*/
export default function Indicators() {
  return (
    <section className="indicators-section border-b border-rule">
      <div className="site-container py-20 lg:py-24">
        <p className="eyebrow mb-6">05 / Qué cambia en el día a día</p>
        <h2 className="section-title max-w-[26ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          Lo que se mide depende del punto de partida
        </h2>

        <dl className="indicator-grid">
          {indicators.map((item, index) => (
            <div key={item.title} className={`indicator-card indicator-card-${index + 1}`}>
              <dt>
                <span className="tabular indicator-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.title}</span>
              </dt>
              <dd>{item.body}</dd>
            </div>
          ))}
        </dl>

        <p className="indicator-note">
          {indicatorsNote}
        </p>
      </div>
    </section>
  );
}
