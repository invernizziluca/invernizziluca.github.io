export const languages = ['de', 'en', 'it'] as const;
export type Lang = (typeof languages)[number];

export const languageLabels: Record<Lang, string> = { de: 'DE', en: 'EN', it: 'IT' };

export const UI = {
  de: {
    seoTitle: 'Luca Invernizzi - Music Marketing, Artist Management & Creative Operations',
    seoDescription: 'Portfolio von Luca Invernizzi mit Arbeiten in Music Marketing, Artist Management, Social Media, Ausbildung, Research, LinkedIn-Beiträgen, Referenzen und Zertifikaten.',
    nav: { start: 'Start', arbeiten: 'Arbeiten', erfahrung: 'Erfahrung', ausbildung: 'Ausbildung', research: 'Research', linkedin: 'LinkedIn', nachweise: 'Nachweise', kontakt: 'Kontakt' },
    hero: {
      kicker: 'Portfolio & Erfahrungsarchiv', title: 'Luca Invernizzi', subtitle: 'Music Marketing, Artist Management & Creative Operations',
      text: 'Aus der italienischen Schweiz nach Berlin: Ich verbinde Musik, Marketing, Business Administration und kreative Umsetzung. Dieses Portfolio zeigt nicht nur Stationen, sondern konkrete Arbeiten, Nachweise und Lernprozesse.',
      primary: 'Arbeiten ansehen', secondary: 'CV herunterladen', tertiary: 'Kontakt aufnehmen'
    },
    stats: [
      { value: '4', label: 'Sprachen: IT, DE, EN, FR' },
      { value: 'Praxis', label: 'Musik, Events, Sport & Studium' },
      { value: 'Umsetzung', label: 'Struktur, Kreativität & Eigeninitiative' },
    ],
    positioning: {
      title: 'Was mich auszeichnet',
      text: 'Ich arbeite gern an der Schnittstelle zwischen kreativen Ideen und sauberer Umsetzung: Content, Organisation, Artist Management, Social Media, Research und Business-Prozesse.',
      cards: [
        { title: 'Musik & Artist Management', text: 'Releases, Artists, Plattformen, Kommunikation und koordinierte Abläufe.' },
        { title: 'Content & Social Media', text: 'Kampagnen, Content-Pläne, Videos, visuelle Assets und datenbasierte Auswertung.' },
        { title: 'Business & Organisation', text: 'CRM, Angebote, Präsentationen, Follow-ups, Projektkoordination und Administration.' },
      ],
    },
    works: { title: 'Ausgewählte Arbeiten', intro: 'Praktische Arbeiten und Stationen, die zeigen, was ich konkret umgesetzt habe. Die neueren Arbeiten stehen bewusst oben.', cta: 'Arbeit ansehen' },
    timeline: { title: 'Erfahrung', intro: 'Eine kompakte Übersicht meiner wichtigsten beruflichen Stationen. Jede Karte führt zu einer Detailseite.', open: 'Details ansehen' },
    education: { title: 'Ausbildung', intro: 'Klickbare Ausbildungspunkte mit konkreten Inhalten, Projekten und Nachweisen.', open: 'Ausbildung ansehen', back: 'Zurück zur Übersicht' },
    research: { title: 'Studienarbeiten & Research', intro: 'Ausgewählte Arbeiten aus dem Studium, die analytisches Denken, Marketingverständnis und wissenschaftliches Arbeiten zeigen.', pdf: 'PDF öffnen', preview: 'PDF-Vorschau' },
    linkedin: { title: 'Ausgewählte LinkedIn-Beiträge', intro: 'Einige meiner Beiträge zu Musik, Marketing, Innovation, Studium und Projekten.', all: 'Alle LinkedIn-Beiträge ansehen', back: 'Zurück zur Home' },
    media: { title: 'Social Proof & Erwähnungen', intro: 'Externe Erwähnungen und Nachweise, die zeigen, dass meine Projekte und Beiträge auch ausserhalb des eigenen Portfolios sichtbar sind.', open: 'Auf FFHS.ch öffnen' },
    references: { title: 'Referenzen', intro: 'Stimmen von Menschen, mit denen ich im Studien- und Praxiskontext gearbeitet habe.', source: 'Quelle' },
    certificates: { title: 'Zertifikate & Nachweise', intro: 'Ausgewählte Nachweise, die Fähigkeiten und Lernerfahrungen dokumentieren.', pdf: 'PDF öffnen', show: 'PDF direkt anzeigen' },
    skills: { title: 'Skills & Arbeitsweise', groups: [
      { title: 'Sprachen', items: ['Italienisch', 'Deutsch', 'Englisch', 'Französisch'] },
      { title: 'Social Media', items: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn', 'Content Planning'] },
      { title: 'Marketing', items: ['Kampagnen', 'Newsletter', 'Sponsoring', 'Brand Communication'] },
      { title: 'Organisation', items: ['Projektkoordination', 'CRM', 'Administration', 'Präsentationen'] },
      { title: 'Tools', items: ['Canva', 'CapCut', 'Pipedrive', 'SevDesk', 'WordPress', 'Webflow'] },
    ]},
    about: { title: 'Von Technik zu Business, Musik und Marketing', text: 'Mein Weg verbindet technische Grundausbildung, betriebswirtschaftliches Studium und praktische Arbeit in Musik, Events und digitaler Kommunikation. Genau diese Mischung hilft mir, Projekte nicht nur kreativ zu denken, sondern auch strukturiert umzusetzen.' },
    contact: { title: 'Lass uns sprechen', text: 'Für Praktika, Musikprojekte, kreative Zusammenarbeit oder berufliche Möglichkeiten freue ich mich über eine Kontaktaufnahme.', email: 'E-Mail schreiben', linkedin: 'LinkedIn öffnen', cv: 'CV herunterladen' },
    detail: { back: 'Zurück zur Home', next: 'Nächste Arbeit', situation: 'Ausgangslage', tasks: 'Meine Aufgaben', results: 'Ergebnisse & Wirkung', gallery: 'Galerie', tools: 'Tools', learnings: 'Learnings', links: 'Links & externe Nachweise', evidence: 'PDF-Nachweise' },
    footer: { rights: '© Luca Invernizzi.' }
  },
  en: {
    seoTitle: 'Luca Invernizzi - Music Marketing, Artist Management & Creative Operations',
    seoDescription: 'Portfolio by Luca Invernizzi with work in music marketing, artist management, social media, education, research, LinkedIn contributions, references and certificates.',
    nav: { start: 'Start', arbeiten: 'Work', erfahrung: 'Experience', ausbildung: 'Education', research: 'Research', linkedin: 'LinkedIn', nachweise: 'Proof', kontakt: 'Contact' },
    hero: { kicker: 'Portfolio & experience archive', title: 'Luca Invernizzi', subtitle: 'Music Marketing, Artist Management & Creative Operations', text: 'From the Italian-speaking part of Switzerland to Berlin: I connect music, marketing, business administration and creative execution. This portfolio shows concrete work, proof and learning processes.', primary: 'View work', secondary: 'Download CV', tertiary: 'Contact me' },
    stats: [ { value: '4', label: 'Languages: IT, DE, EN, FR' }, { value: 'Practice', label: 'Music, events, sport & studies' }, { value: 'Execution', label: 'Structure, creativity & initiative' } ],
    positioning: { title: 'What defines my work', text: 'I like working where creative ideas meet structured execution: content, organisation, artist management, social media, research and business processes.', cards: [ { title: 'Music & Artist Management', text: 'Releases, artists, platforms, communication and structured workflows.' }, { title: 'Content & Social Media', text: 'Campaigns, content plans, video, visual assets and data-based evaluation.' }, { title: 'Business & Organisation', text: 'CRM, offers, presentations, follow-ups, project coordination and administration.' } ] },
    works: { title: 'Selected work', intro: 'Practical work and stations that show what I concretely contributed to. Newer work appears first.', cta: 'View case' },
    timeline: { title: 'Experience', intro: 'A compact overview of my most relevant work stations. Each card opens a detail page.', open: 'View details' },
    education: { title: 'Education', intro: 'Clickable education cards with concrete topics, projects and proof.', open: 'View education', back: 'Back to overview' },
    research: { title: 'Study papers & research', intro: 'Selected academic work demonstrating analytical thinking, marketing understanding and scientific work.', pdf: 'Open PDF', preview: 'PDF preview' },
    linkedin: { title: 'Selected LinkedIn contributions', intro: 'A selection of posts on music, marketing, innovation, studies and projects.', all: 'View all LinkedIn posts', back: 'Back home' },
    media: { title: 'Social proof & mentions', intro: 'External mentions and proof showing that my projects and contributions are visible beyond my own portfolio.', open: 'Open on FFHS.ch' },
    references: { title: 'References', intro: 'Voices from people I worked with in study and practice contexts.', source: 'Source' },
    certificates: { title: 'Certificates & proof', intro: 'Selected proof documenting skills and learning experiences.', pdf: 'Open PDF', show: 'Show PDF inline' },
    skills: { title: 'Skills & way of working', groups: [ { title: 'Languages', items: ['Italian', 'German', 'English', 'French'] }, { title: 'Social Media', items: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn', 'Content Planning'] }, { title: 'Marketing', items: ['Campaigns', 'Newsletter', 'Sponsoring', 'Brand Communication'] }, { title: 'Organisation', items: ['Project coordination', 'CRM', 'Administration', 'Presentations'] }, { title: 'Tools', items: ['Canva', 'CapCut', 'Pipedrive', 'SevDesk', 'WordPress', 'Webflow'] } ] },
    about: { title: 'From technology to business, music and marketing', text: 'My path combines technical training, business administration studies and practical work in music, events and digital communication. This mix helps me not only think creatively, but also implement projects in a structured way.' },
    contact: { title: 'Let’s talk', text: 'For internships, music projects, creative collaboration or professional opportunities, feel free to get in touch.', email: 'Write an email', linkedin: 'Open LinkedIn', cv: 'Download CV' },
    detail: { back: 'Back home', next: 'Next case', situation: 'Context', tasks: 'My tasks', results: 'Results & impact', gallery: 'Gallery', tools: 'Tools', learnings: 'Learnings', links: 'Links & external proof', evidence: 'PDF proof' },
    footer: { rights: '© Luca Invernizzi.' }
  },
  it: {
    seoTitle: 'Luca Invernizzi - Music Marketing, Artist Management & Creative Operations',
    seoDescription: 'Portfolio di Luca Invernizzi con lavori in music marketing, artist management, social media, formazione, ricerca, contributi LinkedIn, referenze e certificati.',
    nav: { start: 'Start', arbeiten: 'Lavori', erfahrung: 'Esperienza', ausbildung: 'Formazione', research: 'Research', linkedin: 'LinkedIn', nachweise: 'Prove', kontakt: 'Contatto' },
    hero: { kicker: 'Portfolio & archivio esperienze', title: 'Luca Invernizzi', subtitle: 'Music Marketing, Artist Management & Creative Operations', text: 'Dalla Svizzera italiana a Berlino: unisco musica, marketing, business administration e realizzazione creativa. Questo portfolio mostra lavori concreti, prove e percorsi di apprendimento.', primary: 'Vedi lavori', secondary: 'Scarica CV', tertiary: 'Contattami' },
    stats: [ { value: '4', label: 'Lingue: IT, DE, EN, FR' }, { value: 'Pratica', label: 'Musica, eventi, sport & studio' }, { value: 'Esecuzione', label: 'Struttura, creatività & iniziativa' } ],
    positioning: { title: 'Cosa mi contraddistingue', text: 'Mi piace lavorare dove le idee creative incontrano una realizzazione ordinata: content, organizzazione, artist management, social media, ricerca e processi business.', cards: [ { title: 'Musica & Artist Management', text: 'Release, artisti, piattaforme, comunicazione e processi strutturati.' }, { title: 'Content & Social Media', text: 'Campagne, content plan, video, asset visivi e analisi dati.' }, { title: 'Business & Organizzazione', text: 'CRM, offerte, presentazioni, follow-up, coordinamento e amministrazione.' } ] },
    works: { title: 'Lavori selezionati', intro: 'Lavori pratici e stazioni che mostrano cosa ho fatto concretamente. I lavori più recenti sono in alto.', cta: 'Vedi lavoro' },
    timeline: { title: 'Esperienza', intro: 'Una panoramica compatta delle mie stazioni principali. Ogni card porta alla pagina dettaglio.', open: 'Vedi dettagli' },
    education: { title: 'Formazione', intro: 'Percorsi formativi cliccabili con contenuti, progetti e prove concrete.', open: 'Vedi formazione', back: 'Torna alla panoramica' },
    research: { title: 'Lavori di studio & research', intro: 'Lavori accademici selezionati che mostrano pensiero analitico, marketing e metodo scientifico.', pdf: 'Apri PDF', preview: 'Anteprima PDF' },
    linkedin: { title: 'Alcuni miei contributi LinkedIn', intro: 'Una selezione di post su musica, marketing, innovazione, studio e progetti.', all: 'Vedi tutti i post LinkedIn', back: 'Torna alla home' },
    media: { title: 'Social proof & menzioni', intro: 'Menzioni e prove esterne che mostrano che i miei progetti e contributi sono visibili anche fuori dal portfolio.', open: 'Apri su FFHS.ch' },
    references: { title: 'Referenze', intro: 'Voci di persone con cui ho lavorato in contesti di studio e pratica.', source: 'Fonte' },
    certificates: { title: 'Certificati & prove', intro: 'Prove selezionate che documentano competenze e apprendimento.', pdf: 'Apri PDF', show: 'Mostra PDF nel sito' },
    skills: { title: 'Skills & modo di lavorare', groups: [ { title: 'Lingue', items: ['Italiano', 'Tedesco', 'Inglese', 'Francese'] }, { title: 'Social Media', items: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn', 'Content Planning'] }, { title: 'Marketing', items: ['Campagne', 'Newsletter', 'Sponsoring', 'Brand Communication'] }, { title: 'Organizzazione', items: ['Project coordination', 'CRM', 'Amministrazione', 'Presentazioni'] }, { title: 'Tools', items: ['Canva', 'CapCut', 'Pipedrive', 'SevDesk', 'WordPress', 'Webflow'] } ] },
    about: { title: 'Dalla tecnica al business, alla musica e al marketing', text: 'Il mio percorso unisce formazione tecnica, studio in economia aziendale e lavoro pratico in musica, eventi e comunicazione digitale. Questa combinazione mi aiuta non solo a pensare in modo creativo, ma anche a realizzare progetti con struttura.' },
    contact: { title: 'Parliamone', text: 'Per stage, progetti musicali, collaborazioni creative o opportunità professionali, sono felice di essere contattato.', email: 'Scrivi e-mail', linkedin: 'Apri LinkedIn', cv: 'Scarica CV' },
    detail: { back: 'Torna alla home', next: 'Prossimo lavoro', situation: 'Contesto', tasks: 'I miei compiti', results: 'Risultati & impatto', gallery: 'Galleria', tools: 'Tools', learnings: 'Cosa ho imparato', links: 'Link & prove esterne', evidence: 'PDF prove' },
    footer: { rights: '© Luca Invernizzi.' }
  }
} as const;
