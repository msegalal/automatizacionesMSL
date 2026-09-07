import Link from "next/link";
import SiteHeader from "@/components/sections/SiteHeader";
import Footer from "@/components/sections/Footer";
import { navItems } from "@/lib/site-content";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="border-b border-rule">
        <div className="mx-auto max-w-[1240px] px-5 py-24 lg:px-8 lg:py-32">
          <p className="tabular font-display text-sm text-accent">404</p>
          <h1 className="mt-5 max-w-[20ch] text-balance font-display text-4xl leading-tight text-ink md:text-5xl">
            Esta pagina no existe
          </h1>
          <p className="mt-5 max-w-[56ch] text-lg leading-8 text-ink-soft">
            Puede que el enlace este mal copiado o que el contenido haya cambiado de sitio.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/"
              className="inline-flex items-center justify-center whitespace-nowrap border border-ink bg-ink px-7 py-4 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
            >
              Volver al inicio
            </Link>
            <Link href="/#contacto"
              className="inline-flex items-center justify-center whitespace-nowrap border border-rule-strong px-7 py-4 text-sm font-medium text-ink hover:border-accent hover:text-accent"
            >
              Solicitar diagnostico
            </Link>
          </div>

          <nav aria-label="Secciones" className="mt-14 border-t border-rule-strong pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={`/${item.href}`} className="text-sm text-ink-soft hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
