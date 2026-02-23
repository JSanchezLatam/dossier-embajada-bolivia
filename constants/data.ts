import {
  Trophy,
  Building2,
  CheckCircle2,
  Lightbulb,
  Dna,
  BrainCircuit,
  Layers,
  Key,
  Clock,
  Network,
  Map,
  FileText,
  GraduationCap,
  Zap,
  Microscope,
  Brain,
  BarChart3,
  Shield,
  Users,
  Activity,
  UserCheck,
  Globe,
  MessageCircle,
  Search,
  PenLine,
  FlaskConical,
  BookOpen,
  MapPin,
  Link2,
} from 'lucide-react';

import type {
  SectionKey,
  StatItem,
  TimelineItem,
  AwardItem,
  ChallengeItem,
  ServiceItem,
  FeatureItem,
  MicrobiomePoint,
  BenefitItem,
  CollabStep,
  ContactItem,
} from '@/types';

// ─── Navigation ───────────────────────────────────────────────────────────────
export const SECTIONS: Record<SectionKey, string> = {
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
};

// ─── Portada ──────────────────────────────────────────────────────────────────
export const PORTADA_BADGES = [
  'Consultoría Experta',
  'Innovación en Salud',
  'IA Aplicada',
] as const;

// ─── Nosotros ─────────────────────────────────────────────────────────────────
export const COMPANY_STATS: StatItem[] = [
  { num: '2007', label: 'Año de fundación' },
  { num: '18+', label: 'Años de experiencia' },
  { num: '360°', label: 'Servicios digitales integrales' },
  { num: 'Panamá', label: 'Sede con proyección LATAM' },
];

export const COMPANY_TIMELINE: TimelineItem[] = [
  { year: '2007', title: 'Consultoría' },
  { year: '2013', title: 'Outsourcing' },
  { year: '2016', title: 'Servicios Digitales' },
  { year: '2022', title: 'Soluciones IA' },
  { year: '2023', title: 'Soluciones Médicas 5P' },
  { year: '2026', title: 'Ecosistemas IA' },
];

// ─── Reconocimientos ──────────────────────────────────────────────────────────
export const AWARDS: AwardItem[] = [
  {
    Icon: Trophy,
    title: '3er Lugar Premio Nacional de Innovación',
    body: 'República de Panamá, 2024. Reconocimiento al liderazgo en innovación tecnológica a nivel nacional.',
    accent: 'orange',
  },
  {
    Icon: Building2,
    title: 'Microsoft Startup Founder Hub',
    body: 'Miembros activos del ecosistema de startups de Microsoft, con acceso a infraestructura avanzada en Azure.',
    accent: 'purple',
  },
  {
    Icon: CheckCircle2,
    title: 'Microsoft ISV Success',
    body: 'Programa de soluciones de software independiente, validando capacidad para construir soluciones empresariales escalables.',
    accent: 'purple',
  },
  {
    Icon: Lightbulb,
    title: 'Innovate New! — TU Berlin',
    body: 'Distinción del programa de innovación de la Universidad Técnica de Berlín por capacidad de innovación aplicada.',
    accent: 'orange',
  },
  {
    Icon: Dna,
    title: 'Maestría en Bioinformática',
    body: 'Universidad Europea de Madrid. Combinando ciencias de la vida con tecnología avanzada para soluciones en salud.',
    accent: 'purple',
  },
  {
    Icon: BrainCircuit,
    title: 'Maestría en IA Aplicada a la Salud',
    body: 'Universidad Europea de Madrid — en curso. Formación de vanguardia que impulsa el desarrollo de productos innovadores.',
    accent: 'purple',
  },
];

// ─── Contexto Bolivia ─────────────────────────────────────────────────────────
export const CONTEXTO_CHALLENGES: ChallengeItem[] = [
  {
    num: '01',
    Icon: Layers,
    title: 'Fragmentación de la Información',
    desc: 'Los expedientes en papel o sistemas aislados impiden una atención coordinada y continua del paciente a lo largo del sistema.',
  },
  {
    num: '02',
    Icon: Key,
    title: 'Acceso Limitado a Historiales',
    desc: 'Los profesionales de salud carecen de acceso inmediato a información crítica en el punto de atención cuando más se necesita.',
  },
  {
    num: '03',
    Icon: Clock,
    title: 'Ineficiencia Administrativa',
    desc: 'Procesos manuales generan duplicidad, errores y costos operativos elevados que afectan la calidad de atención.',
  },
  {
    num: '04',
    Icon: Network,
    title: 'Brechas de Interoperabilidad',
    desc: 'Hospitales, clínicas y centros de salud operan con sistemas incompatibles que no se comunican entre sí.',
  },
];

