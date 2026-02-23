import { COMPANY_STATS, COMPANY_TIMELINE } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

export default function Nosotros() {
  return (
    <section className="py-14 px-6 md:px-12 max-w-screen-lg mx-auto">
      <SectionHeader
        title="¿Quiénes Somos?"
        subtitle="Una empresa de tecnología con raíces en Latinoamérica"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Company description */}
        <div className="bg-brand-dark rounded-xl p-8 border-t-4 border-brand-orange shadow-lg">
          <h3 className="text-white text-xl font-bold mb-1">Latam Digital</h3>
          <div className="w-14 h-0.5 bg-brand-orange mb-5" />
          <p className="text-brand-light/80 text-sm leading-relaxed mb-4">
            Fundada en 2007, somos una empresa de consultoría en Tecnología e Innovación, Gestión
            de Servicios Digitales 360 e Innovación Digital Aplicada, con base en Panamá y
            proyección regional en Latinoamérica.
          </p>
          <p className="text-brand-muted text-sm leading-relaxed italic mb-5">
            Nuestra misión es acercar a las empresas al futuro mediante tecnologías inteligentes
            que mejoran sus procesos y maximizan sus inversiones.
          </p>
          <p className="text-brand-orange text-sm font-bold">
            &quot;Soluciones que te acercan al futuro&quot;
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {COMPANY_STATS.map((s) => (
            <Card key={s.num} accent="orange">
              <div className="p-6 text-center">
                <p className="text-2xl font-bold text-brand-purple mb-2">{s.num}</p>
                <p className="text-xs text-brand-subtle leading-tight">{s.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Vertical timeline */}
      <div className="bg-brand-surface rounded-xl p-6 border-l-4 border-brand-purple shadow-md">
        <h4 className="text-brand-dark text-sm font-bold mb-6 uppercase tracking-wider">
          Nuestra Evolución
        </h4>
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3 top-1 bottom-1 w-0.5 bg-brand-border" />

          {COMPANY_TIMELINE.map((item, i) => (
            <div key={item.year} className="relative mb-5 last:mb-0">
              {/* Timeline dot */}
              <div
                className={`absolute -left-5 top-2 w-4 h-4 rounded-full border-2 border-brand-surface shadow-sm ${
                  i % 2 === 0 ? 'bg-brand-purple' : 'bg-brand-orange'
                }`}
              />
              <div className="bg-white rounded-lg px-4 py-3 border border-brand-border shadow-sm hover:shadow-md transition-shadow">
                <span
                  className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full text-white mb-1 ${
                    i % 2 === 0 ? 'bg-brand-purple' : 'bg-brand-orange'
                  }`}
                >
                  {item.year}
                </span>
                <p className="text-brand-dark text-sm font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
