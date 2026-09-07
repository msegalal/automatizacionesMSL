import Image from "next/image";
import Link from "next/link";
import { caseStudy } from "@/lib/site-content";
import pipeline from "@/../public/producto-pipeline.jpg";

/* Familia de layout: declaracion a la izquierda, evidencia a la derecha. */
export default function CaseHighlight() {
  return (
    <section id="prueba" className="scroll-mt-4 border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {caseStudy.kicker}
            </p>
            <h2 className="mt-6 max-w-[20ch] text-balance font-display text-3xl leading-[1.12] text-ink md:text-4xl">
              {caseStudy.title}
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-7 text-ink-soft">
              {caseStudy.body}
            </p>

            <dl className="mt-8 border-t border-rule-strong">
              {caseStudy.blocks.map((block) => (
                <div key={block.label} className="border-b border-rule py-5">
                  <dt className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                    {block.label}
                  </dt>
                  <dd className="mt-2 max-w-[48ch] text-sm leading-6 text-ink-soft">
                    {block.body}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/casos/ireviajes"
              className="mt-8 inline-flex items-center border border-ink bg-ink px-6 py-3.5 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
            >
              Ver como se aplicaria a mi agencia
            </Link>
          </div>

          <figure>
            <div className="border border-rule-strong bg-canvas">
              <Image
                src={pipeline}
                alt="Tablero de pipeline del sistema con las fases entrada, propuesta y cierre, y una tarjeta por expediente con destino, agente y fecha de salida."
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 620px"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-ink-faint">
              El pipeline agrupa cada oportunidad por fase. Datos inventados para esta captura.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
