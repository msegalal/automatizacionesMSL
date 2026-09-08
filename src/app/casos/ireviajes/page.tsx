import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/sections/SiteHeader";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { caseStudySchema } from "@/lib/schema";
import { responseCommitment } from "@/lib/site-content";
import ProductScreenshot from "@/components/ProductScreenshot";
import productoPipeline from "@/../public/producto-pipeline.jpg";
import casoWeb from "@/../public/caso-ireviajes-web.jpg";
import casoFormulario from "@/../public/caso-ireviajes-formulario.jpg";

export const metadata: Metadata = {
  title: "Caso iReViajes: primera implantación | automatizacionesMSL",
  description:
    "Como una agencia de viajes de Barcelona ordeno la entrada de solicitudes y el seguimiento comercial. Punto de partida, que se hizo y que queda por delante.",
  alternates: { canonical: "/casos/ireviajes" },
  robots: { index: true, follow: true }
};

const situacion = [
  {
    title: "Las consultas entraban por muchos sitios",
    body: "Correo, teléfono, formulario y mensajes sueltos. Cada via aterrizaba en un lugar distinto, asi que el contexto de cada solicitud había que reconstruirlo a mano."
  },
  {
    title: "El seguimiento dependía de acordarse",
    body: "Sin una base común, saber quien tenia que dar el siguiente paso y cuando exigia preguntar. Las oportunidades se enfriaban sin que nadie lo viera venir."
  },
  {
    title: "La propuesta costaba de presentar",
    body: "El trabajo estaba hecho, pero llegaba al cliente final en un formato que no ayudaba a decidir rápido."
  }
];

const intervencion = [
  {
    step: "01",
    title: "Ordenar la entrada",
    body: "Un único punto donde aterrizan las solicitudes con el contexto ya recogido, en lugar de repartidas entre bandejas."
  },
  {
    step: "02",
    title: "Hacer visible el siguiente paso",
    body: "Cada oportunidad lleva estado y responsable, de forma que el seguimiento deja de depender de la memoria del equipo."
  },
  {
    step: "03",
    title: "Quitar los pasos repetitivos",
    body: "Automatización ligera solo donde ahorraba tiempo de verdad: avisos, entradas y primeros pasos."
  },
  {
    step: "04",
    title: "Mejorar como se presenta",
    body: "Web y formulario de cualificación alineados para que la solicitud llegue completa y la propuesta se entienda antes."
  }
];

const antesDespues = [
  {
    antes: "Las solicitudes llegaban por correo, teléfono, formulario y mensajes.",
    despues: "Entran por un único punto con los datos que hacen falta.",
    cambio: "Deja de reconstruirse el contexto a mano."
  },
  {
    antes: "Saber quien daba el siguiente paso exigia preguntar al equipo.",
    despues: "Cada oportunidad muestra responsable, fase y accion pendiente.",
    cambio: "El seguimiento no depende de la memoria."
  },
  {
    antes: "La propuesta llegaba tarde o sin todo el contexto.",
    despues: "El expediente llega completo al momento de preparar la propuesta.",
    cambio: "Menos idas y venidas antes de presentar."
  }
];

