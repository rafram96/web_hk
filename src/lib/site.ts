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
  address: "Jr. Huáscar N.º 1768 Dpto. D – Jesús María – Lima",
  city: "Lima, Perú",
  ruc: "20512925023",
} as const;

/* ------------------------------------------------------------------
   CIFRAS — fuente única.
   Toda cifra visible (hero, secciones, metadata SEO) se lee de aquí.
   Regla: ningún componente escribe un número a mano.
   ------------------------------------------------------------------ */

/** Año de referencia. Se recalcula en cada build. */
export const currentYear = new Date().getFullYear();

/** Años de trayectoria desde la fundación (2006). */
export const yearsOfExperience = currentYear - company.foundedYear;

/**
 * Regiones del Perú con proyectos ejecutados. Dato del brochure 2026: no se
 * deriva de `projects` porque las fichas no registran la región.
 */
export const regionsCovered = 24;

/** Conteo oficial del portafolio (44 terminados + 7 en ejecución). */
export const projectCounts = { terminados: 44, enEjecucion: 7, total: 51 };

/**
 * Cifra comercial para titulares y hero: el cliente prefiere el redondeo
 * "+50" al conteo exacto. El desglose real (44 + 7 = 51) vive en
 * `projectCounts` y es el que usa /proyectos, donde sí se listan las fichas.
 * Si algún día se decide mostrar el número exacto, se cambia aquí y punto.
 */
export const projectsHeadline = { value: 50, prefix: "+" } as const;

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

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  isYear?: boolean;
};

/** Banda "HK en cifras". Todas las métricas salen de las constantes de arriba. */
export const stats: Stat[] = [
  { value: yearsOfExperience, label: "Años de trayectoria" },
  {
    value: projectsHeadline.value,
    prefix: projectsHeadline.prefix,
    label: "Proyectos desarrollados",
  },
  { value: sectors.length, label: "Sectores atendidos" },
  { value: regionsCovered, label: "Regiones del Perú" },
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
    desc: `Más de ${projectsHeadline.value} proyectos ejecutados en todo el Perú.`,
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
];

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

export type ProjectStatus = "Terminado" | "En ejecución";

export type Project = {
  /** Código de obra del brochure (se muestra como #code). */
  code: string;
  /** Identificador único para rutas y keys (slug = code salvo duplicados). */
  slug: string;
  title: string;
  entity: string;
  postor?: string;
  type: string;
  sector: string;
  /** Fecha del contrato (dd/mm/aaaa) o "—" si no consta en el brochure. */
  date: string;
  /** Monto del contrato o "—" si no consta. */
  amount: string;
  status: ProjectStatus;
  /** Imagen de portada (ficha o destacado). */
  image?: string;
  /** Galería de la obra (solo proyectos destacados). */
  gallery?: string[];
  /** Marcado como proyecto destacado del brochure. */
  featured?: boolean;
};

const IMG = "/images/proyectos";

/**
 * Portafolio completo: 51 proyectos (44 terminados + 7 en ejecución).
 * Las 22 fichas y los 7 destacados conservan su metadata y su(s) imagen(es)
 * del brochure; los proyectos de listado conservan el dato disponible.
 * Nota: el estado de los proyectos de listado sin ficha se infiere para
 * respetar el conteo oficial 44/7 del brochure.
 */
