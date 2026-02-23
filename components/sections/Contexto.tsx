import { CONTEXTO_CHALLENGES } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';

export default function Contexto() {
  return (
    <section className="py-14 px-6 md:px-12 bg-brand-dark min-h-[80vh]">
      <div className="max-w-screen-lg mx-auto">
        <SectionHeader
          title="El Desafío en Bolivia"
          subtitle="Una oportunidad histórica de transformación en salud"
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CONTEXTO_CHALLENGES.map((c) => (
            <div
              key={c.num}
              className="flex overflow-hidden rounded-xl border border-brand-purple/40 bg-brand-purple/10 shadow-lg hover:shadow-xl hover:border-brand-purple/70 transition-all duration-200"
            >
              {/* Number column */}
              <div className="bg-brand-purple w-14 shrink-0 flex items-center justify-center">
                <span className="text-brand-orange font-bold text-base">{c.num}</span>
              </div>

              {/* Content */}
              <div className="flex-1 p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <c.Icon size={16} className="text-brand-orange shrink-0" />
                  <h4 className="text-white text-sm font-bold leading-tight">{c.title}</h4>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
