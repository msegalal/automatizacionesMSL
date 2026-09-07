import { methodSteps } from "@/lib/site-content";

/* Familia de layout: editorial asimetrico, numero grande a la izquierda. */
export default function Method() {
  return (
    <section id="proceso" className="scroll-mt-4 border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="max-w-[22ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          Ordenar antes de automatizar
        </h2>
        <p className="mt-5 max-w-[58ch] text-base leading-7 text-ink-soft">
          El orden de las fases no es un detalle. Automatizar sobre una operativa desordenada
          multiplica el desorden en vez de reducirlo.
        </p>

        <ol className="mt-14 border-t border-rule-strong">
          {methodSteps.map((item) => (
            <li
              key={item.step}
              className="grid gap-4 border-b border-rule py-9 lg:grid-cols-[6rem_1fr_1fr] lg:gap-12"
            >
              <span className="tabular font-display text-4xl leading-none text-accent lg:text-5xl">
                {item.step}
              </span>
              <h3 className="max-w-[22ch] font-display text-2xl leading-snug text-ink">
                {item.title}
              </h3>
              <p className="max-w-[52ch] text-base leading-7 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
