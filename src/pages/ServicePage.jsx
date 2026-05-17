import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import PageShell from '@/components/landing/PageShell';
import { serviceData } from '@/lib/pageData';
import ServicesSlider from '@/components/landing/ServicesSlider';
import ServiceImageGallery from '@/components/landing/ServiceImageGallery';
import { useLanguage } from '@/lib/LanguageContext';
import { useMediaQuery } from "react-responsive";
const serviceDetails = {
  'vehicle-wraps': {
    longDesc: `Polep vozidla je jedným z najúčinnejších spôsobov, ako premeniť vzhľad auta bez trvalých zásahov do originálneho laku. Využívame prémiové fólie značiek 3M a Avery Dennison, ktoré zaručujú dlhú životnosť, sýte farby a precízne spracovanie. Každý polep je navrhnutý na mieru – od jednoduché farebné zmeny až po komplexné reklamné alebo závodné dizajny.

Naši certifikovaní technici pracujú v kontrolovanom prostredí štúdia, čo eliminuje prach a vzduchové bubliny počas aplikácie. Výsledkom je dokonale rovný povrch bez viditeľných šváv, s plnou ochranou originálneho laku pod fóliou.`,
    useCases: [
      'Osobné vozidlá – farebné zmeny, matné/lesklé fólie',
      'Firemné flotily – branding a reklamné polepy',
      'Závodné vozidlá – špeciálne livery dizajny',
      'Luxusné autá – prémiové metalické a chrómové fólie',
    ],
    process: [
      { n: '01', t: 'Konzultácia', d: 'Spoločne prejdeme vaše požiadavky, vyberiete typ fólie a farbu zo vzorkovníka.' },
      { n: '02', t: 'Dizajn', d: 'Náš grafik vytvorí 3D vizualizáciu polep priamo na váš model vozidla.' },
      { n: '03', t: 'Príprava', d: 'Vozidlo je dôkladne umyté, odmastené a pripravené na bezprašnú aplikáciu.' },
      { n: '04', t: 'Aplikácia', d: 'Certifikovaný technik aplikuje fóliu s presnosťou na každý detail karosérie.' },
    ],
  },
  
  'car-protection-films': {
    longDesc: `PPF (Paint Protection Film) je transparentná polyuretánová fólia, ktorá chráni lak vášho vozidla pred každodenným poškodením. Kamienky, drobné škrabance, hmyz, vtáčie výkaly – to všetko znáša fólia namiesto originálneho laku. Vďaka vlastnosti samoobnovy sa povrchové mikroškrabance zahrejú a sami vymiznú.

Pracujeme s prémiovou fóliou XPEL Ultimate a SunTek Ultra, ktoré sú takmer neviditeľné a zachovávajú pôvodný lesk a farbu vozidla. Ponúkame ochranu predného nárazníka, kapoty, spätných zrkadiel, prahov, ale aj kompletný celopolep PPF pre maximálnu ochranu.`,
    useCases: [
      'Ochrana prednej časti vozidla pred kamienkami',
      'Kompletný celopolep pre maximálnu ochranu laku',
      'Ochrana prahov a dverí pred odreninami',
      'Luxusné a nové vozidlá pri výjazde z autosalónu',
    ],
    process: [
      { n: '01', t: 'Obhliadka', d: 'Posúdime stav laku a navrhneme optimálne riešenie ochrany pre vaše vozidlo.' },
      { n: '02', t: 'Príprava laku', d: 'Lak sa dôkladne vyčistí, ododmastí a prípadne leští pred aplikáciou fólie.' },
      { n: '03', t: 'Rezanie fólie', d: 'Fólia sa presne vypočíta a vyreže podľa 3D dát vášho modelu vozidla.' },
      { n: '04', t: 'Aplikácia', d: 'Technik aplikuje fóliu mokrou metódou, eliminuje bubliny a fixuje okraje.' },
    ],
  },

  'branding': {
    longDesc: `Silná vizuálna identita je základom každej úspešnej značky. Vytvárame komplexné brandingové riešenia, ktoré zahŕňajú tvorbu loga, dizajn manuál, vizitky, hlavičkový papier, brožúry, bannery a digitálne podklady. Každý dizajn je originálny a vychádza z hlbokého pochopenia vašej firmy, cieľového publika a trhu.

Pracujeme metodicky – začíname briefingom, pokračujeme moodboardom, prvými návrhmi a iterujeme až do dokonalého výsledku. Výstupom je profesionálny dizajn manuál, ktorý zaisťuje konzistentné použitie vašej identity na všetkých kanáloch.`,
    useCases: [
      'Startupy a nové firmy hľadajúce kompletnú identitu',
      'Etablované firmy s potrebou rebrandingu',
      'Firemné flotily a reklamné nosičé',
      'Výstavné stánky, messia, POS materiály',
    ],
    process: [
      { n: '01', t: 'Briefing', d: 'Spoznávame vašu firmu, hodnoty, cieľovú skupinu a konkurenciu.' },
      { n: '02', t: 'Koncept', d: 'Pripravíme moodboard a prvé logo koncepty v rôznych smeroch.' },
      { n: '03', t: 'Refinement', d: 'Vybratý koncept doladíme do finálnej podoby vrátane typografie a palety.' },
      { n: '04', t: 'Dodanie', d: 'Odovzdáme dizajn manuál a všetky súbory v print aj digital formátoch.' },
    ],
  },

  'printing': {
    longDesc: `Veľkoplošná tlač je základom vonkajšej reklamy. Tlačíme bannery, roll-upy, plachty, billboardy, samolepky na autá, výkladové polepy a ďalšie reklamné nosiče v rozmeroch od A4 až po niekoľko desiatok metrov. Využívame UV, eco-solvent a latex technológie, ktoré zaručujú vivid farby, odolnosť voči UV žiareniu a dlhú životnosť aj v exteriéri.

Spolupracujeme s grafickými dizajnérmi a dokážeme spracovať aj hotové podklady. Tlač je dostupná na rôznych materiáloch – banner, dibond, forex, akryl, plachta, korekčná fólia a ďalšie. Rýchla výroba, možnosť expresného dodania do 24 hodín.`,
    useCases: [
      'Reklamné bannery a plachty na budovy',
      'Výstavné stánky, roll-upy a stojan',
      'Polepy výkladov a interiérov prevádzok',
      'Autopolepy a flotilová reklama',
    ],
    process: [
      { n: '01', t: 'Podklady', d: 'Odošlete nám grafické podklady alebo objednajte grafický návrh u nás.' },
      { n: '02', t: 'Kontrola', d: 'Skontrolujeme rozlíšenie, farby a prípadne upravíme súbory pre tlač.' },
      { n: '03', t: 'Tlač', d: 'Tlačíme na prémiových zariadeniach s farebnou kalibráciou pre presné farby.' },
      { n: '04', t: 'Dokončenie', d: 'Zákazka je olemovaná, osekaná alebo dokončená podľa špecifikácie a expedovaná.' },
    ],
  },

  'graphic-design': {
    longDesc: `Kvalitný grafický dizajn je tichý predajca vašej značky. Navrhujeme vizuály pre vozidlá, tlačoviny, online reklamu, sociálne siete, prezentácie, obaly produktov a ďalšie marketingové materiály. Pracujeme v Adobe Illustrator, Photoshop a CorelDRAW, čím zaručujeme výstupy vhodné pre akúkoľvek tlač aj digitálne použitie.

Každý projekt začína briefingom a končí finálnymi súbormi pripravenými presne pre váš účel. Ponúkame aj 3D vizualizácie polepu na vozidlách ešte pred samotnou výrobou – vidíte výsledok ešte pred začatím práce.`,
    useCases: [
      '3D vizualizácie polepu vozidiel pred realizáciou',
      'Firemné tlačoviny – vizitky, brožúry, letáky',
      'Reklamné bannery a kreativy pre online kampane',
      'Návrhy pre výstavné stánky a POS materiály',
    ],
    process: [
      { n: '01', t: 'Brief', d: 'Zistíme účel, cieľovú skupinu, farby, štýl a prípadné referencie.' },
      { n: '02', t: 'Návrh', d: 'Vytvoríme prvé koncepty a odošleme na schválenie.' },
      { n: '03', t: 'Revízie', d: 'Na základe vašej spätnej väzby doladíme dizajn do finálnej podoby.' },
      { n: '04', t: 'Export', d: 'Súbory dodáme vo formátoch PDF, AI, PNG, EPS podľa potreby.' },
    ],
  },

  'signage': {
    longDesc: `Reklamné pútače a svetelné systémy sú tvárou vašej firmy 24 hodín denne. Vyrábame svetelné a nesvetelné firemné tabule, channel letters, LED lightboxy, fasádne nápisy, orientačné systémy a výkladové polepy. Každé riešenie je navrhnuté s dôrazom na viditeľnosť, dlhú životnosť a konzistentnosť s vašou vizuálnou identitou.

Zabezpečujeme kompletný servis od návrhu, cez výrobu až po montáž a prípadný servis. Pracujeme s materiálmi Dibond, plexisklo, acryl, neón, LED a ďalšími, čo nám umožňuje realizovať akýkoľvek dizajnový zámer.`,
    useCases: [
      'Fasádne nápisy a firemné tabule',
      'Svetelné pútače a LED lightboxy',
      'Orientačné a informačné systémy v budovách',
      'Výkladové polepy a dekorácie prevádzok',
    ],
    process: [
      { n: '01', t: 'Obhliadka', d: 'Navštívime lokáciu, zhodnotíme podmienky montáže a svetelné pomery.' },
      { n: '02', t: 'Návrh', d: 'Vytvoríme vizualizáciu pútača v prostredí vašej prevádzky.' },
      { n: '03', t: 'Výroba', d: 'Vyrobíme pútač v našej dielni s certifikovanými materiálmi a komponentmi.' },
      { n: '04', t: 'Montáž', d: 'Profesionálna montáž vyškolenými technikmi vrátane zapojenia LED osvitlenia.' },
    ],
  },
};