// ─── Propuesta ────────────────────────────────────────────────────────────────
export const PROPUESTA_SERVICES: ServiceItem[] = [
  {
    Icon: Map,
    title: 'Diagnóstico y Hoja de Ruta',
    desc: 'Evaluación del estado actual de la infraestructura de salud digital y definición de una hoja de ruta priorizada y realista adaptada al contexto boliviano.',
    accent: 'orange',
  },
  {
    Icon: FileText,
    title: 'Consultoría Especializada',
    desc: 'Asesoría en estándares internacionales (HL7 FHIR, IHE), arquitecturas de interoperabilidad y mejores prácticas globales aplicables localmente.',
    accent: 'purple',
  },
  {
    Icon: GraduationCap,
    title: 'Transferencia de Conocimiento',
    desc: 'Capacitación a equipos técnicos y directivos bolivianos para que sean autónomos y soberanos en la gestión de sus propios sistemas de salud.',
    accent: 'orange',
  },
  {
    Icon: Zap,
    title: 'Innovación Aplicada',
    desc: 'Aplicación de avances en IA, bioinformática y análisis de datos para enriquecer los sistemas de salud con capacidades predictivas y de soporte a decisiones.',
    accent: 'purple',
  },
];

// ─── Innovación ───────────────────────────────────────────────────────────────
export const INNOVACION_FEATURES: FeatureItem[] = [
  {
    Icon: Microscope,
    title: 'Bioinformática Aplicada',
    desc: 'Análisis de datos genómicos y clínicos para identificar patrones de salud y riesgo poblacional.',
    accent: 'orange',
  },
  {
    Icon: Brain,
    title: 'IA en Diagnóstico',
    desc: 'Modelos predictivos entrenados para apoyar diagnósticos más rápidos y precisos.',
    accent: 'purple',
  },
  {
    Icon: BarChart3,
    title: 'Analítica de Salud',
    desc: 'Dashboards y reportes para la gestión eficiente de información médica poblacional.',
    accent: 'orange',
  },
  {
    Icon: Shield,
    title: 'Seguridad de Datos',
    desc: 'Arquitecturas seguras conforme a estándares internacionales para datos sensibles de salud.',
    accent: 'purple',
  },
];

// ─── Microbiome Radar ─────────────────────────────────────────────────────────
export const MICROBIOME_TAGS = [
  'IA Predictiva',
  'Bioinformática',
  'Datos Clínicos',
  'Salud Personalizada',
] as const;

export const MICROBIOME_POINTS: MicrobiomePoint[] = [
  {
    Icon: FlaskConical,
    title: 'Evidencia de Capacidad',
    desc: 'Demuestra nuestra habilidad de crear soluciones de salud desde cero, integrando IA, bioinformática y datos clínicos reales.',
  },
  {
    Icon: BookOpen,
    title: 'Metodología Transferible',
    desc: 'Las metodologías de Microbiome Radar son directamente aplicables a la digitalización y análisis de expedientes médicos en Bolivia.',
  },
  {
    Icon: Users,
    title: 'Equipo Científico-Técnico',
    desc: 'Maestrías activas en Bioinformática e IA Aplicada a la Salud garantizan un equipo actualizado con los últimos avances del sector.',
  },
];

// ─── Beneficios ───────────────────────────────────────────────────────────────
export const BENEFICIOS: BenefitItem[] = [
  {
    Icon: Users,
    title: 'Pacientes',
    items: [
      'Historial médico unificado y accesible',
      'Menor tiempo de espera y burocracia',
      'Atención más precisa y continua',
    ],
    accent: 'orange',
  },
  {
    Icon: Activity,
    title: 'Sistema de Salud',
    items: [
      'Reducción de costos operativos',
      'Mejor toma de decisiones basada en datos',
      'Insumos para políticas públicas de salud',
    ],
    accent: 'purple',
  },
  {
    Icon: UserCheck,
    title: 'Profesionales de Salud',
    items: [
      'Acceso inmediato a historiales completos',
      'Herramientas diagnósticas avanzadas',
      'Menos carga administrativa y duplicidad',
    ],
    accent: 'purple',
  },
  {
    Icon: Globe,
    title: 'Bolivia como Nación',
    items: [
      'Referente regional en salud digital',
      'Soberanía sobre datos nacionales de salud',
      'Plataforma base para innovación futura',
    ],
    accent: 'orange',
  },
];

// ─── Colaboración ─────────────────────────────────────────────────────────────
export const COLABORACION_STEPS: CollabStep[] = [
  {
    num: '1',
    Icon: MessageCircle,
    title: 'Escuchar',
    desc: 'Comprender la realidad del sistema de salud boliviano, sus fortalezas, limitaciones y prioridades estratégicas.',
    accent: 'orange',
  },
  {
    num: '2',
    Icon: Search,
    title: 'Diagnosticar',
    desc: 'Evaluación técnica colaborativa con equipos locales para identificar oportunidades concretas de mejora.',
    accent: 'purple',
  },
  {
    num: '3',
    Icon: PenLine,
    title: 'Proponer',
    desc: 'Diseño participativo de una hoja de ruta adaptada al contexto, presupuesto y capacidades de Bolivia.',
    accent: 'orange',
  },
  {
    num: '4',
    Icon: Users,
    title: 'Acompañar',
    desc: 'Apoyo continuo durante la implementación, transfiriendo conocimiento para fortalecer capacidades locales.',
    accent: 'purple',
  },
];

// ─── Contacto ─────────────────────────────────────────────────────────────────
export const CONTACT_INFO: ContactItem[] = [
  { Icon: Globe, text: 'latamdigital.com  |  @latamdigi' },
  { Icon: MapPin, text: 'Ciudad de Panamá, Panamá' },
  { Icon: Link2, text: 'Microsoft Startup Founder Hub  &  ISV Success' },
];
