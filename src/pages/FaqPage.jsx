import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PageShell from '@/components/landing/PageShell';
import SectionLabel from '@/components/landing/SectionLabel';

import { useMediaQuery } from "react-responsive";


const faqGroups = [
  {
    group: 'Služby a možnosti',
    items: [
      { q: 'Aké typy polepu vozidiel ponúkate?', a: 'Ponúkame celopolepy, čiastočné polepy, ochranné PPF fólie, reklamné polepy a špeciálne livery dizajny. Pracujeme s prémiovou fóliou 3M, Avery Dennison a XPEL.' },
      { q: 'Môžete polepiť aj reklamné vozidlá alebo flotily?', a: 'Áno, špecializujeme sa aj na firemné flotily. Zabezpečíme jednotný vizuál pre akýkoľvek počet vozidiel.' },
      { q: 'Robíte aj polepy iných objektov (steny, výklady, podlahy)?', a: 'Áno, okrem vozidiel robíme aj výkladové polepy, firemné tabule, veľkoplošné tlačoviny a interiérové grafiky.' },
      { q: 'Poskytnete grafický návrh pred realizáciou?', a: 'Samozrejme. Súčasťou každej zákazky je aj grafická vizualizácia, ktorú schválite ešte pred začatím výroby.' },
    ],
  },
  {
    group: 'Ceny a cenová ponuka',
    items: [
      { q: 'Ako môžem získať cenovú ponuku?', a: 'Pošlite nám správu cez kontaktný formulár alebo zavolajte na +421 919 032 522. Ponuku pripravíme do 24 hodín.' },
      { q: 'Od čoho sa odvíja cena polepy vozidla?', a: 'Cena závisí od veľkosti vozidla, typu fólie (farba, materiál, špeciálny efekt) a rozsahu polepy (celý voz vs. čiastočný polep).' },
      { q: 'Vystavujete faktúry pre firmy?', a: 'Áno, sme platcovia DPH a vystavujeme faktúry pre fyzické aj právnické osoby vrátane firiem zo zahraničia.' },
      { q: 'Je možná platba na splátky?', a: 'Pre väčšie zákazky je možné dohodnúť platbu v splátkach. Kontaktujte nás a dohodíme podmienky.' },
    ],
  },
  {
    group: 'Proces a dodanie',
    items: [
      { q: 'Ako dlho trvá realizácia polepy vozidla?', a: 'Štandardný celopolep vozidla trvá 1–3 pracovné dni. Expresná realizácia je možná po dohode.' },
      { q: 'Musím si vopred rezervovať termín?', a: 'Áno, odporúčame si rezervovať termín vopred, najmä v sezóne. Kontaktujte nás a dohodneme konkrétny dátum.' },
      { q: 'Čo musím pripraviť pred odovzdaním vozidla?', a: 'Vozidlo by malo byť umyté. Všetko ostatné – odmastenie, prípravu a aplikáciu – zabezpečíme my.' },
      { q: 'Môžem sledovať stav zákazky?', a: 'Áno, o postupe prác vás informujeme. Na požiadanie posielame aj fotky z priebežnej realizácie.' },
    ],
  },
  {
    group: 'Záruka a starostlivosť',
    items: [
      { q: 'Aká je životnosť fólie?', a: 'Prémiové fólie 3M a Avery majú životnosť 5–7 rokov v exteriéri pri správnej údržbe. PPF fólie XPEL majú záruku až 10 rokov.' },
      { q: 'Ako sa o polep starať?', a: 'Odporúčame ručné umývanie alebo bezkontaktné umývanie. Klasické kefy v autoumyvárniach môžu poškodiť povrch fólie.' },
      { q: 'Je polep reverzibilný?', a: 'Áno. Fólia sa dá kedykoľvek odstrániť bez poškodenia originálneho laku vozidla, čo je jedna z hlavných výhod oproti lakovaní.' },
      { q: 'Poskytujete záruku na prácu?', a: 'Áno, na všetky naše práce poskytujeme záruku. Na fóliové polepy garantujeme kvalitu aplikácie a používame len certifikované materiály.' },
    ],
  },
  {
    group: 'Kontakt a lokalita',
    items: [
      { q: 'Kde sa nachádzate?', a: 'Naše štúdio sídli v Kežmarku. Presná adresa je k dispozícii v sekcii Kontakt alebo nás kontaktujte priamo.' },
      { q: 'Robíte aj výjazdy za zákazníkom?', a: 'Pre väčšie flotilové zákazky alebo inštalácie pútačov vieme vycestovať za zákazníkom po celom Slovensku.' },
      { q: 'Aké sú vaše otváracie hodiny?', a: 'Pracujeme v pracovných dňoch Po–Pi od 8:00 do 17:00. Pre urgentné zákazky sa vieme dohodnúť aj mimo pracovných hodín.' },
    ],
  },
];


  

