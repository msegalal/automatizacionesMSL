import Image from "next/image";
import Link from "next/link";
import casoWeb from "@/../public/caso-ireviajes-web.jpg";

/*
  Familia de layout: manifiesto a la izquierda mas banda de imagen a todo el ancho.
  Disciplina de hero: 4 elementos de texto como maximo
  (rotulo, titular, subtexto, CTAs). Las fricciones y la prueba
  social viven en secciones propias, no aqui dentro.
*/
export default function Hero() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-5 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="max-w-[44rem]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Para agencias de viajes
          </p>

          <h1 className="mt-6 max-w-[22ch] text-balance font-display text-4xl leading-[1.06] text-ink md:text-5xl lg:text-6xl">
            Menos tareas manuales y mejor seguimiento
          </h1>

          <p className="mt-6 max-w-[52ch] text-lg leading-8 text-ink-soft">
            Herramienta, implantacion y automatizacion util. La primera implantacion ya
            funciona en iReViajes.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center whitespace-nowrap border border-ink bg-ink px-7 py-4 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
            >
              Quiero ver si encaja
            </Link>
            <Link
              href="#prueba"
              className="inline-flex items-center justify-center whitespace-nowrap border border-rule-strong px-7 py-4 text-sm font-medium text-ink hover:border-accent hover:text-accent"
            >
              Ver el caso real
            </Link>
          </div>
        </div>

        <figure className="mt-16 lg:mt-20">
          <div className="border border-rule-strong">
            <Image
              src={casoWeb}
              alt="Portada de la web de iReViajes, con el buscador de proyecto y los accesos a servicios, agencia y contacto."
              placeholder="blur"
              priority
              sizes="(max-width: 1240px) 100vw, 1176px"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-sm leading-6 text-ink-faint">
            La web de iReViajes, la primera agencia que implanto esta solucion.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
