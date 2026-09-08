import type { ContactApiResponse, ContactFormValues } from "./contact";

type Mail = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
};
type DeliveryOptions = {
  recipient: string;
  from?: string;
  interestLabel: string;
  send?: (
    mail: Mail,
  ) => Promise<{ data?: { id: string } | null; error: unknown }>;
};

export async function deliverContact(
  data: ContactFormValues,
  options: DeliveryOptions,
): Promise<ContactApiResponse> {
  const summary = [
    "Nuevo contacto desde automatizacionesMSL",
    "",
    `Nombre: ${data.nombre}`,
    `Email: ${data.email}`,
    `Empresa: ${data.empresa}`,
    `Interés: ${options.interestLabel}`,
    "",
    "Contexto:",
    data.mensaje,
  ].join("\n");
  const subject = `Consulta automatizacionesMSL · ${options.interestLabel}`;
  const fallback: ContactApiResponse = {
    success: false,
    delivery: "mailto",
    error:
      "No hemos podido enviar tu solicitud automáticamente. Tus datos siguen en el formulario.",
    recipient: options.recipient,
    summary,
    mailtoUrl: `mailto:${encodeURIComponent(options.recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`,
  };
  if (
    !options.send ||
    !options.from ||
    /@resend\.dev(?:>|\s|$)/i.test(options.from)
  )
    return fallback;
  try {
    const result = await options.send({
      from: options.from,
      to: options.recipient,
      replyTo: data.email,
      subject,
      text: summary,
    });
    if (result.error || !result.data?.id) {
      console.error("Contact email was not accepted by the provider");
      return fallback;
    }
    return { success: true, delivery: "resend" };
  } catch {
    console.error("Contact email provider request failed");
    return fallback;
  }
}
