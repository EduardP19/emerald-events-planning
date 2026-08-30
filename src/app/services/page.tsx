import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Event planning, supplier coordination, venue sourcing, styling, budgeting and on-the-day support from Emerald Event Planning.',
};

const services = [
  {
    icon: '📋',
    title: 'Basic Planning Support',
    description: 'A clear planning foundation with consultation, venue ideas, supplier guidance and a personalised checklist.',
  },
  {
    icon: '✨',
    title: 'Full Event Planning',
    description: 'End-to-end planning support from concept and suppliers through to timelines and event delivery.',
  },
  {
    icon: '📅',
    title: 'On-the-Day Coordination',
    description: 'Setup supervision, supplier arrivals, guest flow and calm troubleshooting while your event is live.',
  },
  {
    icon: '🏛️',
    title: 'Venue Sourcing',
    description: 'Personalised venue recommendations to suit your occasion, guest numbers and desired atmosphere.',
  },
  {
    icon: '🤝',
    title: 'Supplier Coordination',
    description: 'Supplier recommendations, communication and coordination so every contributor stays aligned.',
  },
  {
    icon: '🌿',
    title: 'Event Styling & Decorating',
    description: 'Decor direction, styling options and finishing touches for a polished, cohesive celebration.',
  },
  {
    icon: '💷',
    title: 'Budget Management',
    description: 'Practical budget planning and tracking to keep priorities clear and decisions confident.',
  },
  {
    icon: '💌',
    title: 'Invitation Design & Management',
    description: 'Invitation concepts and guest communication support to set the tone before the day arrives.',
  },
  {
    icon: '✓',
    title: 'Guest List & RSVP Tracking',
    description: 'Guest lists, replies and attendance details organised so nothing gets missed.',
  },
  {
    icon: '🔎',
    title: 'Vendor Sourcing & Vetting',
    description: 'Shortlisted vendors and practical checks to help you choose the right people for your event.',
  },
  {
    icon: '🛡️',
    title: 'Risk Assessments',
    description: 'Sensible risk planning for venues, suppliers and logistics, handled with care and clarity.',
  },
  {
    icon: '🗂️',
    title: 'Event Administration',
    description: 'Planning documents, schedules, supplier notes and admin organised into one reliable structure.',
  },
  {
    icon: '🎁',
    title: 'Party Bag Preparation',
    description: 'Party bags, favours and guest gifts prepared with consistency and thoughtful finishing details.',
  },
  {
    icon: '🎨',
    title: 'Mood Boards & Theme Creation',
    description: 'Visual direction for colour, styling and atmosphere so every creative choice feels connected.',
  },
];

const eventTypes = [
  { icon: '💍', label: 'Engagements', description: 'Elegant celebrations for proposals, engagement parties and the joyful start of a new chapter.' },
  { icon: '🥂', label: 'Anniversaries', description: 'Meaningful milestone moments styled with warmth, detail and a sense of occasion.' },
  { icon: '🍼', label: 'Baby Showers', description: 'Soft, thoughtful gatherings for parents-to-be, from intimate teas to themed celebrations.' },
  { icon: '🎉', label: 'Birthdays', description: 'Personal birthday parties with polished styling, smooth planning and memorable details.' },
  { icon: '🕊️', label: 'Wakes & Repasts', description: 'Respectful, calm support for remembrance gatherings where care and sensitivity matter most.' },
  { icon: '⭐', label: 'Milestone Events', description: 'Special life moments planned with structure, personality and beautiful finishing touches.' },
  { icon: '☕', label: 'Afternoon Teas', description: 'Charming tea gatherings with considered presentation, guest flow and refined details.' },
  { icon: '🏢', label: 'Corporate Events', description: 'Professional events and small business occasions delivered with clarity and confidence.' },
  { icon: '🌟', label: 'Community Events', description: 'Welcoming gatherings for charities, organisations and local groups with practical planning support.' },
  { icon: '🍽️', label: 'Intimate Gatherings', description: 'Small private occasions shaped around atmosphere, comfort and effortless hosting.' },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">What We Offer</span>
          <h1>Our Services</h1>
          <p>Planning, styling and coordination for thoughtful events that feel beautifully run from start to finish.</p>
        </div>
      </div>

      <section id="events" className="section">
        <div className="container text-center">
          <div className={styles.sectionIntro}>
            <span className="section-label">Occasions</span>
            <h2>Events We Plan</h2>
          </div>
          <div className={styles.eventTypeGrid}>
            {eventTypes.map(({ icon, label, description }) => (
              <Link key={label} href="/contact" className={styles.eventType}>
                <span className={styles.eventTypeIcon}>{icon}</span>
                <h3>{label}</h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="section-label">Planning Services</span>
            <h2>Everything your occasion needs</h2>
          </div>

          <div className={styles.serviceGrid}>
            {services.map(({ icon, title, description }) => (
              <article key={title} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.serviceCta}>
        <div className="container text-center">
          <h2>Not sure where to begin?</h2>
          <p>Book a free initial consultation and we&apos;ll recommend the right planning support for your event.</p>
          <Link href="/contact" className="btn btn-gold">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
