export const defaultContactEmail = "hola@automatizacionesmsl.com";

/* Compromiso de respuesta, confirmado por Marc el 2026-09-07. */
export const responseCommitment = "menos de 24 h laborables";

/* Los ids de ancla se mantienen: hay enlaces vivos apuntando a ellos. */
export const navItems = [
  { label: "Qué resuelve", href: "#producto" },
  { label: "Método", href: "#proceso" },
  { label: "Qué incluye", href: "#servicios" },
  { label: "Caso iReViajes", href: "#prueba" },
  { label: "Preguntas", href: "#faq" }
];

export const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" }
];

export const hero = {
  eyebrow: "Automatización para agencias de viajes",
  titleLead: "Cada solicitud, clara.",
  titleAccent: "Cada oportunidad, con siguiente paso.",
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
    body: "El equipo llega antes y con más contexto al cliente."
  }
];

export const flowNote = "La automatización llega después de ordenar la operativa.";

export const beforeAfter = {
  before: {
    label: "Antes",
    channels: ["Correo", "Teléfono", "WhatsApp", "Formulario", "Notas sueltas"],
    body: "La información se reconstruye a mano y cada seguimiento depende de acordarse."
  },
  after: {
    label: "Después",
    fields: ["Ficha de oportunidad", "Responsable", "Estado", "Siguiente paso", "Aviso"],
    body: "La agencia ve el contexto, quién actúa y qué toca hacer después."
  }
};

export const microcases = [
  "Una solicitud de incentivo llega sin número de asistentes.",
  "Un viaje de empresa queda pendiente de respuesta tras una llamada.",
  "Una propuesta necesita seguirse sin preguntar a todo el equipo."
];

/*
  Indicadores operativos. Sustituyen a los porcentajes que había antes:
  no había fuente, periodo ni línea base que los respaldara. Decisión
  de Marc el 2026-09-07 tras la auditoria.
*/
export const indicators = [
  {
    title: "Solicitudes completas",
    body: "Los datos que hacen falta se piden en la entrada, no tres correos después."
  },
  {
    title: "Siguiente paso visible",
    body: "Cada oportunidad muestra en qué fase está y qué acción queda pendiente."
  },
  {
    title: "Responsable asignado",
    body: "Nadie tiene que preguntar a quién le toca mover un expediente."
  },
  {
    title: "Avisos pertinentes",
    body: "Solo se automatiza el paso que quita trabajo manual, no todo el proceso."
  }
];

export const indicatorsNote =
  "No publicamos porcentajes de mejora porque todavía no tenemos una medición con periodo y línea base que los respalde.";

export const methodSteps = [
  {
    step: "01",
    title: "Mapeamos el punto de pérdida",
    body: "Identificamos dónde se rompe hoy: la captación, la respuesta, el seguimiento o la propuesta."
  },
  {
    step: "02",
    title: "Ordenamos la entrada",
    body: "Definimos qué información debe llegar completa y en qué único sitio se centraliza."
  },
  {
    step: "03",
    title: "Hacemos visible el seguimiento",
    body: "Cada oportunidad pasa a tener estado, responsable y siguiente acción."
  },
  {
    step: "04",
    title: "Automatizamos solo lo repetitivo",
    body: "Avisos, entradas y primeros pasos, cuando reducen trabajo manual sin añadir complejidad."
  }
];

/* Oferta como tabla de decisión. Incluye que NO cubre cada opcion. */
export const offerColumns = ["Herramienta", "Implantación", "Automatización"] as const;

