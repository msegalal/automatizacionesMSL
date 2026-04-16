export const fallbackSiteUrl = "https://automatizacionesmsl.com";

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    fallbackSiteUrl;

  return configuredUrl.replace(/\/$/, "");
}
