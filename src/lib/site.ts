/**
 * Fuente única de verdad para todo el contenido del sitio de HK Consulting S.A.C.
 * Extraído del "Brochure HK Consulting 2026". Editar aquí actualiza toda la web.
 */

export const company = {
  legalName: "HK Consulting S.A.C.",
  shortName: "HK Consulting",
  ruc: "20512925023",
  foundedYear: 2006,
  tagline: "Soluciones integrales en ingeniería para el desarrollo del país",
  subtitle:
    "Estudios de Preinversión · Expedientes Técnicos · Supervisión de Obras",
  claim: "Desde 2006 impulsando el desarrollo del Perú",
  intro:
    "Empresa peruana de consultoría especializada en el desarrollo integral del ciclo de inversión pública y privada. Acompañamos a entidades del Estado, gobiernos regionales y empresas privadas en la materialización de proyectos que transforman comunidades y generan valor sostenible.",
  normativa: ["Invierte.pe", "Ley N.º 30225", "RNE", "Normas sectoriales"],
} as const;

export const contact = {
  phone: "+51 989 067 242",
  phoneHref: "+51989067242",
  whatsapp: "51989067242",
  email: "hkconsultora@gmail.com",
  address: "Jr. Monterosa N.º 233 Int. 407 – Santiago de Surco – Lima",
  city: "Lima, Perú",
  ruc: "20512925023",
} as const;

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  isYear?: boolean;
};

export const stats: Stat[] = [
  { value: 2006, label: "Desde", isYear: true },
  { value: 50, prefix: "+", label: "Proyectos desarrollados" },
  { value: 14, label: "Sectores atendidos" },
  { value: 24, label: "Regiones del Perú" },
];

export const mision =
  "Brindar consultoría técnica especializada que contribuya al desarrollo sostenible del país, mediante la formulación, evaluación y supervisión de proyectos, garantizando calidad, eficiencia y cumplimiento normativo.";

export const vision =
  "Consolidarnos como una consultora líder a nivel nacional, reconocida por su solvencia técnica, experiencia profesional y compromiso con el desarrollo de proyectos públicos y privados que impulsan el crecimiento del país.";

export const valores = [
  { title: "Solvencia técnica", desc: "Rigor en cada entregable" },
  { title: "Compromiso", desc: "Cumplimos los plazos" },
  { title: "Integridad", desc: "Transparencia y ética" },
  { title: "Excelencia", desc: "Mejora continua" },
] as const;

export type Service = {
  num: string;
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    num: "01",
    slug: "estudios-de-preinversion",
    title: "Estudios de Preinversión",
    short:
      "Formulamos y evaluamos proyectos de inversión pública bajo el marco Invierte.pe.",
    description:
      "Formulamos y evaluamos proyectos de inversión pública y privada bajo el marco Invierte.pe, desde la idea inicial hasta la declaración de viabilidad. Elaboramos perfiles, estudios de prefactibilidad y factibilidad con sustento técnico sólido que aseguran la rentabilidad social y la sostenibilidad de cada inversión.",
    benefits: [
      "Proyectos viables aprobados a la primera",
      "Reducción de tiempos en el ciclo",
      "Sustento técnico sólido",
    ],
  },
  {
    num: "02",
    slug: "expedientes-tecnicos",
    title: "Expedientes Técnicos",
    short:
      "Desarrollamos expedientes técnicos completos, integrales y listos para licitar.",
    description:
      "Desarrollamos expedientes técnicos completos e integrales —ingeniería, especialidades, metrados, costos, presupuestos y especificaciones— listos para licitar y ejecutar. Cada expediente se entrega conforme a la normativa vigente, minimizando observaciones y riesgos en los procesos de selección.",
    benefits: [
      "Expedientes aprobados sin observaciones",
      "Procesos de selección sin cuestionamientos",
      "Obras ejecutables",
    ],
  },
  {
    num: "03",
    slug: "supervision-de-obras",
    title: "Supervisión de Obras",
    short:
      "Brindamos supervisión técnica, administrativa y de calidad durante toda la ejecución.",
    description:
      "Brindamos supervisión técnica, administrativa y de calidad durante toda la ejecución de la obra. Controlamos plazos, presupuesto, calidad y seguridad (SSOMA), con una gestión documentaria blindada que protege a la entidad y garantiza obras entregadas conforme al expediente.",
    benefits: [
      "Obras entregadas en plazo y presupuesto",
      "Control riguroso de calidad",
      "Gestión documentaria blindada",
    ],
  },
];

