import { COLORS, INNOVACION_FEATURES } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';

export default function Innovacion() {
  return (
    <div style={{ padding: '56px 48px', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHeader
        title="Innovación Aplicada en Salud"
        subtitle="Construyendo el futuro de la medicina digital"
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        {/* DeLeon 1.0 */}
        <div
          style={{
            background: COLORS.DARK,
            borderRadius: 12,
            padding: 32,
            borderTop: `4px solid ${COLORS.ORANGE}`,
          }}
        >
          <p style={{ fontSize: 28, marginBottom: 12 }}>🔬</p>
          <h3
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 700,
              fontFamily: '"Trebuchet MS", sans-serif',
              marginBottom: 6,
            }}
          >
            DeLeon 1.0
          </h3>
          <p
            style={{
              color: COLORS.ORANGE,
              fontSize: 12,
              fontFamily: '"Trebuchet MS", sans-serif',
              marginBottom: 16,
            }}
          >
            Plataforma de Análisis Clínico
          </p>
          <div style={{ width: 50, height: 2, background: COLORS.PURPLE, marginBottom: 16 }} />
          <p
            style={{
              color: '#CCCCEE',
              fontSize: 13,
              lineHeight: 1.7,
              fontFamily: '"Trebuchet MS", sans-serif',
              marginBottom: 14,
            }}
          >
            DeLeon 1.0 es nuestra plataforma de innovación en procesos clínicos que integra
            análisis de datos biomédicos con inteligencia artificial para apoyar la toma de
            decisiones clínicas y administrativas.
          </p>
          <p
            style={{
              color: '#AAAACC',
              fontSize: 12.5,
              lineHeight: 1.7,
              fontFamily: '"Trebuchet MS", sans-serif',
              margin: 0,
            }}
          >
            Este proyecto es la base sobre la cual desarrollamos nuestras capacidades en salud
            digital, con metodologías propias adaptables al contexto boliviano.
          </p>
        </div>

        {/* Feature list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {INNOVACION_FEATURES.map((a) => (
            <div
              key={a.title}
              style={{
                background: '#F5F4FC',
                border: '1px solid #E0E0F0',
                borderLeft: `5px solid ${a.accent}`,
                borderRadius: 8,
                padding: '14px 18px',
                display: 'flex',
                gap: 14,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0 }}>{a.icon}</span>
              <div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: COLORS.DARK,
                    fontFamily: '"Trebuchet MS", sans-serif',
                    marginBottom: 4,
                  }}
                >
                  {a.title}
                </p>
                <p
                  style={{
                    fontSize: 11.5,
                    color: '#7070AA',
                    fontFamily: '"Trebuchet MS", sans-serif',
                    margin: 0,
                  }}
                >
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
