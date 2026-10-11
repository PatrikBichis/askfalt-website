# Commit av webbplats v1.0

Packa upp nedladdningen över en klon av repot och kör:

```bash
git clone https://github.com/PatrikBichis/askfalt-website.git
cd askfalt-website
git checkout -b feature/website-v1.0
# kopiera in filerna från nedladdningen (skriv över), men inte github.md eller .thumbnail
git add -A
git commit -m "Website v1.0: ny startsida (sv/en), designsystem, undersidor och SEO" \
  -m "- Ny startsida med hero, värld, tidslinje, koloni, dag/natt, försvar, återta, galleri, video och spela
- Engelsk spegling under /en/ med hreflang
- Undersidor: support, integritet, villkor, licens (sv/en) och 404
- Härledda bilder (hero utan logotyp, beskurna story- och spelbilder), og-image
- sitemap.xml, robots.txt, site.webmanifest, .well-known/security.txt, CNAME, .nojekyll"
git push -u origin feature/website-v1.0
```

Öppna sedan PR: https://github.com/PatrikBichis/askfalt-website/compare/main...feature/website-v1.0
