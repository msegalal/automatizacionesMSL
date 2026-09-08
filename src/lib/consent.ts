export const CONSENT_STORAGE_KEY = "msl-consent-analitica";

export type ConsentValue = "granted" | "denied";

/* Estado antes de que el navegador haya podido responder. Evita el parpadeo del aviso. */
export const CONSENT_UNKNOWN = "unknown";
export type ConsentState = ConsentValue | null | typeof CONSENT_UNKNOWN;

let memoryConsent: ConsentValue | null = null;

export function disableAnalytics(gaId: string | undefined): void {
  if (typeof window === "undefined") return;
  if (gaId)
    (window as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = true;
  // Clear GA's first-party cookies on the current host and possible parent domains.
  const hostParts = window.location.hostname.split(".");
  const domains = [
    "",
    ...hostParts.map(
      (_, index) => `; domain=${hostParts.slice(index).join(".")}`,
    ),
  ];
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!/^_ga(?:_|$)/.test(name)) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax`;
    });
  });
}

export function enableAnalytics(gaId: string): void {
  (window as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = false;
}

/*
 * El consentimiento vive solo en el navegador de quien visita.
 * Cualquier acceso va envuelto porque en modo privado o con el
 * almacenamiento bloqueado el propio accesor lanza excepcion.
 */
export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    return memoryConsent;
  }
}

const listeners = new Set<() => void>();

function emit(): void {
  listeners.forEach((listener) => listener());
}

export function subscribeToConsent(listener: () => void): () => void {
  listeners.add(listener);
  window.addEventListener("storage", listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

/* Snapshot de cliente. Devuelve un primitivo, asi que es estable entre renders. */
export function getConsentSnapshot(): ConsentValue | null {
  return readConsent();
}

/*
 * En servidor y durante la hidratacion todavia no se sabe nada.
 * Devolver un estado propio evita que el aviso aparezca y desaparezca
 * a quien ya decidio en una visita anterior.
 */
export function getConsentServerSnapshot(): ConsentState {
  return CONSENT_UNKNOWN;
}

export function writeConsent(value: ConsentValue): void {
  memoryConsent = value;
  if (value === "denied") disableAnalytics(process.env.NEXT_PUBLIC_GA_ID);
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // Honor the current choice in memory even when persistence is blocked.
  }

  emit();
}

export function clearConsent(): void {
  disableAnalytics(process.env.NEXT_PUBLIC_GA_ID);
  memoryConsent = null;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // Sin almacenamiento no hay nada que borrar.
  }

  emit();
}
