'use client';

import { lazy, Suspense, useState } from 'react';
import { SECTIONS } from '@/constants/data';
import type { SectionKey } from '@/types';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// ─── Lazy-loaded sections ─────────────────────────────────────────────────────
const Portada = lazy(() => import('./sections/Portada'));
const Nosotros = lazy(() => import('./sections/Nosotros'));
const Reconocimientos = lazy(() => import('./sections/Reconocimientos'));
const Contexto = lazy(() => import('./sections/Contexto'));
const Propuesta = lazy(() => import('./sections/Propuesta'));
const Innovacion = lazy(() => import('./sections/Innovacion'));
const Microbiome = lazy(() => import('./sections/Microbiome'));
const Beneficios = lazy(() => import('./sections/Beneficios'));
const Colaboracion = lazy(() => import('./sections/Colaboracion'));
const Contacto = lazy(() => import('./sections/Contacto'));

const SECTION_COMPONENTS = {
  portada: Portada,
  nosotros: Nosotros,
  reconocimientos: Reconocimientos,
  contexto: Contexto,
  propuesta: Propuesta,
  innovacion: Innovacion,
  microbiome: Microbiome,
  beneficios: Beneficios,
  colaboracion: Colaboracion,
  contacto: Contacto,
} satisfies Record<SectionKey, React.LazyExoticComponent<React.ComponentType>>;

// ─── Loading fallback ─────────────────────────────────────────────────────────
function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-9 h-9 rounded-full border-4 border-brand-purple border-t-brand-orange animate-spin" />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function DossierBolivia() {
  const [activeSection, setActiveSection] = useState<SectionKey>('portada');

  function handleNavigate(key: SectionKey) {
    setActiveSection(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const ActiveSection = SECTION_COMPONENTS[activeSection];

  return (
    <div className="min-h-screen bg-brand-surface">
      <Nav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* key triggers re-mount → fade-in animation on every section change */}
      <main key={activeSection} className="animate-fade-in">
        <Suspense fallback={<SectionFallback />}>
          <ActiveSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
