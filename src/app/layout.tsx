import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Emerald Event Planning — Making Occasions Unforgettable', template: '%s | Emerald Event Planning' },
  description: 'Emerald Event Planning is a boutique event planning service based in London. We specialise in milestone celebrations, anniversaries, baby showers, birthdays, wakes & repasts, and more.',
  keywords: ['event planning', 'event planner London', 'party planning', 'milestone events', 'wedding planning', 'baby shower', 'anniversary', 'Essex', 'Hertfordshire', 'Kent'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerald Event Planning — Making Occasions Unforgettable',
    description: 'Boutique event planning for milestone celebrations, anniversaries, baby showers, birthdays and more across London and within 20 miles.',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.legalName,
  founder: {
    '@type': 'Person',
    name: BUSINESS.founder,
  },
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.addressLocality,
    postalCode: BUSINESS.postalCode,
    addressRegion: BUSINESS.addressRegion,
    addressCountry: BUSINESS.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  areaServed: [
    ...BUSINESS.areasServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS.latitude,
        longitude: BUSINESS.longitude,
      },
      geoRadius: `${BUSINESS.serviceRadiusMiles * 1609}`, // metres
    },
  ],
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
           
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main className="page-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
