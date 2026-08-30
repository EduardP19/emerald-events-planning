import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Emerald Event Planning — Making Occasions Unforgettable', template: '%s | Emerald Event Planning' },
  description: 'Emerald Event Planning is a boutique event planning service based in London. We specialise in milestone celebrations, anniversaries, baby showers, birthdays, wakes & repasts, and more.',
  keywords: ['event planning', 'event planner London', 'party planning', 'milestone events', 'wedding planning', 'baby shower', 'anniversary', 'Surrey', 'Hampshire'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Emerald Event Planning',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <Navbar />
        <main className="page-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
