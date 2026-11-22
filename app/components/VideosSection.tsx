'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoModal from './VideoModal';

interface VideoItem {
  id: string;
  embedUrl: string;
  title: string;
  category: 'Classical' | 'Rabindra Sangeet' | 'Live Concert' | 'Originals';
  description: string;
  duration?: string;
}

const videosData: VideoItem[] = [
  {
    id: 'W-xfKXI225w',
    embedUrl: 'https://www.youtube.com/embed/W-xfKXI225w',
    title: 'Sritama Basu — Classical Raga Vocal Recital',
    category: 'Classical',
    description: 'Immersive classical vocal rendition demonstrating intricate raga movement and pitch precision.',
  },
  {
    id: 'RKG8LmzC3Tk',
    embedUrl: 'https://www.youtube.com/embed/RKG8LmzC3Tk',
    title: 'Classical & Contemporary Vocal Performance',
    category: 'Classical',
    description: 'Melodic vocal presentation highlighting classical phrasing and emotive depth.',
  },
  {
    id: 'nWuaWCYV48M',
    embedUrl: 'https://www.youtube.com/embed/nWuaWCYV48M',
    title: 'Rabindra Sangeet Melodies',
    category: 'Rabindra Sangeet',
    description: 'Traditional rendition of Rabindranath Tagore compositions with classical nuance.',
  },
  {
    id: 'T6agE9zhG0g',
    embedUrl: 'https://www.youtube.com/embed/T6agE9zhG0g',
    title: 'Live Stage Concert Performance',
    category: 'Live Concert',
    description: 'Live stage recording featuring contemporary Bengali arrangements and vocal accompaniment.',
  },
  {
    id: 'yTFGV_03h64',
    embedUrl: 'https://www.youtube.com/embed/yTFGV_03h64',
    title: 'Eita Tomar Gaan — Special Production Showcase',
    category: 'Originals',
    description: 'Acclaimed joint production featuring original songwriting and vocal harmony.',
  },
  {
    id: '-k91_M_pz9E',
    embedUrl: 'https://www.youtube.com/embed/-k91_M_pz9E',
    title: 'Poetry Recitation & Vocal Fusion',
    category: 'Originals',
    description: 'Expressive recitation blending All India Radio broadcasting experience with musical textures.',
  },
];

const categories = ['All', 'Classical', 'Rabindra Sangeet', 'Live Concert', 'Originals'] as const;

export default function VideosSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const filteredVideos =
    activeCategory === 'All'
      ? videosData
      : videosData.filter((v) => v.category === activeCategory);

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      {/* Light background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-medium backdrop-blur-md"
          >
            <span>Music & Video Gallery</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold text-gold-gradient"
          >
            Performances & Videos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-base sm:text-lg leading-relaxed font-light"
          >
            Explore live classical recitals, Rabindra Sangeet performances, original single releases, and stage highlights.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-stone-950 font-semibold shadow-lg shadow-gold-500/20'
                    : 'bg-stone-900/80 border border-stone-800 text-stone-300 hover:text-gold-300 hover:border-gold-500/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Video Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl overflow-hidden bg-stone-900/70 border border-gold-500/20 hover:border-gold-500/40 backdrop-blur-md transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Thumbnail Container / YouTube Embed Wrapper */}
                <div className="relative aspect-video w-full bg-stone-950 overflow-hidden">
                  <iframe
                    src={`${video.embedUrl}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[11px] font-medium">
                        {video.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-stone-100 group-hover:text-gold-300 transition-colors line-clamp-1">
                      {video.title}
                    </h3>
                    <p className="text-stone-400 text-xs leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-medium transition-colors"
                    >
                      <span>Watch Full Screen</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal Lightbox */}
      <VideoModal
        isOpen={!!selectedVideo}
        videoUrl={selectedVideo?.embedUrl || null}
        title={selectedVideo?.title}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
