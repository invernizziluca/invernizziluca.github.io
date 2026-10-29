---
# VORLAGE / TEMPLATE · nuovo lavoro (case study)
# 1. Copia questo file in  src/content/arbeiten/<nome-del-lavoro>.md
#    (solo minuscole e trattini, es. "label-xyz.md" -> URL /de/arbeiten/label-xyz/)
# 2. Metti le immagini in   public/images/works/<nome-del-lavoro>/
# 3. Compila i campi. NON aggiungere mai un campo "slug".
# 4. "en:" e "it:" sono facoltativi: se manca un campo, il sito usa il testo tedesco.

order: 1                     # posizione nella griglia (1 = primo). Sposta gli altri numeri se serve.
featured: true               # true = card grande in "Praxis"; false = "Weitere Projekte"
company: "Nome dell'azienda GmbH"
location:
  de: "Berlin"
  en: "Berlin"
  it: "Berlino"
start: "2026-11"             # anno-mese di inizio
# end: "2027-04"             # anno-mese di fine. Lascialo commentato finché il lavoro è in corso (badge "Aktuell")
website: "https://www.example.com/"

cover:
  src: "/images/works/nome-del-lavoro/cover.webp"
  position: "center 30%"     # quale parte della foto resta visibile nel ritaglio (x y)
  alt:
    de: "Beschreibung des Bildes"
    en: "Description of the image"
    it: "Descrizione dell'immagine"

tags: ["PR", "Social Media"]     # parole chiave (SEO)
tools: ["Canva", "Asana"]          # termini in inglese: valgono per tutte le lingue

gallery:
  - src: "/images/works/nome-del-lavoro/foto-1.webp"
    alt:
      de: "Was auf dem Foto zu sehen ist"
      en: "What the photo shows"
      it: "Cosa mostra la foto"
    caption:
      de: "Kurze Bildunterschrift (optional)"

spotify:                     # link normale di Spotify (playlist, artista, album o brano)
  - url: "https://open.spotify.com/playlist/XXXXXXXXXXXXXXXXXXXXXX"
    title: "Nome della playlist"
    note:
      de: "Ein Satz, warum der Player hier ist."

artists: []                  # es. - name: "Artist"  spotify: "https://open.spotify.com/artist/…"
linkedin: []                 # nomi dei file in src/content/linkedin/ senza .yaml, es. ["songwriting-camp"]
nachweise: []                # nomi dei file in src/content/nachweise/ senza .yaml, es. ["zeugnis-xyz"]
links: []                    # link extra, es. - label: "Instagram"  url: "https://…"

de:
  title: "Name der Station"
  role: "Meine Rolle (Praktikum)"
  category: "Kurzes Feld, z. B. Presse & PR"
  summary: "1–2 Sätze für Karte und Google (max. ca. 160 Zeichen)."
  context: "Kontext: Wo war ich und warum war es wichtig?"
  contribution: "Meine Rolle: Was habe ich konkret gemacht?"
  tasks:
    - "Konkrete Aufgabe 1"
    - "Konkrete Aufgabe 2"
  highlights:                # facoltativo: numeri in evidenza
    - value: "30.000+"
      label: "Views pro Beitrag"
  outputs:
    - "Ergebnis 1"
  learnings:
    - "Was ich gelernt habe"
  relevance: "Warum diese Erfahrung für meinen nächsten Schritt wichtig ist."

en:
  title: "Name of the role"
  role: "My role (internship)"
  category: "Short field, e.g. Press & PR"
  summary: "1–2 sentences for the card and Google."
  context: "Context: where was I and why did it matter?"
  contribution: "My role: what did I do?"
  tasks: ["Task 1", "Task 2"]
  outputs: ["Result 1"]
  learnings: ["What I learned"]
  relevance: "Why this matters for my next step."

it:
  title: "Nome dell'esperienza"
  role: "Il mio ruolo (stage)"
  category: "Ambito breve, es. Ufficio stampa e PR"
  summary: "1–2 frasi per la card e per Google."
  context: "Contesto: dove ero e perché era importante?"
  contribution: "Il mio ruolo: cosa ho fatto concretamente?"
  tasks: ["Attività 1", "Attività 2"]
  outputs: ["Risultato 1"]
  learnings: ["Cosa ho imparato"]
  relevance: "Perché questa esperienza conta per il mio prossimo passo."
---
