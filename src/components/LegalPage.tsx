import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "@/components/sections/SiteHeader";
import Footer from "@/components/sections/Footer";

interface LegalPageProps {
  title: string;
  updatedAt: string;
  children: ReactNode;
}

export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="border-b border-rule">
        <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-[70ch]">
            <h1 className="text-balance font-display text-4xl leading-tight text-ink md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-ink-faint">Ultima actualizacion: {updatedAt}</p>

            <div className="legal-body mt-12">{children}</div>

            <Link
              href="/"
              className="mt-14 inline-flex items-center border border-rule-strong px-6 py-3.5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
