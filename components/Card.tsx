import { CSSProperties, ReactNode } from 'react';
import { COLORS } from '@/constants/data';

interface CardProps {
  children: ReactNode;
  accent?: string;
  dark?: boolean;
  style?: CSSProperties;
}

export default function Card({
  children,
  accent = COLORS.ORANGE,
  dark = false,
  style = {},
}: CardProps) {
  return (
    <div
      style={{
        background: dark ? '#2A2660' : '#F5F4FC',
        border: `1px solid ${dark ? COLORS.PURPLE : '#E0E0F0'}`,
        borderRadius: 12,
        overflow: 'hidden',
        borderTop: `4px solid ${accent}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
