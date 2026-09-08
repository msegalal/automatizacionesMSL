import { getSiteUrl } from "@/lib/site-url";

export interface Crumb {
  label: string;
  href: string;
}

/*
 * Datos estructurados de las migas de pan. Solo se declara lo que se
 * puede afirmar: las etiquetas y las rutas que ya existen en el sitio.
 */
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
