import type { MetadataRoute } from "next";

import { projects, siteUrl } from "@/lib/site";

/**
 * Mapa del sitio. Las rutas fijas se listan a mano y las 51 fichas de proyecto
 * se generan desde `projects` de site.ts, así que agregar un proyecto ahí lo
 * agrega también aquí. El dominio sale de `siteUrl` (único lugar).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  /* Un solo sello de tiempo por build para todas las URLs. */
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/servicios`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/proyectos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/nosotros`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  /* Fichas de proyecto: los destacados (con galería) pesan algo más. */
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/proyectos/${project.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: project.featured ? 0.7 : 0.5,
  }));

  return [...staticRoutes, ...projectRoutes];
}
