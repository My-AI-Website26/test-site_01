import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          borderRadius: "50%",
          background: "#A8502B",
          color: "#FFFDF9",
          fontSize: 36,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
