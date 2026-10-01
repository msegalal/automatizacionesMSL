import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCards } from "@/lib/site-content";

function ServiceIcon({ index }: { index: number }) {
  const iconPaths = [
    <>
      <path d="M7 3.75h7l4 4v12.5H7z" />
      <path d="M14 3.75v4h4M9.5 12h6M9.5 15.5h6" />
    </>,
    <>
      <circle cx="6" cy="6" r="2.25" />
      <circle cx="18" cy="18" r="2.25" />
      <path d="M8.25 6h5.25A4.5 4.5 0 0 1 18 10.5v5.25M15.75 18H12a4 4 0 0 1-4-4v-1" />
    </>,
    <>
      <path d="M5 5.75h14a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-7l-5 3v-3H5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2Z" />
      <path d="M8 11h8M8 14h5" />
    </>
  ];

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[index] ?? iconPaths[0]}
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 border-y border-slate-200/60 bg-white/45 px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <div className="mb-6 h-0.5 w-20 bg-gradient-to-r from-orange-500 to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-700">
              Soluciones para agencias de viajes
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Tres formas de ordenar mejor el trabajo.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-700 lg:justify-self-end">
            El punto de partida es siempre el mismo: entender la operativa de la agencia y acordar
            qué conviene resolver. Después definimos si encaja un CRM, una automatización, un bot o
            una combinación.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {serviceCards.map((card, index) => (
            <Card key={card.title} className="flex h-full flex-col">
              <CardHeader className="flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200/80 bg-orange-50 text-orange-700">
                    <ServiceIcon index={index} />
                  </span>
                  <span className="font-serif text-4xl font-semibold leading-none text-slate-200" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.23em] text-orange-700">
                  {card.kicker}
                </p>
                <CardTitle className="mt-3 text-2xl">{card.title}</CardTitle>
                <CardDescription className="mt-3">{card.body}</CardDescription>
              </CardHeader>

              <CardContent className="mt-auto pt-5">
                <ul className="space-y-3 border-t border-slate-200/80 pt-5">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-800">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                          <path d="m3.5 8.25 2.75 2.5 6-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-950 underline decoration-orange-400 decoration-2 underline-offset-4 transition-colors hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
                >
                  Ver el servicio
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                    <path d="M4.5 10h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