export default function CasoIreViajesPage() {
  return (
    <>
      <JsonLd data={caseStudySchema()} />
      <SiteHeader />
      <main id="contenido" className="case-page border-b border-rule">
        <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-20">
          <Breadcrumbs
            crumbs={[
              { label: "Inicio", href: "/" },
              { label: "Caso iReViajes", href: "/casos/ireviajes" }
            ]}
          />

          <div className="mt-10 max-w-[46rem]">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Caso real
            </p>
            <h1 className="mt-6 max-w-[22ch] text-balance font-display text-4xl leading-[1.06] text-ink md:text-5xl lg:text-6xl">
              iReViajes.
              Una operativa con el siguiente paso a la vista.
            </h1>
            <p className="mt-6 max-w-[54ch] text-lg leading-8 text-ink-soft">
              iReViajes es una agencia boutique de Barcelona con más de treinta años organizando
              incentivos, congresos y viajes de empresa.
            </p>
          </div>

          <figure className="mt-14 lg:mt-16">
            <div className="border border-rule-strong">
              <ProductScreenshot
                src={productoPipeline}
                alt="Tablero de pipeline del sistema con las fases entrada, propuesta y cierre, y una tarjeta por expediente con destino, agente y fecha de salida."
                priority
                sizes="(max-width: 1240px) 100vw, 1176px"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-ink-faint">
              El pipeline agrupa cada oportunidad por fase. Datos inventados para esta captura.
            </figcaption>
          </figure>

          <section className="mt-20 border-t border-rule-strong pt-12">
            <h2 className="max-w-[24ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
              De donde se partía
            </h2>
            <dl className="mt-10 grid gap-x-16 gap-y-9 md:grid-cols-3">
              {situacion.map((item) => (
                <div key={item.title} className="border-t border-rule pt-5">
                  <dt className="max-w-[30ch] font-display text-xl leading-snug text-ink">
                    {item.title}
                  </dt>
                  <dd className="mt-3 text-sm leading-6 text-ink-soft">{item.body}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-20 border-t border-rule-strong pt-12">
            <div className="grid gap-14 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
              <div>
                <h2 className="max-w-[20ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
                  Qué se hizo
                </h2>
                <p className="mt-6 max-w-[46ch] text-base leading-7 text-ink-soft">
                  El orden de las fases importa: primero se ordena la entrada, despues se hace
                  visible el seguimiento y solo al final se automatiza. Automatizar sobre una
                  operativa desordenada multiplica el desorden.
                </p>

                <figure className="mt-10">
                  <div className="border border-rule-strong bg-canvas">
                    <Image
                      src={casoFormulario}
                      alt="Formulario de cualificación de iReViajes con la seleccion de destinos y los campos del proyecto de viaje."
                      placeholder="blur"
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="block h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm leading-6 text-ink-faint">
                    El formulario de cualificación recoge la solicitud ya ordenada.
                  </figcaption>
                </figure>
              </div>

              <ol className="border-t border-rule-strong">
                {intervencion.map((item) => (
                  <li
                    key={item.step}
                    className="grid grid-cols-[3rem_1fr] gap-x-5 border-b border-rule py-7"
                  >
                    <span className="tabular font-display text-2xl leading-none text-accent">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-snug text-ink">{item.title}</h3>
                      <p className="mt-2.5 max-w-[54ch] text-sm leading-6 text-ink-soft">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>


          <section className="mt-20 border-t border-rule-strong pt-12">
            <h2 className="max-w-[24ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
              Antes y después
            </h2>
            <div className="case-comparison mt-10 overflow-x-auto">
              <table className="w-full min-w-[44rem] border-collapse text-left">
                <caption className="sr-only">
                  Comparativa del punto de partida y la situacion posterior
                </caption>
                <thead>
                  <tr>
                    {["Antes", "Después", "Cambio observado"].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="border-b-2 border-ink pb-4 pr-6 font-display text-lg font-medium text-ink"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {antesDespues.map((fila) => (
                    <tr key={fila.antes}>
                      <td className="border-b border-rule py-5 pr-6 align-top text-sm leading-6 text-ink-soft">
                        {fila.antes}
                      </td>
                      <td className="border-b border-rule py-5 pr-6 align-top text-sm leading-6 text-ink-soft">
                        {fila.despues}
                      </td>
                      <td className="border-b border-rule py-5 pr-6 align-top text-sm leading-6 text-ink">
                        {fila.cambio}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 max-w-[70ch] text-sm leading-6 text-ink-soft">
              La columna de cambio describe lo observado en la operativa. No incluye porcentajes
              porque todavía no hay una medición con periodo y línea base que los respalde.
            </p>

            <figure className="mt-12">
              <div className="border border-rule-strong">
                <Image
                  src={casoWeb}
                  alt="Portada de la web de iReViajes con el titular principal y los accesos a servicios, agencia y contacto."
                  placeholder="blur"
                  sizes="(max-width: 1240px) 100vw, 1176px"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-ink-faint">
                La web publica, alineada con el formulario para que la solicitud llegue completa.
              </figcaption>
            </figure>
          </section>

          <section className="mt-20 border-t border-rule-strong pt-12">
            <h2 className="max-w-[26ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
              Qué significa esto para otra agencia
            </h2>
            <p className="mt-6 max-w-[62ch] text-base leading-7 text-ink-soft">
              La base ya esta probada contra una operativa real, con sus excepciones y su forma
              de trabajar. Eso reduce el riesgo de la siguiente implantación: no se parte de una
              demo, se parte de algo que ya sostiene el dia a dia de una agencia.
            </p>
            <p className="mt-4 max-w-[62ch] text-base leading-7 text-ink-soft">
              Lo que cambia de una agencia a otra es donde esta el cuello de botella. Por eso el
              punto de partida se decide despues de mirar el caso, no antes.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center whitespace-nowrap border border-ink bg-ink px-7 py-4 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
              >
                Quiero ver si encaja
              </Link>
              <Link
                href="/#servicios"
                className="inline-flex items-center justify-center whitespace-nowrap border border-rule-strong px-7 py-4 text-sm font-medium text-ink hover:border-accent hover:text-accent"
              >
                Ver que incluye
              </Link>
            </div>
            <p className="mt-4 text-sm leading-6 text-ink-faint">
              Respondemos en {responseCommitment}.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
