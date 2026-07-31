const MAIL = 'foodbydebora@gmail.com';

function ExtraProse({ b }) {
  return (
    <section className="sec">
      <div className="wrap-narrow">
        <Reveal>
          {b.h ? <h2 className="h2" style={{ maxWidth: '26ch' }}>{b.h}</h2> : null}
          <div className="body">{b.p.map((t, i) => <p key={i}>{t}</p>)}</div>
        </Reveal>
      </div>
    </section>
  );
}

function ExtraList({ b }) {
  return (
    <section className="sec sec-alt">
      <div className="wrap-narrow">
        <Reveal>
          {b.h ? <h2 className="h2">{b.h}</h2> : null}
          <List items={b.items} />
        </Reveal>
      </div>
    </section>
  );
}

function ExtraSplit({ b, alt, tone }) {
  const media = (
    <Reveal>
      <div className={'media lift' + (b.fit === 'contain' ? ' media-contain' : ' media-tall')}><img src={IMG + b.img} alt={b.h || alt} loading="lazy" /></div>
    </Reveal>
  );
  const text = (
    <Reveal delay={80}>
      {b.h ? <h2 className="h2" style={{ maxWidth: '24ch' }}>{b.h}</h2> : null}
      {b.list ? <List items={b.list} /> : null}
      {b.p ? <div className="body" style={{ maxWidth: '48ch', marginTop: b.list ? 26 : 0, marginBottom: 0 }}>{b.p.map((t, i) => <p key={i}>{t}</p>)}</div> : null}
      {b.link ? <p className="body" style={{ marginTop: 22, marginBottom: 0, fontSize: 'var(--text-small)' }}><a href={b.link.href} target="_blank" rel="noopener">{b.link.label}</a></p> : null}
    </Reveal>
  );
  if (b.fit === 'contain') {
    return (
      <section className={'sec' + (tone === 'alt' ? ' sec-alt' : '')}>
        <div className="wrap-narrow">{text}</div>
        <div className="wrap" style={{ marginTop: 'clamp(24px,3vw,44px)' }}>{media}</div>
      </section>
    );
  }
  return (
    <section className={'sec' + (tone === 'alt' ? ' sec-alt' : '')}>
      <div className="wrap split split-narrow">
        {b.side === 'left' ? media : text}
        {b.side === 'left' ? text : media}
      </div>
    </section>
  );
}

