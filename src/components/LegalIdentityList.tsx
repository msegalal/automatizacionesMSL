import { legalIdentity } from "@/lib/legal";
import { defaultContactEmail } from "@/lib/site-content";

/*
 * Bloque identificativo compartido por el aviso legal y la privacidad.
 * Lo que falta se marca en pantalla a proposito: un dato identificativo
 * ausente es un incumplimiento, no un detalle de maquetacion.
 */
export default function LegalIdentityList() {
  const { denominacion, nif, domicilio, domicilioCompleto } = legalIdentity;

  return (
    <ul>
      <li>
        Denominacion:{" "}
        {denominacion ? (
          denominacion
        ) : (
          <span className="pendiente">PENDIENTE nombre y apellidos del titular</span>
        )}
      </li>
      <li>NIF: {nif}</li>
      <li>
        Domicilio: {domicilio}
        {domicilioCompleto ? null : (
          <>
            {" "}
            <span className="pendiente">PENDIENTE codigo postal y municipio</span>
          </>
        )}
      </li>
      <li>Correo de contacto: {defaultContactEmail}</li>
    </ul>
  );
}
