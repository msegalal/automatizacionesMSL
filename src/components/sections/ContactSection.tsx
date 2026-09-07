import ContactForm from "@/components/sections/ContactForm";
import { defaultContactEmail } from "@/lib/site-content";

/* Familia de layout: dos columnas, contexto a la izquierda y formulario a la derecha. */
export default function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-4 border-b border-rule bg-surface">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 py-20 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20 lg:px-8 lg:py-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">propuesta</p>
          <h2 className="mt-6 max-w-[18ch] text-balance font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            Cuentanos tu caso y te decimos si encaja
          </h2>
          <p className="mt-6 max-w-[50ch] text-lg leading-8 text-ink-soft">
            Revisamos si necesitas herramienta, implantacion, automatizacion o un pack completo.
          </p>

          <dl className="mt-10 divide-y divide-rule border-y border-rule">
            <div className="py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${defaultContactEmail}`}
                  className="text-base text-ink hover:text-accent"
                >
                  {defaultContactEmail}
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                Que recibes
              </dt>
              <dd className="mt-2 max-w-[46ch] text-sm leading-6 text-ink-soft">
                Una orientacion clara sobre encaje, punto de partida y formato de propuesta mas
                recomendable.
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                Que revisamos
              </dt>
              <dd className="mt-2 max-w-[46ch] text-sm leading-6 text-ink-soft">
                Captacion, seguimiento, carga manual y forma de presentar la herramienta a tus
                clientes.
              </dd>
            </div>
          </dl>
        </div>

        <div className="border border-rule-strong bg-canvas p-6 md:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
