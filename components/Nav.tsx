'use client';

import { SECTIONS } from '@/constants/data';
import type { SectionKey } from '@/types';
import Logo from './Logo';

interface NavProps {
  activeSection: SectionKey;
  onNavigate: (key: SectionKey) => void;
}

export default function Nav({ activeSection, onNavigate }: NavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-brand-dark shadow-xl border-b-4 border-brand-orange">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <Logo size="sm" />

          {/* Nav buttons — scrollable on mobile */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-0.5 shrink">
            {(Object.entries(SECTIONS) as [SectionKey, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`
                  whitespace-nowrap px-3 py-1.5 rounded-md text-[11px] font-semibold
                  tracking-wide transition-all duration-150 border shrink-0
                  ${
                    activeSection === key
                      ? 'bg-brand-orange text-white border-brand-orange shadow-md'
                      : 'bg-white/5 text-brand-muted border-transparent hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
