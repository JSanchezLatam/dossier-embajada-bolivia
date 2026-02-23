interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 rounded-xl p-5 -mx-1 ${
        light
          ? 'bg-gradient-to-r from-brand-purple/20 to-transparent'
          : 'bg-gradient-to-r from-brand-purple/5 to-transparent'
      }`}
    >
      <div className="flex items-center gap-3 mb-1.5">
        <div className="w-1.5 h-10 bg-gradient-to-b from-brand-orange to-brand-purple rounded-full shrink-0" />
        <h2
          className={`text-2xl md:text-3xl font-bold leading-tight ${
            light ? 'text-white' : 'text-brand-dark'
          }`}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          className={`text-sm ml-5 ${light ? 'text-brand-muted' : 'text-brand-subtle'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
