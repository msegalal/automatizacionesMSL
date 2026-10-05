import Link from "next/link";
import { legalIdentity } from "@/lib/legal";

const siteLinks = [
  { href: "/crm-para-agencias-de-viajes", label: "CRM para agencias de viajes" },
  { href: "/automatizacion-para-agencias-de-viajes", label: "Automatización para agencias" },
  { href: "/voz-y-chat-para-negocios", label: "Voz y chat" },
  { href: "/aplicaciones-a-medida-para-negocios", label: "Aplicaciones a medida" }
];

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/cookies", label: "Política de cookies" }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/60 bg-[#efe6dc] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-950">automatizacionesMSL</p>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              CRM, automatizaciones, voz, chat y aplicaciones a medida. Nos especializamos en
              agencias de viajes y adaptamos cada proyecto a la forma de trabajar de cada negocio.
            </p>
          </div>
          <Link
            href="/#contacto"
            className="text-sm font-semibold text-slate-950 transition-colors hover:text-orange-500"
          >
            Quiero ver si encaja
          </Link>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Enlaces del sitio">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {[...siteLinks, ...legalLinks].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-orange-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-slate-500">
            {year} {legalIdentity.denominacion ?? "automatizacionesMSL"}
          </p>
        </div>
      </div>
    </footer>
  );
}
