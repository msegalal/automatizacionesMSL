import Link from "next/link";
import { navItems } from "@/lib/site-content";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="automatizacionesMSL, inicio"
        >
          <span>automatizaciones</span>
          <em>MSL</em>
        </Link>
        <nav aria-label="Principal" className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={`/${item.href}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#contacto" className="header-contact">
          Hablemos <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
