import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalIdentityList from "@/components/LegalIdentityList";
import { defaultContactEmail } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Política de privacidad | automatizacionesMSL",
  description:
    "Como trata automatizacionesMSL los datos personales recogidos a traves del formulario de contacto.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true }
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" href="/privacidad" updatedAt="2026-09-07">
      <h2>Responsable del tratamiento</h2>
      <LegalIdentityList />

      <h2>Qué datos recogemos</h2>
      <p>
        A traves del formulario de contacto se recogen nombre, correo electrónico, empresa, tipo
        de interes y el texto libre que escribas en el campo de contexto. No se recogen
        categorias especiales de datos y no se pide ningun dato bancario.
      </p>
      <p>
        Si aceptas la analítica, se recogen ademas datos de navegacion agregados a traves de
        Google Analytics. Si la rechazas, esa medición no se activa.
      </p>

      <h2>Para qué los usamos</h2>
      <ul>
        <li>Responder a tu solicitud y valorar si el servicio encaja con tu agencia.</li>
        <li>Preparar y enviarte una propuesta comercial si la pides.</li>
        <li>Medir de forma agregada que partes del sitio se consultan, solo con consentimiento.</li>
      </ul>

      <h2>Base jurídica</h2>
      <p>
        El tratamiento de los datos del formulario se basa en tu consentimiento, que otorgas al
        marcar la casilla antes de enviarlo, y en la aplicacion de medidas precontractuales a
        peticion tuya. La analítica se basa exclusivamente en tu consentimiento.
      </p>

      <h2>Cuánto tiempo los conservamos</h2>
      <p>
        Conservamos los datos del formulario mientras dure la relación comercial y, despues,
        durante los plazos de prescripción legal que resulten aplicables. Si no llega a existir
        relación comercial, se eliminan cuando dejen de ser necesarios para atender tu consulta.
      </p>

      <h2>Con quién se comparten</h2>
      <p>
        No vendemos ni cedemos datos personales. Intervienen los siguientes prestadores de
        servicio que actuan como encargados del tratamiento:
      </p>
      <ul>
        <li>Vercel, alojamiento y entrega del sitio web.</li>
        <li>Resend, envio del correo que genera el formulario.</li>
        <li>Google Analytics, medición agregada, solo si das tu consentimiento.</li>
        <li>
          n8n en servidor propio, tratamiento interno del aviso de nuevo contacto cuando la
          integracion esta activa.
        </li>
      </ul>
      <p>
        Alguno de estos proveedores puede tratar datos fuera del Espacio Economico Europeo, en
        cuyo caso la transferencia se ampara en las cláusulas contractuales tipo aprobadas por
        la Comisión Europea.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación
        del tratamiento y portabilidad escribiendo a {defaultContactEmail}. Tambien puedes
        retirar tu consentimiento en cualquier momento, sin que ello afecte a la licitud del
        tratamiento previo.
      </p>
      <p>
        Si consideras que tus datos no se han tratado correctamente, puedes presentar una
        reclamación ante la Agencia Española de Protección de Datos, en{" "}
        <a href="https://www.aepd.es" rel="noopener noreferrer" target="_blank">
          www.aepd.es
        </a>
        .
      </p>

      <h2>Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger los datos frente a
        acceso no autorizado, pérdida o alteracion. El envio del formulario viaja cifrado
        mediante HTTPS.
      </p>
    </LegalPage>
  );
}