export type Sector = { num: string; name: string; desc: string };

export const sectors: Sector[] = [
  { num: "01", name: "Administrativos", desc: "Sedes institucionales, oficinas públicas" },
  { num: "02", name: "Educación", desc: "Colegios, universidades, institutos" },
  { num: "03", name: "Deportivos", desc: "Estadios, polideportivos, complejos" },
  { num: "04", name: "Salud", desc: "Hospitales, centros de salud, postas" },
  { num: "05", name: "Seguridad", desc: "Comisarías, bases policiales, cuarteles" },
  { num: "06", name: "Penitenciarios", desc: "Establecimientos penitenciarios" },
  { num: "07", name: "Públicos", desc: "Equipamientos urbanos diversos" },
  { num: "08", name: "Ambiental", desc: "Manejo de residuos, recuperación" },
  { num: "09", name: "Vial", desc: "Carreteras, puentes, intercambios" },
  { num: "10", name: "Urbanas", desc: "Habilitaciones, espacios públicos" },
  { num: "11", name: "Portuario", desc: "Terminales, muelles, obras marítimas" },
  { num: "12", name: "Saneamiento", desc: "Agua potable, alcantarillado, PTAR" },
  { num: "13", name: "Hidrocarburos", desc: "Infraestructura energética" },
  { num: "14", name: "Represas", desc: "Embalses, presas, obras hidráulicas" },
];

export const experienceByType = [
  {
    count: 16,
    title: "Estudios de Preinversión",
    desc: "Perfiles, prefactibilidades y factibilidades.",
  },
  {
    count: 20,
    title: "Expedientes Técnicos",
    desc: "Expedientes técnicos integrales.",
  },
  {
    count: 12,
    title: "Supervisión de Obras",
    desc: "Supervisión técnica y administrativa.",
  },
  {
    count: 3,
    title: "Planes y Desarrollo Territorial",
    desc: "Acondicionamiento y zonificación.",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Experiencia comprobada",
    desc: "Más de 50 proyectos en todo el Perú.",
  },
  {
    title: "Equipo multidisciplinario",
    desc: "Profesionales colegiados y habilitados.",
  },
  {
    title: "Cumplimiento normativo",
    desc: "Dominio de Invierte.pe, Ley 30225, RNE.",
  },
  {
    title: "Compromiso con plazos",
    desc: "Cumplimos los cronogramas pactados.",
  },
  {
    title: "Acompañamiento integral",
    desc: "Las tres etapas críticas bajo un solo equipo.",
  },
  {
    title: "Reducción de riesgos",
    desc: "Minimizamos riesgos técnicos y contractuales.",
  },
] as const;

export const howWeWork = [
  { num: "01", title: "Estudiamos", desc: "Análisis exhaustivo del contexto." },
  {
    num: "02",
    title: "Diseñamos",
    desc: "Soluciones técnicas viables y conformes a normativa.",
  },
  {
    num: "03",
    title: "Supervisamos",
    desc: "Verificación en campo de la correcta ejecución.",
  },
  {
    num: "04",
    title: "Entregamos",
    desc: "Entrega de resultados sólidos y trazables.",
  },
] as const;

export const projectCounts = { terminados: 44, enEjecucion: 7, total: 51 };

