export const languages = ['de', 'it', 'en'] as const;
export type Lang = (typeof languages)[number];

export const languageLabels: Record<Lang, string> = {
  de: 'DE',
  it: 'IT',
  en: 'EN',
};

export const UI = {
  de: {
    seoTitle: 'Luca Invernizzi — Music Marketing, Artist Management & Creative Operations',
    seoDescription: 'Portfolio und Erfahrungsübersicht von Luca Invernizzi mit Arbeiten in Music Marketing, Artist Management, Social Media, Ausbildung und Studienarbeiten.',
    nav: {
      start: 'Start',
      arbeiten: 'Arbeiten',
      erfahrung: 'Erfahrung',
      ausbildung: 'Ausbildung',
      research: 'Research',
      medien: 'Medien',
      kontakt: 'Kontakt',
    },
    hero: {
      kicker: 'Portfolio & Erfahrungsarchiv',
      title: 'Luca Invernizzi',
      subtitle: 'Music Marketing, Artist Management & Creative Operations',
      text: 'Als Musikbegeisterter aus der italienischen Schweiz bin ich nach Berlin gezogen, um meinen Traum zu verfolgen: Künstler:innen dabei zu unterstützen, ihre Musik mit der Welt zu teilen. Dieses Portfolio zeigt meine Arbeiten, Erfahrungen und Studienprojekte visuell und nachvollziehbar.',
      primary: 'Arbeiten ansehen',
      secondary: 'CV herunterladen',
      tertiary: 'Kontakt aufnehmen',
    },
    stats: [
      { value: '83’700+', label: 'Views in 14 Tagen' },
      { value: '30’000+', label: 'Views pro Post' },
      { value: 'DE / IT / EN', label: 'Mehrsprachiges Profil' },
    ],
    positioning: {
      title: 'Was ich mache',
      text: 'Ich unterstütze Künstler:innen, Musikprojekte, Sportvereine und kreative Organisationen bei Social Media Marketing, Content-Strategie, Artist Management, Organisation und Markenkommunikation.',
      cards: [
        { title: 'Musik & Artist Management', text: 'Releases, Künstlerkommunikation, Plattformpflege und strukturierte Abläufe.' },
        { title: 'Social Media & Content', text: 'Content-Pläne, Reels, Kampagnen, Reichweitenanalyse und visuelle Kommunikation.' },
        { title: 'Business & Organisation', text: 'Administration, Präsentationen, Prozesse, Kundenkommunikation und Projektkoordination.' },
      ],
    },
    works: {
      title: 'Ausgewählte Arbeiten',
      intro: 'Keine theoretischen Projekte, sondern Arbeiten, an denen ich praktisch beteiligt war.',
      cta: 'Arbeit ansehen',
    },
    timeline: {
      title: 'Erfahrung',
      intro: 'Eine kurze Übersicht meiner wichtigsten Stationen. Die Details findest du in den einzelnen Arbeiten.',
      items: [
        { period: '08/2025 – 01/2026', title: 'Eintracht Pankow Musik', role: 'Produktmanager Praktikum', place: 'Berlin, Deutschland' },
        { period: '07/2025 – 10/2025', title: 'Gebrüder Fritz Locations', role: 'Marketing, Sales & Administration', place: 'Berlin, Deutschland' },
        { period: '08/2024 – 09/2025', title: 'Verbano Unihockey', role: 'Marketing & Social Media Manager', place: 'Tessin, Schweiz' },
        { period: '06/2024 – 07/2025', title: 'Eigenes Musikprojekt', role: 'Künstlermanagement & Marketing', place: 'Mailand, Italien' },
      ],
    },
    education: {
      title: 'Ausbildung',
      intro: 'Meine Ausbildung verbindet betriebswirtschaftliches Denken, Marketing, Forschung, Organisation und digitale Kommunikation.',
      items: [
        { period: '02/2024 – Aktuell', title: 'Fernfachhochschule Schweiz FFHS', role: 'Bachelor of Science in Business Administration', place: 'Online / Zürich, Schweiz' },
        { period: '08/2022 – 07/2023', title: 'Kantonsschule', role: 'Wirtschaft', place: 'Bellinzona, Schweiz' },
        { period: '08/2018 – 07/2022', title: 'Berufsschule', role: 'Berufsmaturität & Automatiker EFZ', place: 'Bellinzona, Schweiz' },
      ],
    },
    research: {
      title: 'Studienarbeiten & Research',
      intro: 'Ausgewählte Arbeiten aus dem Studium, die analytisches Denken, Marketingverständnis und wissenschaftliches Arbeiten zeigen.',
      pdf: 'PDF öffnen',
    },
    media: {
      title: 'Medien & Erwähnungen',
      intro: 'Platz für Artikel, Interviews, Social-Media-Erwähnungen und externe Nachweise.',
      open: 'Link öffnen',
    },
    skills: {
      title: 'Tools & Skills',
      groups: [
        { title: 'Social Media', items: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn'] },
        { title: 'Content', items: ['Canva', 'CapCut', 'Video', 'Reels', 'Foto'] },
        { title: 'Marketing', items: ['Newsletter', 'Kampagnen', 'Sponsoring', 'Brand Communication'] },
        { title: 'Organisation', items: ['Projektkoordination', 'Administration', 'Präsentationen'] },
        { title: 'Web & CRM', items: ['WordPress', 'Webflow', 'Framer', 'Astro', 'Pipedrive', 'SevDesk'] },
      ],
    },
    about: {
      title: 'Aus der italienischen Schweiz nach Berlin',
      text: 'Ich bin musikbegeistert und habe mich bewusst entschieden, praktische Erfahrungen in der Musik- und Kreativbranche zu sammeln. Mein Hintergrund verbindet Business Administration, Social Media, Organisation und kreative Umsetzung. Diese Website zeigt nicht nur, wo ich gearbeitet habe, sondern was ich dort konkret umgesetzt, produziert und gelernt habe.',
    },
    contact: {
      title: 'Lass uns sprechen',
      text: 'Für Praktika, Musikprojekte, kreative Zusammenarbeit oder berufliche Möglichkeiten freue ich mich über eine Kontaktaufnahme. Am liebsten per E-Mail oder LinkedIn.',
      email: 'E-Mail schreiben',
      linkedin: 'LinkedIn öffnen',
      cv: 'CV herunterladen',
    },
    detail: {
      back: 'Zurück zur Übersicht',
      next: 'Nächste Arbeit',
      situation: 'Ausgangslage',
      tasks: 'Meine Aufgaben',
      results: 'Ergebnisse & Impact',
      gallery: 'Galerie',
      tools: 'Verwendete Tools',
      learnings: 'Was ich gelernt habe',
    },
  },
  it: {
    seoTitle: 'Luca Invernizzi — Music Marketing, Artist Management & Creative Operations',
    seoDescription: 'Portfolio di Luca Invernizzi con lavori in music marketing, artist management, social media, formazione e progetti di studio.',
    nav: { start: 'Start', arbeiten: 'Lavori', erfahrung: 'Esperienza', ausbildung: 'Formazione', research: 'Research', medien: 'Media', kontakt: 'Contatto' },
    hero: {
      kicker: 'Portfolio & archivio esperienze',
      title: 'Luca Invernizzi',
      subtitle: 'Music Marketing, Artist Management & Creative Operations',
      text: 'Dalla Svizzera italiana a Berlino: questo sito raccoglie lavori selezionati, esperienze e progetti di studio che documentano il mio percorso pratico nella musica e nell’industria creativa.',
      primary: 'Vedi i lavori',
      secondary: 'Scarica CV',
      tertiary: 'Contattami',
    },
    stats: [
      { value: '83’700+', label: 'views in 14 giorni' },
      { value: '30’000+', label: 'views per post' },
      { value: 'DE / IT / EN', label: 'profilo multilingue' },
    ],
    positioning: {
      title: 'Cosa faccio',
      text: 'Supporto artisti, progetti musicali, club sportivi e organizzazioni creative in social media marketing, content strategy, artist management, organizzazione e comunicazione di marca.',
      cards: [
        { title: 'Musica & Artist Management', text: 'Release, comunicazione con artisti, piattaforme e processi ordinati.' },
        { title: 'Social Media & Content', text: 'Content plan, Reels, campagne, analisi reach e comunicazione visiva.' },
        { title: 'Business & Organizzazione', text: 'Amministrazione, presentazioni, processi, clienti e coordinamento.' },
      ],
    },
    works: { title: 'Lavori selezionati', intro: 'Non progetti teorici, ma lavori a cui ho partecipato concretamente.', cta: 'Vedi lavoro' },
    timeline: {
      title: 'Esperienza',
      intro: 'Una panoramica breve delle mie stazioni principali. I dettagli sono nelle singole pagine lavoro.',
      items: [
        { period: '08/2025 – 01/2026', title: 'Eintracht Pankow Musik', role: 'Stage product management', place: 'Berlino, Germania' },
        { period: '07/2025 – 10/2025', title: 'Gebrüder Fritz Locations', role: 'Marketing, Sales & Administration', place: 'Berlino, Germania' },
        { period: '08/2024 – 09/2025', title: 'Verbano Unihockey', role: 'Marketing & Social Media Manager', place: 'Ticino, Svizzera' },
        { period: '06/2024 – 07/2025', title: 'Progetto musicale personale', role: 'Artist management & marketing', place: 'Milano, Italia' },
      ],
    },
    education: {
      title: 'Formazione',
      intro: 'La mia formazione collega pensiero economico, marketing, ricerca, organizzazione e comunicazione digitale.',
      items: [
        { period: '02/2024 – oggi', title: 'Fernfachhochschule Schweiz FFHS', role: 'Bachelor of Science in Business Administration', place: 'Online / Zurigo, Svizzera' },
        { period: '08/2022 – 07/2023', title: 'Kantonsschule', role: 'Economia', place: 'Bellinzona, Svizzera' },
        { period: '08/2018 – 07/2022', title: 'Scuola professionale', role: 'Maturità professionale & Automatiker EFZ', place: 'Bellinzona, Svizzera' },
      ],
    },
    research: { title: 'Lavori di studio & Research', intro: 'Lavori selezionati che mostrano analisi, marketing e metodo scientifico.', pdf: 'Apri PDF' },
    media: { title: 'Media & menzioni', intro: 'Spazio per articoli, interviste, menzioni social e prove esterne.', open: 'Apri link' },
    skills: {
      title: 'Tools & Skills',
      groups: [
        { title: 'Social Media', items: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn'] },
        { title: 'Content', items: ['Canva', 'CapCut', 'Video', 'Reels', 'Foto'] },
        { title: 'Marketing', items: ['Newsletter', 'Campagne', 'Sponsoring', 'Brand Communication'] },
        { title: 'Organizzazione', items: ['Coordinamento', 'Amministrazione', 'Presentazioni'] },
        { title: 'Web & CRM', items: ['WordPress', 'Webflow', 'Framer', 'Astro', 'Pipedrive', 'SevDesk'] },
      ],
    },
    about: { title: 'Dalla Svizzera italiana a Berlino', text: 'Sono appassionato di musica e ho scelto consapevolmente di costruire esperienze pratiche nell’industria musicale e creativa. Il mio background unisce business administration, social media, organizzazione e realizzazione creativa.' },
    contact: { title: 'Parliamone', text: 'Per stage, progetti musicali, collaborazioni creative o opportunità professionali, contattami volentieri.', email: 'Scrivi email', linkedin: 'Apri LinkedIn', cv: 'Scarica CV' },
    detail: { back: 'Torna alla panoramica', next: 'Prossimo lavoro', situation: 'Situazione iniziale', tasks: 'I miei compiti', results: 'Risultati & impatto', gallery: 'Galleria', tools: 'Tools usati', learnings: 'Cosa ho imparato' },
  },
  en: {
    seoTitle: 'Luca Invernizzi — Music Marketing, Artist Management & Creative Operations',
    seoDescription: 'Portfolio of Luca Invernizzi with work in music marketing, artist management, social media, education and study projects.',
    nav: { start: 'Start', arbeiten: 'Work', erfahrung: 'Experience', ausbildung: 'Education', research: 'Research', medien: 'Media', kontakt: 'Contact' },
    hero: {
      kicker: 'Portfolio & experience archive',
      title: 'Luca Invernizzi',
      subtitle: 'Music Marketing, Artist Management & Creative Operations',
      text: 'From Italian-speaking Switzerland to Berlin: this site presents selected work, experiences and study projects that document my practical development in music and the creative industry.',
      primary: 'View work',
      secondary: 'Download CV',
      tertiary: 'Contact me',
    },
    stats: [
      { value: '83’700+', label: 'views in 14 days' },
      { value: '30’000+', label: 'views per post' },
      { value: 'DE / IT / EN', label: 'multilingual profile' },
    ],
    positioning: {
      title: 'What I do',
      text: 'I support artists, music projects, sports clubs and creative organisations with social media marketing, content strategy, artist management, organisation and brand communication.',
      cards: [
        { title: 'Music & Artist Management', text: 'Releases, artist communication, platform management and structured workflows.' },
        { title: 'Social Media & Content', text: 'Content plans, Reels, campaigns, reach analysis and visual communication.' },
        { title: 'Business & Operations', text: 'Administration, presentations, processes, client communication and coordination.' },
      ],
    },
    works: { title: 'Selected work', intro: 'Not theoretical projects, but work I was practically involved in.', cta: 'View case' },
    timeline: {
      title: 'Experience',
      intro: 'A short overview of my key stations. Details are available in the individual work pages.',
      items: [
        { period: '08/2025 – 01/2026', title: 'Eintracht Pankow Musik', role: 'Product management internship', place: 'Berlin, Germany' },
        { period: '07/2025 – 10/2025', title: 'Gebrüder Fritz Locations', role: 'Marketing, Sales & Administration', place: 'Berlin, Germany' },
        { period: '08/2024 – 09/2025', title: 'Verbano Unihockey', role: 'Marketing & Social Media Manager', place: 'Ticino, Switzerland' },
        { period: '06/2024 – 07/2025', title: 'Own music project', role: 'Artist management & marketing', place: 'Milan, Italy' },
      ],
    },
    education: {
      title: 'Education',
      intro: 'My education combines business thinking, marketing, research, organisation and digital communication.',
      items: [
        { period: '02/2024 – Current', title: 'Fernfachhochschule Schweiz FFHS', role: 'Bachelor of Science in Business Administration', place: 'Online / Zurich, Switzerland' },
        { period: '08/2022 – 07/2023', title: 'Kantonsschule', role: 'Business', place: 'Bellinzona, Switzerland' },
        { period: '08/2018 – 07/2022', title: 'Vocational school', role: 'Professional maturity & Automatiker EFZ', place: 'Bellinzona, Switzerland' },
      ],
    },
    research: { title: 'Study papers & research', intro: 'Selected study work showing analytical thinking, marketing knowledge and scientific methods.', pdf: 'Open PDF' },
    media: { title: 'Media & mentions', intro: 'A place for articles, interviews, social-media mentions and external proof.', open: 'Open link' },
    skills: {
      title: 'Tools & Skills',
      groups: [
        { title: 'Social Media', items: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn'] },
        { title: 'Content', items: ['Canva', 'CapCut', 'Video', 'Reels', 'Photography'] },
        { title: 'Marketing', items: ['Newsletter', 'Campaigns', 'Sponsoring', 'Brand Communication'] },
        { title: 'Operations', items: ['Project coordination', 'Administration', 'Presentations'] },
        { title: 'Web & CRM', items: ['WordPress', 'Webflow', 'Framer', 'Astro', 'Pipedrive', 'SevDesk'] },
      ],
    },
    about: { title: 'From Italian-speaking Switzerland to Berlin', text: 'I am passionate about music and deliberately chose to gain practical experience in the music and creative industries. My background combines business administration, social media, organisation and creative execution.' },
    contact: { title: 'Let’s talk', text: 'For internships, music projects, creative collaboration or professional opportunities, feel free to get in touch.', email: 'Write email', linkedin: 'Open LinkedIn', cv: 'Download CV' },
    detail: { back: 'Back to overview', next: 'Next work', situation: 'Situation', tasks: 'My tasks', results: 'Results & impact', gallery: 'Gallery', tools: 'Tools used', learnings: 'What I learned' },
  },
} as const;
