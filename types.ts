import type { LucideIcon } from 'lucide-react';

// ─── Navigation ───────────────────────────────────────────────────────────────
export type SectionKey =
  | 'portada'
  | 'nosotros'
  | 'reconocimientos'
  | 'contexto'
  | 'propuesta'
  | 'innovacion'
  | 'microbiome'
  | 'beneficios'
  | 'colaboracion'
  | 'contacto';

// ─── Design Tokens ────────────────────────────────────────────────────────────
export type AccentColor = 'orange' | 'purple';
export type LogoSize = 'sm' | 'md' | 'lg';

// ─── Data shapes ──────────────────────────────────────────────────────────────
export interface StatItem {
  num: string;
  label: string;
}

export interface TimelineItem {
  year: string;
  title: string;
}

export interface AwardItem {
  Icon: LucideIcon;
  title: string;
  body: string;
  accent: AccentColor;
}

export interface ChallengeItem {
  num: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ServiceItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
  accent: AccentColor;
}

export interface FeatureItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
  accent: AccentColor;
}

export interface MicrobiomePoint {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

export interface BenefitItem {
  Icon: LucideIcon;
  title: string;
  items: readonly string[];
  accent: AccentColor;
}

export interface CollabStep {
  num: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
  accent: AccentColor;
}

export interface ContactItem {
  Icon: LucideIcon;
  text: string;
}
