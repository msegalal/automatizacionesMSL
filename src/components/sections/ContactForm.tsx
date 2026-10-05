"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio"),
  email: z
    .string()
    .trim()
    .min(1, "El email es obligatorio")
    .email("Introduce un correo electrónico válido"),
  empresa: z.string().trim().min(1, "Indica la agencia o el negocio"),
  interes: z.enum(["crm", "automatizacion", "voz", "aplicacion", "otro"], {
    error: "Selecciona un servicio o indica que aún no lo tienes claro"
  }),
  mensaje: z.string().trim().min(20, "Cuéntanos al menos 20 caracteres de contexto"),
  /* La politica de privacidad declara que el consentimiento se da marcando esta casilla. */
  privacidad: z.literal(true, {
    error: "Necesito tu consentimiento para tratar los datos del formulario"
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

const fieldClassName =
  "min-h-12 w-full rounded-[1.15rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 shadow-[0_1px_2px_rgba(8,19,33,0.035)] transition-[border-color,box-shadow] placeholder:text-slate-400 aria-invalid:border-rose-500 focus-visible:border-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 focus-visible:ring-4 focus-visible:ring-orange-500/10";

export default function ContactForm() {
  const router = useRouter();
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

        /*
         * Con envio real llevamos a /gracias, que explica que pasa ahora.
         * Con la alternativa manual no: ahi el usuario todavia tiene que
         * abrir su correo, asi que la pantalla debe quedarse donde esta.
         */
        if (json.delivery === "resend") {
          reset();
          router.push("/gracias");
          return;
        }

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-labelledby="form-title"
      className="space-y-7"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
          contacto
        </p>
        <h2 id="form-title" className="mt-3 max-w-[22ch] text-balance text-3xl font-semibold leading-tight text-slate-950">
          Cuéntanos qué quieres mejorar en tu negocio.
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Los campos marcados como obligatorios nos ayudan a entender el contexto.
        </p>
      </div>

      <div className="space-y-4">
        {status === "success" ? (
          <div role="status" aria-live="polite" className="rounded-[1.4rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            {fallbackDelivery
              ? "Se ha preparado un correo. La solicitud solo se enviará cuando lo revises y pulses Enviar en tu aplicación de correo."
              : "Solicitud enviada. Te responderemos lo antes posible."}
          </div>
        ) : null}

        {fallbackDelivery ? (
          <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-800">
            <p className="font-semibold text-slate-950">
              Contacto preparado por correo: se abrirá tu aplicación de correo hacia{" "}
              {fallbackDelivery.recipient}.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={fallbackDelivery.mailtoUrl}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Abrir correo electrónico
              </a>
              <button
                type="button"
                onClick={copySummary}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:border-orange-500 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Copiar resumen
              </button>
            </div>
          </div>
        ) : null}

        {status === "error" ? (
          <div role="alert" aria-live="assertive" className="rounded-[1.4rem] border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            No se ha podido preparar el contacto. Revisa los datos e inténtalo de nuevo.
          </div>
        ) : null}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-sm font-semibold text-slate-950">
            Nombre <span className="text-slate-500">(obligatorio)</span>
          </label>
          <input
            id="nombre"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
            autoComplete="name"
            {...register("nombre")}
            className={fieldClassName}
          />
          {errors.nombre ? (
            <p id="nombre-error" role="alert" className="mt-2 text-sm text-rose-700">{errors.nombre.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-950">
            Correo electrónico <span className="text-slate-500">(obligatorio)</span>
          </label>
          <input
            id="email"
            type="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
            {...register("email")}
            className={fieldClassName}
          />
          {errors.email ? (
            <p id="email-error" role="alert" className="mt-2 text-sm text-rose-700">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="empresa" className="mb-2 block text-sm font-semibold text-slate-950">
            Agencia o negocio <span className="text-slate-500">(obligatorio)</span>
          </label>
          <input
            id="empresa"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.empresa)}
            aria-describedby={errors.empresa ? "empresa-error" : undefined}
            autoComplete="organization"
            {...register("empresa")}
            className={fieldClassName}
          />
          {errors.empresa ? (
            <p id="empresa-error" role="alert" className="mt-2 text-sm text-rose-700">{errors.empresa.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="interes" className="mb-2 block text-sm font-semibold text-slate-950">
            ¿Qué quieres valorar primero? <span className="text-slate-500">(obligatorio)</span>
          </label>
          <div className="relative">
            <select
              id="interes"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.interes)}
              aria-describedby={errors.interes ? "interes-error" : undefined}
              defaultValue=""
              {...register("interes")}
              className={`${fieldClassName} appearance-none pr-12`}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="crm">CRM y seguimiento de oportunidades</option>
              <option value="automatizacion">Automatización de tareas</option>
              <option value="voz">Voz para llamadas, WhatsApp o chat</option>
              <option value="aplicacion">Aplicación a medida</option>
              <option value="otro">Otro proceso o aún no lo tengo claro</option>
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            >
              <path d="m5.5 7.5 4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {errors.interes ? (
            <p id="interes-error" role="alert" className="mt-2 text-sm text-rose-700">{errors.interes.message}</p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-slate-950">
            ¿Qué ocurre hoy? <span className="text-slate-500">(obligatorio, mínimo 20 caracteres)</span>
          </label>
          <textarea
            id="mensaje"
            rows={6}
            required
            minLength={20}
            aria-required="true"
            aria-invalid={Boolean(errors.mensaje)}
            aria-describedby={`mensaje-ayuda${errors.mensaje ? " mensaje-error" : ""}`}
            placeholder="Por ejemplo, cómo llegan las solicitudes o qué tarea se repite."
            {...register("mensaje")}
            className={`${fieldClassName} min-h-36 leading-7`}
          />
          <p id="mensaje-ayuda" className="mt-2 text-sm leading-6 text-slate-500">
            No incluyas datos personales de clientes ni información confidencial.
          </p>
          {errors.mensaje ? (
            <p id="mensaje-error" role="alert" className="mt-2 text-sm text-rose-700">{errors.mensaje.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="privacidad" className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <input
            id="privacidad"
            type="checkbox"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.privacidad)}
            aria-describedby={errors.privacidad ? "privacidad-error" : undefined}
            {...register("privacidad")}
            className="mt-1 h-5 w-5 shrink-0 accent-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          />
          <span>
            He leído y acepto la{" "}
            <Link
              href="/privacidad"
              className="font-semibold text-slate-950 underline underline-offset-2 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              política de privacidad
            </Link>{" "}
            y consiento el tratamiento de mis datos para responder a esta solicitud.
          </span>
        </label>
        {errors.privacidad ? (
          <p id="privacidad-error" role="alert" className="mt-2 text-sm text-rose-700">{errors.privacidad.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        {status === "loading" ? "Preparando contacto..." : "Enviar consulta"}
        {status === "loading" ? null : (
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="ml-2 h-4 w-4">
            <path d="M4.5 10h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </form>
  );
}
