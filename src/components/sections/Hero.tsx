import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/site-content";
import producto from "@/../public/producto-expedientes.jpg";

/*
  Familia de layout: manifiesto mas evidencia de producto.
  La imagen es una captura real del sistema con datos inventados,
  no una fotografia de viaje: debe demostrar la operativa, no decorar.
*/
export default function Hero() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-5 pb-16 pt-14 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="max-w-[46rem]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 max-w-[19ch] text-balance font-display text-[clamp(2.25rem,5.2vw,4rem)] leading-[1.05] text-ink">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-[56ch] text-lg leading-8 text-ink-soft">{hero.subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center whitespace-nowrap border border-ink bg-ink px-7 py-4 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
            >
              Solicitar diagnostico
            </Link>
            <Link
              href="/casos/ireviajes"
              className="inline-flex items-center justify-center whitespace-nowrap border border-rule-strong px-7 py-4 text-sm font-medium text-ink hover:border-accent hover:text-accent"
            >
              Ver el caso iReViajes
            </Link>
          </div>

          <p className="mt-4 text-sm leading-6 text-ink-faint">{hero.microcopy}</p>
        </div>

        <figure className="mt-14 lg:mt-16">
          <div className="border border-rule-strong bg-canvas">
            <Image
              src={producto}
              alt="Listado de expedientes del sistema: numero de expediente, destino, fecha de salida, numero de participantes, estado de la documentacion, fase comercial y agente asignado."
              placeholder="blur"
              priority
              sizes="(max-width: 1240px) 100vw, 1176px"
              className="block h-auto w-full"
            />
          </div>

          <figcaption className="mt-4">
            <p className="text-sm leading-6 text-ink-faint">
              Vista de expedientes del sistema. Datos inventados para esta captura.
            </p>
            <ul className="mt-4 grid gap-3 border-t border-rule pt-4 sm:grid-cols-3">
              {hero.annotations.map((note, index) => (
                <li key={note} className="flex gap-3 text-sm leading-6 text-ink-soft">
                  <span className="tabular shrink-0 font-display text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
