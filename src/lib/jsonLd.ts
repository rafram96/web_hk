/**
 * Datos estructurados (JSON-LD) del sitio. Todo se deriva de `site.ts`: aquí
 * no se escribe a mano ningún dato de la empresa, del contacto ni del
 * portafolio. El dominio sale de `siteUrl`.
 */
import {
  company,
  contact,
  postalAddress,
  services,
  siteUrl,
  type Project,
  type Service,
} from "@/lib/site";

/** Identificador estable de la organización, para referenciarla desde otros nodos. */
export const ORGANIZATION_ID = `${siteUrl}/#organizacion`;

/** Objeto JSON-LD genérico (sin depender de schema-dts). */
export type JsonLdObject = Record<string, unknown>;

/** Dirección postal desglosada, tal como la pide schema.org. */
const address: JsonLdObject = {
  "@type": "PostalAddress",
  streetAddress: postalAddress.streetAddress,
  addressLocality: postalAddress.addressLocality,
  addressRegion: postalAddress.addressRegion,
  addressCountry: postalAddress.addressCountry,
};

/** País de operación: todo el Perú. */
const areaServed: JsonLdObject = { "@type": "Country", name: "Perú" };

/** Una línea de servicio como schema.org/Service. */
function serviceNode(service: Service): JsonLdObject {
  return {
    "@type": "Service",
    "@id": `${siteUrl}/servicios#${service.slug}`,
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `${siteUrl}/servicios#${service.slug}`,
    provider: { "@id": ORGANIZATION_ID },
    areaServed,
  };
}

/**
 * La organización: ProfessionalService (subtipo de LocalBusiness) porque
 * HK presta servicios profesionales desde una dirección física.
 */
export function organizationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: company.legalName,
    legalName: company.legalName,
    alternateName: company.shortName,
    description: company.intro,
    slogan: company.tagline,
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    image: `${siteUrl}/opengraph-image`,
    foundingDate: String(company.foundedYear),
    /* RUC: identificador tributario de la empresa en el Perú. */
    taxID: company.ruc,
    identifier: [{ "@type": "PropertyValue", name: "RUC", value: company.ruc }],
    address,
    telephone: contact.phone,
    email: contact.email,
    areaServed,
    knowsAbout: [...company.normativa],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de consultoría en ingeniería",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: serviceNode(service),
      })),
    },
  };
}

/** Las tres líneas de servicio, para la página /servicios. */
export function servicesJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@graph": services.map(serviceNode),
  };
}

/** Migas de pan de una ficha de proyecto: Inicio › Proyectos › #code. */
export function projectBreadcrumbJsonLd(project: Project): JsonLdObject {
  const trail = [
    { name: "Inicio", url: `${siteUrl}/` },
    { name: "Proyectos", url: `${siteUrl}/proyectos` },
    { name: `#${project.code}`, url: `${siteUrl}/proyectos/${project.slug}` },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: step.url,
    })),
  };
}
