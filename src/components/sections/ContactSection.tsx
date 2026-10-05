import ContactForm from "@/components/sections/ContactForm";
import { defaultContactEmail } from "@/lib/site-content";

const discussionPoints = [
  { label: "Solicitudes", body: "Cómo llegan hoy las consultas y quién las atiende." },
  { label: "Seguimiento", body: "Qué necesita ver y recordar el equipo." },
  { label: "Tareas", body: "Qué pasos se repiten en la operativa." },
  { label: "Herramientas", body: "Si hace falta CRM, voz y chat o una aplicación propia." }
];

export default function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-24 px-4 pb-20 pt-12 sm:px-6 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="relative isolate overflow-hidden rounded-[2.3rem] bg-slate-950 px-6 py-8 text-white shadow-[0_24px_80px_rgba(8,19,33,0.13)] sm:px-8 sm:py-10">
          <div aria-hidden="true" className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-orange-300/20" />
          <div aria-hidden="true" className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-orange-400/20 blur-3xl" />
          <div className="relative">
            <div className="mb-6 h-0.5 w-20 bg-gradient-to-r from-orange-400 to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
              Hablemos de tu operativa
            </p>
            <h2 className="mt-4 max-w-[18ch] text-balance text-4xl font-semibold leading-tight text-white md:text-5xl">
              ¿Qué parte del trabajo quieres ordenar primero?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
              Cuéntanos cómo funciona hoy el proceso. Revisaremos contigo si encaja un CRM, una
              automatización, atención por voz o chat, una aplicación a medida o una combinación.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {discussionPoints.map((item, index) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.06] px-4 py-3.5"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-400 text-[10px] font-bold text-slate-950">
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{item.label}</span>
                    <span className="mt-1 block text-sm leading-6 text-white/65">{item.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${defaultContactEmail}`}
              className="mt-6 flex min-h-14 items-center justify-between gap-4 rounded-[1.25rem] border border-white/15 bg-white/[0.08] px-4 py-3 transition-colors hover:border-orange-300/60 hover:bg-white/[0.12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
            >
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                  También puedes escribirnos
                </span>
                <span className="mt-1 block text-sm font-medium text-white">{defaultContactEmail}</span>
              </span>
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-white/70">
                <path d="M4.5 10h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="rounded-[2.3rem] border border-white/80 bg-white/86 px-5 py-6 shadow-[0_24px_80px_rgba(8,19,33,0.09)] backdrop-blur-xl sm:px-8 sm:py-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
