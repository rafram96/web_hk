# HK Consulting S.A.C. — Sitio web corporativo

Sitio web de **HK Consulting S.A.C.**, consultora de ingeniería peruana especializada
en **Estudios de Preinversión**, **Expedientes Técnicos** y **Supervisión de Obras**
bajo el marco Invierte.pe. *Desde 2006 impulsando el desarrollo del Perú.*

Construido con **Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript**.

## Características

- **Home** de una sola página con: hero, quiénes somos + estadísticas animadas,
  misión/visión/valores, servicios, metodología, 14 sectores atendidos, portafolio
  de proyectos **filtrable** (por sector y estado), certificaciones ISO/BPL y contacto.
- **Página de servicios** (`/servicios`) detallada con el ciclo completo de inversión.
- Diseño responsive (móvil → desktop), navbar fija con menú móvil, animaciones de
  entrada al hacer scroll, formulario de contacto y enlace directo a WhatsApp.
- Identidad de marca: azul marino `#04395B` + naranja `#E87A2C`, retícula técnica
  tipo plano, tipografías Archivo / IBM Plex Sans / IBM Plex Mono.
- SEO: metadata, Open Graph y páginas estáticas pre-renderizadas.

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros comandos:

```bash
npm run build    # build de producción
npm run start    # servir el build
npm run lint     # ESLint
```

## Despliegue en Vercel

El proyecto está listo para Vercel (Next.js se detecta automáticamente; ver
[`vercel.json`](vercel.json) para framework, cabeceras de seguridad y caché de
estáticos). Hay dos formas de desplegar:

**A) Desde el repositorio (recomendado)**

1. Sube el repositorio a GitHub/GitLab/Bitbucket.
2. En [vercel.com](https://vercel.com) → *Add New… → Project* → importa el repo.
3. Framework *Next.js* (autodetectado), *Build Command* `next build`, *Output*
   por defecto. No se requieren variables de entorno. *Deploy*.

**B) Con la CLI de Vercel (sin remoto)**

```bash
npm i -g vercel        # o usa: npx vercel
vercel login           # autentícate con tu cuenta
vercel                 # despliegue de previsualización
vercel --prod          # despliegue a producción
```

Cada push a la rama principal genera un despliegue de producción; cada PR/rama,
una previsualización. Las 51 fichas de proyecto se pre-renderizan como estáticas.

## Estructura del proyecto

```
src/
  app/
    layout.tsx          # fuentes, metadata SEO, Navbar + Footer
    page.tsx            # home (ensambla las secciones)
    servicios/page.tsx  # página de servicios
    globals.css         # tokens de marca (@theme) + utilidades
  components/
    layout/             # Navbar, Footer
    sections/           # Hero, About, MissionVision, Services, Process,
                        # Sectors, Projects, WhyChooseUs, Certifications, Contact
    ui/                 # Section, SectionHeading, Reveal, Counter, Button, Logo
  lib/
    site.ts             # ÚNICA fuente de contenido (empresa, servicios, proyectos…)
public/
  images/  certs/  logo.jpg
```

## Editar el contenido

Casi todo el texto y los datos (servicios, sectores, proyectos, certificaciones,
datos de contacto) están centralizados en **`src/lib/site.ts`**. Modificar ese
archivo actualiza automáticamente toda la web.

## Datos de la empresa

- **Razón social:** HK Consulting S.A.C. · **RUC:** 20512925023
- **Teléfono / WhatsApp:** +51 989 067 242
- **Email:** hkconsultora@gmail.com
- **Dirección:** Jr. Monterosa N.º 233 Int. 407 – Santiago de Surco – Lima
