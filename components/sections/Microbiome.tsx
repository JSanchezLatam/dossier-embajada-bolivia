import { COLORS, MICROBIOME_TAGS, MICROBIOME_POINTS } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';

export default function Microbiome() {
  return (
    <div style={{ padding: '56px 48px', background: COLORS.DARK, minHeight: '80vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 36,
          }}
        >
          <SectionHeader
            title="Microbiome Radar"
            subtitle="Innovación pionera en salud de precisión"
            light
          />
          <span
            style={{
              background: COLORS.ORANGE,
              color: '#fff',
              padding: '6px 16px',
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 700,
              fontFamily: '"Trebuchet MS", sans-serif',
              flexShrink: 0,
            }}
          >
            🧬 INNOVACIÓN
          </span>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24, marginBottom: 24 }}
        >
          <div
            style={{
              background: 'rgba(42,38,96,0.7)',
              border: `1px solid ${COLORS.PURPLE}`,
              borderRadius: 12,
              padding: 28,
            }}
          >
            <p
              style={{
                color: '#D0CEEE',
                fontSize: 14,
                lineHeight: 1.75,
                fontFamily: '"Trebuchet MS", sans-serif',
                margin: 0,
              }}
            >
              <strong style={{ color: '#fff' }}>Microbiome Radar</strong> es un producto pionero
              sin precedentes en el mercado, en desarrollo como proyecto final de maestría, que
              combina análisis del microbioma intestinal con inteligencia artificial para ofrecer
              insights predictivos de salud personalizada.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {MICROBIOME_TAGS.map((f) => (
              <div
                key={f}
                style={{
                  background: 'rgba(75,74,138,0.4)',
                  border: `1px solid ${COLORS.PURPLE}`,
                  borderRadius: 8,
                  padding: '10px 16px',
                }}
              >
                <span
                  style={{ color: '#fff', fontSize: 12, fontFamily: '"Trebuchet MS", sans-serif' }}
                >
                  ◆&nbsp;&nbsp;{f}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {MICROBIOME_POINTS.map((p) => (
            <div
              key={p.title}
              style={{
                background: 'rgba(20,18,64,0.8)',
                border: `1px solid ${p.accent}`,
                borderRadius: 12,
                padding: 24,
                borderTop: `4px solid ${p.accent}`,
              }}
            >
              <h4
                style={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: '"Trebuchet MS", sans-serif',
                  marginBottom: 12,
                }}
              >
                {p.title}
              </h4>
              <p
                style={{
                  color: '#AAAACC',
                  fontSize: 12,
                  fontFamily: '"Trebuchet MS", sans-serif',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
