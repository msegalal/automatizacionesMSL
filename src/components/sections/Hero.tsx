import { navItems } from "@/lib/site-content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-18 pt-6 lg:pb-24 lg:pt-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(rgba(14,26,43,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(14,26,43,0.07)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.9),transparent)]" />
      <div className="pointer-events-none absolute -left-12 top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,110,64,0.22)_0%,transparent_72%)] blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="relative z-20 mb-14 flex flex-wrap items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 text-slate-950">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-300/60 bg-orange-100 text-sm font-semibold text-orange-600">
              MSL
            </span>
            <span className="text-lg font-semibold tracking-tight">automatizacionesMSL</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
          >
            Quiero ver si encaja
          </a>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-7 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-orange-500">
              Herramienta + implantacion para agencias de viajes
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.01] text-slate-950 sm:text-6xl xl:text-7xl">
              Una herramienta para que tu agencia trabaje{" "}
              <span className="text-orange-500">
                mas rapido, con menos tareas manuales y mejor seguimiento
              </span>
              .
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              automatizacionesMSL combina herramienta, implantacion y automatizacion util para
              ordenar consultas, dar mas control al equipo y presentar mejor la propuesta. La
              validacion ya existe: iReViajes fue la primera agencia en comprarla.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
              >
                Quiero ver si encaja con mi agencia
              </a>
              <a
                href="#prueba"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/75 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                Ver el caso real
              </a>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Herramienta, implantacion y automatizacion ligera. No es software generico ni una
              promesa abstracta.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.8rem] border border-white/70 bg-white/75 px-5 py-5 shadow-[0_18px_50px_rgba(8,19,33,0.08)] backdrop-blur-xl">
                <p className="text-2xl font-semibold text-slate-950">Agencias</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  pensado para agencias de viajes, no para un sector generico
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/70 bg-white/75 px-5 py-5 shadow-[0_18px_50px_rgba(8,19,33,0.08)] backdrop-blur-xl">
                <p className="text-2xl font-semibold text-slate-950">Caso real</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  primera implantacion ya vendida: iReViajes
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/70 bg-white/75 px-5 py-5 shadow-[0_18px_50px_rgba(8,19,33,0.08)] backdrop-blur-xl">
                <p className="text-2xl font-semibold text-slate-950">Mas control</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  menos friccion en seguimiento, operativa y propuesta comercial
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="rounded-[2.25rem] border border-white/75 bg-white/72 p-6 shadow-[0_24px_80px_rgba(8,19,33,0.12)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-600">
                  que resuelve
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  para agencias
                </span>
              </div>

              <h2 className="mt-6 max-w-md text-3xl font-semibold leading-tight text-slate-950">
                Tres fricciones habituales que esta herramienta ataca desde el primer dia.
              </h2>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.7rem] border border-slate-200 bg-white/85 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Consultas dispersas
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-900">
                    Cuando la informacion entra mal ordenada, responder bien y rapido cuesta mas.
                  </p>
                </div>
                <div className="rounded-[1.7rem] border border-slate-200 bg-white/85 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Seguimiento irregular
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-900">
                    Si el seguimiento depende de recordar cada paso, es facil perder ritmo y oportunidades.
                  </p>
                </div>
                <div className="rounded-[1.7rem] border border-slate-200 bg-white/85 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Demasiadas tareas manuales
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-900">
                    Cuando todo pasa por copiar, perseguir o revisar a mano, la productividad cae.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.8rem] bg-slate-950 px-5 py-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                  prueba real
                </p>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  iReViajes fue la primera implantacion. Eso permite vender con un caso del sector
                  real, no con una promesa sin validar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
