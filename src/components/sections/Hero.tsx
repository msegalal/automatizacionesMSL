import { navItems } from "@/lib/site-content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-18 pt-6 lg:pb-24 lg:pt-8">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(rgba(14,26,43,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(14,26,43,0.07)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.9),transparent)]" />
      <div className="absolute -left-12 top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,110,64,0.22)_0%,transparent_72%)] blur-2xl" />

      <div className="mx-auto max-w-7xl">
        <header className="mb-14 flex flex-wrap items-center justify-between gap-6">
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
            Quiero una demo
          </a>
        </header>

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-7 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-orange-500">
              Sistemas digitales para vender mejor a agencias de viajes
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.01] text-slate-950 sm:text-6xl xl:text-7xl">
              Convertimos una solución validada en cliente en una{" "}
              <span className="text-orange-500">oferta vendible, clara y escalable</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              automatizacionesMSL empaqueta producto, web y automatización para que
              dejes de vender “cosas sueltas” y empieces a vender un sistema con valor
              real para agencias. iReViajes es el punto de partida, no el límite.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
              >
                Solicitar propuesta
              </a>
              <a
                href="#producto"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/75 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                Ver estructura del producto
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.8rem] border border-white/70 bg-white/75 px-5 py-5 shadow-[0_18px_50px_rgba(8,19,33,0.08)] backdrop-blur-xl">
                <p className="text-2xl font-semibold text-slate-950">1</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">producto base validado en sector viajes</p>
              </div>
              <div className="rounded-[1.8rem] border border-white/70 bg-white/75 px-5 py-5 shadow-[0_18px_50px_rgba(8,19,33,0.08)] backdrop-blur-xl">
                <p className="text-2xl font-semibold text-slate-950">4</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">capas conectadas: web, IA, operacion y automatizacion</p>
              </div>
              <div className="rounded-[1.8rem] border border-white/70 bg-white/75 px-5 py-5 shadow-[0_18px_50px_rgba(8,19,33,0.08)] backdrop-blur-xl">
                <p className="text-2xl font-semibold text-slate-950">B2B</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">posicionamiento orientado a agencias, no al cliente final</p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="rounded-[2.25rem] border border-white/75 bg-white/72 p-6 shadow-[0_24px_80px_rgba(8,19,33,0.12)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-600">
                  blueprint comercial
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  iReViajes
                </span>
              </div>

              <h2 className="mt-6 max-w-md text-3xl font-semibold leading-tight text-slate-950">
                Lo que hoy es un proyecto personalizado puede venderse como sistema modular.
              </h2>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.7rem] border border-slate-200 bg-white/85 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Captación
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-900">
                    Web que explica mejor el producto y prepara la conversación de venta.
                  </p>
                </div>
                <div className="rounded-[1.7rem] border border-slate-200 bg-white/85 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Operación
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-900">
                    CRM, tickets y seguimiento para que no se pierda contexto interno.
                  </p>
                </div>
                <div className="rounded-[1.7rem] border border-slate-200 bg-white/85 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Automatización
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-900">
                    n8n conectando formularios, avisos, soporte y postventa sin trabajo repetitivo.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.8rem] bg-slate-950 px-5 py-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                  secuencia
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
                  <span className="rounded-full bg-white/8 px-3 py-2">lead entra</span>
                  <span>→</span>
                  <span className="rounded-full bg-white/8 px-3 py-2">se clasifica</span>
                  <span>→</span>
                  <span className="rounded-full bg-white/8 px-3 py-2">se opera</span>
                  <span>→</span>
                  <span className="rounded-full bg-white/8 px-3 py-2">se sigue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
