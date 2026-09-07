export const defaultContactEmail = "hola@automatizacionesmsl.com";

/*
  Compromiso de respuesta. Valor por defecto conservador puesto por Claude
  el 2026-09-07: Marc no habia fijado ninguno. Cambiar aqui y se propaga a
  la seccion de contacto, al FAQ, a la pagina de gracias y al aviso legal.
*/
export const responseCommitment = "menos de 24 horas laborables";

/* Los anchors se mantienen estables: hay SEO y enlaces vivos apuntando aqui. */
export const navItems = [
  { label: "Oferta", href: "#servicios" },
  { label: "Caso real", href: "#prueba" },
  { label: "Que hace", href: "#producto" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" }
];

export const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" }
];

export const caseStudy = {
  kicker: "caso real",
  title: "Primera implantacion en iReViajes",
  body:
    "La primera venta fue a una agencia de viajes en activo. El punto de partida estaba claro: reducir carga manual, ordenar el seguimiento y presentar mejor la propuesta al cliente final.",
  bullets: [
    "Caso real del sector viajes",
    "Validado antes de salir a otras agencias",
    "Base preparada para operativas distintas"
  ]
};

export const trustPoints = [
  {
    value: "01",
    title: "Primera implantacion real",
    body: "La primera agencia ya existe y sirve como prueba de que la herramienta responde a un problema de negocio real."
  },
  {
    value: "02",
    title: "Problema concreto",
    body: "Ataca tres fricciones habituales: tareas manuales, seguimiento irregular y operativa dispersa."
  },
  {
    value: "03",
    title: "Pensado para negocio",
    body: "El mensaje se entiende desde gerencia porque habla de tiempo, control y conversion."
  },
  {
    value: "04",
    title: "Base adaptable",
    body: "Se adapta a la forma real de trabajar de cada agencia y puede crecer por fases."
  }
];

export const serviceCards = [
  {
    kicker: "Herramienta",
    title: "La base para ordenar operativa y seguimiento",
    body: "Concentra lo importante para que consultas, siguientes pasos y trabajo interno dejen de depender de mensajes sueltos o de la memoria del equipo.",
    bullets: [
      "Mas claridad sobre cada solicitud y su estado",
      "Menos dependencia de chats, notas y recordatorios manuales",
      "Una base facil de entender para todo el equipo"
    ]
  },
  {
    kicker: "Implantacion",
    title: "Adaptada a la forma real de trabajar de tu agencia",
    body: "Bajamos la herramienta a tu operativa, tu ritmo de trabajo y la parte del proceso que hoy mas te frena.",
    bullets: [
      "Detectamos donde se pierde mas tiempo hoy",
      "Aterrizamos el mensaje y la forma de uso",
      "La propuesta se entiende rapido desde negocio"
    ]
  },
  {
    kicker: "Automatizacion",
    title: "Automatizaciones ligeras donde de verdad ahorran tiempo",
    body: "Activamos automatizacion util solo en los puntos donde quita carga manual y mejora la respuesta sin complicar mas al equipo.",
    bullets: [
      "Avisos, entradas y pasos iniciales mejor resueltos",
      "Menos tareas repetitivas que no aportan valor",
      "Pack completo si quieres herramienta, implantacion y automatizacion"
    ]
  }
];

export const productModules = [
  {
    title: "Recoger mejor cada solicitud",
    body: "La entrada de consultas queda mas clara para que el equipo entienda antes el contexto y responda mejor."
  },
  {
    title: "Responder con menos friccion",
    body: "La operativa se organiza para que no se pierda tiempo entre mensajes, notas sueltas y pasos poco claros."
  },
  {
    title: "Seguir cada oportunidad",
    body: "Los siguientes pasos quedan visibles para que el seguimiento no dependa de recordar quien tenia que hacer que."
  },
  {
    title: "Explicar mejor la propuesta",
    body: "La solucion se presenta como una herramienta util y vendible, con un valor que se entiende desde gerencia."
  }
];

/*
  Cifras facilitadas por el cliente en el brief de marca.
  Van prefijadas con "Hasta" porque son un techo estimado, no una media medida.
*/
export const impactStats = [
  {
    value: "40%",
    prefix: "Hasta",
    title: "menos carga manual",
    body: "Automatizamos pasos repetitivos para que el equipo dedique mas tiempo a vender, atender y hacer seguimiento."
  },
  {
    value: "65%",
    prefix: "Hasta",
    title: "menos tiempo de respuesta",
    body: "La entrada de solicitudes y los avisos llegan ordenados para responder antes a cada consulta."
  },
  {
    value: "3x",
    prefix: "Hasta",
    title: "mas capacidad de seguimiento",
    body: "Con una operativa mas clara, cada persona mueve muchas mas oportunidades sin perder control."
  },
  {
    value: "30%",
    prefix: "Hasta",
    title: "mas estabilidad comercial",
    body: "Cuando el proceso esta mejor organizado, se pierden menos oportunidades por olvidos y retrasos."
  }
];

export const fitCards = [
  {
    title: "Si hoy respondes mas tarde de lo que te gustaria",
    body: "Cuando las solicitudes entran sin orden, la velocidad de respuesta cae y la oportunidad se enfria."
  },
  {
    title: "Si el seguimiento depende demasiado de acordarse",
    body: "Sin una base clara, el seguimiento se dispersa y se pierden pasos comerciales importantes."
  },
  {
    title: "Si la propuesta cuesta explicar o vender",
    body: "Cuando la herramienta no se entiende rapido, la agencia tarda mas en ver valor y en dar el siguiente paso."
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Vemos donde se atasca la operativa",
    body: "Identificamos si el cuello de botella esta en captacion, seguimiento, orden interno o carga manual."
  },
  {
    step: "02",
    title: "Definimos que encaja mejor",
    body: "Aterrizamos si necesitas la herramienta, implantacion, automatizacion o un pack completo."
  },
  {
    step: "03",
    title: "Ordenamos mensaje y experiencia",
    body: "La propuesta, la web y los CTA se alinean para que la agencia entienda rapido que compra y que gana."
  },
  {
    step: "04",
    title: "Dejamos la captacion operativa",
    body: "Formulario, email y automatizaciones basicas quedan listos para mover interes real desde el primer dia."
  }
];

export const faqs = [
  {
    question: "iReViajes es el producto?",
    answer:
      "No. iReViajes es la primera agencia que compro esta herramienta y se usa como caso real de partida. El producto es automatizacionesMSL."
  },
  {
    question: "Que se contrata exactamente?",
    answer:
      "Puedes contratar la herramienta, la implantacion, la automatizacion o un pack completo. La propuesta se ajusta a lo que tenga mas sentido para tu agencia."
  },
  {
    question: "Cuanto hay que cambiar dentro de la agencia?",
    answer:
      "La herramienta se adapta a la forma de trabajar actual y se empieza por el punto donde mas valor aporta, sin romper la operativa existente."
  },
  {
    question: "Se puede adaptar a otra forma de trabajar?",
    answer:
      "Si. La base ya esta validada en una primera agencia y esta planteada para ajustarse a equipos, volumenes y ritmos diferentes."
  },
  {
    question: "Cuanto tardais en responder?",
    answer:
      "Respondemos en menos de 24 horas laborables. En esa primera respuesta ya te decimos si vemos encaje y por donde tendria sentido empezar."
  },
  {
    question: "Que pasa si aun no quiero automatizaciones avanzadas?",
    answer:
      "La base puede arrancar solo con herramienta e implantacion, y el contacto sigue funcionando por email hasta que tenga sentido automatizar mas."
  }
];
