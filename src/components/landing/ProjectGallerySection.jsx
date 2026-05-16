import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projectData } from '@/lib/pageData';
import ProjectCard from './ProjectCard';
import ProjectOverlay from './ProjectOverlay';
import SectionLabel from './SectionLabel';

// filterSlug: optional — pre-filter to a specific serviceSlug (used on service pages)
export default function ProjectGallerySection({ filterSlug = null, title, description, label }) {
  const [overlayIndex, setOverlayIndex] = useState(null);

  const allProjects = useMemo(
    () => Object.entries(projectData).map(([slug, p]) => ({ slug, ...p })),
    []
  );

  const projects = useMemo(() => {
    if (!filterSlug) return allProjects;
    return allProjects.filter(p => p.serviceSlug === filterSlug);
  }, [filterSlug, allProjects]);

  return (
    <section className="py-16 lg:py-24 relative" style={{ background: '#1A1B1E' }}>
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(204,1,0,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {(title || label) && (
          <SectionLabel
            label={label || 'Projekty'}
            title={title || 'Súvisiace projekty'}
            description={description}
          />
        )}

        {/* Responsive grid — no filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              onClick={() => setOverlayIndex(i)}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center py-16 text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Žiadne projekty
          </p>
        )}
      </div>

      {/* Project overlay */}
      <AnimatePresence>
        {overlayIndex !== null && (
          <ProjectOverlay
            projects={projects}
            activeIndex={overlayIndex}
            onClose={() => setOverlayIndex(null)}
            onNavigate={setOverlayIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}