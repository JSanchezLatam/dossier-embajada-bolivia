import { COLORS, COLABORACION_STEPS } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';

export default function Colaboracion() {
  return (
    <div style={{ padding: '56px 48px', background: COLORS.DARK, minHeight: '80vh' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader
          title="Nuestro Enfoque de Colaboración"
          subtitle="Respeto a la autonomía boliviana en cada paso del proceso"
          light
        />

        <div
          style={{
            background: COLORS.PURPLE,
            borderRadius: 12,
            padding: '20px 28px',
            marginBottom: 36,
          }}
        >
          <p
            style={{
              color: '#fff',
              fontSize: 14,
              lineHeight: 1.7,
              fontFamily: '"Trebuchet MS", sans-serif',
              margin: 0,
            }}
          >
            Somos conscientes de que Bolivia posee sus propias complejidades, contexto y
            necesidades. No llegamos con soluciones predefinidas — llegamos con conocimiento,
            metodología y apertura para <strong>construir juntos</strong>.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {COLABORACION_STEPS.map((p) => (
            <div
              key={p.num}
              style={{
                background: 'rgba(42,38,96,0.6)',
                border: `1px solid ${p.accent}`,
                borderRadius: 12,
                padding: 24,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: p.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <span
                  style={{
                    color: '#fff',
                    fontSize: 22,
                    fontWeight: 700,
                    fontFamily: '"Trebuchet MS", sans-serif',
                  }}
                >
                  {p.num}
                </span>
              </div>
              <h4
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: '"Trebuchet MS", sans-serif',
                  marginBottom: 10,
                }}
              >
                {p.title}
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
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
