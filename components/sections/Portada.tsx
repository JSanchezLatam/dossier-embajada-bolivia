import { PORTADA_BADGES } from '@/constants/data';
import Logo from '@/components/Logo';

export default function Portada() {
  return (
    <div className="relative min-h-[90vh] bg-brand-dark flex flex-col items-center justify-center px-6 md:px-12 py-16 overflow-hidden">
      {/* Geometric BG shapes */}
      <div className="absolute -top-16 -right-16 w-80 h-80 md:w-[420px] md:h-[420px] bg-brand-purple/10 rotate-[20deg] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 md:w-72 md:h-72 bg-brand-orange/10 rotate-[-15deg] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full">
        <Logo size="lg" />

        <div className="w-20 h-0.5 bg-brand-orange my-7" />

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Transformación Digital
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-brand-light mb-8">
          en Salud para Bolivia
        </h2>

        <p className="text-brand-orange font-bold text-sm md:text-base tracking-widest uppercase mb-9">
          Digitalización de Expedientes Médicos
        </p>

        {/* Badge pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PORTADA_BADGES.map((badge) => (
            <span
              key={badge}
              className="px-5 py-2 rounded-full text-sm font-medium text-white bg-brand-purple/40 border border-brand-purple/60 tracking-wide"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Presentado a */}
        <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-xl px-8 py-5">
          <p className="text-brand-subtle text-xs mb-1.5 uppercase tracking-widest">
            Presentado a:
          </p>
          <p className="text-white text-lg font-bold leading-snug">
            Asamblea Legislativa Plurinacional de Bolivia
          </p>
        </div>
      </div>
    </div>
  );
}
