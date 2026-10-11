import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoSvg = await readFile(path.join(process.cwd(), "public", "logo.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logoSvg.toString("base64")}`;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#faf8f4", color: "#1c1a18", padding: "72px", fontFamily: "serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24, fontFamily: "sans-serif", fontSize: 24, letterSpacing: 2 }}>
        <img src={logoSrc} alt="" width={96} height={113} />
        <span>NGAGDRA DORJI CHOEGAR</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 70, lineHeight: 1.05, maxWidth: 980 }}>A living lineage. A path of practice. A tradition carried forward.</div>
        <div style={{ display: "flex", marginTop: 28, fontFamily: "sans-serif", fontSize: 24, color: "#5c5751" }}>Kurizampa · Mongar · Eastern Bhutan</div>
      </div>
    </div>,
    { ...size },
  );
}
