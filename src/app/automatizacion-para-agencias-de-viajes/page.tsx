import ServicePage, { type ServicePageContent } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";

const path = "/automatizacion-para-agencias-de-viajes";

export const metadata = serviceMetadata({
  title: "Automatización para agencias de viajes",
  description:
    "Identifica tareas repetitivas en tu agencia de viajes y define qué automatizar, con qué reglas y tras confirmar los requisitos técnicos.",
  path,
  imageAlt: "Automatización de tareas y procesos para agencias de viajes"
});

const content: ServicePageContent = {
  serviceName: "Automatización",
  title: "Automatiza tareas repetitivas de tu agencia de viajes",
  introduction:
    "Copiar información, avisar de un cambio o comprobar varias veces si una tarea se ha completado consume tiempo cuando se repite a diario. Revisamos esos pasos con el equipo y concretamos cuáles tienen reglas suficientemente claras para simplificarlos.",
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
    { title: "CRM para agencias de viajes", href: "/crm-para-agencias-de-viajes" },
    { title: "Bots para agencias de viajes", href: "/bots-para-agencias-de-viajes" }
  ]
};

export default function AutomatizacionParaAgenciasDeViajesPage() {
  return <ServicePage content={content} path={path} />;
}
