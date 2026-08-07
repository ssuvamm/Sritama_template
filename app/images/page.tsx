import type { Metadata } from 'next';
import ImagesSection from '../components/ImagesSection';

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description:
    'Visual gallery showcasing Sritama Basu in concert performances, classical recitals, broadcasting events, and international music festivals.',
  alternates: {
    canonical: '/images',
  },
  openGraph: {
    title: 'Photo Gallery | Sritama Basu',
    description:
      'Visual gallery showcasing Sritama Basu in concert performances, classical recitals, broadcasting events, and international music festivals.',
    url: 'https://sritamabasu.com/images',
    images: [{ url: '/2bwup.jpg', alt: 'Sritama Basu Concert Gallery' }],
  },
};

export default function ImagesPage() {
  return (
    <div className="w-full">
      <ImagesSection />
    </div>
  );
}
