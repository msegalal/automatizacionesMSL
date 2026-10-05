import ServicePage, { type ServicePageContent } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";

const path = "/automatizacion-para-agencias-de-viajes";

export const metadata = serviceMetadata({
  title: "Automatización para agencias de viajes",
  description:
    "Automatiza tareas repetitivas en agencias de viajes y otros negocios. Acordamos reglas, excepciones y requisitos técnicos antes de definir cada proceso.",
  path,
  imageAlt: "Automatización de tareas y procesos para agencias de viajes"
});

const content: ServicePageContent = {
  serviceName: "Automatización",
  audienceLabel: "Automatización para agencias y otros negocios",
  ctaLabel: "Cuéntanos qué tarea quieres simplificar",
  title: "Automatiza tareas repetitivas de tu agencia de viajes",
  visualVariant: "automation",
  heroPoints: ["Tareas que se repiten", "Reglas y excepciones", "Viabilidad técnica"],
  introduction:
    "Copiar información, avisar de un cambio o comprobar varias veces si una tarea se ha completado consume tiempo cuando se repite a diario. Revisamos esos pasos con el equipo y concretamos cuáles tienen reglas suficientemente claras para simplificarlos. Este trabajo puede tener sentido en una agencia de viajes, una tienda u otro negocio.",
  explanationTitle: "No todos los procesos conviene automatizarlos",
  explanation:
    "Una automatización depende de entender qué la inicia, qué condiciones debe cumplir y cómo se tratan las excepciones. Si una tarea cambia según cada solicitud o las herramientas no permiten conectarla de forma fiable, se plantea otra forma de reducir trabajo o se deja fuera del alcance.",
  detailTitle: "Del trabajo manual a una propuesta acotada",
  details: [
    {
      title: "Localizar la repetición",
      description:
        "Elegimos una tarea concreta y vemos cuántas veces se repite, quién interviene y qué información utiliza."
    },
    {
      title: "Escribir la regla",
      description:
        "Definimos qué condición inicia el paso, qué resultado se espera y qué casos requieren revisión humana."
    },
    {
      title: "Validar la viabilidad",
      description:
        "Confirmamos los requisitos y compatibilidad de las herramientas antes de proponer una conexión o un flujo."
    }
  ],
  approachTitle: "Empezamos por un proceso que se pueda explicar y revisar",
  approach: [
    "Podemos estudiar, por ejemplo, un aviso asociado a un cambio de estado o la transferencia de información entre pasos. Son situaciones a valorar, no integraciones incluidas por defecto.",
    "La propuesta concreta qué dispara el proceso, qué resultado debe producir y cómo se detecta una excepción. La agencia valida el alcance antes de implantarlo."
  ],
  related: [
    {
      title: "CRM para agencias de viajes",
      href: "/crm-para-agencias-de-viajes",
      description: "Ordena solicitudes, oportunidades y próximos pasos según el proceso comercial."
    },
    {
      title: "Voz y chat para negocios",
      href: "/voz-y-chat-para-negocios",
      description: "Define una atención conversacional que aclare cuándo responde una solución y cuándo el equipo."
    },
    {
      title: "Aplicaciones a medida para negocios",
      href: "/aplicaciones-a-medida-para-negocios",
      description: "Explora una aplicación diseñada en torno a las tareas y datos de tu negocio."
    }
  ],
  closingTitle: "Empecemos por la tarea que más se repite",
  closingDescription:
    "Descríbenos qué la inicia, qué información interviene y dónde requiere revisión. Así podremos valorar si automatizarla es una opción razonable."
};

export default function AutomatizacionParaAgenciasDeViajesPage() {
  return <ServicePage content={content} path={path} />;
}
