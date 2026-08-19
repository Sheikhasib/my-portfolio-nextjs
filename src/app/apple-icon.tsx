import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
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
          backgroundColor: "#0A1628",
        }}
      >
        <div style={{ position: "relative", width: 132, height: 132 }}>
          <div
            style={{
              position: "absolute",
              left: 29,
              top: 30,
              width: 17.5,
              height: 71,
              borderRadius: 4,
              backgroundColor: "#F2A93B",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 85.5,
              top: 30,
              width: 17.5,
              height: 71,
              borderRadius: 4,
              backgroundColor: "#F2A93B",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 29,
              top: 58.5,
              width: 74,
              height: 14.5,
              borderRadius: 4,
              backgroundColor: "#6FD3F7",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}