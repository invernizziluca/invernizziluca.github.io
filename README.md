# Portfolio Luca Invernizzi · Astro + TailwindCSS

Sito personale pubblicato su GitHub Pages: **https://invernizziluca.github.io/**
Lingue: **DE** (root `/` e `/de/`), **EN** (`/en/`), **IT** (`/it/`).

Il sito racconta un percorso in sei capitoli: **01 Ursprung → 02 Business → 03 Berlin → 04 Praxis → 05 Nachweise → 06 Nächster Schritt**.
Strategia, nuova struttura e lista delle modifiche tecniche: vedi [`REDESIGN.md`](REDESIGN.md).

```bash
npm install        # una volta
npm run dev        # anteprima locale su http://localhost:4321
npm run build      # build di controllo (la stessa che fa GitHub)
```

---

## COME AGGIORNARE IL SITO CON AI

### Regole da dare sempre all'AI (copia e incolla)

```
Sei lo sviluppatore del mio portfolio Astro + Tailwind.
Leggi il README.md, sezione "COME AGGIORNARE IL SITO CON AI".
Modifica SOLO il file che ti indico (o creane uno nuovo partendo dalla cartella vorlagen/).
Regole:
- Tutti i contenuti sono in file Markdown/YAML dentro src/content/. Non toccare i componenti se non serve.
- Non aggiungere MAI un campo "slug" nel frontmatter: l'URL è il nome del file.
- Ogni testo esiste in tre lingue: de / en / it (tedesco obbligatorio, EN e IT consigliati).
- Metti i testi e le date tra "virgolette doppie". Date nel formato "2026-06-30", periodi "2025-08".
- Immagini in public/images/..., nei file si scrivono come "/images/...". PDF in public/pdf/..., si scrivono "/pdf/...".
- Restituiscimi il file completo, pronto da copiare.
Compito: <scrivi qui cosa vuoi cambiare>
```

### Dove si trova cosa

| Cosa vuoi cambiare | File |
|---|---|
| Testi della home (titolo, blocchi Jetzt/Davor/Berlin, capitoli 01–03, intro sezioni, prossimo passo, lingue e tool, contatto, SEO) | `src/content/home/home.yaml` |
| La tua foto (hero e contatto) e il suo ritaglio | `src/content/home/home.yaml` → `portrait` / `contactPortrait` |
| Un lavoro / case study (testi, foto, galleria, Spotify, LinkedIn, PDF, link) | `src/content/arbeiten/<nome>.md` |
| Una formazione (FFHS, Kantonsschule, SAMB) | `src/content/ausbildung/<nome>.md` |
| Post LinkedIn | `src/content/linkedin/<nome>.yaml` |
| Referenze / citazioni (foto in `public/images/references/`) | `src/content/referenzen/<nome>.yaml` |
| Certificati, Zeugnisse, articoli, lavori di ricerca (archivio "Nachweise", diviso per tipo) | `src/content/nachweise/<nome>.yaml` |
| Nomi e descrizioni dei gruppi dell'archivio (Zeugnisse, Zertifikate …) | `src/i18n.ts` → `proofGroups` |
| Etichette di menu e bottoni ("Case Study lesen", "Kontakt" …) | `src/i18n.ts` |
| Colori, font, spaziature, look delle card | `src/styles/site.css` |
| Immagini | `public/images/…` |
| PDF (CV, Zeugnisse, certificati) | `public/pdf/…` |
| Modelli da copiare per nuovi contenuti | `vorlagen/` |

### Esempi pronti

**1 · «Aggiungi un nuovo lavoro»**
- Copia `vorlagen/arbeit.md` in `src/content/arbeiten/<nome-del-lavoro>.md` (minuscole e trattini: `label-xyz.md` → URL `/de/arbeiten/label-xyz/`).
- Metti le foto in `public/images/works/<nome-del-lavoro>/` (JPG, PNG o WebP).
- Compila i campi. Con `order` decidi la posizione; con `featured: false` il lavoro va in “Weitere Projekte”.
- Finché il lavoro è in corso lascia fuori `end:` → compare il badge **Aktuell**.
- Prompt: *«Crea `src/content/arbeiten/label-xyz.md` partendo da `vorlagen/arbeit.md`: stage in marketing da Label XYZ, Berlino, da 03/2027. Compiti: … Risultati: … Testi in de/en/it.»*

