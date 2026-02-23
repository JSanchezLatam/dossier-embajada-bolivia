import { COLORS, CONTACT_INFO } from '@/constants/data';
import Logo from '@/components/Logo';

export default function Contacto() {
  return (
    <div
      style={{
        minHeight: '80vh',
        background: COLORS.DARK,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 400,
          height: 400,
          background: COLORS.PURPLE,
          opacity: 0.1,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -60,
          left: -60,
          width: 300,
          height: 300,
          background: COLORS.ORANGE,
          opacity: 0.08,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transform: 'rotate(30deg)',
        }}
      />

      <div
        style={{ textAlign: 'center', maxWidth: 700, position: 'relative', zIndex: 2 }}
      >
        <Logo size="md" />
        <div
          style={{ width: 80, height: 3, background: COLORS.ORANGE, margin: '24px auto' }}
        />

        <h2
          style={{
            color: '#fff',
            fontSize: 36,
            fontWeight: 700,
            fontFamily: '"Trebuchet MS", sans-serif',
            marginBottom: 16,
          }}
        >
          Iniciemos una Conversación
        </h2>
        <p
          style={{
            color: '#C8C6F0',
            fontSize: 15,
            lineHeight: 1.75,
            fontFamily: '"Trebuchet MS", sans-serif',
            marginBottom: 40,
          }}
        >
          Estamos listos para explorar cómo podemos apoyar a la Asamblea Legislativa
          Plurinacional de Bolivia en su proceso de transformación digital en salud — como
          asesores expertos, con humildad y compromiso genuino.
        </p>

        <div
          style={{
            background: 'rgba(42,38,96,0.7)',
            border: `1px solid ${COLORS.PURPLE}`,
            borderRadius: 12,
            padding: '28px 36px',
            borderTop: `4px solid ${COLORS.ORANGE}`,
          }}
        >
          <p
            style={{
              color: '#fff',
              fontSize: 17,
              fontWeight: 700,
              fontFamily: '"Trebuchet MS", sans-serif',
              marginBottom: 20,
            }}
          >
            Johann Tello Meryk &nbsp;|&nbsp; Director — Latam Digital
          </p>
          {CONTACT_INFO.map((c) => (
            <p
              key={c.text}
              style={{
                color: '#AAAACC',
                fontSize: 13,
                fontFamily: '"Trebuchet MS", sans-serif',
                marginBottom: 10,
                display: 'flex',
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span>{c.icon}</span>
              {c.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
