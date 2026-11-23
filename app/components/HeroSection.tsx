'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const HERO_VIDEO_ID = 'W-xfKXI225w';
const HERO_VIDEO_TITLE = 'Sritama Basu — Live Classical Performance Highlight';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const highlightStats = [
  { title: '10 Years AIR', desc: 'Junior Artist at All India Radio (Anchor & Reciter)' },
  { title: 'Dhrupad & Khayal', desc: 'Trained under Dagar Ashram & Vidushi Suranjana Bose' },
  { title: 'Global Performances', desc: 'Featured soloist at Bangamela Bay Area & US Concerts' },
  { title: 'Original Releases', desc: 'Acclaimed productions & original singles' },
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

// Every hero element enters from above and settles downward.
const slideDown = (delay: number) => ({
  initial: { opacity: 0, y: -28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(30);
  const [needsGesture, setNeedsGesture] = useState(false);

  useEffect(() => {
    let disposed = false;

    const setupPlayer = () => {
      if (disposed || !window.YT?.Player) return;

      playerRef.current = new window.YT.Player('hero-youtube-player', {
        videoId: HERO_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: 1,
          playlist: HERO_VIDEO_ID,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            event.target.setVolume(30);
            event.target.unMute();
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            const playing = event.data === window.YT.PlayerState.PLAYING;
            setIsPlaying(playing);
            if (playing) setNeedsGesture(false);
          },
        },
      });
    };

    if (window.YT?.Player) {
      setupPlayer();
    } else {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        setupPlayer();
      };
      if (!document.querySelector('script[data-youtube-iframe-api]')) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.dataset.youtubeIframeApi = 'true';
        document.head.appendChild(script);
      }
    }

    const nudge = window.setTimeout(() => {
      if (playerRef.current?.getPlayerState?.() !== window.YT?.PlayerState?.PLAYING) {
        setNeedsGesture(true);
      }
    }, 2500);

    return () => {
      disposed = true;
      window.clearTimeout(nudge);
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* player may already be gone */
      }
      playerRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.unMute();
      player.playVideo();
    }
  };

  const startWithSound = () => {
    const player = playerRef.current;
    if (!player) return;
    player.setVolume(30);
    player.unMute();
    player.playVideo();
    setNeedsGesture(false);
    setIsMuted(false);
    setVolume(30);
  };

  const changeVolume = (next: number) => {
    setVolume(next);
    const player = playerRef.current;
    if (!player) return;
    player.setVolume(next);
    if (next > 0) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  };

  const toggleMute = () => {
    const player = playerRef.current;
    const next = !isMuted;
    setIsMuted(next);
    if (!player) return;
    if (next) {
      player.mute();
    } else {
      player.unMute();
      if (volume === 0) changeVolume(30);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* ---------- Full-bleed video stage ---------- */}
      <div className="relative flex min-h-[92vh] items-center">
        <div className="absolute inset-0 overflow-hidden bg-stone-950">
          <div className="absolute left-1/2 top-1/2 h-[max(56.25vw,100vh)] w-[max(100vw,177.78vh)] -translate-x-1/2 -translate-y-1/2">
            <div id="hero-youtube-player" className="pointer-events-none h-full w-full" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/25 sm:to-stone-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/70" />
          <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-gold-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <motion.div
              {...slideDown(0.05)}
              className="inline-flex items-center rounded-full border border-gold-500/30 bg-stone-950/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-400 backdrop-blur-md sm:text-sm"
            >
              Classical &amp; Contemporary Vocalist
            </motion.div>

            <motion.h1
              {...slideDown(0.15)}
              className="font-serif text-4xl font-bold leading-tight tracking-tight text-gold-gradient sm:text-6xl lg:text-7xl"
            >
              Sritama Basu
            </motion.h1>

            <motion.p
              {...slideDown(0.25)}
              className="max-w-2xl text-base font-light leading-relaxed text-stone-200 sm:text-xl"
            >
              Honoring rich Indian classical traditions of Dhrupad and Khayal, while captivating audiences across Rabindra Sangeet, contemporary melodies, and live stage anchoring.
            </motion.p>

            <motion.div {...slideDown(0.35)} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/videos"
                className="rounded-full bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-stone-950 shadow-xl shadow-gold-500/20 transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold-500/40"
              >
                Explore Music
              </Link>
              <Link
                href="/bio"
                className="rounded-full border border-gold-500/30 bg-stone-950/70 px-7 py-3.5 text-sm font-semibold tracking-wider text-gold-300 backdrop-blur-md transition-all hover:border-gold-500/50 hover:bg-stone-900/80"
              >
                Read Biography
              </Link>
            </motion.div>
          </div>

          <motion.div {...slideDown(0.5)} className="mt-10 max-w-3xl space-y-4">
            <div className="flex items-center gap-4 rounded-2xl border border-gold-500/30 bg-stone-950/65 p-4 shadow-2xl backdrop-blur-md">
              <div className="flex h-9 items-end gap-1" aria-hidden="true">
                {[14, 26, 18, 34, 22, 30, 16].map((height, index) => (
                  <span
                    key={index}
                    className="w-1 animate-pulse rounded-full bg-gold-400"
                    style={{ height, animationDelay: `${index * 130}ms` }}
                  />
                ))}
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                  </span>
                  On Air · Now Playing
                </div>
                <p className="truncate text-sm font-medium text-stone-100">{HERO_VIDEO_TITLE}</p>
              </div>
              <div className="hidden shrink-0 text-right text-[10px] uppercase tracking-widest text-stone-500 sm:block">
                Live from the stage
                <br />
                Vol {volume}%
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {highlightStats.map((stat, index) => (
                <div
                  key={index}
                  title={stat.desc}
                  className="rounded-full border border-gold-500/20 bg-stone-950/60 px-3 py-1.5 text-[11px] text-stone-300 backdrop-blur-md transition-colors hover:border-gold-500/40 hover:text-gold-300"
                >
                  {stat.title}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {needsGesture && (
          <button
            onClick={startWithSound}
            className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-gold-500/50 bg-stone-950/80 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-gold-300 shadow-2xl backdrop-blur-md transition hover:bg-stone-900"
          >
            <Play className="h-4 w-4 fill-gold-300" />
            Tap to play with sound
          </button>
        )}

        <div className="absolute bottom-6 right-4 z-20 flex items-center gap-3 rounded-full border border-gold-500/25 bg-stone-950/75 px-3 py-2 shadow-xl backdrop-blur-md sm:right-8">
          <button
            onClick={togglePlay}
            className="text-gold-300 transition hover:text-gold-100"
            aria-label={isPlaying ? 'Pause hero video' : 'Play hero video'}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="text-gold-300 transition hover:text-gold-100"
            aria-label={isMuted ? 'Unmute hero video' : 'Mute hero video'}
          >
            {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={isMuted ? 0 : volume}
            onChange={(event) => changeVolume(Number(event.target.value))}
            aria-label="Hero video volume"
            className="h-1 w-20 cursor-pointer accent-gold-500 sm:w-28"
          />
          <span className="w-8 text-right text-[10px] tabular-nums text-gold-300">{volume}%</span>
        </div>
      </div>

      {/* ---------- Artistry & Genre Highlights ---------- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-24 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="font-serif text-3xl font-bold text-gold-gradient sm:text-4xl">
              Musical Artistry &amp; Genres
            </h2>
            <p className="mx-auto max-w-xl text-sm text-stone-400 sm:text-base">
              A comprehensive repertoire spanning rigorous classical traditions and modern melodic storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredGenres.map((genre, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="space-y-3 rounded-2xl border border-gold-500/20 bg-stone-900/60 p-6 shadow-lg backdrop-blur-md transition-all hover:border-gold-500/40"
              >
                <span className="inline-block rounded-full border border-gold-500/20 bg-gold-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold-300">
                  {genre.tag}
                </span>
                <h3 className="font-serif text-xl font-semibold text-stone-100">{genre.title}</h3>
                <p className="text-sm leading-relaxed text-stone-400">{genre.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
