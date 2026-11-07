/* Demo ficticia de CRM para una agencia de viajes a medida y en grupo.
   Todo ocurre en memoria, en este navegador: sin servidor, sin conexiones y sin
   envío de mensajes. Recargar la página reinicia la demo. */
"use strict";
(function () {
  const ETAPAS = {
    medida: ["Nueva", "Cualificación", "Presupuesto enviado", "En revisión", "Aceptado", "Perdida"],
    grupo: ["Nueva", "Información enviada", "Plaza bloqueada", "Plaza confirmada", "Perdida", "Lista de espera"]
  };
  const CERRADAS = ["Aceptado", "Plaza confirmada", "Perdida"];
  const MOTIVOS = ["precio", "fechas", "sin respuesta", "eligió otra opción", "plaza no confirmada", "otro"];
  const CANALES = ["formulario web", "WhatsApp", "teléfono", "presencial", "correo"];
  const PRESUPUESTOS = ["", "menos de 1.500 €", "1.500 a 3.000 €", "3.000 a 5.000 €", "más de 5.000 €"];
  const COMERCIALES = ["no consta", "acepta", "no acepta"];
  const CONFIG_ETIQUETAS = {
    horasPrimeraRespuesta: "Primera respuesta, horas de lunes a viernes",
    diasSeguimientoPresupuesto: "Seguimiento de presupuesto, días",
    horasBloqueo: "Duración del bloqueo de plaza, horas",
    horasAvisoBloqueo: "Aviso antes de que caduque, horas",
    umbralUltimasPlazas: "Aviso de últimas plazas, plazas libres"
  };
  const HORA = 3600e3, DIA = 24 * HORA;
  let estado;

  // ── Utilidades ────────────────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const clonar = (x) => JSON.parse(JSON.stringify(x));
  const fecha = (s) => new Date(/^\d{4}-\d{2}-\d{2}$/.test(s) ? `${s}T00:00` : s);
  const ahora = () => fecha(estado.ahora);
  const pad = (n) => String(n).padStart(2, "0");
  const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  const FMT = new Intl.DateTimeFormat("es-ES", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  const FMT_DIA = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "short", year: "numeric" });
  const verFecha = (s) => (s ? FMT.format(fecha(s)) : "—");
  const verDia = (s) => (s ? FMT_DIA.format(fecha(s)) : "—");
  const viajeros = (s) => s.adultos + s.ninos;
  const buscar = (id) => estado.solicitudes.find((s) => s.id === id);
  const salidaDe = (s) => estado.salidas.find((x) => x.id === s.salidaId);
  const cfg = () => estado.config;

  /** Suma horas contando solo de lunes a viernes, sin horario comercial ni festivos. */
  function sumarLaborables(desde, horas) {
    const d = new Date(desde.getTime());
    for (let resto = horas; resto > 0;) {
      d.setTime(d.getTime() + HORA);
      if (d.getDay() !== 0 && d.getDay() !== 6) resto--;
    }
    return d;
  }

  function el(tag, props, ...hijos) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (k === "class") n.className = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) n.setAttribute(k, v === true ? "" : v);
    }
    for (const h of hijos.flat()) if (h != null && h !== false) n.append(h instanceof Node ? h : String(h));
    return n;
  }
  const opciones = (lista, actual) => lista.map((v) => el("option", { value: v, selected: v === actual }, v || "—"));
  const chip = (texto, clase) => el("span", { class: `chip ${clase || ""}` }, texto);

  // ── Estado y reglas ───────────────────────────────────────────────
  function reiniciar() {
    estado = clonar(window.DEMO_DATOS.inicial);
    estado.config = clonar(window.DEMO_DATOS.config);
    estado.eventos = [];
    estado.turno = 0;
    estado.recorrido = null;
  }
  const anotar = (s, texto, usuario) => s.historial.push({ fecha: estado.ahora, usuario: usuario || "Sistema", texto });
  const avanzar = (horas) => { estado.ahora = iso(new Date(ahora().getTime() + horas * HORA)); };

  function plazas(salida) {
    let ocupadas = salida.ocupadasPrevias, bloqueadas = 0;
    for (const s of estado.solicitudes) {
      if (s.salidaId !== salida.id) continue;
      if (s.etapa === "Plaza confirmada") ocupadas += viajeros(s);
      if (s.etapa === "Plaza bloqueada") bloqueadas += viajeros(s);
    }
    const libres = Math.max(0, salida.plazasTotales - ocupadas - bloqueadas);
    const est = libres === 0 ? "completa" : libres <= cfg().umbralUltimasPlazas ? "últimas plazas" : "abierta";
    return { ocupadas, bloqueadas, libres, estado: est };
  }

  /** Reglas de ejemplo: misma persona → mismo responsable; si no, según el tipo. */
  function asignar(nueva) {
    const previa = estado.solicitudes.find((s) => s.id !== nueva.id && s.contacto === nueva.contacto && !CERRADAS.includes(s.etapa));
    if (previa) return [previa.responsable, `misma persona que ${previa.id}, abierta`];
    const rol = nueva.tipo === "grupo" ? "Gestión de salidas" : "Diseño de viajes";
    const delRol = estado.agentes.filter((a) => a.rol === rol);
    const agente = delRol[estado.turno++ % delRol.length];
    return [agente.id, `rol ${rol}`];
  }

  function crearSolicitud(d) {
    const salida = d.tipo === "grupo" ? estado.salidas.find((x) => x.id === d.salidaId) : null;
    const s = {
      id: d.id || `S-${String(estado.siguienteId++).padStart(4, "0")}`, fechaEntrada: estado.ahora,
      canal: d.canal, tipo: d.tipo, salidaId: salida ? salida.id : "", destino: salida ? salida.destino : d.destino,
      ventana: salida ? "" : d.ventana, adultos: d.adultos, ninos: d.ninos, presupuesto: d.presupuesto || "",
      contacto: d.contacto, comerciales: d.comerciales || "no consta", responsable: "", etapa: "Nueva", version: 0,
      primeraRespuesta: null, presupuestoEnviado: null, respuestaCliente: null, bloqueoHasta: null,
      motivoPerdida: "", proximaAccion: "Dar la primera respuesta", historial: []
    };
    estado.solicitudes.push(s);
    const [responsable, regla] = asignar(s);
    s.responsable = responsable;
    anotar(s, `Consulta entrante por ${s.canal}, simulada. Asignada a ${responsable}: ${regla}.`);
    return s;
  }

  function cambiarEtapa(s, nueva) {
    const antes = s.etapa;
    if (antes === nueva) return;
    s.etapa = nueva;
    anotar(s, `Etapa: ${antes} → ${nueva}.`, s.responsable);
    const salida = salidaDe(s);
    if (salida && antes === "Plaza bloqueada" && nueva !== "Plaza confirmada" && salida.listaEspera.length) {
      estado.eventos.push({ id: `E-${estado.eventos.length + 1}`, salidaId: salida.id, fecha: estado.ahora, hecho: false });
    }
  }
  const quitarDeEspera = (s) => { const x = salidaDe(s); if (x) x.listaEspera = x.listaEspera.filter((id) => id !== s.id); };

  // ── Acciones: cambian el estado y nunca envían nada ───────────────
  const ACCIONES = {
    responder(s) {
      s.primeraRespuesta = estado.ahora;
      anotar(s, "Primera respuesta a la consulta, simulada.", s.responsable);
      if (s.etapa === "Nueva") cambiarEtapa(s, s.tipo === "medida" ? "Cualificación" : "Información enviada");
      s.proximaAccion = s.tipo === "medida" ? "Preparar el presupuesto" : "Bloquear plaza si la quiere";
    },
    presupuesto(s) {
      s.version++;
      s.presupuestoEnviado = estado.ahora;
      s.respuestaCliente = null;
      anotar(s, `Presupuesto v${s.version} enviado, simulado: la demo no envía mensajes.`, s.responsable);
      cambiarEtapa(s, s.version === 1 ? "Presupuesto enviado" : "En revisión");
      s.proximaAccion = `Esperar respuesta al presupuesto v${s.version}`;
    },
    clienteResponde(s) {
      s.respuestaCliente = estado.ahora;
      anotar(s, "El cliente ha respondido al presupuesto.", s.responsable);
      s.proximaAccion = "Ajustar el presupuesto";
    },
    aceptado(s) { cambiarEtapa(s, "Aceptado"); s.proximaAccion = ""; },
    bloquear(s) {
      const salida = salidaDe(s);
      if (plazas(salida).libres >= viajeros(s)) {
        s.bloqueoHasta = iso(new Date(ahora().getTime() + cfg().horasBloqueo * HORA));
        quitarDeEspera(s);
        cambiarEtapa(s, "Plaza bloqueada");
        anotar(s, `${viajeros(s)} plaza(s) bloqueada(s) hasta ${verFecha(s.bloqueoHasta)}.`, s.responsable);
        s.proximaAccion = "Confirmar la plaza o liberarla";
      } else {
        if (!salida.listaEspera.includes(s.id)) salida.listaEspera.push(s.id);
        cambiarEtapa(s, "Lista de espera");
        anotar(s, `No hay ${viajeros(s)} plaza(s) libre(s): posición ${salida.listaEspera.indexOf(s.id) + 1} en la lista de espera.`, s.responsable);
        s.proximaAccion = "Avisar si se libera una plaza";
      }
    },
    confirmar(s) { s.bloqueoHasta = null; cambiarEtapa(s, "Plaza confirmada"); s.proximaAccion = ""; },
    liberar(s) {
      s.bloqueoHasta = null;
      cambiarEtapa(s, "Información enviada");
      s.proximaAccion = "Preguntar si le interesa otra salida";
    },
    perdida(s, motivo) {
      s.motivoPerdida = motivo;
      s.bloqueoHasta = null;
      quitarDeEspera(s);
      cambiarEtapa(s, "Perdida");
      s.proximaAccion = "";
    }
  };
  const ejecutar = (nombre, s, extra) => { ACCIONES[nombre](s, extra); pintar(); };

  // ── Recordatorios internos: se calculan, nunca se envían ──────────
  function tareas() {
    const lista = [], now = ahora(), c = cfg();
    const t = (texto, vence, regla, s, salidaId, extra) => lista.push(Object.assign(
      { texto, vence, regla, responsable: s ? s.responsable : "Agente C", solicitudId: s ? s.id : null, salidaId: salidaId || (s && s.salidaId) }, extra));
    for (const s of estado.solicitudes) {
      if (CERRADAS.includes(s.etapa)) continue;
      if (!s.primeraRespuesta) t(`Responder ${s.id}`, sumarLaborables(fecha(s.fechaEntrada), c.horasPrimeraRespuesta), `Sin respuesta en ${c.horasPrimeraRespuesta} h contadas de lunes a viernes`, s);
      if (s.presupuestoEnviado && !s.respuestaCliente) {
        t(`Seguimiento del presupuesto v${s.version} de ${s.id}`, new Date(fecha(s.presupuestoEnviado).getTime() + c.diasSeguimientoPresupuesto * DIA),
          `Presupuesto sin respuesta en ${c.diasSeguimientoPresupuesto} días`, s);
      }
      if (s.bloqueoHasta) {
        const hasta = fecha(s.bloqueoHasta);
        t(`${now >= hasta ? "Bloqueo caducado: confirmar" : "Confirmar"} o liberar la plaza de ${s.id}`,
          new Date(hasta.getTime() - c.horasAvisoBloqueo * HORA), `Bloqueo a ${c.horasAvisoBloqueo} h de caducar`, s);
      }
      if (!s.proximaAccion) t(`Definir el siguiente paso de ${s.id}`, now, "Consulta abierta sin próxima acción", s);
    }
    for (const salida of estado.salidas) {
      const p = plazas(salida);
      if (p.estado === "últimas plazas") t(`Últimas plazas en ${salida.id}: quedan ${p.libres}`, now, `Umbral de ${c.umbralUltimasPlazas} plazas`, null, salida.id, { aviso: true });
    }
    for (const e of estado.eventos.filter((x) => !x.hecho)) {
      const primero = estado.salidas.find((x) => x.id === e.salidaId).listaEspera[0];
      t(`Avisar al primero de la lista de espera de ${e.salidaId}${primero ? `: ${primero}` : ""}`, fecha(e.fecha),
        "Plaza liberada con lista de espera", primero ? buscar(primero) : null, e.salidaId, { evento: e.id });
    }
    return lista.sort((a, b) => a.vence - b.vence);
  }

  function listaTareas(filtro) {
    const items = tareas().filter(filtro || (() => true));
    if (!items.length) return el("p", { class: "vacio" }, "Sin tareas internas.");
    return el("ul", { class: "tareas" }, items.map((t) => {
      const diff = t.vence - ahora();
      const c = t.aviso ? "aviso" : diff <= 0 ? "vencida" : diff < DIA ? "pronto" : "proxima";
      const etiqueta = { aviso: "aviso", vencida: "vencida", pronto: "en menos de 24 h", proxima: "programada" }[c];
      return el("li", { class: `tarea ${c}` },
        el("div", { class: "tarea-cab" }, chip(etiqueta, c), el("strong", {}, t.texto)),
        el("div", { class: "tarea-pie" }, `${t.responsable} · ${verFecha(iso(t.vence))} · ${t.regla}`,
          t.solicitudId ? [" · ", el("a", { href: `#/solicitud/${t.solicitudId}` }, `ver ${t.solicitudId}`)] : null,
          t.evento ? el("button", { class: "mini", onclick: () => { estado.eventos.find((e) => e.id === t.evento).hecho = true; pintar(); } }, "Hecho") : null));
    }));
  }

  // ── Vista 1: solicitudes ──────────────────────────────────────────
  function vistaSolicitudes() {
    return el("div", { class: "rejilla" },
      el("section", { class: "panel ancho" }, el("h2", {}, "Solicitudes"),
        el("div", { class: "tabla-env" }, el("table", {},
          el("thead", {}, el("tr", {}, ["Id", "Entrada", "Canal", "Tipo", "Destino o salida", "Viaj.", "Etapa", "Responsable", "Próxima acción"].map((h) => el("th", {}, h)))),
          el("tbody", {}, estado.solicitudes.map((s) => el("tr", { class: "fila", onclick: () => { location.hash = `#/solicitud/${s.id}`; } },
            // data-label: rótulo de cada dato cuando la fila se muestra como tarjeta en móvil.
            el("td", { "data-label": "Id" }, el("a", { href: `#/solicitud/${s.id}` }, s.id)),
            el("td", { "data-label": "Entrada" }, verFecha(s.fechaEntrada)), el("td", { "data-label": "Canal" }, s.canal),
            el("td", { "data-label": "Tipo" }, s.tipo === "medida" ? "a medida" : "grupo"),
            el("td", { "data-label": "Destino" }, s.salidaId ? `${s.destino} · ${s.salidaId}` : s.destino),
            el("td", { class: "num", "data-label": "Viajeros" }, viajeros(s)),
            el("td", { "data-label": "Etapa" }, chip(s.etapa, CERRADAS.includes(s.etapa) ? "cerrada" : "")),
            el("td", { "data-label": "Responsable" }, s.responsable),
            el("td", { "data-label": "Próxima acción" }, s.proximaAccion || (CERRADAS.includes(s.etapa) ? "—" : chip("sin definir", "vencida")))))))),
        /* Versión pública: sin el formulario de alta manual, para que no parezca un formulario de contacto real. */
        null),
      el("section", { class: "panel" }, el("h2", {}, "Tareas internas"),
        el("p", { class: "nota" }, "Recordatorios para el equipo. Ninguno envía nada al cliente."), listaTareas()));
  }

  function formularioNueva() {
    const err = el("p", { class: "error", role: "alert", id: "error-alta" });
    const form = el("form", { class: "nueva", onsubmit: (e) => {
      e.preventDefault();
      const v = Object.fromEntries(new FormData(form));
      const adultos = Number(v.adultos), ninos = Number(v.ninos || 0);
      for (const campo of form.querySelectorAll("[aria-invalid]")) campo.removeAttribute("aria-invalid");
      // Muestra el error junto al formulario y lleva el foco al campo que hay que corregir.
      const fallo = (nombre, texto) => {
        const campo = form.elements[nombre];
        err.textContent = texto;
        campo.setAttribute("aria-invalid", "true");
        campo.focus();
      };
      if (!(adultos >= 1)) return fallo("adultos", "Indica al menos 1 adulto.");
      if (v.tipo === "medida" && !v.destino.trim()) return fallo("destino", "Indica el destino.");
      if (v.tipo === "grupo" && !v.salidaId) return fallo("salidaId", "Elige la salida.");
      err.textContent = "";
      const s = crearSolicitud({ canal: v.canal, tipo: v.tipo, salidaId: v.salidaId, destino: v.destino.trim(), ventana: v.ventana.trim(),
        adultos, ninos, presupuesto: v.presupuesto, contacto: `Cliente Demo ${pad(estado.siguienteId + 10)}`, comerciales: v.comerciales });
      location.hash = `#/solicitud/${s.id}`;
    } },
    el("label", {}, "Canal, simulado", el("select", { name: "canal" }, opciones(CANALES, "formulario web"))),
    el("label", {}, "Tipo", el("select", { name: "tipo" }, el("option", { value: "medida" }, "a medida"), el("option", { value: "grupo" }, "grupo"))),
    el("label", {}, "Salida, si es grupo", el("select", { name: "salidaId", "aria-describedby": "error-alta" }, opciones(["", ...estado.salidas.map((x) => x.id)], ""))),
    el("label", {}, "Destino, si es a medida", el("input", { name: "destino", maxlength: 60, autocomplete: "off", "aria-describedby": "error-alta" })),
    el("label", {}, "Fechas aproximadas", el("input", { name: "ventana", maxlength: 60, autocomplete: "off" })),
    el("label", {}, "Adultos", el("input", { name: "adultos", type: "number", min: 1, max: 30, value: 2, "aria-describedby": "error-alta" })),
    el("label", {}, "Niños", el("input", { name: "ninos", type: "number", min: 0, max: 30, value: 0 })),
    el("label", {}, "Presupuesto por persona", el("select", { name: "presupuesto" }, opciones(PRESUPUESTOS, ""))),
    el("label", {}, "Comunicaciones comerciales, preferencia aparte", el("select", { name: "comerciales" }, opciones(COMERCIALES, "no consta"))),
    el("button", { type: "submit" }, "Registrar consulta"), err);
    return el("details", { class: "alta" }, el("summary", {}, "Nueva consulta, alta manual"), form);
  }

  // ── Vista 2: detalle y seguimiento ────────────────────────────────
  function vistaDetalle(id) {
    const s = buscar(id);
    if (!s) return el("section", { class: "panel" }, el("p", {}, `No existe ${id}. `, el("a", { href: "#/solicitudes" }, "Volver")));
    const abierta = !CERRADAS.includes(s.etapa);
    const b = (texto, accion) => el("button", { onclick: () => ejecutar(accion, s) }, texto);
    const acc = [];
    if (abierta && !s.primeraRespuesta) acc.push(b("Registrar primera respuesta", "responder"));
    if (s.tipo === "medida" && s.primeraRespuesta) {
      if (["Cualificación", "Presupuesto enviado", "En revisión"].includes(s.etapa)) acc.push(b(`Enviar presupuesto v${s.version + 1}, simulado`, "presupuesto"));
      if (s.presupuestoEnviado && !s.respuestaCliente && abierta) acc.push(b("El cliente ha respondido", "clienteResponde"));
      if (["Presupuesto enviado", "En revisión"].includes(s.etapa)) acc.push(b("Presupuesto aceptado", "aceptado"));
    }
    if (s.tipo === "grupo" && s.primeraRespuesta) {
      if (["Información enviada", "Lista de espera"].includes(s.etapa)) acc.push(b("Bloquear plaza", "bloquear"));
      if (s.etapa === "Plaza bloqueada") acc.push(b("Confirmar plaza", "confirmar"), b("Liberar plaza", "liberar"));
    }
    const motivo = el("select", { id: "motivo-perdida" }, opciones(MOTIVOS, "sin respuesta"));
    const accion = el("input", { value: s.proximaAccion, maxlength: 80 });
    const pasos = ETAPAS[s.tipo].filter((p) => p !== "Lista de espera" || s.etapa === p);
    const lineal = !["Lista de espera", "Perdida"].includes(s.etapa);
    const dato = (k, v) => [el("dt", {}, k), el("dd", {}, v || "—")];
    const salida = salidaDe(s);
    return el("div", { class: "rejilla" },
      el("section", { class: "panel ancho" },
        el("p", { class: "volver" }, el("a", { href: "#/solicitudes" }, "← Solicitudes")),
        el("h2", {}, `${s.id} · ${s.tipo === "medida" ? "a medida" : "grupo"} · ${s.destino}`),
        el("ol", { class: "etapas" }, pasos.map((p) => el("li", {
          class: p === s.etapa ? "actual" : lineal && pasos.indexOf(p) < pasos.indexOf(s.etapa) && p !== "Perdida" ? "hecha" : "" }, p))),
        el("h3", {}, "Consulta"),
        el("dl", { class: "ficha" },
          dato("Contacto", `${s.contacto}, ficticio`), dato("Canal", s.canal), dato("Entrada", verFecha(s.fechaEntrada)),
          dato("Salida", salida ? el("a", { href: "#/salidas" }, `${salida.id}, ${verDia(salida.desde)}`) : ""),
          dato("Fechas aproximadas", s.ventana), dato("Viajeros", `${s.adultos} adultos · ${s.ninos} niños`),
          dato("Presupuesto por persona", s.presupuesto), dato("Presupuesto enviado", s.version ? `v${s.version}` : ""),
          dato("Bloqueo hasta", s.bloqueoHasta ? verFecha(s.bloqueoHasta) : ""), dato("Motivo de pérdida", s.motivoPerdida)),
        el("div", { class: "aparte" },
          el("strong", {}, "Comunicaciones comerciales: "), s.comerciales,
          el("p", { class: "nota" }, "Preferencia registrada aparte de la consulta. Responder a una consulta no depende de ella, y la demo no envía comunicaciones comerciales.")),
        el("h3", {}, "Acciones"),
        el("p", { class: "nota" }, "Se registran a mano. Ninguna envía mensajes."),
        el("div", { class: "acciones" }, acc.length ? acc : el("span", { class: "vacio" }, "Sin acciones para esta etapa."),
          abierta ? el("span", { class: "grupo-accion" }, el("label", { class: "linea", for: "motivo-perdida" }, "Motivo de pérdida"), motivo,
            el("button", { class: "secundario", onclick: () => ejecutar("perdida", s, motivo.value) }, "Marcar perdida")) : null)),
      el("section", { class: "panel" }, el("h2", {}, "Seguimiento"),
        el("p", {}, el("strong", {}, "Responsable: "), s.responsable),
        el("form", { class: "proxima", onsubmit: (e) => {
          e.preventDefault(); s.proximaAccion = accion.value.trim();
          anotar(s, `Próxima acción: ${s.proximaAccion || "sin definir"}.`, s.responsable); pintar();
        } }, el("label", {}, "Próxima acción", accion), el("button", { type: "submit" }, "Guardar")),
        el("h3", {}, "Tareas internas"), listaTareas((t) => t.solicitudId === s.id),
        el("h3", {}, "Historial"),
        el("ol", { class: "historial" }, [...s.historial].reverse().map((h) =>
          el("li", {}, el("span", { class: "cuando" }, `${verFecha(h.fecha)} · ${h.usuario}`), h.texto)))));
  }

  // ── Vista 3: salidas, plazas y lista de espera ────────────────────
  function vistaSalidas() {
    return el("div", { class: "rejilla" },
      el("section", { class: "panel ancho" }, el("h2", {}, "Salidas, plazas y lista de espera"),
        estado.salidas.map((salida) => {
          const p = plazas(salida), total = salida.plazasTotales;
          const seg = (n, clase) => el("span", { class: `seg ${clase}`, style: `width:${(n / total) * 100}%` });
          return el("article", { class: "salida" },
            el("div", { class: "salida-cab" }, el("h3", {}, `${salida.id} · ${salida.destino}`),
              el("span", {}, `${verDia(salida.desde)} a ${verDia(salida.hasta)}`), chip(p.estado, p.estado.replace(" ", "-"))),
            el("div", { class: "barra", role: "img", "aria-label": `${p.ocupadas} ocupadas, ${p.bloqueadas} bloqueadas y ${p.libres} libres de ${total}` },
              seg(p.ocupadas, "ocupada"), seg(p.bloqueadas, "bloqueada"), seg(p.libres, "libre")),
            el("p", { class: "leyenda" }, el("span", { class: "punto ocupada" }), `${p.ocupadas} ocupadas · `,
              el("span", { class: "punto bloqueada" }), `${p.bloqueadas} bloqueadas · `, el("span", { class: "punto libre" }), `${p.libres} libres de ${total}`),
            el("div", { class: "dos" },
              el("div", {}, el("h4", {}, "Lista de espera"), salida.listaEspera.length
                ? el("ol", {}, salida.listaEspera.map((id) => el("li", {}, el("a", { href: `#/solicitud/${id}` }, id), ` · ${viajeros(buscar(id))} viajero(s)`)))
                : el("p", { class: "vacio" }, "Vacía.")),
              el("div", {}, el("h4", {}, "Consultas de esta salida"),
                el("ul", {}, estado.solicitudes.filter((s) => s.salidaId === salida.id).map((s) =>
                  el("li", {}, el("a", { href: `#/solicitud/${s.id}` }, s.id), ` · ${viajeros(s)} · `, chip(s.etapa)))))));
        })),
      el("section", { class: "panel" }, el("h2", {}, "Tareas de salidas"), listaTareas((t) => t.salidaId)));
  }

  // ── Valores de ejemplo configurables ──────────────────────────────
  function pintarConfig() {
    $("#config").replaceChildren(
      el("p", { class: "nota" }, "Valores inventados para la demo. No son reglas de ninguna agencia."),
      el("div", { class: "config" }, Object.entries(CONFIG_ETIQUETAS).map(([k, etiqueta]) => el("label", {}, etiqueta,
        el("input", { type: "number", min: k === "umbralUltimasPlazas" ? 0 : 1, max: 999, value: estado.config[k], onchange: (e) => {
          const n = Math.round(Number(e.target.value));
          if (Number.isFinite(n) && n >= Number(e.target.min)) estado.config[k] = n;
          pintar();
        } })))));
  }

  // ── Recorridos hipotéticos, sobre los mismos datos ficticios ──────
  const S = (id) => buscar(id);
  const RECORRIDOS = {
    T: {
      titulo: "Escenario hipotético A · consulta a medida que pasa a presupuesto",
      aviso: "Ejemplo ilustrativo con datos inventados. No describe el proceso de ninguna agencia real ni está conectado a sus sistemas.",
      pasos: [
        { texto: "Punto de partida: los datos ficticios de «Viajes Ejemplo».", ir: "#/solicitudes" },
        { texto: "Entra por el formulario web una consulta a medida: Japón, octubre de 2027, 2 adultos, 3.000 a 5.000 € por persona. Se asigna al rol de diseño de viajes y se programa la primera respuesta.",
          hacer: () => crearSolicitud({ id: "S-0101", canal: "formulario web", tipo: "medida", destino: "Japón", ventana: "octubre de 2027", adultos: 2, ninos: 0, presupuesto: "3.000 a 5.000 €", contacto: "Cliente Demo 11" }),
          ir: "#/solicitud/S-0101" },
        { texto: "El responsable responde y cualifica la consulta. La preferencia sobre comunicaciones comerciales sigue en «no consta»: no hace falta para responder.",
          hacer: () => ACCIONES.responder(S("S-0101")), ir: "#/solicitud/S-0101" },
        { texto: "Envía el presupuesto v1, de forma simulada. La consulta pasa a «Presupuesto enviado».", hacer: () => ACCIONES.presupuesto(S("S-0101")), ir: "#/solicitud/S-0101" },
        { texto: "Pasa el plazo configurado sin respuesta y aparece la tarea interna de seguimiento.",
          hacer: () => avanzar(cfg().diasSeguimientoPresupuesto * 24 + 1), ir: "#/solicitud/S-0101" },
        { texto: "El cliente pide un cambio y se envía la v2: la consulta pasa a «En revisión».",
          hacer: () => { ACCIONES.clienteResponde(S("S-0101")); ACCIONES.presupuesto(S("S-0101")); }, ir: "#/solicitud/S-0101" },
        { texto: "Fin. Para saber si esto encaja habría que preguntar a la agencia dónde registra hoy sus consultas y cómo sigue cada presupuesto.", ir: "#/solicitudes" }
      ]
    },
    V: {
      titulo: "Escenario hipotético B · interesada en una salida con plazas limitadas",
      aviso: "Ejemplo ilustrativo con datos inventados. No describe el proceso de ninguna agencia real ni está conectado a sus sistemas.",
      pasos: [
        { texto: "Punto de partida: la salida ficticia G-ISL-0327 tiene 16 plazas, 11 ocupadas y 1 bloqueada.", ir: "#/salidas" },
        { texto: "Una persona se interesa por la salida desde el formulario, con el viaje ya elegido: 2 adultos. Se asigna al rol de gestión de salidas.",
          hacer: () => crearSolicitud({ id: "S-0201", canal: "formulario web", tipo: "grupo", salidaId: "G-ISL-0327", adultos: 2, ninos: 0, contacto: "Cliente Demo 21" }),
          ir: "#/solicitud/S-0201" },
        { texto: "Se le responde y se bloquean sus 2 plazas. La salida queda por debajo del umbral configurado y aparece el aviso de últimas plazas.",
          hacer: () => { ACCIONES.responder(S("S-0201")); ACCIONES.bloquear(S("S-0201")); }, ir: "#/salidas" },
        { texto: "Otra persona interesada bloquea las 2 últimas plazas: la salida queda completa.",
          hacer: () => { const s = crearSolicitud({ id: "S-0202", canal: "WhatsApp", tipo: "grupo", salidaId: "G-ISL-0327", adultos: 2, ninos: 0, contacto: "Cliente Demo 22" }); ACCIONES.responder(s); ACCIONES.bloquear(s); },
          ir: "#/salidas" },
        { texto: "Una tercera persona ya no cabe y entra en la lista de espera.",
          hacer: () => { const s = crearSolicitud({ id: "S-0203", canal: "teléfono", tipo: "grupo", salidaId: "G-ISL-0327", adultos: 1, ninos: 0, contacto: "Cliente Demo 23" }); ACCIONES.responder(s); ACCIONES.bloquear(s); },
          ir: "#/salidas" },
        { texto: "Se acerca el fin del bloqueo de S-0201 y aparece la tarea de confirmar o liberar.",
          hacer: () => avanzar(cfg().horasBloqueo - cfg().horasAvisoBloqueo + 1), ir: "#/solicitud/S-0201" },
        { texto: "S-0201 no confirma y se libera su plaza. Como hay lista de espera, se crea la tarea de avisar a S-0203.",
          hacer: () => ACCIONES.liberar(S("S-0201")), ir: "#/salidas" },
        { texto: "Fin. Para saber si esto encaja habría que preguntar a la agencia cómo controla hoy las plazas, los bloqueos y la lista de espera.", ir: "#/salidas" }
      ]
    }
  };

  function iniciarRecorrido(clave) { reiniciar(); estado.recorrido = { clave, paso: 0 }; aplicarPaso(); }
  function aplicarPaso() {
    const p = RECORRIDOS[estado.recorrido.clave].pasos[estado.recorrido.paso];
    if (p.hacer) p.hacer();
    if (p.ir && location.hash !== p.ir) location.hash = p.ir;
    pintar();
  }
  function pintarRecorrido() {
    const caja = $("#recorrido");
    if (!estado.recorrido) { caja.hidden = true; caja.replaceChildren(); return; }
    const r = RECORRIDOS[estado.recorrido.clave], n = estado.recorrido.paso;
    caja.hidden = false;
    caja.replaceChildren(
      el("div", { class: "rec-cab" }, chip("ESCENARIO HIPOTÉTICO", "hipotetico"), el("strong", {}, r.titulo)),
      el("p", { class: "rec-aviso" }, r.aviso),
      el("p", { class: "rec-paso" }, el("span", { class: "num" }, `Paso ${n + 1} de ${r.pasos.length}. `), r.pasos[n].texto),
      el("div", { class: "rec-botones" },
        n < r.pasos.length - 1 ? el("button", { onclick: () => { estado.recorrido.paso++; aplicarPaso(); } }, "Siguiente paso") : null,
        el("button", { class: "secundario", onclick: () => { reiniciar(); location.hash = "#/solicitudes"; pintar(); } }, "Salir y reiniciar")));
  }

  // ── Enrutado y arranque ───────────────────────────────────────────
  function pintar() {
    const [vista, id] = location.hash.replace(/^#\/?/, "").split("/");
    $("#reloj").textContent = verFecha(estado.ahora);
    document.querySelectorAll("nav a").forEach((a) => a.classList.toggle("activa", a.dataset.vista === (vista === "solicitud" ? "solicitudes" : vista || "solicitudes")));
    $("#vista").replaceChildren(vista === "salidas" ? vistaSalidas() : vista === "solicitud" ? vistaDetalle(id) : vistaSolicitudes());
    pintarConfig();
    pintarRecorrido();
  }

  reiniciar();
  window.addEventListener("hashchange", pintar);
  $("#mas12").addEventListener("click", () => { avanzar(12); pintar(); });
  $("#mas24").addEventListener("click", () => { avanzar(24); pintar(); });
  $("#reiniciar").addEventListener("click", () => { reiniciar(); location.hash = "#/solicitudes"; pintar(); });
  $("#recT").addEventListener("click", () => iniciarRecorrido("T"));
  $("#recV").addEventListener("click", () => iniciarRecorrido("V"));
  pintar();
})();
