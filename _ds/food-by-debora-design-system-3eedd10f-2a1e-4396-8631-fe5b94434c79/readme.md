# Food by Debora — Design System

Source: [ddboa7/foodbydebora](https://github.com/ddboa7/foodbydebora) (static HTML/CSS marketing site, Bootstrap-based). Explore the repo directly for the full page set, exact copy, and every product photo — it's the ground truth this system was built from.

## Company & product context

Food by Debora is a Swiss (Zug/Zürich) one-woman brand run by Debora Döhrbeck — a psychologist and nutrition counsellor (Ayurveda & gut-health focus) who also caters. One brand, five offers, all radiating from the same person:

- **Catering** — vegan/vegetarian catering for private and corporate events, priced in four tiers (Take-Away, Standard, Golden, Deluxe Package).
- **Kochbuch / Cookbook** — a self-published recipe book (67 recipes, EN/DE), sold as e-book and print via Payhip/Amazon.
- **Workshops & Retreats** — in-person cooking classes, online courses, a monthly vegan brunch, a Zug vegan meetup community, and yoga/couple retreats.
- **Beratung / Counselling** — 1:1 holistic nutrition & psychology mentoring, sold in escalating tiers from a single session to a 12-month deep dive.
- **Shop** — small-batch, freshly-ground spice blends (Sri Lanka curry) sold monthly.

The site is bilingual: every page exists as a German original and an English twin (`index.html`↔`catering.html`, `beratung.html`↔`counselling.html`, `shop.html`↔`eshop.html`, etc.) — German is the default/primary voice.

There is **no component library or design tokens file** in the source repo — it's hand-written HTML/CSS (plus Bootstrap 4 utility classes and a Gridlex grid) accumulated over several years. This system reverse-engineers a token set and a standard component inventory from the patterns that repeat across its ~35 pages.

## What's in this design system

- `styles.css`, `tokens/` — colors, type, spacing, radius/shadow tokens, `@font-face` (see Visual Foundations)
- `components/core/` — Button, List
- `components/cards/` — ProductCard, CategoryCard, BioCard
- `components/navigation/` — Navbar, Banner
- `guidelines/` — specimen cards for the Design System tab (Colors, Type, Spacing, Brand)
- `ui_kits/website/` — click-through recreation of the marketing site (Catering / Rezepte / Beratung / Shop)
- `assets/` — logo, certification badge, cookbook covers, and a representative set of the brand's own food/lifestyle photography (`image_folder/`, same paths as the source repo)
- `SKILL.md` — portable skill file for use outside this product (e.g. Claude Code)

## Components

- **Button** — pill CTA (`primary`, solid sage-dark) and a transparent nav/footer link (`ghost`)
- **List** — sage-bullet detail list for offer inclusions and takeaways
- **ProductCard** — photo + title + price row (every priced tier across Catering/Beratung/Shop)
- **CategoryCard** — full-bleed photo tile with dark overlay + oversized label (homepage Blog/Referenzen/Press row)
- **BioCard** — portrait + name/role/bio panel
- **Navbar** — sticky logo + uppercase underlined tabs
- **Banner** — full-bleed hero photo with a subtle gradient, opens every page

### Intentional additions
None of these components exist as code in the source (it's flat HTML+CSS, not a component library) — they were named and split out from the repeating CSS classes (`.btn-flat`/`.button`, `.card-product`/`.card-shop`, `.card-category`, `.bio`, `.navbar-foodbydebora`, `.banner*`) rather than invented from a generic UI-kit checklist.

## Content fundamentals

- **Voice**: warm, first-person, personal — Debora writes directly as herself ("Mein Name ist Debora…", "Ich freue mich…"), never as an impersonal brand voice.
- **Address**: informal "du" throughout (German), matching the intimate, one-to-one nature of counselling and small-batch catering.
- **Tone**: nurturing and encouraging, not clinical — even nutrition-science content ("Kurzkettige Fettsäuren…") is framed around feeling good, not restriction. Recurring refrain: food/health work is about *how you feel*, not about calorie-counting, perfection, or strict plans ("nicht um strikte Pläne, Kalorienzählen oder Perfektion").
- **Structure**: long-form prose broken by `<br><br>` into short paragraphs, frequently followed by bulleted lists for offer specifics (inclusions, pricing conditions, what's covered).
- **Bilingual mirroring**: German pages are the source; English pages are close, natural translations, not marketing-adapted rewrites.
- **Testimonials**: verbatim first-person quotes, signed with first name only ("- Lydia", "- Sânzio"), presented in an italic block on a light sage background (`.Referenz`).
- **Emoji**: minimal and functional only — flag emoji for the language switcher (🇩🇪/🇬🇧) and a single ➡️ before the "book a call" CTA. Never decorative/expressive emoji in body copy.
- **Numbers**: Swiss francs written as `CHF 120` or `120 CHF`; large sums use the Swiss thousands apostrophe (`CHF 3'800`, `CHF 10'000`).

## Visual foundations

- **Colors**: sage green (`#7fa89a` / dark `#5c8778` / light `#d9e8e2`) is the brand color — used for CTAs, active nav underline, bullet marks, link hover. Cream (`#fdf9f7`) is the page background, warm cream-alt (`#f2ece5`) for alternating sections. Ink (`#47433e`) for text, never pure black. A muted gold (`#c9a15f`) appears only as a link-hover accent — used sparingly, never as a fill.
- **Type**: Lato (weight 400 only) for all headings — softer and less "bold-loud" than a typical heading face, sized with `clamp()` for fluid scaling. Montserrat (400/500/600) for all body copy at a generous 1.125rem/1.6 line-height. A Google-Fonts `Dancing+Script` import exists in the source `<head>` but is **never applied to anything** — it's dead weight from an old template; this system does not carry it forward.
- **Spacing/layout**: body copy is capped at a narrow 600px reading column (`--content-max`), centered — this is a deliberate one-column, letter-like reading rhythm, not a full-width layout. Wider elements (h4, big images) cap at 1000px.
- **Backgrounds**: real photography only, always full-bleed — no illustration, no patterns, no textures, no gradients as decoration (the only gradient in the system is a subtle 8%→18% black overlay on hero banners, for text legibility). No blur/glass effects anywhere.
- **Imagery color vibe**: warm, natural daylight food and lifestyle photography — bowls, produce, hands, retreat/nature scenes. No monochrome, no heavy grain, no studio-flash look.
- **Corner radii**: 8px (small tiles/photos), 14px (cards), pill/999px (buttons), circle (avatars).
- **Cards**: soft, warm-toned shadows only (`rgba(60,50,40,…)`, never pure black) — no borders, no left-accent-color bars. Three shadow depths (sm/md/lg) escalate on hover.
- **Hover states**: cards and photo tiles lift 3–4px and deepen their shadow; primary buttons lighten (sage-dark → sage) and lift 2px; ghost/footer links fill solid sage-dark with white text; links underline and shift toward gold.
- **Press/active states**: not explicitly defined in source CSS — treat as the hover state minus the lift (no separate "pressed" treatment was found).
- **Animation**: no keyframe animation anywhere in the source. All motion is CSS `transition: 0.25s ease` on transform/box-shadow/background/opacity — simple, quick, no bounce/spring easing.
- **Transparency/blur**: transparency used only for the logo PNG and for the banner gradient overlay; no backdrop-blur/glassmorphism anywhere.
- **Layout rules**: sticky top navbar; otherwise fully static single-column flow, no fixed sidebars or floating elements.

## Iconography

The source uses **no custom icon system** — no icon font, no SVG icon set, no PNG icon sprite. The only iconographic elements found:
- Font Awesome 4.1 is linked in `<head>` on every page but not visibly used in any page body read.
- Country-flag emoji (🇩🇪/🇬🇧) for the language switcher, and a single ➡️ emoji before one CTA — the full extent of "iconography" in this brand.
- One real badge asset: `akn_zertifiziert_durch_rgb.png` (a nutrition-academy certification mark), copied into `assets/`.

Given the near-total absence of a system, this design system does **not** invent an icon set. If a consuming project needs UI icons (e.g. a cart, a search glyph), the closest-matching neutral choice is a thin-stroke set like **Lucide** (CDN) — flag this substitution explicitly if you use it.

## Assets copied

`image_folder/` (matching the source repo's own path, so page copy/paste stays trivial):
`Logo_farbig_transparent.png` (only lockup found — no icon-only mark exists), `akn_zertifiziert_durch_rgb.png` (certification badge), both `Kochbuch Cover*.png` cookbook covers, and a representative spread of the brand's food/lifestyle photography (`IMG_5569`, `IMG_0699`, `IMG_0261`, `IMG_0444`, `Vegan_Brunch`, `IMG_9243`, `boa_tanzt`, `Content`, `Oatmeal`, `IMG_6151`, `IMG-7863`, `IMG_9019`). The source repo has ~95 photos total in `image_folder/` — pull more directly from GitHub for a specific recreation.

## Caveats

- No Figma/design-tool source was provided — this system is reverse-engineered entirely from the static HTML/CSS repo.
- No reusable React/component code existed in the source; the component inventory above is this system's own factoring of the repeating CSS patterns, not a copy of an existing library.
- The `Dancing Script` Google Font is imported by the source site but never used on anything visible — intentionally dropped here.
- Some background images referenced in the source `style.css` (a `retreat/` subfolder) 404 in the live repo; the CSS already has a graceful color fallback for this, and this system did not try to source or recreate those missing photos.

**Ask**: tell us which surface to go deeper on — more Catering/Beratung screens, the Retreat pages, a proper icon set, or real webfont files (right now Lato/Montserrat load from Google's CDN, not self-hosted) — and we'll iterate.
