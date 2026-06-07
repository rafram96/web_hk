import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes (Vercel sirve AVIF/WebP automáticamente).
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Cabeceras de seguridad también para `next start` (Vercel usa vercel.json).
  poweredByHeader: false,
};

export default nextConfig;
