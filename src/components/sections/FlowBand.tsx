import { flowNote, flowSteps } from "@/lib/site-content";

/*
  Familia de layout: franja horizontal en grafito, sin tarjetas.
  Es el unico bloque oscuro de la pagina y esta ahi a proposito:
  corta el recorrido y separa la promesa del detalle.
*/
export default function FlowBand() {
  return (
    <section className="bg-contrast text-on-contrast">
      <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-20">
        <h2 className="max-w-[26ch] text-balance font-display text-2xl leading-tight text-on-contrast md:text-3xl">
          De la solicitud a la propuesta, sin perder contexto
        </h2>

        <ol className="mt-12 grid gap-8 border-t border-rule-contrast pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {flowSteps.map((item, index) => (
            <li key={item.step}>
              <div className="flex items-baseline gap-3">
                <span className="tabular font-display text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-on-contrast">{item.step}</h3>
              </div>
              <p className="mt-3 max-w-[34ch] text-sm leading-6 text-on-contrast-soft">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 border-t border-rule-contrast pt-6 text-sm leading-6 text-on-contrast-soft">
          {flowNote}
        </p>
      </div>
    </section>
  );
}
