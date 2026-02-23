import { COLORS, COMPANY_STATS, COMPANY_TIMELINE } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

export default function Nosotros() {
  return (
    <div style={{ padding: '56px 48px', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHeader
        title="¿Quiénes Somos?"
        subtitle="Una empresa de tecnología con raíces en Latinoamérica"
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
        {/* Company description */}
        <div
          style={{
            background: COLORS.DARK,
            borderRadius: 12,
            padding: 36,
            borderTop: `4px solid ${COLORS.ORANGE}`,
          }}
        >
          <h3
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 700,
              fontFamily: '"Trebuchet MS", sans-serif',
              marginBottom: 6,
            }}
          >
            Latam Digital
          </h3>
          <div style={{ width: 60, height: 3, background: COLORS.ORANGE, marginBottom: 18 }} />
          <p
            style={{
              color: '#CCCCEE',
              fontSize: 14,
              lineHeight: 1.7,
              fontFamily: '"Trebuchet MS", sans-serif',
              marginBottom: 16,
            }}
          >
            Fundada en 2007, somos una empresa de consultoría en Tecnología e Innovación, Gestión
            de Servicios Digitales 360 e Innovación Digital Aplicada, con base en Panamá y
            proyección regional en Latinoamérica.
          </p>
          <p
            style={{
              color: '#AAAACC',
              fontSize: 13,
              lineHeight: 1.7,
              fontFamily: '"Trebuchet MS", sans-serif',
              fontStyle: 'italic',
              marginBottom: 20,
            }}
          >
            Nuestra misión es acercar a las empresas al futuro mediante tecnologías inteligentes
            que mejoran sus procesos y maximizan sus inversiones.
          </p>
          <p
            style={{
              color: COLORS.ORANGE,
              fontSize: 13,
              fontWeight: 700,
              fontFamily: '"Trebuchet MS", sans-serif',
              margin: 0,
            }}
          >
            &quot;Soluciones que te acercan al futuro&quot;
          </p>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {COMPANY_STATS.map((s) => (
            <Card key={s.num} accent={COLORS.ORANGE}>
              <div style={{ padding: '24px 16px', textAlign: 'center' }}>
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: COLORS.PURPLE,
                    fontFamily: '"Trebuchet MS", sans-serif',
                    marginBottom: 8,
                  }}
                >
                  {s.num}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: '#7070AA',
                    fontFamily: '"Trebuchet MS", sans-serif',
                    margin: 0,
                  }}
                >
                  {s.label}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div
        style={{
          background: '#F5F4FC',
          borderRadius: 12,
          padding: '24px 32px',
          borderLeft: `5px solid ${COLORS.PURPLE}`,
        }}
      >
        <h4
          style={{
            color: COLORS.DARK,
            fontSize: 15,
            fontWeight: 700,
            fontFamily: '"Trebuchet MS", sans-serif',
            marginBottom: 12,
          }}
        >
          Nuestra Evolución
        </h4>
        <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
          {COMPANY_TIMELINE.map((e, i, arr) => (
            <div key={e.year} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    background: i % 2 === 0 ? COLORS.PURPLE : COLORS.ORANGE,
                    color: '#fff',
                    borderRadius: 20,
                    padding: '4px 10px',
                    fontSize: 11,
                    fontWeight: 700,
                    fontFamily: '"Trebuchet MS", sans-serif',
                    marginBottom: 4,
                  }}
                >
                  {e.year}
                </div>
                <p
                  style={{
                    fontSize: 10,
                    color: '#7070AA',
                    fontFamily: '"Trebuchet MS", sans-serif',
                    margin: 0,
                    maxWidth: 70,
                    textAlign: 'center',
                  }}
                >
                  {e.title}
                </p>
              </div>
              {i < arr.length - 1 && (
                <div
                  style={{
                    width: 24,
                    height: 2,
                    background: '#DDDDEE',
                    margin: '0 4px',
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
