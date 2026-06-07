<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# HK Consulting — Sitio web corporativo

Sitio de **HK Consulting S.A.C.**, consultora de ingeniería peruana (estudios de
preinversión, expedientes técnicos y supervisión de obras). Contenido derivado del
"Brochure HK Consulting 2026".

## Stack
- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — configuración por CSS en `@theme` dentro de `src/app/globals.css`.
  NO existe `tailwind.config.js`.
- Sin dependencias de UI externas; animaciones de entrada con un `Reveal` propio
  (IntersectionObserver) y `Counter` para cifras.

## Convenciones clave
- **Diseño**: la vara de calidad visual está en [`docs/diseno.md`](docs/diseno.md)
  (dirección editorial "monografía técnica", tipografía, color, movimiento,
  robustez). Léela antes de cambios visuales.
- **Datos**: todo el contenido vive en `src/lib/site.ts` (company, contact, stats,
  mision, vision, valores, services, sectors, experienceByType, whyChooseUs,
  howWeWork, projectCounts, featuredProjects, projects, certifications, nav).
  Editar ahí actualiza toda la web.
- **Tokens de marca** (en `@theme`): `navy` (#04395B, +escala 50–950), `orange`
  (#E87A2C, +escala), `mist`, `ink`, `slate-soft`, `line`. Fuentes: `font-display`
  (Archivo), `font-sans` (IBM Plex Sans), `font-mono` (IBM Plex Mono).
- **Utilidades CSS**: `.container-hk`, `.kicker`, `.accent-rule`, `.blueprint-grid`
  (líneas claras para fondos oscuros), `.blueprint-grid-ink` (líneas oscuras para
  fondos claros).
- **Componentes compartidos** en `src/components/ui`: `Section`, `SectionHeading`,
  `Reveal`, `Counter`, `Button`, `Logo`. Layout en `src/components/layout`
  (`Navbar`, `Footer`). Secciones del home en `src/components/sections`.
- **⚠️ Trampa de Tailwind v4**: los estilos base de elementos en `globals.css`
  (p. ej. `h1–h4 { color: navy }`, `* { border-color }`) DEBEN ir dentro de
  `@layer base`. Si se dejan sin capa, ganan a TODAS las utilidades (`text-white`,
  `border-white/10`, …) y los encabezados en secciones oscuras quedan invisibles.

## Estructura
- `src/app/page.tsx` — home (ensambla las secciones en orden).
- `src/app/servicios/page.tsx` — página de servicios detallada.
- `src/app/layout.tsx` — fuentes, metadata SEO, Navbar + Footer.
- `public/images`, `public/certs`, `public/logo.jpg` — assets de marca.

## Comandos
- `npm run dev` — desarrollo (http://localhost:3000)
- `npm run build` — build de producción
- `npm run lint` — ESLint
