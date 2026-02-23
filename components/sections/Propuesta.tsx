import { PROPUESTA_SERVICES } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

const iconBg: Record<'orange' | 'purple', string> = {
  orange: 'bg-brand-orange/10 text-brand-orange',
  purple: 'bg-brand-purple/10 text-brand-purple',
};

export default function Propuesta() {
  return (
    <section className="py-14 px-6 md:px-12 max-w-screen-lg mx-auto">
      <SectionHeader
        title="Nuestra Propuesta de Apoyo"
        subtitle="No venimos a ejecutar — venimos a acompañar con conocimiento experto"
      />

      {/* Highlight banner */}
      <div className="bg-brand-purple rounded-xl px-6 py-5 mb-8 shadow-lg">
        <p className="text-white text-sm leading-relaxed">
          Latam Digital puede ser el <strong className="font-bold">socio estratégico</strong> que
          aporte conocimiento, metodología y tecnología — mientras que el liderazgo, la ejecución
          y las decisiones permanecen en manos bolivianas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROPUESTA_SERVICES.map((s) => (
          <Card key={s.title} accent={s.accent}>
            <div className="p-6">
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${iconBg[s.accent]}`}>
                <s.Icon size={22} />
              </div>
              <h4 className="text-sm font-bold text-brand-dark mb-2">{s.title}</h4>
              <p className="text-xs text-brand-subtle leading-relaxed">{s.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
