const DS = window.FoodByDeboraDesignSystem_3eedd1;
const { Navbar, Banner, Button, List, ProductCard, CategoryCard, BioCard } = DS;
const IMG = '';

function track(event, params) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...(params || {}) });
    if (typeof window.gtag === 'function') window.gtag('event', event, params || {});
  } catch (e) { /* tracking must never break the page */ }
}
window.track = track;

const ROUTE_KEYS = [
  ['#/catering', 'catering'],
  ['#/cookbook', 'cookbook'],
  ['#/workshops', 'workshops'],
  ['#/counselling', 'counselling'],
  ['#/shop', 'shop'],
];

const LangCtx = React.createContext({ lang: 'en', setLang: () => {} });
function useLang() { return React.useContext(LangCtx); }
function useC() { const { lang } = useLang(); return window.COPY[lang]; }
function useAlt() { const { lang } = useLang(); return (key) => window.imgAlt(key, lang); }
function navItems(C, lang) { return ROUTE_KEYS.map(([, key]) => ({ href: pageUrl(key, lang), label: C.nav[key] })); }

function Reveal({ children, delay = 0, as = 'div', className = '', style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return React.createElement(as, { ref, className: 'rv ' + className, style: { transitionDelay: delay + 'ms', ...style } }, children);
}

function Eyebrow({ num, children }) {
  return (
    <p className="eyebrow">
      {num ? <span className="eyebrow-num">{num}</span> : null}
      {children}
    </p>
  );
}

function LangSwitch({ compact }) {
  const { lang, setLang, routeKey, slug } = useLang();
  const opt = (code, label) => (
    <a
      key={code}
      href={pageUrl(routeKey || 'catering', code, slug)}
      hrefLang={code}
      lang={code}
      onClick={() => setLang(code)}
      className={'lang-btn' + (lang === code ? ' on' : '')}
    >{label}</a>
  );
  return (
    <div className={'lang-switch' + (compact ? ' lang-compact' : '')}>
      {opt('de', compact ? 'DE' : 'Deutsch 🇩🇪')}
      <span className="lang-sep">·</span>
      {opt('en', compact ? 'EN' : 'English 🇬🇧')}
    </div>
  );
}

function SiteNav({ activeKey }) {
  const C = useC();
  const { lang } = useLang();
  const ref = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const items = navItems(C, lang);
  React.useEffect(() => {
    const img = ref.current && ref.current.querySelector('img');
    if (img && !img.alt) img.alt = window.imgAlt('logo', lang);
  }, [lang]);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  return (
    <div className="navbar-shell" ref={ref}>
      <div className="nav-desktop">
        <Navbar logo={IMG + 'food-by-debora-logo.png'} items={items} active={C.nav[activeKey]} />
        <div className="nav-lang-inline"><LangSwitch compact /></div>
      </div>
      <div className="nav-mobile">
        <div className="nav-mobile-bar">
          <a className="nav-mobile-logo" href={pageUrl('catering', lang)}><img src={IMG + 'food-by-debora-logo.png'} alt={window.imgAlt('logo', lang)} /></a>
          <button className={'nav-burger' + (open ? ' on' : '')} onClick={() => setOpen(!open)} aria-expanded={open} aria-label={lang === 'de' ? 'Menü' : 'Menu'} aria-controls="nav-mobile-panel" type="button">
            <span></span><span></span><span></span>
          </button>
        </div>
        <div className={'nav-mobile-panel' + (open ? ' on' : '')} id="nav-mobile-panel">
          <ul>
            {items.map((it) => (
              <li key={it.label}>
                <a href={it.href} className={it.label === C.nav[activeKey] ? 'on' : ''} onClick={() => setOpen(false)}>{it.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-mobile-lang"><LangSwitch /></div>
        </div>
      </div>
    </div>
  );
}

function MiniNav() {
  return (
    <div className="navbar-shell navbar-mini">
      <a className="mini-logo" href={pageUrl('catering', useLang().lang)}><img src={IMG + 'food-by-debora-logo.png'} alt="Food by Debora" /></a>
      <LangSwitch compact />
    </div>
  );
}

function Tiers({ items, images }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll('img').forEach((img, i) => { if (!img.alt && items[i]) img.alt = items[i].title; });
  }, [items]);
  return (
    <div className="grid-tiers" ref={ref}>
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 70}>
          <ProductCard image={images[i].startsWith('') ? images[i] : IMG + images[i]} title={it.title} price={it.price} />
          {it.note ? <p className="tier-note">{it.note}</p> : null}
        </Reveal>
      ))}
    </div>
  );
}

