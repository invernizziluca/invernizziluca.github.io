# Luca Invernizzi Portfolio — Astro + TailwindCSS

Questo progetto è pronto per GitHub Pages: One Page principale, pagine dinamiche per le Arbeiten, contenuti in Markdown/frontmatter, lingue DE / IT / EN e design minimal Apple-like.

## Avvio locale / Codespaces

```bash
npm install
npm run dev
```

Apri la preview sulla porta 4321.

## Build

```bash
npm run build
```

## Pubblicazione GitHub Pages

Il workflow è già incluso in `.github/workflows/deploy.yml`.

1. Carica i file nella repository `invernizziluca.github.io`.
2. Vai in `Settings → Pages`.
3. Seleziona `GitHub Actions` come sorgente.
4. Ogni commit su `main` pubblica automaticamente il sito.

## Aggiungere un lavoro

Crea un nuovo file in:

```text
src/content/arbeiten/nuovo-lavoro.md
```

Usa come modello uno dei file esistenti. Le immagini vanno in:

```text
public/images/works/nome-lavoro/
```

Nel Markdown il percorso immagine deve iniziare da `/images/...` oppure `images/...`.

## Foto e PDF

- Immagini: `public/images/`
- CV e paper: `public/pdf/`
- Favicon: `public/favicon.png`

## Versione aggiornata

Questa versione include le immagini reali fornite: portrait, project images per Verbano Unihockey, Eigenes Musikprojekt, Gebrüder Fritz Locations, Eintracht Pankow Musik, favicon e logo.
