import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CAHAYA BARBERSHOP - Barbershop & Grooming Terbaik di Kuningan',
  description: 'Pengalaman grooming & styling pria premium di Cahaya Barbershop Kuningan. Precision haircut, hair coloring, korean perm, down perm, cukur panggilan, dan hairdo wedding.',
  keywords: ['cahaya barbershop', 'cahaya barbershop kuningan', 'barbershop kuningan', 'potong rambut kuningan', 'korean perm kuningan', 'hair color kuningan', 'yayat barber'],
  authors: [{ name: 'CAHAYA BARBERSHOP' }],
  openGraph: {
    title: 'CAHAYA BARBERSHOP - Look Sharp. Feel Confident.',
    description: 'Pengalaman grooming & styling pria modern di Kuningan City Center.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} dark scroll-smooth`}>
      <body className="bg-[#050505] text-[#EDEDED] antialiased min-h-screen selection:bg-[#1E5EFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
