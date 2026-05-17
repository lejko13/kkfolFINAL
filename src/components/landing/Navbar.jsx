import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

const serviceLinks = [
  { slug: 'vehicle-wraps', label: 'Polepy vozidiel' },
  { slug: 'car-protection-films', label: 'Ochranné fólie' },
  { slug: 'branding', label: 'Branding' },
  { slug: 'printing', label: 'Veľkoplošná tlač' },
  { slug: 'graphic-design', label: 'Grafický dizajn' },
  { slug: 'signage', label: 'Reklamné pútače' },
];

export default function Navbar() {

    const isDesktop = useMediaQuery({
  query: "(min-width: 700px)",
});




  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <>
     <motion.nav
  initial={isDesktop ? { y: -100 } : false}
  animate={isDesktop ? { y: 0 } : {}}
  transition={
    isDesktop
      ? { duration: 0.6, ease: 'easeOut' }
      : undefined
  }
  style={{
    backgroundColor: scrolled ? 'rgba(26, 27, 30, 0.95)' : 'transparent',
    borderBottom: scrolled
      ? '1px solid rgba(255,255,255,0.06)'
      : '1px solid transparent',
  }}
  className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl"
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="flex items-center group"
            >
              <img
                src="https://media.base44.com/images/public/6a0563351d1f1fbb0b5f75ba/c7b049c4f_LOGO.png"
                alt="KKFOL"
                className="h-8 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-0.5">
              <Link
                to="/"
                 onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
                className="relative px-3 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors group"
              >
                {t.nav.home}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: '#CC0100' }} />
              </Link>

              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(v => !v)}
                  className="relative px-3 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors group flex items-center gap-1"
                >
                  {t.nav.services}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: '#CC0100' }} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-52 rounded-2xl overflow-hidden py-2"
                      style={{
                        background: 'rgba(26,27,30,0.97)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                      }}
                    >
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-white/60 hover:text-white transition-colors"
                          style={{ transition: 'all 0.15s' }}
                          onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(204,1,0,0.08)'; }}
                          onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; }}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/projects"
                className="relative px-3 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors group"
              >
                {t.nav.projects}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: '#CC0100' }} />
              </Link>

              <Link
                to="/about"
                className="relative px-3 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors group"
              >
                {t.nav.about}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: '#CC0100' }} />
              </Link>

              <button
                onClick={() => scrollTo('contact')}
                className="relative px-3 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors group"
              >
                {t.nav.contact}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: '#CC0100' }} />
              </button>

              <Link
                to="/faq"
                className="relative px-3 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors group"
              >
                FAQ
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: '#CC0100' }} />
              </Link>
            </div>

            {/* Right side CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(204,1,0,0.5), 0 4px 16px rgba(204,1,0,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
                style={{ background: '#CC0100' }}
              >
                {t.nav.cta}
              </button>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-white">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.25 }}
  className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 overflow-y-auto py-20"
  style={{
    background: 'rgba(26, 27, 30, 0.97)',
    backdropFilter: 'blur(20px)',
  }}
>
  <div>
    <Link
      to="/"
      onClick={() => setMobileOpen(false)}
      className="text-2xl font-space font-semibold text-white hover:text-[#CC0100] transition-colors"
    >
      {t.nav.home}
    </Link>
  </div>

  <div className="text-center">
    <button
      onClick={() => setMobileServicesOpen(v => !v)}
      className="text-2xl font-space font-semibold text-white hover:text-[#CC0100] transition-colors flex items-center gap-2"
    >
      {t.nav.services}

      <ChevronDown
        className={`w-5 h-5 transition-transform duration-300 ${
          mobileServicesOpen ? 'rotate-180' : ''
        }`}
      />
    </button>

    <div
      className={`grid transition-all duration-300 ease-in-out ${
        mobileServicesOpen
          ? 'grid-rows-[1fr] opacity-100 mt-3'
          : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <div className="flex flex-col items-center gap-2">
          {serviceLinks.map(s => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              onClick={() => setMobileOpen(false)}
              className="text-base text-white/50 hover:text-[#CC0100] transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div>
    <Link
      to="/projects"
      onClick={() => setMobileOpen(false)}
      className="text-2xl font-space font-semibold text-white hover:text-[#CC0100] transition-colors"
    >
      {t.nav.projects}
    </Link>
  </div>

  <div>
    <Link
      to="/about"
      onClick={() => setMobileOpen(false)}
      className="text-2xl font-space font-semibold text-white hover:text-[#CC0100] transition-colors"
    >
      {t.nav.about}
    </Link>
  </div>

  <div>
    <button
      onClick={() => scrollTo('contact')}
      className="text-2xl font-space font-semibold text-white hover:text-[#CC0100] transition-colors"
    >
      {t.nav.contact}
    </button>
  </div>

  <div>
    <Link
      to="/faq"
      onClick={() => setMobileOpen(false)}
      className="text-2xl font-space font-semibold text-white hover:text-[#CC0100] transition-colors"
    >
      FAQ
    </Link>
  </div>

  <button
    onClick={() => scrollTo('contact')}
    className="mt-4 px-8 py-3 rounded-full text-base font-semibold text-white"
    style={{ background: '#CC0100' }}
  >
    {t.nav.cta}
  </button>
</motion.div>
        
        )}
      </AnimatePresence>
    </>
  );
}