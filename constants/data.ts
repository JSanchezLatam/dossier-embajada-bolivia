// ─── Brand Colors ────────────────────────────────────────────────────────────
export const COLORS = {
  PURPLE: '#4B4A8A',
  ORANGE: '#E8621A',
  DARK: '#1E1B3A',
} as const;

// ─── Navigation Sections ─────────────────────────────────────────────────────
export const SECTIONS = {
  portada: 'Portada',
  nosotros: 'Quiénes Somos',
  reconocimientos: 'Reconocimientos',
  contexto: 'Contexto Bolivia',
  propuesta: 'Nuestra Propuesta',
  innovacion: 'Innovación',
  microbiome: 'Microbiome Radar',
  beneficios: 'Beneficios',
  colaboracion: 'Colaboración',
  contacto: 'Contacto',
} as const;

export type SectionKey = keyof typeof SECTIONS;

// ─── Portada ─────────────────────────────────────────────────────────────────
export const PORTADA_BADGES = ['Consultoría Experta', 'Innovación en Salud', 'IA Aplicada'] as const;

// ─── Nosotros ─────────────────────────────────────────────────────────────────
export const COMPANY_STATS = [
  { num: '2007', label: 'Año de fundación' },
  { num: '18+', label: 'Años de experiencia' },
  { num: '360°', label: 'Servicios digitales integrales' },
  { num: 'Panamá', label: 'Sede con proyección LATAM' },
] as const;

export const COMPANY_TIMELINE = [
  { year: '2007', title: 'Consultoría' },
  { year: '2013', title: 'Outsourcing' },
  { year: '2016', title: 'Servicios Digitales' },
  { year: '2022', title: 'Soluciones IA' },
  { year: '2023', title: 'Soluciones Médicas 5P' },
  { year: '2026', title: 'Ecosistemas IA' },
] as const;

// ─── Reconocimientos ─────────────────────────────────────────────────────────
export const AWARDS = [
  {
    icon: '🏆',
    title: '3er Lugar Premio Nacional de Innovación',
    body: 'República de Panamá, 2024. Reconocimiento al liderazgo en innovación tecnológica a nivel nacional.',
    accent: COLORS.ORANGE,
  },
  {
    icon: '🪟',
    title: 'Microsoft Startup Founder Hub',
    body: 'Miembros activos del ecosistema de startups de Microsoft, con acceso a infraestructura avanzada en Azure.',
    accent: COLORS.PURPLE,
  },
  {
    icon: '🔷',
    title: 'Microsoft ISV Success',
    body: 'Programa de soluciones de software independiente, validando capacidad para construir soluciones empresariales escalables.',
    accent: COLORS.PURPLE,
  },
  {
    icon: '🏛️',
    title: 'Innovate New! — TU Berlin',
    body: 'Distinción del programa de innovación de la Universidad Técnica de Berlín por capacidad de innovación aplicada.',
    accent: COLORS.ORANGE,
  },
  {
    icon: '🧬',
    title: 'Maestría en Bioinformática',
    body: 'Universidad Europea de Madrid. Combinando ciencias de la vida con tecnología avanzada para soluciones en salud.',
    accent: '#5C5A8E',
  },
  {
    icon: '🤖',
    title: 'Maestría en IA Aplicada a la Salud',
    body: 'Universidad Europea de Madrid — en curso. Formación de vanguardia que impulsa el desarrollo de productos innovadores.',
    accent: '#5C5A8E',
  },
] as const;

// ─── Contexto Bolivia ────────────────────────────────────────────────────────
export const CONTEXTO_CHALLENGES = [
  {
    num: '01',
    title: 'Fragmentación de la Información',
    desc: 'Los expedientes en papel o sistemas aislados impiden una atención coordinada y continua del paciente a lo largo del sistema.',
  },
  {
    num: '02',
    title: 'Acceso Limitado a Historiales',
    desc: 'Los profesionales de salud carecen de acceso inmediato a información crítica en el punto de atención cuando más se necesita.',
  },
  {
    num: '03',
    title: 'Ineficiencia Administrativa',
    desc: 'Procesos manuales generan duplicidad, errores y costos operativos elevados que afectan la calidad de atención.',
  },
  {
    num: '04',
    title: 'Brechas de Interoperabilidad',
    desc: 'Hospitales, clínicas y centros de salud operan con sistemas incompatibles que no se comunican entre sí.',
  },
] as const;

// ─── Propuesta ───────────────────────────────────────────────────────────────
export const PROPUESTA_SERVICES = [
  {
    icon: '🔍',
    title: 'Diagnóstico y Hoja de Ruta',
    desc: 'Evaluación del estado actual de la infraestructura de salud digital y definición de una hoja de ruta priorizada y realista adaptada al contexto boliviano.',
    accent: COLORS.ORANGE,
  },
  {
    icon: '📋',
    title: 'Consultoría Especializada',
    desc: 'Asesoría en estándares internacionales (HL7 FHIR, IHE), arquitecturas de interoperabilidad y mejores prácticas globales aplicables localmente.',
    accent: COLORS.PURPLE,
  },
  {
    icon: '🧠',
    title: 'Transferencia de Conocimiento',
    desc: 'Capacitación a equipos técnicos y directivos bolivianos para que sean autónomos y soberanos en la gestión de sus propios sistemas de salud.',
    accent: COLORS.ORANGE,
  },
  {
    icon: '🔬',
    title: 'Innovación Aplicada',
    desc: 'Aplicación de avances en IA, bioinformática y análisis de datos para enriquecer los sistemas de salud con capacidades predictivas y de soporte a decisiones.',
    accent: COLORS.PURPLE,
  },
] as const;

