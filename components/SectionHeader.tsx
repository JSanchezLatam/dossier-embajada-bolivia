import { COLORS } from '@/constants/data';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
        <div
          style={{
            width: 5,
            height: 40,
            background: COLORS.ORANGE,
            borderRadius: 3,
            flexShrink: 0,
          }}
        />
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: light ? '#fff' : COLORS.DARK,
            fontFamily: '"Trebuchet MS", sans-serif',
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          style={{
            color: light ? '#AAAACC' : '#7070AA',
            fontSize: 15,
            fontFamily: '"Trebuchet MS", sans-serif',
            marginLeft: 19,
            marginTop: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