export type Project = {
  code: string;
  title: string;
  entity: string;
  postor?: string;
  type: string;
  sector: string;
  date: string;
  amount: string;
  status: "Terminado" | "En ejecución";
  image?: string;
  featured?: boolean;
};

/** Proyectos destacados con ficha completa (de la sección "Proyectos destacados"). */
export const featuredProjects: Project[] = [
  {
    code: "141",
    title: "Supervisión Hospital Sicuani — Red Cusco",
    entity: "Gobierno Regional del Cusco",
    postor: "Consorcio CLAS Hidroenergía HK",
    type: "Supervisión",
    sector: "Salud",
    date: "05/09/2008",
    amount: "S/ 803,387.09",
    status: "Terminado",
    featured: true,
  },
  {
    code: "175",
    title:
      "Actualización del Estudio de Factibilidad del Terminal Portuario de Pucallpa",
    entity: "Autoridad Portuaria Nacional",
    postor: "Consorcio Terminal Portuario Pucallpa",
    type: "Preinversión",
    sector: "Portuario",
    date: "01/03/2012",
    amount: "S/ 2,217,966.62",
    status: "Terminado",
    image: "/images/proyecto-aereo-hospital.jpg",
    featured: true,
  },
  {
    code: "185",
    title:
      "Supervisión de Expediente, Ejecución y Equipamiento — Hospital de Apoyo Macusani, Puno",
    entity: "Gobierno Regional Puno",
    postor: "Consorcio Supervisor SMPM",
    type: "Supervisión",
    sector: "Salud",
    date: "30/12/2014",
    amount: "S/ 3,900,000.00",
    status: "Terminado",
    featured: true,
  },
  {
    code: "220",
    title:
      "Supervisión Hospital de Apoyo de Huanta Daniel Alcides Carrión — Ayacucho",
    entity: "Gobierno Regional de Ayacucho",
    postor: "Consorcio Supervisor Castilla",
    type: "Supervisión",
    sector: "Salud",
    date: "12/02/2019",
    amount: "S/ 6,403,212.06",
    status: "En ejecución",
    image: "/images/proyecto-represa.jpg",
    featured: true,
  },
  {
    code: "279",
    title:
      "Supervisión — Superintendencia del Mercado de Valores, Miraflores",
    entity: "PROINVERSIÓN",
    postor: "Consorcio Supervisor SMV",
    type: "Supervisión",
    sector: "Administrativos",
    date: "01/05/2026",
    amount: "S/ 3,516,000.00",
    status: "En ejecución",
    featured: true,
  },
  {
    code: "281",
    title:
      "Supervisión Hospital Provincial de Virú — La Libertad",
    entity: "Gobierno Regional de La Libertad",
    postor: "Consorcio SHV",
    type: "Supervisión",
    sector: "Salud",
    date: "19/02/2026",
    amount: "S/ 4,957,967.45",
    status: "En ejecución",
    featured: true,
  },
  {
    code: "285",
    title:
      "Supervisión Educación Primaria, Secundaria y EBA — I.E. Ciencias, Cusco",
    entity: "Gobierno Regional del Cusco",
    postor: "Consorcio Imperial",
    type: "Supervisión",
    sector: "Educación",
    date: "29/04/2026",
    amount: "S/ 19,846,380.79",
    status: "En ejecución",
    featured: true,
  },
  {
    code: "284",
    title:
      "Control de Calidad y SSOMA — Palacio Legislativo (Bicameralidad)",
    entity: "Unidad Ejecutora Bicameralidad del Poder Legislativo",
    postor: "Consorcio Supervisor Legislativo",
    type: "Supervisión",
    sector: "Administrativos",
    date: "26/02/2026",
    amount: "S/ 1,500,000.00",
    status: "En ejecución",
    featured: true,
  },
];

