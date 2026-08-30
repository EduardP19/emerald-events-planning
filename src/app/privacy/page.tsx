import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Emerald Event Planning Privacy Policy — how we collect, use and protect your personal data in accordance with UK GDPR.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Legal</span>
          <h1>Privacy Policy</h1>
          <p>How we collect, use, and protect your personal data.</p>
        </div>
      </div>

      <div className="legal-content">
        <p><strong>Last updated:</strong> August 2026</p>

        <h2>1. Who We Are</h2>
        <p>
          Emerald Event Planning is operated by Angelle Cassell as a sole trader registered in England and Wales.
          For the purposes of UK data protection law, Angelle Cassell is the <strong>data controller</strong>.
        </p>
        <ul>
          <li><strong>Business name:</strong> Emerald Event Planning</li>
          <li><strong>Owner:</strong> Angelle Cassell</li>
          <li><strong>Email:</strong> emeraldeventplanning2026@outlook.com</li>
          <li><strong>Phone:</strong> 07498853144</li>
        </ul>

        <h2>2. What Personal Data We Collect</h2>
        <p>We may collect and process the following personal data:</p>
        <h3>Data you provide directly:</h3>
        <ul>
          <li>Name, email address, phone number</li>
          <li>Event details (type, date, number of guests, venue preferences)</li>
          <li>Budget information shared during consultation</li>
          <li>Messages, correspondence and notes from consultations</li>
          <li>Payment details (processed via secure third-party payment providers — we do not store card details)</li>
        </ul>
        <h3>Data collected automatically:</h3>
        <ul>
          <li>IP address and browser type (via website analytics)</li>
          <li>Pages visited and time spent on site</li>
          <li>Cookie identifiers (see our Cookie Policy)</li>
        </ul>

        <h2>3. How We Use Your Personal Data</h2>
        <p>We process your data for the following purposes:</p>
        <ul>
          <li><strong>To respond to enquiries</strong> — Legal basis: Legitimate interest / Pre-contractual steps</li>
          <li><strong>To provide and manage our services</strong> — Legal basis: Performance of contract</li>
          <li><strong>To process payments</strong> — Legal basis: Performance of contract</li>
          <li><strong>To send service-related communications</strong> (booking confirmations, updates) — Legal basis: Contract</li>
          <li><strong>To comply with legal obligations</strong> — Legal basis: Legal obligation</li>
          <li><strong>To improve our website and services</strong> — Legal basis: Legitimate interest</li>
        </ul>
        <p>We will only send you marketing communications if you have consented to receive them. You may withdraw consent at any time by emailing us or clicking &quot;unsubscribe&quot; in any marketing email.</p>

        <h2>4. Sharing Your Personal Data</h2>
        <p>We do not sell, rent or trade your personal data. We may share your data with:</p>
        <ul>
          <li><strong>Trusted suppliers and vendors</strong> we engage on your behalf (e.g., caterers, florists, venues) — only the data necessary to provide the agreed service</li>
          <li><strong>Payment processors</strong> to handle transactions securely</li>
          <li><strong>Website hosting providers</strong> for site operation</li>
          <li><strong>Legal authorities</strong> if required by law or in connection with legal proceedings</li>
        </ul>
        <p>All third parties we engage with are required to handle your data securely and in accordance with applicable data protection law.</p>

        <h2>5. Data Retention</h2>
        <p>We retain your personal data for the following periods:</p>
        <ul>
          <li><strong>Client records:</strong> 7 years following completion of your event (to comply with UK tax and accounting obligations)</li>
          <li><strong>Enquiry records (where no booking proceeds):</strong> 12 months from first contact</li>
          <li><strong>Marketing consent records:</strong> Until you withdraw consent, plus 1 year</li>
        </ul>
        <p>After these periods, your data is securely deleted or anonymised.</p>

        <h2>6. Your Rights Under UK GDPR</h2>
        <p>You have the following rights in relation to your personal data:</p>
        <ul>
          <li><strong>Right of access</strong> — to receive a copy of the data we hold about you</li>
          <li><strong>Right to rectification</strong> — to correct inaccurate or incomplete data</li>
          <li><strong>Right to erasure</strong> — to request deletion of your data where we have no lawful basis to retain it</li>
          <li><strong>Right to restrict processing</strong> — to limit how we use your data in certain circumstances</li>
          <li><strong>Right to data portability</strong> — to receive your data in a machine-readable format</li>
          <li><strong>Right to object</strong> — to processing based on legitimate interests or for direct marketing</li>
          <li><strong>Rights related to automated decision-making</strong> — we do not use automated decision-making or profiling</li>
        </ul>
        <p>To exercise any of these rights, please contact us at <a href="mailto:emeraldeventplanning2026@outlook.com">emeraldeventplanning2026@outlook.com</a>. We will respond within one calendar month.</p>

        <h2>7. Cookies</h2>
        <p>We use cookies on our website. Please see our <a href="/cookies">Cookie Policy</a> for full details on what cookies we use and how you can manage your preferences.</p>

        <h2>8. Data Security</h2>
        <p>We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction. Where we transfer data to third parties, we ensure that appropriate safeguards are in place.</p>

        <h2>9. Links to Third-Party Websites</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies.</p>

        <h2>10. Complaints</h2>
        <p>If you have any concerns about how we handle your personal data, please contact us in the first instance. You also have the right to lodge a complaint with the <strong>Information Commissioner&apos;s Office (ICO)</strong> at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> or by calling 0303 123 1113.</p>

        <h2>11. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. The date at the top of this page indicates when it was last revised. We encourage you to review this page periodically.</p>

        <h2>12. Contact Us</h2>
        <p>For any data protection queries, please contact:</p>
        <ul>
          <li>Email: <a href="mailto:emeraldeventplanning2026@outlook.com">emeraldeventplanning2026@outlook.com</a></li>
          <li>Phone: 07498853144</li>
        </ul>
      </div>
    </>
  );
}
