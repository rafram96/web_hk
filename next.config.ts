import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes (Vercel sirve AVIF/WebP automáticamente).
  images: {
    formats: ["image/avif", "image/webp"],
    // 1440 y 1600 añadidos: en un escritorio de 1366–1536 px el hero saltaba
    // de 1200 a 1920 y bajaba ~50 KB de más por foto.
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1600, 1920, 2048, 3840],
  },
  // Cabeceras de seguridad también para `next start` (Vercel usa vercel.json).
  poweredByHeader: false,
};

export default nextConfig;
