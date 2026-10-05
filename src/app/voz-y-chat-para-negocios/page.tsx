import ServicePage, { type ServicePageContent } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";

const path = "/voz-y-chat-para-negocios";

export const metadata = serviceMetadata({
  title: "Voz y chat para negocios",
  description:
    "Diseñamos atención conversacional para llamadas, WhatsApp y chat web. Definimos el cometido, la información, los límites y cuándo interviene una persona.",
  path,
  imageAlt: "Soluciones de voz y chat adaptadas a cada negocio"
});

const content: ServicePageContent = {
  serviceName: "Voz y chat",
  audienceLabel: "Voz, WhatsApp y chat para negocios",
  ctaLabel: "Cuéntanos qué conversación quieres atender",
  title: "Atención por llamadas y chat diseñada para tu negocio",
  visualVariant: "voice",
  heroPoints: ["Llamadas de voz", "WhatsApp", "Chat web"],
  introduction:
    "Una llamada o un mensaje puede ser una consulta comercial, una pregunta frecuente o una petición de ayuda. Diseñamos soluciones de voz para llamadas y atención conversacional para WhatsApp o chat web, de acuerdo con la tarea y el papel que debe tener el equipo.",
  explanationTitle: "El canal es solo una parte de la solución",
  explanation:
    "Antes de definir una experiencia, acordamos qué puede atender, qué información puede utilizar, cómo debe responder y en qué momento tiene que pasar la conversación a una persona. Después se confirma la viabilidad técnica del canal y el alcance para ese proyecto.",
  detailTitle: "Qué delimitamos antes de plantear una solución",
  details: [
    {
      title: "Llamadas de voz",
      description:
        "Concretamos qué tipo de llamada se quiere atender, qué conversación tendría sentido y qué casos requieren a una persona."
    },
    {
      title: "WhatsApp o chat web",
      description:
        "Definimos qué consultas puede gestionar la solución y qué información necesita para responder dentro del alcance acordado."
    },
    {
      title: "Límites y derivación",
      description:
        "Acordamos cómo actuar ante una petición que no pueda resolver, información insuficiente o una conversación que deba continuar el equipo."
    }
  ],
  approachTitle: "Una conversación útil empieza por tener límites claros",
  approach: [
    "Revisamos ejemplos reales de consultas y acordamos qué resultado espera el negocio: orientar, recoger información o facilitar el paso al equipo.",
    "Validamos el canal y los requisitos técnicos antes de cerrar la propuesta. No damos por hecho el acceso a sistemas, funciones o conexiones que no estén confirmados."
  ],
  related: [
    {
      title: "CRM para agencias de viajes",
      href: "/crm-para-agencias-de-viajes",
      description: "Da estructura a las solicitudes y al seguimiento que continúa después de la conversación."
    },
    {
      title: "Automatización para agencias de viajes",
      href: "/automatizacion-para-agencias-de-viajes",
      description: "Analiza pasos repetitivos y las condiciones necesarias para automatizarlos con sentido."
    },
    {
      title: "Aplicaciones a medida para negocios",
      href: "/aplicaciones-a-medida-para-negocios",
      description: "Considera una aplicación propia si las herramientas actuales no resuelven una tarea concreta."
    }
  ],
  closingTitle: "¿Qué consultas te gustaría atender mejor?",
  closingDescription:
    "Hablemos del tipo de conversación, el canal que tienes en mente y los casos que necesitan a una persona. La solución y su viabilidad se definen para cada proyecto."
};

export default function VozYChatParaNegociosPage() {
  return <ServicePage content={content} path={path} />;
}
