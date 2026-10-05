import Link from "next/link";
import { trustPoints } from "@/lib/site-content";

export default function TrustGrid() {
  return (
    <section id="personalizacion" className="scroll-mt-24 px-6 pb-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2.3rem] bg-slate-950 px-6 py-8 text-white shadow-[0_24px_80px_rgba(8,19,33,0.14)] md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-300">
              cómo trabajamos
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold md:text-5xl">
              Una solución debe encajar en la forma real de trabajar de cada negocio.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
              Las agencias de viajes son nuestra especialidad, aunque cada proyecto empieza por
              entender su propio proceso: cómo llegan las consultas, qué tareas hace el equipo y
              dónde se pierde contexto. Después concretamos si encaja un CRM, una automatización,
              una solución de voz o chat o una aplicación a medida.
            </p>

            <ul className="mt-8 grid gap-3 md:grid-cols-3">
              {[
                "Entendemos la operativa antes de proponer una solución.",
                "Acordamos el alcance y las dependencias técnicas.",
                "No damos por hechas funciones, canales ni resultados."
              ].map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-[1.6rem] border border-white/12 bg-white/7 px-4 py-4 text-sm leading-7 text-white/82"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#proceso"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:text-orange-500"
              >
                Ver el proceso
              </Link>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-orange-300 hover:text-orange-300"
              >
                Explorar los servicios
              </a>
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            {trustPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.9rem] border border-white/80 bg-white/72 px-5 py-6 shadow-[0_18px_50px_rgba(8,19,33,0.07)] backdrop-blur-xl"
              >
                <p className="text-5xl font-semibold leading-none text-slate-200">{item.value}</p>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
