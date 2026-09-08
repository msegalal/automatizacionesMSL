import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { caseStudySchema } from "@/lib/schema";
import { responseCommitment } from "@/lib/site-content";
import productoPipeline from "@/../public/producto-pipeline.jpg";
import casoWeb from "@/../public/caso-ireviajes-web.jpg";
import casoFormulario from "@/../public/caso-ireviajes-formulario.jpg";

export const metadata: Metadata = {
  title: "Caso iReViajes: primera implantacion | automatizacionesMSL",
  description:
    "Como una agencia de viajes de Barcelona ordeno la entrada de solicitudes y el seguimiento comercial. Punto de partida, que se hizo y que queda por delante.",
  alternates: { canonical: "/casos/ireviajes" },
  robots: { index: true, follow: true }
};

const situacion = [
  {
    title: "Las consultas entraban por muchos sitios",
    body: "Correo, telefono, formulario y mensajes sueltos. Cada via aterrizaba en un lugar distinto, asi que el contexto de cada solicitud habia que reconstruirlo a mano."
  },
  {
    title: "El seguimiento dependia de acordarse",
    body: "Sin una base comun, saber quien tenia que dar el siguiente paso y cuando exigia preguntar. Las oportunidades se enfriaban sin que nadie lo viera venir."
  },
  {
    title: "La propuesta costaba de presentar",
    body: "El trabajo estaba hecho, pero llegaba al cliente final en un formato que no ayudaba a decidir rapido."
  }
];

const intervencion = [
  {
    step: "01",
    title: "Ordenar la entrada",
    body: "Un unico punto donde aterrizan las solicitudes con el contexto ya recogido, en lugar de repartidas entre bandejas."
  },
  {
    step: "02",
    title: "Hacer visible el siguiente paso",
    body: "Cada oportunidad lleva estado y responsable, de forma que el seguimiento deja de depender de la memoria del equipo."
  },
  {
    step: "03",
    title: "Quitar los pasos repetitivos",
    body: "Automatizacion ligera solo donde ahorraba tiempo de verdad: avisos, entradas y primeros pasos."
  },
  {
    step: "04",
    title: "Mejorar como se presenta",
    body: "Web y formulario de cualificacion alineados para que la solicitud llegue completa y la propuesta se entienda antes."
  }
];

