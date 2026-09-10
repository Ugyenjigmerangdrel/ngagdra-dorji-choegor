import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ngagdra Dorji Choegar",
    short_name: "Ngagdra",
    description: "Institute for Vajrayana study, practice and transmission in Mongar, Eastern Bhutan.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f4",
    theme_color: "#830b0d",
    icons: [{ src: "/logo.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
