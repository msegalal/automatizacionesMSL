import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { defaultContactEmail } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Aviso legal | automatizacionesMSL",
  description:
    "Datos identificativos del titular de automatizacionesMSL y condiciones de uso del sitio web.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true }
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" href="/aviso-legal" updatedAt="2026-09-07">
      <h2>Titular del sitio</h2>
      <p>
        En cumplimiento de la Ley 34/2002 de servicios de la sociedad de la informacion y de
        comercio electronico, se facilitan los siguientes datos identificativos:
      </p>
      <ul>
        <li>
          Denominacion: <span className="pendiente">PENDIENTE razon social</span>
        </li>
        <li>
          NIF: <span className="pendiente">PENDIENTE NIF</span>
        </li>
        <li>
          Domicilio: <span className="pendiente">PENDIENTE domicilio fiscal</span>
        </li>
        <li>Correo de contacto: {defaultContactEmail}</li>
        <li>Nombre comercial: automatizacionesMSL</li>
      </ul>

      <h2>Objeto</h2>
      <p>
        Este sitio web tiene finalidad informativa y comercial. Presenta los servicios de
        herramienta, implantacion y automatizacion dirigidos a agencias de viajes, y permite
        solicitar informacion mediante un formulario de contacto.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        El acceso al sitio es gratuito y atribuye la condicion de usuario. El usuario se
        compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades
        ilicitas, lesivas de derechos de terceros o que puedan danar el sitio o impedir su uso
        normal.
      </p>

      <h2>Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos del sitio, incluidos textos, estructura de navegacion, diseno y codigo
        fuente, son titularidad del responsable del sitio o cuenta con licencia para su uso. No
        se permite su reproduccion, distribucion ni transformacion sin autorizacion expresa.
      </p>
      <p>
        Las marcas y nombres comerciales de terceros citados en el sitio, entre ellos iReViajes,
        pertenecen a sus respectivos titulares y se mencionan a titulo informativo.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        El titular no se responsabiliza del uso que terceros hagan de la informacion publicada,
        ni de los danos derivados de un uso inadecuado del sitio. Se realizan esfuerzos
        razonables para mantener la informacion actualizada y libre de errores, sin que ello
        constituya garantia de disponibilidad ininterrumpida.
      </p>
      <p>
        Las cifras de mejora que aparecen en la pagina de inicio se expresan como estimaciones
        de techo y dependen del punto de partida de cada agencia. No constituyen un compromiso
        contractual de resultado.
      </p>

      <h2>Enlaces a terceros</h2>
      <p>
        El sitio puede incluir enlaces a paginas de terceros. El titular no controla ni asume
        responsabilidad sobre sus contenidos ni sobre sus politicas de privacidad.
      </p>

      <h2>Legislacion aplicable</h2>
      <p>
        Esta relacion se rige por la legislacion espanola. Para cualquier controversia, las
        partes se someten a los juzgados y tribunales que correspondan conforme a derecho.
      </p>
    </LegalPage>
  );
}
