import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import { useMediaQuery } from "react-responsive";

export default function ProjectLightbox({ projects, activeIndex, onClose, onNavigate }) {
  const project = projects[activeIndex];
  const total = projects.length;

  const prev = useCallback(() => onNavigate((activeIndex - 1 + total) % total), [activeIndex, total, onNavigate]);
  const next = useCallback(() => onNavigate((activeIndex + 1) % total), [activeIndex, total, onNavigate]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [prev, next, onClose]);


   const isDesktop = useMediaQuery({
  query: "(min-width: 700px)",
});

  return (
    <motion.div
  initial={isDesktop ? { opacity: 0 } : false}
  animate={isDesktop ? { opacity: 1 } : {}}
  exit={isDesktop ? { opacity: 0 } : undefined}
  transition={isDesktop ? { duration: 0.25 } : undefined}
  className="fixed inset-0 z-50 flex items-center justify-center"
  style={{
    background: 'rgba(10,11,14,0.92)',
    backdropFilter: 'blur(12px)',
  }}
  onClick={onClose}
>
  {/* Close */}
  <button
    onClick={onClose}
    className={`absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center z-10 ${
      isDesktop
        ? 'text-white/60 hover:text-white transition-colors'
        : 'text-white'
    }`}
    style={{
      background: isDesktop
        ? 'rgba(255,255,255,0.08)'
        : 'rgba(204,1,0,0.12)',

      border: isDesktop
        ? '1px solid rgba(255,255,255,0.1)'
        : '1px solid rgba(204,1,0,0.3)',

      boxShadow: !isDesktop
        ? '0 0 20px rgba(204,1,0,0.15)'
        : 'none',
    }}
  >
    <X className="w-4 h-4" />
  </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs font-mono px-4 py-1.5 rounded-full"
        style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
        {activeIndex + 1} / {total}
      </div>

      {/* Image */}
      <motion.div
  key={activeIndex}
  initial={isDesktop ? { opacity: 0, scale: 0.96 } : false}
  animate={isDesktop ? { opacity: 1, scale: 1 } : {}}
  exit={
    isDesktop
      ? { opacity: 0, scale: 0.96 }
      : undefined
  }
  transition={isDesktop ? { duration: 0.3 } : undefined}
  className="relative max-w-5xl w-full mx-16 rounded-2xl overflow-hidden"
  style={{
    border: isDesktop
      ? '1px solid rgba(255,255,255,0.06)'
      : '1px solid rgba(204,1,0,0.25)',

    boxShadow: !isDesktop
      ? '0 0 30px rgba(204,1,0,0.08)'
      : 'none',
  }}
  onClick={e => e.stopPropagation()}
>
        <img
          src={project.heroImage || project.src}
          alt={project.title}
          className="w-full object-cover max-h-[75vh]"
        />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-5"
          style={{ background: 'linear-gradient(to top, rgba(26,27,30,0.95) 0%, transparent 100%)' }}>
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#CC0100' }}>{project.category}</span>
          <h3 className="text-lg font-space font-bold text-white mt-0.5">{project.title}</h3>
          <p className="text-xs font-mono mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{project.specs}</p>
        </div>
      </motion.div>

      {/* Prev */}
      {/* Prev */}
<button
  onClick={e => {
    e.stopPropagation();
    prev();
  }}
  className={`absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center ${
    isDesktop
      ? 'text-white/60 hover:text-white transition-all'
      : 'text-white'
  }`}
  style={{
    background: isDesktop
      ? 'rgba(255,255,255,0.07)'
      : 'rgba(204,1,0,0.12)',

    border: isDesktop
      ? '1px solid rgba(255,255,255,0.1)'
      : '1px solid rgba(204,1,0,0.3)',

    boxShadow: !isDesktop
      ? '0 0 20px rgba(204,1,0,0.15)'
      : 'none',
  }}
>
  <ChevronLeft className="w-5 h-5" />
</button>

{/* Next */}
<button
  onClick={e => {
    e.stopPropagation();
    next();
  }}
  className={`absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center ${
    isDesktop
      ? 'text-white/60 hover:text-white transition-all'
      : 'text-white'
  }`}
  style={{
    background: isDesktop
      ? 'rgba(255,255,255,0.07)'
      : 'rgba(204,1,0,0.12)',

    border: isDesktop
      ? '1px solid rgba(255,255,255,0.1)'
      : '1px solid rgba(204,1,0,0.3)',

    boxShadow: !isDesktop
      ? '0 0 20px rgba(204,1,0,0.15)'
      : 'none',
  }}
>
  <ChevronRight className="w-5 h-5" />
</button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); onNavigate(i); }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? '20px' : '6px',
              height: '6px',
              background: i === activeIndex ? '#CC0100' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}