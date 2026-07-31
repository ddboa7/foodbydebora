# Upload auf GitHub (GitHub Pages)

Diese Dateien gehören ins **Wurzelverzeichnis** von `ddboa7/foodbydebora` (dort, wo heute index.html liegt).

## Wichtig
- **.nojekyll muss mit hochgeladen werden.** Ohne diese Datei ignoriert GitHub Pages den Ordner `_ds/` (Ordner mit Unterstrich) und die Seite bleibt weiss.
- Bestehende Dateien werden überschrieben: index.html, catering.html, kochbuch.html, cookbook.html, rezepte.html, recipes.html, workshops.html, eworkshops.html, beratung.html, counselling.html, shop.html, eshop.html, links.html, impressum.html, agb.html, sowie die Rezeptseiten (haferbrei.html, hummus.html, oatmeal.html, greensmoothie.html, ekimchi.html, lentilcurry.html, saladbowl.html …).
- Neu im neuen Design dabei und damit ebenfalls überschrieben: presse.html, tagesretreat.html, paarretreat.html, coupleretreat.html, mealprepmasterclass.html, srilankacurry.html, srilankancurry.html.
- Neue Dateien: yogaretreat.html (ersetzt yogaretreat_april/may/july/spanien2024), dayretreat.html, mealprepmasterclass-en.html, yogaretreat-en.html, press.html, all-links.html, imprint.html, terms.html, privacy.html.
- Alte Seiten, die hier NICHT dabei sind (restaurants.html, retreat_september.html, yogaretreat_*.html …), liegen lassen oder löschen.
- Bilddateien wurden umbenannt (z. B. IMG_5569.jpg wurde zu rainbow-salad-bowl-vegan.jpg). Lade die Ordner image_folder/ und uploads/ komplett neu hoch.
- `style.css` des alten Auftritts NICHT löschen, solange diese alten Seiten noch existieren.

## Diese Ordner/Dateien werden gebraucht
- `.nojekyll`
- `_ds/` (Designsystem: CSS-Tokens + Komponenten)
- `image_folder/`, `uploads/` (Bilder)
- `site.css`, `seo.js`, `alts.js`, `i18n.js`, `legal.js`, `recipe-data-de.js`, `recipe-data-en.js`
- `shell.jsx`, `pages.jsx`, `recipes.jsx`, `links.jsx`, `app.jsx`, `tweaks-panel.jsx`
- alle `.html`-Dateien, `sitemap.xml`, `robots.txt`, `404.html`

Nicht nötig: `Food by Debora.html` (nur eine Weiterleitung), `github.md`, `screenshots/`, diese Datei.

## Weg 1 – ohne Terminal (Pull Request im Browser)
1. github.com/ddboa7/foodbydebora öffnen → **Add file → Upload files**.
2. Alle Dateien und Ordner aus dem ZIP hineinziehen (Ordnerstruktur bleibt erhalten).
   Falls `.nojekyll` beim Drag & Drop nicht mitkommt: **Add file → Create new file**, Name `.nojekyll`, leer lassen, speichern.
3. Unten **Create a new branch for this commit and start a pull request** wählen, Branch z. B. `redesign`.
4. **Propose changes** → **Create pull request** → prüfen → **Merge**.

## Weg 2 – mit Terminal
```bash
git clone https://github.com/ddboa7/foodbydebora.git
cd foodbydebora
# ZIP-Inhalt hierher entpacken/kopieren, dann:
git checkout -b redesign
git add -A
git commit -m "Neues Design, echte URLs und SEO"
git push -u origin redesign
```
Danach zeigt GitHub oben einen Button **Compare & pull request**.

## Nach dem Merge
1. Seite prüfen: foodbydebora.com (Cache leeren / privates Fenster).
2. Google Search Console → Sitemaps → `https://foodbydebora.com/sitemap.xml` einreichen.
3. Rich-Results-Test für eine Rezeptseite und die Startseite laufen lassen.
