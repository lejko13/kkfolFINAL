import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Pure image viewer lightbox — accepts images[] of strings (URLs) and optional captions[]
export default function ImageLightbox({ images, activeIndex, captions, onClose, onNavigate }) {
  const [touchStart, setTouchStart] = useState(null);

  const goPrev = useCallback(() => {
    if (activeIndex > 0) onNavigate(activeIndex - 1);
  }, [activeIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (activeIndex < images.length - 1) onNavigate(activeIndex + 1);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goPrev, goNext]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (delta > 50) goNext();
    if (delta < -50) goPrev();
    setTouchStart(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: 'rgba(26,27,30,0.97)', backdropFilter: 'blur(24px)' }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>
        {activeIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      {activeIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-4 sm:left-8 w-11 h-11 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
      )}

      {/* Next */}
      {activeIndex < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-4 sm:right-8 w-11 h-11 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center w-full max-w-5xl px-16 sm:px-24"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full rounded-2xl overflow-hidden" style={{ maxHeight: '70vh' }}>
            <img
              src={images[activeIndex]}
              alt={captions?.[activeIndex] || `Image ${activeIndex + 1}`}
              className="w-full h-full object-contain"
              style={{ maxHeight: '70vh' }}
            />
          </div>
          {captions?.[activeIndex] && (
            <p className="mt-4 text-sm text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {captions[activeIndex]}
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}