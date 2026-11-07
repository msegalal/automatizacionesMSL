import type { Metadata } from "next";
import { redirect } from "next/navigation";

/*
 * Demo de CRM para agencias de viajes, con datos inventados.
 * Archivos estáticos en public/demo-agencias, copiados de la demo local del piloto.
 * Sin formulario, envío de datos, base de datos, analítica ni conexiones externas.
 * Fuera del sitemap y de la navegación, con noindex: se comparte solo por enlace.
 * Mismo patrón que /demo-gestion-leads.
 */
export const metadata: Metadata = {
  title: "Demo de CRM para agencias de viajes | automatizacionesMSL",
  description:
    "Demostración de CRM para agencias de viajes con datos inventados. No está conectada a ninguna agencia ni a sus sistemas.",
  alternates: {
    canonical: "/demo-agencias"
  },
  robots: {
    index: false,
    follow: false
  }
};

export default function DemoAgenciasPage() {
  redirect("/demo-agencias/index.html");
}
