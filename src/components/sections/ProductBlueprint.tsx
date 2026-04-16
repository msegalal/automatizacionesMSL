import { fitCards, productModules } from "@/lib/site-content";

export default function ProductBlueprint() {
  return (
    <section id="producto" className="px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.6rem] bg-slate-950 px-6 py-10 text-white md:px-10 md:py-14">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="mb-6 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-300">
              herramienta
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white md:text-5xl">
              iReViajes fue la primera agencia que compro esta solucion.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
              Eso significa que no estamos vendiendo una idea ni una maqueta. Estamos construyendo
              la forma correcta de presentar una herramienta que ya ha demostrado utilidad real en una agencia.
            </p>

            <div className="mt-8 grid gap-4">
              {fitCards.map((card) => (
                <article key={card.title} className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5">
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">{card.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {productModules.map((module, index) => (
              <article
                key={module.title}
                className="rounded-[1.8rem] border border-white/12 bg-white/7 p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-slate-950">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/72">{module.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