function ExtraPeople({ b }) {
  return (
    <section className="sec sec-alt">
      <div className="wrap">
        {b.h ? <Reveal><h2 className="h2" style={{ marginBottom: 'clamp(24px,3vw,40px)' }}>{b.h}</h2></Reveal> : null}
        <div className="grid-people">
          {b.items.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="person">
                <img className="person-photo" src={IMG + p.img} alt={p.name} loading="lazy" />
                <div>
                  <h3 className="person-name">{p.name}</h3>
                  <p className="person-role">{p.role}</p>
                  <div className="body">{p.p.map((t, j) => <p key={j}>{t}</p>)}</div>
                  {p.link ? <p className="body" style={{ marginBottom: 0, fontSize: 'var(--text-small)' }}><a href={p.link.href} target="_blank" rel="noopener">{p.link.label}</a></p> : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtraQuotes({ b }) {
  return (
    <section className="sec" id="testimonials">
      <div className="wrap">
        {b.h ? <Reveal><Eyebrow>{b.h}</Eyebrow></Reveal> : null}
        <div className="grid-cards">
          {b.items.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="quote-card">
                <p className="quote" style={{ fontStyle: 'italic' }}>“{t.q}”</p>
                <div className="sig">- {t.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtraCards({ b }) {
  return (
    <section className="sec sec-alt">
      <div className="wrap">
        <div className="grid-tiers">
          {b.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <a className="shop-card" href={it.href} target="_blank" rel="noopener" onClick={() => window.track && window.track('kauf_klick', { produkt: it.title, kanal: 'payhip' })}>
                <div className="media"><img src={IMG + it.img} alt={it.title} loading="lazy" /></div>
                <div className="shop-card-info">
                  <span className="shop-card-title">{it.title}</span>
                  <span className="shop-card-price">{it.price}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtraLinks({ b }) {
  return (
    <section className="sec sec-alt">
      <div className="wrap-narrow">
        <div className="links-list">
          {b.items.map((it) => (
            <Reveal key={it.label}>
              <a className="link-row" href={it.href} target="_blank" rel="noopener">
                <span>
                  {it.label}
                  {it.meta ? <span className="link-meta">{it.meta}</span> : null}
                </span>
                <span className="link-arrow" aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtraClips({ b }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="grid-clips">
          {b.items.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <figure className="clip">
                <div className="frame"><img src={IMG + c.img} alt={c.label} loading="lazy" /></div>
                <figcaption>{c.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtraGallery({ b }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="grid-villa">
          {b.imgs.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 60}>
              <div className="media"><img src={IMG + src} alt={(b.alts || [])[i] || ''} loading="lazy" /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const EXTRA_BLOCKS = { prose: ExtraProse, list: ExtraList, split: ExtraSplit, people: ExtraPeople, quotes: ExtraQuotes, gallery: ExtraGallery, cards: ExtraCards, links: ExtraLinks, clips: ExtraClips };

function ExtraPage({ pageKey }) {
  const { lang } = useLang();
  const C = window.EXTRAS[lang][pageKey];
  let altTone = false;
  return (
    <>
      <PageBanner image={C.banner} position={C.bannerPos} eyebrow={C.eyebrow} title={C.title} />
      {C.sub ? (
        <section className="sec sec-tight" style={{ paddingTop: 'clamp(48px,7vw,96px)', paddingBottom: 0 }}>
          <div className="wrap-narrow"><Reveal><p className="extra-sub">{C.sub}</p></Reveal></div>
        </section>
      ) : null}
      {C.blocks.map((b, i) => {
        const Cmp = EXTRA_BLOCKS[b.t];
        if (!Cmp) return null;
        if (b.t === 'split') { altTone = !altTone; return <Cmp key={i} b={b} tone={altTone ? 'alt' : ''} alt={C.title} />; }
        if (i === 0 && C.sub) return <div key={i} className="sec-after-sub"><Cmp b={b} /></div>;
        return <Cmp key={i} b={b} />;
      })}
      {C.cta ? (
        <section className="sec">
          <div className="wrap-narrow" style={{ textAlign: 'center' }}>
            <Reveal>
              <Button variant="primary" href={C.ctaHref || ('mailto:' + MAIL + '?subject=' + encodeURIComponent(C.title))} target={C.ctaHref ? '_blank' : undefined} onClick={() => window.track && window.track(C.ctaHref ? 'kauf_klick' : 'mail_klick', { ort: pageKey, produkt: pageKey, kanal: 'payhip' })}>{C.cta}</Button>
              {C.ctaNote ? <p className="body" style={{ marginTop: 18, marginBottom: 0, fontSize: 'var(--text-small)' }}>{C.ctaNote}</p> : null}
            </Reveal>
          </div>
        </section>
      ) : null}
    </>
  );
}

const YogaRetreat = () => <ExtraPage pageKey="yogaretreat" />;
const CoupleRetreat = () => <ExtraPage pageKey="coupleretreat" />;
const DayRetreat = () => <ExtraPage pageKey="tagesretreat" />;
const MealPrep = () => <ExtraPage pageKey="mealprep" />;
const CurryPage = () => <ExtraPage pageKey="srilankacurry" />;
const Presse = () => <ExtraPage pageKey="presse" />;

Object.assign(window, { ExtraPage, YogaRetreat, CoupleRetreat, DayRetreat, MealPrep, CurryPage, Presse });
