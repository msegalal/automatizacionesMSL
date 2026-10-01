import ServicePage, { type ServicePageContent } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";

const path = "/bots-para-agencias-de-viajes";

export const metadata = serviceMetadata({
  title: "Bots para agencias de viajes",
  description:
    "Valora un bot para tu agencia de viajes: define qué tarea cubre, qué información gestiona y qué canal es viable antes de ofrecerlo.",
  path,
  imageAlt: "Bots definidos para las necesidades de una agencia de viajes"
});

const content: ServicePageContent = {
  serviceName: "Bots",
  title: "Bots para agencias de viajes, con una tarea bien definida",
  introduction:
    "Un bot solo resulta útil si tiene un cometido claro dentro de la atención de la agencia. Puede estudiarse para orientar una consulta, recoger información inicial o indicar cuándo debe intervenir una persona, siempre dentro de un alcance acordado.",
  explanationTitle: "El canal y las funciones se confirman antes de proponerlo",
  explanation:
    "No damos por hecho que un bot vaya a funcionar en WhatsApp, en la web o en otro canal, ni que pueda acceder a sistemas de reservas. Primero entendemos la tarea, la información disponible y los requisitos técnicos; después confirmamos qué canal es viable y qué puede atender realmente.",
  detailTitle: "Los límites también forman parte del diseño",
  details: [
    {
      title: "Una consulta concreta",
      description:
        "Definimos qué pregunta o paso repetitivo se quiere atender y para quién sería útil."
    },
    {
      title: "Información autorizada",
      description:
        "Acordamos qué puede responder o solicitar el bot y qué temas debe dejar a una persona."
    },
    {
      title: "Canal y derivación",
      description:
        "Comprobamos la viabilidad del canal y establecemos cómo reconocer los casos que requieren atención humana."
    }
  ],
  approachTitle: "Sin prometer un canal o una respuesta antes de comprobarlo",
  approach: [
    "La primera conversación sirve para decidir si un bot aporta algo frente a un formulario, un CRM o una automatización más sencilla. Si no hay un caso claro, no hace falta añadir un bot.",
    "Si lo hay, dejamos por escrito el propósito, la información que utilizaría, los límites y las dependencias técnicas. El canal concreto solo se comunica cuando está confirmado para ese proyecto."
  ],
  related: [
    { title: "CRM para agencias de viajes", href: "/crm-para-agencias-de-viajes" },
    {
      title: "Automatización para agencias de viajes",
      href: "/automatizacion-para-agencias-de-viajes"
    }
  ]
};

export default function BotsParaAgenciasDeViajesPage() {
  return <ServicePage content={content} path={path} />;
}
