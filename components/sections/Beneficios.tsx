import { COLORS, BENEFICIOS } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';

export default function Beneficios() {
  return (
    <div style={{ padding: '56px 48px', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHeader
        title="Valor para Bolivia"
        subtitle="Impacto real en el sistema de salud nacional"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {BENEFICIOS.map((b) => (
          <div
            key={b.title}
            style={{
              background: '#F5F4FC',
              border: '1px solid #E0E0F0',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: b.accent,
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span style={{ fontSize: 22 }}>{b.icon}</span>
              <h4
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: '"Trebuchet MS", sans-serif',
                  margin: 0,
                }}
              >
                {b.title}
              </h4>
            </div>
            <div style={{ padding: '20px 24px' }}>
              {b.items.map((item) => (
                <p
                  key={item}
                  style={{
                    color: COLORS.DARK,
                    fontSize: 13,
                    fontFamily: '"Trebuchet MS", sans-serif',
                    marginBottom: 8,
                    display: 'flex',
                    gap: 8,
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: b.accent, flexShrink: 0 }}>◆</span> {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