function FaqItem({ item, isOpen, onToggle }) {

    const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: isOpen ? '1px solid rgba(204,1,0,0.2)' : '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.2s' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors"
        style={{ background: isOpen ? 'rgba(204,1,0,0.04)' : 'rgba(255,255,255,0.02)' }}
      >
        <span className="text-sm font-semibold text-white pr-4">{item.q}</span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{ color: isOpen ? '#CC0100' : 'rgba(255,255,255,0.3)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
         <motion.div
  initial={isDesktop ? { height: 0, opacity: 0 } : false}
  animate={
    isDesktop
      ? { height: 'auto', opacity: 1 }
      : { height: 'auto', opacity: 1 }
  }
  exit={
    isDesktop
      ? { height: 0, opacity: 0 }
      : undefined
  }
  transition={isDesktop ? { duration: 0.25 } : undefined}
>
  <div
    className="px-6 pb-5 pt-1 text-sm leading-relaxed"
    style={{ color: 'rgba(255,255,255,0.55)' }}
  >
    {item.a}
  </div>
</motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
   const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative py-24 lg:py-36" style={{ background: '#1A1B1E' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top center, rgba(204,1,0,0.06) 0%, transparent 60%)', filter: 'blur(40px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
  initial={isDesktop ? { opacity: 0, y: 30 } : false}
  animate={isDesktop ? { opacity: 1, y: 0 } : {}}
  transition={isDesktop ? { duration: 0.6 } : undefined}
>
  <span
    className="text-xs font-mono tracking-widest uppercase mb-4 block"
    style={{ color: '#CC0100' }}
  >
    Časté otázky
  </span>

  <h1 className="text-5xl sm:text-7xl font-space font-bold text-white mb-6">
    FAQ
  </h1>

  <p
    className="text-xl max-w-2xl"
    style={{ color: 'rgba(255,255,255,0.45)' }}
  >
    Odpovede na najčastejšie otázky našich klientov
    o službách, cenách, procese a zákazkovej realizácii.
  </p>
</motion.div>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="py-16 lg:py-24" style={{ background: '#1A1B1E' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {faqGroups.map((group, gi) => (
           <motion.div
  key={gi}
  initial={isDesktop ? { opacity: 0, y: 20 } : false}
  whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
  viewport={isDesktop ? { once: true } : undefined}
  transition={
    isDesktop
      ? { duration: 0.5, delay: gi * 0.05 }
      : undefined
  }
>
  <h2 className="text-lg font-space font-bold text-white mb-5 flex items-center gap-3">
    <span
      className="w-6 h-px flex-shrink-0"
      style={{
        background: '#CC0100',

        boxShadow: !isDesktop
          ? '0 0 10px rgba(204,1,0,0.4)'
          : 'none',
      }}
    />

    {group.group}
  </h2>

  <div className="space-y-2">
    {group.items.map((item, ii) => {
      const key = `${gi}-${ii}`;

      return (
        <FaqItem
          key={key}
          item={item}
          isOpen={openKey === key}
          onToggle={() => toggle(key)}
        />
      );
    })}
  </div>
</motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ background: '#26272C' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-space font-bold text-white mb-3">Nenašli ste odpoveď?</h2>
          <p className="mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Napíšte nám alebo zavolajte – radi zodpovieme každú otázku osobne.
          </p>
          <a
            href="tel:+421919032522"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ background: '#CC0100' }}
          >
            +421 919 032 522
          </a>
        </div>
      </section>
    </PageShell>
  );
}