// ─── Innovación ───────────────────────────────────────────────────────────────
export const INNOVACION_FEATURES = [
  {
    icon: '🧪',
    title: 'Bioinformática Aplicada',
    desc: 'Análisis de datos genómicos y clínicos para identificar patrones de salud y riesgo poblacional.',
    accent: COLORS.ORANGE,
  },
  {
    icon: '🤖',
    title: 'IA en Diagnóstico',
    desc: 'Modelos predictivos entrenados para apoyar diagnósticos más rápidos y precisos.',
    accent: COLORS.PURPLE,
  },
  {
    icon: '📊',
    title: 'Analítica de Salud',
    desc: 'Dashboards y reportes para la gestión eficiente de información médica poblacional.',
    accent: COLORS.ORANGE,
  },
  {
    icon: '🔐',
    title: 'Seguridad de Datos',
    desc: 'Arquitecturas seguras conforme a estándares internacionales para datos sensibles de salud.',
    accent: COLORS.PURPLE,
  },
] as const;

// ─── Microbiome Radar ─────────────────────────────────────────────────────────
export const MICROBIOME_TAGS = ['IA Predictiva', 'Bioinformática', 'Datos Clínicos', 'Salud Personalizada'] as const;

export const MICROBIOME_POINTS = [
  {
    title: 'Evidencia de Capacidad',
    desc: 'Demuestra nuestra habilidad de crear soluciones de salud desde cero, integrando IA, bioinformática y datos clínicos reales.',
    accent: COLORS.ORANGE,
  },
  {
    title: 'Metodología Transferible',
    desc: 'Las metodologías de Microbiome Radar son directamente aplicables a la digitalización y análisis de expedientes médicos en Bolivia.',
    accent: COLORS.ORANGE,
  },
  {
    title: 'Equipo Científico-Técnico',
    desc: 'Maestrías activas en Bioinformática e IA Aplicada a la Salud garantizan un equipo actualizado con los últimos avances del sector.',
    accent: COLORS.ORANGE,
  },
] as const;

// ─── Beneficios ───────────────────────────────────────────────────────────────
export const BENEFICIOS = [
  {
    icon: '👥',
    title: 'Pacientes',
    items: ['Historial médico unificado y accesible', 'Menor tiempo de espera y burocracia', 'Atención más precisa y continua'],
    accent: COLORS.ORANGE,
  },
  {
    icon: '🏥',
    title: 'Sistema de Salud',
    items: ['Reducción de costos operativos', 'Mejor toma de decisiones basada en datos', 'Insumos para políticas públicas de salud'],
    accent: COLORS.PURPLE,
  },
  {
    icon: '👨‍⚕️',
    title: 'Profesionales de Salud',
    items: ['Acceso inmediato a historiales completos', 'Herramientas diagnósticas avanzadas', 'Menos carga administrativa y duplicidad'],
    accent: COLORS.PURPLE,
  },
  {
    icon: '🌎',
    title: 'Bolivia como Nación',
    items: ['Referente regional en salud digital', 'Soberanía sobre datos nacionales de salud', 'Plataforma base para innovación futura'],
    accent: COLORS.ORANGE,
  },
] as const;

// ─── Colaboración ─────────────────────────────────────────────────────────────
export const COLABORACION_STEPS = [
  {
    num: '1',
    title: 'Escuchar',
    desc: 'Comprender la realidad del sistema de salud boliviano, sus fortalezas, limitaciones y prioridades estratégicas.',
    accent: COLORS.ORANGE,
  },
  {
    num: '2',
    title: 'Diagnosticar',
    desc: 'Evaluación técnica colaborativa con equipos locales para identificar oportunidades concretas de mejora.',
    accent: COLORS.PURPLE,
  },
  {
    num: '3',
    title: 'Proponer',
    desc: 'Diseño participativo de una hoja de ruta adaptada al contexto, presupuesto y capacidades de Bolivia.',
    accent: COLORS.ORANGE,
  },
  {
    num: '4',
    title: 'Acompañar',
    desc: 'Apoyo continuo durante la implementación, transfiriendo conocimiento para fortalecer capacidades locales.',
    accent: COLORS.PURPLE,
  },
] as const;

// ─── Contacto ─────────────────────────────────────────────────────────────────
export const CONTACT_INFO = [
  { icon: '🌐', text: 'latamdigital.com  |  @latamdigi' },
  { icon: '📍', text: 'Ciudad de Panamá, Panamá' },
  { icon: '🔗', text: 'Microsoft Startup Founder Hub  &  ISV Success' },
] as const;
