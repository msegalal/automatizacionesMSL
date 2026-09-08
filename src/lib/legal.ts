/*
  Identificacion del titular, exigida por el articulo 10 de la LSSI.
  Fuente unica: la usan el aviso legal y la politica de privacidad,
  para que no puedan divergir.

  El NIF es un DNI, no un CIF, asi que el titular es persona fisica.
  En ese caso la denominacion es el nombre y los apellidos completos:
  no existe razon social que poner.
*/

export interface LegalIdentity {
  /* null mientras no tengamos el dato: la pagina lo marca como pendiente. */
  denominacion: string | null;
  nif: string;
  domicilio: string;
  domicilioCompleto: boolean;
  nombreComercial: string;
}

export const legalIdentity: LegalIdentity = {
  denominacion: "Marc Segalà Llorente",
  nif: "47423420L",
  /* CP y municipio confirmados por Marc el 2026-09-08. El 08203 es de
     Sabadell, no de Barcelona ciudad: Barcelona aqui es la provincia. */
  domicilio: "Gorina i Pujol 197, 08203 Sabadell, Barcelona",
  domicilioCompleto: true,
  nombreComercial: "automatizacionesMSL"
};
