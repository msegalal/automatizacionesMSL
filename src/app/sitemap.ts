import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

/* Solo rutas indexables. /gracias y cualquier pagina noindex no entran aqui. */
const legalRoutes = ["/aviso-legal", "/privacidad", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    ...legalRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3
    }))
  ];
}
