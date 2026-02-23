import { CONTACT_INFO } from '@/constants/data';
import Logo from '@/components/Logo';

export default function Contacto() {
  return (
    <section className="relative min-h-[80vh] bg-brand-dark flex flex-col items-center justify-center px-6 md:px-12 py-16 overflow-hidden">
      {/* BG shapes */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-brand-purple/10 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-brand-orange/8 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] rotate-[30deg]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
        <Logo size="md" />
        <div className="w-20 h-0.5 bg-brand-orange my-6" />

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Iniciemos una Conversación
        </h2>
        <p className="text-brand-light/80 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
          Estamos listos para explorar cómo podemos apoyar a la Asamblea Legislativa Plurinacional
          de Bolivia en su proceso de transformación digital en salud — como asesores expertos,
          con humildad y compromiso genuino.
        </p>

        {/* Contact card */}
        <div className="w-full bg-brand-purple/20 border border-brand-purple/50 border-t-4 border-t-brand-orange rounded-xl px-8 py-7 shadow-xl">
          <p className="text-white text-lg font-bold mb-5">
            Johann Tello Meryk &nbsp;|&nbsp; Director — Latam Digital
          </p>
          <div className="space-y-3">
            {CONTACT_INFO.map((c) => (
              <p
                key={c.text}
                className="flex items-center justify-center gap-3 text-brand-muted text-sm"
              >
                <c.Icon size={16} className="shrink-0 text-brand-subtle" />
                {c.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
