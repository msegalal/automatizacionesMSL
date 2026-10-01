import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ServiceDetail {
  title: string;
  description: string;
}

export interface RelatedService {
  title: string;
  href: string;
}

export interface ServicePageContent {
  serviceName: string;
  title: string;
  introduction: string;
  explanationTitle: string;
  explanation: string;
  detailTitle: string;
  details: ServiceDetail[];
  approachTitle: string;
  approach: string[];
  related: RelatedService[];
}

export default function ServicePage({
  content,
  path
}: {
  content: ServicePageContent;
  path: string;
}) {
  return (
    <SiteChrome currentPath={path}>
      <main id="contenido" className="px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            crumbs={[
              { label: "Inicio", href: "/" },
              { label: content.serviceName, href: path }
            ]}
          />

          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <section className="rounded-[2.2rem] border border-white/65 bg-white/52 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <div className="mb-6 h-0.5 w-20 bg-gradient-to-r from-orange-500 to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-[0.27em] text-orange-700">
                {content.serviceName} para agencias de viajes
              </p>
              <h1 className="mt-4 max-w-[19ch] text-balance text-4xl font-semibold leading-[1.04] text-slate-950 sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-[62ch] text-base leading-8 text-slate-700 sm:text-lg">
                {content.introduction}
              </p>
              <Link
                href="/#contacto"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Cuéntanos cómo trabaja tu agencia
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="ml-2 h-4 w-4">
                  <path d="M4.5 10h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </section>

            <aside className="relative isolate overflow-hidden rounded-[2.2rem] bg-slate-950 px-6 py-8 text-white shadow-[0_24px_72px_rgba(8,19,33,0.16)] sm:px-8 sm:py-10">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-orange-300/25"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-orange-400/20 blur-3xl"
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-300">
                  El punto de partida
                </p>
                <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  {content.explanationTitle}
                </h2>
                <p className="mt-5 text-base leading-8 text-white/75">{content.explanation}</p>
                <div className="mt-8 flex items-start gap-3 rounded-[1.3rem] border border-white/12 bg-white/[0.06] px-4 py-4">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />
                  <p className="text-sm leading-6 text-white/80">
                    Acordamos el alcance antes de plantear configuraciones, canales o conexiones.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <section className="mt-20 border-t border-slate-300/70 pt-14 sm:mt-24 sm:pt-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-700">
                Aspectos que definimos contigo
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                {content.detailTitle}
              </h2>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {content.details.map((detail, index) => (
                <Card key={detail.title} className="h-full">
                  <CardHeader>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <CardTitle className="mt-5 text-xl">{detail.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-slate-600">{detail.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-20 overflow-hidden rounded-[2.2rem] bg-slate-950 px-6 py-8 text-white sm:mt-24 sm:px-9 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
                  Cómo lo abordamos
                </p>
                <h2 className="mt-4 max-w-[23ch] text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  {content.approachTitle}
                </h2>
              </div>
              <ol className="grid gap-3 sm:grid-cols-2">
                {content.approach.map((paragraph, index) => (
                  <li
                    key={paragraph}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-400 text-[11px] font-bold text-slate-950">
                      0{index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-7 text-white/78">{paragraph}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <nav aria-label="Otros servicios" className="mt-16 border-t border-slate-300/70 pt-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-700">
                  Sigue explorando
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950">Otros servicios</h2>
              </div>
            </div>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {content.related.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex min-h-16 items-center justify-between gap-4 rounded-[1.4rem] border border-slate-200/90 bg-white/75 px-5 py-4 transition-[border-color,box-shadow] hover:border-orange-400 hover:shadow-[0_16px_36px_rgba(8,19,33,0.07)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    <span className="font-semibold text-slate-950 group-hover:text-orange-700">
                      {item.title}
                    </span>
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-orange-600 transition-transform group-hover:translate-x-1">
                      <path d="M4.5 10h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </SiteChrome>
  );
}
