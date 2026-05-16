// Shared data for service pages and project pages

export const serviceData = {
  'vehicle-wraps': {
    title: 'Polepy vozidiel',
    subtitle: 'Celopolepy, čiastočné polepy, premium fólie',
    desc: 'Špecializujeme sa na profesionálne polepy vozidiel s použitím prémiových materiálov 3M a Avery Dennison. Každý polep je prispôsobený presným požiadavkám zákazníka – od jednoduchých farebných zmien až po komplexné dizajnové realizácie.',
    specs: '3M Series 2080 · Avery Dennison · Oracal',
    benefits: ['Ochrana originálneho laku', 'Jedinečný vzhľad', 'Plne reverzibilné', 'Až 7 rokov životnosť', 'Certifikovaná montáž'],
    image:   '/mainpc.png',
    gallery: [
     '/public/kkfol/auto.jpg',
     '/public/kkfol/auto2.jpg',
     '/public/kkfol/auto3.jpg',
     '/public/kkfol/auto7.jpg',
     '/public/kkfol/auto4.jpg',
      
    ],
  },
  'car-protection-films': {
    title: 'Ochranné fólie',
    subtitle: 'PPF ochrana laku pre vaše vozidlo',
    desc: 'Ochranné polyuretánové fólie PPF chránia lak vášho vozidla pred kamienkami, poškriabaním a vonkajšími vplyvmi. Neviditeľná ochrana s vlastnosťou samoobnovy.',
    specs: 'XPEL Ultimate · SunTek Ultra · 3M Pro Series',
    benefits: ['Neviditeľná ochrana', 'Samoobnova po škrabancoch', 'Hydrofóbny povrch', 'UV ochrana', '10 rokov záruka'],
    image: '/folia.jpg',
   gallery: [
     '/public/kkfol/auto9.jpg',
     '/public/kkfol/auto11.jpg',
  
     '/public/kkfol/auto13.jpg',
     '/public/kkfol/auto14.jpg',
      
    ],
  },
  'branding': {
    title: 'Branding',
    subtitle: 'Kompletná vizuálna identita vašej značky',
    desc: 'Vytvárame komplexné vizuálne identity pre firmy a osobné značky. Od návrhu loga až po kompletný dizajn manuál a tlačové materiály.',
    specs: 'Logo · Design Manual · Stationery · Print',
    benefits: ['Originálne logo', 'Dizajn manuál', 'Vizitky a tlačoviny', 'Digitálne formáty', 'Konzistentná identita'],
    image: '/branding.png',
    gallery: [
      '/public/branding.png',
      '/public/kkfol/kartaicky.jpg',
       '/public/kkfol/tirko.jpg',
       '/public/kkfol/banner2.jpg',

     
    ],
  },
  'printing': {
    title: 'Veľkoplošná tlač',
    subtitle: 'Bannery, billboardy, reklamné materiály',
    desc: 'Profesionálna veľkoplošná tlač pre všetky druhy reklamných materiálov. UV tlač, eco-solvent a latex technológie pre najvyššiu kvalitu výstupu.',
    specs: 'UV tlač · Eco-solvent · Latex · Roll-to-Roll',
    benefits: ['Vivid farby', 'Odolnosť voči UV', 'Ľubovoľné rozmery', 'Rýchle dodanie', 'Laminovanie'],
    image:   '/tlac.png',
    gallery: [
         '/public/tlac.png',
    ],
  },
  'graphic-design': {
    title: 'Grafický dizajn',
    subtitle: 'Kreatívny dizajn pre tlač a digitál',
    desc: 'Kreatívny grafický dizajn pre vozidlá, tlačoviny, digitálnu reklamu a všetky typy marketingových materiálov. Pracujeme rýchlo a na mieru.',
    specs: 'Adobe Illustrator · Photoshop · CorelDRAW',
    benefits: ['3D vizualizácie', 'Návrhy na mieru', 'Rýchle prototypy', 'Print-ready súbory', 'Neobmedzené revízie'],
    image:   '/graficdesing.png',
    gallery: [
          '/graficdesing.png',
    ],
  },
  'signage': {
    title: 'Reklamné pútače',
    subtitle: 'Svetelné a nesvetelné reklamné systémy',
    desc: 'Výroba a montáž svetelných a nesvetelných reklamných pútačov, výkladových polep a orientačných systémov pre firmy všetkých veľkostí.',
    specs: 'LED · Dibond · Plexisklo · Neón',
    benefits: ['LED osvetlenie', 'Dlhá životnosť', 'Profesionálna montáž', 'Certifikovaná výroba', 'Servis a údržba'],
    image:   '/putac.png',
    gallery: [
     '/putac.png',
    ],
  },
};



