// First-visit language detection. Runs after seo.js (needs SEO_PAGES + __BOOT),
// before React mounts. Only ever redirects once, never for bots, and never
// once the visitor has picked a language themselves.
(function () {
  var KEY = 'fbd-lang', SEEN = 'fbd-lang-auto';
  var boot = window.__BOOT || {};
  if (!boot.lang || !window.SEO_PAGES) return;

  // Search engines must see the URL they asked for.
  if (/bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|whatsapp|telegram|lighthouse|headless/i.test(navigator.userAgent || '')) return;

  var stored = null, already = false;
  try { stored = localStorage.getItem(KEY); already = !!sessionStorage.getItem(SEEN); } catch (e) { return; }
  if (already) return;
  try { sessionStorage.setItem(SEEN, '1'); } catch (e) {}

  // Explicit choice wins; if they landed on the other language's twin by link,
  // respect the link and leave them there.
  if (stored) return;

  var want = detect();
  try { localStorage.setItem(KEY, want); } catch (e) {}
  if (want === boot.lang) return;

  var target = window.pageUrl(boot.route || 'catering', want, boot.slug);
  if (!target) return;
  var here = location.pathname.split('/').pop();
  if (target === here) return;
  location.replace(target + location.search + location.hash);

  function detect() {
    var langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ''];
    for (var i = 0; i < langs.length; i++) {
      var l = String(langs[i]).toLowerCase();
      if (l.indexOf('de') === 0) return 'de';
      if (l.indexOf('en') === 0) return 'en';
    }
    // No usable browser language: fall back to timezone as a location proxy.
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (/^Europe\/(Zurich|Berlin|Vienna|Busingen|Vaduz)$/.test(tz)) return 'de';
    } catch (e) {}
    return 'de';
  }
})();
