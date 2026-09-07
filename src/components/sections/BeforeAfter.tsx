import { beforeAfter, microcases } from "@/lib/site-content";

/*
  Familia de layout: comparacion a dos columnas.
  Sustituye a la rejilla de tarjetas repetidas: la idea es un contraste,
  no una lista de caracteristicas.
*/
export default function BeforeAfter() {
  const { before, after } = beforeAfter;

  return (
    <section id="producto" className="scroll-mt-4 border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="max-w-[24ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          El problema no es recibir mas consultas. Es perder el hilo.
        </h2>

        <div className="mt-14 grid gap-px border border-rule-strong bg-rule-strong md:grid-cols-2">
          <div className="bg-canvas p-7 lg:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
              {before.label}
            </p>
            <ul className="mt-6 space-y-0">
              {before.channels.map((channel) => (
                <li
                  key={channel}
                  className="border-b border-dashed border-rule py-3 text-base leading-6 text-ink"
                >
                  {channel}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[42ch] text-sm leading-6 text-ink-soft">{before.body}</p>
          </div>

          <div className="bg-surface-alt p-7 lg:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-state">
              {after.label}
            </p>
            <ul className="mt-6 space-y-0">
              {after.fields.map((field) => (
                <li
                  key={field}
                  className="border-b border-rule py-3 text-base leading-6 text-ink"
                >
                  {field}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[42ch] text-sm leading-6 text-ink-soft">{after.body}</p>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 border-t border-rule pt-8 md:grid-cols-3">
          {microcases.map((item) => (
            <li key={item} className="max-w-[38ch] text-base leading-7 text-ink-soft">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
