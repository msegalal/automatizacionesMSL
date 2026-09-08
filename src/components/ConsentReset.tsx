"use client";

import {
  clearConsent,
  CONSENT_UNKNOWN,
  type ConsentValue,
} from "@/lib/consent";
import { useConsent } from "@/components/useConsent";

const labels: Record<ConsentValue, string> = {
  granted: "Ahora mismo la analítica está aceptada.",
  denied: "Ahora mismo la analítica está rechazada.",
};

export default function ConsentReset() {
  const consent = useConsent();

  if (consent === CONSENT_UNKNOWN) {
    return (
      <div
        aria-hidden="true"
        className="mt-4 h-12 w-64 animate-pulse bg-surface"
      />
    );
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={() => {
          clearConsent();
          window.location.reload();
        }}
        className="border border-ink bg-ink px-5 py-3 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
      >
        Cambiar mi decisión
      </button>
      <span className="text-sm text-ink-faint">
        {consent ? labels[consent] : "Todavía no has elegido."}
      </span>
    </div>
  );
}
