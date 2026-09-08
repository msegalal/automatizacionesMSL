"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import {
  writeConsent,
  disableAnalytics,
  enableAnalytics,
  type ConsentValue,
} from "@/lib/consent";
import { useConsent } from "@/components/useConsent";

/*
 * Google Analytics solo se carga si hay consentimiento explicito.
 * Antes se cargaba siempre, que en la UE no es defendible.
 */
export default function ConsentGate() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const consent = useConsent();

  useEffect(() => {
    if (consent !== "granted") disableAnalytics(gaId);
    else if (gaId) enableAnalytics(gaId);
  }, [consent, gaId]);

  const decide = (value: ConsentValue): void => {
    writeConsent(value);
  };

  const showBanner = Boolean(gaId) && consent === null;
  const loadAnalytics = Boolean(gaId) && consent === "granted";

  return (
    <>
      {loadAnalytics ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {showBanner ? (
        <div
          role="dialog"
          aria-label="Consentimiento de cookies"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-ink bg-canvas"
        >
          <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p className="max-w-[68ch] text-sm leading-6 text-ink-soft">
              Usamos analítica para saber que partes de la web se leen. Sin tu
              consentimiento no se carga ninguna cookie de medición. Puedes
              consultar el detalle en la{" "}
              <Link
                href="/cookies"
                className="text-accent underline underline-offset-2"
              >
                política de cookies
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="border border-rule-strong px-5 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="border border-ink bg-ink px-5 py-3 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
