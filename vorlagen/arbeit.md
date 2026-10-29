---
# VORLAGE / TEMPLATE · nuovo lavoro (case study)
# 1. Copia questo file in  src/content/arbeiten/<nome-del-lavoro>.md
#    (solo minuscole e trattini, es. "label-xyz.md" -> URL /de/arbeiten/label-xyz/)
# 2. Metti le immagini in   public/images/works/<nome-del-lavoro>/
# 3. Compila i campi. NON aggiungere mai un campo "slug".
# 4. "en:" e "it:" sono facoltativi: se manca un campo, il sito usa il testo tedesco.
# Regola d'oro: scrivi solo ciò che hai fatto tu e che puoi provare. Ciò che ha fatto il team va in "scope".

order: 6                     # posizione nella lista "Stationen" (1 = prima). Sposta gli altri numeri se serve.
company: "Nome dell'azienda GmbH"
location:
  de: "Berlin"
  en: "Berlin"
  it: "Berlino"
start: "2026-11"             # anno-mese di inizio
# end: "2027-04"             # anno-mese di fine. Lascialo commentato finché il lavoro è in corso (badge "Aktuell")
website: "https://www.example.com/"

cover:
  src: "/images/works/nome-del-lavoro/cover.webp"   # almeno 1600 px di larghezza (le immagini piccole restano piccole)
  position: "center 30%"     # quale parte della foto resta visibile nel ritaglio (x y)
  alt:
    de: "Beschreibung des Bildes"
    en: "Description of the image"
    it: "Descrizione dell'immagine"

tags: ["PR", "Social Media"]     # parole chiave (SEO)
tools: ["Canva", "Asana"]          # solo strumenti usati davvero in questo lavoro

gallery:
  - src: "/images/works/nome-del-lavoro/foto-1.webp"
    alt:
      de: "Was auf dem Foto zu sehen ist"
      en: "What the photo shows"
      it: "Cosa mostra la foto"
    caption:                 # facoltativa; per materiali di terzi scrivi chi li ha creati, es. "Visual: Label XYZ"
      de: "Kurze Bildunterschrift"

spotify: []                  # es. - url: "https://open.spotify.com/playlist/…"  title: "Nome"  note: { de: "…" }
artists: []                  # es. - name: "Artist"  spotify: "https://open.spotify.com/artist/…"
linkedin: []                 # nomi dei file in src/content/linkedin/ senza .yaml, es. ["songwriting-camp"]
nachweise: []                # nomi dei file in src/content/nachweise/ senza .yaml, es. ["zeugnis-xyz"]
links: []                    # link pubblici, es. - label: { de: "Instagram-Beitrag", en: "Instagram post", it: "Post Instagram" }  url: "https://…"

de:
  title: "Name der Station"
  role: "Praktikum Marketing"          # esattamente come nel contratto o nello Zeugnis
  category: "Kurzes Feld, z. B. Presse & PR"
  summary: "1–2 Sätze für die Liste und Google (max. ca. 160 Zeichen)."
  context: "Kontext: Was ist die Organisation, worum ging es?"
  goal: "Ziel: Wofür war die Arbeit da?"
  contribution: "Mein Beitrag: Was habe ich selbst gemacht?"
  tasks:
    - "Konkrete Aufgabe 1"
    - "Konkrete Aufgabe 2"
  scope: "Abgrenzung: Was hat das Team gemacht, was behaupte ich ausdrücklich nicht?"
  outputs:
    - "Ergebnis oder veröffentlichte Arbeit 1"
  highlights:                # facoltativo: SOLO numeri documentati (screenshot, Zeugnis, fonte pubblica)
    - value: "1.234"
      label: "Was die Zahl misst und in welchem Zeitraum"
  highlightsSource: "Quelle: … Was die Zahl NICHT bedeutet: …"
  learnings:
    - "Was ich gelernt habe"

en:
  title: "Name of the role"
  role: "Internship, marketing"
  category: "Short field, e.g. Press & PR"
  summary: "1–2 sentences for the list and Google."
  context: "Context: what is the organisation, what was it about?"
  goal: "Goal: what was the work for?"
  contribution: "My contribution: what did I do myself?"
  tasks: ["Task 1", "Task 2"]
  scope: "What was not mine: what did the team do, what do I not claim?"
  outputs: ["Result 1"]
  learnings: ["What I learned"]

it:
  title: "Nome dell'esperienza"
  role: "Stage, marketing"
  category: "Ambito breve, es. Ufficio stampa e PR"
  summary: "1–2 frasi per la lista e per Google."
  context: "Contesto: che cos'è l'organizzazione, di cosa si trattava?"
  goal: "Obiettivo: a cosa serviva il lavoro?"
  contribution: "Il mio contributo: cosa ho fatto io?"
  tasks: ["Attività 1", "Attività 2"]
  scope: "Cosa non è mio: cosa ha fatto il team, cosa non rivendico?"
  outputs: ["Risultato 1"]
  learnings: ["Cosa ho imparato"]
---
