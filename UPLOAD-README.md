# Upload auf GitHub (GitHub Pages)

Diese Dateien gehören ins **Wurzelverzeichnis** von `ddboa7/foodbydebora` (dort, wo heute index.html liegt).

## Wichtig
- **.nojekyll wird NICHT mehr gebraucht.** Das Designsystem liegt jetzt im Ordner `ds/` (ohne Unterstrich).
- **Die Ordnerstruktur muss erhalten bleiben.** Ziehe immer die ORDNER `ds`, `image_folder` und `uploads` ins Upload-Fenster, nicht deren Inhalt. Wenn im Repo Dateien wie `colors.css` oder `_ds_bundle.js` direkt im Hauptverzeichnis liegen, ist etwas schiefgegangen – diese kannst du löschen.
- Bestehende Dateien werden überschrieben: index.html, catering.html, kochbuch.html, cookbook.html, rezepte.html, recipes.html, workshops.html, eworkshops.html, beratung.html, counselling.html, shop.html, eshop.html, links.html, impressum.html, agb.html, sowie die Rezeptseiten (haferbrei.html, hummus.html, oatmeal.html, greensmoothie.html, ekimchi.html, lentilcurry.html, saladbowl.html …).
- Neu im neuen Design dabei und damit ebenfalls überschrieben: presse.html, tagesretreat.html, paarretreat.html, coupleretreat.html, mealprepmasterclass.html, srilankacurry.html, srilankancurry.html.
- Neue Dateien: yogaretreat.html (ersetzt yogaretreat_april/may/july/spanien2024), dayretreat.html, mealprepmasterclass-en.html, yogaretreat-en.html, press.html, all-links.html, imprint.html, terms.html, privacy.html.
- Alte Seiten, die hier NICHT dabei sind (restaurants.html, retreat_september.html, yogaretreat_*.html …), liegen lassen oder löschen.
- Bilddateien wurden umbenannt (z. B. IMG_5569.jpg wurde zu rainbow-salad-bowl-vegan.jpg). Lade die Ordner image_folder/ und uploads/ komplett neu hoch.
- `style.css` des alten Auftritts NICHT löschen, solange diese alten Seiten noch existieren.

## Diese Ordner/Dateien werden gebraucht
- `ds/` (Designsystem: colors.css, typography.css, spacing.css, effects.css, styles.css, ds-bundle.js)
- `image_folder/`, `uploads/` (Bilder)
- `site.css`, `seo.js`, `alts.js`, `i18n.js`, `legal.js`, `recipe-data-de.js`, `recipe-data-en.js`
- `shell.jsx`, `pages.jsx`, `recipes.jsx`, `links.jsx`, `app.jsx`, `tweaks-panel.jsx`
- alle `.html`-Dateien, `sitemap.xml`, `robots.txt`, `404.html`

## Diese NICHT hochladen
- `Food by Debora.html` (interne Arbeitsdatei)
- `Food by Debora - Catering.html`, `Sri Lanka Curry.html` (Offline-Versionen zum Verschicken)
- `_offline/` (verkleinerte Bilder nur für die Offline-Versionen)
- `github.md`, `UPLOAD-README.md` (diese Datei), `.thumbnail`

## Weg 1 – direkt auf main (empfohlen, ohne Terminal)
1. github.com/ddboa7/foodbydebora öffnen → **Add file → Upload files**.
2. Im Finder das entpackte Projekt öffnen. Alle Dateien markieren UND die drei Ordner `ds`, `image_folder`, `uploads` – als Ordner, nicht deren Inhalt – zusammen ins Browserfenster ziehen.
3. Warten, bis alles geladen ist, dann **Commit changes** (alles in EINEM Commit).
4. Prüfen: im Repo muss es einen Ordner `ds` geben, der colors.css usw. enthält. Liegen diese Dateien stattdessen direkt im Hauptverzeichnis, wurde der Ordner flach gemacht – dann Schritt 2 wiederholen und den Ordner selbst ziehen.

## Weg 2 – mit Terminal
```bash
git clone https://github.com/ddboa7/foodbydebora.git
cd foodbydebora
# ZIP-Inhalt hierher entpacken/kopieren, dann:
git add -A
git commit -m "Neues Design, echte URLs und SEO"
git push
```

## Nach dem Upload
1. Seite prüfen: foodbydebora.com (Cache leeren / privates Fenster).
2. Google Search Console → Sitemaps → `https://foodbydebora.com/sitemap.xml` einreichen.
3. Rich-Results-Test für eine Rezeptseite und die Startseite laufen lassen.
