import { fitCards, productModules } from "@/lib/site-content";

/* Familia de layout: indice a dos columnas, encaje a la izquierda y modulos a la derecha. */
export default function ProductBlueprint() {
  return (
    <section id="producto" className="scroll-mt-4 border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
          <div>
            <h2 className="max-w-[20ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
              Encaja cuando la agencia ya nota estas fricciones
            </h2>
            <dl className="mt-8 space-y-7">
              {fitCards.map((card) => (
                <div key={card.title}>
                  <dt className="max-w-[40ch] font-display text-lg leading-snug text-ink">
                    {card.title}
                  </dt>
                  <dd className="mt-2 max-w-[44ch] text-sm leading-6 text-ink-soft">
                    {card.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="max-w-[24ch] text-balance font-display text-2xl leading-snug text-ink md:text-3xl">
              Asi se traduce en la operativa diaria
            </h3>

            <ol className="mt-8 border-t border-rule-strong">
              {productModules.map((module, index) => (
                <li
                  key={module.title}
                  className="grid grid-cols-[3rem_1fr] gap-x-5 border-b border-rule py-7"
                >
                  <span className="tabular font-display text-2xl leading-none text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-xl leading-snug text-ink">{module.title}</p>
                    <p className="mt-2.5 max-w-[54ch] text-sm leading-6 text-ink-soft">
                      {module.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
