"use client";

import { clearConsent, CONSENT_UNKNOWN, type ConsentValue } from "@/lib/consent";
import { useConsent } from "@/components/useConsent";

const labels: Record<ConsentValue, string> = {
  granted: "Ahora mismo la analitica esta aceptada.",
  denied: "Ahora mismo la analitica esta rechazada."
};

export default function ConsentReset() {
  const consent = useConsent();

  /* Durante la hidratacion todavia no se sabe la decision: reservamos el hueco. */
  if (consent === CONSENT_UNKNOWN) {
    return <div aria-hidden="true" className="mt-4 h-12 w-64 animate-pulse rounded-full bg-slate-200" />;
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={() => {
          clearConsent();
          window.location.reload();
        }}
        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
      >
        Cambiar mi decision
      </button>
      <span className="text-sm text-slate-500">
        {consent ? labels[consent] : "Todavia no has elegido."}
      </span>
    </div>
  );
}
