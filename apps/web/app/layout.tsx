import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ArrozERP',
  description: 'ERP didático para uma distribuidora de arroz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
