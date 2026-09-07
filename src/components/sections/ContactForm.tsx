"use client";

import Link from "next/link";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().min(1, "El email es obligatorio").email("Introduce un email valido"),
  empresa: z.string().min(1, "La empresa es obligatoria"),
  interes: z.enum(["producto", "web", "automatizacion", "pack"], {
    error: "Selecciona el tipo de interes"
  }),
  mensaje: z.string().min(20, "Necesito un poco mas de contexto"),
  consentimiento: z.literal(true, {
    error: "Necesitamos tu consentimiento para tratar los datos"
  })
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

const fieldClass =
  "min-h-12 w-full border border-rule-strong bg-canvas px-3.5 py-3 text-sm text-ink outline-none focus:border-accent";
const labelClass = "mb-2 block text-sm font-medium text-ink";
const errorClass = "mt-2 text-xs text-bad";

/* Esqueleto de carga con la forma del panel de respuesta, no un spinner. */
function ResponseSkeleton() {
  return (
    <div aria-hidden="true" className="border border-rule bg-surface p-4">
      <div className="h-3 w-2/5 animate-pulse bg-rule-strong" />
      <div className="mt-3 h-3 w-4/5 animate-pulse bg-rule" />
      <div className="mt-2 h-3 w-3/5 animate-pulse bg-rule" />
    </div>
  );
}

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
          setFallbackDelivery({
            mailtoUrl: json.mailtoUrl,
            recipient: json.recipient,
            summary: json.summary
          });
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      <div>
        <h3 className="font-display text-2xl leading-snug text-ink">
          Cuentanos que problema quieres resolver
        </h3>
      </div>

      <div aria-live="polite" className="space-y-4 empty:hidden">
        {status === "loading" ? <ResponseSkeleton /> : null}

        {status === "success" ? (
          <div className="border border-ok bg-ok-surface px-4 py-3 text-sm leading-6 text-ok">
            Solicitud recibida. Si no hay integracion activa, la web prepara tambien el correo
            para que puedas enviarlo igualmente.
          </div>
        ) : null}

        {fallbackDelivery ? (
          <div className="border border-rule-strong bg-surface px-4 py-4 text-sm text-ink">
            <p>
              Contacto preparado por email: se abrira tu aplicacion de correo hacia{" "}
              {fallbackDelivery.recipient}.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={fallbackDelivery.mailtoUrl}
                className="inline-flex items-center border border-ink bg-ink px-4 py-2.5 text-sm font-medium text-canvas hover:border-accent hover:bg-accent"
              >
                Abrir email
              </a>
              <button
                type="button"
                onClick={copySummary}
                className="inline-flex items-center border border-rule-strong px-4 py-2.5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
              >
                Copiar resumen
              </button>
            </div>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="border border-bad bg-bad-surface px-4 py-3 text-sm leading-6 text-bad">
            No hemos podido enviar la solicitud. Puedes reintentarlo sin perder lo que ibas a
            explicar.
          </div>
        ) : null}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.nombre)}
            {...register("nombre")}
            className={fieldClass}
          />
          {errors.nombre ? <p className={errorClass}>{errors.nombre.message}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
            className={fieldClass}
          />
          {errors.email ? <p className={errorClass}>{errors.email.message}</p> : null}
        </div>

        <div>
          <label htmlFor="empresa" className={labelClass}>
            Empresa
          </label>
          <input
            id="empresa"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.empresa)}
            {...register("empresa")}
            className={fieldClass}
          />
          {errors.empresa ? <p className={errorClass}>{errors.empresa.message}</p> : null}
        </div>

        <div>
          <label htmlFor="interes" className={labelClass}>
            Que quieres valorar primero
          </label>
          <select
            id="interes"
            defaultValue=""
            aria-invalid={Boolean(errors.interes)}
            {...register("interes")}
            className={fieldClass}
          >
            <option value="" disabled>
              Selecciona una opcion
            </option>
            <option value="producto">Herramienta</option>
            <option value="web">Implantacion y propuesta</option>
            <option value="automatizacion">Automatizacion</option>
            <option value="pack">Pack completo</option>
          </select>
          {errors.interes ? <p className={errorClass}>{errors.interes.message}</p> : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="mensaje" className={labelClass}>
            Contexto
          </label>
          <textarea
            id="mensaje"
            rows={6}
            aria-invalid={Boolean(errors.mensaje)}
            aria-describedby="mensaje-ayuda"
            {...register("mensaje")}
            className={`${fieldClass} leading-7`}
          />
          <p id="mensaje-ayuda" className="mt-2 text-xs leading-5 text-ink-faint">
            Explica si hoy el problema esta en captacion, seguimiento, orden interno, carga
            manual o en como se presenta la propuesta.
          </p>
          {errors.mensaje ? <p className={errorClass}>{errors.mensaje.message}</p> : null}
        </div>
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consentimiento"
            type="checkbox"
            aria-invalid={Boolean(errors.consentimiento)}
            {...register("consentimiento")}
            className="mt-1 h-4 w-4 shrink-0 border border-rule-strong accent-[#b4471f]"
          />
          <label htmlFor="consentimiento" className="text-sm leading-6 text-ink-soft">
            He leido la{" "}
            <Link href="/privacidad" className="text-accent underline underline-offset-2">
              politica de privacidad
            </Link>{" "}
            y acepto que se traten mis datos para responder a esta solicitud.
          </label>
        </div>
        {errors.consentimiento ? (
          <p className={errorClass}>{errors.consentimiento.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center border border-ink bg-ink px-7 py-4 text-sm font-medium text-canvas hover:border-accent hover:bg-accent disabled:cursor-not-allowed disabled:border-rule-strong disabled:bg-rule-strong disabled:text-ink-soft sm:w-auto"
      >
        {status === "loading" ? "Enviando" : "Quiero ver si encaja"}
      </button>
    </form>
  );
}
