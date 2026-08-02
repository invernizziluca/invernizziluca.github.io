import type { Lang } from '../i18n';

export type LocalizedString = Record<Lang, string>;

export const linkedinPosts = [
  { id: 'innovation-project', order: 1, height: 1164, src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7466397292628180994?collapsed=1', title: { de: 'Innovationsmanagement & Cross-Industry-Innovation', en: 'Innovation management & cross-industry innovation', it: 'Innovation management & cross-industry innovation' } },
  { id: 'value-proposition', order: 2, height: 627, src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7465146204742434816?collapsed=1', title: { de: 'Studienprojekt: Value Proposition', en: 'Study project: value proposition', it: 'Progetto di studio: value proposition' } },
  { id: 'learning-update', order: 3, height: 627, src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7458209397459128320?collapsed=1', title: { de: 'Lernen, Projektarbeit und Praxis', en: 'Learning, project work and practice', it: 'Apprendimento, progetto e pratica' } },
  { id: 'songwriting-camp', order: 4, height: 627, src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7442270344608006144?collapsed=1', title: { de: 'Wie sieht ein Songwriting Camp aus?', en: 'What does a songwriting camp look like?', it: 'Com’è fatto un songwriting camp?' } },
  { id: 'ffhs-pitch', order: 5, height: 669, src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7422930736766386176?collapsed=1', title: { de: 'Von der Idee zur Realität', en: 'From idea to reality', it: 'Dall’idea alla realtà' } },
  { id: 'rbf25-long', order: 6, height: 1806, src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7376898005272186880?collapsed=1', title: { de: 'Reeperbahn Festival 2025 - Eindrücke', en: 'Reeperbahn Festival 2025 - impressions', it: 'Reeperbahn Festival 2025 - impressioni' } },
  { id: 'rbf25', order: 7, height: 627, src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7376877059240861696?collapsed=1', title: { de: 'RBF25', en: 'RBF25', it: 'RBF25' } },
  { id: 'music-marketing-question', order: 8, height: 627, src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7373358994708676610?collapsed=1', title: { de: 'Musik, Marken und Wirkung', en: 'Music, brands and impact', it: 'Musica, brand e impatto' } },
];

export const education = [
  {
    id: 'ffhs',
    period: '02/2024 - aktuell',
    title: { de: 'Fernfachhochschule Schweiz (FFHS)', en: 'Fernfachhochschule Schweiz (FFHS)', it: 'Fernfachhochschule Schweiz (FFHS)' },
    role: { de: 'Bachelor of Science in Business Administration', en: 'Bachelor of Science in Business Administration', it: 'Bachelor of Science in Business Administration' },
    place: { de: 'Online / Zürich, Schweiz', en: 'Online / Zurich, Switzerland', it: 'Online / Zurigo, Svizzera' },
    cover: '/images/education/ffhs-campus.webp',
    url: 'https://www.ffhs.ch/de/',
    bullets: {
      de: ['Betriebswirtschaft, Marketing, Management und wissenschaftliches Arbeiten', 'Quantitative und qualitative Forschungsmethoden mit konkreten Semesterarbeiten', 'TOPSIM General Management Simulation: betriebswirtschaftliches Denken im Team trainiert'],
      en: ['Business administration, marketing, management and scientific work', 'Quantitative and qualitative research methods with concrete term papers', 'TOPSIM General Management simulation: trained business thinking in a team setting'],
      it: ['Economia aziendale, marketing, management e lavoro scientifico', 'Metodi di ricerca quantitativi e qualitativi con lavori di semestre concreti', 'Simulazione TOPSIM General Management: pensiero aziendale e lavoro in team'],
    },
    gallery: ['/images/education/ffhs-campus.webp','/images/certificates/topsim-certificate.webp'],
  },
  {
    id: 'kantonsschule',
    period: '08/2022 - 07/2023',
    title: { de: 'Kantonsschule Bellinzona', en: 'Kantonsschule Bellinzona', it: 'Liceo cantonale Bellinzona' },
    role: { de: 'Gymnasiale Maturität / Passerelle', en: 'Swiss university entrance qualification / Passerelle', it: 'Maturità liceale / Passerella' },
    place: { de: 'Bellinzona, Schweiz', en: 'Bellinzona, Switzerland', it: 'Bellinzona, Svizzera' },
    cover: '/images/education/kantonsschule-graduation.webp',
    url: '',
    bullets: {
      de: ['Intensives Übergangsjahr von der Berufsmaturität zur Hochschulzulassung', 'Fokus auf Italienisch, Deutsch, Mathematik, Naturwissenschaften, Geschichte und Geografie', 'Durchhaltevermögen, Lernstruktur und Teamgeist in einer anspruchsvollen Lernphase gestärkt'],
      en: ['Intensive bridge year from vocational baccalaureate to university admission', 'Focus on Italian, German, mathematics, natural sciences, history and geography', 'Strengthened perseverance, learning structure and team spirit in a demanding year'],
      it: ['Anno intensivo di passaggio dalla maturità professionale all’accesso universitario', 'Focus su italiano, tedesco, matematica, scienze naturali, storia e geografia', 'Rafforzato metodo di studio, costanza e spirito di squadra'],
    },
    gallery: ['/images/education/kantonsschule-graduation.webp','/images/education/kantonsschule-graduation-2.webp'],
  },
  {
    id: 'samb',
    period: '08/2018 - 07/2022',
    title: { de: 'Scuola d\'Arti e Mestieri (SAM) Bellinzona', en: 'Scuola d\'Arti e Mestieri (SAM) Bellinzona', it: 'Scuola d\'Arti e Mestieri (SAM) Bellinzona' },
    role: { de: 'Automatiker EFZ & Berufsmaturität', en: 'Automation technician EFZ & vocational baccalaureate', it: 'Automatiker EFZ & maturità professionale' },
    place: { de: 'Bellinzona, Schweiz', en: 'Bellinzona, Switzerland', it: 'Bellinzona, Svizzera' },
    cover: '/images/education/samb-prototype-hmi.webp',
    url: '',
    bullets: {
      de: ['Grundlagen in Elektrotechnik, Elektronik, Automatisierung, Informatik und technischem Englisch', 'Abschlussprojekt: eigenständig entwickelter Prototyp zur Prüfung der Leistung von Barcodelesern', 'Vom Konzept bis zur Umsetzung: Mechanik, Motor, Steuerung und HMI als kleine Produktionssimulation'],
      en: ['Foundations in electrical engineering, electronics, automation, IT and technical English', 'Final project: self-developed prototype to test barcode-reader performance', 'From concept to implementation: mechanics, motor, control and HMI as a small production simulation'],
      it: ['Basi di elettrotecnica, elettronica, automazione, informatica e inglese tecnico', 'Progetto finale: prototipo sviluppato autonomamente per testare prestazioni di lettori barcode', 'Dal concetto alla realizzazione: meccanica, motore, controllo e HMI come simulazione produttiva'],
    },
    gallery: ['/images/education/samb-prototype-hmi.webp','/images/education/samb-prototype-overview.webp'],
  },
];

export const socialProof = [
  {
    order: 1,
    source: 'FFHS News',
    date: '30.06.2026',
    url: 'https://www.ffhs.ch/de/ffhs/news/artikel/2026-06-30-ein-jahr-nach-dem-pitch-was-aus-einer-studienidee-wurde',
    title: { de: 'Ein Jahr nach dem Pitch - was aus einer Studienidee wurde', en: 'One year after the pitch - what became of a study idea', it: 'Un anno dopo il pitch: cosa è nato da un’idea di studio' },
    text: { de: 'FFHS-Beitrag über ein Innovationsmanagement-Projekt, in dem ich als Student mit einem realen Praxispartner an einer Studienidee gearbeitet habe.', en: 'FFHS article about an innovation management project in which I worked as a student with a real practice partner on a study idea.', it: 'Articolo FFHS su un progetto di innovation management in cui ho lavorato come studente con un partner pratico reale.' },
  },
  {
    order: 2,
    source: 'FFHS News',
    date: '04.09.2025',
    url: 'https://www.ffhs.ch/de/ffhs/news/artikel/2025-09-04-mentoring-programm-der-perfekte-ort-fuer-ehrliches-feedback',
    title: { de: 'Mentoring-Programm: Der perfekte Ort für ehrliches Feedback', en: 'Mentoring programme: the perfect place for honest feedback', it: 'Programma mentoring: il luogo giusto per feedback sincero' },
    text: { de: 'FFHS-Erfahrungsbericht über das Mentoring-Programm und meinen persönlichen Nutzen als Betriebsökonomie-Student.', en: 'FFHS experience report on the mentoring programme and my personal benefit as a business administration student.', it: 'Testimonianza FFHS sul programma mentoring e sul beneficio personale nel mio percorso in economia aziendale.' },
  },
];

export const references = [
  {
    order: 1,
    name: 'Dr. Philipp Meyer',
    role: 'Intralogistik · Agile Operations · Forscher · Dozent · Berater',
    source: 'LinkedIn Empfehlung, Februar 2026',
    image: '/images/references/philipp-meyer.jpeg',
    quote: {
      de: 'Luca ist einer dieser Menschen, die man sich merkt, nicht wegen grosser Gesten, sondern weil er einfach mit echter Neugier und Begeisterung dabei ist, egal worum es geht. Was mich an ihm besonders beeindruckt: Er verbindet Kreativität mit echtem Umsetzungswillen. Wer mit Luca zusammenarbeitet, bekommt jemanden, der Dinge wirklich angeht - mit Herzblut und dem nötigen Biss.',
      en: 'Luca is one of those people you remember - not because of grand gestures, but because he brings genuine curiosity and enthusiasm to whatever he does. What impresses me most is that he combines creativity with a real drive to implement. Working with Luca means working with someone who truly tackles things - with passion and determination.',
      it: 'Luca è una di quelle persone che ti restano impresse: non per grandi gesti, ma perché affronta le cose con curiosità ed entusiasmo autentici. Ciò che mi colpisce di più è la sua capacità di unire creatività e volontà concreta di realizzare. Lavorare con Luca significa avere accanto qualcuno che le cose le affronta davvero, con passione e determinazione.',
    },
  },
];

export const certificates = [
  {
    order: 1,
    title: { de: 'TOPSIM - General Management', en: 'TOPSIM - General Management', it: 'TOPSIM - General Management' },
    issuer: 'FFHS / TOPSIM',
    date: '05.06.2026',
    pdf: '/pdf/certificates/topsim-general-management.pdf',
    cover: '/images/certificates/topsim-certificate.webp',
    summary: {
      de: 'Zertifikat für die erfolgreiche Teilnahme an der Management Simulation TOPSIM. Inhalte: betriebswirtschaftliches Handlungswissen, Bilanzanalyse, Kostenrechnung, strategische Planung, Investitionsrechnung, komplexe Problemlösung, Teamfähigkeit und Verantwortung.',
      en: 'Certificate for successful participation in the TOPSIM General Management simulation. Topics include business decision-making, balance-sheet analysis, cost accounting, strategic planning, investment basics, complex problem solving, teamwork and responsibility.',
      it: 'Certificato per la partecipazione con successo alla simulazione TOPSIM General Management. Contenuti: competenze aziendali, analisi di bilancio, contabilità dei costi, pianificazione strategica, basi di investimento, problem solving complesso, team work e responsabilità.',
    },
  },
];
