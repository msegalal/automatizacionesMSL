import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

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
          background: "transparent",
          position: "relative"
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(145deg, rgba(255,247,237,1) 0%, rgba(255,237,213,1) 100%)",
            border: "4px solid #f97316",
            boxShadow: "0 8px 18px rgba(15,23,42,0.14)",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              width: 8,
              height: 8,
              borderRadius: "999px",
              background: "#fb923c"
            }}
          />
          <div
            style={{
              color: "#0f172a",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "-3px",
              fontFamily: "Arial, sans-serif",
              lineHeight: 1
            }}
          >
            M
          </div>
        </div>
      </div>
    ),
    size
  );
}
