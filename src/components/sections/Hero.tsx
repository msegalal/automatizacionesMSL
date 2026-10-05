import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import WorkflowIllustration from "@/components/sections/WorkflowIllustration";

const principles = ["Especialidad en viajes", "Otros negocios", "Aplicaciones a medida"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-2 sm:px-6 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 h-[34rem] bg-[linear-gradient(rgba(14,26,43,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(14,26,43,0.045)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.85),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl"
      />

      <div className="relative z-10">
        <SiteHeader isHome />

        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-4 pt-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-6 h-0.5 w-20 bg-gradient-to-r from-orange-500 to-transparent" />
            <p className="mb-5 max-w-xl text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:text-sm sm:tracking-[0.3em]">
              CRM y automatizaciones a medida para agencias de viajes
            </p>
            <h1 className="max-w-[15ch] text-balance text-[2.65rem] font-semibold leading-[1.04] text-slate-950 sm:text-6xl xl:text-[4.35rem]">
              Menos tareas manuales. Más claridad en cada oportunidad.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              Nos especializamos en agencias de viajes y también trabajamos con otros negocios.
              Diseñamos CRM, automatizaciones, soluciones de voz para llamadas, atención por
              WhatsApp o chat y aplicaciones a medida. Cada proyecto parte de cómo trabaja el
              equipo, no de un paquete genérico.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                id="hero-contact-cta"
                href="#contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(8,19,33,0.16)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_16px_36px_rgba(8,19,33,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Cuéntanos qué necesita tu negocio
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="ml-2 h-4 w-4">
                  <path d="M4.5 10h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#servicios"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
              >
                Explorar los servicios
              </Link>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Primero entendemos el proceso. Después concretamos el alcance y la solución adecuada.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-300/70 pt-5">
              {principles.map((principle) => (
                <li key={principle} className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange-500" />
                  {principle}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-2">
            <WorkflowIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
