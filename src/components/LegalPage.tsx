import Link from "next/link";
import type { ReactNode } from "react";
import SiteChrome from "@/components/SiteChrome";
import Breadcrumbs from "@/components/Breadcrumbs";

interface LegalPageProps {
  title: string;
  href: string;
  updatedAt: string;
  children: ReactNode;
}

/* Envoltorio comun de aviso legal, privacidad y cookies. */
export default function LegalPage({ title, href, updatedAt, children }: LegalPageProps) {
  return (
    <SiteChrome>
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
    </SiteChrome>
  );
}
