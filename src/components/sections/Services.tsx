import { serviceCards } from "@/lib/site-content";

/*
  Familia de layout: filas editoriales a todo el ancho.
  Sustituye a las tres tarjetas en fila del diseno anterior.
*/
export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-4 border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <div className="max-w-[52ch]">
          <h2 className="text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
            Que compras exactamente y como se adapta a tu agencia
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Aqui no hay que adivinar si se vende herramienta, servicio o automatizacion. Lo
            dejamos claro para que la decision se tome desde negocio.
          </p>
        </div>

        <div className="mt-14 border-t border-rule-strong">
          {serviceCards.map((card, index) => (
            <article
              key={card.title}
              className="grid gap-6 border-b border-rule py-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16 lg:py-12"
            >
              <div>
                <p className="tabular font-display text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-snug text-ink md:text-3xl">
                  {card.kicker}
                </h3>
              </div>

              <div>
                <p className="max-w-[58ch] font-display text-xl leading-snug text-ink">
                  {card.title}
                </p>
                <p className="mt-4 max-w-[58ch] text-base leading-7 text-ink-soft">{card.body}</p>
                <ul className="mt-6 space-y-2.5">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="max-w-[58ch] text-sm leading-6 text-ink-soft"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
