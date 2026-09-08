import { impactStats, impactNote } from "@/lib/site-content";

export default function ImpactStats() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <div className="mb-6 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">
              impacto
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold text-slate-950 md:text-5xl">
              Lo que cambia en la operativa desde las primeras semanas.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
            No vendemos automatizacion por postureo. Estos son los cambios concretos que se notan
            en el dia a dia de la agencia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat) => (
            <article
              key={stat.title}
              className="flex flex-col rounded-[2rem] border border-slate-200/80 bg-white/82 p-6 shadow-[0_18px_50px_rgba(8,19,33,0.05)] backdrop-blur-xl"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-500">
                {stat.prefix}
              </p>
              <div className="mt-4 h-0.5 w-10 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-slate-950">
                {stat.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{stat.body}</p>
            </article>
          ))}
        </div>

        {/* La nota va visible, no en un pie diminuto: es lo que sostiene la seccion. */}
        <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-500">{impactNote}</p>
      </div>
    </section>
  );
}
