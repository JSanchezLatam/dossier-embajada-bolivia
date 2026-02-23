import { COLORS, PORTADA_BADGES } from '@/constants/data';
import Logo from '@/components/Logo';

export default function Portada() {
  return (
    <div
      style={{
        minHeight: '90vh',
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
      {/* Geometric BG shapes */}
      <div
        style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 420,
          height: 420,
          background: COLORS.PURPLE,
          opacity: 0.12,
          transform: 'rotate(20deg)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -40,
          left: -40,
          width: 280,
          height: 280,
          background: COLORS.ORANGE,
          opacity: 0.1,
          transform: 'rotate(-15deg)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
      />

      <div
        style={{
          textAlign: 'center',
          maxWidth: 820,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Logo size="lg" />
        <div
          style={{ width: 80, height: 3, background: COLORS.ORANGE, margin: '28px auto 32px' }}
        />

        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#fff',
            fontFamily: '"Trebuchet MS", sans-serif',
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Transformación Digital
        </h1>
        <h2
          style={{
            fontSize: 30,
            fontWeight: 400,
            color: '#C8C6F0',
            fontFamily: '"Trebuchet MS", sans-serif',
            marginBottom: 32,
          }}
        >
          en Salud para Bolivia
        </h2>

        <p
          style={{
            fontSize: 16,
            color: COLORS.ORANGE,
            fontWeight: 700,
            fontFamily: '"Trebuchet MS", sans-serif',
            marginBottom: 36,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          Digitalización de Expedientes Médicos
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            flexWrap: 'wrap',
            marginBottom: 44,
          }}
        >
          {PORTADA_BADGES.map((t) => (
            <span
              key={t}
              style={{
                background: 'rgba(75,74,138,0.4)',
                border: `1px solid ${COLORS.PURPLE}`,
                color: '#fff',
                padding: '8px 20px',
                borderRadius: 30,
                fontSize: 13,
                fontFamily: '"Trebuchet MS", sans-serif',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 12,
            padding: '20px 32px',
          }}
        >
          <p
            style={{
              color: '#9090BB',
              fontSize: 13,
              fontFamily: '"Trebuchet MS", sans-serif',
              marginBottom: 6,
            }}
          >
            Presentado a:
          </p>
          <p
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 700,
              fontFamily: '"Trebuchet MS", sans-serif',
              margin: 0,
            }}
          >
            Asamblea Legislativa Plurinacional de Bolivia
          </p>
        </div>
      </div>
    </div>
  );
}
