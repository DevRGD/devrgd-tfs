import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import { Anek_Bangla } from 'next/font/google';

const anekBangla = Anek_Bangla({
  variable: '--font-anek-bangla',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Tandhan - Global Presence',
  description: "Discover Tandhan's global presence and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anekBangla.variable} h-full antialiased`}>
      <body className={`min-h-full flex flex-col ${anekBangla.className} bg-white text-gray-900`}>
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
