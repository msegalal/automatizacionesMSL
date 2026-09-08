# automatizacionesMSL · Brief de diseño vigente

Actualizado: 2026-09-07. Sustituye el brief anterior; no reutilizar sus fuentes ni sus porcentajes.

## Producto y objetivo

Web B2B de herramienta, implantación y automatización para agencias de viajes. iReViajes es la primera implantación real y el caso de estudio. Objetivo: que la agencia comprenda el servicio y solicite un diagnóstico de encaje.

## Dirección visual

Editorial, cálida y centrada en el producto. Titulares grandes con Newsreader, énfasis en cursiva y cuerpo Instrument Sans. El sistema de marca tiene cuatro tonos con funciones precisas: marfil cálido `#f5f0e8` para lectura y superficies, verde bosque `#203b35` para estructura, verde oliva `#7a8152` para acentos secundarios y rosa empolvado oscuro `#9f4d62` para llamadas a la acción. No crear colores de sección ni variantes cromáticas adicionales. Composiciones asimétricas, separadores finos y capturas reales ampliables. Cada sección conserva un patrón distinto: portada partida, flujo, comparación, método, tabla de oferta, caso, indicadores, persona, FAQ y contacto.

## Restricciones de Marc

Sin gradientes, sombras, glass/backdrop-filter, radios de esquina, orbes radiales, rejillas decorativas, hover animado, tres tarjetas en fila, bento, blanco puro, pasteles, morado, neón, em dash, emojis, iconos Lucide, sparkle, flechas animadas, franja lateral de color, testimonios falsos, terminales, construcciones «no es X, es Y», bullets con check, tres planes de precios ni tipografías Inter, Geist o Space Grotesk.

Excepciones aceptadas: bloques en verde bosque para marcar estructura y FAQ mediante acordeón nativo. Las capturas del producto conservan la interfaz del CRM; las restricciones se aplican a la web comercial. No alterar capturas para fingir funciones.

Requisitos positivos: evidencia real del producto, skeletons de carga, aviso legal y privacidad. Mantener foco visible, teclado, reducción de movimiento, contraste y tamaños táctiles.

## Contenido

Español de España con ortografía correcta. Sin métricas ni testimonios inventados, promesas comerciales nuevas ni datos legales deducidos. Los antiguos 40/65/3x/30 se retiraron por falta de medición documentada. Las capturas usan datos inventados; nunca acceder al CRM de producción para generarlas.

Compromiso confirmado: respuesta en menos de 24 h laborables, definido en `src/lib/site-content.ts`. Identidad en `src/lib/legal.ts`. Las secciones conservan sus anchors.

## Estado de este trabajo

Cambios locales en `feat/visual-polish-contact`, pendientes de publicación. Base previa `87d3950`. No confundir esta implementación local con el despliegue de producción.
