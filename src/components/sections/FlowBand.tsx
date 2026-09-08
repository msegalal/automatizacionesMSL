import { flowNote, flowSteps } from "@/lib/site-content";

/*
  Familia de layout: franja horizontal en grafito, sin tarjetas.
  Es el único bloque oscuro de la página y esta ahi a proposito:
  corta el recorrido y separa la promesa del detalle.
*/
export default function FlowBand() {
  return (
    <section className="flow-band">
      <div className="site-container flow-band-inner">
        <div className="flow-band-heading">
          <p className="eyebrow">El recorrido visible</p>
          <h2>De la solicitud a la propuesta,<br />sin perder el hilo.</h2>
        </div>

        <ol className="mt-12 grid gap-8 border-t border-rule-contrast pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {flowSteps.map((item, index) => (
            <li key={item.step} className={`flow-stage flow-stage-${index + 1}`}>
              <div className="flex items-baseline gap-3">
                <span className="tabular flow-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.step}</h3>
              </div>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>

        <p className="flow-note">{flowNote}</p>
      </div>
    </section>
  );
}
