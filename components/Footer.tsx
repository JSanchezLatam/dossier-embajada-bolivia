import { COLORS } from '@/constants/data';

export default function Footer() {
  return (
    <footer
      style={{
        background: COLORS.DARK,
        padding: '14px 32px',
        textAlign: 'center',
        borderTop: `2px solid ${COLORS.PURPLE}`,
      }}
    >
      <p
        style={{
          color: '#7070AA',
          fontSize: 11,
          fontFamily: '"Trebuchet MS", sans-serif',
          margin: 0,
        }}
      >
        LATAM DIGITAL &nbsp;|&nbsp; Soluciones que te acercan al futuro &nbsp;|&nbsp;
        latamdigital.com
      </p>
    </footer>
  );
}
