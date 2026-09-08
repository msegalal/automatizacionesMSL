import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(145deg, rgba(255,247,237,1) 0%, rgba(255,237,213,1) 100%)",
          borderRadius: "40px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 18,
            borderRadius: "32px",
            border: "2px solid rgba(249,115,22,0.18)"
          }}
        />
        <div
          style={{
            width: 124,
            height: 124,
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(145deg, rgba(249,115,22,1) 0%, rgba(251,146,60,1) 100%)",
            boxShadow: "0 20px 40px rgba(15,23,42,0.18)",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 22,
              right: 22,
              width: 16,
              height: 16,
              borderRadius: "999px",
              background: "rgba(255,247,237,0.92)"
            }}
          />
          <div
            style={{
              color: "#0f172a",
              fontSize: 74,
              fontWeight: 800,
              letterSpacing: "-6px",
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
