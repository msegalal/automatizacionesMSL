import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

interface LegalPageProps {
  title: string;
  href: string;
  updatedAt: string;
  children: ReactNode;
}

/*
 * Envoltorio comun de aviso legal, privacidad y cookies.
 * Cabecera propia y reducida: en una pagina legal no hay ancla de
 * seccion a la que saltar, asi que la navegacion de la portada no sirve.
 */
export default function LegalPage({ title, href, updatedAt, children }: LegalPageProps) {
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

      <main id="contenido" className="px-6 pb-20 pt-12">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs
            crumbs={[
              { label: "Inicio", href: "/" },
              { label: title, href }
            ]}
          />

          <div className="mt-8 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-orange-500">
            Informacion y transparencia
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.06] text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-slate-500">Ultima actualizacion: {updatedAt}</p>

          <div className="legal-body mt-12">{children}</div>

          <Link
            href="/"
            className="mt-14 inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500"
          >
            Volver al inicio
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
