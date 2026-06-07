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
  { code: "119", slug: "119", title: "Supervisión de Obra: Comisaría PNP Sicuani – Canchis, Cusco", entity: "Ministerio del Interior", type: "Supervisión", sector: "Seguridad", date: "—", amount: "—", status: "Terminado" },
  { code: "120", slug: "120", title: "Expediente Técnico: Compañía de Bomberos N.º 49 de Cañete", entity: "Cuerpo General de Bomberos Voluntarios del Perú", type: "Expediente Técnico", sector: "Seguridad", date: "—", amount: "—", status: "Terminado" },
  { code: "124", slug: "124", title: "Expediente Técnico: Jefatura de Identificación y Jefatura de Balanzas", entity: "Estado peruano", type: "Expediente Técnico", sector: "Administrativos", date: "—", amount: "—", status: "Terminado" },
  { code: "133", slug: "133", title: "Mejoramiento de la Capacidad Resolutiva del Centro de Salud Pampas a Hospital", entity: "Gobierno Regional", type: "Expediente Técnico", sector: "Salud", date: "—", amount: "—", status: "Terminado" },
  { code: "139", slug: "139", title: "Ampliación y Equipamiento de la Comisaría PNP Manchay – Pachacámac, Lima", entity: "Ministerio del Interior", type: "Expediente Técnico", sector: "Seguridad", date: "—", amount: "—", status: "Terminado" },
  { code: "140", slug: "140", title: "Factibilidad: Ampliación y Remodelación del Establecimiento Penitenciario de Tacna", entity: "INPE", type: "Preinversión", sector: "Penitenciarios", date: "—", amount: "—", status: "Terminado" },
  { code: "141", slug: "141", title: "Supervisión del Hospital Sicuani – Red Cusco", entity: "Gobierno Regional del Cusco", postor: "Consorcio CLAS Hidroenergía HK", type: "Supervisión", sector: "Salud", date: "05/09/2008", amount: "S/ 803,387.09", status: "Terminado", image: `${IMG}/image25.jpg` },
  { code: "142", slug: "142", title: "Expediente Técnico: Construcción del Establecimiento Penitenciario de Tarapoto", entity: "INPE", type: "Expediente Técnico", sector: "Penitenciarios", date: "—", amount: "—", status: "Terminado" },
  { code: "143", slug: "143", title: "Supervisión: Nuevo Cuartel CBP Robespierre Colonna García N.º 31, Paita", entity: "Cuerpo General de Bomberos Voluntarios del Perú", type: "Supervisión", sector: "Seguridad", date: "—", amount: "—", status: "Terminado" },
  { code: "145", slug: "145", title: "Evaluación del Estudio de Factibilidad: Mejoramiento de la Av. Néstor Gambetta, Callao", entity: "Gobierno Regional del Callao", type: "Preinversión", sector: "Vial", date: "—", amount: "—", status: "Terminado" },
  { code: "148", slug: "148", title: "Expediente Técnico: Infraestructura de la Sede del Distrito Judicial de Amazonas", entity: "Poder Judicial", type: "Expediente Técnico", sector: "Administrativos", date: "—", amount: "—", status: "Terminado" },
  { code: "149", slug: "149", title: "Diagnóstico para el Plan de Acondicionamiento Territorial y PDU de la Provincia de Arequipa", entity: "Municipalidad Provincial de Arequipa", type: "Planes territoriales", sector: "Urbanas", date: "—", amount: "—", status: "Terminado" },
  { code: "150", slug: "150", title: "Perfil: Puentes Chamaya, Nueva Unida, Olaechea, Numpatken, Uchichiangos y Yahuahua, y accesos", entity: "Estado peruano", type: "Preinversión", sector: "Vial", date: "—", amount: "—", status: "Terminado" },
  { code: "153", slug: "153", title: "Estudio Definitivo y Expediente Técnico: Centro de Servicios de SEDAPAL en Surquillo", entity: "SEDAPAL", type: "Expediente Técnico", sector: "Saneamiento", date: "—", amount: "—", status: "Terminado" },
  { code: "159", slug: "159", title: "Expediente Técnico: Sede Principal del Ministerio Público – SJ Tacna (NCPP)", entity: "Ministerio Público", type: "Expediente Técnico", sector: "Administrativos", date: "—", amount: "—", status: "Terminado" },
  { code: "161", slug: "161", title: "Expediente Técnico: Refacción y Acondicionamiento del Puesto de Control Tomasiri, Tacna", entity: "Estado peruano", type: "Expediente Técnico", sector: "Seguridad", date: "—", amount: "—", status: "Terminado" },
  { code: "162", slug: "162", title: "Expediente Técnico: Sede de la Oficina Zonal de Cajamarca", entity: "Estado peruano", type: "Expediente Técnico", sector: "Administrativos", date: "—", amount: "—", status: "Terminado" },
  { code: "166", slug: "166", title: "Supervisión: Seguridad Peatonal COSAC I – Protransporte", entity: "Protransporte – Municipalidad de Lima", type: "Supervisión", sector: "Vial", date: "—", amount: "—", status: "Terminado" },
  { code: "174", slug: "174", title: "Estudio de Factibilidad: Hospital Guillermo Díaz de la Vega, Abancay – Apurímac", entity: "Gobierno Regional de Apurímac", postor: "Consorcio Pro Salud Abancay", type: "Preinversión", sector: "Salud", date: "16/01/2012", amount: "S/ 804,121.30", status: "Terminado", image: `${IMG}/image26.jpg` },
  { code: "175", slug: "175", title: "Actualización del Estudio de Factibilidad del Terminal Portuario de Pucallpa", entity: "Autoridad Portuaria Nacional", postor: "Consorcio Terminal Portuario Pucallpa", type: "Preinversión", sector: "Portuario", date: "01/03/2012", amount: "S/ 2,217,966.62", status: "Terminado", image: `${IMG}/image27.jpg` },
  { code: "177", slug: "177", title: "Estudio de Factibilidad: Nuevo Hospital de Iquitos – César Garayar García, Maynas", entity: "Gobierno Regional de Loreto", postor: "Consorcio Hospitalario Maynas", type: "Preinversión", sector: "Salud", date: "28/09/2012", amount: "S/ 1,018,875.00", status: "Terminado", image: `${IMG}/image28.jpg` },
  { code: "180", slug: "180", title: "Expediente Técnico: Instituto Regional de Enfermedades Neoplásicas – Macro Región Centro", entity: "Gobierno Regional de Junín", postor: "Consorcio Hospital Oncológico", type: "Expediente Técnico", sector: "Salud", date: "01/03/2013", amount: "S/ 2,379,531.00", status: "Terminado", image: `${IMG}/image29.jpg` },
  { code: "185", slug: "185", title: "Supervisión de Expediente, Ejecución y Equipamiento: Hospital de Apoyo Macusani – Puno", entity: "Gobierno Regional Puno", postor: "Consorcio Supervisor SMPM", type: "Supervisión", sector: "Salud", date: "30/12/2014", amount: "S/ 3,900,000.00", status: "Terminado", image: `${IMG}/image30.jpg` },
  { code: "189", slug: "189", title: "Estudio de Factibilidad: Hospital San José Callao – DIRESA Callao", entity: "Gobierno Regional del Callao", postor: "IDC–HK–AES", type: "Preinversión", sector: "Salud", date: "18/09/2015", amount: "S/ 781,150.84", status: "Terminado", image: `${IMG}/image31.jpg` },
  { code: "194", slug: "194", title: "Perfil y Factibilidad: Hospital III Juliaca – San Román, Puno", entity: "EsSalud", postor: "Consorcio Hospital Juliaca", type: "Preinversión", sector: "Salud", date: "19/01/2016", amount: "S/ 779,400.00", status: "Terminado", image: `${IMG}/image32.jpg` },
  { code: "196", slug: "196", title: "Perfil: Terminales Portuarios de Pasajeros del Río Ucayali (Atalaya–Pucallpa)", entity: "Autoridad Portuaria Nacional", postor: "Consorcio Infra Portuario", type: "Preinversión", sector: "Portuario", date: "04/06/2016", amount: "S/ 1,657,500.00", status: "Terminado", image: `${IMG}/image33.jpg` },
  { code: "197", slug: "197", title: "Preinversión y Estudios Definitivos: Centro Panamericano de Tabla, Punta Negra – Lima", entity: "Proyecto Especial Juegos Panamericanos 2019", postor: "Consorcio Punta Negra", type: "Preinversión y Expediente", sector: "Deportivos", date: "01/08/2016", amount: "S/ 1,990,672.98", status: "Terminado", image: `${IMG}/image34.jpg` },
  { code: "201", slug: "201-secundaria", title: "Supervisión de Obra: I.E. Secundaria N.º 8190 – Carabayllo, Lima", entity: "PRONIED", postor: "Consorcio Supervisor Lima Norte", type: "Supervisión", sector: "Educación", date: "03/07/2017", amount: "S/ 432,887.86", status: "Terminado", image: `${IMG}/image35.jpg` },
  { code: "201", slug: "201-primaria", title: "Supervisión de Obra: I.E. Primaria N.º 8190 – Carabayllo, Lima", entity: "PRONIED", postor: "Consorcio Supervisor Lima Norte", type: "Supervisión", sector: "Educación", date: "03/07/2017", amount: "S/ 362,897.99", status: "Terminado", image: `${IMG}/image36.jpg` },
  { code: "202", slug: "202", title: "Expediente Técnico: Hospital de Ferreñafe – Lambayeque", entity: "Gobierno Regional de Lambayeque", postor: "Consorcio EHF", type: "Expediente Técnico", sector: "Salud", date: "02/08/2017", amount: "S/ 1,660,761.49", status: "Terminado", image: `${IMG}/image37.jpg` },
  { code: "204", slug: "204", title: "Expediente y Equipamiento: Hospital de Apoyo Leoncio Prado – Huamachuco, La Libertad", entity: "PRONIS", postor: "Consorcio Salud Huamachuco", type: "Expediente Técnico", sector: "Salud", date: "13/12/2017", amount: "S/ 1,800,000.00", status: "Terminado", image: `${IMG}/image38.jpg` },
  { code: "205", slug: "205", title: "Expediente Técnico: Hospital Provincial de Acobamba – Huancavelica", entity: "Gobierno Regional de Huancavelica", postor: "Consorcio Salud Centro", type: "Expediente Técnico", sector: "Salud", date: "05/12/2017", amount: "S/ 2,110,961.33", status: "Terminado", image: `${IMG}/image39.jpg` },
  { code: "206", slug: "206", title: "Factibilidad y Expediente: Servicios Recreativos en la U.P.I.S.–P.E.C.P., Ventanilla – Callao", entity: "Municipalidad de Ventanilla", type: "Preinversión y Expediente", sector: "Públicos", date: "—", amount: "—", status: "Terminado" },
  { code: "210", slug: "210", title: "Perfil: Rehabilitación y Modernización del Terminal Portuario de Iquitos", entity: "Autoridad Portuaria Nacional", postor: "Consorcio Estudio TPI", type: "Preinversión", sector: "Portuario", date: "06/07/2018", amount: "S/ 1,650,000.00", status: "Terminado", image: `${IMG}/image40.jpg` },
  { code: "213", slug: "213", title: "Expediente Técnico: Hospital de Apoyo de Pomabamba Antonio Caldas Domínguez – Áncash", entity: "PRONIS", postor: "Consorcio Hospitalario ACD", type: "Expediente Técnico", sector: "Salud", date: "18/10/2018", amount: "S/ 1,657,539.34", status: "Terminado", image: `${IMG}/image41.jpg` },
  { code: "214", slug: "214", title: "Perfil y Expediente: Sede Institucional del Ministerio de la Producción, San Isidro – Lima", entity: "Ministerio de la Producción", postor: "Consorcio Estudios GS", type: "Preinversión y Expediente", sector: "Administrativos", date: "13/11/2018", amount: "S/ 544,800.00", status: "Terminado", image: `${IMG}/image42.jpg` },
  { code: "218", slug: "218", title: "PAT, PDM y PDU: Tumbes, Lambayeque, La Libertad, Áncash, Lima e Ica (Ítem 2)", entity: "Ministerio de Vivienda, Construcción y Saneamiento", type: "Planes territoriales", sector: "Urbanas", date: "—", amount: "—", status: "Terminado" },
  { code: "221", slug: "221", title: "Perfil: Terminal Portuario de Saramiriza – Datem del Marañón, Loreto", entity: "Autoridad Portuaria Nacional", postor: "Consorcio Estudio TPS", type: "Preinversión", sector: "Portuario", date: "19/03/2019", amount: "S/ 2,244,596.00", status: "Terminado", image: `${IMG}/image43.jpg` },
  { code: "225", slug: "225", title: "Estudio Definitivo: Nuevo Laboratorio de Calidad de Agua de SEDAPAL – La Atarjea, El Agustino", entity: "SEDAPAL", postor: "HK", type: "Expediente Técnico", sector: "Saneamiento", date: "12/08/2019", amount: "S/ 850,473.14", status: "Terminado", image: `${IMG}/image44.jpg` },
  { code: "227", slug: "227", title: "Expediente Técnico: Establecimiento de Salud Monsefú – Lambayeque", entity: "Gobierno Regional de Lambayeque", postor: "Consorcio ESM", type: "Expediente Técnico", sector: "Salud", date: "20/12/2019", amount: "S/ 1,668,393.26", status: "Terminado", image: `${IMG}/image45.jpg` },
  { code: "228", slug: "228", title: "PAT, PDM y PDU: Lambayeque y La Libertad (Reconstrucción con Cambios, Ítem 3)", entity: "Autoridad para la Reconstrucción con Cambios", type: "Planes territoriales", sector: "Urbanas", date: "—", amount: "—", status: "Terminado" },
  { code: "229", slug: "229", title: "Perfil: Nuevo Terminal Portuario de Chimbote – Áncash", entity: "Autoridad Portuaria Nacional", postor: "Consorcio TPA", type: "Preinversión", sector: "Portuario", date: "07/02/2020", amount: "S/ 1,891,283.00", status: "Terminado", image: `${IMG}/image46.jpg` },
  { code: "276", slug: "276", title: "Expediente Técnico: Servicios Culturales del Patrimonio Histórico – DDC Cusco", entity: "Ministerio de Cultura", type: "Expediente Técnico", sector: "Públicos", date: "—", amount: "—", status: "Terminado" },
  {
    code: "220", slug: "220", featured: true,
    title: "Supervisión: Hospital de Apoyo de Huanta Daniel Alcides Carrión – Ayacucho",
    entity: "Gobierno Regional de Ayacucho", postor: "Consorcio Supervisor Castilla",
    type: "Supervisión", sector: "Salud", date: "12/02/2019", amount: "S/ 6,403,212.06", status: "En ejecución",
    image: `${IMG}/image47.jpg`, gallery: [`${IMG}/image48.jpg`, `${IMG}/image49.jpg`, `${IMG}/image50.jpg`, `${IMG}/image51.jpg`],
  },
  {
    code: "275", slug: "275", featured: true,
    title: "Expediente Técnico: Habitabilidad Institucional y Viviendas – Fuerte Gral. Rafael Hoyos Rubio",
    entity: "Servicio de Ingeniería del Ejército", postor: "HK",
    type: "Expediente Técnico", sector: "Seguridad", date: "15/10/2025", amount: "S/ 180,000.00", status: "Terminado",
    image: `${IMG}/image53.jpg`, gallery: [`${IMG}/image55.jpg`, `${IMG}/image54.jpg`, `${IMG}/image56.jpg`, `${IMG}/image52.jpg`],
  },
  {
    code: "279", slug: "279", featured: true,
    title: "Supervisión: Sede de la Superintendencia del Mercado de Valores (SMV), Miraflores",
    entity: "PROINVERSIÓN", postor: "Consorcio Supervisor SMV",
    type: "Supervisión", sector: "Administrativos", date: "01/05/2026", amount: "S/ 3,516,000.00", status: "En ejecución",
    image: `${IMG}/image57.jpg`, gallery: [`${IMG}/image60.jpg`, `${IMG}/image59.jpg`, `${IMG}/image61.jpg`],
  },
  {
    code: "280", slug: "280", featured: true,
    title: "Control de Calidad y SSOMA: Nuevo edificio Jr. Lampa y Jr. Huallaga (Bicameralidad)",
    entity: "Unidad Ejecutora — Bicameralidad del Poder Legislativo", postor: "Consorcio Supervisor Horizonte",
    type: "Supervisión", sector: "Administrativos", date: "26/01/2026", amount: "S/ 2,955,953.14", status: "En ejecución",
    image: `${IMG}/image62.jpg`, gallery: [`${IMG}/image64.jpg`, `${IMG}/image66.jpeg`, `${IMG}/image63.jpg`],
  },
  {
    code: "281", slug: "281", featured: true,
    title: "Supervisión: Hospital Provincial de Virú – La Libertad",
    entity: "Gobierno Regional de La Libertad", postor: "Consorcio SHV",
    type: "Supervisión", sector: "Salud", date: "19/02/2026", amount: "S/ 4,957,967.45", status: "En ejecución",
    image: `${IMG}/image65.jpg`, gallery: [`${IMG}/image66.jpg`, `${IMG}/image67.jpg`, `${IMG}/image68.jpg`, `${IMG}/image69.jpg`],
  },
  {
    code: "284", slug: "284", featured: true,
    title: "Control de Calidad y SSOMA: Palacio Legislativo (Bicameralidad)",
    entity: "Unidad Ejecutora — Bicameralidad del Poder Legislativo", postor: "Consorcio Supervisor Legislativo",
    type: "Supervisión", sector: "Administrativos", date: "26/02/2026", amount: "S/ 1,500,000.00", status: "En ejecución",
    image: `${IMG}/image70.jpg`, gallery: [`${IMG}/image74.jpg`, `${IMG}/image71.jpg`, `${IMG}/image72.jpg`, `${IMG}/image73.jpg`],
  },
  {
    code: "285", slug: "285", featured: true,
    title: "Supervisión: Educación Primaria, Secundaria y EBA – I.E. Ciencias, Cusco",
    entity: "Gobierno Regional del Cusco", postor: "Consorcio Imperial",
    type: "Supervisión", sector: "Educación", date: "29/04/2026", amount: "S/ 19,846,380.79", status: "En ejecución",
    image: `${IMG}/image75.jpg`, gallery: [`${IMG}/image77.jpg`, `${IMG}/image76.jpg`, `${IMG}/image78.jpg`],
  },
];

