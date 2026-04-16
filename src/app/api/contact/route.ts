import { NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().min(1),
  email: z.string().email(),
  empresa: z.string().min(1),
  interes: z.enum(["producto", "web", "automatizacion", "pack"]),
  mensaje: z.string().min(20)
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const interestLabels = {
  producto: "Producto / packaging",
  web: "Web comercial",
  automatizacion: "Automatizacion",
  pack: "Pack completo"
} as const;

export async function POST(request: NextRequest): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { success: false, error: "RESEND_API_KEY no esta configurada" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Cuerpo de la peticion invalido" },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { success: false, error: "Datos del formulario invalidos" },
      { status: 422 }
    );
  }

  const { nombre, email, empresa, interes, mensaje } = parsed.data;
  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || "hola@automatizacionesmsl.com";

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject: `Nuevo lead automatizacionesMSL - ${interestLabels[interes]}`,
    html: `
      <h2>Nuevo lead desde automatizacionesMSL</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        <tr><td><strong>Nombre</strong></td><td>${escapeHtml(nombre)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Empresa</strong></td><td>${escapeHtml(empresa)}</td></tr>
        <tr><td><strong>Interes</strong></td><td>${interestLabels[interes]}</td></tr>
        <tr><td valign="top"><strong>Mensaje</strong></td><td>${escapeHtml(mensaje).replace(/\n/g, "<br>")}</td></tr>
      </table>
    `
  });

  if (error) {
    return Response.json(
      { success: false, error: "No se ha podido enviar el email" },
      { status: 500 }
    );
  }

  const webhook = process.env.N8N_WEBHOOK_FORMULARIO;
  if (webhook) {
    fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data)
    }).catch(() => {
      // No bloquear la respuesta al usuario por un fallo secundario.
    });
  }

  return Response.json({ success: true });
}
