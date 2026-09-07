export const defaultContactEmail = "hola@automatizacionesmsl.com";

/* Compromiso de respuesta, confirmado por Marc el 2026-09-07. */
export const responseCommitment = "menos de 24 h laborables";

/* Los ids de ancla se mantienen: hay enlaces vivos apuntando a ellos. */
export const navItems = [
  { label: "Que resuelve", href: "#producto" },
  { label: "Metodo", href: "#proceso" },
  { label: "Que incluye", href: "#servicios" },
  { label: "Caso iReViajes", href: "#prueba" },
  { label: "Preguntas", href: "#faq" }
];

export const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" }
];

export const hero = {
  eyebrow: "Automatizacion para agencias de viajes",
  title: "Cada solicitud clara. Cada oportunidad con siguiente paso.",
  subtitle:
    "Ordenamos la entrada, el seguimiento y los avisos de tu agencia para que el equipo responda antes y deje de depender de mensajes, notas y memoria.",
  microcopy: `Te respondemos en ${responseCommitment} con un punto de partida concreto.`,
  annotations: [
    "Solicitud completa desde el inicio",
    "Responsable y siguiente paso visibles",
    "Avisos solo donde ahorran tiempo"
  ]
};

/* Franja de credibilidad. Maximo once palabras por paso. */
export const flowSteps = [
  {
    step: "Entrada",
    body: "Los datos llegan completos desde el primer contacto."
  },
  {
    step: "Contexto",
    body: "Todo queda en una ficha compartida, no en mensajes sueltos."
  },
  {
    step: "Seguimiento",
    body: "Cada oportunidad tiene estado, responsable y siguiente paso."
  },
  {
    step: "Propuesta",
    body: "El equipo llega antes y con mas contexto al cliente."
  }
];

export const flowNote = "La automatizacion llega despues de ordenar la operativa.";

export const beforeAfter = {
  before: {
    label: "Antes",
    channels: ["Correo", "Telefono", "WhatsApp", "Formulario", "Notas sueltas"],
    body: "La informacion se reconstruye a mano y cada seguimiento depende de acordarse."
  },
  after: {
    label: "Despues",
    fields: ["Ficha de oportunidad", "Responsable", "Estado", "Siguiente paso", "Aviso"],
    body: "La agencia ve el contexto, quien actua y que toca hacer despues."
  }
};

export const microcases = [
  "Una solicitud de incentivo llega sin numero de asistentes.",
  "Un viaje de empresa queda pendiente de respuesta tras una llamada.",
  "Una propuesta necesita seguirse sin preguntar a todo el equipo."
];

/*
  Indicadores operativos. Sustituyen a los porcentajes que habia antes:
  no habia fuente, periodo ni linea base que los respaldara. Decision
  de Marc el 2026-09-07 tras la auditoria.
*/
export const indicators = [
  {
    title: "Solicitudes completas",
    body: "Los datos que hacen falta se piden en la entrada, no tres correos despues."
  },
  {
    title: "Siguiente paso visible",
    body: "Cada oportunidad muestra en que fase esta y que accion queda pendiente."
  },
  {
    title: "Responsable asignado",
    body: "Nadie tiene que preguntar a quien le toca mover un expediente."
  },
  {
    title: "Avisos pertinentes",
    body: "Solo se automatiza el paso que quita trabajo manual, no todo el proceso."
  }
];

export const indicatorsNote =
  "No publicamos porcentajes de mejora porque todavia no tenemos una medicion con periodo y linea base que los respalde.";

export const methodSteps = [
  {
    step: "01",
    title: "Mapeamos el punto de perdida",
    body: "Identificamos donde se rompe hoy: la captacion, la respuesta, el seguimiento o la propuesta."
  },
  {
    step: "02",
    title: "Ordenamos la entrada",
    body: "Definimos que informacion debe llegar completa y en que unico sitio se centraliza."
  },
  {
    step: "03",
    title: "Hacemos visible el seguimiento",
    body: "Cada oportunidad pasa a tener estado, responsable y siguiente accion."
  },
  {
    step: "04",
    title: "Automatizamos solo lo repetitivo",
    body: "Avisos, entradas y primeros pasos, cuando reducen trabajo manual sin anadir complejidad."
  }
];

/* Oferta como tabla de decision. Incluye que NO cubre cada opcion. */
export const offerColumns = ["Herramienta", "Implantacion", "Automatizacion"] as const;

