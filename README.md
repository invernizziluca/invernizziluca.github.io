# Luca Invernizzi Portfolio — Astro + TailwindCSS

Questo progetto è pronto per GitHub Pages: One Page principale, pagine dinamiche per le Arbeiten, contenuti in Markdown/frontmatter, lingue DE / IT / EN e design minimal Apple-like.

## 1. Come provarlo sul computer

Installa Node.js, poi nella cartella del progetto:

```bash
npm install
npm run dev
```

Apri l'indirizzo mostrato dal terminale, di solito `http://localhost:4321`.

## 2. Come provarlo online senza installare nulla

Puoi caricare questa cartella su StackBlitz o GitHub Codespaces. Per il primo test rapido, StackBlitz è il modo più semplice.

## 3. Come pubblicarlo su GitHub Pages

1. Crea una repository GitHub, per esempio `luca-portfolio`.
2. Carica tutti i file di questa cartella nella root della repository, non caricare solo lo ZIP.
3. Vai in `Settings > Pages`.
4. In `Build and deployment`, scegli `GitHub Actions`.
5. Fai commit/push su branch `main`.
6. Vai nella tab `Actions` e aspetta che il workflow finisca.
7. Il sito sarà disponibile su un URL simile a:
   - `https://TUO-USERNAME.github.io/luca-portfolio/`

Se chiami la repository esattamente `TUO-USERNAME.github.io`, il sito sarà su:

```text
https://TUO-USERNAME.github.io/
```

## 4. Dove modificare testi e contenuti

### Arbeiten

I lavori sono qui:

```text
src/content/arbeiten/
```

Per aggiungere un lavoro, copia uno dei file `.md`, cambia `slug`, `title`, testi, tools e immagini.

### Studienarbeiten

```text
src/content/studienarbeiten/
```

### Medien

```text
src/content/medien/
```

## 5. Dove mettere immagini e PDF

Immagini:

```text
public/images/
```

Cover lavori:

```text
public/images/covers/
```

PDF:

```text
public/pdf/
```

Poi nei file Markdown usa percorsi senza slash iniziale, per esempio:

```yaml
cover: "images/covers/verbano-cover.svg"
pdf: "pdf/cv-luca-invernizzi.pdf"
```

## 6. CV, email e LinkedIn

Sostituisci questi placeholder:

- `public/pdf/cv-luca-invernizzi.pdf` con il tuo CV reale.
- In `src/pages/[lang]/index.astro`, cerca `mailto:hello@example.com` e inserisci la tua email.
- Sempre lì, cerca `https://www.linkedin.com/` e inserisci il tuo profilo LinkedIn.

## 7. Lingue

Il sito ha tre lingue:

- `/de/`
- `/it/`
- `/en/`

I testi statici sono in:

```text
src/i18n.ts
```

I testi dei lavori sono nei file Markdown sotto `translations.de`, `translations.it`, `translations.en`.

## 8. Dominio personalizzato

Se un giorno compri un dominio, crea un file `public/CNAME` con dentro solo il dominio, per esempio:

```text
lucainvernizzi.com
```

Poi configura il dominio in GitHub Pages.