export const projectData  = {

  // --- DODÁVKY A ÚŽITKOVÉ VOZIDLÁ ---
  'polep-dodavky-evzenbuilder': {
    title: 'Firemný polep EVZENBUILDER',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Liatá autofólia · UV laminácia',
    desc: 'Kompletný grafický návrh a realizácia reklamného polepu na dodávku pre stavebnú firmu EVZENBUILDER. Výrazná žlto-čierna kombinácia s detailným vyobrazením stavebných prác zaručuje okamžitú viditeľnosť na cestách.',
    heroImage: '/public/kkfol/auto.jpg',
    images: ['/public/kkfol/auto.jpg'],
    relatedSlugs: ['instalater-galo-polep', 'polep-dodavky-tipden'],
  },



  'polep-dodavky-tipden': {
    title: 'Branding vozidla TIPDEN',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: '3M liata fólia · Plnofarebná potlač',
    desc: 'Realizácia reklamného polepu pre firmu TIPDEN, špecializujúcu sa na plastové a hliníkové okná či dvere. Elegantná čierno-biela kombinácia doplnená o vizuál moderného domu dokonale reprezentuje zameranie klienta.',
    heroImage: '/public/kkfol/auto3.jpg',
    images: ['/public/kkfol/auto3.jpg'],
    relatedSlugs: ['polep-dodavky-evzenbuilder', 'polep-feridtrade'],
  },

  'polep-feridtrade': {
    title: 'Firemný polep FeridTrade',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Rezacia grafika · Exteriérová autofólia',
    desc: 'Čistý a prehľadný polep dodávky pre spoločnosť FeridTrade (voda a kúrenie). Umiestnenie loga, hlavných činností a výrazného telefónneho čísla vyhotovené priamo pred našou kežmarskou dielňou KKFOL.',
    heroImage: '/public/kkfol/auto4.jpg',
    images: ['/public/kkfol/auto4.jpg'],
    relatedSlugs: ['instalater-galo-polep', 'polep-dodavky-tipden'],
  },

  'kkfol-predvadzacia-dodavka': {
    title: 'Prezentačný polep dodávky KKFOL',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Avery Dennison / 3M · Custom dizajn',
    desc: 'Naše vlastné firemné vozidlo zahalené do agresívneho čierno-červeného dizajnu. Tento polep slúži ako ukážka precíznej práce našej kežmarskej dielne, kde kombinujeme ostro rezané línie s ikonami ponúkaných služieb.',
    heroImage: '/public/kkfol/auto5.jpg',
    images: ['/public/kkfol/auto5.jpg'],
    relatedSlugs: ['skoda-fabia-rally-livery', 'ford-raptor-satin-black'],
  },


  // --- ŠPORTOVÉ A EXKLUZÍVNE AUTÁ ---
  'skoda-fabia-rally-livery-white': {
    title: 'Závodný polep Škoda Fabia (Biela)',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Custom Racing Livery · Ochranná laminácia',
    desc: 'Kompletný návrh a aplikácia pretekárskeho dizajnu (livery) na športovú bielo-červenú verziu Škoda Fabia. Agresívne geometrické tvary navrhnuté na mieru tak, aby vozidlo okamžite vyniklo na každej trati.',
    heroImage: '/public/kkfol/auot8.jpg', // Podľa screenshotu auot8.jpg
    images: ['/public/kkfol/auot8.jpg'],
    relatedSlugs: ['skoda-fabia-rally-livery-dark', 'bmw-m2-orange'],
  },

  'skoda-fabia-rally-livery-dark': {
    title: 'Závodný polep Škoda Fabia (Tmavá)',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Custom Racing Livery · Ochranná laminácia',
    desc: 'Dizajnový variant športového polepu pre vozidlá Škoda Fabia na tmavom podklade. Žlto-čierne a červeno-sivé ostré línie prispôsobené pre pretekárske účely a maximálnu dravosť vizuálu.',
    heroImage: '/public/kkfol/auto6.jpg',
    images: ['/public/kkfol/auto6.jpg'],
    relatedSlugs: ['skoda-fabia-rally-livery-white', 'ford-raptor-satin-black'],
  },

  'ford-raptor-satin-black': {
    title: 'Dizajnový polep Ford Raptor',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Satin Black grafika · Vyrezávaný polep',
    desc: 'Doplnenie masívneho červeného pick-upu Ford Raptor o custom čierne saténové polepy korby a bokov. Grafika podčiarkuje svalnaté línie vozidla a dodáva mu jedinečný off-road charakter.',
    heroImage: '/public/kkfol/auto7.jpg',
    images: ['/public/kkfol/auto7.jpg'],
    relatedSlugs: ['kkfol-predvadzacia-dodavka', 'bmw-x5-satin-silver'],
  },

  'bmw-m2-orange': {
    title: 'Celopolep BMW M2 Coupe',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Premium Metallic Wrap · Gloss Finish',
    desc: 'Kompletná zmena farby na športovom BMW M2. Pôvodný lak bol prekrytý prémiovou metalickou fóliou v hlbokom oranžovo-medenom odtieni, doplnený o čierne kontrastné prvky a zadné krídlo.',
    heroImage: '/public/kkfol/auto9.jpg',
    images: ['/public/kkfol/auto9.jpg'],
    relatedSlugs: ['skoda-fabia-rally-livery-white', 'bmw-7-matte-black'],
  },

  'bmw-7-matte-black': {
    title: 'Matná elegancia BMW radu 7',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: '3M 2080 · Matte Black',
    desc: 'Luxusná limuzína BMW radu 7 oblečená do celoplošnej matnej čiernej fólie. Precízna montáž bez viditeľných spojov dodáva vozidlu rešpekt, eleganciu a zároveň chráni pôvodný lak pred kamienkami.',
    heroImage: '/public/kkfol/auto11.jpg',
    images: ['/public/kkfol/auto11.jpg'],
    relatedSlugs: ['bmw-x5-satin-silver', 'mercedes-s-class-black'],
  },

  'bmw-x5-satin-silver': {
    title: 'Satin Silver wrap BMW X5',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Satin Metallic · Kompletná zmena farby',
    desc: 'Prémiové SUV BMW X5 prešlo transformáciou do saténovej striebornej metalízy. Tento povrch nádherne zvýrazňuje prelisy karosérie a vozidlu dodáva moderný, až futuristický vzhľad.',
    heroImage: '/public/kkfol/auto13.jpg',
    images: ['/public/kkfol/auto13.jpg'],
    relatedSlugs: ['bmw-7-matte-black', 'mercedes-s-class-black'],
  },

  'mercedes-s-class-black': {
    title: 'De-chrome a úprava Mercedes-Benz Triedy S',
    category: 'Ochranné fólie',
    serviceSlug: 'ochranne-folie',
    specs: 'Gloss Black · Ochrana laku',
    desc: 'Exkluzívna ochrana laku a de-chrome balík pre vlajkovú loď Mercedes-Benz Triedy S. Čierna hlboká metalíza kombinovaná s precíznym spracovaním detailov priamo pred naším štúdiom v Kežmarku.',
    heroImage: '/public/kkfol/auto14.jpg',
    images: ['/public/kkfol/auto14.jpg'],
    relatedSlugs: ['bmw-7-matte-black', 'bmw-x5-satin-silver'],
  },


  // --- BRANDING, TLAČ A MERCH ---
  'vizitky-villa-lesto': {
    title: 'Exkluzívne vizitky Villa Lesto',
    category: 'Branding',
    serviceSlug: 'branding',
    specs: 'Matná laminácia · Vysokogramážny papier',
    desc: 'Návrh a tlač prémiových vizitiek pre ubytovacie zariadenie Villa Lesto. Čistý dizajn s fotografiami tatranskej scenérie a elegantnou typografiou, doplnený o kontaktné údaje na zadnej strane.',
    heroImage: '/public/kkfol/kartaicky.jpg',
    images: ['/public/kkfol/kartaicky.jpg'],
    relatedSlugs: ['tlacene-brozury-grafika', 'kkfol-merch'],
  },

  'reklamny-banner-kkfol': {
    title: 'Prezentácia reklamnej agentúry KKFOL',
    category: 'Reklamné pútače',
    serviceSlug: 'reklamne-putace',
    specs: 'Veľkoplošná tlač · Exteriérový banner',
    desc: 'Komplexný návrh dizajnu a veľkoplošná tlač prezentačného exteriérového bannera pre našu kežmarskú agentúru. Banner efektívne komunikuje naše hlavné portfólio – od autofólií až po prenos predstáv klienta do reality.',
    heroImage: '/public/kkfol/baner.jpg',
    images: ['/public/kkfol/baner.jpg'],
    relatedSlugs: ['kkfol-merch', 'tlacene-brozury-grafika'],
  },

  'tlacene-brozury-grafika': {
    title: 'Grafický dizajn a tlač brožúr',
    category: 'Grafický dizajn',
    serviceSlug: 'graficky-dizajn',
    specs: 'Kriedový papier · Full color tlač',
    desc: 'Profesionálne grafické služby od prvotného náčrtu až po finálnu digitálnu realizáciu. Prezentácia našich tlačových možností, reklamného oblečenia a polygrafických služieb v prehľadnom zalomenom formáte.',
    heroImage: '/public/kkfol/banner2.jpg',
    images: ['/public/kkfol/banner2.jpg'],
    relatedSlugs: ['kkfol-merch', 'vizitky-villa-lesto'],
  },

  

  'kkfol-merch': {
    title: 'Firemné oblečenie KKFOL',
    category: 'Branding',
    serviceSlug: 'branding',
    specs: 'Sito-tlač / Flex · Prémiový textil',
    desc: 'Návrh a realizácia firemného brandingu na textil pre náš vlastný tím. Štýlové čierne tričká s výrazným logom KKFOL a prehľadnými ikonami našich služieb na chrbte, ktoré slúžia ako skvelá chodiaca reklama.',
    heroImage: '/public/kkfol/tirko.jpg',
    images: ['/public/kkfol/tirko.jpg'],
    relatedSlugs: ['tlacene-brozury-grafika', 'reklamny-banner-kkfol'],
  }

};

