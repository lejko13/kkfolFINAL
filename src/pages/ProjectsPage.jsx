import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageShell from '@/components/landing/PageShell';
import SectionLabel from '@/components/landing/SectionLabel';
import ProjectLightbox from '@/components/landing/ProjectLightbox';
import { projectData } from '@/lib/pageData';
import { useMediaQuery } from "react-responsive";





const projects = Object.entries(projectData).map(([slug, p]) => ({ slug, ...p, src: p.heroImage }));

function ProjectCard({ project, index, onClick }) {
  const [hovered, setHovered] = useState(false);


     const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  
  return (
    <motion.button
      initial={isDesktop ? { opacity: 0, y: 24 } : false}
whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
viewport={isDesktop ? { once: true, margin: '-30px' } : undefined}
transition={
  isDesktop
    ? { duration: 0.4, delay: index * 0.05 }
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
      : '1px solid rgba(255,255,255,0.05)'
    : '1px solid rgba(204,1,0,0.3)',

  boxShadow: isDesktop
    ? hovered
      ? '0 0 24px rgba(204,1,0,0.1)'
      : 'none'
    : '0 0 24px rgba(204,1,0,0.1)',

  transition: isDesktop
    ? 'border-color 0.3s, box-shadow 0.3s'
    : 'none',
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

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <PageShell>
      <section className="py-16 lg:py-24" style={{ background: '#1A1B1E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel
            label="Portfólio"
            title="Naše projekty"
            description="Ukážky našej práce, ktoré hovoria za nás."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} onClick={() => setActiveIndex(i)} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && (
          <ProjectLightbox
            projects={projects}
            activeIndex={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNavigate={setActiveIndex}
          />
        )}
      </AnimatePresence>
    </PageShell>
  );
}