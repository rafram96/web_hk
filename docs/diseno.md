# Guía de diseño — HK Consulting

Principios de diseño (destilados de una skill de webs "premium") **adaptados a
este proyecto Next.js + React + Tailwind v4 + Vercel**. Son la vara de calidad
para cualquier cambio visual.

## Dirección (archetype)
- **Una sola dirección, comprometida.** La nuestra: **"Monografía técnica /
  editorial de ingeniería"** (institucional, premium, preciso). No mezclar
  estilos: mezclar dos direcciones produce una web confusa.

## Tipografía
- Display **con carácter** (Bricolage Grotesque) + cuerpo refinado (Hanken
  Grotesk) + mono técnica (IBM Plex Mono para cotas/etiquetas).
- **Prohibido** lo genérico: Inter, Roboto, Arial, system-ui como protagonistas.
- Títulos a gran escala, tracking ajustado, jerarquía fuerte.

## Color y atmósfera
- **Dominante + acento agudo**: azul marino `#04395B` + naranja `#E87A2C` como
  acento de precisión (no relleno). Paletas tímidas y repartidas pierden.
- Evitar clichés (gradiente morado sobre blanco).
- **Nada de blanco plano**: base papel cálido `#F6F3EC` + grano sutil + retícula
  técnica (blueprint). Crear atmósfera y profundidad, no colores planos.

## Composición
- **Editorial**: asimetría, ruptura de retícula, numerales/índices a gran
  escala, espacio generoso, jerarquía clara.
- **Evitar "N tarjetas iguales"**: dar ritmo (una destacada, tamaños distintos,
  filas con líneas de medida).
- **Primer pantallazo "wow"**: el hero debe ser visualmente contundente.

## Movimiento
- **Una carga orquestada con reveals escalonados** vale más que micro-
  interacciones dispersas. Cada animación con un motivo.
- Herramientas opcionales (scroll-storytelling, parallax, cursor, 3D): en este
  stack con **CSS o `motion`/Framer Motion**, NO con GSAP/Lenis vanilla.
- ⚠️ **`prefers-reduced-motion`**: muchos PC Windows lo traen ACTIVADO. Si se
  apaga *todo* el movimiento, el cliente ve un sitio "plano/sin vida" (posible
  causa real de "falta calidad" en su PC). Regla: respetarlo, pero **garantizar
  que el contenido se vea** (opacity:1) y conservar transiciones de hover y, si
  acaso, un fade suave. No matar toda la vida visual.

## Copy
- **Editorial, sin buzzwords**: nada de "unlock", "transformar", "revolucionario",
  "secretos". Frases que firmaría un editor de revista.

## Móvil
- Composición **propia**, no un desktop aplastado.

## Robustez > espectáculo
- **Contenido en el JSX** (no dependiente de JS); las animaciones solo enriquecen.
- **Los reveals NUNCA deben dejar contenido invisible.** Red de seguridad: si el
  IntersectionObserver no dispara, el contenido se muestra igual.
- Una web sólida un poco menos "wow" gana a un showcase roto.

## Anti-plantilla / diversidad
- Evitar patrones genéricos de IA y que "se parezca a otra web". Cada sección,
  una solución intencional.

---

## Lo que NO aplica (es para sitios estáticos, no para este Next.js)
La skill original apunta a webs vanilla drag-and-drop en Hostinger. En este
proyecto **se ignora** todo eso porque Next.js + `next/image` + Vercel ya lo
resuelven:
- Patrón IIFE / `window.__BRAND__`, prohibición de ES modules → usamos React/
  componentes y módulos.
- `.htaccess`, `?v=YYYYMMDD` cache-buster, estrategia de caché de Hostinger →
  Vercel/Next versionan los assets (hashing) automáticamente.
- Vanilla JS + librerías locales en `lib/` (GSAP, Lenis, Three) → si hace falta
  animación, `motion`/Framer Motion vía npm.
- Pipeline Openverse + conversión WebP → `next/image` optimiza (AVIF/WebP) y
  usamos fotos reales del brochure.
- Scripts del skill (`download_libs`, `verify_project`, `http.server`) → usamos
  `npm run dev` / `next build`.
