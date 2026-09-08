"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactOptions,
  contactSchema,
  type ContactFormValues,
  type ContactFallback,
  type ContactApiResponse,
} from "@/lib/contact";

type FormStatus = "idle" | "loading" | "fallback" | "error";

const fieldClass =
  "min-h-12 w-full border border-rule-strong bg-canvas px-3.5 py-3 text-base text-ink focus:border-accent";
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
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fallbackDelivery, setFallbackDelivery] =
    useState<ContactFallback | null>(null);

  const [copyStatus, setCopyStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    setFallbackDelivery(null);
    setCopyStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await response.json()) as ContactApiResponse;

      if (response.ok && json.success && json.delivery === "resend") {
        reset();
        router.push("/gracias");
        return;
      }
      if (!json.success && json.delivery === "mailto") {
        setFallbackDelivery(json);
        setStatus("fallback");
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
      setCopyStatus("Resumen copiado. Pégalo en tu correo y envíalo.");
    } catch {
      setCopyStatus(
        "No se ha podido copiar. Selecciona el resumen que aparece debajo.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-busy={status === "loading"}
      noValidate
      className="space-y-7"
    >
      <div>
        <h3 className="font-display text-2xl leading-snug text-ink">
          Solicitar diagnóstico
        </h3>
      </div>

      <div aria-live="polite" className="space-y-4 empty:hidden">
        {status === "loading" ? <ResponseSkeleton /> : null}

        {fallbackDelivery ? (
          <div className="border border-rule-strong bg-surface px-4 py-4 text-sm text-ink">
            <p>
              <strong>Tu solicitud todavía no se ha enviado.</strong> Puedes
              reintentarlo o abrir tu correo y enviarla a{" "}
              {fallbackDelivery.recipient}. Tus datos se conservan.
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
            <p role="status" className="mt-3 text-sm text-ink-soft">
              {copyStatus}
            </p>
            <details className="mt-3">
              <summary className="cursor-pointer py-2 underline underline-offset-4">
                Ver resumen para copiar
              </summary>
              <pre className="mt-3 whitespace-pre-wrap break-words font-sans text-sm leading-6">
                {fallbackDelivery.summary}
              </pre>
            </details>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="border border-bad bg-bad-surface px-4 py-3 text-sm leading-6 text-bad">
            No hemos podido enviar la solicitud. Puedes reintentarlo sin perder
            lo que ibas a explicar.
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
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
            {...register("nombre")}
            className={fieldClass}
          />
          {errors.nombre ? (
            <p id="nombre-error" className={errorClass}>
              {errors.nombre.message}
            </p>
          ) : null}
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
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
            className={fieldClass}
          />
          {errors.email ? (
            <p id="email-error" className={errorClass}>
              {errors.email.message}
            </p>
          ) : null}
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
            aria-describedby={errors.empresa ? "empresa-error" : undefined}
            {...register("empresa")}
            className={fieldClass}
          />
          {errors.empresa ? (
            <p id="empresa-error" className={errorClass}>
              {errors.empresa.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="interes" className={labelClass}>
            Qué quieres revisar primero
          </label>
          <select
            id="interes"
            defaultValue=""
            aria-invalid={Boolean(errors.interes)}
            aria-describedby={errors.interes ? "interes-error" : undefined}
            {...register("interes")}
            className={fieldClass}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {contactOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.interes ? (
            <p id="interes-error" className={errorClass}>
              {errors.interes.message}
            </p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="mensaje" className={labelClass}>
            Contexto
          </label>
          <textarea
            id="mensaje"
            rows={6}
            aria-invalid={Boolean(errors.mensaje)}
            aria-describedby={
              errors.mensaje ? "mensaje-ayuda mensaje-error" : "mensaje-ayuda"
            }
            {...register("mensaje")}
            className={`${fieldClass} leading-7`}
          />
          <p
            id="mensaje-ayuda"
            className="mt-2 text-xs leading-5 text-ink-faint"
          >
            Por ejemplo: las solicitudes entran por varios canales, no vemos el
            siguiente paso o la propuesta tarda demasiado.
          </p>
          {errors.mensaje ? (
            <p id="mensaje-error" className={errorClass}>
              {errors.mensaje.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consentimiento"
            type="checkbox"
            aria-invalid={Boolean(errors.consentimiento)}
            aria-describedby={
              errors.consentimiento ? "consentimiento-error" : undefined
            }
            {...register("consentimiento")}
            className="mt-1 h-4 w-4 shrink-0 border border-rule-strong accent-accent"
          />
          <label
            htmlFor="consentimiento"
            className="text-sm leading-6 text-ink-soft"
          >
            He leído la{" "}
            <Link
              href="/privacidad"
              className="text-accent underline underline-offset-2"
            >
              política de privacidad
            </Link>{" "}
            y acepto que se traten mis datos para responder a esta solicitud.
          </label>
        </div>
        {errors.consentimiento ? (
          <p id="consentimiento-error" className={errorClass}>
            {errors.consentimiento.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center border border-ink bg-ink px-7 py-4 text-sm font-medium text-canvas hover:border-accent hover:bg-accent disabled:cursor-not-allowed disabled:border-rule-strong disabled:bg-rule-strong disabled:text-ink-soft sm:w-auto"
      >
        {status === "loading" ? "Enviando" : "Solicitar diagnóstico"}
      </button>
    </form>
  );
}