/** Selección representativa del portafolio (44 terminados + 7 en ejecución). */
export const projects: Project[] = [
  { code: "114", title: "Infraestructura de la Sede del Distrito Judicial de Ucayali", entity: "Poder Judicial", type: "Preinversión", sector: "Administrativos", date: "2021", amount: "—", status: "En ejecución" },
  { code: "120", title: "Construcción de la Compañía de Bomberos N.º 49 — Cañete", entity: "CGBVP", type: "Expediente", sector: "Seguridad", date: "2021", amount: "—", status: "En ejecución" },
  { code: "133", title: "Mejoramiento de la Capacidad Resolutiva del Centro de Salud Pampas a Hospital", entity: "GORE", type: "Expediente", sector: "Salud", date: "2022", amount: "—", status: "En ejecución" },
  { code: "139", title: "Ampliación y Equipamiento de la Comisaría PNP Manchay — Pachacámac, Lima", entity: "Ministerio del Interior", type: "Expediente", sector: "Seguridad", date: "2022", amount: "—", status: "En ejecución" },
  { code: "140", title: "Factibilidad — Ampliación del Establecimiento Penitenciario de Tacna", entity: "INPE", type: "Preinversión", sector: "Penitenciarios", date: "2022", amount: "—", status: "En ejecución" },
  { code: "174", title: "Factibilidad Hospital Guillermo Díaz de la Vega — Abancay, Apurímac", entity: "Gobierno Regional de Apurímac", type: "Preinversión", sector: "Salud", date: "16/01/2012", amount: "S/ 804,121.30", status: "Terminado" },
  { code: "177", title: "Factibilidad Nuevo Hospital de Iquitos — César Garayar García, Maynas", entity: "Gobierno Regional de Loreto", type: "Preinversión", sector: "Salud", date: "28/09/2012", amount: "S/ 1,018,875.00", status: "Terminado" },
  { code: "180", title: "Expediente Instituto Regional de Enfermedades Neoplásicas — Centro del Perú", entity: "Gobierno Regional de Junín", type: "Expediente", sector: "Salud", date: "01/03/2013", amount: "S/ 2,379,531.00", status: "Terminado" },
  { code: "189", title: "Factibilidad Hospital San José Callao — DIRESA Callao", entity: "Gobierno Regional del Callao", type: "Preinversión", sector: "Salud", date: "18/09/2015", amount: "S/ 781,150.84", status: "Terminado" },
  { code: "194", title: "Perfil y Factibilidad Hospital III Juliaca — San Román, Puno", entity: "EsSalud", type: "Preinversión", sector: "Salud", date: "19/01/2016", amount: "S/ 779,400.00", status: "Terminado" },
  { code: "196", title: "Terminales Portuarios de Pasajeros — Río Ucayali (Atalaya–Pucallpa)", entity: "Autoridad Portuaria Nacional", type: "Preinversión", sector: "Portuario", date: "04/06/2016", amount: "S/ 1,657,500.00", status: "Terminado" },
  { code: "197", title: "Centro Panamericano de Tabla — Punta Negra, Lima (Panamericanos 2019)", entity: "Proyecto Especial Panamericanos 2019", type: "Preinversión/Expediente", sector: "Deportivos", date: "01/08/2016", amount: "S/ 1,990,672.98", status: "Terminado" },
  { code: "201", title: "Supervisión I.E. N.º 8190 — Carabayllo, Lima", entity: "PRONIED", type: "Supervisión", sector: "Educación", date: "03/07/2017", amount: "S/ 432,887.86", status: "Terminado" },
  { code: "202", title: "Expediente Hospital de Ferreñafe — Lambayeque", entity: "Gobierno Regional de Lambayeque", type: "Expediente", sector: "Salud", date: "02/08/2017", amount: "S/ 1,660,761.49", status: "Terminado" },
  { code: "204", title: "Expediente y Equipamiento Hospital Leoncio Prado — Huamachuco, La Libertad", entity: "PRONIS", type: "Expediente", sector: "Salud", date: "13/12/2017", amount: "S/ 1,800,000.00", status: "Terminado" },
  { code: "205", title: "Expediente Hospital Provincial de Acobamba — Huancavelica", entity: "Gobierno Regional de Huancavelica", type: "Expediente", sector: "Salud", date: "05/12/2017", amount: "S/ 2,110,961.33", status: "Terminado" },
  { code: "210", title: "Perfil — Rehabilitación y Modernización del Terminal Portuario de Iquitos", entity: "Autoridad Portuaria Nacional", type: "Preinversión", sector: "Portuario", date: "06/07/2018", amount: "S/ 1,650,000.00", status: "Terminado" },
  { code: "213", title: "Expediente Hospital de Apoyo de Pomabamba — Áncash", entity: "PRONIS", type: "Expediente", sector: "Salud", date: "18/10/2018", amount: "S/ 1,657,539.34", status: "Terminado" },
  { code: "214", title: "Perfil y Expediente — Sede del Ministerio de la Producción, San Isidro, Lima", entity: "Ministerio de la Producción", type: "Preinversión/Expediente", sector: "Administrativos", date: "13/11/2018", amount: "S/ 544,800.00", status: "Terminado" },
  { code: "221", title: "Perfil — Terminal Portuario de Saramiriza, Datem del Marañón, Loreto", entity: "Autoridad Portuaria Nacional", type: "Preinversión", sector: "Portuario", date: "19/03/2019", amount: "S/ 2,244,596.00", status: "Terminado" },
  { code: "225", title: "Estudio Definitivo — Laboratorio de Calidad de Agua SEDAPAL, La Atarjea", entity: "SEDAPAL", type: "Expediente", sector: "Saneamiento", date: "12/08/2019", amount: "S/ 850,473.14", status: "Terminado" },
  { code: "227", title: "Expediente Establecimiento de Salud Monsefú — Lambayeque", entity: "Gobierno Regional de Lambayeque", type: "Expediente", sector: "Salud", date: "20/12/2019", amount: "S/ 1,668,393.26", status: "Terminado" },
  { code: "229", title: "Perfil — Nuevo Terminal Portuario de Chimbote, Áncash", entity: "Autoridad Portuaria Nacional", type: "Preinversión", sector: "Portuario", date: "07/02/2020", amount: "S/ 1,891,283.00", status: "Terminado" },
  { code: "275", title: "Expediente Habitabilidad — Fuerte Gral. Rafael Hoyos Rubio", entity: "Servicio de Ingeniería del Ejército", type: "Expediente", sector: "Seguridad", date: "15/10/2025", amount: "S/ 180,000.00", status: "Terminado" },
];

