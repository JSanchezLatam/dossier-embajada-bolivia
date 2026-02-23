import type { LogoSize } from '@/types';

interface LogoProps {
  size?: LogoSize;
}

const config: Record<LogoSize, { svgW: number; svgH: number; fontSize: string; gap: string }> = {
  lg: { svgW: 58, svgH: 45, fontSize: 'text-[29px]', gap: 'gap-3' },
  md: { svgW: 36, svgH: 28, fontSize: 'text-lg', gap: 'gap-2' },
  sm: { svgW: 25, svgH: 20, fontSize: 'text-[13px]', gap: 'gap-1.5' },
};

export default function Logo({ size = 'md' }: LogoProps) {
  const { svgW, svgH, fontSize, gap } = config[size];
  return (
    <div className={`flex items-center ${gap} shrink-0`}>
      <svg width={svgW} height={svgH} viewBox="0 0 36 28" aria-hidden="true">
        <polygon points="0,14 12,0 12,28" fill="#4B4A8A" />
        <polygon points="14,14 26,0 26,28" fill="#4B4A8A" opacity="0.6" />
        <polygon points="18,7 32,7 25,20" fill="#E8621A" />
      </svg>
      <span className={`${fontSize} font-bold tracking-wide leading-none`}>
        <span className="text-brand-purple">LATAM</span>
        <span className="text-brand-orange">DIGITAL</span>
      </span>
    </div>
  );
}
