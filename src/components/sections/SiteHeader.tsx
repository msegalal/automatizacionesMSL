import Link from "next/link";
import { navItems } from "@/lib/site-content";

/* Nav en una sola linea, altura 64px, sin animacion de hover. */
export default function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-5 lg:px-8">
        <Link href="/" className="flex items-baseline gap-2 text-ink hover:text-accent">
          <span className="font-display text-xl font-semibold tracking-tight">
            automatizaciones
          </span>
          <span className="font-display text-xl font-normal italic text-accent">MSL</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="text-sm text-ink-soft hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contacto"
          className="border border-ink bg-ink px-4 py-2.5 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
        >
          Quiero ver si encaja
        </Link>
      </div>
    </header>
  );
}
