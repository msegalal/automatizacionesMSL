import Link from "next/link";
import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import ConsentReset from "@/components/ConsentReset";
import { defaultContactEmail } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Politica de cookies | automatizacionesMSL",
  description:
    "Que cookies utiliza automatizacionesMSL, para que sirven y como revocar el consentimiento.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true }
};

export default function CookiesPage() {
  return (
    <LegalPage title="Politica de cookies" updatedAt="2026-09-07">
      <h2>Que usamos</h2>
      <p>
        Este sitio no instala ninguna cookie de medicion ni de publicidad hasta que aceptas el
        aviso. Si lo rechazas, la analitica no llega a cargarse.
      </p>

      <h2>Almacenamiento necesario</h2>
      <ul>
        <li>
          <strong>msl-consent-analitica</strong>. Guarda tu decision sobre la analitica para no
          volver a preguntarte en cada visita. Es almacenamiento local del navegador, no una
          cookie enviada al servidor, y no identifica a nadie.
        </li>
      </ul>

      <h2>Analitica, solo con consentimiento</h2>
      <ul>
        <li>
          <strong>Google Analytics</strong>, cookies del tipo <strong>_ga</strong> y{" "}
          <strong>_ga_*</strong>. Miden de forma agregada que paginas se consultan y por que via
          se llega al sitio. Caducidad habitual de hasta dos anos. La direccion IP se trata de
          forma anonimizada.
        </li>
      </ul>

      <h2>Como cambiar tu decision</h2>
      <p>
        Puedes revocar o volver a otorgar el consentimiento cuando quieras desde aqui. Al
        hacerlo se recarga la pagina y vuelve a aparecer el aviso.
      </p>
      <ConsentReset />
      <p>
        Tambien puedes bloquear o eliminar cookies desde la configuracion de tu navegador. Ten
        en cuenta que el bloqueo total de almacenamiento hara que el aviso reaparezca en cada
        visita.
      </p>

      <h2>Mas informacion</h2>
      <p>
        El detalle sobre responsable, finalidades, plazos y derechos esta en la{" "}
        <Link href="/privacidad">politica de privacidad</Link>. Para cualquier duda puedes escribir a{" "}
        {defaultContactEmail}.
      </p>
    </LegalPage>
  );
}
