import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/jsonLd";
import { company, projectsHeadline, regionsCovered, siteUrl } from "@/lib/site";

// Display con carácter (editorial técnico).
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Cuerpo: grotesca cálida y muy legible.
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Mono para cotas/etiquetas técnicas.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HK Consulting S.A.C. — Consultoría integral en ingeniería",
    template: "%s · HK Consulting S.A.C.",
  },
  description: `Consultora peruana especializada en Estudios de Preinversión, Expedientes Técnicos y Supervisión de Obras bajo el marco Invierte.pe. Más de ${projectsHeadline.value} proyectos en ${regionsCovered} regiones desde ${company.foundedYear}.`,
  keywords: [
    "consultoría ingeniería Perú",
    "estudios de preinversión",
    "expedientes técnicos",
    "supervisión de obras",
    "Invierte.pe",
    "HK Consulting",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName: company.legalName,
    title: "HK Consulting S.A.C. — Consultoría integral en ingeniería",
    description:
      "Soluciones integrales en ingeniería para el desarrollo del país. Preinversión, expedientes técnicos y supervisión de obras.",
    /* La imagen la aporta `src/app/opengraph-image.tsx` (1200×630 generada). */
  },
  /* Sin título ni descripción propios: así cada página aporta los suyos. */
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${hanken.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <JsonLd data={organizationJsonLd()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
