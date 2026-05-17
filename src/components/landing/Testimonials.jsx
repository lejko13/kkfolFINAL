import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import SectionLabel from './SectionLabel';
import { useMediaQuery } from "react-responsive";

export default function Testimonials() {
  const { t } = useLanguage();
  const reviews = t.reviews.items;




    const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });



  return (
    <section id="reviews" className="relative py-24 lg:py-32" style={{ background: '#26272C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel
          label={t.reviews.badge}
          title={t.reviews.title}
          description={t.reviews.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
           <motion.div
  key={i}
  initial={isDesktop ? { opacity: 0, y: 24 } : false}
  whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
  viewport={isDesktop ? { once: true, margin: '-40px' } : undefined}
  transition={
    isDesktop
      ? { duration: 0.4, delay: i * 0.1 }
      : undefined
  }
  className="relative flex flex-col p-8 rounded-2xl"
  style={{
    background: isDesktop
      ? 'rgba(26,27,30,0.85)'
      : 'rgba(204,1,0,0.04)',

    border: isDesktop
      ? '1px solid rgba(255,255,255,0.06)'
      : '1px solid rgba(204,1,0,0.3)',

    boxShadow: isDesktop
      ? '0 20px 60px rgba(0,0,0,0.3)'
      : '0 0 30px rgba(204,1,0,0.1), 0 10px 40px rgba(0,0,0,0.3)',
  }}
>
              {/* Top accent */}
              <div className="absolute top-0 left-6 w-10 h-0.5 rounded-full" style={{ background: '#CC0100' }} />

              {/* Quote icon */}
              <Quote className="w-6 h-6 mb-4" style={{ color: 'rgba(204,1,0,0.4)' }} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="w-3.5 h-3.5" style={{ fill: '#CC0100', color: '#CC0100' }} />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 text-sm leading-relaxed italic flex-1 mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="text-sm font-semibold text-white">{review.name}</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {t.reviews.source}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}