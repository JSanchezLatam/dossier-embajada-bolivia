import { MICROBIOME_TAGS, MICROBIOME_POINTS } from '@/constants/data';
import SectionHeader from '@/components/SectionHeader';

export default function Microbiome() {
  return (
    <section className="py-14 px-6 md:px-12 bg-brand-dark min-h-[80vh]">
      <div className="max-w-screen-lg mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <SectionHeader
            title="Microbiome Radar"
            subtitle="Innovación pionera en salud de precisión"
            light
          />
          <span className="self-start shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold tracking-wide shadow-md">
            🧬 INNOVACIÓN
          </span>
        </div>

        {/* Description + tags */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 mb-8">
          <div className="bg-brand-purple/20 border border-brand-purple/40 rounded-xl p-6 shadow-md">
            <p className="text-brand-light/90 text-sm leading-relaxed">
              <strong className="text-white font-bold">Microbiome Radar</strong> es un producto
              pionero sin precedentes en el mercado, en desarrollo como proyecto final de maestría,
              que combina análisis del microbioma intestinal con inteligencia artificial para
              ofrecer insights predictivos de salud personalizada.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            {MICROBIOME_TAGS.map((tag) => (
              <div
                key={tag}
                className="bg-brand-purple/30 border border-brand-purple/50 rounded-lg px-4 py-2.5 flex items-center gap-2"
              >
                <span className="text-brand-orange text-xs">◆</span>
                <span className="text-white text-xs font-medium">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3-col point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MICROBIOME_POINTS.map((p) => (
            <div
              key={p.title}
              className="bg-brand-dark/80 border border-brand-orange/40 border-t-4 border-t-brand-orange rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-orange/10 mb-4">
                <p.Icon size={20} className="text-brand-orange" />
              </div>
              <h4 className="text-white text-sm font-bold mb-3 leading-snug">{p.title}</h4>
              <p className="text-brand-muted text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
