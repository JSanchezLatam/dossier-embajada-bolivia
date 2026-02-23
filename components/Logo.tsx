import { COLORS } from '@/constants/data';

type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  size?: LogoSize;
}

const scaleMap: Record<LogoSize, number> = { lg: 1.6, md: 1, sm: 0.7 };

export default function Logo({ size = 'md' }: LogoProps) {
  const scale = scaleMap[size];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * scale }}>
      <svg width={36 * scale} height={28 * scale} viewBox="0 0 36 28">
        <polygon points="0,14 12,0 12,28" fill={COLORS.PURPLE} />
        <polygon points="14,14 26,0 26,28" fill={COLORS.PURPLE} opacity="0.6" />
        <polygon points="18,7 32,7 25,20" fill={COLORS.ORANGE} />
      </svg>
      <span
        style={{
          fontFamily: '"Trebuchet MS", sans-serif',
          fontWeight: 700,
          fontSize: 18 * scale,
          letterSpacing: 1,
        }}
      >
        <span style={{ color: COLORS.PURPLE }}>LATAM</span>
        <span style={{ color: COLORS.ORANGE }}>DIGITAL</span>
      </span>
    </div>
  );
}
