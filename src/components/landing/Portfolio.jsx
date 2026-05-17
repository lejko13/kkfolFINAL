import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import SectionLabel from './SectionLabel';
import { projectData ,Mainproject} from '@/lib/pageData';
import ProjectLightbox from './ProjectLightbox';
import { useMediaQuery } from "react-responsive";

// const allProjects = Object.entries(projectData).map(([slug, p]) => ({ slug, ...p, src: p.heroImage }));

const allProjects = Object.entries(Mainproject).map(([slug, p]) => ({ slug, ...p, src: p.heroImage }));


export default function Portfolio() {


    const isDesktop = useMediaQuery({
  query: "(min-width: 700px)",
});




  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32" style={{ background: '#26272C' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(204,1,0,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionLabel
          label={t.portfolio.badge}
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(204,1,0,0.2), rgba(204,1,0,0.4), rgba(204,1,0,0.2), transparent)' }}
      />

      <AnimatePresence>
        {activeIndex !== null && (
          <ProjectLightbox
            projects={allProjects}
            activeIndex={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNavigate={setActiveIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onClick }) {
  const [hovered, setHovered] = useState(false);

   const isDesktop = useMediaQuery({
  query: "(min-width: 700px)",
});

  return (
   <motion.button
  initial={isDesktop ? { opacity: 0, y: 24 } : false}
  whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
  viewport={isDesktop ? { once: true, margin: '-40px' } : undefined}
  transition={
    isDesktop
      ? { duration: 0.4, delay: index * 0.06 }
      : undefined
  }
  onMouseEnter={() => isDesktop && setHovered(true)}
  onMouseLeave={() => isDesktop && setHovered(false)}
  onClick={onClick}
  className="relative overflow-hidden rounded-2xl w-full aspect-[2.5/2]"
  style={{
    border: isDesktop
      ? hovered
        ? '1px solid rgba(204,1,0,0.3)'
        : '1px solid rgba(255,255,255,0.04)'
      : '1px solid rgba(204,1,0,0.3)',

    boxShadow: isDesktop
      ? hovered
        ? '0 0 24px rgba(204,1,0,0.1)'
        : 'none'
      : '0 0 24px rgba(204,1,0,0.1)',

    transition: 'border-color 0.3s, box-shadow 0.3s',
  }}
>
      <div className="   h-full">
        <img
          src={project.src}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: hovered
              ? 'linear-gradient(to top, rgba(26,27,30,0.95) 0%, rgba(26,27,30,0.5) 50%, transparent 100%)'
              : 'linear-gradient(to top, rgba(26,27,30,0.85) 0%, rgba(26,27,30,0.1) 70%, transparent 100%)',
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#CC0100' }}>{project.category}</span>
          <h3 className="text-base font-space font-bold text-white mt-1">{project.title}</h3>
          <p
            className="text-xs font-mono mt-1 transition-all duration-300"
            style={{ color: 'rgba(255,255,255,0.4)', opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(6px)' }}
          >{project.specs}</p>
        </div>
      </div>
    </motion.button>
  );
}