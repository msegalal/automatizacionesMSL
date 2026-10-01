export const defaultContactEmail = "hola@automatizacionesmsl.com";

export const navItems = [
  { label: "CRM", href: "/crm-para-agencias-de-viajes" },
  { label: "Automatización", href: "/automatizacion-para-agencias-de-viajes" },
  { label: "Bots", href: "/bots-para-agencias-de-viajes" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas", href: "#faq" }
];

export const serviceCards = [
  {
    href: "/crm-para-agencias-de-viajes",
    kicker: "CRM para agencias de viajes",
    title: "Sigue cada solicitud y oportunidad con contexto",
    body:
      "Definimos cómo registrar una petición de viaje, en qué punto está y cuál es el siguiente paso comercial, según la forma de trabajar de tu agencia.",
    bullets: [
      "Acordar etapas que reflejen vuestro proceso de venta",
      "Identificar qué datos de la solicitud necesita el equipo",
      "Dar contexto al seguimiento de cada oportunidad"
    ]
  },
  {
    href: "/automatizacion-para-agencias-de-viajes",
    kicker: "Automatización de procesos",
    title: "Reduce tareas repetitivas donde tenga sentido",
    body:
      "Revisamos qué pasos se repiten, qué reglas los gobiernan y si compensa automatizarlos. El alcance se concreta antes de proponer herramientas o conexiones.",
    bullets: [
      "Localizar trabajo manual que se repite en la operativa",
      "Acordar qué debe ocurrir y en qué condiciones",
      "Empezar por un proceso acotado y revisable"
    ]
  },
  {
    href: "/bots-para-agencias-de-viajes",
    kicker: "Bots para agencias de viajes",
    title: "Valora un bot para una tarea concreta",
    body:
      "Un bot puede ayudar a resolver una consulta o recoger información si el canal y el alcance son viables. Primero definimos su cometido y cuándo debe intervenir una persona.",
    bullets: [
      "Elegir una tarea útil y delimitar qué cubre",
      "Precisar qué información puede ofrecer o solicitar",
      "Confirmar el canal y las condiciones antes de plantearlo"
    ]
  }
];

export const trustPoints = [
  {
    value: "01",
    title: "Entender la operativa",
    body: "Revisamos cómo entran las consultas, quién las atiende y cómo se hace hoy el seguimiento."
  },
  {
    value: "02",
    title: "Acordar el alcance",
    body: "La propuesta concreta qué se configura o automatiza y qué requisitos deben confirmarse."
  },
  {
    value: "03",
    title: "Priorizar lo útil",
    body: "Empezamos por el problema acordado, sin añadir pasos o funciones que no necesita el equipo."
  },
  {
    value: "04",
    title: "Revisar el resultado",
    body: "El efecto se valora con la agencia y con los datos que estén disponibles para ese proceso."
  }
];

export const productModules = [
  {
    title: "La entrada de las solicitudes",
    body:
      "Definimos qué información ayuda a entender una consulta de viaje y cómo llega hoy al equipo."
  },
  {
    title: "El recorrido de cada oportunidad",
    body:
      "Acordamos qué etapas describen vuestro seguimiento comercial y quién necesita intervenir en cada una."
  },
  {
    title: "Las tareas que se repiten",
    body:
      "Buscamos pasos manuales con reglas claras y comprobamos si su automatización encaja en el alcance."
  },
  {
    title: "La atención con un bot",
    body:
      "Si hay un caso adecuado, delimitamos propósito, información, canal viable y momento de derivación a una persona."
  }
];

export const impactStats = [
  {
    prefix: "solicitudes",
    title: "Información de partida",
    body: "Definir qué contexto necesita el equipo para valorar una petición de viaje."
  },
  {
    prefix: "oportunidades",
    title: "Seguimiento trazable",
    body: "Acordar cómo revisar la fase y el siguiente paso de cada oportunidad."
  },
  {
    prefix: "operativa",
    title: "Menos repetición manual",
    body: "Identificar tareas rutinarias que se puedan simplificar con reglas claras."
  },
  {
    prefix: "atención",
    title: "Bots con un cometido definido",
    body: "Estudiar si un bot sirve para una consulta concreta y si el canal es viable."
  }
];

export const impactNote =
  "Son objetivos de diseño, no resultados garantizados. Cada cambio se concreta con la agencia; no publicamos porcentajes sin periodo, línea base y evidencia.";

/* Compromiso de respuesta, confirmado por Marc el 2026-09-07. Fuente única. */
export const responseCommitment = "menos de 24 h laborables";

export const fitCards = [
  {
    title: "Las consultas quedan repartidas",
    body:
      "Revisamos por dónde llegan y qué contexto necesita el equipo para trabajar cada solicitud."
  },
  {
    title: "Cuesta saber qué seguimiento toca",
    body:
      "Mapeamos las etapas y los siguientes pasos que tienen sentido en vuestro proceso comercial."
  },
  {
    title: "Hay trabajo manual que se repite",
    body:
      "Comprobamos si el proceso tiene reglas claras y si automatizarlo resulta práctico."
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Entendemos vuestro recorrido",
    body:
      "Revisamos cómo una consulta se convierte en oportunidad y qué tareas acompañan ese proceso."
  },
  {
    step: "02",
    title: "Delimitamos el problema",
    body:
      "Acordamos qué conviene resolver primero: CRM y seguimiento, automatización, un bot o una combinación."
  },
  {
    step: "03",
    title: "Confirmamos el alcance",
    body:
      "Concretamos reglas, datos necesarios y requisitos técnicos antes de plantear conexiones o canales."
  },
  {
    step: "04",
    title: "Implantamos lo acordado",
    body:
      "Trabajamos sobre el alcance definido y revisamos con el equipo si responde a la necesidad inicial."
  }
];

export const faqs = [
  {
    question: "¿Qué es un CRM para una agencia de viajes?",
    answer:
      "Es una herramienta para registrar solicitudes y oportunidades y dar contexto a su seguimiento. El alcance depende de los datos y del proceso comercial de cada agencia."
  },
  {
    question: "¿La solución es igual para todas las agencias?",
    answer:
      "No partimos de una configuración cerrada. Primero revisamos la operativa y después concretamos qué adaptar; cualquier requisito pendiente de confirmar queda fuera del alcance hasta validarlo."
  },
  {
    question: "¿Qué se puede automatizar?",
    answer:
      "Depende de las tareas, las reglas y las herramientas que ya use la agencia. Analizamos un proceso concreto y confirmamos su viabilidad antes de proponer una automatización."
  },
  {
    question: "¿El bot funciona en WhatsApp u otro canal?",
    answer:
      "No damos por hecho ningún canal. Antes de incluir un bot, definimos su cometido y comprobamos qué canal puede utilizarse con el alcance acordado."
  },
  {
    question: "¿Puedo pedir solo uno de los servicios?",
    answer:
      "Sí. Podemos valorar CRM, automatización o bots por separado o combinados, según la necesidad y la viabilidad del proyecto."
  }
];
