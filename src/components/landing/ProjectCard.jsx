import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// linkTo  → navigates to a page (used on grids)
// onClick → triggers a callback (used for image lightbox inside detail page)
export default function ProjectCard({ project, index = 0, wide = false, linkTo, onClick }) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div className="aspect-video">
      <img
        src={project.heroImage || project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
      />
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: hovered
            ? 'linear-gradient(to top, rgba(26,27,30,0.95) 0%, rgba(26,27,30,0.6) 50%, rgba(26,27,30,0.15) 100%)'
            : 'linear-gradient(to top, rgba(26,27,30,0.85) 0%, rgba(26,27,30,0.15) 60%, transparent 100%)',
        }}
      />
      {/* Arrow */}
      <div
        className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: '#CC0100',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1) rotate(0deg)' : 'scale(0.6) rotate(-45deg)',
          boxShadow: '0 0 16px rgba(204,1,0,0.5)',
        }}
      >
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>
      {/* Info */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#CC0100' }}>{project.category}</span>
        <h3 className="text-lg font-space font-bold text-white mt-1">{project.title}</h3>
        <p
          className="text-xs font-mono mt-1 transition-all duration-300"
          style={{
            color: 'rgba(255,255,255,0.4)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
          }}
        >
          {project.specs}
        </p>
        <div
          className="mt-3 transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(8px)' }}
        >
          <span className="text-xs font-semibold text-white border-b border-white/40 pb-px">
            Zobraziť projekt
          </span>
        </div>
      </div>
    </div>
  );

  const wrapperClass = `group relative overflow-hidden rounded-2xl ${wide ? 'md:col-span-2' : ''}`;
  const wrapperStyle = {
    border: hovered ? '1px solid rgba(204,1,0,0.3)' : '1px solid rgba(255,255,255,0.04)',
    boxShadow: hovered ? '0 0 24px rgba(204,1,0,0.1)' : 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={wrapperClass}
      style={wrapperStyle}
    >
      {linkTo ? (
        <Link to={linkTo} className="block">
          {inner}
        </Link>
      ) : (
        <button className="block w-full text-left" onClick={onClick}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}