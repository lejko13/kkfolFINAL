import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, FolderCheck, Award, Zap, Heart, Target, Shield, Users, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageShell from '@/components/landing/PageShell';
import { useLanguage } from '@/lib/LanguageContext';

const icons = [Calendar, FolderCheck, Award, Zap];

const values = [
  { icon: Heart, title: 'Vášeň pre remeslo', desc: 'Každý detail rozhoduje. Pracujeme s rovnakou starostlivosťou pri malom logo polupe aj pri celovozidlovom wrapovaní.' },
  { icon: Target, title: 'Precíznosť na prvom mieste', desc: 'Certifikovaní technici, kontrolované prostredie štúdia a prémiové materiály – to je náš štandard bez výnimky.' },
  { icon: Shield, title: 'Kvalita bez kompromisov', desc: 'Používame len overené materiály od 3M, Avery Dennison a XPEL, ktoré zaručujú dlhú životnosť a dokonalý výsledok.' },
  { icon: Users, title: 'Zákazník na prvom mieste', desc: 'Každý projekt konzultujeme osobne. Počúvame, radíme a realizujeme presne podľa vašich predstáv.' },
];

const expertise = [
  { label: 'Polepy vozidiel', years: '12+ rokov', desc: 'Celopolepy, čiastočné polepy, špeciálne efekty a reklamné livery.' },
  { label: 'Ochranné fólie PPF', years: '8+ rokov', desc: 'Transparentná ochrana laku s certifikáciou XPEL a SunTek.' },
  { label: 'Branding & vizuálna identita', years: '10+ rokov', desc: 'Loga, manuály, vizitky a kompletné firemné identity.' },
  { label: 'Veľkoplošná tlač', years: '12+ rokov', desc: 'UV, eco-solvent a latex tlač pre exteriér aj interiér.' },
  { label: 'Reklamné pútače', years: '10+ rokov', desc: 'LED systémy, svetelné tabule a fasádne nápisy.' },
  { label: 'Grafický dizajn', years: '12+ rokov', desc: '3D vizualizácie, print-ready podklady a kreatívne kampane.' },
];

function AboutContent() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-36" style={{ background: '#1A1B1E' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(204,1,0,0.06) 0%, transparent 60%)', filter: 'blur(40px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-mono tracking-widest uppercase mb-4 block" style={{ color: '#CC0100' }}>KKFOL</span>
            <h1 className="text-5xl sm:text-7xl font-space font-bold text-white mb-6">O nás</h1>
            <p className="text-xl max-w-2xl" style={{ color: 'rgba(255,255,255,0.45)' }}>Kreatívna agentúra pôsobiaca na trhu od roku 2012. Prémiové polepy, branding a vizuálna komunikácia.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24" style={{ background: '#26272C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-mono tracking-widest uppercase mb-3 block" style={{ color: '#CC0100' }}>Náš príbeh</span>
              <h2 className="text-2xl sm:text-3xl font-space font-bold text-white mb-6">Od roku 2012 formujeme vizuálny svet</h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                KKFOL je reklamná agentúra so sídlom v Kežmarku, ktorá sa špecializuje na prémiové polepy vozidiel, branding a vizuálnu komunikáciu. Od nášho vzniku v roku 2012 sme realizovali viac ako 2 000 projektov pre zákazníkov z celého Slovenska aj zo zahraničia.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Začínali sme ako malé lokálne štúdio zamerané na polepy vozidiel. Postupne sme rozšírili portfólio o branding, veľkoplošnú tlač, reklamné pútače a kompletný grafický dizajn. Dnes sme komplexný partner pre firmy, ktoré chcú silnú a konzistentnú vizuálnu identitu.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Naša sila spočíva v kombinácii prémiových materiálov, certifikovaných technikov a osobného prístupu. Každý projekt berieme s rovnakou vášňou – či ide o polep jedného auta alebo o kompletný rebranding celej flotily.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="rounded-2xl overflow-hidden aspect-square" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <img
                  src="/typek.jpg"
                  alt="KKFOL Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24" style={{ background: '#1A1B1E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-mono tracking-widest uppercase mb-3 block" style={{ color: '#CC0100' }}>Naša misia</span>
              <h2 className="text-3xl sm:text-4xl font-space font-bold text-white mb-5">Premieňame vozidlá a priestory na nástroje komunikácie</h2>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Veríme, že kvalitná vizuálna identita nie je luxus, ale nevyhnutnosť. Naším cieľom je pomôcť firmám a jednotlivcom komunikovať svoju hodnotu cez prémiový dizajn – na vozidlách, v priestoroch aj v digitálnom svete.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl"
                  style={{ background: 'rgba(38,39,44,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(204,1,0,0.1)', border: '1px solid rgba(204,1,0,0.15)' }}>
                    <Icon className="w-4 h-4" style={{ color: '#CC0100' }} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24" style={{ background: '#26272C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest uppercase mb-3 block" style={{ color: '#CC0100' }}>Číslami</span>
            <h2 className="text-2xl sm:text-3xl font-space font-bold text-white">Výsledky, ktoré hovoria za nás</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.why.stats.map((stat, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl p-8 text-center"
                  style={{ background: 'rgba(26,27,30,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(204,1,0,0.1)', border: '1px solid rgba(204,1,0,0.15)' }}>
                    <Icon className="w-5 h-5" style={{ color: '#CC0100' }} />
                  </div>
                  <div className="text-4xl font-space font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 lg:py-24" style={{ background: '#1A1B1E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest uppercase mb-3 block" style={{ color: '#CC0100' }}>Skúsenosti a prax</span>
            <h2 className="text-2xl sm:text-3xl font-space font-bold text-white">Čo vieme robiť najlepšie</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4 p-5 rounded-2xl"
                style={{ background: 'rgba(38,39,44,0.4)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#CC0100' }} />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-white">{ex.label}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: 'rgba(204,1,0,0.1)', color: '#CC0100', border: '1px solid rgba(204,1,0,0.2)' }}>{ex.years}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{ex.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24" style={{ background: '#26272C' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-space font-bold text-white mb-4">Porozprávajme sa o vašom projekte</h2>
          <p className="mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Konzultácia je bezplatná. Ozvite sa nám a spolu nájdeme najlepšie riešenie pre vaše potreby.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(204,1,0,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
            style={{ background: '#CC0100' }}
          >
            Nezáväzná ponuka <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <AboutContent />
    </PageShell>
  );
}