import QRCode from "qrcode";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/** A printable QR code that opens the member registration page. */
export async function GET() {
  const svg = await QRCode.toString(new URL("/membership", site.url).toString(), {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: { dark: "#1c1a18", light: "#ffffff" },
  });
  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8", "Cache-Control": "public, max-age=86400" },
  });
}
