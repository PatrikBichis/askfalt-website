# Askfält – officiell webbplats

Publik, tvåspråkig informations- och promotionswebbplats för Askfält.

- Produktionsdomän: **https://askfalt.se**
- Svenska: `/`; engelska: `/en/`
- Policy: `/privacy/`, `/en/privacy/`
- Support: `/support/`, `/en/support/`
- Information/villkor: `/terms/`, `/en/terms/`
- Spel: web/PWA nu, iOS App Store **planerad** 1 november 2026.

## Publicera
GitHub Pages → Deploy from branch → `main` → `/(root)`; custom domain `askfalt.se`.
DNS A-records på apex mot GitHub Pages och CNAME `www` → `patrikbichis.github.io`.
`CNAME` ligger i repo-roten för att bevara domänkonfigurationen.

**Merga inte utkastet utan granskning.** PR från `feature/website-v0.1`.

## Bilder
Godkända screenshots från spelet kan läggas under `assets/` i publika repot:
- `hero.webp` – splash i liggande format
- `colony-evening.webp`, `colony-night.webp`
- `gameplay-mobile.webp`

Dela enbart publicerbara bilder, aldrig privat källkod eller credentials. Grafikleveransen och visuell integration görs separat.

## Kontroll före App Store
Integritetspolicyn är ett preliminärt utkast. Verifiera den mot slutligt Capacitor-bygge och externa SDK:er.
Ange en riktig publik supportadress innan produktionslansering. Kontrollera att GitHub Issues är aktiverat för att nuvarande supportlänk ska fungera.
Inga löften om multiplayer förrän funktionen släppts.

## Lokal testning
Statisk HTML/CSS. Kör `python -m http.server 8000` och besök `http://localhost:8000/`.
