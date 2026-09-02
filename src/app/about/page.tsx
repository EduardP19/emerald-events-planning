import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { SITE_URL } from '@/lib/site';

const title = 'About Us, Meet Your Event Planner';
const description = 'Meet Angelle Cassell, founder of Emerald Event Planning, a boutique event planner serving Haslemere, Surrey, West Sussex and Hampshire. Learn our story, mission and values.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['event planner Surrey', 'event planner West Sussex', 'event planner Hampshire', 'boutique event planner', 'Angelle Cassell', 'Emerald Event Planning founder'],
  alternates: { canonical: '/about' },
  openGraph: { title, description, url: '/about' },
  twitter: { title, description },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
  ],
};

const values = [
  { icon: '⭐', title: 'Professionalism', desc: 'Every client, every event, every detail is handled with the highest standards of care and expertise.' },
  { icon: '🤝', title: 'Reliability', desc: 'We deliver on our promises. When you book with us, you can relax knowing every detail is in safe hands.' },
  { icon: '💛', title: 'Customer Focus', desc: 'Your vision is our priority. We listen carefully and tailor every element to reflect who you are.' },
  { icon: '✨', title: 'Creativity', desc: 'We bring fresh, thoughtful ideas to every event, always designing something that feels personal and special.' },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1>About Emerald Event Planning</h1>
          <p>A boutique event planning service founded on passion, professionalism and the joy of making people feel special.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.founderGrid}>
            <div className={styles.founderPanel}>
              <Image src="/logo.png" alt="Emerald Event Planning" width={900} height={989} quality={100} unoptimized />
            </div>
            <div className={styles.founderText}>
              <span className="section-label">Meet the Founder</span>
              <h2>Hello, I&apos;m Angelle</h2>
              <p>
                I founded Emerald Event Planning because I believe every occasion deserves to feel beautiful, calm
                and effortlessly put together, and I love making that happen for people.
              </p>
              <p>
                With a sharp eye for detail and a warm, organised approach, I work closely with every client to
                understand exactly what they want and deliver it with care. Whether it&apos;s a small intimate tea party
                or a milestone celebration for hundreds, my aim is simple: to make your event extraordinary.
              </p>
              <p>
                I started Emerald Event Planning because I enjoy the process of making memorable events, from that first
                conversation about ideas to seeing the room come together on the day. There&apos;s nothing quite like watching someone walk into their
                event and seeing their face light up.
              </p>
              <p>
                I work with a trusted network of caterers, florists, photographers, and entertainers built
                through years of collaboration. Every supplier I recommend has been personally vetted and is
                someone I&apos;d trust at my own event.
              </p>
              <div className={styles.founderSignature}>
                <Image src="/logo.png" alt="Emerald logo" width={36} height={36} />
                <span>Angelle Cassell<br /><em>Founder, Emerald Event Planning</em></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.missionSection}>
        <div className="container text-center">
          <span className="section-label">What Drives Us</span>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <div className="section-divider"><span>✦</span></div>
          <blockquote className={styles.missionQuote}>
            &ldquo;To create memorable, stress-free events that bring people together,
            while delivering exceptional attention to detail and outstanding personal care.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">What We Stand For</span>
            <h2>Our Values</h2>
            <div className="section-divider"><span>✦</span></div>
          </div>
          <div className={styles.valuesGrid}>
            {values.map(({ icon, title, desc }) => (
              <div key={title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{icon}</span>
                <h3 className={styles.valueTitle}>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className={styles.areaGrid}>
            <div>
              <span className="section-label">Where We Work</span>
              <h2>Areas We Cover</h2>
              <p>Emerald Event Planning proudly serves clients across Haslemere, Surrey, West Sussex and Hampshire, including:</p>
              <ul className={styles.areaList}>
                {['Haslemere', 'Surrey', 'West Sussex', 'Hampshire'].map(a => (
                  <li key={a}>
                    <span className={styles.areaCheck}>📍</span> {a}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Events outside these areas can be accommodated, please get in touch to discuss travel arrangements.</p>
            </div>
            <div className={styles.addressCard}>
              <h4>Our Details</h4>
              <div className={styles.addressItem}>
                <span>📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:07498853144">07498853144</a>
                </div>
              </div>
              <div className={styles.addressItem}>
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:emeraldeventplanning2026@outlook.com">emeraldeventplanning2026@outlook.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--emerald-dark)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Let&apos;s Plan Something Special</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Get in touch and let&apos;s start talking about your event.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-gold">Get In Touch</Link>
            <Link href="/services" className="btn btn-outline-white">View Our Services</Link>
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
