import Link from "next/link";
import { hero } from "@/lib/site-content";
import ProductScreenshot from "@/components/ProductScreenshot";
import OperationalPulse from "@/components/OperationalPulse";
import producto from "@/../public/producto-expedientes.jpg";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="site-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-mark" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 className="hero-title">
              <span>{hero.titleLead}</span>
              <em>{hero.titleAccent}</em>
            </h1>
            <p className="hero-description">{hero.subtitle}</p>
            <div className="hero-actions">
              <Link href="#contacto" className="button-primary">
                Ver si encaja en mi agencia
              </Link>
              <Link href="/casos/ireviajes" className="text-link">
                Conocer el caso iReViajes <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <p className="hero-microcopy">{hero.microcopy}</p>
          </div>
          <figure className="hero-product">
            <div className="product-heading">
              <span>Dentro de la herramienta</span>
              <span className="tabular">01 / Expedientes</span>
            </div>
            <div className="hero-image-wrap">
              <ProductScreenshot
                src={producto}
                alt="Listado real de expedientes del CRM con destino, fechas, documentación, fase comercial y agente asignado. Datos inventados."
                priority
              />
            </div>
            <figcaption className="hero-product-caption">
              <p className="product-caption-title">
                El contexto, en un mismo lugar.
              </p>
              <ul className="product-annotations">
                {hero.annotations.map((note, index) => (
                  <li key={note}>
                    <span className="tabular">0{index + 1}</span>
                    {note}
                  </li>
                ))}
              </ul>
              <p className="product-disclosure">
                Captura real del producto. Datos inventados.
              </p>
            </figcaption>
            <OperationalPulse />
          </figure>
        </div>
        <div className="hero-footnote">
          <span>Pensado para la operativa de una agencia</span>
          <span>Entrada · Seguimiento · Propuesta</span>
        </div>
      </div>
    </section>
  );
}
