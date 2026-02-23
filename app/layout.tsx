import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dossier Embajada Bolivia — Latam Digital',
  description:
    'Propuesta de Transformación Digital en Salud para Bolivia — Digitalización de Expedientes Médicos. Latam Digital, Consultoría e Innovación Tecnológica.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
