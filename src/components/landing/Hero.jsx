import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const obrazok = '/mainhalvny.png'

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: '#1A1B1E' }}>
        <img
          src={obrazok}
          alt="Luxury wrapped vehicle"
          className="w-full h-full object-cover opacity-70"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(26,27,30,0.6) 0%, rgba(26,27,30,0.35) 40%, rgba(26,27,30,1) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26,27,30,0.85) 0%, rgba(26,27,30,0.25) 65%, transparent 100%)',
          }}
        />
        {/* Red ambient glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]"
          style={{ background: 'radial-gradient(ellipse, rgba(204,1,0,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
      </div>

      {/* Red glow orb */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(204,1,0,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider mb-8"
              style={{
                border: '1px solid rgba(204,1,0,0.3)',
                background: 'rgba(204,1,0,0.08)',
                color: '#CC0100',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: '#CC0100' }} />
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-7xl lg:text-9xl font-space font-bold tracking-tight leading-none mb-6 text-white"
          >
            {t.hero.headline1}
            <br />
            <span style={{ color: '#CC0100' }}>{t.hero.headline2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg max-w-lg mb-10 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(204,1,0,0.5), 0 8px 24px rgba(204,1,0,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
              style={{ background: '#CC0100' }}
            >
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('portfolio')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <Play className="w-4 h-4" />
              {t.hero.portfolio}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #1A1B1E, transparent)' }}
      />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div
          className="w-5 h-9 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full"
            style={{ background: '#CC0100' }}
          />
        </div>
      </motion.div>
    </section>
  );
}