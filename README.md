# automatizacionesMSL

Web comercial de `automatizacionesMSL` para vender soluciones de automatizacion y producto digital a agencias de viajes.

## Stack

- Next.js 16
- React 19
- Tailwind CSS v4
- React Hook Form + Zod
- Resend

## Desarrollo

```bash
npm install
npm run dev
```

## Variables de entorno

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
N8N_WEBHOOK_FORMULARIO=
NEXT_PUBLIC_GA_ID=
```

- `RESEND_API_KEY`: obligatoria para enviar el formulario.
- `CONTACT_TO_EMAIL`: destino de los leads. Si no se define, usa `hola@automatizacionesmsl.com`.
- `N8N_WEBHOOK_FORMULARIO`: opcional, para reenviar el lead a n8n.
- `NEXT_PUBLIC_GA_ID`: opcional, activa Google Analytics.
