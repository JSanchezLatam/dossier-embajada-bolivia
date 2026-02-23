'use client';

import { COLORS, SECTIONS, SectionKey } from '@/constants/data';
import Logo from './Logo';

interface NavProps {
  activeSection: SectionKey;
  onNavigate: (key: SectionKey) => void;
}

export default function Nav({ activeSection, onNavigate }: NavProps) {
  return (
    <nav
      style={{
        background: COLORS.DARK,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 2px 20px rgba(0,0,0,0.4)',
        borderBottom: `3px solid ${COLORS.ORANGE}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
          }}
        >
          <Logo size="sm" />
          <div
            style={{
              display: 'flex',
              gap: 4,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {(Object.entries(SECTIONS) as [SectionKey, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: '"Trebuchet MS", sans-serif',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeSection === key ? COLORS.ORANGE : 'rgba(255,255,255,0.08)',
                  color: activeSection === key ? '#fff' : '#BBBBDD',
                  letterSpacing: 0.3,
                }}
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
