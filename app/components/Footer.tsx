import Link from 'next/link';
import { Disc3 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gold-500/20 bg-stone-950 text-stone-400 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent blur-xs" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-amber-600 flex items-center justify-center text-stone-950 shadow-md">
                <Disc3 className="w-4 h-4 animate-spin-slow" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gold-gradient">
                Sritama Basu
              </h3>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed max-w-md">
              Accomplished vocalist, former All India Radio artist, and versatile performer
              specializing in Classical (Dhrupad &amp; Khayal), Rabindra Sangeet, Contemporary, and Folk music.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-gold-300">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/bio" className="hover:text-gold-400 transition-colors">Biography</Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-gold-400 transition-colors">Music Gallery</Link>
              </li>
              <li>
                <Link href="/images" className="hover:text-gold-400 transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact &amp; Booking</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold-300">Connect</h4>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.youtube.com/@SritamaBasu/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold-500/20 px-4 py-2 text-stone-300 transition-colors hover:border-gold-500/40 hover:text-gold-300"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/sritamabasu/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold-500/20 px-4 py-2 text-stone-300 transition-colors hover:border-gold-500/40 hover:text-gold-300"
              >
                Instagram
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-gold-500/20 px-4 py-2 text-stone-300 transition-colors hover:border-gold-500/40 hover:text-gold-300"
              >
                Email
              </Link>
            </div>
            <p className="text-xs text-stone-400">
              For bookings, live performances, and collaborations.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Sritama Basu. All rights reserved.</p>
          <p>Crafted for timeless music</p>
        </div>
      </div>
    </footer>
  );
}
