import type { NextConfig } from "next";

// Images uploaded in the committee studio are served from the Supabase storage of the shared project.
const supabaseUrl = (() => {
  try {
    return process.env.NEXT_PUBLIC_SUPABASE_URL ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL) : null;
  } catch {
    return null;
  }
})();
const supabaseIsLocal = supabaseUrl ? ["127.0.0.1", "localhost"].includes(supabaseUrl.hostname) : false;
const storagePattern = (url: URL) => ({
  protocol: url.protocol.replace(":", "") as "http" | "https",
  hostname: url.hostname,
  port: url.port,
  pathname: "/storage/v1/object/public/content-public/**",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: process.cwd(),
  turbopack: { root: process.cwd() },
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 is used for photographs; 75 stays available as the default.
    qualities: [75, 90],
    minimumCacheTTL: 14400,
    remotePatterns: [
      ...(supabaseUrl ? [storagePattern(supabaseUrl)] : []),
      ...(process.env.NODE_ENV !== "production" || supabaseIsLocal ? [storagePattern(new URL("http://127.0.0.1:55321"))] : []),
    ],
    // The image optimiser refuses private addresses unless told otherwise; only a local Supabase stack needs this.
    dangerouslyAllowLocalIP: supabaseIsLocal,
  },
  // The donation form carries a payment screenshot of up to 6 MB.
  experimental: { serverActions: { bodySizeLimit: "8mb" } },
  // Pages retired when the site moved to the September 2026 content set.
  redirects: async () => [
    { source: "/our-work/:slug", destination: "/our-work#:slug", permanent: true },
    { source: "/stories/why-ngagdra-was-established", destination: "/centres/ngagdra-dorji-choegar", permanent: true },
    { source: "/stories/preparing-for-years-in-retreat", destination: "/our-work#retreat-preparation-practice", permanent: true },
    { source: "/stories/ani-yoesel-choden-jashar-woong", destination: "/centres/jashar-woong-drubdey-ani-dratshang", permanent: true },
    { source: "/stories/lineage-thruelzhig-gyeltshen-marpo", destination: "/about/history", permanent: true },
    { source: "/stories/darchen-two-generations", destination: "/centres/darchen-goenpa-tag-dong-drubdey", permanent: true },
    { source: "/centres/terdrak-goenpa-drubdey", destination: "/centres", permanent: false },
  ],
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
  ],
};

export default nextConfig;
