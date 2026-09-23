import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/jsonLd";
import { company, projectsHeadline, regionsCovered, siteUrl } from "@/lib/site";

/* Fuentes autoalojadas (src/app/fonts). Antes venían de next/font/google,
   que las descarga de Google en cada build: un fallo de red en Vercel tumbó
   un despliegue el 22-sep-2026 ("module-not-found" en el CSS de Bricolage).
   Con los .woff2 en el repo el build no depende de la red. Son los mismos
   archivos latin que servía Google Fonts (Bricolage y Hanken variables,
   IBM Plex Mono en tres pesos). */

// Display con carácter (editorial técnico).
const bricolage = localFont({
  src: "./fonts/bricolage-grotesque-400-800-latin.woff2",
  variable: "--font-bricolage",
  weight: "400 800",
  display: "swap",
});

// Cuerpo: grotesca cálida y muy legible.
const hanken = localFont({
  src: "./fonts/hanken-grotesk-400-700-latin.woff2",
  variable: "--font-hanken",
  weight: "400 700",
  display: "swap",
});

// Mono para cotas/etiquetas técnicas.
const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400-latin.woff2", weight: "400" },
    { path: "./fonts/ibm-plex-mono-500-latin.woff2", weight: "500" },
    { path: "./fonts/ibm-plex-mono-600-latin.woff2", weight: "600" },
  ],
  variable: "--font-plex-mono",
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
