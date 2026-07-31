const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "regular",
  "typeScale": 1,
  "imagery": "natural",
  "motion": true
}/*EDITMODE-END*/;

const PAGES = { catering: Catering, cookbook: Cookbook, recipes: Recipes, recipe: RecipeDetail, workshops: Workshops, counselling: Counselling, shop: Shop, links: Links, yogaretreat: YogaRetreat, coupleretreat: CoupleRetreat, tagesretreat: DayRetreat, mealprep: MealPrep, srilankacurry: CurryPage, presse: Presse, impressum: Impressum, agb: AGB, datenschutz: Datenschutz };
const HASH_TO_KEY = { ...Object.fromEntries(ROUTE_KEYS), '#/recipes': 'recipes', '#/links': 'links', '#/yogaretreat': 'yogaretreat', '#/coupleretreat': 'coupleretreat', '#/tagesretreat': 'tagesretreat', '#/mealprep': 'mealprep', '#/srilankacurry': 'srilankacurry', '#/presse': 'presse', '#/impressum': 'impressum', '#/agb': 'agb', '#/datenschutz': 'datenschutz' };
const NAV_ACTIVE = { recipes: 'cookbook', recipe: 'cookbook' };
function parseRoute(h) {
  if (HASH_TO_KEY[h]) return { key: HASH_TO_KEY[h] };
  if (h && h.indexOf('#/recipe/') === 0) return { key: 'recipe', slug: h.slice('#/recipe/'.length) };
  return null;
}

const DENSITY = { compact: 0.72, regular: 1, airy: 1.3 };
const IMAGERY = {
  natural: 'none',
  warm: 'saturate(1.08) sepia(0.08) contrast(1.02)',
  soft: 'contrast(0.94) brightness(1.04) saturate(0.95)',
};

const BOOT = window.__BOOT || {};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = React.useState(() => BOOT.lang || localStorage.getItem('fbd-lang') || 'de');
  const [route, setRoute] = React.useState(() => (BOOT.route ? { key: BOOT.route, slug: BOOT.slug } : parseRoute(location.hash) || { key: 'catering' }));
  const routeKey = route.key;

  const setLang = React.useCallback((l) => { setLangState(l); localStorage.setItem('fbd-lang', l); }, []);
  React.useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  React.useEffect(() => {
    const onHash = () => {
      const h = location.hash;
      const r = parseRoute(h);
      if (r) { setRoute(r); window.scrollTo({ top: 0, behavior: 'instant' }); }
      else if (h && h !== '#') {
        const go = () => {
          const el = document.querySelector(h);
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' });
          return !!el;
        };
        if (!go()) { setRoute({ key: 'catering' }); setTimeout(go, 120); }
      }
    };
    addEventListener('hashchange', onHash);
    return () => removeEventListener('hashchange', onHash);
  }, []);

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--dens', DENSITY[t.density] || 1);
    r.style.setProperty('--tscale', t.typeScale);
    r.style.setProperty('--img-filter', IMAGERY[t.imagery] || 'none');
    document.body.classList.toggle('nomotion', !t.motion);
  }, [t.density, t.typeScale, t.imagery, t.motion]);

  const Comp = PAGES[routeKey];
  const langCtx = React.useMemo(() => ({ lang, setLang, routeKey, slug: route.slug }), [lang, setLang, routeKey, route.slug]);

  return (
    <LangCtx.Provider value={langCtx}>
      {routeKey === 'links' ? <MiniNav /> : <SiteNav activeKey={NAV_ACTIVE[routeKey] || routeKey} />}
      <main key={routeKey + (route.slug || '') + lang}>
        <Comp slug={route.slug} />
      </main>
      <Newsletter />
      <Footer />
      <TweaksPanel>
        <TweakSection label="Layout" />
        <TweakRadio label="Density" value={t.density} options={['compact', 'regular', 'airy']} onChange={(v) => setTweak('density', v)} />
        <TweakSlider label="Type scale" value={t.typeScale} min={0.85} max={1.25} step={0.05} onChange={(v) => setTweak('typeScale', v)} />
        <TweakSection label="Imagery" />
        <TweakRadio label="Treatment" value={t.imagery} options={['natural', 'warm', 'soft']} onChange={(v) => setTweak('imagery', v)} />
        <TweakSection label="Motion" />
        <TweakToggle label="Scroll reveals" value={t.motion} onChange={(v) => setTweak('motion', v)} />
      </TweaksPanel>
    </LangCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
