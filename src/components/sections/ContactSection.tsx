import ContactForm from "@/components/sections/ContactForm";
import { defaultContactEmail, responseCommitment } from "@/lib/site-content";

/* Familia de layout: contexto a la izquierda, formulario a la derecha. */
export default function ContactSection() {
  return (
    <section id="contacto" className="contact-section scroll-mt-4 border-b border-rule">
      <div className="site-container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow mb-6">08 / Empecemos por tu caso</p>
          <h2 className="section-title max-w-[20ch] text-balance font-display text-3xl leading-[1.12] text-ink md:text-4xl">
            Cuéntanos dónde
            se pierde el hilo.
          </h2>
          <p className="mt-6 max-w-[50ch] text-lg leading-8 text-ink-soft">
            En {responseCommitment} te diremos si vemos encaje y por dónde tendría sentido
            empezar.
          </p>

          <dl className="mt-10 border-t border-rule">
            <div className="border-b border-rule py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                Qué recibes en la primera respuesta
              </dt>
              <dd className="mt-2 max-w-[46ch] text-sm leading-6 text-ink-soft">
                Lectura del problema, recomendacion de punto de partida y siguiente paso.
              </dd>
            </div>
            <div className="border-b border-rule py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                Qué no incluye
              </dt>
              <dd className="mt-2 max-w-[46ch] text-sm leading-6 text-ink-soft">
                No es una auditoria formal ni una demo del sistema. Es una lectura de encaje.
              </dd>
            </div>
            <div className="border-b border-rule py-5">
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
          </dl>
        </div>

        <div className="contact-panel border border-rule-strong bg-canvas p-6 md:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
