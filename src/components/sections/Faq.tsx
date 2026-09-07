import { faqs } from "@/lib/site-content";

/*
  Familia de layout: acordeon accesible con details y summary.
  Nativo a proposito: el contenido queda en el HTML, es indexable,
  se abre con teclado y no necesita JavaScript ni animacion.
*/
export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-4 border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
          <h2 className="max-w-[16ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
            Preguntas antes de empezar
          </h2>

          <div className="border-t border-rule-strong">
            {faqs.map((item) => (
              <details key={item.question} className="group border-b border-rule">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
                  <span className="max-w-[46ch] font-display text-lg leading-snug text-ink">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 font-display text-xl leading-none text-accent"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">&minus;</span>
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-6 text-sm leading-7 text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
