import type { Lang } from '../i18n';

export type LocalizedString = Record<Lang, string>;

export const linkedinPosts = [
  {
    id: 'songwriting-camp',
    order: 1,
    url: 'https://www.linkedin.com/in/lucainve/recent-activity/all/',
    image: '/images/works/eintracht-pankow/songwriting-table.webp',
    tag: { de: 'Eintracht Pankow', en: 'Eintracht Pankow', it: 'Eintracht Pankow' },
    title: {
      de: 'Songwriting Camp bei Guesstimate',
      en: 'Songwriting camp at Guesstimate',
      it: 'Songwriting camp da Guesstimate'
    },
    excerpt: {
      de: 'Organisation, Künstler:innenbegleitung und ein direkter Blick in den kreativen Prozess: vom 20. bis 22. März bei Guesstimate / Loftyard Studios.',
      en: 'Organisation, artist support and a direct view into the creative process: 20-22 March at Guesstimate / Loftyard Studios.',
      it: 'Organizzazione, accompagnamento artisti e sguardo diretto al processo creativo: 20-22 marzo da Guesstimate / Loftyard Studios.'
    }
  },
  {
    id: 'music-business-panel',
    order: 2,
    url: 'https://www.linkedin.com/posts/lucainve_letzte-woche-durfte-ich-erstmals-als-gast-activity-7422930738099941377-tFaH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_5ILcBFvpIVadmJCT_xs5ahTNs-3mrY4I',
    image: '/images/works/eintracht-pankow/music-business-panel.webp',
    tag: { de: 'Panel', en: 'Panel', it: 'Panel' },
    title: {
      de: 'Music Business Management Panel',
      en: 'Music Business Management panel',
      it: 'Panel di Music Business Management'
    },
    excerpt: {
      de: 'Als Gast mit Jens Herrndorff und Matilda Pfeil vor Studierenden über Karrierewege, Networking und erste Praxiserfahrungen in der Musikindustrie gesprochen.',
      en: 'Speaking as a guest with Jens Herrndorff and Matilda Pfeil to students about careers, networking and early practical experiences in music.',
      it: 'Come ospite con Jens Herrndorff e Matilda Pfeil, ho parlato a studenti di carriera, networking e prime esperienze nella musica.'
    }
  },
  {
    id: 'reeperbahn-festival',
    order: 3,
    url: 'https://www.linkedin.com/posts/peggy-adamu-8b335a65_rbf25-ugcPost-7376898005272186880-Jqf3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_5ILcBFvpIVadmJCT_xs5ahTNs-3mrY4I',
    image: '/images/works/eintracht-pankow/reeperbahn-panel.jpg',
    tag: { de: 'Festival', en: 'Festival', it: 'Festival' },
    title: {
      de: 'Reeperbahn Festival & Networking',
      en: 'Reeperbahn Festival & networking',
      it: 'Reeperbahn Festival & networking'
    },
    excerpt: {
      de: 'Einblicke in Artist Marketing, Community Building, Algorithmus-Verständnis, Test & Learn und Gespräche mit Menschen aus der Musikbranche.',
      en: 'Insights into artist marketing, community building, algorithm thinking, test & learn and conversations with music-industry professionals.',
      it: 'Insight su artist marketing, community building, algoritmo, test & learn e conversazioni con professionisti della musica.'
    }
  },
  {
    id: 'believe-amplify',
    order: 4,
    url: 'https://www.linkedin.com/in/luca-invernizzi/',
    image: '/images/works/eintracht-pankow/believe-amplify.webp',
    tag: { de: 'Music Tech', en: 'Music tech', it: 'Music tech' },
    title: {
      de: 'Believe Amplify: Zukunft der Musikindustrie',
      en: 'Believe Amplify: future of the music industry',
      it: 'Believe Amplify: futuro della music industry'
    },
    excerpt: {
      de: 'Perspektiven von TikTok, Spotify und YouTube Music zu Menschen, Plattformen, Sharing, Kanälen und zukünftigen Möglichkeiten für Artists.',
      en: 'Perspectives from TikTok, Spotify and YouTube Music on people, platforms, sharing, channels and future opportunities for artists.',
      it: 'Prospettive da TikTok, Spotify e YouTube Music su persone, piattaforme, sharing, canali e opportunità future per artisti.'
    }
  },
  {
    id: 'innovation-project',
    order: 5,
    url: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7466397292628180994/',
    image: '/images/social-proof/ffhs-pitch.webp',
    tag: { de: 'Innovation', en: 'Innovation', it: 'Innovazione' },
    title: {
      de: 'Innovationsmanagement & Cross-Industry-Innovation',
      en: 'Innovation management & cross-industry innovation',
      it: 'Innovation management & cross-industry innovation'
    },
    excerpt: {
      de: 'Ein Beitrag über mein Innovationsprojekt an der FFHS und darüber, wie aus einer Studienidee ein greifbarer Prototyp wurde.',
      en: 'A post about my FFHS innovation project and how a study idea became a tangible prototype.',
      it: 'Un post sul mio progetto di innovazione alla FFHS e su come un’idea di studio sia diventata un prototipo concreto.'
    }
  },
];

