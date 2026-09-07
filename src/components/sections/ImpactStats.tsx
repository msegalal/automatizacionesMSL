import { impactStats } from "@/lib/site-content";

/* Familia de layout: banda numerica dividida por filetes. Sin tarjetas. */
export default function ImpactStats() {
  return (
    <section className="border-b border-rule bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <div className="max-w-[46ch]">
          <h2 className="text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
            La mejora se mide en tiempo, seguimiento y control
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Son estimaciones de techo. El resultado real depende del punto de partida de cada agencia.
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-px border-t border-rule-strong sm:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.title}
              className="border-b border-rule-strong pb-8 pt-8 xl:border-b-0 xl:border-r xl:pr-6 xl:last:border-r-0 xl:[&:not(:first-child)]:pl-6"
            >
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                {stat.prefix}
              </dt>
              <dd>
                <p className="tabular mt-3 font-display text-6xl leading-none text-accent">
                  {stat.value}
                </p>
                <p className="mt-4 text-lg leading-7 text-ink">{stat.title}</p>
                <p className="mt-3 max-w-[38ch] text-sm leading-6 text-ink-soft">{stat.body}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
