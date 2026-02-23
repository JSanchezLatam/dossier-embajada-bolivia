import { AWARDS } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

const iconBg: Record<'orange' | 'purple', string> = {
  orange: 'bg-brand-orange/10 text-brand-orange',
  purple: 'bg-brand-purple/10 text-brand-purple',
};

export default function Reconocimientos() {
  return (
    <section className="py-14 px-6 md:px-12 max-w-screen-lg mx-auto">
      <SectionHeader
        title="Logros & Reconocimientos"
        subtitle="Avalados por instituciones de prestigio internacional"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {AWARDS.map((item) => (
          <Card key={item.title} accent={item.accent}>
            <div className="p-6">
              <div
                className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${iconBg[item.accent]}`}
              >
                <item.Icon size={22} />
              </div>
              <h4 className="text-sm font-bold text-brand-dark mb-2.5 leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-brand-subtle leading-relaxed">{item.body}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
