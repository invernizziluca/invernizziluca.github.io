export const languages = ['de', 'en', 'it'] as const;
export type Lang = (typeof languages)[number];

export const languageLabels: Record<Lang, string> = { de: 'DE', en: 'EN', it: 'IT' };

export const UI = {
  de: {
    seoTitle: 'Luca Invernizzi - Music Marketing, Artist Management & Public Relations',
    seoDescription: 'Portfolio von Luca Invernizzi mit Arbeiten in Music Marketing, Artist Management, Presse- und Öffentlichkeitsarbeit, Social Media, Ausbildung, Research, Referenzen und Zertifikaten.',
    nav: { start: 'Start', arbeiten: 'Arbeiten', erfahrung: 'Erfahrung', ausbildung: 'Ausbildung', research: 'Research', linkedin: 'LinkedIn', nachweise: 'Nachweise', kontakt: 'Kontakt' },
    hero: {
      kicker: 'Portfolio & Erfahrungsarchiv', title: 'Luca Invernizzi', subtitle: 'Music Marketing, Artist Management & Public Relations',
      text: 'Mein Weg führt von technischer Ausbildung und Business Administration direkt in die Berliner Musikszene. Ich verbinde strukturiertes Arbeiten mit Kreativität, PR, Social Media, Labelpraxis und echter Begeisterung für Artists.',
      primary: 'Arbeiten ansehen', secondary: 'CV herunterladen', tertiary: 'Kontakt aufnehmen'
    },
    stats: [
      { value: 'Presse & PR', label: 'nächster Schritt: Initiative Musik · Social Media, Newsletter & Medienmonitoring' },
      { value: 'Labelpraxis', label: 'Eintracht Pankow Musik · Playlist, Artist-Kommunikation & Music Business' },
      { value: 'Berlin', label: 'Events, Networking, Lernbereitschaft und klare Umsetzung' },
    ],
    positioning: {
      title: 'Was mich auszeichnet',
      text: 'Ich komme aus der Technik, studiere Business Administration und arbeite heute an der Schnittstelle von Musik, Kommunikation und Organisation. Genau diese Mischung macht meinen Weg aus: analytisch denken, kreativ umsetzen und im Team sichtbar Wirkung schaffen.',
      cards: [
        { title: 'Musik & Kommunikation', text: 'Ich möchte Artists unterstützen, ihre Musik klarer, sichtbarer und glaubwürdiger nach außen zu tragen.' },
        { title: 'Struktur & Umsetzung', text: 'Aus Technik, BWL und Praxis nehme ich ein sauberes Arbeiten mit: planen, priorisieren, kommunizieren und liefern.' },
        { title: 'Neugier & Netzwerk', text: 'Ob Festival, Panel oder Praktikum: Ich suche aktiv Austausch, lerne schnell und bringe mich mit eigenen Ideen ein.' },
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
      { title: 'Tools', items: ['Canva', 'CapCut', 'Adobe CC', 'Pipedrive', 'WordPress', 'Mailchimp', 'Fehlt ein Tool? Ich lerne gerne dazu'] },
    ]},
    about: { title: 'Von Technik zu Business, Musik und Kommunikation', text: 'Meine Geschichte ist kein gerader Weg, sondern eine Verbindung: technische Grundausbildung, Business Administration, eigene Musikprojekte, Eventpraxis, Labelarbeit und bald Presse- und Öffentlichkeitsarbeit. Dadurch verstehe ich kreative Ideen nicht nur emotional, sondern auch organisatorisch: Was muss passieren, damit ein Projekt sichtbar, professionell und umsetzbar wird?' },
    contact: { title: 'Lass uns sprechen', text: 'Für Praktika, Musikprojekte, kreative Zusammenarbeit oder berufliche Möglichkeiten freue ich mich über eine Kontaktaufnahme.', email: 'E-Mail schreiben', linkedin: 'LinkedIn öffnen', cv: 'CV herunterladen' },
    detail: { back: 'Zurück zur Home', next: 'Nächste Arbeit', situation: 'Ausgangslage', tasks: 'Meine Aufgaben', results: 'Ergebnisse & Wirkung', gallery: 'Galerie', tools: 'Tools', learnings: 'Learnings', links: 'Links & externe Nachweise', evidence: 'PDF-Nachweise' },
    footer: { rights: '© Luca Invernizzi.' }
  },
  en: {
    seoTitle: 'Luca Invernizzi - Music Marketing, Artist Management & Public Relations',
    seoDescription: 'Portfolio by Luca Invernizzi with work in music marketing, artist management, public relations, social media, education, research, references and certificates.',
    nav: { start: 'Start', arbeiten: 'Work', erfahrung: 'Experience', ausbildung: 'Education', research: 'Research', linkedin: 'LinkedIn', nachweise: 'Proof', kontakt: 'Contact' },
    hero: { kicker: 'Portfolio & experience archive', title: 'Luca Invernizzi', subtitle: 'Music Marketing, Artist Management & Public Relations', text: 'My path leads from technical training and business administration into Berlin’s music scene. I connect structured work with creativity, PR, social media, label practice and genuine enthusiasm for artists.', primary: 'View work', secondary: 'Download CV', tertiary: 'Contact me' },
    stats: [ { value: 'PR & press', label: 'Initiative Musik · social media, newsletter & media monitoring' }, { value: 'Label & events', label: 'Eintracht Pankow Musik · Gebrüder Fritz · Berlin practice' }, { value: 'Motivation', label: 'Make music visible · work with structure · keep learning' } ],
    positioning: { title: 'What defines my work', text: 'I come from a technical background, study business administration and now work at the intersection of music, communication and organisation. This mix defines how I work: analytical, creative and implementation-focused.', cards: [ { title: 'Press & PR', text: 'Media monitoring, communication support, research and PR-related content work.' }, { title: 'Content & Social Media', text: 'Text, graphic and video content, new formats, community management and reporting.' }, { title: 'Organisation & Marketing', text: 'CRM, newsletters, offers, presentations, follow-ups and structured execution.' } ] },
    works: { title: 'Selected work', intro: 'Practical work and stations that show what I concretely contributed to. Newer work appears first.', cta: 'View case' },
    timeline: { title: 'Experience', intro: 'A compact overview of my most relevant work stations. Each card opens a detail page.', open: 'View details' },
    education: { title: 'Education', intro: 'Clickable education cards with concrete topics, projects and proof.', open: 'View education', back: 'Back to overview' },
    research: { title: 'Study papers & research', intro: 'Selected academic work demonstrating analytical thinking, marketing understanding and scientific work.', pdf: 'Open PDF', preview: 'PDF preview' },
    linkedin: { title: 'Selected LinkedIn contributions', intro: 'A selection of posts on music, marketing, innovation, studies and projects.', all: 'View all LinkedIn posts', back: 'Back home' },
    media: { title: 'Social proof & mentions', intro: 'External mentions and proof showing that my projects and contributions are visible beyond my own portfolio.', open: 'Open on FFHS.ch' },
    references: { title: 'References', intro: 'Voices from people I worked with in study and practice contexts.', source: 'Source' },
    certificates: { title: 'Certificates & proof', intro: 'Selected proof documenting skills and learning experiences.', pdf: 'Open PDF', show: 'Show PDF inline' },
    skills: { title: 'Skills & way of working', groups: [ { title: 'Languages', items: ['Italian', 'German', 'English', 'French'] }, { title: 'Social Media', items: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn', 'Content Planning'] }, { title: 'Marketing', items: ['Campaigns', 'Newsletter', 'Sponsoring', 'Brand Communication'] }, { title: 'Organisation', items: ['Project coordination', 'CRM', 'Administration', 'Presentations'] }, { title: 'Tools', items: ['Canva', 'CapCut', 'Pipedrive', 'SevDesk', 'WordPress', 'Webflow'] } ] },
    about: { title: 'From technology to business, music and communication', text: 'My story connects technical training, business administration, own music projects, event practice, label work and the next step into public relations. This helps me understand creative ideas emotionally and organise them professionally.' },
    contact: { title: 'Let’s talk', text: 'For internships, music projects, creative collaboration or professional opportunities, feel free to get in touch.', email: 'Write an email', linkedin: 'Open LinkedIn', cv: 'Download CV' },
    detail: { back: 'Back home', next: 'Next case', situation: 'Context', tasks: 'My tasks', results: 'Results & impact', gallery: 'Gallery', tools: 'Tools', learnings: 'Learnings', links: 'Links & external proof', evidence: 'PDF proof' },
    footer: { rights: '© Luca Invernizzi.' }
  },
  it: {
    seoTitle: 'Luca Invernizzi - Music Marketing, Artist Management & Public Relations',
    seoDescription: 'Portfolio di Luca Invernizzi con lavori in music marketing, artist management, public relations, social media, formazione, ricerca, referenze e certificati.',
    nav: { start: 'Start', arbeiten: 'Lavori', erfahrung: 'Esperienza', ausbildung: 'Formazione', research: 'Research', linkedin: 'LinkedIn', nachweise: 'Prove', kontakt: 'Contatto' },
    hero: { kicker: 'Portfolio & archivio esperienze', title: 'Luca Invernizzi', subtitle: 'Music Marketing, Artist Management & Public Relations', text: 'Il mio percorso parte dalla formazione tecnica e dal business, e arriva nella scena musicale di Berlino. Unisco lavoro strutturato, creatività, PR, social media, label practice e vera passione per gli artisti.', primary: 'Vedi lavori', secondary: 'Scarica CV', tertiary: 'Contattami' },
    stats: [ { value: 'PR & press', label: 'Initiative Musik · social media, newsletter & media monitoring' }, { value: 'Label & eventi', label: 'Eintracht Pankow Musik · Gebrüder Fritz · pratica a Berlino' }, { value: 'Motivazione', label: 'Rendere visibile la musica · lavorare con struttura · imparare' } ],
    positioning: { title: 'Cosa mi contraddistingue', text: 'Vengo da un background tecnico, studio Business Administration e lavoro tra musica, comunicazione e organizzazione. Questa combinazione definisce il mio modo di lavorare: analitico, creativo e orientato alla realizzazione.', cards: [ { title: 'Presse & PR', text: 'Media monitoring, accompagnamento comunicativo, ricerca e contenuti vicini alla PR.' }, { title: 'Content & Social Media', text: 'Testi, grafiche, video, nuovi format, community management e reporting.' }, { title: 'Organizzazione & Marketing', text: 'CRM, newsletter, offerte, presentazioni, follow-up e realizzazione strutturata.' } ] },
    works: { title: 'Lavori selezionati', intro: 'Lavori pratici e stazioni che mostrano cosa ho fatto concretamente. I lavori più recenti sono in alto.', cta: 'Vedi lavoro' },
    timeline: { title: 'Esperienza', intro: 'Una panoramica compatta delle mie stazioni principali. Ogni card porta alla pagina dettaglio.', open: 'Vedi dettagli' },
    education: { title: 'Formazione', intro: 'Percorsi formativi cliccabili con contenuti, progetti e prove concrete.', open: 'Vedi formazione', back: 'Torna alla panoramica' },
    research: { title: 'Lavori di studio & research', intro: 'Lavori accademici selezionati che mostrano pensiero analitico, marketing e metodo scientifico.', pdf: 'Apri PDF', preview: 'Anteprima PDF' },
    linkedin: { title: 'Alcuni miei contributi LinkedIn', intro: 'Una selezione di post su musica, marketing, innovazione, studio e progetti.', all: 'Vedi tutti i post LinkedIn', back: 'Torna alla home' },
    media: { title: 'Social proof & menzioni', intro: 'Menzioni e prove esterne che mostrano che i miei progetti e contributi sono visibili anche fuori dal portfolio.', open: 'Apri su FFHS.ch' },
    references: { title: 'Referenze', intro: 'Voci di persone con cui ho lavorato in contesti di studio e pratica.', source: 'Fonte' },
    certificates: { title: 'Certificati & prove', intro: 'Prove selezionate che documentano competenze e apprendimento.', pdf: 'Apri PDF', show: 'Mostra PDF nel sito' },
    skills: { title: 'Skills & modo di lavorare', groups: [ { title: 'Lingue', items: ['Italiano', 'Tedesco', 'Inglese', 'Francese'] }, { title: 'Social Media', items: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn', 'Content Planning'] }, { title: 'Marketing', items: ['Campagne', 'Newsletter', 'Sponsoring', 'Brand Communication'] }, { title: 'Organizzazione', items: ['Project coordination', 'CRM', 'Amministrazione', 'Presentazioni'] }, { title: 'Tools', items: ['Canva', 'CapCut', 'Pipedrive', 'SevDesk', 'WordPress', 'Webflow'] } ] },
    about: { title: 'Dalla tecnica al business, alla musica e alla comunicazione', text: 'La mia storia collega formazione tecnica, Business Administration, progetti musicali, event practice, label work e il prossimo passo nelle public relations. Questo mi aiuta a capire le idee creative anche a livello organizzativo e professionale.' },
    contact: { title: 'Parliamone', text: 'Per stage, progetti musicali, collaborazioni creative o opportunità professionali, sono felice di essere contattato.', email: 'Scrivi e-mail', linkedin: 'Apri LinkedIn', cv: 'Scarica CV' },
    detail: { back: 'Torna alla home', next: 'Prossimo lavoro', situation: 'Contesto', tasks: 'I miei compiti', results: 'Risultati & impatto', gallery: 'Galleria', tools: 'Tools', learnings: 'Cosa ho imparato', links: 'Link & prove esterne', evidence: 'PDF prove' },
    footer: { rights: '© Luca Invernizzi.' }
  }
} as const;
