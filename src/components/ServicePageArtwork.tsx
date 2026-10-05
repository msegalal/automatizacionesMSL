export type ServiceVisualVariant = "crm" | "automation" | "voice" | "application";

const artLabels: Record<ServiceVisualVariant, string> = {
  crm: "Recorrido de una solicitud",
  automation: "Un proceso con reglas claras",
  voice: "Varios canales, una atención definida",
  application: "Una herramienta según la tarea"
};

function CrmDiagram() {
  const steps = [
    { number: "01", title: "Entrada", detail: "Contexto necesario", tone: "bg-orange-400" },
    { number: "02", title: "Seguimiento", detail: "Etapa acordada", tone: "bg-sky-300" },
    { number: "03", title: "Siguiente paso", detail: "Acción y responsable", tone: "bg-emerald-300" }
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step.number} className="relative rounded-[1.25rem] border border-white/10 bg-white/[0.055] p-4">
          <div className="flex items-center justify-between">
            <span className={`h-2.5 w-2.5 rounded-full ${step.tone}`} />
            <span className="text-[10px] font-semibold tracking-[0.16em] text-white/35">{step.number}</span>
          </div>
          <p className="mt-6 text-sm font-semibold text-white">{step.title}</p>
          <p className="mt-1 text-xs leading-5 text-white/55">{step.detail}</p>
          {index < steps.length - 1 ? (
            <span className="absolute -right-3 top-1/2 z-10 hidden h-px w-3 bg-orange-300/65 sm:block" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function AutomationDiagram() {
  const steps = ["Inicio", "Regla", "Acción"];

  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-4 sm:p-5">
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:gap-3">
        {steps.map((step, index) => (
          <div key={step} className="contents">
            <div className="rounded-xl border border-white/10 bg-slate-900/75 px-2 py-4 text-center sm:px-3">
              <span className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-300/15 text-orange-200">
                {index === 0 ? (
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path d="M10 3.5v13m-6.5-6.5h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ) : index === 1 ? (
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="mt-3 block text-xs font-semibold text-white sm:text-sm">{step}</span>
            </div>
            {index < steps.length - 1 ? (
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 text-orange-300/70" fill="none">
                <path d="M3 10h13m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
        <span className="rounded-lg bg-emerald-300/10 px-3 py-2 text-center text-[11px] font-medium text-emerald-100">Se cumple la regla</span>
        <span className="rounded-lg bg-orange-300/10 px-3 py-2 text-center text-[11px] font-medium text-orange-100">Hace falta revisar</span>
      </div>
    </div>
  );
}

function VoiceDiagram() {
  const channels = [
    { name: "Llamadas", icon: "phone" },
    { name: "WhatsApp", icon: "message" },
    { name: "Chat web", icon: "chat" }
  ];

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {channels.map((channel) => (
          <div key={channel.name} className="rounded-[1.15rem] border border-white/10 bg-white/[0.055] px-2 py-4 text-center sm:px-3">
            <span className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange-300/15 text-orange-100">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                {channel.icon === "phone" ? (
                  <path d="M6.2 3.8 8 6.7 6.8 8c.8 1.7 2.2 3.1 3.9 3.9l1.3-1.2 2.9 1.8-.7 2.8c-.1.4-.5.7-.9.7A10.8 10.8 0 0 1 4 6.5c0-.4.3-.8.7-.9l1.5-.4Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <>
                    <path d="M4 5.4h12a1.5 1.5 0 0 1 1.5 1.5v6.2a1.5 1.5 0 0 1-1.5 1.5H9l-3.5 2v-2H4a1.5 1.5 0 0 1-1.5-1.5V6.9A1.5 1.5 0 0 1 4 5.4Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
                    <path d="M6 9h8M6 11.8h5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </span>
            <span className="mt-2 block text-[11px] font-semibold text-white sm:text-xs">{channel.name}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 rounded-[1.15rem] border border-orange-200/20 bg-orange-300/10 px-4 py-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-300 text-slate-950">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path d="M10 3.5v13m-6.5-6.5h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
        <span className="text-xs leading-5 text-orange-50">Límites de atención y paso al equipo definidos para el caso</span>
      </div>
    </div>
  );
}

function ApplicationDiagram() {
  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.045]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-orange-300" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 text-[10px] font-medium tracking-wide text-white/45">Diseño según requisitos</span>
      </div>
      <div className="grid min-h-44 grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr]">
        <div className="space-y-2 border-r border-white/10 bg-slate-900/50 p-3">
          {["Resumen", "Tareas", "Datos"].map((item, index) => (
            <span key={item} className={`block rounded-lg px-2 py-2 text-[10px] ${index === 0 ? "bg-orange-300/15 font-semibold text-orange-100" : "text-white/45"}`}>
              {item}
            </span>
          ))}
        </div>
        <div className="p-3 sm:p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">Vista del equipo</p>
          <div className="mt-3 rounded-xl border border-white/10 bg-slate-900/60 p-3">
            <span className="block text-xs font-semibold text-white">Tarea prioritaria</span>
            <span className="mt-1 block text-[10px] leading-4 text-white/50">Información y pasos que necesita el proceso</span>
            <div className="mt-3 flex gap-2">
              <span className="h-1.5 w-2/5 rounded-full bg-orange-300/70" />
              <span className="h-1.5 w-1/4 rounded-full bg-white/15" />
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <span className="h-7 rounded-lg border border-white/8 bg-white/[0.035]" />
            <span className="h-7 rounded-lg border border-white/8 bg-white/[0.035]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicePageArtwork({ variant }: { variant: ServiceVisualVariant }) {
  return (
    <figure className="relative mx-auto w-full max-w-[39rem]">
      <div aria-hidden="true" className="absolute -right-4 -top-7 h-28 w-28 rounded-full border border-orange-300/35" />
      <div aria-hidden="true" className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-orange-300/35 blur-3xl" />
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0e1a2b] p-4 text-white shadow-[0_28px_72px_rgba(8,19,33,0.22)] sm:rounded-[2rem] sm:p-5">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-300 text-slate-950">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7.5h16M7 4v7m10-7v7M5 12.5h14v7H5z" />
                  <path d="M8 16h3m2 0h3" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-white">{artLabels[variant]}</span>
                <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.15em] text-white/45">Concepto visual</span>
              </span>
            </div>
            <span className="hidden shrink-0 rounded-full border border-white/12 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-orange-100 sm:inline-flex">
              A medida
            </span>
          </div>
          {variant === "crm" ? <CrmDiagram /> : null}
          {variant === "automation" ? <AutomationDiagram /> : null}
          {variant === "voice" ? <VoiceDiagram /> : null}
          {variant === "application" ? <ApplicationDiagram /> : null}
        </div>
      </div>
      <figcaption className="relative mt-3 px-2 text-center text-[11px] leading-5 text-slate-500">
        Esquema conceptual; el alcance se define con cada negocio.
      </figcaption>
    </figure>
  );
}
