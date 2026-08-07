import type { Metadata } from 'next';
import VideosSection from '../components/VideosSection';

export const metadata: Metadata = {
  title: 'Music & Video Gallery',
  description:
    'Watch live performances, Indian classical vocal recitals (Dhrupad & Khayal), Rabindra Sangeet renditions, and original song releases by Sritama Basu.',
  alternates: {
    canonical: '/videos',
  },
  openGraph: {
    title: 'Music & Video Gallery | Sritama Basu',
    description:
      'Watch live performances, Indian classical vocal recitals (Dhrupad & Khayal), Rabindra Sangeet renditions, and original song releases by Sritama Basu.',
    url: 'https://sritamabasu.com/videos',
    images: [{ url: '/2up.jpg', alt: 'Sritama Basu Video Performance' }],
  },
};

export default function VideosPage() {
  return (
    <div className="w-full">
      <VideosSection />
    </div>
  );
}
