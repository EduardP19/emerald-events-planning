import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryClient from './GalleryClient';
import { SITE_URL } from '@/lib/site';

const title = 'Event Gallery — Real Celebrations Across Surrey, West Sussex and Hampshire';
const description = 'Browse a selection of events planned and coordinated by Emerald Event Planning across Surrey, West Sussex and Hampshire — from elegant anniversary celebrations to creative birthday parties.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['event planner portfolio Surrey', 'event planner West Sussex', 'event planner Hampshire', 'party styling gallery', 'event decor examples'],
  alternates: { canonical: '/gallery' },
  openGraph: { title, description, url: '/gallery' },
  twitter: { title, description },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE_URL}/gallery` },
  ],
};

const photos = [
  { src: '/images/venue-blue.jpg', alt: 'Elegant blue-lit event venue', category: 'Venue', span: 'large' as const },
  { src: '/images/table-setting.jpg', alt: 'Elegant table setting with white roses for anniversary', category: 'Table Styling' },
  { src: '/images/welcome-sign.jpg', alt: 'Personalised welcome sign on easel for anniversary tea party', category: 'Signage' },
  { src: '/images/balloon-stitch.jpg', alt: 'Stitch themed birthday balloon arch', category: 'Balloon Displays', span: 'tall' as const },
  { src: '/images/venue-bunting.jpg', alt: 'Elegantly decorated venue with personalised bunting', category: 'Venue Styling' },
  { src: '/images/gift-bags.jpg', alt: 'Personalised gift bags and favour table', category: 'Favours' },
  { src: '/images/balloon-mickey.jpg', alt: 'Mickey Mouse outdoor balloon arch display', category: 'Balloon Displays' },
  { src: '/images/anniversary-glasses.jpg', alt: 'Personalised anniversary champagne flutes with floral arrangement', category: 'Details' },
  { src: '/images/bright-floral-centrepiece.jpg', alt: 'Bright floral centrepiece with colourful flowers', category: 'Floral Styling', span: 'tall' as const },
  { src: '/images/floral-letter-j.jpg', alt: 'Personalised floral letter J arrangement', category: 'Floral Styling', span: 'tall' as const },
  { src: '/images/floral-letters-display.jpg', alt: 'Personalised floral letters display', category: 'Floral Styling', span: 'large' as const },
  { src: '/images/blue-white-floral-letter.jpg', alt: 'Blue and white floral letter arrangement', category: 'Floral Styling' },
  { src: '/images/blue-white-floral-letter-stand.jpg', alt: 'Blue and white floral letter display on a stand', category: 'Floral Styling', span: 'tall' as const },
  { src: '/images/white-burgundy-floral-bouquet.jpg', alt: 'White and burgundy floral bouquet with pampas grass', category: 'Floral Styling', span: 'tall' as const },
  { src: '/images/cream-burgundy-floral-box.jpg', alt: 'Cream and burgundy floral box arrangement', category: 'Floral Styling', span: 'tall' as const },
  { src: '/images/decorative-paper-fans.jpg', alt: 'Decorative paper fans laid out for event styling', category: 'Details', span: 'large' as const },
  { src: '/images/blue-white-bridal-bouquet.jpg', alt: 'Blue and white bouquet held by a guest', category: 'Floral Styling' },
  { src: '/images/blue-white-buttonhole.jpg', alt: 'Blue and white buttonhole on a suit jacket', category: 'Details', span: 'tall' as const },
  { src: '/images/blue-cream-bouquet-closeup.jpg', alt: 'Blue and cream bouquet close-up with delicate white flowers', category: 'Floral Styling', span: 'tall' as const },
  { src: '/images/blue-cream-bouquet.jpg', alt: 'Blue and cream bouquet with roses and baby breath', category: 'Floral Styling', span: 'tall' as const },
  { src: '/images/celebration-cake-floral-table.jpg', alt: 'Celebration cake table with coordinated floral details', category: 'Table Styling', span: 'tall' as const },
  { src: '/images/fruit-hampers.jpg', alt: 'Wrapped fruit hampers with ribbon details', category: 'Favours', span: 'tall' as const },
  { src: '/images/fruit-hamper-row.jpg', alt: 'Row of prepared fruit hampers for guests', category: 'Favours', span: 'large' as const },
];

export default function GalleryPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Our Portfolio</span>
          <h1>Events Gallery</h1>
          <p>A glimpse into the events we&apos;ve brought to life — each one as unique as the people who celebrated at them.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p style={{ maxWidth: 720, margin: '0 auto 2.5rem', textAlign: 'center' }}>
            From intimate anniversary teas to milestone birthdays across Surrey, West Sussex and Hampshire,
            every event below was planned and styled by Emerald Event Planning.
            Explore venue styling, balloon displays, table settings and personal touches from real
            celebrations we&apos;ve brought to life.
          </p>
          <GalleryClient photos={photos} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--cream)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">Your Event Could Be Next</span>
          <h2 style={{ marginBottom: '1rem' }}>Love What You See?</h2>
          <div className="section-divider"><span>✦</span></div>
          <p style={{ maxWidth: 560, margin: '0 auto 2rem' }}>
            Every event in our gallery started with a single conversation. Let&apos;s talk about yours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Start Planning</Link>
            <Link href="/services" className="btn btn-outline">View Our Services</Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
