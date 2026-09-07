interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/*
 * Los datos vienen de constantes propias, nunca de entrada de usuario.
 * Aun asi se escapa "<" para que un string no pueda cerrar la etiqueta.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