**2 · «Cambia immagine copertina»**
- File: `src/content/arbeiten/<nome>.md`, blocco `cover:`.
- Cambia `src:` (es. `"/images/works/eintracht-pankow/songwriting-camp-cover.webp"`), aggiorna `alt:` nelle tre lingue.
- Se il ritaglio taglia teste o loghi, modifica `position:` (es. `"center 20%"` = più in alto, `"center 80%"` = più in basso).
- L’immagine per LinkedIn/WhatsApp (Open Graph) si rigenera da sola alla build.

**3 · «Aggiungi un link Spotify»**
- File: `src/content/arbeiten/<nome>.md`.
- Playlist, album o brano → lista `spotify:`; artisti → lista `artists:`. Basta il normale link di condivisione:
  ```yaml
  spotify:
    - url: "https://open.spotify.com/playlist/5CevRvf8lxaVhbfqST1afR"
      title: "Alles gut! | Deutscher Indie Pop"
      note:
        de: "Label-Playlist, die ich gepflegt habe."
  artists:
    - name: "pixxi"
      spotify: "https://open.spotify.com/artist/3Y9fcdMTvsOkdgLXxxwjsE"
  ```
- Il player si carica solo al clic (più veloce e conforme alla privacy).

**4 · «Aggiungi un post LinkedIn»**
- Copia `vorlagen/linkedin.yaml` in `src/content/linkedin/<nome>.yaml`, incolla l’URL del post, data, immagine e testi.
- `url` deve essere il **link diretto al post** (su LinkedIn: “…” → “Copia link al post”): cliccando in qualsiasi punto della card si apre quel post in una nuova scheda.
- In home appaiono i primi **3** post con `showOnHome: true`, ordinati per `order`.
- Per mostrarlo anche dentro un lavoro: in `src/content/arbeiten/<lavoro>.md` aggiungi il nome del file alla lista, es. `linkedin: ["songwriting-camp", "<nome>"]`. In home la card mostrerà “Gehört zu <lavoro>” (solo testo).

**5 · «Modifica testo home»**
- File: `src/content/home/home.yaml`. Ogni testo ha `de:`, `en:`, `it:` → cambia tutte e tre.
- Sezioni: `hero` (titolo e intro), `status` (Jetzt / Davor / Warum Berlin), `werdegang.chapters` (capitoli 01–03), `praxis`, `nachweise`, `next` (Wohin ich will), `skills` (lingue e tool, livelli 0–5), `kontakt`, `seo`.
- Prompt: *«In `src/content/home/home.yaml` cambia `hero.title` in tutte e tre le lingue con: …»*

**6 · «Aggiungi una nuova referenza»**
- Copia `vorlagen/referenz.yaml` in `src/content/referenzen/<nome-cognome>.yaml`.
- Cita il testo **originale**, traduci in `en`/`it` (il sito indica “Übersetzt aus dem Deutschen”).
- `featured: true` = citazione grande in home (una sola).
- **Foto**: quadrata (circa 240 × 240 px), in `public/images/references/<nome-cognome>.webp`, poi nel file `image: "/images/references/<nome-cognome>.webp"`. Senza foto compaiono le iniziali.

**Altri casi frequenti**
- **Nuovo certificato o PDF**: PDF in `public/pdf/…`, poi copia `vorlagen/nachweis.yaml` in `src/content/nachweise/<nome>.yaml`. Il campo `type` decide il gruppo dell’archivio: `zeugnis` → Zeugnisse, `zertifikat` → Zertifikate, `artikel` → Erwähnungen, `forschung` → Forschung, `empfehlung` → Empfehlungen. Per collegarlo a un lavoro: `nachweise: ["<nome>"]` nel file del lavoro.
- **La tua foto è tagliata male**: in `src/content/home/home.yaml` cambia `portrait.position` (hero) o `contactPortrait.position` (contatto): `"50% 0%"` = parte alta della foto, `"50% 30%"` = più in basso.
- **Nuovo CV**: sostituisci `public/pdf/cv-luca-invernizzi.pdf` (stesso nome file).
- **Fine dello stage alla Initiative Musik**: in `src/content/arbeiten/initiative-musik.md` aggiungi `end: "2027-02"` e compila `outputs:`; aggiorna `status` in `src/content/home/home.yaml`.
- **Ordine dei lavori**: campo `order` nei file di `src/content/arbeiten/`.

### Se la build segnala un errore
Il messaggio indica file e campo, ad esempio `arbeiten/label-xyz.md → start: Use the format "YYYY-MM"`. Correggi quel campo. Errori tipici: virgolette mancanti, indentazione YAML sbagliata (usa 2 spazi), nome di un post/nachweis scritto male nelle liste `linkedin:` o `nachweise:`.

---

## Struttura del progetto

