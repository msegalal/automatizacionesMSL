import type { Metadata } from "next";
import { instrumentSans, newsreader } from "@/lib/fonts";
import { getSiteUrl } from "@/lib/site-url";
import ConsentGate from "@/components/ConsentGate";
import StickyMobileCta from "@/components/StickyMobileCta";
import "./globals.css";

const siteUrl = getSiteUrl();
const siteTitle = "automatizacionesMSL | Herramientas para agencias de viajes";
const siteDescription =
  "Herramienta, implantación y automatización para agencias de viajes que quieren menos carga manual, mejor seguimiento y más control operativo.";

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
    <html
      lang="es"
      className={`${instrumentSans.variable} ${newsreader.variable} h-full`}
    >
      <body className="site-body min-h-full">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}
        <StickyMobileCta />
        <ConsentGate />
      </body>
    </html>
  );
}
