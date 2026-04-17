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
            "linear-gradient(135deg, rgba(255,247,237,1) 0%, rgba(255,237,213,1) 100%)",
          borderRadius: "40px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f97316",
            boxShadow: "0 18px 38px rgba(15,23,42,0.18)",
            color: "#0f172a",
            fontSize: 78,
            fontWeight: 800,
            letterSpacing: "-6px",
            fontFamily: "Arial, sans-serif"
          }}
        >
          M
        </div>
      </div>
    ),
    size
  );
}
