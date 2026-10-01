import type { Metadata } from "next";

interface ServiceMetadataInput {
  title: string;
  description: string;
  path: string;
  imageAlt: string;
}

export function serviceMetadata({
  title,
  description,
  path,
  imageAlt
}: ServiceMetadataInput): Metadata {
  const pageTitle = `${title} | automatizacionesMSL`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: pageTitle,
      description,
      url: path,
      siteName: "automatizacionesMSL",
      locale: "es_ES",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/twitter-image"]
    },
    robots: { index: true, follow: true }
  };
}
