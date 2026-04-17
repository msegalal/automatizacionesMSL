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
          background: "#0f172a",
          borderRadius: "18px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "10px",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg, rgba(249,115,22,1) 0%, rgba(251,146,60,1) 58%, rgba(255,237,213,1) 100%)"
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            color: "#0f172a",
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: "-3px",
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
