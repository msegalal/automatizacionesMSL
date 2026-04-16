import { processSteps } from "@/lib/site-content";

export default function Process() {
  return (
    <section id="proceso" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="mb-6 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">
            proceso
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold text-slate-950 md:text-5xl">
            Montamos una web que no solo se vea bien: tiene que dejar claro por que la herramienta mejora el trabajo de la agencia.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-[1.9rem] border border-slate-200/80 bg-white/82 p-6 shadow-[0_18px_50px_rgba(8,19,33,0.05)] backdrop-blur-xl"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-300/50 bg-orange-100 text-sm font-semibold text-orange-600">
                {step.step}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
