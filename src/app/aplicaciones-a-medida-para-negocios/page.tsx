import ServicePage, { type ServicePageContent } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";

const path = "/aplicaciones-a-medida-para-negocios";

export const metadata = serviceMetadata({
  title: "Aplicaciones a medida para negocios",
  description:
    "Diseñamos aplicaciones a medida para resolver necesidades concretas de cada negocio, desde la operativa del equipo hasta los datos que necesita gestionar.",
  path,
  imageAlt: "Aplicaciones diseñadas alrededor de las necesidades de cada negocio"
});

const content: ServicePageContent = {
  serviceName: "Aplicaciones a medida",
  audienceLabel: "Aplicaciones a medida para negocios",
  ctaLabel: "Cuéntanos qué aplicación necesita tu equipo",
  title: "Una aplicación creada alrededor de tu forma de trabajar",
  visualVariant: "application",
  heroPoints: ["Necesidad concreta", "Personas y tareas", "Alcance definido"],
  introduction:
    "Cuando las herramientas disponibles no encajan con el proceso, diseñamos una aplicación para la necesidad concreta del negocio. Somos especialistas en crear soluciones a medida: primero entendemos el trabajo que hay que resolver y después delimitamos qué debe hacer la aplicación.",
  explanationTitle: "La necesidad guía la aplicación",
  explanation:
    "El proyecto empieza por las tareas, las personas que las realizan y la información con la que trabajan. Con eso definimos el alcance y los requisitos técnicos, evitando proponer pantallas o funciones que no ayudan al objetivo acordado.",
  detailTitle: "Qué definimos antes de plantear el desarrollo",
  details: [
    {
      title: "El problema que resuelve",
      description:
        "Acordamos qué tarea resulta difícil con las herramientas actuales y qué debería poder hacer el equipo."
    },
    {
      title: "Personas y datos",
      description:
        "Identificamos quién utilizará la aplicación, qué información necesita y qué permisos o responsabilidades hay que considerar."
    },
    {
      title: "Alcance y requisitos",
      description:
        "Concretamos las funciones necesarias y comprobamos los requisitos técnicos antes de proponer una solución."
    }
  ],
  approachTitle: "Primero se entiende el trabajo; luego se diseña la herramienta",
  approach: [
    "Revisamos el proceso con las personas que lo realizan y separamos la necesidad principal de las ideas que pueden esperar.",
    "La propuesta recoge el alcance acordado y sus dependencias. Cualquier integración o requisito externo se valida antes de incluirlo."
  ],
  related: [
    {
      title: "CRM para agencias de viajes",
      href: "/crm-para-agencias-de-viajes",
      description: "Organiza la información y los siguientes pasos de solicitudes y oportunidades."
    },
    {
      title: "Automatización para agencias de viajes",
      href: "/automatizacion-para-agencias-de-viajes",
      description: "Reduce tareas repetidas cuando las reglas y las herramientas lo permiten."
    },
    {
      title: "Voz y chat para negocios",
      href: "/voz-y-chat-para-negocios",
      description: "Diseña conversaciones por llamadas, WhatsApp o chat web según las necesidades del negocio."
    },
  ],
  closingTitle: "¿Qué herramienta le falta a tu equipo?",
  closingDescription:
    "Explícanos la tarea, quién necesita hacerla y qué información utiliza. Empezaremos por aclarar si una aplicación a medida encaja con esa necesidad."
};

export default function AplicacionesAMedidaParaNegociosPage() {
  return <ServicePage content={content} path={path} />;
}