const antesDespues = [
  {
    antes: "Las solicitudes llegaban por correo, telefono, formulario y mensajes.",
    despues: "Entran por un unico punto con los datos que hacen falta.",
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

const marcoImagen =
  "overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/82 shadow-[0_18px_50px_rgba(8,19,33,0.05)]";
const pieImagen = "mt-3 text-sm leading-6 text-slate-500";
const tarjeta =
  "rounded-[2rem] border border-slate-200/80 bg-white/82 p-6 shadow-[0_18px_50px_rgba(8,19,33,0.05)] backdrop-blur-xl";

export default function CasoIreViajesPage() {
  return (
    <SiteChrome>
      <JsonLd data={caseStudySchema()} />
      <main id="contenido" className="px-6 pb-20 pt-12">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            crumbs={[
              { label: "Inicio", href: "/" },
              { label: "Caso iReViajes", href: "/casos/ireviajes" }
            ]}
          />

          <div className="mt-8 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-orange-500">
            caso real
          </p>
          <h1 className="mt-4 max-w-[22ch] text-balance text-4xl font-semibold leading-[1.04] text-slate-950 sm:text-5xl lg:text-6xl">
            La primera agencia que implanto la herramienta
          </h1>
          <p className="mt-6 max-w-[54ch] text-lg leading-8 text-slate-600">
            iReViajes es una agencia boutique de Barcelona con mas de treinta anos organizando
            incentivos, congresos y viajes de empresa.
          </p>

          <figure className="mt-14">
            <div className={marcoImagen}>
              <Image
                src={productoPipeline}
                alt="Tablero de pipeline del sistema con las fases entrada, propuesta y cierre, y una tarjeta por expediente con destino, agente y fecha de salida."
                placeholder="blur"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className={pieImagen}>
              El pipeline agrupa cada oportunidad por fase. Datos inventados para esta captura.
            </figcaption>
          </figure>

          <section className="mt-20 border-t border-slate-200 pt-12">
            <h2 className="max-w-[24ch] text-balance text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
              De donde se partia
            </h2>
            <dl className="mt-10 grid gap-6 md:grid-cols-3">
              {situacion.map((item) => (
                <div key={item.title} className={tarjeta}>
                  <dt className="text-xl font-semibold leading-snug text-slate-950">
                    {item.title}
                  </dt>
                  <dd className="mt-3 text-sm leading-7 text-slate-600">{item.body}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-20 border-t border-slate-200 pt-12">
            <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr]">
              <div>
                <h2 className="max-w-[20ch] text-balance text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Que se hizo
                </h2>
                <p className="mt-6 max-w-[46ch] text-base leading-8 text-slate-600">
                  El orden de las fases importa: primero se ordena la entrada, despues se hace
                  visible el seguimiento y solo al final se automatiza. Automatizar sobre una
                  operativa desordenada multiplica el desorden.
                </p>

                <figure className="mt-10">
                  <div className={marcoImagen}>
                    <Image
                      src={casoFormulario}
                      alt="Formulario de cualificacion de iReViajes con la seleccion de destinos y los campos del proyecto de viaje."
                      placeholder="blur"
                      sizes="(max-width: 1024px) 100vw, 460px"
                      className="block h-auto w-full"
                    />
                  </div>
                  <figcaption className={pieImagen}>
                    El formulario de cualificacion recoge la solicitud ya ordenada.
                  </figcaption>
                </figure>
              </div>

              <ol className="grid gap-4 self-start">
                {intervencion.map((item) => (
                  <li
                    key={item.step}
                    className="grid grid-cols-[2.5rem_1fr] gap-x-5 rounded-[1.7rem] border border-slate-200/80 bg-white/82 px-6 py-5 shadow-[0_14px_36px_rgba(8,19,33,0.04)] backdrop-blur-xl"
                  >
                    <span className="text-2xl font-semibold leading-none text-orange-500">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold leading-snug text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 max-w-[54ch] text-sm leading-7 text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mt-20 border-t border-slate-200 pt-12">
            <h2 className="max-w-[24ch] text-balance text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
              Antes y despues
            </h2>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[44rem] border-collapse text-left">
                <caption className="sr-only">
                  Comparativa del punto de partida y la situacion posterior
                </caption>
                <thead>
                  <tr>
                    {["Antes", "Despues", "Cambio observado"].map((encabezado) => (
                      <th
                        key={encabezado}
                        scope="col"
                        className="border-b-2 border-slate-950 pb-4 pr-6 text-lg font-semibold text-slate-950"
                      >
                        {encabezado}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {antesDespues.map((fila) => (
                    <tr key={fila.antes}>
                      <td className="border-b border-slate-200 py-5 pr-6 align-top text-sm leading-7 text-slate-600">
                        {fila.antes}
                      </td>
                      <td className="border-b border-slate-200 py-5 pr-6 align-top text-sm leading-7 text-slate-600">
                        {fila.despues}
                      </td>
                      <td className="border-b border-slate-200 py-5 pr-6 align-top text-sm leading-7 text-slate-950">
                        {fila.cambio}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 max-w-[70ch] text-sm leading-7 text-slate-500">
              La columna de cambio describe lo observado en la operativa. No incluye porcentajes
              porque todavia no hay una medicion con periodo y linea base que los respalde.
            </p>

            <figure className="mt-12">
              <div className={marcoImagen}>
                <Image
                  src={casoWeb}
                  alt="Portada de la web de iReViajes con el titular principal y los accesos a servicios, agencia y contacto."
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className={pieImagen}>
                La web publica, alineada con el formulario para que la solicitud llegue completa.
              </figcaption>
            </figure>
          </section>

          <section className="mt-20 border-t border-slate-200 pt-12">
            <h2 className="max-w-[26ch] text-balance text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
              Que significa esto para otra agencia
            </h2>
            <p className="mt-6 max-w-[62ch] text-base leading-8 text-slate-600">
              La base ya esta probada contra una operativa real, con sus excepciones y su forma de
              trabajar. Eso reduce el riesgo de la siguiente implantacion: no se parte de una demo,
              se parte de algo que ya sostiene el dia a dia de una agencia.
            </p>
            <p className="mt-4 max-w-[62ch] text-base leading-8 text-slate-600">
              Lo que cambia de una agencia a otra es donde esta el cuello de botella. Por eso el
              punto de partida se decide despues de mirar el caso, no antes.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
              >
                Quiero ver si encaja
              </Link>
              <Link
                href="/#servicios"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                Ver que incluye
              </Link>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Respondemos en {responseCommitment}.
            </p>
          </section>
        </div>
      </main>
    </SiteChrome>
  );
}
