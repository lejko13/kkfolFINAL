import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ background: '#1A1B1E', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="text-2xl font-bold font-space tracking-tight text-white">
              KK<span style={{ color: '#CC0100' }}>FOL</span>
            </span>
            <p className="text-sm mt-4 leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              <li><Link to="/projects" className="text-sm transition-colors hover:text-[#CC0100]" style={{ color: 'rgba(255,255,255,0.45)' }}>{t.nav.projects}</Link></li>
              <li><Link to="/about" className="text-sm transition-colors hover:text-[#CC0100]" style={{ color: 'rgba(255,255,255,0.45)' }}>{t.nav.about}</Link></li>
              <li><button onClick={() => scrollTo('services')} className="text-sm transition-colors hover:text-[#CC0100]" style={{ color: 'rgba(255,255,255,0.45)' }}>{t.nav.services}</button></li>
              <li><button onClick={() => scrollTo('contact')} className="text-sm transition-colors hover:text-[#CC0100]" style={{ color: 'rgba(255,255,255,0.45)' }}>{t.nav.contact}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {t.footer.follow}
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Facebook', href: 'https://facebook.com/kkfol' },
                { label: 'Instagram', href: 'https://instagram.com/kkfol' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center gap-1 transition-colors group hover:text-[#CC0100]"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} KKFOL. {t.footer.rights}
          </p>
          <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Nižná brána 27, 060 01 Kežmarok
          </p>
        </div>
      </div>
    </footer>
  );
}