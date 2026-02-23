import { ReactNode } from 'react';
import type { AccentColor } from '@/types';

interface CardProps {
  children: ReactNode;
  accent?: AccentColor;
  dark?: boolean;
  className?: string;
}

const borderTop: Record<AccentColor, string> = {
  orange: 'border-t-brand-orange',
  purple: 'border-t-brand-purple',
};

export default function Card({ children, accent = 'orange', dark = false, className = '' }: CardProps) {
  return (
    <div
      className={`
        rounded-xl overflow-hidden shadow-lg border-t-4
        transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5
        ${borderTop[accent]}
        ${dark ? 'bg-[#2A2660] border border-brand-purple/50' : 'bg-brand-surface border border-brand-border'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
