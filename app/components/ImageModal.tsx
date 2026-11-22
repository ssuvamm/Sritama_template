'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string | null;
  title?: string;
  description?: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imageSrc, title, description, onClose }: ImageModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen || !imageSrc) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-lg"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] w-full bg-stone-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col gold-border-glow my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/90 z-10">
              <h3 className="font-serif text-lg sm:text-xl font-medium text-gold-400 truncate pr-4">
                {title || 'Gallery Photograph'}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-stone-400 hover:text-gold-300 hover:bg-stone-800 transition-colors focus:outline-none"
                aria-label="Close image lightbox"
              >
                Close
              </button>
            </div>

            {/* Image Content */}
            <div className="relative flex-1 min-h-[45vh] max-h-[65vh] bg-black flex items-center justify-center overflow-hidden p-2">
              <Image
                src={imageSrc}
                alt={title || 'Sritama Basu gallery photo'}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption Footer */}
            {description && (
              <div className="px-6 py-4 border-t border-stone-800 bg-stone-950/90 text-stone-300 text-sm sm:text-base leading-relaxed">
                <p>{description}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
