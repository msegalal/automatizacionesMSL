import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Breadcrumbs from "@/components/Breadcrumbs";
import { defaultContactEmail, responseCommitment } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Solicitud recibida | automatizacionesMSL",
  description:
    "Hemos recibido tu solicitud. Te contamos que pasa ahora y en cuanto tiempo tendras respuesta.",
  alternates: { canonical: "/gracias" },
  /* Una pagina de confirmacion no debe entrar en el indice ni salir en resultados. */
  robots: { index: false, follow: true }
};

const nextSteps = [
  {
    step: "01",
    title: "Leemos tu contexto",
    body: "Revisamos lo que nos has contado sobre solicitudes, seguimiento y tareas repetitivas."
  },
  {
    step: "02",
    title: "Te decimos si encaja",
    body: `Recibirás una respuesta en ${responseCommitment} con nuestra lectura del caso y el punto de partida que tenga más sentido.`
  },
  {
    step: "03",
    title: "Si encaja, propuesta",
    body: "Concretamos si hablamos de CRM, automatización, voz y chat o una aplicación a medida."
  }
];

export default function GraciasPage() {
  return (
    <SiteChrome>
      <main id="contenido" className="px-6 pb-20 pt-12">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs
            crumbs={[
              { label: "Inicio", href: "/" },
              { label: "Solicitud recibida", href: "/gracias" }
            ]}
          />

          <div className="mt-8 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-orange-500">
            solicitud recibida
          </p>
          <h1 className="mt-4 max-w-[20ch] text-balance text-4xl font-semibold leading-[1.06] text-slate-950 sm:text-5xl">
            Gracias, ya la tenemos
          </h1>
          <p className="mt-5 max-w-[54ch] text-lg leading-8 text-slate-600">
            Te respondemos en {responseCommitment}. Si prefieres adelantarnos algo, puedes
            escribirnos directamente a{" "}
            <a
              href={`mailto:${defaultContactEmail}`}
              className="font-semibold text-slate-950 underline underline-offset-2 hover:text-orange-500"
            >
              {defaultContactEmail}
            </a>
            .
          </p>

          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {nextSteps.map((item) => (
              <li
                key={item.step}
                className="rounded-[2rem] border border-slate-200/80 bg-white/82 p-6 shadow-[0_18px_50px_rgba(8,19,33,0.05)] backdrop-blur-xl"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-500">
                  {item.step}
                </span>
                <h2 className="mt-4 text-xl font-semibold leading-snug text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-slate-200 pt-8">
            <p className="max-w-[54ch] text-base leading-8 text-slate-600">
              Mientras tanto, puedes consultar las soluciones para agencias de viajes y otros negocios.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/crm-para-agencias-de-viajes"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
              >
                CRM para agencias de viajes
              </Link>
              <Link
                href="/automatizacion-para-agencias-de-viajes"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                Ver automatización
              </Link>
              <Link
                href="/voz-y-chat-para-negocios"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                Voz y chat
              </Link>
              <Link
                href="/aplicaciones-a-medida-para-negocios"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                Aplicaciones a medida
              </Link>
            </div>
          </div>
        </div>
      </main>
    </SiteChrome>
  );
}
