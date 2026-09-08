import { z } from "zod";

export const contactInterests = [
  "entrada",
  "seguimiento",
  "propuesta",
  "carga",
  "no_claro",
] as const;
export const interestLabels: Record<(typeof contactInterests)[number], string> =
  {
    entrada: "Entrada de solicitudes",
    seguimiento: "Seguimiento comercial",
    propuesta: "Propuesta al cliente",
    carga: "Carga manual",
    no_claro: "No lo tengo claro",
  };
export const contactOptions = contactInterests.map((value) => ({
  value,
  label: interestLabels[value],
}));
export const contactSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, "El nombre es obligatorio")
    .max(120, "Máximo 120 caracteres"),
  email: z.string().trim().email("Introduce un email válido").max(254),
  empresa: z
    .string()
    .trim()
    .min(1, "La empresa es obligatoria")
    .max(160, "Máximo 160 caracteres"),
  interes: z.enum(contactInterests, {
    error: "Selecciona qué quieres revisar",
  }),
  mensaje: z
    .string()
    .trim()
    .min(20, "Cuéntanos un poco más: al menos 20 caracteres")
    .max(5000, "Máximo 5.000 caracteres"),
  consentimiento: z.literal(true, {
    error: "Necesitamos tu consentimiento para responder a la solicitud",
  }),
});
export type ContactFormValues = z.infer<typeof contactSchema>;
export type ContactFallback = {
  mailtoUrl: string;
  recipient: string;
  summary: string;
};
export type ContactApiResponse =
  | { success: true; delivery: "resend" }
  | ({ success: false; delivery: "mailto"; error: string } & ContactFallback)
  | { success: false; delivery?: never; error: string };