// Long testimonials are clamped to a few lines; "mehr lesen" expands the full text.
function QuoteCard({ quote, name, role, labels }) {
  const [open, setOpen] = React.useState(false);
  const bodyRef = React.useRef(null);
  const [clamped, setClamped] = React.useState(false);
  React.useEffect(() => {
    const el = bodyRef.current;
    if (el) setClamped(el.scrollHeight - el.clientHeight > 4);
  }, [quote]);
  return (
    <div className="quote-card">
      <p ref={bodyRef} className={'quote' + (open ? '' : ' quote-clamp')} style={{ fontStyle: 'italic' }}>“{String(quote).split('**').map((s, i) => i % 2 ? <strong key={i}>{s}</strong> : s)}”</p>
      {(clamped || open) && (
        <button type="button" className="quote-more" onClick={() => setOpen(!open)}>{open ? labels.less : labels.more}</button>
      )}
      <div>
        <div className="sig">- {name}</div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: 4 }}>{role}</div>
      </div>
    </div>
  );
}

function Testimonials({ num = '04', tone, variant }) {
  const T = useC();
  const { lang } = useLang();
  const labels = lang === 'en' ? { more: 'Read more', less: 'Show less' } : { more: 'Mehr lesen', less: 'Weniger' };
  const C = { testimonials: { ...T.testimonials, ...(variant ? T['testimonials' + variant] : {}) } };
  return (
    <section className={'sec' + (tone === 'plain' ? '' : tone === 'accent' ? ' sec-accent' : ' sec-alt')} id="testimonials">
      <div className="wrap">
        <Reveal><Eyebrow num={num}>{C.testimonials.eyebrow}</Eyebrow></Reveal>
        <div className="grid-cards">
          {C.testimonials.items.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <QuoteCard quote={t.quote} name={t.name} role={t.role} labels={labels} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = ['buddha-bowl-vegan.jpeg', 'veganer-haferbrei-beeren.jpg', 'gruener-smoothie-vegan.jpeg', 'hummus-selbstgemacht.jpeg', 'kimchi-selbst-fermentiert.jpg', 'veganes-linsencurry.jpg', 'veganes-sushi-catering.jpg', 'gebackene-kartoffeln-vegan.jpg', 'veganer-apfelcrumble.jpg'];

const GALLERY_ALT = {
  de: ['Buddha Bowl mit Gemüse und Hülsenfrüchten', 'Cremiger Bananen Haferbrei mit Beeren', 'Grüner Smoothie mit Spinat und Banane', 'Selbstgemachter Hummus mit Olivenöl', 'Selbst fermentiertes Kimchi im Glas', 'Veganes Linsencurry mit Reis', 'Veganes Sushi für ein Catering angerichtet', 'Gebackene Kartoffeln mit Ofengemüse', 'Veganer Apfelcrumble frisch aus dem Ofen'],
  en: ['Buddha bowl with vegetables and legumes', 'Creamy banana oatmeal with berries', 'Green smoothie with spinach and banana', 'Homemade hummus with olive oil', 'Home-fermented kimchi in a jar', 'Vegan lentil curry with rice', 'Vegan sushi plated for a catering', 'Baked potatoes with roasted vegetables', 'Vegan apple crumble fresh from the oven'],
};

// Click a gallery photo to view it full size. Esc, backdrop click or the close
// button dismiss it; arrows step through the set.
function Lightbox({ items, alts, index, onClose, onStep }) {
  React.useEffect(() => {
    if (index == null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [index, onClose, onStep]);
  if (index == null) return null;
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={onClose} aria-label="Schliessen">&times;</button>
      <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onStep(-1); }} aria-label="Vorheriges Bild">&#8249;</button>
      <img src={IMG + items[index]} alt={alts[index] || ''} onClick={(e) => e.stopPropagation()} />
      <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onStep(1); }} aria-label="Nächstes Bild">&#8250;</button>
    </div>
  );
}