export const offerRows = [
  {
    label: "Para qué sirve",
    values: [
      "Ordenar operativa y seguimiento en un único sitio.",
      "Adaptar esa base a cómo trabaja tu agencia de verdad.",
      "Quitar los pasos repetitivos que no aportan criterio."
    ]
  },
  {
    label: "Qué se configura",
    values: [
      "Fases, estados, responsables y ficha de oportunidad.",
      "Campos de entrada, permisos y forma de uso del equipo.",
      "Avisos, entradas automáticas y primeros pasos."
    ]
  },
  {
    label: "Qué recibe el equipo",
    values: [
      "Una vista común de todo lo que está en marcha.",
      "Una forma de trabajar acordada, no impuesta.",
      "Menos tareas manuales en los puntos de más fricción."
    ]
  },
  {
    label: "Cuándo conviene",
    values: [
      "El trabajo está repartido entre bandejas y notas.",
      "Ya hay una base, pero cada persona la usa distinto.",
      "El proceso está ordenado y aún sobra trabajo manual."
    ]
  },
  {
    label: "Qué no incluye",
    values: [
      "Migrar histórico ni sustituir tu sistema de reservas.",
      "Formación continua más allá de la puesta en marcha.",
      "Automatizar decisiones comerciales ni contacto en frío."
    ]
  }
];

export const offerFallback = {
  title: "Diagnóstico primero",
  body: "Si no tienes claro cuál de las tres necesitas, empieza por aquí. Miramos el caso y te decimos por dónde tendría sentido empezar, sin compromiso."
};

export const caseStudy = {
  kicker: "Caso real · iReViajes",
  title: "Una primera implantación en una agencia que trabaja con viajes complejos",
  body:
    "iReViajes, agencia boutique de Barcelona con más de treinta años organizando incentivos, congresos y viajes de empresa, partía de consultas dispersas y un seguimiento difícil de visualizar.",
  blocks: [
    {
      label: "Situación inicial",
      body: "Cuatro canales de entrada, contexto reconstruido a mano y seguimiento que dependía de la memoria del equipo."
    },
    {
      label: "Intervención",
      body: "Formulario cualificado, ficha de oportunidad con responsable y estado, avisos donde ahorran tiempo y propuesta alineada."
    },
    {
      label: "Resultado",
      body: "La primera implantación validó el método en una operativa real. Los indicadores cuantitativos se publicarán cuando estén documentados."
    }
  ]
};

/* Quien hay detras. Solo lo que se puede afirmar. */
export const aboutBlock = {
  title: "Quién está detrás",
  body:
    "automatizacionesMSL lo lleva Marc Segalà, que trabaja directamente con la agencia en cada implantación. No hay capas intermedias ni un equipo de cuentas: hablas con quien configura la herramienta.",
  points: [
    {
      title: "Un interlocutor único",
      body: "La misma persona hace el diagnóstico, la implantación y el seguimiento posterior."
    },
    {
      title: "Por fases, no de golpe",
      body: "Se empieza por el punto que más duele y se amplía solo cuando aporta valor."
    },
    {
      title: "Sin datos de terceros",
      body: "Las capturas públicas de esta web usan datos inventados. Los datos reales de clientes se mantienen fuera del material público."
    }
  ]
};

export const faqs = [
  {
    question: "¿iReViajes es el producto?",
    answer:
      "iReViajes es la primera agencia que compró esta herramienta y se usa como caso real de partida. El producto es automatizacionesMSL."
  },
  {
    question: "¿Qué se contrata exactamente?",
    answer:
      "Herramienta, implantación, automatización o una combinación de las tres. Si no lo tienes claro, se empieza por un diagnóstico y se decide después."
  },
  {
    question: "¿Cuánto hay que cambiar dentro de la agencia?",
    answer:
      "Se parte de cómo trabajáis hoy y se toca primero el punto donde más valor aporta. No hay que rehacer la operativa para empezar."
  },
  {
    question: "¿Se adapta a otra forma de trabajar?",
    answer:
      "Sí. Las fases, los estados y los campos de entrada se definen con la agencia, porque el cuello de botella no está en el mismo sitio en todas."
  },
  {
    question: "¿Cuándo tiene sentido automatizar?",
    answer:
      "Cuando la entrada y el seguimiento ya están ordenados. Automatizar sobre una operativa desordenada multiplica el desorden en lugar de reducirlo."
  },
  {
    question: "¿Cuándo respondéis?",
    answer:
      `En ${responseCommitment}, con una lectura del caso y una recomendación de punto de partida.`
  }
];
