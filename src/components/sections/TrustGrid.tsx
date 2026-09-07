import Image from "next/image";
import Link from "next/link";
import casoFormulario from "@/../public/caso-ireviajes-formulario.jpg";
import { caseStudy, trustPoints } from "@/lib/site-content";

/* Familia de layout: declaracion asimetrica mas imagen y rejilla 2x2 de hechos. */
export default function TrustGrid() {
  return (
    <section id="prueba" className="scroll-mt-4 border-b border-rule bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {caseStudy.kicker}
            </p>
            <h2 className="mt-6 max-w-[18ch] text-balance font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              {caseStudy.title}
            </h2>
            <p className="mt-6 max-w-[54ch] text-lg leading-8 text-ink-soft">{caseStudy.body}</p>

            <ul className="mt-8 max-w-[46ch] divide-y divide-rule border-y border-rule">
              {caseStudy.bullets.map((bullet) => (
                <li key={bullet} className="py-3.5 text-sm leading-6 text-ink">
                  {bullet}
                </li>
              ))}
            </ul>

            <Link
              href="#servicios"
              className="mt-8 inline-flex items-center border border-rule-strong px-6 py-3.5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
            >
              Ver que incluye
            </Link>
          </div>

          <div>
            <figure>
              <div className="border border-rule-strong bg-canvas">
                <Image
                  src={casoFormulario}
                  alt="Formulario de cualificacion de iReViajes, con la seleccion de destinos y los campos del proyecto de viaje."
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-ink-faint">
                El formulario de cualificacion recoge la solicitud ya ordenada.
              </figcaption>
            </figure>

            <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <article key={item.title} className="border-t border-rule-strong pt-5">
                  <p className="tabular font-display text-sm text-accent">{item.value}</p>
                  <h3 className="mt-3 font-display text-xl leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-ink-soft">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
