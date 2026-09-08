import type { ReactElement } from "react";

export const ogSize = {
  width: 1200,
  height: 630
};

export const ogContentType = "image/png";

/*
 * Tarjeta para redes sociales, con la paleta de la web: marfil calido,
 * tinta azul oscura y acento naranja. No se declara una familia
 * tipografica concreta porque el runtime de generacion no lleva Fraunces
 * cargada y el fallback quedaria descuadrado.
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
        background: "#fcfaf6",
        color: "#0e1a2b",
        padding: 72,
        borderTop: "16px solid #ff6e40"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 999,
            background: "#ffedd5",
            border: "3px solid #fdba74",
            color: "#ea580c",
            fontSize: 22,
            fontWeight: 700
          }}
        >
          MSL
        </div>
        <div style={{ display: "flex", fontSize: 30, letterSpacing: -0.5, fontWeight: 600 }}>
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
            fontWeight: 600,
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
            color: "#5f7084",
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
          borderTop: "2px solid #dbe1e8",
          paddingTop: 24,
          fontSize: 24,
          color: "#5f7084"
        }}
      >
        <div style={{ display: "flex" }}>automatizacionesmsl.com</div>
        <div style={{ display: "flex", color: "#ff6e40" }}>Caso real: iReViajes</div>
      </div>
    </div>
  );
}
