export const fallbackSiteUrl = "https://automatizaciones-msl.vercel.app";

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    fallbackSiteUrl;

  return configuredUrl.replace(/\/$/, "");
}
