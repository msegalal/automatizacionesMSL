import { indicators, indicatorsNote } from "@/lib/site-content";

/*
  Familia de layout: banda de indicadores separada por filetes.
  Sustituye a los porcentajes anteriores, que no tenian fuente,
  periodo ni linea base. La nota metodologica va visible, no en letra pequena.
*/
export default function Indicators() {
  return (
    <section className="border-b border-rule bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="max-w-[26ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          Lo que se mide depende del punto de partida
        </h2>

        <dl className="mt-12 grid gap-x-10 gap-y-9 border-t-2 border-ink pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((item, index) => (
            <div key={item.title}>
              <dt className="flex items-baseline gap-3">
                <span className="tabular font-display text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl leading-snug text-ink">{item.title}</span>
              </dt>
              <dd className="mt-3 max-w-[36ch] text-sm leading-6 text-ink-soft">{item.body}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 max-w-[70ch] border-t border-rule pt-6 text-sm leading-6 text-ink-soft">
          {indicatorsNote}
        </p>
      </div>
    </section>
  );
}
