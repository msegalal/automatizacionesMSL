import type { Metadata } from "next";
import { fraunces, spaceGrotesk } from "@/lib/fonts";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "automatizacionesMSL | Sistemas y automatizacion para agencias de viajes",
  description:
    "Diseño web, producto y automatizacion para convertir soluciones reales en ofertas B2B vendibles a agencias de viajes."
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
