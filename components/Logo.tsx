import Image from 'next/image';

type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  size?: LogoSize;
}

// Source PNG is 4500×4500 with ~60% content area.
// Render larger so the visible logo mark is crisp and readable.
const sizeMap: Record<LogoSize, { w: number; h: number }> = {
  sm: { w: 130, h: 130 }, // nav
  md: { w: 200, h: 200 }, // contacto
  lg: { w: 320, h: 320 }, // portada hero
};

export default function Logo({ size = 'md' }: LogoProps) {
  const { w, h } = sizeMap[size];
  return (
    <Image
      src="/logo-latamdigital.png"
      alt="Latam Digital"
      width={w}
      height={h}
      priority
      quality={100}
      style={{ objectFit: 'contain' }}
    />
  );
}