export const offerRows = [
  {
    label: "Para que sirve",
    values: [
      "Ordenar operativa y seguimiento en un unico sitio.",
      "Adaptar esa base a como trabaja tu agencia de verdad.",
      "Quitar los pasos repetitivos que no aportan criterio."
    ]
  },
  {
    label: "Que se configura",
    values: [
      "Fases, estados, responsables y ficha de oportunidad.",
      "Campos de entrada, permisos y forma de uso del equipo.",
      "Avisos, entradas automaticas y primeros pasos."
    ]
  },
  {
    label: "Que recibe el equipo",
    values: [
      "Una vista comun de todo lo que esta en marcha.",
      "Una forma de trabajar acordada, no impuesta.",
      "Menos tareas manuales en los puntos de mas friccion."
    ]
  },
  {
    label: "Cuando conviene",
    values: [
      "El trabajo esta repartido entre bandejas y notas.",
      "Ya hay una base, pero cada persona la usa distinto.",
      "El proceso esta ordenado y aun sobra trabajo manual."
    ]
  },
  {
    label: "Que no incluye",
    values: [
      "Migrar historico ni sustituir tu sistema de reservas.",
      "Formacion continua mas alla de la puesta en marcha.",
      "Automatizar decisiones comerciales ni contacto en frio."
    ]
  }
];

export const offerFallback = {
  title: "Diagnostico primero",
  body: "Si no tienes claro cual de las tres necesitas, empieza por aqui. Miramos el caso y te decimos por donde tendria sentido empezar, sin compromiso."
};

export const caseStudy = {
  kicker: "Caso real · iReViajes",
  title: "Una primera implantacion en una agencia que trabaja con viajes complejos",
  body:
    "iReViajes, agencia boutique de Barcelona con mas de treinta anos organizando incentivos, congresos y viajes de empresa, partia de consultas dispersas y un seguimiento dificil de visualizar.",
  blocks: [
    {
      label: "Situacion inicial",
      body: "Cuatro canales de entrada, contexto reconstruido a mano y seguimiento que dependia de la memoria del equipo."
    },
    {
      label: "Intervencion",
      body: "Formulario cualificado, ficha de oportunidad con responsable y estado, avisos donde ahorran tiempo y propuesta alineada."
    },
    {
      label: "Resultado",
      body: "La primera implantacion valido el metodo en una operativa real. Los indicadores cuantitativos se publicaran cuando esten documentados."
    }
  ]
};

/* Quien hay detras. Solo lo que se puede afirmar. */
export const aboutBlock = {
  title: "Quien esta detras",
  body:
    "automatizacionesMSL lo lleva Marc Segala, que trabaja directamente con la agencia en cada implantacion. No hay capas intermedias ni un equipo de cuentas: hablas con quien configura la herramienta.",
  points: [
    {
      title: "Un interlocutor unico",
      body: "La misma persona hace el diagnostico, la implantacion y el seguimiento posterior."
    },
    {
      title: "Por fases, no de golpe",
      body: "Se empieza por el punto que mas duele y se amplia solo cuando aporta valor."
    },
    {
      title: "Sin datos de terceros",
      body: "Las capturas publicas de esta web usan datos inventados. Los de tu agencia no salen de aqui."
    }
  ]
};

export const faqs = [
  {
    question: "iReViajes es el producto?",
    answer:
      "No. iReViajes es la primera agencia que compro esta herramienta y se usa como caso real de partida. El producto es automatizacionesMSL."
  },
  {
    question: "Que se contrata exactamente?",
    answer:
      "Herramienta, implantacion, automatizacion o una combinacion de las tres. Si no lo tienes claro, se empieza por un diagnostico y se decide despues."
  },
  {
    question: "Cuanto hay que cambiar dentro de la agencia?",
    answer:
      "Se parte de como trabajais hoy y se toca primero el punto donde mas valor aporta. No hay que rehacer la operativa para empezar."
  },
  {
    question: "Se adapta a otra forma de trabajar?",
    answer:
      "Si. Las fases, los estados y los campos de entrada se definen con la agencia, porque el cuello de botella no esta en el mismo sitio en todas."
  },
  {
    question: "Cuando tiene sentido automatizar?",
    answer:
      "Cuando la entrada y el seguimiento ya estan ordenados. Automatizar sobre una operativa desordenada multiplica el desorden en lugar de reducirlo."
  },
  {
    question: "Cuando respondeis?",
    answer:
      "En menos de 24 h laborables, con una lectura del caso y una recomendacion de punto de partida."
  }
];

export const contactOptions = [
  { value: "entrada", label: "Entrada de solicitudes" },
  { value: "seguimiento", label: "Seguimiento comercial" },
  { value: "propuesta", label: "Propuesta al cliente" },
  { value: "carga", label: "Carga manual" },
  { value: "no_claro", label: "No lo tengo claro" }
] as const;
