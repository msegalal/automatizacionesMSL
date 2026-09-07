import { getSiteUrl } from "@/lib/site-url";
import { defaultContactEmail, faqs } from "@/lib/site-content";

export interface Crumb {
  label: string;
  href: string;
}

/*
 * Datos estructurados. Solo se declara lo que se puede afirmar.
 * La direccion postal y el telefono no estan porque todavia no
 * tenemos el dato: marcar un LocalBusiness sin address genera un
 * aviso en Search Console y no aporta nada.
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
      "Herramienta, implantacion y automatizacion para agencias de viajes que quieren menos carga manual, mejor seguimiento y mas control operativo.",
    areaServed: { "@type": "Country", name: "Espana" },
    availableLanguage: "es",
    knowsAbout: [
      "Automatizacion de procesos comerciales",
      "CRM para agencias de viajes",
      "Seguimiento de oportunidades",
      "Gestion operativa de solicitudes"
    ],
    logo: `${siteUrl}/icon`,
    image: `${siteUrl}/opengraph-image`
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

export function caseStudySchema(): Record<string, unknown> {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Primera implantacion en iReViajes",
    description:
      "Como una agencia de viajes de Barcelona ordeno la entrada de solicitudes y el seguimiento comercial con la herramienta de automatizacionesMSL.",
    inLanguage: "es-ES",
    image: `${siteUrl}/caso-ireviajes-web.jpg`,
    publisher: { "@id": `${siteUrl}/#organizacion` },
    mainEntityOfPage: `${siteUrl}/casos/ireviajes`
  };
}
