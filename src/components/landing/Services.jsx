import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';
import SectionLabel from './SectionLabel';

import { useMediaQuery } from "react-responsive";

// pc
const serviceImages = [
  '/slzuby/auot8.webp',
   '/slzuby/folia.webp',
 '/slzuby/branding.webp',
 '/slzuby/tlac.webp',
 '/slzuby/graficdesing.webp',
 '/slzuby/putac.webp',


  
];


export default function Services() {


    const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });



  const { t } = useLanguage();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="relative py-24 lg:py-32" style={{ background: '#1A1B1E' }}>
      {/* Subtle red ambient glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(204,1,0,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <SectionLabel
          label={t.services.badge}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.services.items.map((service, i) => (
     
<motion.div
  key={i}
  initial={isDesktop ? { opacity: 0, y: 30 } : false}
  whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
  viewport={isDesktop ? { once: true, margin: '-40px' } : undefined}
  transition={isDesktop ? { duration: 0.5, delay: i * 0.08 } : undefined}
  onMouseEnter={isDesktop ? () => setHovered(i) : undefined}
  onMouseLeave={isDesktop ? () => setHovered(null) : undefined}
  className="group relative overflow-hidden rounded-2xl"
  style={{
    height: '400px',
    border:
      hovered === i || !isDesktop
        ? '1px solid rgba(204,1,0,0.35)'
        : '1px solid rgba(255,255,255,0.04)',
    transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
    boxShadow:
      hovered === i || !isDesktop
        ? '0 0 30px rgba(204,1,0,0.12), 0 20px 60px rgba(0,0,0,0.5)'
        : '0 4px 24px rgba(0,0,0,0.3)',
  }}
>
  <Link
    to={`/services/${service.slug}`}
    className="absolute inset-0 z-20"
    aria-label={service.title}
  />

 <img
    src={serviceImages[i]}
    alt={service.title}
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
    style={{
      transform: hovered === i || !isDesktop ? 'scale(1.08)' : 'scale(1)',
    }}
  />

   


  <div
    className="absolute inset-0 transition-all duration-500"
    style={{
      background:
        hovered === i || !isDesktop
          ? 'linear-gradient(to top, rgba(26,27,30,1) 0%, rgba(26,27,30,0.75) 45%, rgba(26,27,30,0.15) 100%)'
          : 'linear-gradient(to top, rgba(26,27,30,0.97) 0%, rgba(26,27,30,0.5) 55%, rgba(26,27,30,0.05) 100%)',
    }}
  />

  <div
    className="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500"
    style={{
      background: 'linear-gradient(to right, transparent, #CC0100, transparent)',
      opacity: hovered === i || !isDesktop ? 1 : 0,
      boxShadow:
        hovered === i || !isDesktop
          ? '0 0 16px rgba(204,1,0,0.6)'
          : 'none',
    }}
  />

  <div className="relative h-full flex flex-col justify-end p-6">
    <span
      className="text-xs font-mono tracking-widest uppercase mb-1.5"
      style={{ color: '#CC0100' }}
    >
      {service.subtitle}
    </span>

    <h3 className="text-xl lg:text-2xl font-space font-bold text-white mb-2">
      {service.title}
    </h3>

    <div
      className="overflow-hidden transition-all duration-500"
      style={{
        maxHeight: hovered === i || !isDesktop ? '80px' : '0',
        opacity: hovered === i || !isDesktop ? 1 : 0,
      }}
    >
      <p
        className="text-sm leading-relaxed mb-3"
        style={{ color: 'rgba(255,255,255,0.5)' }}
      >
        {service.description}
      </p>
    </div>

    <div
      className="flex items-center justify-between transition-all duration-400"
      style={{
        opacity: hovered === i || !isDesktop ? 1 : 0.4,
        transform:
          hovered === i || !isDesktop
            ? 'translateY(0)'
            : 'translateY(6px)',
      }}
    >
      <span
        className="text-xs font-mono"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        {service.specs}
      </span>

      <div
        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background:
            hovered === i || !isDesktop
              ? '#CC0100'
              : 'rgba(204,1,0,0.2)',
        }}
      >
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>
    </div>
  </div>
</motion.div>


          ))}
        </div>
      </div>

      {/* Bottom light-leak */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(204,1,0,0.2), rgba(204,1,0,0.5), rgba(204,1,0,0.2), transparent)' }}
      />
    </section>
  );
}