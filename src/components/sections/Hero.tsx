/*
  Familia de layout: split asimetrico.
  Disciplina de hero: 4 elementos de texto como maximo
  (rotulo, titular, subtexto, CTAs). Las fricciones y la prueba
  social viven en secciones propias, no aqui dentro.
*/
export default function Hero() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Para agencias de viajes
          </p>

          <h1 className="mt-6 max-w-[22ch] text-balance font-display text-4xl leading-[1.06] text-ink md:text-5xl lg:text-6xl">
            Menos tareas manuales y mejor seguimiento
          </h1>

          <p className="mt-6 max-w-[52ch] text-lg leading-8 text-ink-soft">
            Herramienta, implantacion y automatizacion util. La primera implantacion ya
            funciona en iReViajes.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center whitespace-nowrap border border-ink bg-ink px-7 py-4 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
            >
              Quiero ver si encaja
            </a>
            <a
              href="#prueba"
              className="inline-flex items-center justify-center whitespace-nowrap border border-rule-strong px-7 py-4 text-sm font-medium text-ink hover:border-accent hover:text-accent"
            >
              Ver el caso real
            </a>
          </div>
        </div>

        {/*
          TODO(activo): sustituir por una captura real del producto, 1400x1050,
          preferiblemente la vista de seguimiento de solicitudes con datos
          anonimizados. Sin captura real, este hueco se queda visible a proposito:
          no se monta una interfaz falsa a base de divs.
        */}
        <div className="border border-rule-strong bg-surface">
          <div className="flex aspect-[4/3] flex-col items-start justify-end gap-2 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
              Pendiente de captura
            </p>
            <p className="max-w-[34ch] text-sm leading-6 text-ink-soft">
              Aqui va una captura real de la herramienta con datos anonimizados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
