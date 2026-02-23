'use client';

import { useState } from 'react';
import { SECTIONS, SectionKey } from '@/constants/data';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Portada from '@/components/sections/Portada';
import Nosotros from '@/components/sections/Nosotros';
import Reconocimientos from '@/components/sections/Reconocimientos';
import Contexto from '@/components/sections/Contexto';
import Propuesta from '@/components/sections/Propuesta';
import Innovacion from '@/components/sections/Innovacion';
import Microbiome from '@/components/sections/Microbiome';
import Beneficios from '@/components/sections/Beneficios';
import Colaboracion from '@/components/sections/Colaboracion';
import Contacto from '@/components/sections/Contacto';

const SECTION_COMPONENTS: Record<SectionKey, React.ComponentType> = {
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
};

export default function DossierBolivia() {
  const [activeSection, setActiveSection] = useState<SectionKey>('portada');

  const ActiveSection = SECTION_COMPONENTS[activeSection] ?? Portada;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F5F4FC',
        fontFamily: '"Trebuchet MS", sans-serif',
      }}
    >
      <Nav activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        <ActiveSection />
      </main>
      <Footer />
    </div>
  );
}
