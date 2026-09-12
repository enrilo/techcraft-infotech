import { ImageResponse } from "next/og";

export const alt =
  "Enrilo Technologies — software products and custom web & mobile apps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#14161b",
          color: "#edefea",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 1 }}>
          <span style={{ color: "#edefea" }}>Enrilo</span>
          <span style={{ color: "#c79549", marginLeft: 10 }}>Technologies</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 62, lineHeight: 1.15, maxWidth: 900 }}>
            Software products and custom web &amp; mobile apps.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(237,239,234,0.7)",
              maxWidth: 860,
              fontFamily: "Helvetica, Arial, sans-serif",
            }}>
            Our product AcadTracker is a CRM for study abroad and domestic
            college-placement consultancies.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "rgba(237,239,234,0.55)",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          enrilotechnologies.com
        </div>
      </div>
    ),
    { ...size }
  );
}
