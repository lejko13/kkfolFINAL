// Shared data for service pages and project pages

export const serviceData = {
  'vehicle-wraps': {
    title: 'Polepy vozidiel',
    subtitle: 'Celopolepy, čiastočné polepy, premium fólie',
    desc: 'Špecializujeme sa na profesionálne polepy vozidiel s použitím prémiových materiálov 3M a Avery Dennison. Každý polep je prispôsobený presným požiadavkám zákazníka – od jednoduchých farebných zmien až po komplexné dizajnové realizácie.',
    specs: '3M Series 2080 · Avery Dennison · Oracal',
    benefits: ['Ochrana originálneho laku', 'Jedinečný vzhľad', 'Plne reverzibilné', 'Až 7 rokov životnosť', 'Certifikovaná montáž'],
    image:   '/mainpc.webp',
    gallery: [
   '/projekty/auto.webp',
   '/projekty/auto3.webp',
   '/projekty/auto2.webp',
   '/projekty/auto4.webp',
      
    ],
  },
  'car-protection-films': {
    title: 'Ochranné fólie',
    subtitle: 'PPF ochrana laku pre vaše vozidlo',
    desc: 'Ochranné polyuretánové fólie PPF chránia lak vášho vozidla pred kamienkami, poškriabaním a vonkajšími vplyvmi. Neviditeľná ochrana s vlastnosťou samoobnovy.',
    specs: 'XPEL Ultimate · SunTek Ultra · 3M Pro Series',
    benefits: ['Neviditeľná ochrana', 'Samoobnova po škrabancoch', 'Hydrofóbny povrch', 'UV ochrana', '10 rokov záruka'],
    image: '/slzuby/folia.webp',
   gallery: [
     '/projekty/auto11.webp',
     '/projekty/auto13.webp',
     '/projekty/auto14.webp',
     '/projekty/auto9.webp'
      
    ],
  },
  'branding': {
    title: 'Branding',
    subtitle: 'Kompletná vizuálna identita vašej značky',
    desc: 'Vytvárame komplexné vizuálne identity pre firmy a osobné značky. Od návrhu loga až po kompletný dizajn manuál a tlačové materiály.',
    specs: 'Logo · Design Manual · Stationery · Print',
    benefits: ['Originálne logo', 'Dizajn manuál', 'Vizitky a tlačoviny', 'Digitálne formáty', 'Konzistentná identita'],
    image:     "/projekty/baner.webp",
    gallery: [
     
      "/projekty/baner.webp",
      "/projekty/banner2.webp",
      "/projekty/auto5.webp",

     
    ],
  },
  'printing': {
    title: 'Veľkoplošná tlač',
    subtitle: 'Bannery, billboardy, reklamné materiály',
    desc: 'Profesionálna veľkoplošná tlač pre všetky druhy reklamných materiálov. UV tlač, eco-solvent a latex technológie pre najvyššiu kvalitu výstupu.',
    specs: 'UV tlač · Eco-solvent · Latex · Roll-to-Roll',
    benefits: ['Vivid farby', 'Odolnosť voči UV', 'Ľubovoľné rozmery', 'Rýchle dodanie', 'Laminovanie'],
    image:   '/slzuby/tlac.webp',
    gallery: [
     '/slzuby/tlac.webp',
    ],
  },
  'graphic-design': {
    title: 'Grafický dizajn',
    subtitle: 'Kreatívny dizajn pre tlač a digitál',
    desc: 'Kreatívny grafický dizajn pre vozidlá, tlačoviny, digitálnu reklamu a všetky typy marketingových materiálov. Pracujeme rýchlo a na mieru.',
    specs: 'Adobe Illustrator · Photoshop · CorelDRAW',
    benefits: ['3D vizualizácie', 'Návrhy na mieru', 'Rýchle prototypy', 'Print-ready súbory', 'Neobmedzené revízie'],
    image:  '/slzuby/graficdesing.webp',
    gallery: [
         '/slzuby/graficdesing.webp',
    ],
  },
  'signage': {
    title: 'Reklamné pútače',
    subtitle: 'Svetelné a nesvetelné reklamné systémy',
    desc: 'Výroba a montáž svetelných a nesvetelných reklamných pútačov, výkladových polep a orientačných systémov pre firmy všetkých veľkostí.',
    specs: 'LED · Dibond · Plexisklo · Neón',
    benefits: ['LED osvetlenie', 'Dlhá životnosť', 'Profesionálna montáž', 'Certifikovaná výroba', 'Servis a údržba'],
    image:   '/slzuby/putac.webp',
    gallery: [
  '/slzuby/putac.webp',
    ],
  },
};