function Gallery({ num = '05' }) {
  const C = useC();
  const { lang } = useLang();
  const [open, setOpen] = React.useState(null);
  const alts = GALLERY.map((g, i) => (GALLERY_ALT[lang] || GALLERY_ALT.de)[i] || window.imgAlt('galleryDefault', lang));
  const step = React.useCallback((d) => setOpen((v) => (v == null ? v : (v + d + GALLERY.length) % GALLERY.length)), []);
  const close = React.useCallback(() => setOpen(null), []);
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal>
          <div className="row" style={{ justifyContent: 'space-between', gap: 20, marginBottom: 'clamp(20px,3vw,36px)' }}>
            <Eyebrow num={num}>{C.gallery.eyebrow}</Eyebrow>
            <a href={pageUrl('recipes', lang)} style={{ fontSize: 'var(--text-small)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', fontWeight: 600 }}>{C.gallery.link}</a>
          </div>
        </Reveal>
        <Reveal className="gallery">
          {GALLERY.map((g, i) => (
            <button type="button" className="media media-zoom" key={i} onClick={() => setOpen(i)} aria-label={alts[i]}><img src={IMG + g} alt={alts[i]} loading="lazy" /></button>
          ))}
        </Reveal>
      </div>
      <Lightbox items={GALLERY} alts={alts} index={open} onClose={close} onStep={step} />
    </section>
  );
}

const MAIL_TO = 'foodbydebora@gmail.com';

