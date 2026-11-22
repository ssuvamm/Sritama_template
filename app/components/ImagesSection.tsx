'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Maximize2, Sparkles } from 'lucide-react';
import ImageModal from './ImageModal';

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
}

const photosData: GalleryPhoto[] = [
  {
    id: '1',
    src: '/2bwup.jpg',
    title: 'Classical Vocal Solos & Raga Performances',
    category: 'Concert Stage',
    description: 'Sritama performing Indian classical vocal solos during live concert engagements.',
  },
  {
    id: '2',
    src: '/2bw.jpg',
    title: 'Dhrupad & Khayal Lineage Showcase',
    category: 'Studio Portrait',
    description: 'Portrait highlighting Sritama’s classical training under Dagar Ashram and Vidushi Suranjana Bose.',
  },
  {
    id: '3',
    src: '/2up.jpg',
    title: 'Rabindra Sangeet & Stage Performance',
    category: 'Live Recital',
    description: 'Stage performance capturing emotional depth during Tagore song recitals.',
  },
  {
    id: '4',
    src: '/3.jpg',
    title: 'Bangamela Bay Area 2023 Performance',
    category: 'International Concert',
    description: 'Sritama performing live at Bangamela 2023 in California, US.',
  },
  {
    id: '5',
    src: '/4.jpg',
    title: 'Eita Tomar Gaan — Concert Series',
    category: 'Stage Production',
    description: 'Moments from the acclaimed joint musical production "Eita Tomar Gaan" in Kolkata.',
  },
  {
    id: '6',
    src: '/1.jpg',
    title: 'All India Radio Broadcast Era',
    category: 'Broadcasting',
    description: 'Archival memory from 10 years of radio presentational excellence and recitation.',
  },
  {
    id: '7',
    src: '/5.jpg',
    title: 'Cultural Anchoring & Vocal Performance',
    category: 'Stage Anchoring',
    description: 'Hosting cultural festivals and presenting vocal musical productions.',
  },
];

export default function ImagesSection() {
  const [selectedImage, setSelectedImage] = useState<GalleryPhoto | null>(null);

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-medium backdrop-blur-md"
          >
            <Camera className="w-4 h-4" />
            <span>Photo Gallery</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold text-gold-gradient"
          >
            Captured Moments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-base sm:text-lg leading-relaxed font-light"
          >
            A visual retrospective of live concerts, broadcasting milestones, international performances, and classical recitals.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
          {photosData.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              onClick={() => setSelectedImage(photo)}
              className="group relative flex h-full flex-col cursor-pointer rounded-2xl overflow-hidden bg-stone-900 border border-gold-500/20 hover:border-gold-500/50 transition-all shadow-xl hover:shadow-2xl gold-border-glow"
            >
              {/* Photo Image Container - flexes to fill the card so every tile is full-bleed */}
              <div className="relative min-h-[280px] w-full flex-1 overflow-hidden bg-stone-950">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Lightbox Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-950/70 border border-gold-500/30 text-gold-400 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all transform translate-y-2 group-hover:translate-y-0 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Details */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 text-[10px] font-semibold tracking-wider uppercase">
                    {photo.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-stone-100 group-hover:text-gold-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-stone-300 text-xs line-clamp-2 font-light opacity-90">
                    {photo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Image Lightbox Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        imageSrc={selectedImage?.src || null}
        title={selectedImage?.title}
        description={selectedImage?.description}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
