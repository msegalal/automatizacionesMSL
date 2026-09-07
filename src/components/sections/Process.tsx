import { processSteps } from "@/lib/site-content";

/* Familia de layout: linea temporal horizontal. Sin cajas. */
export default function Process() {
  return (
    <section id="proceso" className="scroll-mt-4 border-b border-rule bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="max-w-[24ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          Asi se implanta sin meter mas complejidad en la agencia
        </h2>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto] lg:gap-8">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="border-t-2 border-ink pt-5 lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-0"
            >
              <span className="tabular font-display text-sm text-accent">{step.step}</span>
              <h3 className="mt-3 font-display text-xl leading-snug text-ink lg:mt-3">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