function Contact({ num = '06', variant }) {
  const T = useC();
  const C = { ...T.contact, ...(variant ? T['contact' + variant] : {}) };
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setBusy(true); setFailed(false);
    fetch('https://formsubmit.co/ajax/' + MAIL_TO, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    }).then((r) => { if (!r.ok) throw new Error('http'); return r.json(); })
      .then(() => { setSent(true); track('anfrage_gesendet', { formular: variant || 'catering' }); })
      .catch(() => setFailed(true))
      .then(() => setBusy(false));
  };
  return (
    <section className="sec sec-accent" id="contact">
      <div className="wrap split split-wide">
        <Reveal>
          <Eyebrow num={num}>{C.eyebrow}</Eyebrow>
          <h2 className="h2" style={{ maxWidth: '14ch' }}>{C.title}</h2>
          {C.body ? C.body.split('\n\n').map((t, k) => <p className="body" key={k} style={{ maxWidth: '44ch' }}>{t}</p>) : null}
          {C.cta2 ? (
            <div className="row" style={{ gap: 12, marginTop: 28 }}>
              <Button variant="primary" href="#packages">{C.cta2}</Button>
            </div>
          ) : null}
        </Reveal>
        <Reveal delay={80}>
          <form
            onSubmit={submit}
            style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', padding: 'clamp(24px,3vw,40px)', boxShadow: 'var(--shadow-md)' }}
          >
            {sent ? (
              <div style={{ padding: '30px 0', textAlign: 'center' }}>
                <h3 className="h3">{C.thanks}</h3>
                <p className="body" style={{ margin: 0 }}>{C.thanksBody}</p>
              </div>
            ) : (
              <div className="stack" style={{ gap: 6 }}>
                <input type="hidden" name="_subject" value={C.subject} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                {C.fields.map((f) => (f.area
                  ? <textarea className="field" key={f.n} name={f.n} rows="3" placeholder={f.p} required={!f.opt}></textarea>
                  : <input className="field" key={f.n} name={f.n} type={f.t || 'text'} placeholder={f.p} required={!f.opt} />))}
                <div style={{ marginTop: 22 }}><Button variant="primary" onClick={() => {}}>{busy ? C.sending : C.send}</Button></div>
                {failed ? <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: 14, marginBottom: 0 }}>{C.failed} <a href={'mailto:' + MAIL_TO} onClick={() => track('mail_klick', { ort: 'formular_fallback' })}>{MAIL_TO}</a></p> : null}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Newsletter() {
  const N = useC().newsletter;
  return (
    <section className="sec sec-alt">
      <div className="wrap">
        <Reveal>
          <Eyebrow>{N.eyebrow}</Eyebrow>
          <h2 className="h2" style={{ maxWidth: '32ch' }}>{N.title}</h2>
          <form onSubmit={() => track('newsletter_abo')} action="https://foodbydebora.us8.list-manage.com/subscribe/post?u=51352e5c8308e085e808666b6&id=fa9051f376" method="post" target="_blank" style={{ marginTop: 28, display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', maxWidth: 760, alignItems: 'end' }}>
            <input type="text" name="FNAME" required placeholder={N.first} className="field" />
            <input type="text" name="LNAME" required placeholder={N.last} className="field" />
            <input type="email" name="EMAIL" required placeholder={N.email} className="field" />
            <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true"><input type="text" name="b_51352e5c8308e085e808666b6_fa9051f376" tabIndex="-1" defaultValue="" /></div>
            <Button variant="primary" onClick={() => {}}>{N.cta}</Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const C = useC();
  const F = C.footer;
  const { lang } = useLang();
  const cols = [
    { title: F.offers, links: ROUTE_KEYS.map(([, key]) => ({ label: C.nav[key], href: pageUrl(key, lang) })) },
    { title: F.elsewhere, links: [
      { label: F.links, href: pageUrl('links', lang) },
      { label: F.instagram, href: /counselling|links/.test((window.__BOOT || {}).route || '') ? 'https://www.instagram.com/wellbeingwithdebora/' : 'https://www.instagram.com/foodbydebora/' },
      { label: F.facebook, href: 'https://www.facebook.com/foodbydebora/' },
      { label: F.newsletter, href: 'https://foodbydebora.us8.list-manage.com/subscribe?u=51352e5c8308e085e808666b6&id=fa9051f376' },
    ] },
    { title: F.legal, links: [
      { label: F.impressum, href: pageUrl('impressum', lang) },
      { label: F.agb, href: pageUrl('agb', lang) },
      { label: F.privacy, href: pageUrl('datenschutz', lang) },
    ] },
  ];
  return (
    <footer style={{ background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="wrap" style={{ paddingTop: 'clamp(40px,5vw,72px)', paddingBottom: 'clamp(28px,3vw,40px)' }}>
        <div className="split split-wide" style={{ alignItems: 'start' }}>
          <div>
            <img src={IMG + 'food-by-debora-logo.png'} alt="Food by Debora - veganes Catering, Kochkurse und Ernährungsberatung" style={{ width: 160, marginBottom: 20 }} />
            <p className="body" style={{ maxWidth: '34ch', fontSize: 'var(--text-small)' }}>{F.tagline}</p>
            <img src={IMG + 'akn-zertifizierte-ernaehrungsberatung.png'} alt="Zertifizierte ganzheitliche Ernährungsberaterin, Akademie der Naturheilkunde" style={{ width: 84, marginTop: 24 }} />
          </div>
          <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {cols.map((c) => (
              <div key={c.title}>
                <div style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--text-secondary)', marginBottom: 14 }}>{c.title}</div>
                <div className="stack" style={{ gap: 9 }}>
                  {c.links.map((l) => (
                    <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel={l.href.startsWith('http') ? 'noopener' : undefined} style={{ color: 'var(--text-primary)', fontSize: 'var(--text-small)' }}>{l.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="rule" style={{ margin: 'clamp(32px,4vw,56px) 0 20px' }} />
        <div className="row" style={{ justifyContent: 'space-between', gap: 16, fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
          <span>{F.copyright}</span>
          <LangSwitch />
        </div>
      </div>
    </footer>
  );
}

// Deep links like /index.html#contact: the anchor doesn't exist until React has
// rendered, so the browser's own hash jump misses. Retry briefly after mount.
function HashScroll() {
  React.useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    let tries = 0;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (tries++ < 40) setTimeout(tick, 50);
    };
    setTimeout(tick, 60);
  }, []);
  return null;
}

Object.assign(window, { HashScroll, MiniNav, useAlt, DS, Navbar, Banner, Button, List, ProductCard, CategoryCard, BioCard, IMG, ROUTE_KEYS, LangCtx, useLang, useC, navItems, Reveal, Eyebrow, LangSwitch, SiteNav, Tiers, Testimonials, Gallery, Contact, Newsletter, Footer });
