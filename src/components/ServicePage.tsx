import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicePageArtwork, { type ServiceVisualVariant } from "@/components/ServicePageArtwork";
import { Card, CardTitle } from "@/components/ui/card";

export interface ServiceDetail {
  title: string;
  description: string;
}

export interface RelatedService {
  title: string;
  href: string;
  description: string;
}

export interface ServicePageContent {
  serviceName: string;
  audienceLabel: string;
  ctaLabel: string;
  title: string;
  introduction: string;
  visualVariant: ServiceVisualVariant;
  heroPoints: string[];
  explanationTitle: string;
  explanation: string;
  detailTitle: string;
  details: ServiceDetail[];
  approachTitle: string;
  approach: string[];
  related: RelatedService[];
  closingTitle: string;
  closingDescription: string;
}

function ArrowIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M4.5 10h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
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
      <main id="contenido" className="px-4 pb-20 pt-7 sm:px-6 sm:pb-28 sm:pt-9">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            crumbs={[
              { label: "Inicio", href: "/" },
              { label: content.serviceName, href: path }
            ]}
          />

          <section className="relative mt-7 overflow-hidden rounded-[2rem] border border-[#e9e0d5] bg-[#f4eee5] shadow-[0_24px_80px_rgba(8,19,33,0.07)] sm:mt-9 sm:rounded-[2.5rem]">
            <div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-36 h-96 w-96 rounded-full border border-orange-300/35" />
            <div className="relative grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_0.95fr] lg:gap-7 lg:p-12">
              <div className="py-3 sm:py-5 lg:py-8">
                <p className="inline-flex items-center gap-2 rounded-full border border-orange-300/65 bg-white/65 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-orange-800 sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
                  {content.audienceLabel}
                </p>
                <h1 className="mt-6 max-w-[16ch] text-balance font-serif text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[3.65rem]">
                  {content.title}
                </h1>
                <p className="mt-6 max-w-[58ch] text-base leading-8 text-slate-700 sm:text-lg sm:leading-8">
                  {content.introduction}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/#contacto"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(8,19,33,0.16)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    {content.ctaLabel}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </Link>
                  <a
                    href="#alcance"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
                  >
                    Ver cómo lo planteamos
                  </a>
                </div>
              </div>

              <div className="relative py-2 sm:px-3 lg:py-0">
                <ServicePageArtwork variant={content.visualVariant} />
              </div>
            </div>

            <ul aria-label="Aspectos principales" className="relative grid gap-px border-t border-[#e5dacd] bg-[#e5dacd] sm:grid-cols-3">
              {content.heroPoints.map((point, index) => (
                <li key={point} className="flex min-h-[4.5rem] items-center gap-3 bg-[#f8f4ed] px-6 py-4 sm:px-8">
                  <span className="font-mono text-[11px] font-semibold tracking-wide text-orange-700">0{index + 1}</span>
                  <span className="text-sm font-semibold text-slate-800">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-20 grid gap-7 border-b border-slate-300/75 pb-16 sm:mt-24 sm:gap-10 sm:pb-20 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.23em] text-orange-700">El problema que resolvemos</p>
              <h2 className="mt-4 max-w-[19ch] text-balance font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl">
                {content.explanationTitle}
              </h2>
            </div>
            <div className="max-w-[72ch] lg:pt-1">
              <p className="text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">{content.explanation}</p>
              <div className="mt-6 flex gap-3 rounded-2xl border border-orange-200/80 bg-orange-50/75 p-4 sm:p-5">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-200/70 text-orange-800" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                    <path d="m5 10 3.2 3.2L15.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-sm leading-7 text-slate-700">El alcance se acuerda después de entender el proceso y validar los requisitos relevantes.</p>
              </div>
            </div>
          </section>

          <section className="mt-16 sm:mt-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.23em] text-orange-700">Aspectos que definimos contigo</p>
                <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl">
                  {content.detailTitle}
                </h2>
              </div>
              <span className="hidden rounded-full border border-slate-300 px-4 py-2 font-mono text-xs font-medium text-slate-500 sm:inline-flex">01 — 03</span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3 sm:mt-10">
              {content.details.map((detail, index) => (
                <Card key={detail.title} interactive={false} className="group relative min-h-64 overflow-hidden rounded-[1.7rem] bg-white/80 p-6 shadow-[0_14px_42px_rgba(8,19,33,0.045)] sm:p-7">
                  <span className="absolute right-5 top-1 font-serif text-7xl font-medium tracking-[-0.06em] text-orange-100 transition-colors group-hover:text-orange-200" aria-hidden="true">0{index + 1}</span>
                  <div className="relative flex h-full flex-col">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-slate-950 text-orange-300">
                      {index === 0 ? (
                        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5"><path d="M4 4.5h12v11H4zM7 8h6M7 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      ) : index === 1 ? (
                        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5"><path d="M4 5h12M4 10h7m-7 5h4m5-4 2 2 3-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      ) : (
                        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5"><circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4" /><path d="M3.5 15c.5-2 1.7-3 3.5-3s3 .9 3.5 3m2-7h4m-2-2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                      )}
                    </span>
                    <CardTitle className="mt-7 max-w-[18ch] text-xl leading-snug">{detail.title}</CardTitle>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{detail.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section id="alcance" className="mt-20 scroll-mt-8 overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-[0_24px_72px_rgba(8,19,33,0.14)] sm:mt-24 sm:rounded-[2.5rem]">
            <div className="grid gap-9 p-6 sm:p-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:p-12">
              <div className="relative">
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-orange-300">CÓMO LO ABORDAMOS</span>
                <h2 className="mt-5 max-w-[20ch] text-balance font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-4xl">{content.approachTitle}</h2>
                <div aria-hidden="true" className="mt-7 h-1 w-16 rounded-full bg-orange-400" />
              </div>
              <ol className="grid gap-3">
                {content.approach.map((paragraph, index) => (
                  <li key={paragraph} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-5 sm:grid-cols-[3rem_1fr] sm:items-start sm:p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-300/45 font-mono text-xs font-bold text-orange-200">0{index + 1}</span>
                    <p className="text-sm leading-7 text-white/80 sm:text-base sm:leading-8">{paragraph}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <nav aria-label="Otros servicios" className="mt-20 sm:mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.23em] text-orange-700">Sigue explorando</p>
                <h2 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-4xl">Otras formas de mejorar el trabajo</h2>
              </div>
              <Link href="/#servicios" className="hidden items-center gap-2 text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 sm:inline-flex">
                Ver todos los servicios <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-7 grid gap-4 md:grid-cols-2">
              {content.related.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="group flex h-full min-h-36 items-start justify-between gap-4 rounded-[1.6rem] border border-slate-200 bg-white/75 p-5 shadow-[0_10px_34px_rgba(8,19,33,0.035)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-[0_18px_44px_rgba(8,19,33,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6">
                    <span>
                      <span className="block text-lg font-semibold leading-snug text-slate-950 group-hover:text-orange-800">{item.title}</span>
                      <span className="mt-2 block max-w-[50ch] text-sm leading-6 text-slate-600">{item.description}</span>
                    </span>
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-orange-700 transition-all group-hover:border-orange-300 group-hover:bg-orange-50 group-hover:translate-x-0.5">
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#b74724] px-6 py-9 text-white sm:mt-20 sm:px-10 sm:py-11 lg:px-12">
            <div aria-hidden="true" className="absolute -right-8 -top-24 h-64 w-64 rounded-full border border-white/25" />
            <div aria-hidden="true" className="absolute -right-1 -top-16 h-48 w-48 rounded-full border border-white/20" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Hablemos de tu caso</p>
                <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">{content.closingTitle}</h2>
                <p className="mt-3 max-w-[62ch] text-sm leading-7 text-white sm:text-base">{content.closingDescription}</p>
              </div>
              <Link href="/#contacto" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:self-center">
                {content.ctaLabel}<ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </SiteChrome>
  );
}
