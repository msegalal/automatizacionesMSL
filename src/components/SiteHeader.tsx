import Link from "next/link";

const serviceLinks = [
  { href: "/crm-para-agencias-de-viajes", label: "CRM" },
  { href: "/automatizacion-para-agencias-de-viajes", label: "Automatización" },
  { href: "/bots-para-agencias-de-viajes", label: "Bots" }
];

const sectionLinks = [
  { id: "proceso", label: "Proceso" },
  { id: "faq", label: "Preguntas" }
];

export default function SiteHeader({
  isHome = false,
  currentPath
}: {
  isHome?: boolean;
  currentPath?: string;
}) {
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-[1.4rem] border border-slate-200/80 bg-[#fffdf9]/90 px-3 py-2.5 shadow-[0_12px_36px_rgba(8,19,33,0.06)] backdrop-blur-xl sm:gap-5 sm:px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-slate-950 sm:gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-300/60 bg-orange-100 text-xs font-semibold text-orange-700 sm:h-11 sm:w-11 sm:text-sm">
            MSL
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">automatizacionesMSL</span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {serviceLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={currentPath === item.href ? "page" : undefined}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
            >
              {item.label}
            </Link>
          ))}
          {sectionLinks.map((item) => (
            <Link
              key={item.id}
              href={sectionHref(item.id)}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={sectionHref("contacto")}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 sm:px-5 sm:text-sm"
        >
          <span className="sm:hidden">Contactar</span>
          <span className="hidden sm:inline">Quiero ver si encaja</span>
        </Link>
      </div>
    </header>
  );
}
