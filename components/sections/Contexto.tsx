import { COLORS, CONTEXTO_CHALLENGES } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';

export default function Contexto() {
  return (
    <div style={{ padding: '56px 48px', background: COLORS.DARK, minHeight: '80vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader
          title="El Desafío en Bolivia"
          subtitle="Una oportunidad histórica de transformación en salud"
          light
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {CONTEXTO_CHALLENGES.map((c) => (
            <div
              key={c.num}
              style={{
                background: 'rgba(42,38,96,0.6)',
                border: `1px solid ${COLORS.PURPLE}`,
                borderRadius: 12,
                display: 'flex',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  background: COLORS.PURPLE,
                  width: 56,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    color: COLORS.ORANGE,
                    fontSize: 18,
                    fontWeight: 700,
                    fontFamily: '"Trebuchet MS", sans-serif',
                  }}
                >
                  {c.num}
                </span>
              </div>
              <div style={{ padding: '20px 20px' }}>
                <h4
                  style={{
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: '"Trebuchet MS", sans-serif',
                    marginBottom: 8,
                  }}
                >
                  {c.title}
                </h4>
                <p
                  style={{
                    color: '#AAAACC',
                    fontSize: 12,
                    fontFamily: '"Trebuchet MS", sans-serif',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
