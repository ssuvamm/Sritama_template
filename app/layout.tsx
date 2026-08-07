import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

export const metadata: Metadata = {
  title: {
    default: 'Sritama Basu | Classical & Contemporary Vocalist',
    template: '%s | Sritama Basu',
  },
  description:
    'Official portfolio of Sritama Basu — accomplished Indian classical and contemporary vocalist, former All India Radio artist, Dhrupad & Khayal singer, and stage performer.',
  keywords: [
    'Sritama Basu',
    'Indian Classical Vocalist',
    'Dhrupad',
    'Khayal',
    'Rabindra Sangeet',
    'Bengali Singer',
    'All India Radio Artist',
    'Bangamela Performer',
    'Bengali Music USA',
  ],
  authors: [{ name: 'Sritama Basu' }],
  creator: 'Sritama Basu',
  publisher: 'Sritama Basu Music',
  metadataBase: new URL('https://sritamabasu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sritamabasu.com',
    title: 'Sritama Basu | Classical & Contemporary Vocalist',
    description:
      'Official portfolio of Sritama Basu — accomplished Indian classical vocalist, former All India Radio artist, and versatile performer.',
    siteName: 'Sritama Basu Official',
    images: [
      {
        url: '/2bwup.jpg',
        width: 1200,
        height: 630,
        alt: 'Sritama Basu Portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sritama Basu | Classical & Contemporary Vocalist',
    description:
      'Official portfolio of Sritama Basu — accomplished Indian classical vocalist, former All India Radio artist, and versatile performer.',
    images: ['/2bwup.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0c0a09',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sritama Basu',
  jobTitle: 'Vocalist & Performing Artist',
  description:
    'Indian classical vocalist specializing in Dhrupad, Khayal, Rabindra Sangeet, and contemporary music.',
  url: 'https://sritamabasu.com',
  sameAs: [
    'https://www.youtube.com/@SritamaBasu/',
    'https://www.instagram.com/sritamabasu/',
  ],
  knowsAbout: ['Dhrupad', 'Khayal', 'Rabindra Sangeet', 'Indian Classical Music', 'Vocal Music'],
  alumniOf: {
    '@type': 'Organization',
    name: 'All India Radio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-stone-950 text-stone-100 antialiased selection:bg-gold-500 selection:text-stone-950">
        <div className="relative min-h-screen flex flex-col bg-radial-gradient">
          <Navbar />
          <main className="flex-grow pt-24">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
