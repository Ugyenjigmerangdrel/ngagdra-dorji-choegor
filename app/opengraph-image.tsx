import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoSvg = await readFile(path.join(process.cwd(), "public", "logo.svg"), "utf8");
  const embeddedLogo = logoSvg.match(/data:image\/png;base64,([^\"]+)/)?.[1];
  if (!embeddedLogo) throw new Error("The supplied logo SVG does not contain its embedded image.");
  const logoSrc = `data:image/png;base64,${embeddedLogo}`;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#faf8f4", color: "#1c1a18", padding: "72px", fontFamily: "serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, fontFamily: "sans-serif", fontSize: 24, letterSpacing: 2 }}>
        <span style={{ width: 80, height: 80, display: "flex", position: "relative", overflow: "hidden" }}>
          <img src={logoSrc} alt="" width={140} height={196} style={{ position: "absolute", left: -30, top: -58 }} />
        </span>
        <span>NGAGDRA DORJI CHOEGAR</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 70, lineHeight: 1.05, maxWidth: 980 }}>A centre for Vajrayana study, practice and retreat preparation.</div>
        <div style={{ display: "flex", marginTop: 28, fontFamily: "sans-serif", fontSize: 24, color: "#625e59" }}>Kurizampa · Mongar · Eastern Bhutan</div>
      </div>
    </div>,
    { ...size },
  );
}
