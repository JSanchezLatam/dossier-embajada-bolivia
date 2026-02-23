import { COLORS, AWARDS } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

export default function Reconocimientos() {
  return (
    <div style={{ padding: '56px 48px', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHeader
        title="Logros & Reconocimientos"
        subtitle="Avalados por instituciones de prestigio internacional"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {AWARDS.map((item) => (
          <Card key={item.title} accent={item.accent}>
            <div style={{ padding: 24 }}>
              <p style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</p>
              <h4
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: COLORS.DARK,
                  fontFamily: '"Trebuchet MS", sans-serif',
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: 12,
                  color: '#7070AA',
                  fontFamily: '"Trebuchet MS", sans-serif',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
