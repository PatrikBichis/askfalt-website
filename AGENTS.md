# Askfält website – agentinstruktioner

- Public GitHub Pages website. Never copy private game source, credentials, secrets or internal plans into this repository.
- Swedish is default; English is served from /en/. Keep copy meaning aligned.
- Main site routes: /, /en/, /devlog/, /en/devlog/, /roadmap/, /en/roadmap/, /privacy/, /en/privacy/, /support/, /en/support/, /terms/, /en/terms/.
- The iOS release is **planned** for 2026-11-01, not already available. Update only after verified publication.
- Game currently exists as web/PWA; multiplayer is future functionality. Never claim future capabilities are shipped.
- Review privacy policy against actual web/Capacitor releases before app submission; privacy, legal identity and contact must be confirmed by owner.
- Avoid third-party trackers, unnecessary cookies or external scripts.
- All changes go through feature branch and PR. No merge without explicit approval.

## Hålla webbplatsen i synk med spelet

Spelet utvecklas i `REALProIT/real-super-duper-game` (lokalt `C:/Repos/real-super-duper-game`). Källor: `docs/changelog.md` (versionslogg), `docs/roadmap.md` och planen för v2.2–v3.0, `research/iOS-and-multiplayer/` (appar och multiplayer), `package.json` (version). Spelrepot har skillen `askfalt-website` med samma regler.

- **Vid varje release av spelet** (X.Y och X.Y.Z): ny post överst i `/devlog/` och `/en/devlog/` (tag *Släppt*/*Released*, datum, version, 1–3 punkter på spelarens språk – sammanfatta, kopiera inte hela changeloggen), flytta versionen från *Under arbete* till *Släppt* i devloggen och från *Under arbete* bort ur roadmappen (eller markera den klar), uppdatera "Senast uppdaterad" och "spelets senaste version" på båda sidorna och `lastmod` i `sitemap.xml`.
- **Löpande**: när en ny version påbörjas eller planen ändras – lägg den som *Under arbete* i devloggen och roadmappen. Viktiga milstolpar (t.ex. TestFlight, App Store, Android) får en egen devlog-post.
- **iOS**: ändra "planerad" till tillgänglig (nav, sidfot, startsida, support, roadmap) först när appen faktiskt är publicerad i App Store.
- Svenska och engelska ändras i samma PR, med samma innehåll.
- Inga interna detaljer (kod, arkitektur, nycklar, leverantörer, interna planfiler) och inga löften: framtida funktioner beskrivs som planer.
