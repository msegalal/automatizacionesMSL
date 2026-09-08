import type { ReactElement } from "react";

export const ogSize = {
  width: 1200,
  height: 630
};

export const ogContentType = "image/png";

/*
 * Tarjeta para redes sociales. Sigue el mismo sistema que la web:
 * sin gradiente, sin sombra, sin radio. No se declara una familia
 * tipografica concreta porque el runtime de generacion no lleva
 * Newsreader cargada y el fallback quedaria descuadrado.
 */
export function ogCard(): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f5f0e8",
        color: "#203b35",
        padding: 72,
        borderTop: "16px solid #9f4d62"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            background: "#203b35",
            color: "#f5f0e8",
            fontSize: 26,
            fontWeight: 700
          }}
        >
          M
        </div>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: -0.5 }}>
          automatizacionesMSL
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: -2,
            maxWidth: 940
          }}
        >
          Menos tareas manuales y mejor seguimiento
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            lineHeight: 1.4,
            color: "#43554d",
            maxWidth: 820
          }}
        >
          Herramienta, implantación y automatización para agencias de viajes.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: "2px solid #c9c1b2",
          paddingTop: 24,
          fontSize: 24,
          color: "#718078"
        }}
      >
        <div style={{ display: "flex" }}>automatizacionesmsl.com</div>
        <div style={{ display: "flex", color: "#9f4d62" }}>Caso real: iReViajes</div>
      </div>
    </div>
  );
}
