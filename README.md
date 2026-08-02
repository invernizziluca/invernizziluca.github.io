# Luca Invernizzi Portfolio - Astro + TailwindCSS

Portfolio statico per GitHub Pages con One Page principale, pagine lavoro, pagine formazione, database LinkedIn, social proof, referenze, certificati e research.

## Importante per questo progetto

- Non inserire mai `slug` nel frontmatter delle content collections Astro (`src/content/arbeiten/*.md`, ecc.). Astro genera lo slug automaticamente dal nome del file.
- `@astrojs/sitemap` è stato rimosso perché in questo progetto aveva creato errori durante `astro:build:done`.
- Lingue: `DE`, `EN`, `IT` in questo ordine.
- Le immagini pubbliche vanno in `public/images/...` e nel codice si richiamano con `/images/...`.
- I PDF pubblici vanno in `public/pdf/...` e si richiamano con `/pdf/...`.

## Comandi

```bash
npm install
npm run dev
npm run build
```

## Aggiungere un lavoro

Crea un file in `src/content/arbeiten/nuovo-lavoro.md`. Il nome del file diventa l'URL.

Esempio: `nuovo-lavoro.md` -> `/de/arbeiten/nuovo-lavoro/`.

## Aggiungere un post LinkedIn

Apri `src/data/site.ts` e aggiungi un oggetto in `linkedinPosts` con `src`, `height` e `title` nelle tre lingue. La home mostra automaticamente i primi 3; la pagina `/de/linkedin/` mostra tutti.

## Aggiungere un certificato o un PDF

Copia il PDF in `public/pdf/certificates/` oppure `public/pdf/research/` e aggiungi la relativa voce in `src/data/site.ts` o in `src/content/studienarbeiten/`.

## Deploy su GitHub Pages

La GitHub Action in `.github/workflows/deploy.yml` imposta automaticamente `BASE_PATH` in base al nome repository. Per `invernizziluca.github.io` pubblica sulla root `https://invernizziluca.github.io/`.