export default function ServicePage() {
  return (
    <PageShell>
      <ServicePageContent />
    </PageShell>
  );
}

function ServicePageContent() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const service = serviceData[slug];
  const details = serviceDetails[slug];

  if (!service) {
    return (
      <div className="h-[700px] md:min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/50 mb-4">Služba nenájdená</p>
          <button onClick={() => navigate('/')} className="text-[#CC0100] hover:underline">← Späť na úvod</button>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200);
  };
   const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });


  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] md:min-h-[60vh] flex items-end pb-16" style={{ background: '#1A1B1E' }}>
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,27,30,0.4) 0%, rgba(26,27,30,1) 100%)' }} />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px]"
          style={{ background: 'radial-gradient(ellipse, rgba(204,1,0,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<motion.div
  initial={isDesktop ? { opacity: 0, y: 30 } : false}
  animate={isDesktop ? { opacity: 1, y: 0 } : {}}
  transition={isDesktop ? { duration: 0.6 } : undefined}
>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              <ArrowLeft className="w-4 h-4" /> Späť
            </button>
            <span className="text-xs font-mono tracking-widest uppercase mb-3 block" style={{ color: '#CC0100' }}>
              {service.subtitle}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-space font-bold text-white mb-4">{service.title}</h1>
            <p className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>{service.specs}</p>
          </motion.div>
        </div>
      </section>

      {/* Description + Benefits */}
      <section className="py-16 lg:py-24" style={{ background: '#1A1B1E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
           <motion.div
  initial={isDesktop ? { opacity: 0, x: -20 } : false}
  whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
  viewport={isDesktop ? { once: true } : undefined}
  transition={isDesktop ? { duration: 0.6 } : undefined}
>
              <h2 className="text-2xl font-space font-bold text-white mb-6">O tejto službe</h2>
              {(details?.longDesc || service.desc).split('\n\n').map((para, i) => (
                <p key={i} className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{para}</p>
              ))}
            </motion.div>

            <motion.div
  initial={isDesktop ? { opacity: 0, x: 20 } : false}
  whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
  viewport={isDesktop ? { once: true } : undefined}
  transition={
    isDesktop
      ? { duration: 0.6, delay: 0.15 }
      : undefined
  }
>
              <h2 className="text-2xl font-space font-bold text-white mb-6">Výhody a benefity</h2>
              <div className="space-y-3 mb-10">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#CC0100' }} />
                    <span className="text-sm text-white/70">{b}</span>
                  </div>
                ))}
              </div>

              {details?.useCases && (
                <>
                  <h3 className="text-lg font-space font-semibold text-white mb-4">Typické použitie</h3>
                  <div className="space-y-2">
                    {details.useCases.map((u, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: 'rgba(204,1,0,0.7)' }} />
                        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{u}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ServiceImageGallery images={service.gallery || [service.image]} />

      {/* Process */}
      <section className="py-16 lg:py-24" style={{ background: '#26272C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-space font-bold text-white mb-12">Ako to funguje</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(details?.process || t.process.steps).map((step, i) => (
              <motion.div  key={i}  initial={isDesktop ? { opacity: 0, y: 20 } : false}  whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}  viewport={isDesktop ? { once: true } : undefined}  transition={    isDesktop      ? { duration: 0.5, delay: i * 0.1 }      : undefined  }  className="p-6 rounded-2xl"  style={{    background: isDesktop      ? 'rgba(26,27,30,0.6)'      : 'rgba(204,1,0,0.04)',    border: isDesktop      ? '1px solid rgba(255,255,255,0.05)'      : '1px solid rgba(204,1,0,0.25)',    boxShadow: !isDesktop      ? '0 0 24px rgba(204,1,0,0.08)'      : 'none',  }}>

                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-sm font-mono font-bold"
                  style={{ background: 'rgba(204,1,0,0.1)', border: '1px solid rgba(204,1,0,0.2)', color: '#CC0100' }}>
                  {step.n || step.number}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{step.t || step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{step.d || step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Slider */}
      <ServicesSlider />

      {/* CTA */}
      <section className="py-16 lg:py-24" style={{ background: '#1A1B1E' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-space font-bold text-white mb-4">Zaujala vás táto služba?</h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Kontaktujte nás a pripravíme vám nezáväznú cenovú ponuku do 24 hodín.
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