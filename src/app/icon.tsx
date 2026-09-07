import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

/* Marca plana: sin gradiente, sin sombra, sin radio, como el resto del sistema. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#b4471f",
          color: "#faf8f4",
          fontSize: 40,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          lineHeight: 1
        }}
      >
        M
      </div>
    ),
    size
  );
}
