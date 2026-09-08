# automatizacionesMSL

Web B2B en Next.js 16, React 19 y Tailwind 4.

## Desarrollo y comprobaciones

```sh
npm ci
npm run dev
npm run lint
npx tsc --noEmit
npm test
npm run build
```

Los tests usan el soporte nativo de TypeScript de Node 22.18+ y transportes simulados; no envían correos.

## Formulario

Copiar `.env.example` a `.env.local` y configurar:

- `RESEND_API_KEY`: clave del proveedor.
- `CONTACT_FROM_EMAIL`: dirección de un dominio verificado en Resend, por ejemplo `Web <web@tu-dominio-verificado.com>`. No usar `onboarding@resend.dev`.
- `CONTACT_TO_EMAIL`: destinatario; por defecto `hola@automatizacionesmsl.com`.
- `N8N_WEBHOOK_FORMULARIO`: opcional, se ejecuta después de que Resend acepte el correo, con tiempo límite de 5 segundos. Su fallo no invalida un correo aceptado; no hay cola persistente de reintentos.
- `NEXT_PUBLIC_GA_ID`: opcional. La analítica solo se carga tras aceptar.
- `NEXT_PUBLIC_SITE_URL`: URL canónica, por defecto `https://automatizacionesmsl.com`.

La API solo devuelve éxito cuando Resend devuelve un identificador de aceptación. Esa aceptación no prueba que el correo haya llegado a la bandeja de entrada: comprobar eventos de entrega en Resend. Si falta configuración o falla el proveedor, devuelve HTTP 503 y una alternativa manual. La interfaz conserva los campos y permite abrir el correo, copiar o seleccionar el resumen; no confirma recepción ni redirige a `/gracias`.

El esquema, las opciones y tipos compartidos viven en `src/lib/contact.ts`; el transporte en `src/lib/contact-delivery.ts`. Los mensajes se envían como texto y con `replyTo` del contacto. No registrar datos personales ni claves en logs.

## Consentimiento

Preferencia en `src/lib/consent.ts`, suscripción en `useConsent`. Rechazar o restablecer desactiva GA y elimina sus cookies propias. Restablecer recarga sin analítica y vuelve a mostrar el aviso. Si localStorage está bloqueado, la elección se mantiene solo durante la visita. El aviso solo aparece cuando GA está configurado.

## Diseño y fuentes de contenido

Leer `CLAUDE_DESIGN_BRIEF.md`. Los textos comerciales compartidos y el compromiso de respuesta están en `src/lib/site-content.ts`; los títulos y textos específicos también pueden vivir en su página o sección. Los datos del titular están en `src/lib/legal.ts`. Tokens y estilos en `src/app/globals.css`; schema.org en `src/lib/schema.ts`. Capturas ampliables mediante `ProductScreenshot.tsx`.

## Publicación

Vercel despliega desde `main`. Esta revisión se prepara en `feat/visual-polish-contact`; no está publicada por crear o modificar archivos localmente. Antes de publicar configurar y verificar el remitente en Resend y Vercel. CP y municipio deben ser aportados por el titular.
