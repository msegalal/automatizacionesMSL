import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

/* Solo rutas indexables. No se declaran fechas que no se puedan mantener. */
const legalRoutes = ["/aviso-legal", "/privacidad", "/cookies"];
const serviceRoutes = [
  "/crm-para-agencias-de-viajes",
  "/automatizacion-para-agencias-de-viajes",
  "/voz-y-chat-para-negocios",
  "/aplicaciones-a-medida-para-negocios"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl
    },
    ...serviceRoutes.map((route) => ({ url: `${siteUrl}${route}` })),
    ...legalRoutes.map((route) => ({ url: `${siteUrl}${route}` }))
  ];
}
