import { getSiteUrl } from "@/lib/site-url";
import { defaultContactEmail, faqs } from "@/lib/site-content";

export interface Crumb {
  label: string;
  href: string;
}

/*
 * Datos estructurados. Solo se declara lo que se puede afirmar.
 *
 * No hay LocalBusiness ni direccion postal a proposito: no existe local
 * ni oficina abierta al publico. Declarar una sede que no existe genera
 * un aviso en Search Console y ademas seria falso. Se usa
 * ProfessionalService con area de servicio, que es lo que si es cierto.
 */
export function organizationSchema(): Record<string, unknown> {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organizacion`,
    name: "automatizacionesMSL",
    url: siteUrl,
    email: defaultContactEmail,
    description:
      "CRM, automatizaciones y bots personalizados para agencias de viajes en España, ajustados a su forma de trabajar.",
    areaServed: { "@type": "Country", name: "Espana" },
    availableLanguage: "es",
    knowsAbout: [
      "Automatizacion de procesos comerciales",
      "CRM para agencias de viajes",
      "Seguimiento de oportunidades",
      "Gestión operativa de solicitudes",
      "Diseño de bots para agencias de viajes"
    ],
    logo: `${siteUrl}/icon`
  };
}

export function websiteSchema(): Record<string, unknown> {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#sitio`,
    url: siteUrl,
    name: "automatizacionesMSL",
    inLanguage: "es-ES",
    publisher: { "@id": `${siteUrl}/#organizacion` }
  };
}

export function faqSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(crumbs: readonly Crumb[]): Record<string, unknown> {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${siteUrl}${crumb.href === "/" ? "" : crumb.href}`
    }))
  };
}
