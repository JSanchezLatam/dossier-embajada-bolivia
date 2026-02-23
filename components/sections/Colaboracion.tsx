import { COLABORACION_STEPS } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';

const stepBg: Record<'orange' | 'purple', string> = {
  orange: 'bg-brand-orange',
  purple: 'bg-brand-purple',
};
const stepBorder: Record<'orange' | 'purple', string> = {
  orange: 'border-brand-orange/50',
  purple: 'border-brand-purple/50',
};

export default function Colaboracion() {
  return (
    <section className="py-14 px-6 md:px-12 bg-brand-dark min-h-[80vh]">
      <div className="max-w-screen-lg mx-auto">
        <SectionHeader
          title="Nuestro Enfoque de Colaboración"
          subtitle="Respeto a la autonomía boliviana en cada paso del proceso"
          light
        />

        {/* Highlight banner */}
        <div className="bg-brand-purple rounded-xl px-6 py-5 mb-8 shadow-lg">
          <p className="text-white text-sm leading-relaxed">
            Somos conscientes de que Bolivia posee sus propias complejidades, contexto y
            necesidades. No llegamos con soluciones predefinidas — llegamos con conocimiento,
            metodología y apertura para{' '}
            <strong className="font-bold">construir juntos</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COLABORACION_STEPS.map((step) => (
            <div
              key={step.num}
              className={`bg-brand-purple/10 border ${stepBorder[step.accent]} rounded-xl p-6 text-center hover:bg-brand-purple/20 transition-colors shadow-md hover:shadow-lg`}
            >
              {/* Circle with number */}
              <div
                className={`w-13 h-13 rounded-full ${stepBg[step.accent]} flex items-center justify-center mx-auto mb-4 shadow-md`}
              >
                <span className="text-white text-xl font-bold">{step.num}</span>
              </div>

              {/* Icon badge */}
              <div className="flex justify-center mb-3">
                <step.Icon size={18} className="text-brand-muted" />
              </div>

              <h4 className="text-white text-base font-bold mb-3">{step.title}</h4>
              <p className="text-brand-muted text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
