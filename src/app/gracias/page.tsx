import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/sections/SiteHeader";
import Footer from "@/components/sections/Footer";
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
    body: "Miramos lo que nos has contado sobre captacion, seguimiento, orden interno o carga manual."
  },
  {
    step: "02",
    title: "Te decimos si encaja",
    body: `Recibes una respuesta en ${responseCommitment} con nuestra lectura del caso y el punto de partida que tendria mas sentido.`
  },
  {
    step: "03",
    title: "Si encaja, propuesta",
    body: "Concretamos si hablamos de herramienta, implantacion, automatizacion o pack completo, y con que alcance."
  }
];

export default function GraciasPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="border-b border-rule">
        <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-20">
          <Breadcrumbs
            crumbs={[
              { label: "Inicio", href: "/" },
              { label: "Solicitud recibida", href: "/gracias" }
            ]}
          />

          <div className="mt-10 max-w-[46rem]">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Solicitud recibida
            </p>
            <h1 className="mt-6 max-w-[20ch] text-balance font-display text-4xl leading-[1.08] text-ink md:text-5xl">
              Gracias, ya la tenemos
            </h1>
            <p className="mt-6 max-w-[54ch] text-lg leading-8 text-ink-soft">
              Te respondemos en {responseCommitment}. Si prefieres adelantarnos algo, puedes
              escribirnos directamente a{" "}
              <a
                href={`mailto:${defaultContactEmail}`}
                className="text-accent underline underline-offset-2"
              >
                {defaultContactEmail}
              </a>
              .
            </p>
          </div>

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto] lg:gap-8">
            {nextSteps.map((item) => (
              <li
                key={item.step}
                className="border-t-2 border-ink pt-5 lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-0"
              >
                <span className="tabular font-display text-sm text-accent">{item.step}</span>
                <h2 className="mt-3 font-display text-xl leading-snug text-ink">{item.title}</h2>
                <p className="mt-2.5 text-sm leading-6 text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-rule-strong pt-8">
            <p className="max-w-[54ch] text-base leading-7 text-ink-soft">
              Mientras tanto, puedes ver con detalle la primera implantacion real.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/casos/ireviajes"
                className="inline-flex items-center justify-center whitespace-nowrap border border-ink bg-ink px-7 py-4 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
              >
                Ver el caso de iReViajes
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center whitespace-nowrap border border-rule-strong px-7 py-4 text-sm font-medium text-ink hover:border-accent hover:text-accent"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
