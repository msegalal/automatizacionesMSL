import type { Metadata } from "next";
import { fraunces, spaceGrotesk } from "@/lib/fonts";
import { getSiteUrl } from "@/lib/site-url";
import ConsentGate from "@/components/ConsentGate";
import StickyMobileCta from "@/components/StickyMobileCta";
import "./globals.css";

const siteUrl = getSiteUrl();
const siteTitle = "CRM y automatización para agencias de viajes | automatizacionesMSL";
const siteDescription =
  "CRM, automatizaciones y bots para agencias de viajes en España. Soluciones personalizadas para ordenar solicitudes, seguir oportunidades y reducir tareas manuales.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "automatizacionesMSL",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CRM y automatización a medida para agencias de viajes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="tiene-cta-movil min-h-full font-sans">
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
        <StickyMobileCta />
        <ConsentGate />
      </body>
    </html>
  );
}
