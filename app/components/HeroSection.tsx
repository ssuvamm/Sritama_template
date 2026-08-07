'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Sparkles, Music, Award, Globe, Mic, ArrowRight } from 'lucide-react';
import VideoModal from './VideoModal';

const highlightStats = [
  {
    icon: Award,
    title: '10 Years AIR',
    desc: 'Junior Artist at All India Radio (Anchor & Reciter)',
  },
  {
    icon: Music,
    title: 'Dhrupad & Khayal',
    desc: 'Trained under Dagar Ashram & Vidushi Suranjana Bose',
  },
  {
    icon: Globe,
    title: 'Global Performances',
    desc: 'Featured soloist at Bangamela Bay Area & US Concerts',
  },
  {
    icon: Mic,
    title: 'Original Releases',
    desc: 'Acclaimed productions & original singles',
  },
];

const featuredGenres = [
  {
    title: 'Indian Classical (Dhrupad & Khayal)',
    description: 'Immersed in classic Dagar Ashram Dhrupad lineages and Khayal ragas.',
    tag: 'Classical Heritage',
  },
  {
    title: 'Rabindra Sangeet',
    description: 'Soulful renderings of Rabindranath Tagore compositions with traditional purity.',
    tag: 'Tagore Melodies',
  },
  {
    title: 'Contemporary & Folk',
    description: 'Versatile contemporary Bengali music, folk traditions, and recitations.',
    tag: 'Modern & Folk',
  },
];

export default function HeroSection() {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const featuredVideo = {
    url: 'https://www.youtube.com/embed/W-xfKXI225w',
    title: 'Sritama Basu — Live Classical Performance Highlight',
    thumbnail: '/2up.jpg',
  };

  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      {/* Light glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-medium backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Classical & Contemporary Vocalist</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gold-gradient leading-tight"
            >
              Sritama Basu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-stone-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl"
            >
              Honoring rich Indian classical traditions of Dhrupad and Khayal, while captivating audiences across Rabindra Sangeet, contemporary melodies, and live stage anchoring.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/videos"
                className="px-7 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-stone-950 hover:brightness-110 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-stone-950" />
                <span>Explore Music</span>
              </Link>

              <Link
                href="/bio"
                className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider bg-stone-900/80 border border-gold-500/30 text-gold-300 hover:bg-stone-800/80 hover:border-gold-500/50 transition-all backdrop-blur-md flex items-center gap-2"
              >
                <span>Read Biography</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Quick Stat Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-stone-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {highlightStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-gold-400">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-semibold text-stone-200">{stat.title}</span>
                    </div>
                    <p className="text-xs text-stone-400 leading-snug">{stat.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Hero Artist Card & Video Preview */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative group rounded-3xl overflow-hidden bg-glass-card border border-gold-500/30 shadow-2xl gold-border-glow p-3"
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-stone-900">
                <Image
                  src="/2bwup.jpg"
                  alt="Sritama Basu performing classical music"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                {/* Floating Video Highlight Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-950/80 backdrop-blur-md border border-gold-500/25 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400">
                      Featured Performance
                    </span>
                    <h4 className="text-xs font-semibold text-stone-100 line-clamp-1">
                      {featuredVideo.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedVideo({ url: featuredVideo.url, title: featuredVideo.title })}
                    className="w-10 h-10 rounded-full bg-gold-500 text-stone-950 flex items-center justify-center shadow-lg hover:scale-110 transition-transform shrink-0"
                    aria-label="Play featured performance video"
                  >
                    <Play className="w-5 h-5 fill-stone-950 ml-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Artistry & Genre Highlights */}
        <div className="mt-24 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gold-gradient">
              Musical Artistry & Genres
            </h2>
            <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto">
              A comprehensive repertoire spanning rigorous classical traditions and modern melodic storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGenres.map((genre, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-stone-900/60 border border-gold-500/20 hover:border-gold-500/40 backdrop-blur-md transition-all space-y-3 shadow-lg"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-medium">
                  {genre.tag}
                </span>
                <h3 className="font-serif text-xl font-semibold text-stone-100">{genre.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{genre.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        videoUrl={selectedVideo?.url || null}
        title={selectedVideo?.title}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