```
src/
  content/                 ← TUTTI i contenuti (modificabili con AI)
    home/home.yaml           testi della home
    arbeiten/*.md            case study (1 file = 1 pagina)
    ausbildung/*.md          formazione (1 file = 1 pagina)
    nachweise/*.yaml         Zeugnisse, certificati, articoli, ricerca
    linkedin/*.yaml          post LinkedIn
    referenzen/*.yaml        citazioni
    config.ts                schema: controlla che i campi siano corretti
  components/              ← blocchi riutilizzabili
    HomePage.astro           composizione della home
    WorkCard.astro           card lavoro
    CaseStudyHero.astro      testata del case study
    CaseSection.astro        sezione del case study (Kontext, Rolle, …)
    Timeline.astro           capitoli 01–03 della home
    ReferenceCard.astro      citazione
    LinkedInCard.astro       post LinkedIn
    ProofCard.astro          documento / certificato
    GalleryGrid.astro        galleria con lightbox
    SpotifyEmbed.astro       player Spotify (si carica al clic)
    Img.astro                immagini responsive
    Disc.astro               il piccolo CD usato come marker
    Header / Footer / ChapterHead / SkillRating / Icon
  layouts/BaseLayout.astro ← <head>, SEO, Open Graph, hreflang
  pages/                   ← rotte (/, /[lang]/, /[lang]/arbeiten/[slug]/, /[lang]/ausbildung/[id]/, 404, sitemap.xml)
  lib/                     ← funzioni di supporto (lingue, date, URL, immagini, Spotify)
  i18n.ts                  ← etichette di interfaccia DE/EN/IT
  styles/                  ← global.css (Tailwind) + site.css (design system)
  assets/fonts/            ← font Archivo (OFL), ospitato in locale
public/                    ← immagini e PDF pubblici
scripts/prepare-images.mjs ← versioni ridotte delle immagini + immagini Open Graph (gira prima di dev/build)
vorlagen/                  ← modelli per nuovi contenuti
.github/workflows/deploy.yml ← pubblicazione automatica su GitHub Pages
```

## Note tecniche

- **Nessun `slug` nel frontmatter**: l’URL viene dal nome del file.
- **Immagini**: prima di ogni build `scripts/prepare-images.mjs` crea versioni da 480/960/1600 px in `public/generated/` (non va su Git) e un file `src/data/generated/images.json`. Se lo script non riesce, il sito usa semplicemente le immagini originali.
- **Open Graph**: ogni case study e ogni formazione ricevono un’immagine 1200 × 630 generata dalla copertina; si può forzarne un’altra con `ogImage: "/images/..."` nel file del lavoro. L’immagine della home è `public/images/og/home.jpg`.
- **SEO**: title e description per pagina, canonical, hreflang DE/EN/IT, dati strutturati (Person / CreativeWork), `sitemap.xml` generata da `src/pages/sitemap.xml.ts`, `public/robots.txt`. Non reinstallare `@astrojs/sitemap` (in passato dava errori in `astro:build:done`).
- **Font**: Archivo variabile in `src/assets/fonts/` (nessuna richiesta a Google Fonts).
- **Privacy e velocità**: Spotify si carica solo al clic, LinkedIn è mostrato come anteprima senza iframe.
- **Animazioni**: transizioni di pagina native (View Transitions via CSS) e un solo movimento in home (il CD dietro il ritratto). Con “riduci movimento” attivo sul dispositivo, tutto resta fermo.
- **Mobile**: su smartphone la foto sta sotto il titolo, i blocchi Jetzt/Davor/Warum Berlin e i post LinkedIn scorrono in orizzontale, i capitoli 01–03 hanno una piccola copertina; le regole sono in `src/styles/site.css` (cerca `@media (max-width`).
- **Accessibilità**: link “Zum Inhalt springen”, focus visibile, testo alternativo per ogni immagine, contrasto AA.

## Pubblicazione su GitHub Pages

Ogni push su `main` avvia `.github/workflows/deploy.yml` (install → build → deploy). Se la build fallisce, online resta la versione precedente: apri la scheda **Actions** su GitHub per vedere l’errore.

**Come caricare questa cartella nel repository**
- Con **GitHub Desktop** (consigliato): nella cartella locale del repository cancella tutto tranne la cartella nascosta `.git`, copia dentro il contenuto di questa cartella, poi *Commit to main* → *Push origin*. I file eliminati risultano correttamente come “deleted”.
- Dal **sito di GitHub** (“Add file → Upload files”) i file caricati sostituiscono quelli con lo stesso nome, ma i file eliminati o rinominati non vengono cancellati: in quel caso cancellali anche su GitHub.
