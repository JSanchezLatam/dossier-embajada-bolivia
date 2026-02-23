import Image from 'next/image';

type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  size?: LogoSize;
}

const heightMap: Record<LogoSize, number> = { sm: 36, md: 56, lg: 90 };

export default function Logo({ size = 'md' }: LogoProps) {
  const height = heightMap[size];
  // The logo image is square (1:1), so width = height
  return (
    <Image
      src="/logo-latamdigital.png"
      alt="Latam Digital"
      width={height}
      height={height}
      priority
      style={{ objectFit: 'contain' }}
    />
  );
}
