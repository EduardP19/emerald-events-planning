import type { Metadata } from 'next';
import styles from './page.module.css';
import { ENQUIRY_FORM_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us — Event Planner in London and Within 20 Miles',
  description: 'Get in touch with Emerald Event Planning to book your event, request a quote, or simply have a chat about your ideas. Serving London and areas within 20 miles.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Let&apos;s Talk</span>
          <h1>Get In Touch</h1>
          <p>Ready to start planning? We&apos;d love to hear about your event. Contact us directly or fill in our enquiry form.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form Link */}
            <div className={styles.formWrap}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formSubtitle}>We aim to respond to all enquiries within 48 hours.</p>
              
              <div className={styles.externalFormBox}>
                <h3>Ready to tell us about your event?</h3>
                <p>Please click the button below to fill out our detailed enquiry form. This helps us gather all the essential details about your occasion so we can provide you with the best possible service and a tailored quote.</p>
                <a href={ENQUIRY_FORM_URL} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.submitBtn}`}>
                  Open Enquiry Form ✦
                </a>
              </div>
            </div>

            {/* Info Panel */}
            <div className={styles.infoPanel}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Direct Contact</h3>
                <div className={styles.infoItems}>
                  <a href="tel:07498853144" className={styles.infoItem}>
                    <span className={styles.infoIcon}>📞</span>
                    <div>
                      <strong>Phone</strong>
                      <span>07498853144</span>
                    </div>
                  </a>
                  <a href="mailto:emeraldeventplanning2026@outlook.com" className={styles.infoItem}>
                    <span className={styles.infoIcon}>✉️</span>
                    <div>
                      <strong>Email</strong>
                      <span>emeraldeventplanning2026@outlook.com</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>What Happens Next?</h3>
                <ol className={styles.steps}>
                  <li>
                    <span className={styles.stepNum}>1</span>
                    <div>
                      <strong>We receive your enquiry</strong>
                      <p>We&apos;ll get back to you within 48 hours.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNum}>2</span>
                    <div>
                      <strong>Free initial consultation</strong>
                      <p>We&apos;ll chat through your vision, ideas and budget.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNum}>3</span>
                    <div>
                      <strong>Tailored quote</strong>
                      <p>We&apos;ll send you a personalised, detailed quote.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNum}>4</span>
                    <div>
                      <strong>Secure your date</strong>
                      <p>Pay your deposit and let the planning begin!</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Areas We Cover</h3>
                <p className={styles.areasText}>London and within 20 miles</p>
                <p className={styles.areasSubtext}>Including Essex, Hertfordshire and Kent border towns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
