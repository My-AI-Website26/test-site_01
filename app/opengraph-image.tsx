import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #D08554 0%, #C1653B 50%, #485530 100%)",
          color: "#FFFDF9",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700 }}>Torsbeanie</div>
        <div style={{ marginTop: 24, fontSize: 32 }}>
          Corner Cafe &middot; Catering &amp; Food Truck &middot; Halstead, Essex
        </div>
      </div>
    ),
    { ...size }
  );
}
