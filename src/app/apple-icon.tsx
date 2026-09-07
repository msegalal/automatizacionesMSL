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
          background: "#b4471f",
          color: "#faf8f4",
          fontSize: 112,
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
