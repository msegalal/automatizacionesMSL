"use client";

import { useSyncExternalStore } from "react";
import {
  getConsentServerSnapshot,
  getConsentSnapshot,
  subscribeToConsent,
  type ConsentState
} from "@/lib/consent";

/*
 * Lee el consentimiento como estado externo al arbol de React.
 * Evita el setState dentro de useEffect y mantiene sincronizados
 * el aviso del pie y el conmutador de la pagina de cookies.
 */
export function useConsent(): ConsentState {
  return useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getConsentServerSnapshot
  );
}
