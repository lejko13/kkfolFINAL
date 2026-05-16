import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageShell from '@/components/landing/PageShell';
import { projectData } from '@/lib/pageData';
import ImageLightbox from '@/components/landing/ImageLightbox';
import ProjectCard from '@/components/landing/ProjectCard';

function ProjectPageContent() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectData[slug];
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/50 mb-4">Projekt nenájdený</p>
          <Link to="/projects" className="text-[#CC0100] hover:underline">← Späť na projekty</Link>
        </div>
      </div>
    );
  }

  const relatedProjects = (project.relatedSlugs || [])
    .map(s => ({ slug: s, ...projectData[s] }))
    .filter(p => p.title)
    .slice(0, 3);

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative" style={{ background: '#1A1B1E' }}>
        <div className="relative h-[70vh] overflow-hidden">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,27,30,0.3) 0%, rgba(26,27,30,1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,27,30,0.6) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm mb-6 transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                <ArrowLeft className="w-4 h-4" />
                Späť
              </button>
              <span className="text-xs font-mono tracking-widest uppercase mb-2 block" style={{ color: '#CC0100' }}>
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-6xl font-space font-bold text-white mb-2">{project.title}</h1>
              <p className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>{project.specs}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24" style={{ background: '#1A1B1E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-space font-bold text-white mb-4">O projekte</h2>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{project.desc}</p>
            </div>
            <div className="rounded-2xl p-6" style={{ background: 'rgba(38,39,44,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Detaily
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Kategória</span>
                  <p className="text-sm text-white">{project.category}</p>
                </div>
                <div>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Materiály</span>
                  <p className="text-sm text-white">{project.specs}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 lg:py-16" style={{ background: '#26272C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-space font-bold text-white mb-8">Galéria</h2>
          <button
            className="w-full rounded-2xl overflow-hidden mb-4 aspect-video block"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            onClick={() => setLightboxIndex(0)}
          >
            <img
              src={project.images[0]}
              alt={`${project.title} 1`}
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </button>
          <div className="flex gap-3">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="flex-1 rounded-xl overflow-hidden aspect-video transition-all duration-300"
                style={{ border: '2px solid rgba(255,255,255,0.04)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(204,1,0,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; }}
              >
                <img src={img} alt={`thumb ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-400" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-24" style={{ background: '#1A1B1E' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-space font-bold text-white mb-8">Súvisiace projekty</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProjects.map((rp, i) => (
                <ProjectCard
                  key={rp.slug}
                  project={rp}
                  index={i}
                  linkTo={`/projects/${rp.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-24" style={{ background: '#26272C' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-space font-bold text-white mb-4">
            Podobný projekt pre vás?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Kontaktujte nás a porozprávame sa o vašej vízii.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(204,1,0,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
            style={{ background: '#CC0100' }}
          >
            Nezáväzná ponuka
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Global Image Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <ImageLightbox
            images={project.images}
            activeIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function ProjectPage() {
  return (
    <PageShell>
      <ProjectPageContent />
    </PageShell>
  );
}