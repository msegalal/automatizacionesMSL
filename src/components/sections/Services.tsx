import { serviceCards } from "@/lib/site-content";

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">
              oferta
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold text-slate-950 md:text-5xl">
              Que compras exactamente y como se adapta a tu agencia.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
            Aqui no hay que adivinar si se vende herramienta, servicio o automatizacion. Lo
            dejamos claro para que la decision de compra sea mas facil desde negocio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_60px_rgba(8,19,33,0.06)] backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
                {card.kicker}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>

              <ul className="mt-6 space-y-3">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-slate-900">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
