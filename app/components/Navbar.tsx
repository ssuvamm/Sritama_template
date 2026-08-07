'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music, Disc3, Mic2, Image as ImageIcon, Mail, Home, User } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Biography', href: '/bio', icon: User },
  { name: 'Music Gallery', href: '/videos', icon: Mic2 },
  { name: 'Photo Gallery', href: '/images', icon: ImageIcon },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-950/85 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-stone-950/90 via-stone-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3 focus:outline-none">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-amber-700 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-stone-950 rounded-full flex items-center justify-center">
              <Disc3 className="w-5 h-5 text-gold-400 animate-spin-slow group-hover:rotate-45 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-gold-gradient">
              Sritama Basu
            </span>
            <span className="text-[10px] tracking-widest uppercase text-stone-400 font-sans font-medium">
              Vocalist & Performer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-900/60 p-1.5 rounded-full border border-gold-500/20 backdrop-blur-lg shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'text-gold-300 font-semibold'
                    : 'text-stone-300 hover:text-gold-400 hover:bg-stone-800/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-stone-400'}`} />
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-gold-500/15 via-gold-400/20 to-gold-500/15 rounded-full border border-gold-400/40 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Book / Listen CTA button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-stone-950 hover:brightness-110 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Booking & Contact
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl bg-stone-900/80 border border-gold-500/20 text-gold-400 hover:text-gold-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-b border-gold-500/20 bg-stone-950/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-w-md mx-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-stone-900 text-gold-300 border border-gold-500/30'
                        : 'text-stone-300 hover:bg-stone-900/60 hover:text-gold-400'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-gold-400' : 'text-stone-400'}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-stone-800">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-stone-950 shadow-md"
                >
                  Booking & Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}