export const projects: Project[] = [
  { code: "114", slug: "114", title: "Estudio de Preinversión (prefactibilidad): Infraestructura de la Sede del Distrito Judicial de Ucayali", entity: "Poder Judicial", type: "Preinversión", sector: "Administrativos", date: "—", amount: "—", status: "En ejecución" },
  { code: "119", slug: "119", title: "Supervisión de Obra: Comisaría PNP Sicuani – Canchis, Cusco", entity: "Ministerio del Interior", type: "Supervisión", sector: "Seguridad", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-119.webp` },
  { code: "120", slug: "120", title: "Expediente Técnico: Compañía de Bomberos N.º 49 de Cañete", entity: "Cuerpo General de Bomberos Voluntarios del Perú", type: "Expediente Técnico", sector: "Seguridad", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-120.webp` },
  { code: "124", slug: "124", title: "Expediente Técnico: Jefatura de Identificación y Jefatura de Balanzas", entity: "Estado peruano", type: "Expediente Técnico", sector: "Administrativos", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-124.webp` },
  { code: "133", slug: "133", title: "Mejoramiento de la Capacidad Resolutiva del Centro de Salud Pampas a Hospital", entity: "Gobierno Regional", type: "Expediente Técnico", sector: "Salud", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-133.webp` },
  { code: "139", slug: "139", title: "Ampliación y Equipamiento de la Comisaría PNP Manchay – Pachacámac, Lima", entity: "Ministerio del Interior", type: "Expediente Técnico", sector: "Seguridad", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-139.webp` },
  { code: "140", slug: "140", title: "Factibilidad: Ampliación y Remodelación del Establecimiento Penitenciario de Tacna", entity: "INPE", type: "Preinversión", sector: "Penitenciarios", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-140.webp` },
  { code: "141", slug: "141", title: "Supervisión del Hospital Sicuani – Red Cusco", entity: "Gobierno Regional del Cusco", postor: "Consorcio CLAS Hidroenergía HK", type: "Supervisión", sector: "Salud", date: "05/09/2008", amount: "S/ 803,387.09", status: "Terminado", image: `${IMG}/proy-141.webp` },
  { code: "142", slug: "142", title: "Expediente Técnico: Construcción del Establecimiento Penitenciario de Tarapoto", entity: "INPE", type: "Expediente Técnico", sector: "Penitenciarios", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-142.webp` },
  { code: "143", slug: "143", title: "Supervisión: Nuevo Cuartel CBP Robespierre Colonna García N.º 31, Paita", entity: "Cuerpo General de Bomberos Voluntarios del Perú", type: "Supervisión", sector: "Seguridad", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-143.webp` },
  { code: "145", slug: "145", title: "Evaluación del Estudio de Factibilidad: Mejoramiento de la Av. Néstor Gambetta, Callao", entity: "Gobierno Regional del Callao", type: "Preinversión", sector: "Vial", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-145.webp` },
  { code: "148", slug: "148", title: "Expediente Técnico: Infraestructura de la Sede del Distrito Judicial de Amazonas", entity: "Poder Judicial", type: "Expediente Técnico", sector: "Administrativos", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-148.webp` },
  { code: "149", slug: "149", title: "Diagnóstico para el Plan de Acondicionamiento Territorial y PDU de la Provincia de Arequipa", entity: "Municipalidad Provincial de Arequipa", type: "Planes territoriales", sector: "Urbanas", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-149.webp` },
  { code: "150", slug: "150", title: "Perfil: Puentes Chamaya, Nueva Unida, Olaechea, Numpatken, Uchichiangos y Yahuahua, y accesos", entity: "Estado peruano", type: "Preinversión", sector: "Vial", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-150.webp` },
  { code: "153", slug: "153", title: "Estudio Definitivo y Expediente Técnico: Centro de Servicios de SEDAPAL en Surquillo", entity: "SEDAPAL", type: "Expediente Técnico", sector: "Saneamiento", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-153.webp` },
  { code: "159", slug: "159", title: "Expediente Técnico: Sede Principal del Ministerio Público – SJ Tacna (NCPP)", entity: "Ministerio Público", type: "Expediente Técnico", sector: "Administrativos", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-159.webp` },
  { code: "161", slug: "161", title: "Expediente Técnico: Refacción y Acondicionamiento del Puesto de Control Tomasiri, Tacna", entity: "Estado peruano", type: "Expediente Técnico", sector: "Seguridad", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-161.webp` },
  { code: "162", slug: "162", title: "Expediente Técnico: Sede de la Oficina Zonal de Cajamarca", entity: "Estado peruano", type: "Expediente Técnico", sector: "Administrativos", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-162.webp` },
  { code: "166", slug: "166", title: "Supervisión: Seguridad Peatonal COSAC I – Protransporte", entity: "Protransporte – Municipalidad de Lima", type: "Supervisión", sector: "Vial", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-166.webp` },
  { code: "174", slug: "174", title: "Estudio de Factibilidad: Hospital Guillermo Díaz de la Vega, Abancay – Apurímac", entity: "Gobierno Regional de Apurímac", postor: "Consorcio Pro Salud Abancay", type: "Preinversión", sector: "Salud", date: "16/01/2012", amount: "S/ 804,121.30", status: "Terminado", image: `${IMG}/image26.webp` },
  { code: "175", slug: "175", title: "Actualización del Estudio de Factibilidad del Terminal Portuario de Pucallpa", entity: "Autoridad Portuaria Nacional", postor: "Consorcio Terminal Portuario Pucallpa", type: "Preinversión", sector: "Portuario", date: "01/03/2012", amount: "S/ 2,217,966.62", status: "Terminado", image: `${IMG}/image27.webp` },
  { code: "177", slug: "177", title: "Estudio de Factibilidad: Nuevo Hospital de Iquitos – César Garayar García, Maynas", entity: "Gobierno Regional de Loreto", postor: "Consorcio Hospitalario Maynas", type: "Preinversión", sector: "Salud", date: "28/09/2012", amount: "S/ 1,018,875.00", status: "Terminado", image: `${IMG}/image28.webp` },
  { code: "180", slug: "180", title: "Expediente Técnico: Instituto Regional de Enfermedades Neoplásicas – Macro Región Centro", entity: "Gobierno Regional de Junín", postor: "Consorcio Hospital Oncológico", type: "Expediente Técnico", sector: "Salud", date: "01/03/2013", amount: "S/ 2,379,531.00", status: "Terminado", image: `${IMG}/image29.webp` },
  { code: "185", slug: "185", title: "Supervisión de Expediente, Ejecución y Equipamiento: Hospital de Apoyo Macusani – Puno", entity: "Gobierno Regional Puno", postor: "Consorcio Supervisor SMPM", type: "Supervisión", sector: "Salud", date: "30/12/2014", amount: "S/ 3,900,000.00", status: "Terminado", image: `${IMG}/image30.webp` },
  { code: "189", slug: "189", title: "Estudio de Factibilidad: Hospital San José Callao – DIRESA Callao", entity: "Gobierno Regional del Callao", postor: "IDC–HK–AES", type: "Preinversión", sector: "Salud", date: "18/09/2015", amount: "S/ 781,150.84", status: "Terminado", image: `${IMG}/image31.webp` },
  { code: "194", slug: "194", title: "Perfil y Factibilidad: Hospital III Juliaca – San Román, Puno", entity: "EsSalud", postor: "Consorcio Hospital Juliaca", type: "Preinversión", sector: "Salud", date: "19/01/2016", amount: "S/ 779,400.00", status: "Terminado", image: `${IMG}/image32.webp` },
  { code: "196", slug: "196", title: "Perfil: Terminales Portuarios de Pasajeros del Río Ucayali (Atalaya–Pucallpa)", entity: "Autoridad Portuaria Nacional", postor: "Consorcio Infra Portuario", type: "Preinversión", sector: "Portuario", date: "04/06/2016", amount: "S/ 1,657,500.00", status: "Terminado", image: `${IMG}/image33.webp` },
  { code: "197", slug: "197", title: "Preinversión y Estudios Definitivos: Centro Panamericano de Tabla, Punta Negra – Lima", entity: "Proyecto Especial Juegos Panamericanos 2019", postor: "Consorcio Punta Negra", type: "Preinversión y Expediente", sector: "Deportivos", date: "01/08/2016", amount: "S/ 1,990,672.98", status: "Terminado", image: `${IMG}/image34.webp` },
  { code: "201", slug: "201-secundaria", title: "Supervisión de Obra: I.E. Secundaria N.º 8190 – Carabayllo, Lima", entity: "PRONIED", postor: "Consorcio Supervisor Lima Norte", type: "Supervisión", sector: "Educación", date: "03/07/2017", amount: "S/ 432,887.86", status: "Terminado", image: `${IMG}/image35.webp` },
  { code: "201", slug: "201-primaria", title: "Supervisión de Obra: I.E. Primaria N.º 8190 – Carabayllo, Lima", entity: "PRONIED", postor: "Consorcio Supervisor Lima Norte", type: "Supervisión", sector: "Educación", date: "03/07/2017", amount: "S/ 362,897.99", status: "Terminado", image: `${IMG}/image36.webp` },
  { code: "202", slug: "202", title: "Expediente Técnico: Hospital de Ferreñafe – Lambayeque", entity: "Gobierno Regional de Lambayeque", postor: "Consorcio EHF", type: "Expediente Técnico", sector: "Salud", date: "02/08/2017", amount: "S/ 1,660,761.49", status: "Terminado", image: `${IMG}/image37.webp` },
  { code: "204", slug: "204", title: "Expediente y Equipamiento: Hospital de Apoyo Leoncio Prado – Huamachuco, La Libertad", entity: "PRONIS", postor: "Consorcio Salud Huamachuco", type: "Expediente Técnico", sector: "Salud", date: "13/12/2017", amount: "S/ 1,800,000.00", status: "Terminado", image: `${IMG}/image38.webp` },
  { code: "205", slug: "205", title: "Expediente Técnico: Hospital Provincial de Acobamba – Huancavelica", entity: "Gobierno Regional de Huancavelica", postor: "Consorcio Salud Centro", type: "Expediente Técnico", sector: "Salud", date: "05/12/2017", amount: "S/ 2,110,961.33", status: "Terminado", image: `${IMG}/image39.webp` },
  { code: "206", slug: "206", title: "Factibilidad y Expediente: Servicios Recreativos en la U.P.I.S.–P.E.C.P., Ventanilla – Callao", entity: "Municipalidad de Ventanilla", type: "Preinversión y Expediente", sector: "Públicos", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-206.webp` },
  { code: "210", slug: "210", title: "Perfil: Rehabilitación y Modernización del Terminal Portuario de Iquitos", entity: "Autoridad Portuaria Nacional", postor: "Consorcio Estudio TPI", type: "Preinversión", sector: "Portuario", date: "06/07/2018", amount: "S/ 1,650,000.00", status: "Terminado", image: `${IMG}/image40.webp` },
  { code: "213", slug: "213", title: "Expediente Técnico: Hospital de Apoyo de Pomabamba Antonio Caldas Domínguez – Áncash", entity: "PRONIS", postor: "Consorcio Hospitalario ACD", type: "Expediente Técnico", sector: "Salud", date: "18/10/2018", amount: "S/ 1,657,539.34", status: "Terminado", image: `${IMG}/image41.webp` },
  { code: "214", slug: "214", title: "Perfil y Expediente: Sede Institucional del Ministerio de la Producción, San Isidro – Lima", entity: "Ministerio de la Producción", postor: "Consorcio Estudios GS", type: "Preinversión y Expediente", sector: "Administrativos", date: "13/11/2018", amount: "S/ 544,800.00", status: "Terminado", image: `${IMG}/image42.webp` },
  { code: "218", slug: "218", title: "PAT, PDM y PDU: Tumbes, Lambayeque, La Libertad, Áncash, Lima e Ica (Ítem 2)", entity: "Ministerio de Vivienda, Construcción y Saneamiento", type: "Planes territoriales", sector: "Urbanas", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-218.webp` },
  { code: "221", slug: "221", title: "Perfil: Terminal Portuario de Saramiriza – Datem del Marañón, Loreto", entity: "Autoridad Portuaria Nacional", postor: "Consorcio Estudio TPS", type: "Preinversión", sector: "Portuario", date: "19/03/2019", amount: "S/ 2,244,596.00", status: "Terminado", image: `${IMG}/image43.webp` },
  { code: "225", slug: "225", title: "Estudio Definitivo: Nuevo Laboratorio de Calidad de Agua de SEDAPAL – La Atarjea, El Agustino", entity: "SEDAPAL", postor: "HK", type: "Expediente Técnico", sector: "Saneamiento", date: "12/08/2019", amount: "S/ 850,473.14", status: "Terminado", image: `${IMG}/image44.webp` },
  { code: "227", slug: "227", title: "Expediente Técnico: Establecimiento de Salud Monsefú – Lambayeque", entity: "Gobierno Regional de Lambayeque", postor: "Consorcio ESM", type: "Expediente Técnico", sector: "Salud", date: "20/12/2019", amount: "S/ 1,668,393.26", status: "Terminado", image: `${IMG}/image45.webp` },
  { code: "228", slug: "228", title: "PAT, PDM y PDU: Lambayeque y La Libertad (Reconstrucción con Cambios, Ítem 3)", entity: "Autoridad para la Reconstrucción con Cambios", type: "Planes territoriales", sector: "Urbanas", date: "—", amount: "—", status: "Terminado" },
  { code: "229", slug: "229", title: "Perfil: Nuevo Terminal Portuario de Chimbote – Áncash", entity: "Autoridad Portuaria Nacional", postor: "Consorcio TPA", type: "Preinversión", sector: "Portuario", date: "07/02/2020", amount: "S/ 1,891,283.00", status: "Terminado", image: `${IMG}/image46.webp` },
  { code: "276", slug: "276", title: "Expediente Técnico: Servicios Culturales del Patrimonio Histórico – DDC Cusco", entity: "Ministerio de Cultura", type: "Expediente Técnico", sector: "Públicos", date: "—", amount: "—", status: "Terminado", image: `${IMG}/proy-276.webp` },
  {
    code: "220", slug: "220", featured: true,
    title: "Supervisión: Hospital de Apoyo de Huanta Daniel Alcides Carrión – Ayacucho",
    entity: "Gobierno Regional de Ayacucho", postor: "Consorcio Supervisor Castilla",
    type: "Supervisión", sector: "Salud", date: "12/02/2019", amount: "S/ 6,403,212.06", status: "En ejecución",
    image: `${IMG}/image47.webp`, gallery: [`${IMG}/image48.webp`, `${IMG}/image49.webp`, `${IMG}/image50.webp`, `${IMG}/image51.webp`],
  },
  {
    code: "275", slug: "275", featured: true,
    title: "Expediente Técnico: Habitabilidad Institucional y Viviendas – Fuerte Gral. Rafael Hoyos Rubio",
    entity: "Servicio de Ingeniería del Ejército", postor: "HK",
    type: "Expediente Técnico", sector: "Seguridad", date: "15/10/2025", amount: "S/ 180,000.00", status: "Terminado",
    image: `${IMG}/image53.webp`, gallery: [`${IMG}/image55.webp`, `${IMG}/image54.webp`, `${IMG}/image56.webp`, `${IMG}/image52.webp`],
  },
  {
    code: "279", slug: "279", featured: true,
    title: "Supervisión: Sede de la Superintendencia del Mercado de Valores (SMV), Miraflores",
    entity: "PROINVERSIÓN", postor: "Consorcio Supervisor SMV",
    type: "Supervisión", sector: "Administrativos", date: "01/05/2026", amount: "S/ 3,516,000.00", status: "En ejecución",
    image: `${IMG}/image57.webp`, gallery: [`${IMG}/image60.webp`, `${IMG}/image59.webp`, `${IMG}/image61.webp`],
  },
  {
    code: "280", slug: "280", featured: true,
    title: "Control de Calidad y SSOMA: Nuevo edificio Jr. Lampa y Jr. Huallaga (Bicameralidad)",
    entity: "Unidad Ejecutora — Bicameralidad del Poder Legislativo", postor: "Consorcio Supervisor Horizonte",
    type: "Supervisión", sector: "Administrativos", date: "26/01/2026", amount: "S/ 2,955,953.14", status: "En ejecución",
    image: `${IMG}/image62.webp`, gallery: [`${IMG}/image64.webp`, `${IMG}/image66b.webp`, `${IMG}/image63.webp`],
  },
  {
    code: "281", slug: "281", featured: true,
    title: "Supervisión: Hospital Provincial de Virú – La Libertad",
    entity: "Gobierno Regional de La Libertad", postor: "Consorcio SHV",
    type: "Supervisión", sector: "Salud", date: "19/02/2026", amount: "S/ 4,957,967.45", status: "En ejecución",
    image: `${IMG}/image65.webp`, gallery: [`${IMG}/image66.webp`, `${IMG}/image67.webp`, `${IMG}/image68.webp`, `${IMG}/image69.webp`],
  },
  {
    code: "284", slug: "284", featured: true,
    title: "Control de Calidad y SSOMA: Palacio Legislativo (Bicameralidad)",
    entity: "Unidad Ejecutora — Bicameralidad del Poder Legislativo", postor: "Consorcio Supervisor Legislativo",
    type: "Supervisión", sector: "Administrativos", date: "26/02/2026", amount: "S/ 1,500,000.00", status: "En ejecución",
    image: `${IMG}/image70.webp`, gallery: [`${IMG}/image74.webp`, `${IMG}/image71.webp`, `${IMG}/image72.webp`, `${IMG}/image73.webp`],
  },
  {
    code: "285", slug: "285", featured: true,
    title: "Supervisión: Educación Primaria, Secundaria y EBA – I.E. Ciencias, Cusco",
    entity: "Gobierno Regional del Cusco", postor: "Consorcio Imperial",
    type: "Supervisión", sector: "Educación", date: "29/04/2026", amount: "S/ 19,846,380.79", status: "En ejecución",
    image: `${IMG}/image75.webp`, gallery: [`${IMG}/image77.webp`, `${IMG}/image76.webp`, `${IMG}/image78.webp`],
  },
];

/** Proyectos destacados (con galería) para las páginas de proyectos. */
export const featuredProjects: Project[] = projects.filter((p) => p.featured);

/* ------------------------------------------------------------------
   INVERSIÓN SUPERVISADA — se calcula en build time sobre `projects`.
   ------------------------------------------------------------------ */

/**
 * Suma de los contratos que traen monto. Solo 29 de los 51 proyectos lo
 * consignan; los otros 22 tienen "—" porque el brochure no lo registra.
 * Por eso el copy debe decir siempre "en los proyectos con monto
 * registrado": la cifra es un piso verificable, no el total de la
 * trayectoria de la empresa.
 */
export const supervisedInvestment = (() => {
  const withAmount = projects.filter((p) => p.amount.startsWith("S/"));
  const total = withAmount.reduce(
    (sum, p) => sum + Number(p.amount.replace(/[^0-9.]/g, "")),
    0
  );
  return {
    total,
    /** Cuántos contratos entran en la suma. */
    contracts: withAmount.length,
    /** Redondeado a millones hacia abajo, para poder decir "más de". */
    millions: Math.floor(total / 1_000_000),
  };
})();

/* ------------------------------------------------------------------
   PRUEBA SOCIAL — entidades contratantes.
   ------------------------------------------------------------------ */

export type TrustedEntity = {
  /** Nombre exacto tal como consta en `projects`. */
  entity: string;
  /** Nombre corto para el sello: el oficial no cabe en una línea. */
  short: string;
  /** Proyectos de esa entidad en el portafolio (se cuenta, no se escribe). */
  count: number;
  /** Ruta al logotipo, cuando el cliente entregue los archivos. */
  logo?: string;
};

/**
 * Las ocho entidades de la franja, en orden de reconocimiento público.
 * El orden es una decisión editorial —no un ranking— porque doce entidades
 * empatan a dos proyectos y ordenarlas alfabéticamente dejaría fuera a las
 * más reconocibles. Lo que sí sale del dato es la lista de candidatas y el
 * conteo: los nombres se validan contra `projects` más abajo.
 * Se excluyen "Estado peruano" y "Gobierno Regional" por genéricos.
 */
const TRUSTED_ENTITY_LABELS: Array<[entity: string, short: string]> = [
  ["Autoridad Portuaria Nacional", "Autoridad Portuaria Nacional"],
  ["Poder Judicial", "Poder Judicial"],
  ["Ministerio del Interior", "Ministerio del Interior"],
  ["SEDAPAL", "SEDAPAL"],
  ["INPE", "INPE"],
  ["PRONIED", "PRONIED"],
  ["Gobierno Regional del Cusco", "Gob. Regional del Cusco"],
  ["Cuerpo General de Bomberos Voluntarios del Perú", "Cuerpo General de Bomberos"],
];

export const trustedEntities: TrustedEntity[] = TRUSTED_ENTITY_LABELS.map(
  ([entity, short]) => {
    const count = projects.filter((p) => p.entity === entity).length;
    if (count === 0) {
      // Si alguien renombra una entidad en `projects`, la franja mostraría
      // "0 proyectos" en silencio. Mejor romper el build.
      throw new Error(
        `trustedEntities: "${entity}" no aparece en projects. Revisa el nombre.`
      );
    }
    return { entity, short, count };
  }
);

/**
 * Tres proyectos para la sección "Proyectos" de la home. Son tres y no seis
 * porque la home se recortó a siete secciones; la lista completa está en
 * /proyectos. Se eligen obras en ejecución con foto propia, y se evitan las
 * dos que ya salen en el hero (220 Huanta y 285 Cusco) para no repetir foto.
 */
const HOME_HIGHLIGHT_SLUGS = ["284", "279", "281"];
export const homeHighlights: Project[] = HOME_HIGHLIGHT_SLUGS.map(
  (slug) => projects.find((p) => p.slug === slug)!
).filter(Boolean);

/** Imágenes curadas para la sección "Galería de obras" de la home. */
export type GalleryItem = { src: string; caption: string; sector: string };

export const galleryShowcase: GalleryItem[] = [
  { src: `${IMG}/image20.webp`, caption: "Equipo de supervisión de HK Consulting en campo", sector: "Equipo" },
  { src: `${IMG}/image74.webp`, caption: "Restauración del Congreso de la República", sector: "Administrativos" },
  { src: `${IMG}/image6.webp`, caption: "Patrimonio histórico restaurado, Cusco", sector: "Públicos" },
  { src: `${IMG}/image34.webp`, caption: "Centro Panamericano de Tabla, Punta Negra", sector: "Deportivos" },
  { src: `${IMG}/image38.webp`, caption: "Hospital de Apoyo Leoncio Prado, Huamachuco", sector: "Salud" },
  { src: `${IMG}/image41.webp`, caption: "Hospital de Pomabamba, Áncash", sector: "Salud" },
  { src: `${IMG}/image44.webp`, caption: "Laboratorio de Calidad de Agua, SEDAPAL", sector: "Saneamiento" },
  { src: `${IMG}/image45.webp`, caption: "Establecimiento de Salud de Monsefú", sector: "Salud" },
  { src: `${IMG}/image47.webp`, caption: "Hospital de Huanta en ejecución, Ayacucho", sector: "Salud" },
  { src: `${IMG}/image55.webp`, caption: "Habitabilidad — Fuerte Rafael Hoyos Rubio", sector: "Seguridad" },
  { src: `${IMG}/image77.webp`, caption: "Patrimonio cultural restaurado, Cusco", sector: "Públicos" },
  { src: `${IMG}/image23.webp`, caption: "Estudios de campo y mecánica de suelos", sector: "Preinversión" },
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
    image: "/certs/iso-9001.webp",
  },
  {
    name: "ISO 14001",
    standard: "14001:2015",
    scope: "Sistema de Gestión Ambiental",
    code: "ICO-SSGA-092025-7083-PE",
    image: "/certs/iso-14001.webp",
  },
  {
    name: "ISO 45001",
    standard: "45001:2018",
    scope: "Seguridad y Salud en el Trabajo",
    code: "ICO-SSGSST-092025-3227-PE",
    image: "/certs/iso-45001.webp",
  },
  {
    name: "ISO 37001",
    standard: "37001:2016",
    scope: "Sistema de Gestión Antisoborno",
    code: "ICO-SSGAS-092025-1771-PE",
    image: "/certs/iso-37001.webp",
  },
  {
    name: "BPL",
    standard: "Buenas Prácticas Laborales",
    scope: "Certificación de Buenas Prácticas Laborales",
    code: "CEA-BPL-02001",
    image: "/certs/bpl.webp",
  },
];

/**
 * Navegación principal. "Sectores" deja de ser una entrada propia: vive
 * dentro de /nosotros junto con propósito, metodología y razones.
 */
export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/#contacto" },
] as const;
