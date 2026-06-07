import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://hkconsulting.pe";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HK Consulting S.A.C. — Consultoría integral en ingeniería",
    template: "%s · HK Consulting S.A.C.",
  },
  description:
    "Consultora peruana especializada en Estudios de Preinversión, Expedientes Técnicos y Supervisión de Obras bajo el marco Invierte.pe. Desde 2006 impulsando el desarrollo del Perú.",
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
    images: [{ url: "/images/hero-equipo-congreso.jpg", width: 1200, height: 630 }],
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
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
