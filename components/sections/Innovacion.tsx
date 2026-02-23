import { INNOVACION_FEATURES } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';

const borderLeft: Record<'orange' | 'purple', string> = {
  orange: 'border-l-brand-orange',
  purple: 'border-l-brand-purple',
};
const iconText: Record<'orange' | 'purple', string> = {
  orange: 'text-brand-orange',
  purple: 'text-brand-purple',
};

export default function Innovacion() {
  return (
    <section className="py-14 px-6 md:px-12 max-w-screen-lg mx-auto">
      <SectionHeader
        title="Innovación Aplicada en Salud"
        subtitle="Construyendo el futuro de la medicina digital"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* DeLeon 1.0 spotlight card */}
        <div className="bg-brand-dark rounded-xl p-8 border-t-4 border-brand-orange shadow-lg">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-orange/10 mb-5">
            <span className="text-2xl">🔬</span>
          </div>
          <h3 className="text-white text-xl font-bold mb-1">DeLeon 1.0</h3>
          <p className="text-brand-orange text-xs font-semibold tracking-wide mb-4">
            Plataforma de Análisis Clínico
          </p>
          <div className="w-12 h-0.5 bg-brand-purple/60 mb-5" />
          <p className="text-brand-light/80 text-sm leading-relaxed mb-4">
            DeLeon 1.0 es nuestra plataforma de innovación en procesos clínicos que integra
            análisis de datos biomédicos con inteligencia artificial para apoyar la toma de
            decisiones clínicas y administrativas.
          </p>
          <p className="text-brand-muted text-xs leading-relaxed">
            Este proyecto es la base sobre la cual desarrollamos nuestras capacidades en salud
            digital, con metodologías propias adaptables al contexto boliviano.
          </p>
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-4">
          {INNOVACION_FEATURES.map((a) => (
            <div
              key={a.title}
              className={`bg-brand-surface border border-brand-border border-l-4 ${borderLeft[a.accent]} rounded-lg px-5 py-4 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow`}
            >
              <a.Icon size={20} className={`shrink-0 mt-0.5 ${iconText[a.accent]}`} />
              <div>
                <p className="text-sm font-bold text-brand-dark mb-1">{a.title}</p>
                <p className="text-xs text-brand-subtle leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
