import Link from "next/link";
import { offerColumns, offerFallback, offerRows } from "@/lib/site-content";

/*
  Familia de layout: tabla de decision.
  En movil se convierte en una tarjeta por columna con las mismas filas,
  no en una tabla horizontal ilegible.
*/
export default function Offer() {
  return (
    <section id="servicios" className="scroll-mt-4 border-b border-rule bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="max-w-[26ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          Tres formas de empezar, segun el cuello de botella
        </h2>
        <p className="mt-5 max-w-[58ch] text-base leading-7 text-ink-soft">
          Cada columna dice tambien que no cubre. Es mas util saber donde acaba el alcance que
          leer una lista de ventajas.
        </p>

        {/* Escritorio: tabla real, con encabezados de columna. */}
        <div className="mt-14 hidden overflow-x-auto lg:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Comparativa de herramienta, implantacion y automatizacion
            </caption>
            <thead>
              <tr>
                <th scope="col" className="w-[13rem] border-b-2 border-ink pb-4 pr-6" />
                {offerColumns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="border-b-2 border-ink pb-4 pr-6 align-bottom font-display text-2xl font-medium text-ink"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {offerRows.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="border-b border-rule py-6 pr-6 align-top text-xs font-medium uppercase tracking-[0.16em] text-ink-faint"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      key={`${row.label}-${offerColumns[index]}`}
                      className="border-b border-rule py-6 pr-6 align-top text-sm leading-6 text-ink-soft"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Movil: una tarjeta por opcion, con las mismas filas. */}
        <div className="mt-12 grid gap-6 lg:hidden">
          {offerColumns.map((column, columnIndex) => (
            <article key={column} className="border border-rule-strong bg-canvas p-6">
              <h3 className="border-b-2 border-ink pb-4 font-display text-2xl text-ink">
                {column}
              </h3>
              <dl className="mt-2">
                {offerRows.map((row) => (
                  <div key={row.label} className="border-b border-rule py-4">
                    <dt className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                      {row.label}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-ink-soft">
                      {row.values[columnIndex]}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t-2 border-ink pt-8">
          <h3 className="font-display text-2xl text-ink">{offerFallback.title}</h3>
          <p className="mt-3 max-w-[58ch] text-base leading-7 text-ink-soft">
            {offerFallback.body}
          </p>
          <Link
            href="#contacto"
            className="mt-6 inline-flex items-center border border-ink bg-ink px-6 py-3.5 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
          >
            Solicitar diagnostico
          </Link>
        </div>
      </div>
    </section>
  );
}