export type Certification = {
  name: string;
  standard: string;
  scope: string;
  code: string;
  image?: string;
};

export const certifications: Certification[] = [
  {
    name: "ISO 9001",
    standard: "9001:2015",
    scope: "Sistema de Gestión de la Calidad",
    code: "ICO-SSGC-092025-7390-PE",
    image: "/certs/iso-9001.png",
  },
  {
    name: "ISO 14001",
    standard: "14001:2015",
    scope: "Sistema de Gestión Ambiental",
    code: "ICO-SSGA-092025-7083-PE",
    image: "/certs/iso-14001.png",
  },
  {
    name: "ISO 45001",
    standard: "45001:2018",
    scope: "Seguridad y Salud en el Trabajo",
    code: "ICO-SSGSST-092025-3227-PE",
  },
  {
    name: "ISO 37001",
    standard: "37001:2016",
    scope: "Sistema de Gestión Antisoborno",
    code: "ICO-SSGAS-092025-1771-PE",
    image: "/certs/iso-37001.png",
  },
  {
    name: "BPL",
    standard: "Buenas Prácticas Laborales",
    scope: "Certificación de Buenas Prácticas Laborales",
    code: "CEA-BPL-02001",
    image: "/certs/bpl.png",
  },
];

export const nav = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sectores", href: "/#sectores" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
] as const;
