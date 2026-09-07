import { ImageResponse } from "next/og";

import { company, services } from "@/lib/site";

/* Metadatos de la imagen (Next los convierte en og:image:*). */
export const alt = `${company.legalName} — ${company.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#04395B";
const NAVY_DEEP = "#022034";
const ORANGE = "#E87A2C";

/**
 * Imagen Open Graph del sitio, generada en build. Sigue la dirección
 * "monografía técnica": fondo navy con retícula blueprint, numeral/lockup a
 * gran escala en muy baja opacidad y el naranja solo como acento de precisión.
 * Los textos salen de site.ts (`company` y `services`), no se escriben aquí.
 *
 * Nota: usa la tipografía por defecto de `next/og`; no se descargan fuentes
 * para no hacer que el build dependa de la red.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: NAVY,
        }}
      >
        {/* Retícula técnica (blueprint), 60 px */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Velo de profundidad hacia la esquina inferior derecha */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage: `linear-gradient(135deg, rgba(2,32,52,0) 35%, ${NAVY_DEEP} 100%)`,
          }}
        />

        {/* Lockup gigante de marca, casi invisible (ruptura de retícula) */}
        <div
          style={{
            position: "absolute",
            right: -28,
            bottom: -170,
            display: "flex",
            fontSize: 430,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "rgba(255,255,255,0.05)",
          }}
        >
          HK
        </div>

        {/* Contenido */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "72px 80px",
          }}
        >
          {/* Kicker con la regla naranja */}
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div style={{ display: "flex", width: 76, height: 6, backgroundColor: ORANGE }} />
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: "0.26em",
                color: "rgba(255,255,255,0.62)",
              }}
            >
              CONSULTORÍA EN INGENIERÍA · PERÚ
            </div>
          </div>

          {/* Nombre + líneas de servicio */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 92,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "#FFFFFF",
              }}
            >
              {company.legalName}
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                height: 1,
                marginTop: 38,
                marginBottom: 34,
                backgroundColor: "rgba(255,255,255,0.16)",
              }}
            />

            {/* Las tres líneas de servicio, en columnas con su numeral. */}
            <div style={{ display: "flex", width: "100%", gap: 34 }}>
              {services.map((service, i) => (
                <div
                  key={service.slug}
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    paddingLeft: i === 0 ? 0 : 34,
                    borderLeft:
                      i === 0 ? "0" : "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 19,
                      letterSpacing: "0.22em",
                      color: ORANGE,
                      marginBottom: 12,
                    }}
                  >
                    {service.num}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 27,
                      lineHeight: 1.25,
                      color: "#DCE6ED",
                    }}
                  >
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Claim */}
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.06em",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            {company.claim}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
