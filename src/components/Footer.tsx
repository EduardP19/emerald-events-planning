import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.bgOverlay} />
      
      <div className={`container ${styles.grid} ${styles.contentWrapper}`}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <Image src="/logo_nobg.png" alt="Emerald Event Planning" width={170} height={187} />
          </div>
          <p className={styles.desc}>Boutique event planning for elegant, personal celebrations across London.</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.links}>
            {[['/', 'Home'], ['/services', 'Services'], ['/pricing', 'Pricing'], ['/about', 'About Us'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Our Services</h4>
          <ul className={styles.links}>
            {['Emerald Essentials', 'Emerald Complete', 'On-the-Day Coordination', 'Emerald Bespoke', 'Event Styling', 'Venue Sourcing'].map(s => (
              <li key={s}><Link href="/services">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Get In Touch</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:07498853144">07498853144</a>
            </li>
            <li>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:emeraldeventplanning2026@outlook.com">emeraldeventplanning2026@outlook.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.bottom} ${styles.contentWrapper}`}>
        <div className="container">
          <p>© {year} Emerald Event Planning. All rights reserved. Sole Trader registered in England.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
