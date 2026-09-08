import Link from "next/link";
import { caseStudy } from "@/lib/site-content";
import ProductScreenshot from "@/components/ProductScreenshot";
import pipeline from "@/../public/producto-pipeline.jpg";

export default function CaseHighlight() {
  return (
    <section
      id="prueba"
      className="section-space case-highlight border-b border-rule"
    >
      <div className="site-container">
        <div className="case-heading">
          <div>
            <p className="eyebrow">04 / Una implantación real</p>
            <h2 className="case-wordmark">
              iReViajes<span>.</span>
            </h2>
          </div>
          <div>
            <p className="case-deck">{caseStudy.title}</p>
            <Link href="/casos/ireviajes" className="text-link">
              Explorar el caso completo <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <figure className="case-product">
          <div className="product-heading">
            <span>Del contacto al siguiente paso</span>
            <span>Vista de pipeline</span>
          </div>
          <ProductScreenshot
            src={pipeline}
            alt="Pipeline real del CRM de iReViajes: oportunidades organizadas por fase comercial. Datos inventados."
            sizes="(max-width: 1240px) 100vw, 1176px"
          />
          <figcaption className="product-disclosure">
            El pipeline agrupa cada oportunidad por fase. Datos inventados para
            esta captura.
          </figcaption>
        </figure>
        <dl className="case-outcomes">
          {caseStudy.blocks.map((block, index) => (
            <div key={block.label}>
              <dt>
                <span className="tabular">0{index + 1}</span>
                {block.label}
              </dt>
              <dd>{block.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
