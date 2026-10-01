const steps = [
  {
    number: "01",
    title: "Solicitud",
    description: "Entender qué necesita el viajero y el equipo."
  },
  {
    number: "02",
    title: "Seguimiento",
    description: "Tener claro en qué punto está cada oportunidad."
  },
  {
    number: "03",
    title: "Siguiente paso",
    description: "Acordar qué actuación toca y quién la realiza."
  }
];

export default function WorkflowIllustration() {
  return (
    <figure className="relative mx-auto w-full max-w-xl" aria-labelledby="workflow-title">
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-orange-400/25"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-orange-300/30 blur-3xl"
      />

      <div className="relative isolate overflow-hidden rounded-[2.15rem] border border-white/10 bg-slate-950 p-5 text-white shadow-[0_28px_90px_rgba(8,19,33,0.22)] sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-200 sm:text-[11px]">
              Un ejemplo de recorrido
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-white/60">
              <span className="h-2 w-2 rounded-full bg-orange-400" aria-hidden="true" />
              A medida
            </span>
          </div>

          <h2
            id="workflow-title"
            className="mt-6 max-w-sm text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl"
          >
            Del primer contacto al siguiente paso.
          </h2>

          <ol className="relative mt-7 space-y-3 before:absolute before:bottom-8 before:left-[1.45rem] before:top-8 before:w-px before:bg-gradient-to-b before:from-orange-400 before:via-blue-300/70 before:to-white/15 before:content-['']">
            {steps.map((step) => (
              <li
                key={step.number}
                className="relative flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-4"
              >
                <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-400 text-xs font-bold text-slate-950 shadow-[0_0_0_5px_rgba(8,19,33,0.96)]">
                  {step.number}
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-semibold text-white">{step.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-white/65">
                    {step.description}
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-auto h-5 w-5 shrink-0 text-white/35"
                >
                  <path d="M4.5 10h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
            ))}
          </ol>

          <figcaption className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-white/55">
            Esquema conceptual. El recorrido se define con cada agencia.
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
