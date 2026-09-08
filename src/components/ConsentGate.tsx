"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import {
  writeConsent,
  disableAnalytics,
  enableAnalytics,
  type ConsentValue
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
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/60 bg-[#efe6dc]/95 backdrop-blur"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[68ch] text-sm leading-7 text-slate-700">
              Usamos analitica para saber que partes de la web se leen. Sin tu consentimiento no
              se carga ninguna cookie de medicion. Puedes consultar el detalle en la{" "}
              <Link href="/cookies" className="font-semibold text-slate-950 underline underline-offset-2 hover:text-orange-500">
                politica de cookies
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
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
