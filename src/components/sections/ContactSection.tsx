import ContactForm from "@/components/sections/ContactForm";
import { defaultContactEmail } from "@/lib/site-content";

export default function ContactSection() {
  return (
    <section id="contacto" className="px-6 pb-24 pt-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2.4rem] bg-slate-950 px-6 py-8 text-white md:px-8 md:py-10">
          <div className="mb-6 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
            propuesta
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold text-white md:text-5xl">
            Pide una propuesta para tu agencia y te diremos por donde empezar.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
            Si encaja, bajamos el mensaje, la web y la parte operativa a una propuesta clara. Y
            si aun no tienes integraciones activas, el contacto sigue funcionando por email sin
            perder leads.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${defaultContactEmail}`}
              className="block rounded-[1.5rem] border border-white/12 bg-white/7 px-4 py-4 transition-colors hover:bg-white/12"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                Email
              </p>
              <p className="mt-2 text-sm leading-6 text-white/84">{defaultContactEmail}</p>
            </a>
            <div className="rounded-[1.5rem] border border-white/12 bg-white/7 px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                Que revisamos
              </p>
              <p className="mt-2 text-sm leading-6 text-white/84">
                Volumen, seguimiento, tareas repetitivas y forma de presentar la herramienta.
              </p>
            </div>
            <a
              href="#contacto"
              className="block rounded-[1.5rem] border border-white/12 bg-white/7 px-4 py-4 transition-colors hover:bg-white/12"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                Siguiente paso
              </p>
              <p className="mt-2 text-sm leading-6 text-white/84">
                Sales de aqui con una propuesta mas clara: web, herramienta, automatizacion o pack
                completo.
              </p>
            </a>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-white/75 bg-white/78 px-5 py-6 shadow-[0_24px_80px_rgba(8,19,33,0.1)] backdrop-blur-xl md:px-8 md:py-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
