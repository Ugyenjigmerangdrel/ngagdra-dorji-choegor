import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/lib/site";
import { jsonLd } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Institute for Vajrayana Studies`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: ["/logo.svg"],
  },
  keywords: ["Ngagdra Dorji Choegar", "Vajrayana", "Bhutan", "Mongar", "Kurizampa", "Buddhist institute", "retreat centre", "Eastern Bhutan"],
  category: "education",
  alternates: { canonical: site.url },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      description: site.description,
      url: site.url,
      foundingDate: site.foundingDate,
      logo: `${site.url}/logo.svg`,
      location: { "@type": "Place", name: "Kurizampa, Mongar, Eastern Bhutan", address: { "@type": "PostalAddress", addressLocality: "Mongar", addressCountry: "BT" } },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main"><MotionProvider>{children}</MotionProvider></main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organization) }} />
      </body>
    </html>
  );
}
