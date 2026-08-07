import type { Metadata } from 'next';
import ContactSection from '../components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description:
    'Get in touch with Sritama Basu for concert bookings, Rabindra Sangeet recitals, cultural stage anchoring, and musical collaborations.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Booking | Sritama Basu',
    description:
      'Get in touch with Sritama Basu for concert bookings, Rabindra Sangeet recitals, cultural stage anchoring, and musical collaborations.',
    url: 'https://sritamabasu.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <ContactSection />
    </div>
  );
}
