/* Datos de la demo. TODO ES INVENTADO: agencia, personas, salidas, fechas y plazos.
   No representa a ninguna agencia real ni contiene datos personales.
   Los valores de `config` son ejemplos editables desde la demo, no reglas de ninguna agencia. */
window.DEMO_DATOS = {
  config: {
    horasPrimeraRespuesta: 24,      // horas contadas de lunes a viernes, sin horario comercial ni festivos
    diasSeguimientoPresupuesto: 3,  // días sin respuesta a un presupuesto
    horasBloqueo: 48,               // duración de un bloqueo de plaza
    horasAvisoBloqueo: 12,          // aviso antes de que caduque el bloqueo
    umbralUltimasPlazas: 3          // plazas libres a partir de las que se avisa
  },
  inicial: {
    ahora: "2027-01-11T09:00",
    siguienteId: 6,
    agentes: [
      { id: "Agente A", rol: "Diseño de viajes" },
      { id: "Agente B", rol: "Diseño de viajes" },
      { id: "Agente C", rol: "Gestión de salidas" }
    ],
    salidas: [
      { id: "G-ISL-0327", destino: "Islandia", desde: "2027-03-12", hasta: "2027-03-19",
        plazasTotales: 16, ocupadasPrevias: 11, listaEspera: [] },
      { id: "G-MAR-0427", destino: "Marruecos", desde: "2027-04-20", hasta: "2027-04-27",
        plazasTotales: 12, ocupadasPrevias: 12, listaEspera: ["S-0004"] }
    ],
    solicitudes: [
      { id: "S-0001", fechaEntrada: "2027-01-06T10:32", canal: "formulario web", tipo: "medida", salidaId: "",
        destino: "Japón", ventana: "octubre de 2027", adultos: 2, ninos: 0, presupuesto: "3.000 a 5.000 €",
        contacto: "Cliente Demo 01", comerciales: "no consta", responsable: "Agente A",
        etapa: "Presupuesto enviado", version: 1, primeraRespuesta: "2027-01-06T12:10",
        presupuestoEnviado: "2027-01-08T16:00", respuestaCliente: null, bloqueoHasta: null, motivoPerdida: "",
        proximaAccion: "Esperar respuesta al presupuesto v1",
        historial: [
          { fecha: "2027-01-06T10:32", usuario: "Sistema", texto: "Consulta entrante por formulario web. Asignada a Agente A." },
          { fecha: "2027-01-06T12:10", usuario: "Agente A", texto: "Primera respuesta registrada." },
          { fecha: "2027-01-08T16:00", usuario: "Agente A", texto: "Presupuesto v1 enviado, de forma simulada." }
        ] },
      { id: "S-0002", fechaEntrada: "2027-01-10T19:45", canal: "WhatsApp", tipo: "grupo", salidaId: "G-ISL-0327",
        destino: "Islandia", ventana: "", adultos: 1, ninos: 0, presupuesto: "",
        contacto: "Cliente Demo 02", comerciales: "no consta", responsable: "Agente C",
        etapa: "Plaza bloqueada", version: 0, primeraRespuesta: "2027-01-11T08:50",
        presupuestoEnviado: null, respuestaCliente: null, bloqueoHasta: "2027-01-13T18:00", motivoPerdida: "",
        proximaAccion: "Confirmar la plaza o liberarla",
        historial: [
          { fecha: "2027-01-10T19:45", usuario: "Sistema", texto: "Consulta entrante por WhatsApp, simulada. Asignada a Agente C." },
          { fecha: "2027-01-11T08:50", usuario: "Agente C", texto: "Primera respuesta registrada. Plaza bloqueada." }
        ] },
      { id: "S-0003", fechaEntrada: "2027-01-08T11:15", canal: "teléfono", tipo: "medida", salidaId: "",
        destino: "Perú", ventana: "julio de 2027", adultos: 2, ninos: 2, presupuesto: "1.500 a 3.000 €",
        contacto: "Cliente Demo 03", comerciales: "acepta", responsable: "Agente B",
        etapa: "Cualificación", version: 0, primeraRespuesta: "2027-01-08T12:00",
        presupuestoEnviado: null, respuestaCliente: null, bloqueoHasta: null, motivoPerdida: "",
        proximaAccion: "",
        historial: [
          { fecha: "2027-01-08T11:15", usuario: "Sistema", texto: "Consulta entrante por teléfono, alta manual. Asignada a Agente B." },
          { fecha: "2027-01-08T12:00", usuario: "Agente B", texto: "Primera respuesta registrada. Faltan fechas exactas." }
        ] },
      { id: "S-0004", fechaEntrada: "2027-01-07T09:20", canal: "formulario web", tipo: "grupo", salidaId: "G-MAR-0427",
        destino: "Marruecos", ventana: "", adultos: 2, ninos: 0, presupuesto: "",
        contacto: "Cliente Demo 04", comerciales: "no acepta", responsable: "Agente C",
        etapa: "Lista de espera", version: 0, primeraRespuesta: "2027-01-07T10:00",
        presupuestoEnviado: null, respuestaCliente: null, bloqueoHasta: null, motivoPerdida: "",
        proximaAccion: "Avisar si se libera una plaza",
        historial: [
          { fecha: "2027-01-07T09:20", usuario: "Sistema", texto: "Salida completa: pasa a la lista de espera." }
        ] },
      { id: "S-0005", fechaEntrada: "2026-12-18T17:05", canal: "presencial", tipo: "medida", salidaId: "",
        destino: "Costa Rica", ventana: "abril de 2027", adultos: 2, ninos: 0, presupuesto: "3.000 a 5.000 €",
        contacto: "Cliente Demo 05", comerciales: "no consta", responsable: "Agente A",
        etapa: "Perdida", version: 1, primeraRespuesta: "2026-12-18T17:05",
        presupuestoEnviado: "2026-12-21T10:00", respuestaCliente: "2026-12-28T12:00", bloqueoHasta: null,
        motivoPerdida: "fechas", proximaAccion: "",
        historial: [
          { fecha: "2026-12-28T12:00", usuario: "Agente A", texto: "Perdida por fechas." }
        ] }
    ]
  }
};
