import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "CRM de pruebas | automatizacionesMSL",
  description: "Entorno de prueba para organizar contactos y oportunidades.",
  alternates: {
    canonical: "/demo-gestion-leads"
  },
  robots: {
    index: false,
    follow: false
  }
};

export default function DemoGestionLeadsPage() {
  redirect("/demo-gestion-leads/index.html");
}
