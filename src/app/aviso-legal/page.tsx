import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalIdentityList from "@/components/LegalIdentityList";
import { legalIdentity } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Aviso legal | automatizacionesMSL",
  description:
    "Datos identificativos del titular de automatizacionesMSL y condiciones de uso del sitio web.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true }
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" href="/aviso-legal" updatedAt="2026-10-05">
      <h2>Titular del sitio</h2>
      <p>
        En cumplimiento de la Ley 34/2002 de servicios de la sociedad de la información y de
        comercio electrónico, se facilitan los siguientes datos identificativos:
      </p>
      <LegalIdentityList />

      <p>
        Nombre comercial: {legalIdentity.nombreComercial}. El titular es persona física y
        ejerce como profesional autónomo.
      </p>

      <h2>Objeto</h2>
      <p>
        Este sitio web tiene finalidad informativa y comercial. Presenta servicios de CRM,
        automatización, soluciones de voz y chat y desarrollo de aplicaciones a medida. Su
        especialidad son las agencias de viajes, aunque también trabaja con otros negocios. El
        sitio permite solicitar información mediante un formulario de contacto.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        El acceso al sitio es gratuito y atribuye la condición de usuario. El usuario se
        compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades
        ilícitas, lesivas de derechos de terceros o que puedan dañar el sitio o impedir su uso
        normal.
      </p>

      <h2>Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos del sitio, incluidos textos, estructura de navegación, diseño y código
        fuente, son titularidad del responsable del sitio o cuenta con licencia para su uso. No
        se permite su reproducción, distribución ni transformación sin autorización expresa.
      </p>
      <p>
        Las marcas y nombres comerciales de terceros citados en el sitio, entre ellos iReViajes,
        pertenecen a sus respectivos titulares y se mencionan a título informativo.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        El titular no se responsabiliza del uso que terceros hagan de la información publicada,
        ni de los daños derivados de un uso inadecuado del sitio. Se realizan esfuerzos
        razonables para mantener la información actualizada y libre de errores, sin que ello
        constituya garantía de disponibilidad ininterrumpida.
      </p>
      <p>
        Los indicadores publicados describen aspectos de la operativa que se revisan en cada
        proyecto. No se publican porcentajes de mejora sin una medición documentada ni se
        garantiza un resultado cuantitativo concreto.
      </p>

      <h2>Enlaces a terceros</h2>
      <p>
        El sitio puede incluir enlaces a páginas de terceros. El titular no controla ni asume
        responsabilidad sobre sus contenidos ni sobre sus políticas de privacidad.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Esta relación se rige por la legislación española. Para cualquier controversia, las
        partes se someten a los juzgados y tribunales que correspondan conforme a derecho.
      </p>
    </LegalPage>
  );
}
