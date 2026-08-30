import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import heroImage from '../../assets/images/hero.jpg';

export const metadata: Metadata = {
  title: 'Emerald Event Planning — Making Occasions Unforgettable',
  description: 'Boutique event planning for milestone celebrations, anniversaries, baby showers, birthdays, wakes & repasts across London and within 20 miles.',
  alternates: { canonical: '/' },
};

const events = [
  { icon: '💍', label: 'Engagements' },
  { icon: '🥂', label: 'Anniversaries' },
  { icon: '🍼', label: 'Baby Showers' },
  { icon: '🎉', label: 'Birthdays' },
  { icon: '🕊️', label: 'Wakes & Repasts' },
  { icon: '⭐', label: 'Milestone Events' },
  { icon: '☕', label: 'Afternoon Teas' },
  { icon: '🎗️', label: 'Charity Events' },
];

const gallery = [
  { src: '/images/venue-blue.jpg',          alt: 'Elegant blue-lit venue setup' },
  { src: '/images/balloon-stitch.jpg',      alt: 'Stitch themed birthday balloon arch' },
  { src: '/images/anniversary-glasses.jpg', alt: 'Personalised anniversary glasses' },
  { src: '/images/table-setting.jpg',       alt: 'Elegant table setting with white roses' },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className={styles.heroImg}
          sizes="100vw"
        />
        <div className={styles.heroVeil} />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Making Occasions Unforgettable.</span>
            <h1 className={styles.heroTitle}>
              Emerald<br />Event Planning
            </h1>
            <p className={styles.heroSub}>
              We plan with passion, design with elegance and deliver memories that last a lifetime.
            </p>
            <Link href="/contact" className={`btn btn-primary ${styles.heroCta}`}>
              Plan Your Perfect Event
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ EVENTS WE SPECIALISE IN ════════════════════════════ */}
      <section className={`section ${styles.specialise}`}>
        <div className="container text-center">
          <span className="section-label">What We Do</span>
          <h2 className={styles.sectionHeading}>Events We Specialise In</h2>
          <div className={`section-divider`}><span>❖</span></div>
          <div className={styles.eventGrid}>
            {events.map(({ icon, label }) => (
              <Link key={label} href="/services#events" className={styles.eventCard}>
                <div className={styles.eventIcon}>{icon}</div>
                <span className={styles.eventLabel}>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT SPLIT ════════════════════════════════════════ */}
      <section className={`section ${styles.about}`}>
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/venue-bunting.jpg"
              alt="Elegantly decorated venue with personalised bunting"
              fill
              className={styles.aboutImg}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.aboutText}>
            <span className="section-label">About Emerald Event Planning</span>
            <h2 className={styles.aboutTitle}>
              Creating Moments,<br />Crafting Memories.
            </h2>
            <p>
              At Emerald Event Planning, we believe every occasion deserves to be extraordinary.
              From intimate gatherings to grand celebrations, we handle every detail so you can
              celebrate with confidence and joy.
            </p>
            <p>
              Founded by Angelle Cassell, Emerald was born from a love of bringing people together
              and making every event feel beautiful, calm and effortlessly special.
            </p>
            <Link href="/about" className={`btn btn-primary ${styles.aboutCta}`}>Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══════════════════════════════════ */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container text-center">
          <span className="section-label">How We Can Help</span>
          <h2 className={styles.sectionHeading}>Our Signature Packages</h2>
          <div className="section-divider"><span>❖</span></div>
          <div className={styles.packagesGrid}>
            {[
              { name: 'Emerald Essentials', price: '£150', desc: 'Basic planning support: consultation, venue suggestions, supplier recommendations and your personalised event checklist.', icon: '📋' },
              { name: 'Emerald Complete', price: '£250 – £2,500', desc: 'Full end-to-end event management: venue sourcing, supplier negotiations, budget management and full timeline planning.', icon: '✨', featured: true },
              { name: 'Emerald Bespoke', price: 'Tailored Quote', desc: 'For larger or more complex events with unique requirements. Everything crafted to your vision.', icon: '💎' },
            ].map(({ name, price, desc, icon, featured }) => (
              <div key={name} className={`${styles.packageCard} ${featured ? styles.featured : ''}`}>
                <div className={styles.homeBadgeSlot}>
                  {featured && <span className={styles.homeBadge}>Most Popular</span>}
                </div>
                <div className={styles.pkgIcon}>{icon}</div>
                <h3 className={styles.pkgName}>{name}</h3>
                <div className={styles.pkgPrice}>{price}</div>
                <p className={styles.pkgDesc}>{desc}</p>
                <Link href="/services" className={featured ? 'btn btn-gold' : 'btn btn-primary'}>Find Out More</Link>
              </div>
            ))}
          </div>
          <div className={styles.homeAddon}>
            <div>
              <span className={styles.homeAddonLabel}>Add-on</span>
              <h3>On-the-Day Coordination</h3>
              <p>Event setup, supplier management, guest coordination and troubleshooting, added after your main package is chosen.</p>
            </div>
            <div className={styles.homeAddonPrice}>
              <span>£70 p/h</span>
              <small>With Emerald Bespoke, this drops to £40 per hour.</small>
            </div>
            <Link href="/pricing" className="btn btn-gold">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY PREVIEW ════════════════════════════════════ */}
      <section className={`section ${styles.gallerySection}`}>
        <div className="container text-center">
          <span className="section-label">Our Work</span>
          <h2 className={styles.sectionHeading}>A Glimpse of Our Work</h2>
          <div className="section-divider"><span>❖</span></div>
          <div className={styles.galleryGrid}>
            {gallery.map(({ src, alt }) => (
              <div key={src} className={styles.galleryItem}>
                <Image src={src} alt={alt} fill sizes="(max-width: 600px) 100vw, 25vw" className={styles.galleryImg} />
              </div>
            ))}
          </div>
          <Link href="/gallery" className={`btn btn-outline ${styles.viewGalleryBtn}`}>View Gallery</Link>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaCopy}>
            <span className={styles.ctaLabel}>Begin Your Celebration</span>
            <h2 className={styles.ctaTitle}>Let&apos;s plan your perfect event</h2>
            <p>
              Tell us what you&apos;re imagining and we&apos;ll shape the details into a calm,
              beautifully organised plan.
            </p>
          </div>
          <div className={styles.ctaAction}>
            <Link href="/contact" className={`btn btn-primary ${styles.ctaButton}`}>Get In Touch Today</Link>
            <div className={styles.ctaContacts}>
              <a href="tel:07498853144" className={styles.ctaContact}>
                07498853144
              </a>
              <a href="mailto:emeraldeventplanning2026@outlook.com" className={styles.ctaContact}>
                emeraldeventplanning2026@outlook.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