export const Mainproject  = {

    // --- DODÁVKY A ÚŽITKOVÉ VOZIDLÁ ---
  'polep-dodavky-evzenbuilder': {
    title: 'Firemný polep EVZENBUILDER',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Liatá autofólia · UV laminácia',
    desc: 'Kompletný grafický návrh a realizácia reklamného polepu na dodávku pre stavebnú firmu EVZENBUILDER. Výrazná žlto-čierna kombinácia s detailným vyobrazením stavebných prác zaručuje okamžitú viditeľnosť na cestách.',
    heroImage: '/kkfol/auto.jpg',
    images: ['/public/kkfol/auto.jpg'],
    relatedSlugs: ['instalater-galo-polep', 'polep-dodavky-tipden'],
  },

  'bmw-m2-orange': {
    title: 'Celopolep BMW M2 Coupe',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Premium Metallic Wrap · Gloss Finish',
    desc: 'Kompletná zmena farby na športovom BMW M2. Pôvodný lak bol prekrytý prémiovou metalickou fóliou v hlbokom oranžovo-medenom odtieni, doplnený o čierne kontrastné prvky a zadné krídlo.',
    heroImage: '/kkfol/auto9.jpg',
    images: ['/public/kkfol/auto9.jpg'],
    relatedSlugs: ['skoda-fabia-rally-livery-white', 'bmw-7-matte-black'],
  },

  'bmw-7-matte-black': {
    title: 'Matná elegancia BMW radu 7',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: '3M 2080 · Matte Black',
    desc: 'Luxusná limuzína BMW radu 7 oblečená do celoplošnej matnej čiernej fólie. Precízna montáž bez viditeľných spojov dodáva vozidlu rešpekt, eleganciu a zároveň chráni pôvodný lak pred kamienkami.',
    heroImage: '/kkfol/auto11.jpg',
    images: ['/public/kkfol/auto11.jpg'],
    relatedSlugs: ['bmw-x5-satin-silver', 'mercedes-s-class-black'],
  },

  'bmw-x5-satin-silver': {
    title: 'Satin Silver wrap BMW X5',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Satin Metallic · Kompletná zmena farby',
    desc: 'Prémiové SUV BMW X5 prešlo transformáciou do saténovej striebornej metalízy. Tento povrch nádherne zvýrazňuje prelisy karosérie a vozidlu dodáva moderný, až futuristický vzhľad.',
    heroImage: '/kkfol/auto13.jpg',
    images: ['/public/kkfol/auto13.jpg'],
    relatedSlugs: ['bmw-7-matte-black', 'mercedes-s-class-black'],
  },

  'mercedes-s-class-black': {
    title: 'De-chrome a úprava Mercedes-Benz Triedy S',
    category: 'Ochranné fólie',
    serviceSlug: 'ochranne-folie',
    specs: 'Gloss Black · Ochrana laku',
    desc: 'Exkluzívna ochrana laku a de-chrome balík pre vlajkovú loď Mercedes-Benz Triedy S. Čierna hlboká metalíza kombinovaná s precíznym spracovaním detailov priamo pred naším štúdiom v Kežmarku.',
    heroImage: '/kkfol/auto14.jpg',
    images: ['/public/kkfol/auto14.jpg'],
    relatedSlugs: ['bmw-7-matte-black', 'bmw-x5-satin-silver'],
  },


   'polep-dodavky-tipden': {
    title: 'Branding vozidla TIPDEN',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: '3M liata fólia · Plnofarebná potlač',
    desc: 'Realizácia reklamného polepu pre firmu TIPDEN, špecializujúcu sa na plastové a hliníkové okná či dvere. Elegantná čierno-biela kombinácia doplnená o vizuál moderného domu dokonale reprezentuje zameranie klienta.',
    heroImage: '/kkfol/auto3.jpg',
    images: ['/public/kkfol/auto3.jpg'],
    relatedSlugs: ['polep-dodavky-evzenbuilder', 'polep-feridtrade'],
  },




}