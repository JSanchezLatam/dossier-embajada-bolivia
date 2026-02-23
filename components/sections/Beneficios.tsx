import { BENEFICIOS } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';

const headerBg: Record<'orange' | 'purple', string> = {
  orange: 'bg-brand-orange',
  purple: 'bg-brand-purple',
};
const bulletColor: Record<'orange' | 'purple', string> = {
  orange: 'text-brand-orange',
  purple: 'text-brand-purple',
};

export default function Beneficios() {
  return (
    <section className="py-14 px-6 md:px-12 max-w-screen-lg mx-auto">
      <SectionHeader
        title="Valor para Bolivia"
        subtitle="Impacto real en el sistema de salud nacional"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BENEFICIOS.map((b) => (
          <div
            key={b.title}
            className="rounded-xl overflow-hidden border border-brand-border shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Colored header */}
            <div className={`${headerBg[b.accent]} px-6 py-4 flex items-center gap-3`}>
              <div className="bg-white/20 rounded-lg p-1.5">
                <b.Icon size={20} className="text-white" />
              </div>
              <h4 className="text-white text-base font-bold">{b.title}</h4>
            </div>

            {/* Items */}
            <div className="bg-brand-surface px-6 py-5 space-y-3">
              {b.items.map((item) => (
                <p key={item} className="flex items-start gap-2.5 text-sm text-brand-dark">
                  <span className={`${bulletColor[b.accent]} shrink-0 mt-0.5 font-bold`}>◆</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
