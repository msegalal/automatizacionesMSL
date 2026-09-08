"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useId } from "react";

export default function ProductScreenshot({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 640px",
}: {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  return (
    <>
      <button
        type="button"
        className="product-image-button"
        onClick={() => dialog.current?.showModal()}
        aria-label="Ampliar captura del producto"
      >
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          priority={priority}
          sizes={sizes}
          className="block h-auto w-full"
        />
        <span className="image-expand">
          Ampliar captura <span aria-hidden="true">+</span>
        </span>
      </button>
      <dialog
        ref={dialog}
        className="product-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close();
        }}
      >
        <div className="flex items-center justify-between gap-4 border-b border-rule px-5 py-3">
          <p id={titleId} className="text-sm text-ink">
            Vista del producto · datos de demostración
          </p>
          <button
            type="button"
            autoFocus
            className="min-h-11 border border-ink px-5 text-sm"
            onClick={() => dialog.current?.close()}
          >
            Cerrar
          </button>
        </div>
        <div className="overflow-auto p-3 sm:p-5">
          <Image
            src={src}
            alt={alt}
            sizes="95vw"
            className="block h-auto w-full min-w-[960px]"
          />
        </div>
        <p className="px-5 pb-4 text-sm text-ink-soft">
          En pantallas pequeñas puedes desplazar la captura para ver el detalle.
        </p>
      </dialog>
    </>
  );
}
