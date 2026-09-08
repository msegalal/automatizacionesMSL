import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import { navItems } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Pagina no encontrada | automatizacionesMSL",
  description:
    "La pagina que buscas no existe. Vuelve al inicio o consulta las secciones principales del sitio.",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <SiteChrome>
      <main id="contenido" className="px-6 pb-24 pt-16">
        <div className="mx-auto max-w-4xl">
          <div className="h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-orange-500">
            error 404
          </p>
          <h1 className="mt-4 max-w-[20ch] text-balance text-4xl font-semibold leading-[1.06] text-slate-950 sm:text-5xl">
            Esta pagina no existe
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg leading-8 text-slate-600">
            Puede que el enlace este mal copiado o que el contenido haya cambiado de sitio.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
            >
              Volver al inicio
            </Link>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500"
            >
              Quiero ver si encaja
            </Link>
          </div>

          <nav aria-label="Secciones" className="mt-14 border-t border-slate-200 pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${item.href}`}
                    className="text-sm text-slate-600 transition-colors hover:text-orange-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/casos/ireviajes"
                  className="text-sm text-slate-600 transition-colors hover:text-orange-500"
                >
                  Caso de iReViajes
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </SiteChrome>
  );
}
