import Link from "next/link";
import { defaultContactEmail, legalLinks, navItems } from "@/lib/site-content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-alt">
      <div className="mx-auto max-w-[1240px] px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="footer-brand font-display text-ink">
              automatizaciones<span className="italic text-accent">MSL</span>
            </p>
            <p className="mt-3 max-w-[52ch] text-sm leading-6 text-ink-soft">
              Herramienta, implantación y automatización para agencias de viajes que quieren más
              control y menos carga manual.
            </p>
            <a
              href={`mailto:${defaultContactEmail}`}
              className="mt-4 inline-block text-sm text-ink hover:text-accent"
            >
              {defaultContactEmail}
            </a>
          </div>

          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center whitespace-nowrap border border-ink bg-ink px-6 py-3.5 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
          >
            Solicitar diagnóstico
          </Link>
        </div>

        <nav aria-label="Secciones" className="mt-12 border-t border-rule-strong pt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={`/${item.href}`} className="text-xs text-ink-soft hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/casos/ireviajes" className="text-xs text-ink-soft hover:text-accent">
                Caso iReViajes
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-6 flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">
            {year} automatizacionesMSL. Todos los derechos reservados.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-ink-soft hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
