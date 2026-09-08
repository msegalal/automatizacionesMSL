import { NextRequest, after } from "next/server";
import { Resend } from "resend";
import { defaultContactEmail } from "@/lib/site-content";
import { contactSchema, interestLabels } from "@/lib/contact";
import { deliverContact } from "@/lib/contact-delivery";

export async function POST(request: NextRequest): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Petición inválida" },
      { status: 400 },
    );
  }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success)
    return Response.json(
      { success: false, error: "Revisa los datos del formulario" },
      { status: 422 },
    );

  const apiKey = process.env.RESEND_API_KEY;
  const resend = apiKey ? new Resend(apiKey) : null;
  const result = await deliverContact(parsed.data, {
    recipient: process.env.CONTACT_TO_EMAIL || defaultContactEmail,
    from: process.env.CONTACT_FROM_EMAIL,
    interestLabel: interestLabels[parsed.data.interes],
    send: resend ? (mail) => resend.emails.send(mail) : undefined,
  });

  const webhook = process.env.N8N_WEBHOOK_FORMULARIO;
  // Forward accepted contacts only, so retries after email failures do not duplicate leads.
  if (webhook && result.success) {
    after(async () => {
      try {
        const response = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
          signal: AbortSignal.timeout(5000),
        });
        if (!response.ok)
          console.error("Contact webhook failed", response.status);
      } catch {
        console.error("Contact webhook request failed");
      }
    });
  }
  return Response.json(result, { status: result.success ? 200 : 503 });
}
