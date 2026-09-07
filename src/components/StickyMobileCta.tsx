"use client";

import Link from "next/link";
import { CONSENT_UNKNOWN } from "@/lib/consent";
import { useConsent } from "@/components/useConsent";
import { responseCommitment } from "@/lib/site-content";

/*
 * CTA fijo, solo en movil. Se retira mientras el aviso de cookies
 * esta en pantalla para no apilar dos barras sobre el mismo borde.
 * El hueco inferior se reserva en el body con una clase, asi la barra
 * nunca tapa el pie ni el ultimo campo del formulario.
 */
export default function StickyMobileCta() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const consent = useConsent();

  const bannerVisible = Boolean(gaId) && consent === null;
  const consentPending = consent === CONSENT_UNKNOWN;

  if (bannerVisible || consentPending) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink bg-canvas lg:hidden">
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <p className="text-xs leading-5 text-ink-soft">
          Respuesta en {responseCommitment}
        </p>
        <Link
          href="/#contacto"
          className="inline-flex shrink-0 items-center justify-center whitespace-nowrap border border-ink bg-ink px-5 py-3 text-sm font-medium text-canvas"
        >
          Quiero ver si encaja
        </Link>
      </div>
    </div>
  );
}