export const projectData = {
  'polep-dodavky-evzenbuilder': {
    title: 'Firemný polep EVZENBUILDER',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Liatá autofólia · UV laminácia',
    desc: 'Kompletný grafický návrh a realizácia reklamného polepu na dodávku pre stavebnú firmu EVZENBUILDER. Výrazná žlto-čierna kombinácia s detailným vyobrazením stavebných prác zaručuje okamžitú viditeľnosť na cestách.',
    heroImage: '/projekty/auto.webp',
    images: ['/projekty/auto.webp'],
    relatedSlugs: ['instalater-galo-polep', 'polep-dodavky-tipden'],
  },

  'polep-dodavky-tipden': {
    title: 'Branding vozidla TIPDEN',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: '3M liata fólia · Plnofarebná potlač',
    desc: 'Realizácia reklamného polepu pre firmu TIPDEN, špecializujúcu sa na plastové a hliníkové okná či dvere. Elegantná čierno-biela kombinácia doplnená o vizuál moderného domu dokonale reprezentuje zameranie klienta.',
    heroImage: '/projekty/auto3.webp',
    images: ['/projekty/auto3.webp'],
    relatedSlugs: ['polep-dodavky-evzenbuilder', 'polep-feridtrade'],
  },

  'polep-feridtrade': {
    title: 'Firemný polep FeridTrade',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Rezacia grafika · Exteriérová autofólia',
    desc: 'Čistý a prehľadný polep dodávky pre spoločnosť FeridTrade.',
    heroImage: '/projekty/auto4.webp',
    images: ['/projekty/auto4.webp'],
    relatedSlugs: ['instalater-galo-polep', 'polep-dodavky-tipden'],
  },

  'kkfol-predvadzacia-dodavka': {
    title: 'Prezentačný polep dodávky KKFOL',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Avery Dennison / 3M · Custom dizajn',
    desc: 'Naše vlastné firemné vozidlo zahalené do agresívneho čierno-červeného dizajnu.',
    heroImage: '/projekty/auto5.webp',
    images: ['/projekty/auto5.webp'],
    relatedSlugs: ['skoda-fabia-rally-livery', 'ford-raptor-satin-black'],
  },

  'skoda-fabia-rally-livery-white': {
    title: 'Závodný polep Škoda Fabia (Biela)',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Custom Racing Livery · Ochranná laminácia',
    desc: 'Kompletný návrh a aplikácia pretekárskeho dizajnu.',
    heroImage: '/projekty/auot8.webp',
    images: ['/projekty/auot8.webp'],
    relatedSlugs: ['skoda-fabia-rally-livery-dark', 'bmw-m2-orange'],
  },

  'ford-raptor-satin-black': {
    title: 'Dizajnový polep Ford Raptor',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Satin Black grafika · Vyrezávaný polep',
    desc: 'Custom čierne saténové polepy korby a bokov.',
    heroImage: '/projekty/auto7.webp',
    images: ['/projekty/auto7.webp'],
    relatedSlugs: ['kkfol-predvadzacia-dodavka', 'bmw-x5-satin-silver'],
  },

  'bmw-m2-orange': {
    title: 'Celopolep BMW M2 Coupe',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Premium Metallic Wrap · Gloss Finish',
    desc: 'Kompletná zmena farby na športovom BMW M2.',
    heroImage: '/projekty/auto9.webp',
    images: ['/projekty/auto9.webp'],
    relatedSlugs: ['skoda-fabia-rally-livery-white', 'bmw-7-matte-black'],
  },

  'bmw-7-matte-black': {
    title: 'Matná elegancia BMW radu 7',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: '3M 2080 · Matte Black',
    desc: 'Luxusná limuzína BMW radu 7 oblečená do matnej fólie.',
    heroImage: '/projekty/auto11.webp',
    images: ['/projekty/auto11.webp'],
    relatedSlugs: ['bmw-x5-satin-silver', 'mercedes-s-class-black'],
  },

  'bmw-x5-satin-silver': {
    title: 'Satin Silver wrap BMW X5',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Satin Metallic · Kompletná zmena farby',
    desc: 'Prémiové SUV BMW X5 v saténovej striebornej metalíze.',
    heroImage: '/projekty/auto13.webp',
    images: ['/projekty/auto13.webp'],
    relatedSlugs: ['bmw-7-matte-black', 'mercedes-s-class-black'],
  },

  'mercedes-s-class-black': {
    title: 'Mercedes-Benz Triedy S',
    category: 'Ochranné fólie',
    serviceSlug: 'ochranne-folie',
    specs: 'Gloss Black · Ochrana laku',
    desc: 'Exkluzívna ochrana laku a de-chrome balík.',
    heroImage: '/projekty/auto14.webp',
    images: ['/projekty/auto14.webp'],
    relatedSlugs: ['bmw-7-matte-black', 'bmw-x5-satin-silver'],
  },

  'vizitky-villa-lesto': {
    title: 'Exkluzívne vizitky Villa Lesto',
    category: 'Branding',
    serviceSlug: 'branding',
    specs: 'Matná laminácia · Vysokogramážny papier',
    desc: 'Návrh a tlač prémiových vizitiek.',
    heroImage: '/projekty/banner2.webp',
    images: ['/projekty/banner2.webp'],
    relatedSlugs: ['tlacene-brozury-grafika', 'kkfol-merch'],
  },

  'reklamny-banner-kkfol': {
    title: 'Prezentácia reklamnej agentúry KKFOL',
    category: 'Reklamné pútače',
    serviceSlug: 'reklamne-putace',
    specs: 'Veľkoplošná tlač · Exteriérový banner',
    desc: 'Komplexný návrh dizajnu a veľkoplošná tlač.',
    heroImage: '/projekty/baner.webp',
    images: ['/projekty/baner.webp'],
    relatedSlugs: ['kkfol-merch', 'tlacene-brozury-grafika'],
  },

  'tlacene-brozury-grafika': {
    title: 'Grafický dizajn a tlač brožúr',
    category: 'Grafický dizajn',
    serviceSlug: 'graficky-dizajn',
    specs: 'Kriedový papier · Full color tlač',
    desc: 'Profesionálne grafické služby.',
    heroImage: '/projekty/banner2.webp',
    images: ['/projekty/banner2.webp'],
    relatedSlugs: ['kkfol-merch', 'vizitky-villa-lesto'],
  },

  'kkfol-merch': {
    title: 'Firemné oblečenie KKFOL',
    category: 'Branding',
    serviceSlug: 'branding',
    specs: 'Sito-tlač / Flex · Prémiový textil',
    desc: 'Návrh a realizácia firemného brandingu na textil.',
    heroImage: '/projekty/tirko.webp',
    images: ['/projekty/tirko.webp'],
    relatedSlugs: ['tlacene-brozury-grafika', 'reklamny-banner-kkfol'],
  },
};
export const Mainproject = {
  'polep-dodavky-evzenbuilder': {
    title: 'Firemný polep EVZENBUILDER',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Liatá autofólia · UV laminácia',
    desc: 'Kompletný grafický návrh a realizácia reklamného polepu na dodávku pre stavebnú firmu EVZENBUILDER. Výrazná žlto-čierna kombinácia s detailným vyobrazením stavebných prác zaručuje okamžitú viditeľnosť na cestách.',
    heroImage: '/projekty/auto.webp',
    images: ['/projekty/auto.webp'],
    relatedSlugs: ['instalater-galo-polep', 'polep-dodavky-tipden'],
  },

  'bmw-m2-orange': {
    title: 'Celopolep BMW M2 Coupe',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Premium Metallic Wrap · Gloss Finish',
    desc: 'Kompletná zmena farby na športovom BMW M2. Pôvodný lak bol prekrytý prémiovou metalickou fóliou v hlbokom oranžovo-medenom odtieni, doplnený o čierne kontrastné prvky a zadné krídlo.',
    heroImage: '/projekty/auto9.webp',
    images: ['/projekty/auto9.webp'],
    relatedSlugs: ['skoda-fabia-rally-livery-white', 'bmw-7-matte-black'],
  },

  'bmw-7-matte-black': {
    title: 'Matná elegancia BMW radu 7',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: '3M 2080 · Matte Black',
    desc: 'Luxusná limuzína BMW radu 7 oblečená do celoplošnej matnej čiernej fólie. Precízna montáž bez viditeľných spojov dodáva vozidlu rešpekt, eleganciu a zároveň chráni pôvodný lak pred kamienkami.',
    heroImage: '/projekty/auto11.webp',
    images: ['/projekty/auto11.webp'],
    relatedSlugs: ['bmw-x5-satin-silver', 'mercedes-s-class-black'],
  },

  'bmw-x5-satin-silver': {
    title: 'Satin Silver wrap BMW X5',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: 'Satin Metallic · Kompletná zmena farby',
    desc: 'Prémiové SUV BMW X5 prešlo transformáciou do saténovej striebornej metalízy. Tento povrch nádherne zvýrazňuje prelisy karosérie a vozidlu dodáva moderný, až futuristický vzhľad.',
    heroImage: '/projekty/auto13.webp',
    images: ['/projekty/auto13.webp'],
    relatedSlugs: ['bmw-7-matte-black', 'mercedes-s-class-black'],
  },

  'mercedes-s-class-black': {
    title: 'De-chrome a úprava Mercedes-Benz Triedy S',
    category: 'Ochranné fólie',
    serviceSlug: 'ochranne-folie',
    specs: 'Gloss Black · Ochrana laku',
    desc: 'Exkluzívna ochrana laku a de-chrome balík pre vlajkovú loď Mercedes-Benz Triedy S. Čierna hlboká metalíza kombinovaná s precíznym spracovaním detailov priamo pred naším štúdiom v Kežmarku.',
    heroImage: '/projekty/auto14.webp',
    images: ['/projekty/auto14.webp'],
    relatedSlugs: ['bmw-7-matte-black', 'bmw-x5-satin-silver'],
  },

  'polep-dodavky-tipden': {
    title: 'Branding vozidla TIPDEN',
    category: 'Polepy vozidiel',
    serviceSlug: 'polepy-vozidiel',
    specs: '3M liata fólia · Plnofarebná potlač',
    desc: 'Realizácia reklamného polepu pre firmu TIPDEN, špecializujúcu sa na plastové a hliníkové okná či dvere. Elegantná čierno-biela kombinácia doplnená o vizuál moderného domu dokonale reprezentuje zameranie klienta.',
    heroImage: '/projekty/auto3.webp',
    images: ['/projekty/auto3.webp'],
    relatedSlugs: ['polep-dodavky-evzenbuilder', 'polep-feridtrade'],
  },
};