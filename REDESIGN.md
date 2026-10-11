# Redesign 2026 · strategia, struttura, modifiche tecniche

## 1. Strategia di redesign

**Obiettivo.** In 30 secondi chi apre il sito (label, agenzie di music marketing e PR, management, istituzioni musicali) deve capire tre cose: *chi sono*, *dove sto andando*, *perché sono credibile*. Poi deve poter approfondire ogni esperienza con prove concrete.

**Messaggio.** «Struktur für Musik, die gehört werden will.» Il tratto distintivo non è “amo la musica” (lo dicono tutti), ma la combinazione rara di **tecnica** (Automatiker), **business** (FFHS) e **pratica nella musica a Berlino** (label, PR). La struttura è ciò che porto agli artisti.

**Concetto visivo: “liner notes”.** Il portfolio è costruito come il libretto di un disco e come un archivio:
- fondo carta calda con grana leggera (CSS, nessuna immagine pesante), card grandi e arrotondate con ombre calde, nessuna sezione nera;
- un solo elemento musicale ricorrente, sottile: **il CD** (lo stesso del CV e del logo LI). Nella hero il ritratto diventa la copertina di un album e il CD esce da dietro; nel resto del sito è un piccolo marker (punti elenco, capitoli, livelli delle lingue come nel CV);
- tipografia **Archivo** a larghezza variabile: titoli “Expanded” molto forti (eco del nome sul CV), testi a larghezza normale, leggeri e leggibili;
- numeri solo dove c’è una sequenza vera: i sei capitoli della storia (01–06), come una tracklist.

**Narrazione.** La home segue l’arco richiesto: **01 Ursprung** (tecnica, precisione) → **02 Business** (FFHS) → **03 Berlin** (il passo nella scena) → **04 Praxis** (Initiative Musik, Eintracht Pankow, Gebrüder Fritz, progetto musicale) → **05 Nachweise** (referenze, LinkedIn, FFHS, certificati) → **06 Nächster Schritt** (Music Marketing, PR, Artist Management, Creative Operations) + contatto.

**Come sono state usate le ispirazioni**
- *Apple Newsroom*: case study editoriali con immagine grande, colonna delle etichette fissa a sinistra, molto spazio ma senza vuoti inutili.
- *Spotify for Artists*: musica collegata al lavoro (playlist della label, artisti del roster, artisti del progetto) direttamente nella pagina.
- *Pentagram / Metalab / Instrument*: ogni case study ha la stessa struttura fissa e una sezione “Belege”.
- *COLORSxSTUDIOS*: un unico gesto forte (copertina + CD) su un fondo calmo e uniforme.
- *Framer templates*: contenuti gestiti come CMS (content collections) e transizioni di pagina fluide.

**Principi**
1. Una prova accanto a ogni affermazione (Zeugnis, post, player, foto, PDF).
2. Card e immagini uniformi: 3:2 per i lavori, 4:3 per la galleria, 16:10 per i post.
3. Mobile first: ogni sezione è pensata prima a 390 px.
4. Movimento solo dove serve: un’unica sequenza in apertura (il CD), transizioni di pagina, hover sulle card cliccabili.

## 2. Nuova struttura del sito

**Home** (`/`, `/de/`, `/en/`, `/it/`)
1. **Hero**: nome, claim, chi sono in tre frasi, CTA “Arbeiten ansehen” e CV; ritratto come copertina con CD.
2. **Jetzt / Davor / Warum Berlin**: i vecchi blocchi “Presse & PR”, “Labelpraxis”, “Berlin” diventano una mini-storia con link ai case study.
3. **Werdegang 01–03**: tracklist con anno, testo, immagine e link alla formazione o al progetto.
4. **04 Praxis**: quattro card uniformi (periodo chiaro, ruolo, sintesi, badge “Aktuell”) + “Weitere Projekte”.
5. **05 Nachweise**: citazione grande (Dr. Philipp Meyer) + estratti dei due Zeugnisse; post LinkedIn con “Gehört zu …” (collegati ai lavori); archivio unico di tutti i documenti.
6. **06 Nächster Schritt**: quattro aree di crescita, lingue e tool (dischi come nel CV), contatto compatto con foto sorridente e CTA e-mail.

**Case study** (`/<lingua>/arbeiten/<nome>/`)
Hero visivo → Eckdaten (organizzazione, ruolo, periodo, luogo, sito) → **Kontext** → **Meine Rolle** → **Aufgaben** → **Ergebnisse** (con numeri in evidenza) → **Belege** (galleria con lightbox, player Spotify, artisti, post LinkedIn, PDF/Zeugnisse, link) → Werkzeuge → **Learnings** → **Warum das für meinen nächsten Schritt zählt** → lavoro precedente/successivo.

**Formazione** (`/<lingua>/ausbildung/<nome>/`): stessa testata, contenuti e progetti, riscontri, immagini.

Gli URL esistenti restano validi (`/de/arbeiten/eintracht-pankow/`, `/de/ausbildung/ffhs/` …).

## 3. Modifiche tecniche

**Contenuti modulari (content collections)**
- `src/content/arbeiten/*.md`: un file = un case study; immagini, galleria, Spotify, artisti, LinkedIn, PDF e link nel frontmatter; testi in blocchi `de`/`en`/`it` con fallback automatico sul tedesco.
- Nuove collezioni: `ausbildung` (prima in `src/data/site.ts`), `nachweise` (unisce le vecchie `medien` + `studienarbeiten` + certificati), `linkedin`, `referenzen`, `home` (tutti i testi della home in `home.yaml`).
- Riferimenti controllati alla build (`reference()`): se un lavoro cita un post o un documento che non esiste, la build lo segnala.
- Schema con messaggi chiari (date, mesi, immagini come stringa o oggetto con `alt`/`position`/`caption`). Nessun `slug` nel frontmatter.
- Cartella `vorlagen/` con modelli validati per lavoro, formazione, documento, post e referenza.

