import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Event Gallery — Real Celebrations Across London & Surrey',
  description: 'Browse a selection of events planned and coordinated by Emerald Event Planning across London, Surrey, West Sussex and Hampshire — from elegant anniversary celebrations to creative birthday parties.',
  alternates: { canonical: '/gallery' },
};

const photos = [
  { src: '/images/venue-blue.jpg', alt: 'Elegant blue-lit event venue', category: 'Venue', span: 'large' },
  { src: '/images/table-setting.jpg', alt: 'Elegant table setting with white roses for anniversary', category: 'Table Styling' },
  { src: '/images/welcome-sign.jpg', alt: 'Personalised welcome sign on easel for anniversary tea party', category: 'Signage' },
  { src: '/images/balloon-stitch.jpg', alt: 'Stitch themed birthday balloon arch', category: 'Balloon Displays', span: 'tall' },
  { src: '/images/venue-bunting.jpg', alt: 'Elegantly decorated venue with personalised bunting', category: 'Venue Styling' },
  { src: '/images/gift-bags.jpg', alt: 'Personalised gift bags and favour table', category: 'Favours' },
  { src: '/images/balloon-mickey.jpg', alt: 'Mickey Mouse outdoor balloon arch display', category: 'Balloon Displays' },
  { src: '/images/anniversary-glasses.jpg', alt: 'Personalised anniversary champagne flutes with floral arrangement', category: 'Details' },
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
            From anniversary teas in Surrey to milestone birthdays across London, every event below was
            planned and styled by Emerald Event Planning for clients in London, Surrey, West Sussex and
            Hampshire. Explore venue styling, balloon displays, table settings and personal touches from
            real celebrations we&apos;ve brought to life.
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
    </>
  );
}
