import { COLORS, PROPUESTA_SERVICES } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

export default function Propuesta() {
  return (
    <div style={{ padding: '56px 48px', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHeader
        title="Nuestra Propuesta de Apoyo"
        subtitle="No venimos a ejecutar — venimos a acompañar con conocimiento experto"
      />

      <div
        style={{
          background: COLORS.PURPLE,
          borderRadius: 12,
          padding: '20px 28px',
          marginBottom: 32,
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
          Latam Digital puede ser el <strong>socio estratégico</strong> que aporte conocimiento,
          metodología y tecnología — mientras que el liderazgo, la ejecución y las decisiones
          permanecen en manos bolivianas.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {PROPUESTA_SERVICES.map((s) => (
          <Card key={s.title} accent={s.accent}>
            <div style={{ padding: 24 }}>
              <p style={{ fontSize: 24, marginBottom: 10 }}>{s.icon}</p>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: COLORS.DARK,
                  fontFamily: '"Trebuchet MS", sans-serif',
                  marginBottom: 10,
                }}
              >
                {s.title}
              </h4>
              <p
                style={{
                  fontSize: 12.5,
                  color: '#7070AA',
                  fontFamily: '"Trebuchet MS", sans-serif',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
