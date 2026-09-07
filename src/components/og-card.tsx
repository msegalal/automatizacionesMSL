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
        background: "#faf8f4",
        color: "#171310",
        padding: 72,
        borderTop: "16px solid #b4471f"
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
            background: "#b4471f",
            color: "#faf8f4",
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
            color: "#4a423b",
            maxWidth: 820
          }}
        >
          Herramienta, implantacion y automatizacion para agencias de viajes.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: "2px solid #ddd5c8",
          paddingTop: 24,
          fontSize: 24,
          color: "#6f665d"
        }}
      >
        <div style={{ display: "flex" }}>automatizacionesmsl.com</div>
        <div style={{ display: "flex", color: "#b4471f" }}>Caso real: iReViajes</div>
      </div>
    </div>
  );
}
