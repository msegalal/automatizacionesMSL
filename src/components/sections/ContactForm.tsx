"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  email: z
    .string()
    .min(1, "El email es obligatorio")
    .email("Introduce un email valido"),
  empresa: z.string().min(1, "La empresa es obligatoria"),
  interes: z.enum(["producto", "web", "automatizacion", "pack"], {
    error: "Selecciona el tipo de interes"
  }),
  mensaje: z.string().min(20, "Necesito un poco mas de contexto")
});

type ContactFormValues = z.infer<typeof contactSchema>;
type FormStatus = "idle" | "loading" | "success" | "error";
type FallbackDelivery = {
  mailtoUrl: string;
  recipient: string;
  summary: string;
};

type ContactApiResponse =
  | { success: true; delivery: "resend" }
  | { success: true; delivery: "mailto"; mailtoUrl: string; recipient: string; summary: string }
  | { success: false; error?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fallbackDelivery, setFallbackDelivery] = useState<FallbackDelivery | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    setFallbackDelivery(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const json = (await response.json()) as ContactApiResponse;

      if (json.success) {
        setStatus("success");

        if (json.delivery === "mailto") {
          const fallback = {
            mailtoUrl: json.mailtoUrl,
            recipient: json.recipient,
            summary: json.summary
          };

          setFallbackDelivery(fallback);
          window.location.assign(json.mailtoUrl);
        }

        reset();
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const copySummary = async () => {
    if (!fallbackDelivery) {
      return;
    }

    try {
      await navigator.clipboard.writeText(fallbackDelivery.summary);
    } catch {
      // Si el portapapeles falla, no bloqueamos la UI.
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
          contacto
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Cuentame que quieres vender mejor y donde hoy se atasca la operativa.
        </h2>
      </div>

      <div aria-live="polite" className="space-y-4">
        {status === "success" ? (
          <div className="rounded-[1.4rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            Solicitud recibida. Si no hay integracion activa, la web ha preparado tambien el correo para que puedas enviarlo igualmente.
          </div>
        ) : null}

        {fallbackDelivery ? (
          <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-800">
            <p className="font-semibold text-slate-950">
              Fallback activo: se abrira tu app de correo hacia {fallbackDelivery.recipient}.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={fallbackDelivery.mailtoUrl}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                Abrir email
              </a>
              <button
                type="button"
                onClick={copySummary}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                Copiar resumen
              </button>
            </div>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="rounded-[1.4rem] border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            Ha habido un error. Puedes reintentarlo sin perder lo que ibas a explicar.
          </div>
        ) : null}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-slate-950">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            autoComplete="name"
            {...register("nombre")}
            className="min-h-12 w-full rounded-[1.15rem] border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-950 outline-none focus:border-orange-500"
          />
          {errors.nombre ? (
            <p className="mt-2 text-xs text-rose-700">{errors.nombre.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-950">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className="min-h-12 w-full rounded-[1.15rem] border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-950 outline-none focus:border-orange-500"
          />
          {errors.email ? (
            <p className="mt-2 text-xs text-rose-700">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="empresa" className="mb-2 block text-sm font-medium text-slate-950">
            Empresa
          </label>
          <input
            id="empresa"
            type="text"
            autoComplete="organization"
            {...register("empresa")}
            className="min-h-12 w-full rounded-[1.15rem] border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-950 outline-none focus:border-orange-500"
          />
          {errors.empresa ? (
            <p className="mt-2 text-xs text-rose-700">{errors.empresa.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="interes" className="mb-2 block text-sm font-medium text-slate-950">
            Que quieres activar primero
          </label>
          <select
            id="interes"
            defaultValue=""
            {...register("interes")}
            className="min-h-12 w-full rounded-[1.15rem] border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-950 outline-none focus:border-orange-500"
          >
            <option value="" disabled>
              --
            </option>
            <option value="producto">Propuesta y producto</option>
            <option value="web">Web comercial</option>
            <option value="automatizacion">Automatizacion</option>
            <option value="pack">Pack completo</option>
          </select>
          {errors.interes ? (
            <p className="mt-2 text-xs text-rose-700">{errors.interes.message}</p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-slate-950">
            Contexto
          </label>
          <textarea
            id="mensaje"
            rows={6}
            placeholder="Que has vendido ya, que quieres convertir en herramienta y donde hoy se frena la productividad o el seguimiento."
            {...register("mensaje")}
            className="w-full rounded-[1.15rem] border border-slate-200 bg-white/90 px-4 py-3 text-sm leading-7 text-slate-950 outline-none focus:border-orange-500"
          />
          {errors.mensaje ? (
            <p className="mt-2 text-xs text-rose-700">{errors.mensaje.message}</p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Preparando contacto..." : "Enviar solicitud"}
      </button>
    </form>
  );
}
