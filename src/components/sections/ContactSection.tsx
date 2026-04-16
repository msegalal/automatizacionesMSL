import ContactForm from "@/components/sections/ContactForm";

export default function ContactSection() {
  return (
    <section id="contacto" className="px-6 pb-24 pt-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2.4rem] bg-slate-950 px-6 py-8 text-white md:px-8 md:py-10">
          <div className="mb-6 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
            siguiente paso
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold text-white md:text-5xl">
            Si ya hay producto real, toca construir la capa comercial que lo hace escalable.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
            Puedo ayudarte a convertir una solución validada en una oferta clara, una web
            que la venda y un flujo operativo que no dependa del caos interno.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-[1.5rem] border border-white/12 bg-white/7 px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                Email
              </p>
              <p className="mt-2 text-sm leading-6 text-white/84">hola@automatizacionesmsl.com</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/12 bg-white/7 px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                Enfoque
              </p>
              <p className="mt-2 text-sm leading-6 text-white/84">
                Producto, web comercial, automatización y hoja de ruta.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/12 bg-white/7 px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                Respuesta
              </p>
              <p className="mt-2 text-sm leading-6 text-white/84">24-48 horas laborables.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-white/75 bg-white/78 px-5 py-6 shadow-[0_24px_80px_rgba(8,19,33,0.1)] backdrop-blur-xl md:px-8 md:py-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
