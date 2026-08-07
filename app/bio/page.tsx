import type { Metadata } from 'next';
import BioSection from '../components/BioSection';

export const metadata: Metadata = {
  title: 'Biography & Musical Heritage',
  description:
    'Explore Sritama Basu’s biography — 10 years at All India Radio, classical training in Dhrupad and Khayal at Dagar Ashram, concert productions, original releases, and US performances.',
  alternates: {
    canonical: '/bio',
  },
  openGraph: {
    title: 'Biography & Musical Heritage | Sritama Basu',
    description:
      'Explore Sritama Basu’s biography — 10 years at All India Radio, classical training in Dhrupad and Khayal at Dagar Ashram, concert productions, original releases, and US performances.',
    url: 'https://sritamabasu.com/bio',
    images: [{ url: '/2bw.jpg', alt: 'Sritama Basu Classical Vocalist' }],
  },
};

export default function BioPage() {
  return (
    <div className="w-full">
      <BioSection />
    </div>
  );
}