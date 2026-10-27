# HK Consulting — Sitio web corporativo

Sitio corporativo estático construido con **Next.js 16 (App Router)**, **React 19**,
**TypeScript** y **Tailwind CSS v4**. Todas las páginas se generan en tiempo de
compilación (SSG); no requiere base de datos ni servidor de aplicación en tiempo de
ejecución.

## Stack

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.7 |
| UI | React / React DOM | 19.2.4 |
| Lenguaje | TypeScript | 5 |
| Estilos | Tailwind CSS (configuración CSS-first con `@theme`) + PostCSS | 4 |
| Tipografías | `next/font/local` — Bricolage Grotesque, Hanken Grotesk, IBM Plex Mono (WOFF2 autoalojadas) | — |
| Imágenes | `next/image` (AVIF / WebP responsivo) + `sharp` para la conversión offline | 0.34 |
| Calidad | ESLint 9 + `eslint-config-next` | 9 |
| Runtime | Node.js | ≥ 20.9 |

Sin dependencias de UI de terceros: animaciones, carruseles, lightbox y contadores
son componentes propios.

## Requisitos y comandos

```bash
npm install        # instala dependencias
npm run dev        # desarrollo en http://localhost:3000
npm run build      # compilación de producción (genera todas las páginas estáticas)
npm run start      # sirve la compilación de producción
npm run lint       # análisis estático con ESLint
```

### Variables de entorno

| Variable | Uso | Valor por defecto |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL base absoluta: canonical, `sitemap.xml`, `robots.txt`, JSON-LD y Open Graph | `https://www.hkconsulting.com.pe` |

Al ser `NEXT_PUBLIC_*`, se incorpora en tiempo de compilación: cualquier cambio
requiere volver a compilar.

## Arquitectura

### Renderizado

- **Generación estática (SSG)** de todas las rutas. Las fichas de proyecto
  (`/proyectos/[slug]`) se prerenderizan con `generateStaticParams` a partir de los
  datos de `src/lib/site.ts`.
- **Server Components por defecto**; solo los componentes interactivos (carrusel del
  hero, filtros de proyectos, lightbox, animaciones de scroll) se marcan con
  `"use client"`.
- El resultado es HTML, CSS y JS estáticos servibles desde cualquier CDN.

### Rutas

| Ruta | Contenido |
|---|---|
| `/` | Home: hero con carrusel y video, cifras, entidades, servicios, sectores, proyectos destacados, certificaciones, contacto |
| `/nosotros` | Empresa, misión, visión, valores, metodología |
| `/servicios` | Servicios detallados por etapa del ciclo de inversión |
| `/proyectos` | Explorador de proyectos con filtros por sector, tipo y estado, y búsqueda por título, entidad o código |
| `/proyectos/[slug]` | Ficha individual de cada proyecto (prerenderizada) |
| `/sitemap.xml`, `/robots.txt` | Generados desde `src/app/sitemap.ts` y `src/app/robots.ts` |
| `/opengraph-image` | Imagen para redes sociales generada en compilación |

### Modelo de contenido

Todo el contenido vive en **`src/lib/site.ts`** como datos tipados: empresa,
contacto, cifras, servicios, sectores, proyectos, certificaciones y navegación.
Las páginas y secciones solo consumen esos datos, por lo que agregar o editar un
proyecto actualiza automáticamente el explorador, su ficha, el sitemap y las cifras
agregadas.

### Estructura

```
src/
  app/
    layout.tsx              # fuentes, metadata global, Navbar + Footer, JSON-LD
    page.tsx                # home
    nosotros/  servicios/  proyectos/  proyectos/[slug]/
    sitemap.ts  robots.ts  opengraph-image.tsx
    globals.css             # tokens de diseño (@theme) y utilidades
    fonts/                  # tipografías WOFF2 autoalojadas
  components/
    layout/                 # Navbar, Footer
    sections/               # secciones de página (hero, servicios, proyectos…)
    ui/                     # primitivos: Section, Button, Reveal, Counter, Lightbox…
    seo/                    # inyección de datos estructurados
  lib/
    site.ts                 # fuente única de contenido
    jsonLd.ts               # esquema schema.org de la organización
public/
  images/  logos/  certs/  videos/  textures/
scripts/
  optimize-images.mjs       # conversión JPG/PNG → WebP con sharp
```

### Sistema de diseño

- Tokens definidos en CSS con `@theme` (Tailwind v4, sin `tailwind.config.js`):
  escalas de color de marca, tipografías y utilidades propias.
- Los estilos base de elementos están dentro de `@layer base` para no competir con
  las utilidades.
- Componentes del hero con CSS Modules (`HeroNuevo.module.css`).

## Rendimiento

- Imágenes en WebP, servidas por `next/image` en AVIF/WebP con `deviceSizes`
  ajustados a resoluciones de escritorio comunes.
- Tipografías autoalojadas con `next/font/local`: sin solicitudes a terceros y sin
  saltos de diseño por carga de fuentes.
- Video de fondo solo en pantallas ≥ 768 px y sin modo de ahorro de datos
  (`useWantsVideo`); `preload="none"` y póster como imagen optimizada.
- `content-visibility: auto` en las secciones bajo el hero.
- Efectos de scroll centralizados (`ScrollDirector`): lectura de geometría en
  bloque y escritura de variables CSS en un solo frame, sin renders de React.
- Animaciones de entrada con `IntersectionObserver` y solo propiedades compuestas
  (`transform`, `opacity`).

## Accesibilidad

- Respeta `prefers-reduced-motion`: desactiva carruseles automáticos y animaciones.
- HTML semántico, textos alternativos en imágenes y controles de carrusel con
  etiquetas accesibles.

## SEO

- Metadata por página (título, descripción, canonical) con la API `metadata` de Next.js.
- `sitemap.xml` con prioridades por tipo de página y `robots.txt` generados en código.
- Datos estructurados JSON-LD (`Organization`) en todas las páginas.
- Imagen Open Graph generada en compilación para vistas previas en redes y mensajería.

## Seguridad

Cabeceras HTTP declaradas en `vercel.json`:

| Cabecera | Valor |
|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Cache-Control` (estáticos) | `public, max-age=31536000, immutable` |

Además, `poweredByHeader: false` en `next.config.ts`. El formulario de contacto no tiene backend: compone
el mensaje y lo abre en el cliente de correo del visitante (`mailto:`), por lo que el
sitio no almacena datos personales.

## Optimización de imágenes

```bash
node scripts/optimize-images.mjs            # convierte a WebP y elimina el original
node scripts/optimize-images.mjs --dry-run  # solo informa
node scripts/optimize-images.mjs --keep     # conserva el original
```

Ancho máximo y calidad por carpeta definidos en `TARGETS`. Tras convertir, actualizar
las referencias en `src/lib/site.ts` y en los componentes.
