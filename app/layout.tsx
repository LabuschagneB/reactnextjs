import './globals.css';
import Link from 'next/link';
import AcmeLogo from './ui/acme-logo';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="text-white bg-[#020040]">
        <main>
        {children}
      </main>
      </body>
    </html>
  );
}