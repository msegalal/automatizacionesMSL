import type { Metadata } from "next";
import { fraunces, spaceGrotesk } from "@/lib/fonts";
import { getSiteUrl } from "@/lib/site-url";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const siteUrl = getSiteUrl();
const siteTitle = "automatizacionesMSL | Herramientas para agencias de viajes";
const siteDescription =
  "AutomatizacionesMSL ayuda a agencias de viajes a reducir trabajo manual, ordenar su operativa y ganar tiempo con una herramienta ya validada en negocio real.";

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
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription
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
      <body className="min-h-full font-sans">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
