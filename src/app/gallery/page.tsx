import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse a selection of events planned and coordinated by Emerald Event Planning — from elegant anniversary celebrations to creative birthday parties.',
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
          <div className={styles.galleryGrid}>
            {photos.map(({ src, alt, category }) => (
              <div key={src} className={styles.galleryItem}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className={styles.galleryImg}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <div className={styles.galleryOverlay}>
                  <span className={styles.galleryCategory}>{category}</span>
                  <p className={styles.galleryAlt}>{alt}</p>
                </div>
              </div>
            ))}
          </div>
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
