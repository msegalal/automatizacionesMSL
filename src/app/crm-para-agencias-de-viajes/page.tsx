import ServicePage, { type ServicePageContent } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";

const path = "/crm-para-agencias-de-viajes";

export const metadata = serviceMetadata({
  title: "CRM para agencias de viajes",
  description:
    "Organiza solicitudes y oportunidades con un CRM a medida para agencias de viajes. Diseñamos el seguimiento según cada equipo y también para tiendas y otros negocios.",
  path,
  imageAlt: "CRM adaptado al seguimiento comercial de una agencia de viajes"
});

const content: ServicePageContent = {
  serviceName: "CRM",
  audienceLabel: "CRM para agencias de viajes y negocios",
  ctaLabel: "Cuéntanos cómo trabaja tu equipo",
  title: "Un CRM para seguir solicitudes y oportunidades de viaje",
  introduction:
    "Cuando una petición pasa entre formularios, correos, hojas y conversaciones, cuesta recuperar el contexto y saber qué hacer después. Diseñamos el alcance del CRM con la operativa de tu agencia: qué registra el equipo, cómo evoluciona una oportunidad y quién da el siguiente paso. El mismo enfoque sirve para ordenar clientes y oportunidades en una tienda u otro negocio.",
  explanationTitle: "El contexto de un viaje necesita algo más que un contacto",
  explanation:
    "Una solicitud puede incluir destino, fechas, viajeros, presupuesto y preferencias. No todas las agencias necesitan los mismos datos ni trabajan con las mismas etapas. El CRM debe reflejar lo que ayuda al equipo a valorar y seguir cada oportunidad, sin llenar las fichas de campos que nadie utiliza. En una tienda, las etapas y los datos serán otros: los definimos según su actividad.",
  detailTitle: "Qué definimos con tu equipo",
  details: [
    {
      title: "Datos de cada solicitud",
      description:
        "Acordamos qué información conviene registrar para entender el viaje y preparar el seguimiento comercial."
    },
    {
      title: "Etapas de la oportunidad",
      description:
        "Dibujamos estados que correspondan a vuestro proceso real y permitan distinguir qué está pendiente."
    },
    {
      title: "Responsable y siguiente paso",
      description:
        "Precisamos cómo identificar quién continúa la conversación y qué acción debe revisar el equipo."
    }
  ],
  approachTitle: "Primero el proceso; después, la configuración",
  approach: [
    "No imponemos una lista universal de fases ni damos por hecha una integración. Revisamos cómo trabaja el equipo y confirmamos los requisitos de las herramientas implicadas antes de cerrar el alcance.",
    "La propuesta deja claro qué se adapta, qué necesita validación y qué queda fuera. Así el CRM responde a una necesidad concreta y la agencia puede valorar el siguiente paso con información suficiente."
  ],
  related: [
    {
      title: "Automatización para agencias de viajes",
      href: "/automatizacion-para-agencias-de-viajes"
    },
    { title: "Voz y chat para negocios", href: "/voz-y-chat-para-negocios" },
    {
      title: "Aplicaciones a medida para negocios",
      href: "/aplicaciones-a-medida-para-negocios"
    }
  ]
};

export default function CrmParaAgenciasDeViajesPage() {
  return <ServicePage content={content} path={path} />;
}
