import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { SITE_URL } from '@/lib/site';

const packages = [
  {
    icon: '📋',
    name: 'Emerald Essentials',
    subtitle: 'Basic Planning Support',
    price: '£150',
    note: 'flat fee',
    includes: [
      'Initial consultation',
      'Venue suggestions',
      'Supplier recommendations',
      'Decorating options',
      'Event checklist',
    ],
    cta: 'Book Now',
    href: '/contact',
  },
  {
    icon: '✨',
    name: 'Emerald Complete',
    subtitle: 'Full Event Planning',
    price: '£250 – £2,500',
    note: '+ expenses by event size',
    includes: [
      'End-to-end event management',
      'Venue sourcing & site visits',
      'Supplier negotiations',
      'Budget management',
      'Timeline planning',
      'On-the-day coordination',
    ],
    cta: 'Book Now',
    href: '/contact',
    featured: true,
  },
  {
    icon: '💎',
    name: 'Emerald Bespoke',
    subtitle: 'Tailored for larger events',
    price: 'POA',
    note: 'Quote agreed to your needs',
    includes: [
      'Fully custom service package',
      'Large-scale event logistics',
      'Corporate & community events',
      'Risk assessment included',
    ],
    cta: 'Get a Quote',
    href: '/contact',
  },
];

const title = 'Event Planner Pricing — Packages From £150 | London';
const description = 'Transparent event planner pricing across London and within 20 miles. From £150 for essential planning support to fully bespoke quotes for larger events — no hidden fees.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['event planner pricing London', 'party planner cost', 'event planning packages', 'wedding and party planner fees'],
  alternates: { canonical: '/pricing' },
  openGraph: { title, description, url: '/pricing' },
  twitter: { title, description },
};

