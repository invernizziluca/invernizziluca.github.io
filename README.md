# Portfolio musicale · Luca Invernizzi

Sito per label, management, PR e agenzie musicali: **https://invernizziluca.github.io/**
(per candidature fuori dalla musica c'è il sito business: `https://invernizziluca.github.io/work/`).

Lingue: **DE** (alla radice `/` e in `/de/`), **EN** (`/en/`), **IT** (`/it/`).
Tecnologia: **Astro 4** con contenuti in Markdown/YAML, CSS proprio con design token (`src/styles/site.css`). Design condiviso con il sito business: vedi [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md). Novità: [`CHANGELOG.md`](CHANGELOG.md).

```bash
npm ci             # installa le versioni esatte di package-lock.json (una volta)
npm run dev        # anteprima su http://localhost:4321
npm run build      # build di controllo, identica a quella di GitHub (crea dist/)
npm run preview    # mostra la cartella dist/ come la vedrà GitHub
```

Serve Node.js 18.17 o più recente; consigliato Node 22, lo stesso che usa GitHub.

---

## Pubblicare su GitHub Pages

Nulla viene pubblicato finché non carichi i file sul repository `invernizziluca.github.io` (branch `main`). Da lì parte da solo `.github/workflows/deploy.yml`: installa, compila, pubblica.

**Prima volta (o se il sito non si aggiorna):**
1. Su GitHub apri il repository → **Settings → Pages** → in *Build and deployment* scegli **Source: GitHub Actions**.
2. Controlla che il repository si chiami esattamente `invernizziluca.github.io` (così l'indirizzo è la radice del dominio).

**Ogni aggiornamento:**
1. Prova in locale: `npm ci` e `npm run build` devono finire senza errori.
2. Con **GitHub Desktop** (consigliato): nella cartella del repository cancella tutto tranne la cartella nascosta `.git`, copia dentro il contenuto di questa cartella (senza `node_modules/` e `dist/`), poi *Commit to main* → *Push origin*. I file tolti risultano "deleted", come deve essere.
3. Dal **sito di GitHub** ("Add file → Upload files") i file con lo stesso nome vengono sostituiti, ma quelli eliminati o rinominati restano: cancellali a mano (vedi l'elenco dei file eliminati nella consegna).
4. Apri la scheda **Actions**: quando il workflow è verde (circa 1–2 minuti), il sito è online. Se è rosso, il vecchio sito resta online; clicca sul passo fallito per leggere l'errore.
5. Dopo la pubblicazione: apri la home e un case study su telefono e computer, prova il CV e un link esterno.

**Attenzione alla cronologia:** i file tolti dal repository (per esempio le vecchie note di lavoro) restano visibili nella cronologia di Git se il repository è pubblico.

---

## Come aggiornare i contenuti

Tutti i testi sono in `src/content/`. I componenti in `src/components/` non vanno toccati per aggiornare i contenuti.

### Regole (da dare anche a un'AI)

```
Sei lo sviluppatore del mio portfolio musicale (Astro).
Leggi README.md e DESIGN_SYSTEM.md. Modifica SOLO i file in src/content/ (o creane uno nuovo da vorlagen/).
Regole:
- Ogni testo esiste in de / en / it (il tedesco è obbligatorio; se manca en o it il sito usa il tedesco).
- Tedesco con "du". Niente campo "slug": l'indirizzo è il nome del file.
- Testi e date tra "virgolette doppie". Mesi "2025-08", date "2026-06-30". Indentazione YAML: 2 spazi.
- Immagini in public/images/…, nei file "/images/…". PDF in public/pdf/…, nei file "/pdf/…".
- Solo fatti dimostrabili. Ciò che ho fatto io va in "contribution"/"mine"; ciò che ha fatto il team in "scope"/"credit".
- Numeri solo con fonte (highlightsSource / metric.source). Le dichiarazioni proprie si scrivono come tali ("eigene Angabe").
- Restituiscimi il file completo.
Compito: <cosa vuoi cambiare>
```

### Dove si trova cosa

| Cosa | File |
|---|---|
| Home: hero, lavori scelti, testi delle sezioni, lingue e strumenti, contatto, SEO | `src/content/home/home.yaml` |
| Un lavoro / case study | `src/content/arbeiten/<nome>.md` |
| Una formazione | `src/content/ausbildung/<nome>.md` |
| Zeugnisse, attestati, articoli, ricerche | `src/content/nachweise/<nome>.yaml` |
| Post LinkedIn | `src/content/linkedin/<nome>.yaml` |
| Citazioni (referenze) | `src/content/referenzen/<nome>.yaml` |
| Etichette di menu e bottoni | `src/i18n.ts` |
| Colori, caratteri, spazi | `src/styles/site.css` (sezione 2, token) |
| Logo, favicon, anteprima della home | `scripts/brand/make_brand_assets.py` |
| CV | `cv-source/music-general-2026.tex` → `public/pdf/cv-luca-invernizzi.pdf` |
| Modelli da copiare | `vorlagen/` |

### Le operazioni più frequenti, nelle tre lingue

**Un nuovo lavoro (case study)**
1. Copia `vorlagen/arbeit.md` in `src/content/arbeiten/<nome>.md` (minuscole e trattini: `label-xyz.md` → `/de/arbeiten/label-xyz/`, `/en/arbeiten/label-xyz/`, `/it/arbeiten/label-xyz/`).
2. Foto in `public/images/works/<nome>/` (WebP o JPG, almeno 1600 px di larghezza). Ogni foto ha `alt` in de/en/it; materiali di altri con il credito in `caption` ("Visual: …").
3. Compila `de:` e, se puoi, `en:` e `it:`: `summary` (max ~160 caratteri, va anche su Google), `context`, `goal`, `contribution`, `tasks`, `scope` (cosa non era tuo), `outputs`, `learnings`.
4. Finché il lavoro è in corso lascia fuori `end:` (badge "Aktuell"). `order` decide la posizione.
5. Per metterlo tra i lavori scelti della home: aggiungi una voce in `home.yaml` → `selectedWork.items` con `case: "<nome>"`.

**Un post LinkedIn o un link Instagram**
- Post LinkedIn: copia `vorlagen/linkedin.yaml` in `src/content/linkedin/<nome>.yaml`; `url` = link diretto al post ("…" → "Copia link"); `author` solo se il post non è tuo; immagine senza dati privati di altri. Con `showOnHome: true` compare in home (i primi 3). Per mostrarlo in un lavoro aggiungi `<nome>` alla lista `linkedin:` di quel lavoro.
- Link Instagram (o un altro link pubblico): nel file del lavoro, lista `links:`
  ```yaml
  links:
    - label: { de: "Instagram-Beitrag (APPLAUS 2026)", en: "Instagram post (APPLAUS 2026)", it: "Post Instagram (APPLAUS 2026)" }
      url: "https://www.instagram.com/p/…/"
  ```

**Un Arbeitszeugnis**
1. Oscura data di nascita, indirizzo, telefono e luogo d'origine **trasformando la pagina in immagine** (un rettangolo nero sopra il testo non basta: il testo resta copiabile). Controlla con `pdftotext file.pdf -` che i dati non ci siano più e pulisci titolo/autore del PDF.
2. Metti il PDF in `public/pdf/` e una miniatura (dalla versione oscurata) in `public/images/proof/`.
3. Copia `vorlagen/nachweis.yaml` in `src/content/nachweise/zeugnis-<firma>.yaml` con `type: "zeugnis"`; nel `summary` cita le frasi tra „…“ alla lettera.
4. Collegalo al lavoro: `nachweise: ["zeugnis-<firma>"]`. Per una citazione in home usa `vorlagen/referenz.yaml`.

**Una metrica con screenshot**
1. Screenshot senza dati personali (ritaglia nomi, foto profilo, messaggi). Mettilo in `public/images/works/<lavoro>/`.
2. Nel lavoro: lo screenshot nella `gallery` (con `alt` che riporta i numeri), poi
   ```yaml
   de:
     highlights:
       - value: "83.767"
         label: "Aufrufe in 14 Tagen (5.–18. August)"
     highlightsSource: "Quelle: Instagram Insights des Vereinskontos (Screenshot unten)."
   ```
   e lo stesso in `en:`/`it:` (separatori 83,767 / 83.767, "59.8%" / "59,8 %").
3. Scrivi in `scope` a cosa si riferisce il numero (tutto l'account? solo i tuoi post? pubblicità sì/no?).

**Un progetto universitario**
- Il PDF (oscurato se serve) in `public/pdf/research/` o `public/pdf/certificates/`, poi `vorlagen/nachweis.yaml` con `type: "forschung"` o `"zertifikat"`.
- Nel file della formazione (`src/content/ausbildung/ffhs.md`): una riga in `points:` nelle tre lingue e il nome del documento in `nachweise: [...]`. Un eventuale post LinkedIn in `linkedin: [...]`.

**Altri casi**
- Fine dello stage all'Initiative Musik: in `src/content/arbeiten/initiative-musik.md` aggiungi `end: "2027-02"`, aggiorna `outputs` e, in `home.yaml`, il fatto "Aktuell" della hero.
- Laurea FFHS: in `src/content/ausbildung/ffhs.md` sostituisci `expectedEnd:` con `end:`.
- Foto tagliata male: cambia `position:` (es. `"center 20%"` = più in alto).
- Errore della build: il messaggio indica file e campo (es. `arbeiten/label-xyz.md → start`). Errori tipici: virgolette mancanti, indentazione, un nome sbagliato nelle liste `linkedin:` o `nachweise:`.

### Il CV

`cv-source/music-general-2026.tex` (XeLaTeX, font Archivo in `cv-source/fonts/`):
```bash
cd cv-source
xelatex music-general-2026.tex && xelatex music-general-2026.tex
cp music-general-2026.pdf ../public/pdf/cv-luca-invernizzi.pdf
```
Su Overleaf: carica il file e la cartella `fonts/`, compilatore **XeLaTeX**. Il numero di telefono e la cittadinanza sono nascosti nel PDF pubblico: per un CV da inviare direttamente cambia `\showphonefalse` in `\showphonetrue` (e `\showcitizenshipfalse` in `\showcitizenshiptrue`). Il link portfolio resta `https://invernizziluca.github.io` (senza `/work/`).

---

## Prima di pubblicare: controllo rapido

- [ ] `npm run build` senza errori.
- [ ] Nessun numero o risultato senza fonte; "La mia parte" contiene solo il tuo lavoro.
- [ ] Nessun dato personale nei PDF e nelle immagini (data di nascita, indirizzo, telefono, volti e nomi di terzi in screenshot).
- [ ] Nessun documento interno di un datore di lavoro in `public/`.
- [ ] Permesso per i visual di terzi (APPLAUS: vedi la consegna); altrimenti togli le voci dalla `gallery` e lascia i link ai post.
- [ ] Home e un case study controllati su telefono e computer.

## Struttura del progetto

```
src/
  content/                  tutti i contenuti (Markdown/YAML) + config.ts (schema: controlla i campi)
    home/home.yaml            home
    arbeiten/*.md             case study (un file = una pagina per lingua)
    ausbildung/*.md           formazione
    nachweise/*.yaml          Zeugnisse, attestati, articoli, ricerche
    linkedin/*.yaml           post LinkedIn
    referenzen/*.yaml         citazioni
  components/               HomePage, SelectedWork, Header, Footer, SectionHead, CaseStudyHero, CaseSection,
                            GalleryGrid (lightbox), ProofCard, ReferenceCard, LinkedInCard, SpotifyEmbed,
                            ExtLink (link esterni), Img (immagini responsive), Icon
  layouts/BaseLayout.astro  <head>: SEO, canonical, hreflang, Open Graph, favicon
  pages/                    /, /[lang]/, /[lang]/arbeiten/[slug]/, /[lang]/ausbildung/[id]/, 404, sitemap.xml
  lib/                      lingue, date, URL, immagini, Spotify
  i18n.ts                   etichette DE/EN/IT
  styles/site.css           design system (global.css carica solo il reset di Tailwind)
  assets/fonts/             Archivo (OFL), ospitato in locale
public/                     immagini, PDF, favicon, robots.txt
scripts/prepare-images.mjs  versioni ridotte delle immagini e anteprime Open Graph (gira prima di dev e build)
scripts/brand/              logo e generatore delle immagini del marchio
cv-source/                  CV in LaTeX + font
vorlagen/                   modelli per nuovi contenuti
.github/workflows/deploy.yml pubblicazione su GitHub Pages
```

## Note tecniche

- **Immagini**: `scripts/prepare-images.mjs` (sharp) crea versioni da 480/960/1600 px in `public/generated/` e il file `src/data/generated/images.json`; entrambi non vanno su Git. Se lo script non riesce, il sito usa le immagini originali.
- **Open Graph**: ogni case study e formazione riceve un'immagine 1200 × 630 dalla copertina con il badge del nome; la home usa `public/images/og/home.jpg`.
- **SEO**: title e description per pagina, canonical, hreflang DE/EN/IT + x-default, dati strutturati (Person, CreativeWork), `sitemap.xml` da `src/pages/sitemap.xml.ts`, `robots.txt` con le sitemap dei due siti.
- **Privacy e velocità**: font locale, Spotify solo dopo il clic, LinkedIn come anteprima senza iframe, nessun tracking.
- **Tema**: solo chiaro, anche con il telefono in modalità scura (`color-scheme: light`).
- **Accessibilità**: skip link, focus visibile, alt text, contrasto AA, menu e lightbox da tastiera, "riduci movimento" rispettato.
