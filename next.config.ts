import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: process.cwd(),
  turbopack: { root: process.cwd() },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 14400,
  },
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
