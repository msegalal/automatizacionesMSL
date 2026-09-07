import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

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
    {
      url: `${siteUrl}/aviso-legal`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${siteUrl}/privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${siteUrl}/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
