# Askfält – officiell webbplats (v1.0)

Publik, tvåspråkig marknadsföringswebbplats för Askfält. Statisk HTML/CSS/JS utan byggsteg, ramverk eller externa beroenden.

- Produktionsdomän: **https://askfalt.se**
- Svenska: `/` · Engelska: `/en/`
- Undersidor: `/devlog/`, `/roadmap/`, `/support/`, `/privacy/`, `/terms/`, `/license/` (+ `/en/…`)
- Spel: webb/PWA nu, iOS **planerad** 1 november 2026 (mål, inte löfte).

## Struktur
```
index.html, en/index.html      Startsidor (A–J: hero, värld, tidslinje, koloni, dygn, försvar, återta, galleri, video, spela)
devlog|roadmap/                Versionslogg (nyast överst) och roadmap v2.2→v3.0 + multiplayer; speglas under en/
support|privacy|terms|license/ Undersidor, speglas under en/
style.css                      Hela designsystemet (färger, typografi, knappar, sektioner)
main.js                        Meny, scroll-avslöjanden, parallax, askpartiklar, tidslinje, dag/natt, bildvisning, lazy video
404.html                       Felsida (rotabsoluta sökvägar)
site.webmanifest, robots.txt, sitemap.xml, .well-known/security.txt
assets/                        Spelbilder (WebP), ikoner, og-image.jpg
docs/BILDLISTA.md              Önskat kompletterande bildmaterial
docs/COMMIT.md                 Kommandon för commit/PR
```

## Vanliga ändringar
- **Ny spelversion eller ändrad plan:** uppdatera `/devlog/` och `/roadmap/` (sv + en) enligt *Hålla webbplatsen i synk med spelet* i `AGENTS.md`. Varje post i devloggen är ett `<li>` i `ol.log` med `.meta` (tag `live`/`wip`/`beta`/`plan`, `<time>`, version), rubrik och 1–3 punkter.
- **Spellänk:** byt `http://game.askfalt.se/` mot `https://game.askfalt.se/` i alla HTML-filer (sök/ersätt) när den nya domänen är live.
- **Video:** se kommentaren i `#video` i `index.html` och `en/index.html`. Lägg `askfalt-gameplay.webm`/`.mp4` i `assets/video/`, ersätt figuren med `<video>`-blocket och ta bort ”kommer”-skylten. Källorna laddas först när videon syns; ljud är av och `playsinline` är satt.
- **iOS-lansering:** visa App Store-knapp först när appen är publicerad (se AGENTS.md).

## Bilder
Härledda bilder (beskurna från originalen, HUD borttagen där det behövs):
`hero-wide` (splash utan logotyp/laddningsrad), `story-net-art`, `story-colony-art`, `menu-village`, `roads-clean`, `evening-clean`, `night-clean`. Galleriet visar originalen med HUD.

## Publicera
GitHub Pages → Deploy from branch → `main` → `/(root)`; custom domain `askfalt.se`. `CNAME` och `.nojekyll` ligger i roten (`.nojekyll` krävs för `.well-known/`).

## Kontroll före App Store
- Integritetspolicyn beskriver webbversionen (lokal lagring, inget konto). Stäm av mot slutligt Capacitor-bygge och eventuella SDK:er.
- Säkerställ att `security@askfalt.se` tar emot e-post.
- Inga löften om multiplayer förrän funktionen släppts.

## Lokal testning
`python -m http.server 8000` → `http://localhost:8000/`. Testa 1920×1080, 1366×768, 390 px och 360 px, samt `prefers-reduced-motion`.
