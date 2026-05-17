import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Palette, Printer, Wrench } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import SectionLabel from './SectionLabel';
import { useMediaQuery } from "react-responsive";

const icons = [MessageSquare, Palette, Printer, Wrench];

export default function Process() {
  const { t } = useLanguage();

     const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  return (
    <section id="process" className="relative py-24 lg:py-32" style={{ background: '#1A1B1E' }}>
      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(204,1,0,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionLabel
          label={t.process.badge}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line desktop */}
          <div
            className="hidden lg:block absolute top-[28px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(204,1,0,0.4), rgba(204,1,0,0.4), transparent)' }}
          />

          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
             <motion.div
  key={i}
  initial={isDesktop ? { opacity: 0, y: 30 } : false}
  whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
  viewport={isDesktop ? { once: true, margin: '-40px' } : undefined}
  transition={
    isDesktop
      ? { duration: 0.5, delay: i * 0.15 }
      : undefined
  }
  className="group relative text-center"
>
  {/* Step number badge */}
  <div
    className={`relative z-10 mx-auto mb-5 w-14 h-14 rounded-2xl flex items-center justify-center ${
      isDesktop
        ? 'transition-all duration-500 group-hover:scale-110'
        : ''
    }`}
    style={{
      background: 'rgba(204,1,0,0.1)',

      border: isDesktop
        ? '1px solid rgba(204,1,0,0.25)'
        : '1px solid rgba(204,1,0,0.4)',

      boxShadow: isDesktop
        ? '0 0 0 0 rgba(204,1,0,0)'
        : '0 0 20px rgba(204,1,0,0.3)',

      transition: isDesktop ? 'all 0.4s ease' : 'none',
    }}
    onMouseEnter={e => {
      if (!isDesktop) return;

      e.currentTarget.style.boxShadow =
        '0 0 20px rgba(204,1,0,0.3)';
    }}
    onMouseLeave={e => {
      if (!isDesktop) return;

      e.currentTarget.style.boxShadow =
        '0 0 0 0 rgba(204,1,0,0)';
    }}
  >
    <Icon className="w-6 h-6" style={{ color: '#CC0100' }} />
  </div>

  <span
    className="text-xs font-mono"
    style={{ color: 'rgba(204,1,0,0.45)' }}
  >
    {step.number}
  </span>

  <h3 className="text-base font-space font-bold text-white mt-2 mb-2">
    {step.title}
  </h3>

  <p
    className="text-sm leading-relaxed"
    style={{ color: 'rgba(255,255,255,0.35)' }}
  >
    {step.desc}
  </p>
</motion.div>
            );
          })}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(204,1,0,0.2), rgba(204,1,0,0.4), rgba(204,1,0,0.2), transparent)' }}
      />
    </section>
  );
}