export const education = [
  {
    id: 'ffhs',
    period: '02/2024 - aktuell',
    title: { de: 'Fernfachhochschule Schweiz (FFHS)', en: 'Fernfachhochschule Schweiz (FFHS)', it: 'Fernfachhochschule Svizzera (FFHS)' },
    role: { de: 'Bachelor of Science SUPSI in Betriebsökonomie', en: 'Bachelor of Science SUPSI in Business Administration', it: 'Bachelor of Science SUPSI in Economia aziendale' },
    place: { de: 'Online / Zürich, Schweiz', en: 'Online / Zurich, Switzerland', it: 'Online / Zurigo, Svizzera' },
    cover: '/images/education/ffhs-campus.webp',
    url: 'https://www.ffhs.ch/de/',
    bullets: {
      de: ['Schwerpunkte laut LinkedIn: Mitarbeiterführung, Volkswirtschaft, Wirtschaftsrecht, Betriebswirtschaftslehre, Financial Accounting, Wirtschaftsmathematik und Business English Higher.', 'Berufsbegleitendes Studium mit praxisnaher Verbindung von Theorie, Projekten und direkter Anwendung im Berufsalltag.', 'Ergänzende Projekte wie TOPSIM, Semesterarbeiten und Innovationsthemen stärken Analyse, Teamarbeit und unternehmerisches Denken.'],
      en: ['According to LinkedIn, key topics include leadership, economics, business law, business administration, financial accounting, business mathematics and business English Higher.', 'Part-time study programme with a practical connection between theory, projects and direct application to real work contexts.', 'Additional projects such as TOPSIM, term papers and innovation topics strengthen analysis, teamwork and entrepreneurial thinking.'],
      it: ['Secondo LinkedIn, i contenuti principali includono leadership, economia, diritto commerciale, economia aziendale, financial accounting, matematica economica e Business English Higher.', 'Percorso di studio parallelo al lavoro con forte collegamento tra teoria, progetti e applicazione pratica nel contesto professionale.', 'Progetti complementari come TOPSIM, lavori semestrali e temi di innovazione rafforzano analisi, teamwork e pensiero imprenditoriale.'],
    },
    gallery: ['/images/education/ffhs-campus.webp','/images/certificates/topsim-certificate.webp'],
  },
  {
    id: 'kantonsschule',
    period: '08/2022 - 07/2023',
    title: { de: 'Kantonsschule Bellinzona', en: 'Kantonsschule Bellinzona', it: 'Kantonsschule Bellinzona' },
    role: { de: 'Gymnasiale Maturität', en: 'Gymnasiale Maturität / bridging qualification', it: 'Maturità liceale / percorso passerella' },
    place: { de: 'Bellinzona, Schweiz', en: 'Bellinzona, Switzerland', it: 'Bellinzona, Svizzera' },
    cover: '/images/education/kantonsschule-graduation.webp',
    url: '',
    bullets: {
      de: ['Fächer laut LinkedIn: Italienisch, Deutsch, Mathematik, Physik, Chemie, Biologie, Geografie und Geschichte.', 'Die Passerelle ist eine Zusatzprüfung zur Berufs- oder Fachmaturität und ermöglicht den Zugang zu Schweizer Universitäten und Fachhochschulen.', 'Das Jahr war intensiv und hat meine Lernstruktur, Ausdauer und Sicherheit für den nächsten akademischen Schritt stark verbessert.'],
      en: ['Subjects listed on LinkedIn include Italian, German, mathematics, physics, chemistry, biology, geography and history.', 'The Passerelle is an additional qualification after vocational baccalaureate and opens access to Swiss universities and universities of applied sciences.', 'This intensive year strongly improved my study structure, perseverance and confidence for the next academic step.'],
      it: ['Le materie indicate su LinkedIn includono italiano, tedesco, matematica, fisica, chimica, biologia, geografia e storia.', 'La passerella è un esame complementare dopo la maturità professionale e permette l’accesso alle università e alle scuole universitarie professionali svizzere.', 'È stato un anno intenso che ha rafforzato molto il mio metodo di studio, la costanza e la sicurezza per il passo accademico successivo.'],
    },
    gallery: ['/images/education/kantonsschule-graduation.webp','/images/education/kantonsschule-graduation-2.webp'],
  },
  {
    id: 'samb',
    period: '08/2018 - 07/2022',
    title: { de: "Scuola d'Arti e Mestieri (SAM) Bellinzona", en: "Scuola d'Arti e Mestieri (SAM) Bellinzona", it: "Scuola d'Arti e Mestieri (SAM) Bellinzona" },
    role: { de: 'Eidgenössisches Fähigkeitszeugnis EFZ · Berufsmaturität · Automatiker EFZ', en: 'Federal VET diploma EFZ · vocational baccalaureate · automation technician', it: 'Attestato federale EFZ · maturità professionale · automatiker EFZ' },
    place: { de: 'Bellinzona, Schweiz', en: 'Bellinzona, Switzerland', it: 'Bellinzona, Svizzera' },
    cover: '/images/education/samb-prototype-hmi.webp',
    url: '',
    bullets: {
      de: ['Laut LinkedIn: Mathematik, Informatik, Grundkenntnisse der Arbeitstechniken, Physik, technisches Englisch, Werkstoff- und Zeichentechniken, Elektrotechnik, Elektronik, Automatisierung und interdisziplinäre Projekte.', 'Automatisierungstechniker:innen entwickeln, programmieren und warten automatische Systeme und arbeiten selbstständig, effizient, umweltbewusst und teamfähig.', 'Abschlussprojekte: ein autonom entwickelter Prototyp zur Prüfung von Barcodelesern sowie ein erstes eigenständig realisiertes Technikprojekt vom Konzept bis zur Umsetzung.'],
      en: ['According to LinkedIn: mathematics, computer science, basic work techniques, physics, technical English, material and drawing techniques, electrical engineering, electronics, automation and interdisciplinary projects.', 'Automation technicians develop, programme and maintain automatic systems and work independently, efficiently, sustainably and in teams.', 'Final projects included a self-developed prototype for testing barcode readers and a first independently realised technical project from concept to implementation.'],
      it: ['Secondo LinkedIn: matematica, informatica, tecniche di lavoro di base, fisica, inglese tecnico, tecniche dei materiali e del disegno, elettrotecnica, elettronica, automazione e progetti interdisciplinari.', 'Gli automatisti sviluppano, programmano e mantengono sistemi automatici e lavorano in modo autonomo, efficiente, sostenibile e in team.', 'Tra i progetti finali: un prototipo sviluppato autonomamente per testare lettori barcode e un primo progetto tecnico realizzato in autonomia dal concetto alla messa in opera.'],
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