/** Proyectos destacados (con galería) para las páginas de proyectos. */
export const featuredProjects: Project[] = projects.filter((p) => p.featured);

/**
 * Selección de 6 proyectos para la sección "Proyectos" de la home (teaser).
 * La lista completa de los 51 vive en /proyectos. Orden = más impactantes primero.
 */
const HOME_HIGHLIGHT_SLUGS = ["281", "285", "284", "279", "280", "220"];
export const homeHighlights: Project[] = HOME_HIGHLIGHT_SLUGS.map(
  (slug) => projects.find((p) => p.slug === slug)!
).filter(Boolean);

/** Imágenes curadas para la sección "Galería de obras" de la home. */
export type GalleryItem = { src: string; caption: string; sector: string };

export const galleryShowcase: GalleryItem[] = [
  { src: `${IMG}/image20.jpg`, caption: "Equipo de supervisión de HK Consulting en campo", sector: "Equipo" },
  { src: `${IMG}/image74.jpg`, caption: "Restauración del Congreso de la República", sector: "Administrativos" },
  { src: `${IMG}/image6.jpg`, caption: "Patrimonio histórico restaurado, Cusco", sector: "Públicos" },
  { src: `${IMG}/image34.jpg`, caption: "Centro Panamericano de Tabla, Punta Negra", sector: "Deportivos" },
  { src: `${IMG}/image38.jpg`, caption: "Hospital de Apoyo Leoncio Prado, Huamachuco", sector: "Salud" },
  { src: `${IMG}/image41.jpg`, caption: "Hospital de Pomabamba, Áncash", sector: "Salud" },
  { src: `${IMG}/image44.jpg`, caption: "Laboratorio de Calidad de Agua, SEDAPAL", sector: "Saneamiento" },
  { src: `${IMG}/image45.jpg`, caption: "Establecimiento de Salud de Monsefú", sector: "Salud" },
  { src: `${IMG}/image47.jpg`, caption: "Hospital de Huanta en ejecución, Ayacucho", sector: "Salud" },
  { src: `${IMG}/image55.jpg`, caption: "Habitabilidad — Fuerte Rafael Hoyos Rubio", sector: "Seguridad" },
  { src: `${IMG}/image77.jpg`, caption: "Patrimonio cultural restaurado, Cusco", sector: "Públicos" },
  { src: `${IMG}/image23.jpg`, caption: "Estudios de campo y mecánica de suelos", sector: "Preinversión" },
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
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/#contacto" },
] as const;
