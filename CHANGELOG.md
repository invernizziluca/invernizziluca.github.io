# Changelog · sito musicale

## 5.1.0 · 29 ottobre 2026 · colori caldi
- Il sito musicale torna ai colori del sito precedente e del CV: carta calda, fasce color sabbia, caramello per link ed etichette, oro per il logo, inchiostro quasi nero per testo e bottoni; la sezione contatto è una fascia scura con bottone oro. Il sito business resta bianco.
- Logo, favicon e anteprima della home rigenerati in oro e carta (`scripts/brand/make_brand_assets.py`); CV musicale con gli stessi colori.
- Contrasti ricontrollati su tutte le pagine (AA), nessun altro cambiamento di struttura o contenuto.

## 5.0.0 · 29 ottobre 2026 · Redesign "light"

Non pubblicato: tutte le modifiche sono pronte per la tua revisione, nessun commit e nessun deploy.

### Design
- Nuovo design system condiviso con il sito business (vedi `DESIGN_SYSTEM.md`): Archivo variabile come unico carattere, colori blu notte e verde petrolio con contrasto AA, spaziatura 8 pt, quattro raggi, solo tema chiaro (anche con il telefono in modalità scura).
- Edizione musicale: titoli più larghi (`font-stretch: 112%`), immagini grandi, fasce bianche e grigie alternate.
- Home ricostruita per chi la guarda 15–30 secondi: hero (nome, claim, chi sono, CV) → **Ausgewählte Arbeiten** (APPLAUS 2026 in evidenza con 4 visual + 4 card) → Stationen → Nachweise → Ausbildung e lingue/tool → Kontakt.
- Tolti: capitoli 01–06, disco animato, rating delle competenze a pallini, card annidate, logo dorato.
- Il tuo logo (la "L" con il disco) ricolorato in blu notte al posto dell'oro, favicon e apple-touch-icon nuovi; immagine di anteprima della home bianca con ritratto (`public/images/og/home.jpg`); anteprime dei case study con badge del nome.
- Case study con ordine fisso: Kontext → Ziel → Mein Beitrag (+ Abgrenzung) → Ergebnisse (con fonte) → Belege → Werkzeuge → Was ich gelernt habe → altre stazioni.
- Galleria a griglia con proporzioni naturali (non taglia più i nomi degli act nei visual APPLAUS) e lightbox da tastiera.
- Link esterni con freccia che non va mai a capo da sola (`src/components/ExtLink.astro`).
- Mobile: righe compatte, post LinkedIn orizzontali, nessuno scorrimento orizzontale a 360/390/768/1024/1440 px.

### Contenuti (DE/EN/IT)
- Initiative Musik: ruolo "Praktikum Presse- und Öffentlichkeitsarbeit"; testi della maggior parte dei post APPLAUS 2026 pubblicati (non foto, grafica o guida della campagna); supporto redazionale all'articolo domicil (testo Thomas Venker, foto Andreas Buck); Herbstfest al Tresor come evento separato con il tuo post LinkedIn. Tolte la playlist Spotify dell'Initiative Musik e le affermazioni su grafica/video.
- Eintracht Pankow: compiti come da Zeugnis, copertina nuova, tolti i "highlight" senza fonte (6 mesi, 3 canali).
- Gebrüder Fritz: CRM Pipedrive, Sevdesk, Mailchimp, eventi; cosa decidevano direzione e team sales.
- Verbano Unihockey: date 08/2024–09/2025; 83.767 visualizzazioni in 14 giorni, 59,8 % da non follower, 4.775 account raggiunti (+1.931,9 %) con fonte e limiti (account del club, non follower growth, non paid); tolta l'affermazione sulla Bundesliga dal contesto del club.
- Progetto musicale: "Artist-Koordination & Content-Marketing"; "einzelne Beiträge mit über 30.000 Aufrufen (eigene Angabe)"; collaborazione con Jake La Furia solo "in Vorbereitung".
- Formazione: Passerelle con il nome corretto (non "Matura"); FFHS con fine prevista luglio 2028.
- Testi più brevi per le liste e per Google (max ~160 caratteri), titoli delle pagine più corti.

### Privacy
- Zeugnisse e lavoro di ricerca qualitativo pubblicati in versione oscurata (data di nascita, indirizzo, telefono); miniature rigenerate dai PDF oscurati; metadati dei PDF puliti (titolo, autore, lingua).
- Screenshot del panel Zoom sostituito da un ritaglio che mostra solo le domande degli studenti (nessun volto né nome).
- CV pubblico senza numero di telefono e senza cittadinanza (si attivano nel sorgente LaTeX).
- Immagini non più usate (volti di terzi, artwork di artisti, vecchi loghi, screenshot della raccomandazione LinkedIn) tolte dal repository e consegnate a parte, così non finiscono nemmeno su GitHub.
- Note di lavoro interne tolte dal repository (consegnate a parte).

### CV
- `cv-source/music-general-2026.tex`: XeLaTeX con Archivo, una pagina A4, testo selezionabile, link a `https://invernizziluca.github.io` (senza `/work/`), blocco Motivation, fatti corretti come sopra. PDF pubblicato in `public/pdf/cv-luca-invernizzi.pdf`.

### Tecnica
- Schema dei contenuti aggiornato (`src/content/config.ts`): campi `goal`, `scope`, `highlightsSource`, `expectedEnd`, home strutturata; tolti `featured`/`relevance`.
- Tailwind resta solo per il reset di base; tutto lo stile è in `src/styles/site.css` con token.
- `robots.txt` indica le sitemap dei due siti.
- Workflow GitHub Pages: `npm ci` con cache, Node 22, azioni che girano su Node 24 (richiesto da GitHub da settembre 2026).
- `package-lock.json` sincronizzato con `package.json` (versione 5.0.0).
- Modelli in `vorlagen/` aggiornati e verificati contro lo schema.

### Verifiche eseguite (29.10.2026)
- `npm ci` / `npm run build` **non eseguibili** in questo ambiente (registro npm bloccato). Il sito è stato compilato con un harness offline che usa i componenti Astro e gli schemi zod del progetto: 30 rotte generate senza errori.
- Controlli automatici su tutte le 29 pagine: link interni e immagini (160 URL, nessun errore), un solo `h1`, nessun salto di titoli, alt su tutte le immagini, contrasto AA, target ≥ 24 px, canonical/hreflang/og:image, modalità scura del browser (resta chiaro), "riduci movimento".
- Tastiera: skip link, focus visibile, menu mobile (Invio/Esc), lightbox (Invio, frecce, Esc), Spotify solo dopo il clic.
- Nessun layout shift (CLS 0) su home e case study a 390 e 1440 px.
- CV: una pagina, testo selezionabile, link corretti.
