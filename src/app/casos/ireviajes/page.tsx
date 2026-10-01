import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Caso iReViajes en preparación | automatizacionesMSL",
  description:
    "La documentación del caso iReViajes está en preparación. Aún no se presentan aquí detalles ni resultados del proyecto.",
  alternates: { canonical: "/casos/ireviajes" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Caso iReViajes en preparación | automatizacionesMSL",
    description:
      "La documentación del caso iReViajes está en preparación. Aún no se presentan aquí detalles ni resultados del proyecto.",
    url: "/casos/ireviajes",
    siteName: "automatizacionesMSL",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "automatizacionesMSL: soluciones personalizadas para agencias de viajes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Caso iReViajes en preparación | automatizacionesMSL",
    description:
      "La documentación del caso iReViajes está en preparación. Aún no se presentan aquí detalles ni resultados del proyecto.",
    images: ["/twitter-image"]
  }
};

export default function CasoIreViajesPage() {
  return (
    <SiteChrome>
      <main id="contenido" className="px-6 pb-24 pt-12">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs
            crumbs={[
              { label: "Inicio", href: "/" },
              { label: "Caso iReViajes", href: "/casos/ireviajes" }
            ]}
          />

          <section className="mt-12 rounded-[2.3rem] border border-slate-200/80 bg-white/82 px-6 py-10 shadow-[0_20px_60px_rgba(8,19,33,0.06)] md:px-10 md:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">
              Caso en preparación
            </p>
            <h1 className="mt-4 max-w-[20ch] text-balance text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Estamos preparando la documentación de iReViajes.
            </h1>
            <p className="mt-6 max-w-[60ch] text-base leading-8 text-slate-600">
              Hasta que el caso esté terminado y aprobado para publicarse, esta página no presenta
              detalles del trabajo ni resultados como confirmados.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/crm-para-agencias-de-viajes"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
              >
                Ver CRM para agencias de viajes
              </Link>
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
              >
                Contactar
              </Link>
            </div>
          </section>
        </div>
      </main>
    </SiteChrome>
  );
}
