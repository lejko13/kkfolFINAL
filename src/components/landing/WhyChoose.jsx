import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FolderCheck, Award, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import SectionLabel from './SectionLabel';
import { useMediaQuery } from "react-responsive";

const icons = [Calendar, FolderCheck, Award, Zap];

export default function WhyChoose() {
  const { t } = useLanguage();



  
      const isDesktop = useMediaQuery({
      query: "(min-width: 700px)",
    });
  
  

  return (
    <section id="why" className="relative py-24 lg:py-32" style={{ background: '#1A1B1E' }}>
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right bottom, rgba(204,1,0,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionLabel
          label={t.why.badge}
          title={t.why.title}
          description={t.why.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.why.stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
  key={i}
  initial={isDesktop ? { opacity: 0, y: 30 } : false}
  whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
  viewport={isDesktop ? { once: true, margin: '-40px' } : undefined}
  transition={
    isDesktop
      ? { duration: 0.5, delay: i * 0.1 }
      : undefined
  }
  className="group relative overflow-hidden rounded-2xl p-8 text-center cursor-default"
  style={{
    background: isDesktop
      ? 'rgba(38,39,44,0.6)'
      : 'rgba(204,1,0,0.04)',

    border: isDesktop
      ? '1px solid rgba(255,255,255,0.06)'
      : '1px solid rgba(204,1,0,0.3)',

    boxShadow: isDesktop
      ? 'none'
      : '0 0 30px rgba(204,1,0,0.1), 0 10px 40px rgba(0,0,0,0.3)',

    transition: isDesktop ? 'all 0.4s ease' : 'none',
  }}
  onMouseEnter={e => {
    if (!isDesktop) return;

    e.currentTarget.style.border = '1px solid rgba(204,1,0,0.3)';
    e.currentTarget.style.background = 'rgba(204,1,0,0.04)';
    e.currentTarget.style.boxShadow =
      '0 0 30px rgba(204,1,0,0.1), 0 10px 40px rgba(0,0,0,0.3)';
    e.currentTarget.style.transform = 'translateY(-3px)';
  }}
  onMouseLeave={e => {
    if (!isDesktop) return;

    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
    e.currentTarget.style.background = 'rgba(38,39,44,0.6)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'translateY(0)';
  }}
>
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-400 group-hover:scale-110"
                  style={{ background: 'rgba(204,1,0,0.1)', border: '1px solid rgba(204,1,0,0.15)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#CC0100' }} />
                </div>

                {/* Value */}
                <div className="text-4xl lg:text-5xl font-space font-bold text-white mb-2 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1.5">
                  {stat.label}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {stat.desc}
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