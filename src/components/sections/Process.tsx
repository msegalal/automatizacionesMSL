import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { processSteps } from "@/lib/site-content";

export default function Process() {
  return (
    <section id="proceso" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 h-0.5 w-20 bg-gradient-to-r from-orange-500 to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-700">
              Un proceso transparente
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Primero entendemos el trabajo. Después definimos la solución.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-700 lg:justify-self-end">
            Cada fase sirve para aclarar qué necesita el equipo y qué depende de requisitos que hay
            que confirmar antes de concretar el alcance.
          </p>
        </div>

        <ol className="relative grid gap-5 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[12%] right-[12%] top-[1.4rem] hidden h-px bg-gradient-to-r from-orange-300 via-slate-300 to-orange-300 lg:block"
          />
          {processSteps.map((step) => (
            <li key={step.step} className="relative">
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border-[5px] border-[#fcfaf6] bg-slate-950 text-xs font-bold text-white shadow-[0_0_0_1px_rgba(255,110,64,0.4)]">
                    {step.step}
                  </span>
                  <CardTitle className="mt-3 text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-slate-600">{step.body}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