**Componenti riutilizzabili**: `WorkCard`, `CaseStudyHero`, `CaseSection`, `SpotifyEmbed`, `ProofCard`, `GalleryGrid`, `Timeline`, `ReferenceCard`, `LinkedInCard`, `ChapterHead`, `SkillRating`, `Img`, `Disc`, `Icon`, `HomePage` (una sola home per tutte le lingue: prima `index.astro` e `[lang]/index.astro` erano due copie diverse).

**Immagini**
- Pulizia: eliminati 42 file inutilizzati o duplicati (JPG originali da 1–1,4 MB già presenti in WebP, copertine SVG segnaposto, finti loghi). Cartella immagini: **15,2 MB → 6,1 MB**.
- GIF del sito Verbano convertita in WebP; foto pesanti ricompresse; miniature dei due Zeugnisse.
- `scripts/prepare-images.mjs`: versioni 480/960/1600 px in WebP + `srcset`/`sizes`, `width`/`height` (niente salti di layout), lazy loading. Non blocca mai la build.
- Ritagli uniformi con `object-position` impostabile per ogni immagine.

**SEO**: title/description per pagina, canonical, hreflang DE/EN/IT + x-default, Open Graph e Twitter card, **immagine OG 1200×630 per ogni case study** (generata dalla copertina con badge), dati strutturati JSON-LD, `sitemap.xml`, `robots.txt`, pagina 404.

**Accessibilità**: skip link, focus visibile su tutti gli elementi interattivi, alt text in tre lingue, contrasti AA verificati (testo secondario 5,9:1, accento 5,0:1), menu mobile chiudibile con Esc, lightbox con tastiera, `prefers-reduced-motion` rispettato, gerarchia dei titoli corretta.

**Prestazioni e privacy**: font ospitato in locale (nessuna richiesta a Google Fonts), player Spotify caricati solo al clic (prima: 8 iframe per pagina), nessun iframe LinkedIn, CSS senza `backdrop-filter` sulle card e senza effetto “tilt” (più fluido su smartphone), CV ricompresso da 3,4 MB a 1,0 MB senza perdita visibile.

**Animazioni**: View Transitions native tra le pagine (la copertina della card “si trasforma” nella hero del case study nei browser che lo supportano), CD che entra e ruota piano con lo scroll, hover leggeri. Nessun fade-in a ogni sezione.

**Responsive**: layout testato a 390 px e 1440 px, nessuno scroll orizzontale, titoli lunghi (es. “Fernfachhochschule”) ridimensionati automaticamente, spazi verticali ridotti.

**Build**: `package.json` aggiunge `sharp` e `js-yaml` (per lo script immagini); `npm run dev`/`build` eseguono prima lo script. Integrazione Tailwind con `applyBaseStyles: false` (gli stili base erano caricati due volte).

## 4. Contenuti aggiornati
- **Initiative Musik** ora è la posizione attuale (da 09/2026), non più “geplant”.
- Fatti presi da CV e Zeugnisse: collaborazione con Jens Herrndorff (manager dei Fettes Brot), canali Spotify/YouTube/SoundCloud, sistema Backstage di Believe, 30.000+ views per post, Jake La Furia.
- Articolo FFHS sul pitch corretto: era un progetto del modulo Innovationsmanagement (idea «PlasticBank 2.0» → prototipo per filamento 3D da bottiglie PET), senza partner esterno.
- Referenze: aggiunti gli estratti degli Zeugnisse di Eintracht Pankow e Gebrüder Fritz; raccomandazione di Dr. Philipp Meyer completa e tradotta.
- CV sostituito con la versione più recente (refusi corretti).
- Artisti Spotify del progetto musicale con il loro nome (Renis, NAEMI) invece di “Artist-Projekt 1/2”; rimosso il link segnaposto a youtube.com.

## 5. Da controllare
- **Verbano**: i numeri (83.767 visualizzazioni in 14 giorni, 59,8 % da non follower) vengono dallo screenshot `reach-performance` (5–18 agosto). Confermare che sia l’account del Verbano e il periodo giusto.
- **Songwriting Camp** (marzo 2026) è sotto Eintracht Pankow come nel sito precedente, anche se lo stage è finito a gennaio 2026.
- Didascalie delle foto (chi compare, quale evento), ad esempio la foto di copertina di Eintracht Pankow.
- URL del profilo LinkedIn: il sito usa `/in/luca-invernizzi/`, i post usano `lucainve`.
- **Privacy**: i PDF degli Zeugnisse contengono data di nascita e indirizzo; il lavoro di ricerca qualitativo contiene indirizzo e telefono. Valuta di pubblicare versioni con questi dati oscurati.

## 6. File rimossi
- `src/content/medien/`, `src/content/studienarbeiten/` → ora in `src/content/nachweise/`
- `src/data/site.ts` → ora in `src/content/ausbildung/`, `linkedin/`, `referenzen/`, `nachweise/`
- `src/components/ProjectCard.astro`, `LinkedInEmbed.astro` → sostituiti da `WorkCard`, `LinkedInCard`
- `public/images/covers/*.svg`, `og-image.svg/.webp`, `portrait-placeholder.svg`, `textures/cv-paper.webp`, finti loghi SVG di Initiative Musik e Gebrüder Fritz, immagini duplicate (JPG originali, copie WebP identiche), `public/pdf/studienarbeit-placeholder.pdf`
