import type { JsonLdObject } from "@/lib/jsonLd";

/**
 * Inyecta datos estructurados como <script type="application/ld+json">.
 * Es la recomendación de Next para JSON-LD (script nativo, no next/script).
 * El `<` se escapa a \u003c para cerrar la vía de inyección de HTML que deja
 * JSON.stringify.
 */
export function JsonLd({ data }: { data: JsonLdObject }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
