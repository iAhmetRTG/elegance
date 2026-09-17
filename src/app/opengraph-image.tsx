import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
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
          justifyContent: "space-between",
          backgroundColor: "#131109",
          color: "#f4efe3",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 18, height: 18, backgroundColor: "#b1833f" }} />
          <div style={{ fontSize: 36, fontStyle: "italic" }}>Elegance</div>
          <div style={{ fontSize: 18, letterSpacing: 10, color: "#f4efe3aa" }}>
            İNŞAAT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ fontSize: 66, lineHeight: 1.08, maxWidth: 920 }}>
            İstanbul&apos;da kentsel dönüşüm ve özel taahhüt projeleri
          </div>
          <div style={{ fontSize: 24, color: "#f4efe3aa" }}>
            Aynı gün keşif: Bakırköy · Yeşilköy · Ataköy · Yeşilyurt · Florya
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#f4efe3aa",
          }}
        >
          <div>Ücretsiz keşif ve şeffaf teklif</div>
          <div style={{ color: "#e0c48c" }}>{site.phoneDisplay}</div>
        </div>
      </div>
    ),
    size,
  );
}
