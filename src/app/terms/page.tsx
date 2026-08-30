import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Emerald Event Planning services including booking, cancellation, payments and liability.',
};

export default function TermsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p>Please read these terms carefully before booking our services.</p>
        </div>
      </div>

      <div className="legal-content">
        <p><strong>Last updated:</strong> August 2026</p>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern the agreement between
          <strong> Emerald Event Planning</strong> (operated by Angelle Cassell, sole trader) and the
          client (&quot;you&quot;) for the provision of event planning and coordination services.
          By booking our services, you agree to these Terms.
        </p>

        <h2>1. The Services</h2>
        <p>
          Emerald Event Planning will provide the services as set out in the agreed written quotation or service confirmation.
          Any changes to the agreed scope must be confirmed in writing and may result in a revised quotation.
        </p>

        <h2>2. Booking & Confirmation</h2>
        <p>A booking is confirmed when:</p>
        <ul>
          <li>You have received and accepted a written quotation from Emerald Event Planning</li>
          <li>A signed booking confirmation or agreement has been provided</li>
          <li>The required non-refundable booking deposit has been received</li>
        </ul>
        <p>Until all three conditions are met, no date is reserved and no services will be carried out.</p>

        <h2>3. Payment Terms</h2>
        <h3>Deposit</h3>
        <p>A non-refundable booking deposit is required to secure your event date. The deposit amount is confirmed in your written quotation. The deposit will be deducted from your final balance.</p>
        <h3>Final Balance</h3>
        <p>The final balance is due no later than 14 days before your event date, unless otherwise agreed in writing. Failure to pay by this date may result in the cancellation of services.</p>
        <h3>Expenses</h3>
        <p>Any agreed expenses (e.g., travel, printing, procurement costs) will be invoiced separately and must be pre-approved by you in writing before any expenditure is incurred.</p>
        <h3>Overdue Payments</h3>
        <p>We reserve the right to charge interest on overdue payments at 8% per annum above the Bank of England base rate in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</p>

        <h2>4. Cancellation by the Client</h2>
        <p>If you need to cancel your booking, you must notify us in writing as soon as possible. The following cancellation terms apply:</p>
        <ul>
          <li><strong>More than 60 days before the event:</strong> The booking deposit is forfeited. Any further payments made (less expenses already incurred) will be refunded within 14 days.</li>
          <li><strong>30–60 days before the event:</strong> 50% of the total agreed fee is payable (plus any expenses incurred).</li>
          <li><strong>Less than 30 days before the event:</strong> 100% of the total agreed fee is payable.</li>
        </ul>
        <p>All confirmed supplier bookings made on your behalf remain your responsibility unless we are able to cancel or transfer them.</p>

        <h2>5. Cancellation or Postponement by Emerald Event Planning</h2>
        <p>
          In exceptional circumstances beyond our reasonable control, we may need to cancel or postpone your event coordination.
          In this case, we will notify you as soon as reasonably practicable. Where we are unable to provide a
          suitable alternative, a full refund of any fees paid (excluding third-party supplier costs already committed) will be issued.
        </p>

        <h2>6. Force Majeure</h2>
        <p>
          Neither party shall be liable for failure to perform obligations under these Terms if such failure is due
          to events beyond the reasonable control of either party, including but not limited to: acts of God,
          pandemic, government restrictions, extreme weather, civil unrest, or supplier failure.
          We will notify you promptly of any such circumstances.
        </p>

        <h2>7. Changes to Your Event</h2>
        <p>
          Any significant changes to your event (including guest numbers, date, venue or scope of services required) must be
          communicated to us in writing as soon as possible. Changes may result in an amended quotation. We cannot
          guarantee the availability of suppliers or venues in the event of a date change.
        </p>

        <h2>8. Supplier Relationships</h2>
        <p>
          We work with a vetted network of trusted suppliers. However, all contracts with third-party suppliers
          (venues, caterers, florists, photographers, entertainers etc.) are entered into between you and the supplier
          directly unless otherwise agreed in writing. We act as your agent in negotiating and coordinating suppliers
          but are not responsible for the acts or omissions of any third party.
        </p>

        <h2>9. Liability</h2>
        <p>
          Emerald Event Planning will use reasonable skill and care in the provision of all services.
          However, we shall not be liable for:
        </p>
        <ul>
          <li>Any indirect, consequential or special loss or damage</li>
          <li>Loss of enjoyment or disappointment arising from circumstances beyond our reasonable control</li>
          <li>The acts, omissions or negligence of any third-party supplier</li>
          <li>Any loss or damage caused by circumstances beyond our reasonable control</li>
        </ul>
        <p>
          Our total liability to you shall not exceed the total fees paid to Emerald Event Planning under the relevant booking.
          Nothing in these Terms shall limit liability for death or personal injury caused by our negligence,
          or for fraud or fraudulent misrepresentation.
        </p>

        <h2>10. Public Liability Insurance</h2>
        <p>
          Emerald Event Planning maintains appropriate public liability insurance. Details available on request.
          Clients are advised to obtain their own event insurance for additional protection of deposits paid
          to third-party suppliers.
        </p>

        <h2>11. Data Protection</h2>
        <p>
          We will process your personal data in accordance with our <a href="/privacy">Privacy Policy</a> and
          applicable UK data protection legislation, including the UK General Data Protection Regulation (UK GDPR)
          and the Data Protection Act 2018.
        </p>

        <h2>12. Photography & Marketing</h2>
        <p>
          We may photograph events we coordinate for use in our portfolio, social media, and marketing materials
          unless you notify us in writing that you do not wish photographs to be taken or shared.
          We will always handle event photography with discretion and respect for your guests.
        </p>

        <h2>13. Intellectual Property</h2>
        <p>
          All creative content, mood boards, designs, plans and documentation produced by Emerald Event Planning
          remain our intellectual property until full payment has been received. Upon receipt of full payment,
          all event-specific materials are transferred to you for personal use.
        </p>

        <h2>14. Complaints</h2>
        <p>
          If you are dissatisfied with any aspect of our service, please raise your concern with us as soon as possible.
          We will endeavour to resolve any complaint promptly and professionally. Please contact:
          <a href="mailto:emeraldeventplanning2026@outlook.com"> emeraldeventplanning2026@outlook.com</a>.
        </p>

        <h2>15. Governing Law</h2>
        <p>
          These Terms and any disputes arising from them shall be governed by and construed in accordance with
          the laws of England and Wales. Both parties agree to submit to the exclusive jurisdiction of the courts of England and Wales.
        </p>

        <h2>16. Amendments</h2>
        <p>
          We reserve the right to update these Terms from time to time. The current version is always available on our website.
          Changes to your specific booking are only binding if agreed in writing by both parties.
        </p>
      </div>
    </>
  );
}
