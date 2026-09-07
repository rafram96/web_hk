# Pendientes — Web HK Consulting

> Estado al 2026-09-07, tras publicar el rediseño en https://hkconsulting.vercel.app
> (rama main = dev, 20 commits del 07-sep). Marcar con `[x]` al cerrar y anotar
> el commit o la fecha.

## 1. Legal (prioridad alta)

- [ ] **Política de privacidad** (Ley 29733). Página `/privacidad` con finalidad
      de los datos del formulario (nombre, teléfono, correo, mensaje) y casilla de
      consentimiento obligatoria en `Contact.tsx`. Enlazar desde el formulario y
      el footer. ~1 h.
- [ ] **Libro de reclamaciones virtual**: confirmar con el cliente (contador o
      abogado) si aplica. HK vende a entidades del Estado, probablemente no.

## 2. Propiedad y continuidad (depende del cliente)

- [ ] **Dominio** comprado a nombre de HK Consulting, no del desarrollador.
      Al tenerlo: agregarlo en Vercel, cambiar `NEXT_PUBLIC_SITE_URL` en Vercel
      (Production) y redesplegar. Verificar canonical, sitemap y og:image.
- [ ] **Transferencia o acceso**: al cerrar el trabajo, dejar por escrito que el
      proyecto de Vercel (`web-hk`, cuenta rafaelramos-3591) y el repo GitHub
      (`rafram96/web_hk`) están en cuentas personales; ofrecer transferirlos a
      una cuenta de la empresa.
- [ ] **Plan Hobby de Vercel**: informar al cliente de la restricción de uso no
      comercial. Alternativa gratuita sin esa restricción: Cloudflare Pages.
- [ ] **Correo corporativo**: reemplazar `hkconsultora@gmail.com` por
      `contacto@<dominio>` en `src/lib/site.ts` cuando exista el dominio.
- [ ] **Search Console + Perfil de empresa en Google**: solo con dominio propio.
      Verificar dominio, enviar sitemap, crear la ficha con dirección de Jesús
      María, teléfono, horario y fotos. Datos idénticos a SUNAT y LinkedIn.

## 3. Código pendiente

- [ ] Página 404 propia (`src/app/not-found.tsx`) con marca, texto en español y
      enlaces a /proyectos y /contacto.
- [ ] Página de error (`src/app/error.tsx`).
- [ ] Ícono 180 px para iOS (`src/app/apple-icon.png` o `.tsx`) y
      `src/app/manifest.ts` con nombre y color de marca.
- [ ] `AGENTS.md`: corregir tipografías (dice Archivo / IBM Plex Sans; el código
      usa Bricolage Grotesque / Hanken Grotesk / IBM Plex Mono).
- [ ] Solape de contenido entre `/servicios` y `/nosotros` (razones, sectores,
      metodología en ambas). Propuesta: metodología y sectores solo en
      /nosotros; razones solo en /servicios.
- [ ] Borrar el hero antiguo: `src/app/hero-anterior/` y
      `src/components/sections/Hero.tsx` (ya no se usan en producción).
- [ ] Logo en PNG para el JSON-LD (`logo` en `src/lib/jsonLd.ts` apunta al
      favicon SVG; Google prefiere ráster). Depende de que el cliente entregue
      el logo en alta.
- [ ] Opcional: fuente de marca en la imagen Open Graph (`opengraph-image.tsx`
      usa la tipografía por defecto). Requiere commitear el .ttf.

## 4. Material que debe entregar el cliente

- [ ] Fotos de obra a buena resolución o clip de dron (el hero tiene solo dos
      aéreas y una se repite en la banda de inversión). Prop `videoSrc` lista
      en `HeroNuevo`.
- [ ] Logos de las 8 entidades (campo `logo` opcional ya existe en site.ts).
- [ ] Montos de los 22 proyectos con `amount: "—"`: la cifra de inversión
      supervisada (hoy S/ 72 M sobre 29 contratos) sube sola al cargarlos.
- [ ] Confirmar copy de /nosotros y /servicios; confirmar "+50 proyectos" como
      cifra comercial (ya aplicada) y el texto de la banda de inversión.
- [ ] Cuenta de Google de la empresa para Search Console y Perfil de empresa.

## 4b. Hallazgos del inventario de imágenes (2026-09-07)

- [ ] ** NO es una represa**: es el equipo posando frente a un
      muro de piedra oscura (misma foto que ). En
       tiene alt "Obra de represa supervisada por HK
      Consulting" → alt falso. Corregir alt o cambiar la foto.
- [ ] ** y  (2390 px) son generadas con
      Gemini** a partir de la foto real  (1448×1086), según el
      commit del 07-jun ("2 Gemini limpias + equipo real").       conserva la **marca de agua de Gemini** (estrella abajo a la derecha) y se usa
      como fondo en /servicios. Quitar la marca o reemplazar por la foto real
      escalada 2x con Upscayl.
- [ ] ** es una captura de Google Maps** con etiquetas de
      hoteles y bancos. Reemplazar por foto o quitar la imagen de la ficha 276.
- [ ] Duplicados:  = ;
       = . Unificar referencias.
- [ ]  es un mapa de vulnerabilidad (lámina A3, original de 6612 px en
      ). Válido como imagen técnica, no como foto.
- [ ] Fotos de obra real con ≥1800 px: **solo la aérea del Hospital de Huanta**
      (1800×1125). La foto real del equipo tiene 1448 px. Todo lo demás está por
      debajo de 1 MP.
- [ ] Para escalar con Upscayl partir de los **originales en git** (commit anterior a
      , p. ej. ),
      no de los WebP ya reducidos.

## 5. Verificaciones que nadie ha hecho

- [ ] Rendimiento medido en https://pagespeed.web.dev (móvil). Si LCP > 2.5 s,
      bajar el tamaño de la foto del hero para móvil.
- [ ] Recorrer el home con Tab: orden de foco, botones del carrusel anunciados.
- [ ] Abrir la URL en un teléfono real (layout se midió solo por iframe a 390 px).
- [ ] Compartir el enlace por WhatsApp y confirmar que sale la tarjeta con imagen.
- [ ] Ver el scroll y las animaciones en una ventana en primer plano (Chrome en
      segundo plano pausaba los frames durante las capturas).

## 6. Menores / extras (fuera de la cotización de S/ 2,300)

- [ ] Vercel Web Analytics (un clic en el panel, sin código).
- [ ] Formulario con envío real (Resend o Formspree) en vez de `mailto`. ~2 h,
      extra chico o bolsa.
- [ ] Integración de logos y video de dron cuando lleguen: S/ 300–500 o bolsa.
- [ ] Dependabot / Renovate para avisos de seguridad.

## Estado del despliegue (referencia)

- Producción: https://hkconsulting.vercel.app (rama `main`).
- Redirigen (307) al anterior: `test09619.vercel.app` (enlace que tuvo Manuel
  en julio) y `hk-consulting-web.vercel.app` (intermedio).
- `hk-consulting.vercel.app` NO está disponible (lo usa un proyecto ajeno).
- Variable en Vercel (Production): `NEXT_PUBLIC_SITE_URL=https://hkconsulting.vercel.app`.
- Las vistas previas de ramas quedan detrás del login de Vercel (protección por
  defecto). Para mostrar algo al cliente, usar producción.
- Región: gru1 (São Paulo).
