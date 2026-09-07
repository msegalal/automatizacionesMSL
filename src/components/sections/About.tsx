import { aboutBlock } from "@/lib/site-content";

/* Familia de layout: texto principal a la izquierda, tres apuntes a la derecha. */
export default function About() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <div>
            <h2 className="max-w-[16ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
              {aboutBlock.title}
            </h2>
            <p className="mt-6 max-w-[46ch] text-base leading-7 text-ink-soft">
              {aboutBlock.body}
            </p>
          </div>

          <dl className="grid gap-8 sm:grid-cols-3 lg:gap-6">
            {aboutBlock.points.map((point) => (
              <div key={point.title} className="border-t-2 border-ink pt-5">
                <dt className="font-display text-lg leading-snug text-ink">{point.title}</dt>
                <dd className="mt-3 text-sm leading-6 text-ink-soft">{point.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
