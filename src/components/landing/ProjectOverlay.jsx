import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProjectOverlay({ projects, activeIndex, onClose, onNavigate }) {
  const project = projects[activeIndex];
  const [touchStart, setTouchStart] = useState(null);
  const navigate = useNavigate();

  const goPrev = useCallback(() => {
    if (activeIndex > 0) onNavigate(activeIndex - 1);
  }, [activeIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (activeIndex < projects.length - 1) onNavigate(activeIndex + 1);
  }, [activeIndex, projects.length, onNavigate]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   goPrev();
      if (e.key === 'ArrowRight')  goNext();
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
    if (delta > 50)  goNext();
    if (delta < -50) goPrev();
    setTouchStart(null);
  };

  const handleViewProject = () => {
    onClose();
    navigate(`/projects/${project.slug}`);
  };

  const scrollToContact = () => {
    onClose();
    navigate('/');
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
      style={{ background: 'rgba(26,27,30,0.92)', backdropFilter: 'blur(24px)' }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-200 hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs font-mono z-20" style={{ color: 'rgba(255,255,255,0.3)' }}>
        {activeIndex + 1} / {projects.length}
      </div>

      {/* Prev arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        disabled={activeIndex === 0}
        className="absolute left-3 sm:left-6 w-11 h-11 rounded-full flex items-center justify-center z-20 transition-all duration-200"
        style={{
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.1)',
          opacity: activeIndex === 0 ? 0.25 : 1,
          cursor: activeIndex === 0 ? 'default' : 'pointer',
        }}
        onMouseEnter={e => { if (activeIndex > 0) e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        disabled={activeIndex === projects.length - 1}
        className="absolute right-3 sm:right-6 w-11 h-11 rounded-full flex items-center justify-center z-20 transition-all duration-200"
        style={{
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.1)',
          opacity: activeIndex === projects.length - 1 ? 0.25 : 1,
          cursor: activeIndex === projects.length - 1 ? 'default' : 'pointer',
        }}
        onMouseEnter={e => { if (activeIndex < projects.length - 1) e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Modal card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
          style={{
            background: '#26272C',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(204,1,0,0.08)',
            maxHeight: '88vh',
            overflowY: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative w-full aspect-video overflow-hidden">
            <img
              src={project.heroImage || project.images?.[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(38,39,44,1) 100%)' }}
            />
            {/* Category pill */}
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase"
                style={{ background: 'rgba(204,1,0,0.15)', border: '1px solid rgba(204,1,0,0.3)', color: '#CC0100' }}
              >
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-space font-bold text-white mb-2">{project.title}</h2>
            <p className="text-xs font-mono mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {project.specs}
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {project.desc}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleViewProject}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(204,1,0,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
                style={{ background: '#CC0100' }}
              >
                Zobraziť projekt
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(204,1,0,0.4)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >
                Dopytovať sa
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}