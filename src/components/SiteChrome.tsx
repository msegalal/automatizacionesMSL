import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/sections/Footer";

interface SiteChromeProps {
  children: ReactNode;
}

/*
 * Cabecera reducida y pie para las paginas que no son la portada.
 * La navegacion de la portada son anclas de seccion, que fuera de ella
 * no llevan a ninguna parte: aqui solo tienen sentido el logo y el CTA.
 */
export default function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <header className="px-6 pt-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 text-slate-950">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-300/60 bg-orange-100 text-sm font-semibold text-orange-600">
              MSL
            </span>
            <span className="text-lg font-semibold tracking-tight">automatizacionesMSL</span>
          </Link>

          <Link
            href="/#contacto"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
          >
            Quiero ver si encaja
          </Link>
        </div>
      </header>

      {children}

      <Footer />
    </>
  );
}