const faqs = [
  { q: 'Do I need to pay a deposit?', a: 'Yes. A non-refundable booking deposit is required to confirm your date. The amount varies by package and is confirmed in your written quote.' },
  { q: 'What areas do you cover?', a: 'We serve London and areas within 20 miles, including parts of Essex, Hertfordshire and Kent. Events outside these areas can be discussed — additional travel expenses may apply.' },
  { q: 'What is included in "expenses"?', a: 'Expenses are out-of-pocket costs incurred on your behalf — for example, travel to venues, printing costs, or sourcing specific materials. All expenses are pre-agreed with you before any spend.' },
  { q: 'Can I add On-the-Day coordination?', a: 'Yes. On-the-Day can be added after your main package is selected. It is £70 per hour with a 2-hour minimum, and drops to £40 per hour with Emerald Bespoke packages.' },
  { q: 'What if I need to cancel?', a: 'Cancellation terms are set out in your booking agreement. Generally, if you cancel with 30+ days notice, any payments beyond the deposit may be refunded. See our Terms & Conditions for full details.' },
  { q: 'Do you work with a specific set of suppliers?', a: 'We work with a vetted network of trusted local suppliers, but we are happy to work with your preferred vendors too. Supplier selection is always discussed and agreed with you.' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${SITE_URL}/pricing` },
  ],
};

export default function PricingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Transparent Pricing</span>
          <h1>Simple, Clear Pricing</h1>
          <p>No hidden fees. No surprises. Just honest, professional event planning at fair prices.</p>
        </div>
      </div>

      {/* Event Size Guide */}
      <section className="section" style={{ background: 'var(--cream)', paddingBottom: '3rem' }}>
        <div className="container text-center">
          <span className="section-label">Event Sizes</span>
          <h2>How We Size Your Event</h2>
          <div className="section-divider"><span>✦</span></div>
          <div className={styles.sizeGrid}>
            <div className={styles.sizeCard}>
              <div className={styles.sizeNumber}>👥</div>
              <h3>Small Events</h3>
              <div className={styles.sizeRange}>0 – 50 Guests</div>
              <p>Intimate gatherings, afternoon teas, baby showers, small birthday parties and personal celebrations.</p>
            </div>
            <div className={styles.sizeCard}>
              <div className={styles.sizeNumber}>👥👥</div>
              <h3>Medium Events</h3>
              <div className={styles.sizeRange}>50 – 150 Guests</div>
              <p>Anniversary parties, milestone birthdays, engagements, repasts, and community celebrations.</p>
            </div>
            <div className={styles.sizeCard}>
              <div className={styles.sizeNumber}>👥👥👥</div>
              <h3>Large Events</h3>
              <div className={styles.sizeRange}>150+ Guests</div>
              <p>Corporate events, large award ceremonies, grand celebrations and multi-vendor productions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Our Packages</span>
            <h2>Package Pricing</h2>
            <div className="section-divider"><span>✦</span></div>
          </div>

          <div className={styles.packageGrid}>
            {packages.map((pkg) => (
              <article key={pkg.name} className={`${styles.packageCard} ${pkg.featured ? styles.featuredCard : ''}`}>
                <div className={styles.badgeSlot}>
                  {pkg.featured && <span className={styles.popularBadge}>Most Popular</span>}
                </div>
                <div className={styles.packageTop}>
                  <span className={styles.packageIcon}>{pkg.icon}</span>
                  <div>
                    <h3>{pkg.name}</h3>
                    <p>{pkg.subtitle}</p>
                  </div>
                </div>
                <div className={styles.packagePrice}>
                  <span>{pkg.price}</span>
                  <small>{pkg.note}</small>
                </div>
                <ul className={styles.packageIncludes}>
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={pkg.href} className={`btn ${pkg.featured ? 'btn-gold' : 'btn-primary'}`}>{pkg.cta}</Link>
              </article>
            ))}
          </div>

          <aside className={styles.onDayAddon}>
            <div className={styles.addonIntro}>
              <span className={styles.addonBadge}>Add-on</span>
              <div className={styles.packageTop}>
                <span className={styles.packageIcon}>📅</span>
                <div>
                  <h3>Emerald On-the-Day</h3>
                  <p>Coordination only, added after your main package is chosen.</p>
                </div>
              </div>
            </div>
            <ul className={styles.addonIncludes}>
              <li>Event setup & supervision</li>
              <li>Supplier management</li>
              <li>Guest coordination</li>
              <li>Troubleshooting</li>
            </ul>
            <div className={styles.addonRate}>
              <span>£70 p/h</span>
              <small>Minimum 2 hours. With Emerald Bespoke, this drops to £40 per hour.</small>
            </div>
            <Link href="/contact" className="btn btn-gold">Add Coordination</Link>
          </aside>

          {/* Expenses note */}
          <div className={styles.expenseNote}>
            <span>ℹ️</span>
            <p><strong>About expenses:</strong> Where quoted, expenses include reasonable out-of-pocket costs such as travel, printing, and materials sourced on your behalf. All expenses are pre-agreed with you in writing before any spend is incurred.</p>
          </div>
        </div>
      </section>

      {/* Additional Add-ons */}
      <section className="section-sm" style={{ background: 'var(--cream)', padding: '4rem 0' }}>
        <div className="container text-center">
          <span className="section-label">Add-Ons</span>
          <h2>Additional Services</h2>
          <p style={{ maxWidth: 560, margin: '0.75rem auto 2.5rem' }}>Available as standalone additions to any package.</p>
          <div className={styles.addonsGrid}>
            {[
              { icon: '🎨', label: 'Event Styling & Decorating' },
              { icon: '✉️', label: 'Invitation Management' },
              { icon: '📊', label: 'Guest List Tracking' },
              { icon: '🔍', label: 'Vendor Sourcing' },
              { icon: '📋', label: 'Risk Assessments' },
              { icon: '📁', label: 'Event Administration' },
              { icon: '🎁', label: 'Party Bag Preparation' },
              { icon: '🗓️', label: 'Mood Board Creation' },
            ].map(({ icon, label }) => (
              <div key={label} className={styles.addonCard}>
                <span className={styles.addonIcon}>{icon}</span>
                <span className={styles.addonLabel}>{label}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>Pricing for add-ons is agreed individually. <Link href="/contact" style={{ color: 'var(--emerald)', textDecoration: 'underline' }}>Contact us to discuss.</Link></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Questions</span>
            <h2>Frequently Asked</h2>
            <div className="section-divider"><span>✦</span></div>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map(({ q, a }) => (
              <div key={q} className={styles.faqCard}>
                <h4 className={styles.faqQ}>{q}</h4>
                <p className={styles.faqA}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* CTA */}
      <section style={{ background: 'var(--emerald-dark)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Ready to get started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>Book your free initial consultation and let&apos;s start planning your perfect event.</p>
          <Link href="/contact" className="btn btn-gold">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
