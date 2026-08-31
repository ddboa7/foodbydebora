function Hero() {
  const A = useAlt();
  const C = useC().home;
  return (
    <section className="wrap hero">
      <Reveal>
        <Eyebrow>{C.eyebrow}</Eyebrow>
        <h1 className="display">{C.title}</h1>
        <p className="lede" style={{ maxWidth: '46ch', marginTop: 'clamp(20px,2.4vw,32px)' }}>{C.lede}</p>
        <div className="row" style={{ gap: 12, marginTop: 'clamp(26px,3vw,40px)' }}>
          <Button variant="primary" href="#contact">{C.cta1}</Button>
          <Button variant="ghost" href="#/cookbook">{C.cta2}</Button>
        </div>
        <div className="stats">
          {C.stats.map(([n, l]) => (
            <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="hero-media">
          <img src="veganes-catering-buffet-zug.png" alt={A('heroCatering')} />
        </div>
      </Reveal>
    </section>
  );
}

function OfferRow() {
  const C = useC();
  const items = [
    { image: 'referenzen-veganes-catering.jpg', label: C.tiles.refs, href: 'https://maps.app.goo.gl/jYsZ3Vw52Q3RVynY7', src: 'rainbow-bowl-vegan.jpg' },
    { image: 'veganer-kochkurs-zug.jpg', label: C.nav.workshops, href: pageUrl('workshops', useLang().lang), src: 'kochkurse-und-retreats.jpg' },
    { image: 'veganer-haferbrei.jpg', label: C.tiles.press, href: pageUrl('presse', useLang().lang), src: 'veganer-brunch.jpg' },
  ];
  return (
    <section className="sec" style={{ paddingTop: 'calc(clamp(36px,5vw,72px) * var(--dens))' }}>
      <div className="wrap grid-cards">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 70}>
            <CategoryCard image={it.src || IMG + it.image} label={it.label} href={it.href} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  const A = useAlt();
  const C = useC().home;
  return (
    <section className="sec sec-alt">
      <div className="wrap split split-narrow">
        <Reveal>
          <div className="media media-tall lift"><img src={IMG + 'pflanzliche-kueche-frisch-zubereitet.jpg'} alt={A('approach')} loading="lazy" /></div>
        </Reveal>
        <Reveal delay={80}>
          <Eyebrow num="01">{C.approachEyebrow}</Eyebrow>
          <h2 className="h2">{C.approachTitle}</h2>
          <div className="body" style={{ maxWidth: '46ch', marginBottom: 28 }}>{C.approachBody.map((t, i) => <p key={i}>{t}</p>)}</div>
          <List items={C.approachList} />
        </Reveal>
      </div>
    </section>
  );
}

function Why() {
  const A = useAlt();
  const C = useC().home;
  return (
    <section className="sec">
      <div className="wrap split split-wide">
        <Reveal>
          <Eyebrow num="02">{C.whyEyebrow}</Eyebrow>
          <h2 className="h2" style={{ maxWidth: '18ch' }}>{C.whyTitle}</h2>
          <div className="body" style={{ maxWidth: '46ch' }}>
            {C.whyBody.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="media media-tall lift"><img src="naehrstoffreiche-vegane-bowl.jpg" alt={A('why')} loading="lazy" /></div>
        </Reveal>
      </div>
    </section>
  );
}

const CATERING_IMAGES = ['veganes-take-away-rifferswil.jpg', 'veganes-catering-standard-paket.jpg', 'veganes-buffet-golden-paket.jpg', 'private-chef-service-vegan.jpg'];

function Packages() {
  const C = useC().home;
  return (
    <section className="sec" id="packages">
      <div className="wrap">
        <Reveal>
          <div style={{ paddingBottom: 'clamp(28px,4vw,48px)' }}>
            <Eyebrow num="04">{C.packagesEyebrow}</Eyebrow>
            <h2 className="h2" style={{ margin: 0, maxWidth: '22ch' }}>{C.packagesTitle}</h2>
          </div>
        </Reveal>
        <Tiers items={C.tiers} images={CATERING_IMAGES} />
        <Reveal>
          <div className="row" style={{ gap: 12, marginTop: 'clamp(28px,3vw,40px)', justifyContent: 'center' }}>
            <Button variant="primary" href="#contact">{C.cta1}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const A = useAlt();
  const C = useC().home;
  return (
    <section className="sec sec-alt" id="about">
      <div className="wrap split split-wide" style={{ alignItems: 'start' }}>
        <Reveal>
          <Eyebrow num="05">{C.aboutEyebrow}</Eyebrow>
          <h2 className="h2">{C.aboutTitle}</h2>
          <div className="body" style={{ maxWidth: '48ch' }}>
            {C.aboutBody.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="row" style={{ gap: 12, marginTop: 28 }}>
            <Button variant="primary" href="#/counselling">{C.aboutCta}</Button>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="media media-tall lift"><img src="debora-doehrbeck-in-der-kueche.jpeg" alt={A('aboutPortrait')} loading="lazy" /></div>
        </Reveal>
      </div>
    </section>
  );
}

function Catering() {
  return (
    <>
      <Hero />
      <OfferRow />
      <Approach />
      <Why />
      <Testimonials num="03" />
      <Packages />
      <About />
      <Gallery num="06" />
      <Contact num="07" />
    </>
  );
}

function PageBanner({ image, eyebrow, title, position }) {
  return (
    <Banner image={image.startsWith('') ? image : IMG + image} height="min(62vh,620px)" position={position || '50% 55%'}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: 'min(62vh,620px)', padding: '0 clamp(20px,5vw,56px) clamp(32px,5vw,64px)', maxWidth: 1240, margin: '0 auto', textAlign: 'left' }}>
        {eyebrow ? <p className="eyebrow" style={{ position: 'relative', color: '#fff', margin: '0 0 12px', textShadow: '0 2px 14px rgba(40,32,24,.6)' }}>{eyebrow}</p> : null}
        <h1 className="display" style={{ position: 'relative', color: '#fff', maxWidth: '15ch', textShadow: '0 1px 2px rgba(40,32,24,.5), 0 4px 24px rgba(40,32,24,.55)' }}>{title}</h1>
      </div>
    </Banner>
  );
}

function Cookbook() {
  const A = useAlt();
  const C = useC().cookbook;
  const R = useC().recipes;
  return (
    <>
      <PageBanner image="veganes-tiramisu-kochbuch.png" position="50% 55%" eyebrow={C.eyebrow} title={C.title} />
      <section className="sec">
        <div className="wrap split split-narrow">
          <Reveal>
            <div className="media lift" style={{ background: 'var(--surface-alt)', padding: 'clamp(18px,3vw,40px)' }}>
              <img src={IMG + useC().recipes.cover} alt={A('cookbookCover')} style={{ borderRadius: 'var(--radius-sm)' }} />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Eyebrow num="01">{C.secEyebrow}</Eyebrow>
            <h2 className="h2">{C.secTitle}</h2>
            <div className="body" style={{ maxWidth: '46ch', marginBottom: 26 }}>{(Array.isArray(C.body) ? C.body : [C.body]).map((t, i) => <p key={i}>{t}</p>)}</div>
            <List items={C.list} />
            <div className="stack" style={{ gap: 12, alignItems: 'flex-start', marginTop: 28 }}>
              <Button variant="primary" href="https://payhip.com/b/H2zm" target="_blank" onClick={() => track('kauf_klick', { produkt: 'kochbuch', kanal: 'payhip' })}>{R.cta1}</Button>
              <Button variant="ghost" href="https://www.amazon.de/Lieblingsrezepte-aus-Welt-Entfessle-Kreativit%C3%A4t/dp/B08NVVW8PS/" target="_blank" onClick={() => track('kauf_klick', { produkt: 'kochbuch_print_de', kanal: 'amazon' })}>{R.cta2}</Button>
              <Button variant="ghost" href="https://www.amazon.de/dp/B08NW3XDBX" target="_blank" onClick={() => track('kauf_klick', { produkt: 'kochbuch_print_en', kanal: 'amazon' })}>{R.cta3}</Button>
            </div>
          </Reveal>
        </div>
      </section>
      <Gallery num="02" />
      <Testimonials num="03" variant="Cookbook" />
      <Contact num="04" variant="Cookbook" />
    </>
  );
}

const WORKSHOP_IMAGES = ['veganer-brunch-zuerich.jpg', 'veganer-kochkurs-zug.jpg', 'veganes-catering-tisch.jpg', 'rainbow-salad-bowl-vegan.jpg'];

function Workshops() {
  const A = useAlt();
  const C = useC().workshops;
  return (
    <>
      <PageBanner image="veganer-kochkurs-workshop.jpg" position="50% 40%" eyebrow={C.eyebrow} title={C.title} />
      <section className="sec">
        <div className="wrap">
          <Reveal>
            <div className="split split-wide" style={{ alignItems: 'end', paddingBottom: 'clamp(28px,4vw,48px)' }}>
              <div>
                <Eyebrow num="01">{C.secEyebrow}</Eyebrow>
                <h2 className="h2" style={{ margin: 0, maxWidth: '16ch' }}>{C.secTitle}</h2>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <ul className="agenda">
              {C.agenda.map((a) => (
                <li key={a.what}>
                  <span className="agenda-when">{a.when}</span>
                  {a.whatHref
                    ? <a className="agenda-what agenda-link" href={a.whatHref} target="_blank" rel="noreferrer">{a.what}</a>
                    : <span className="agenda-what">{a.what}</span>}
                  <span className="agenda-where">{a.where}</span>
                  {a.href
                    ? <a className="agenda-price agenda-link" href={a.href} target="_blank" rel="noreferrer">{a.price}</a>
                    : <span className="agenda-price">{a.price}</span>}
                </li>
              ))}
            </ul>
            <div className="row" style={{ gap: 16, marginTop: 24, alignItems: 'center' }}>
              <Button variant="primary" href="#contact">{C.cta}</Button>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', maxWidth: '38ch' }}>{C.agendaNote}</span>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="wrap split split-wide" style={{ alignItems: 'start' }}>
          <Reveal>
            <Eyebrow num="02">{C.formatsEyebrow}</Eyebrow>
            <h2 className="h2">{C.formatsTitle}</h2>
            <div className="body" style={{ maxWidth: '46ch' }}>
              {C.formatsBody.map((t, k) => <p key={k}>{t}</p>)}
            </div>
            <List items={C.formatsList} />
            <div className="row" style={{ gap: 12, marginTop: 28 }}>
              <Button variant="primary" href="#contact">{C.cta}</Button>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="media media-tall lift"><img src="kochkurs-bowls-zuerich.png" alt={A('workshopsBowls')} loading="lazy" /></div>
          </Reveal>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal>
            <Eyebrow num="03">{C.onlineEyebrow}</Eyebrow>
            <h2 className="h2" style={{ margin: '0 0 clamp(28px,4vw,48px)', maxWidth: '20ch' }}>{C.onlineTitle}</h2>
          </Reveal>
          <div className="course-grid">
            {C.courses.map((co, k) => (
              <Reveal key={co.title} delay={(k % 3) * 60}>
                <article className="course-card">
                  <h3>{co.title}</h3>
                  <p className="course-sub">{co.sub}</p>
                  <ul>{co.points.map((pt, n) => <li key={n}>{pt}</li>)}</ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="wrap split split-narrow">
          <Reveal>
            <div className="media media-tall lift"><img src={IMG + 'mariposa-zentrum-kochkurse.png'} alt={A('retreatVenue')} loading="lazy" style={{ objectPosition: '50% 60%' }} /></div>
          </Reveal>
          <Reveal delay={80}>
            <Eyebrow num="04">{C.communityEyebrow}</Eyebrow>
            <h2 className="h2">{C.communityTitle}</h2>
            <div className="body" style={{ maxWidth: '46ch' }}>
              {C.communityBody.map((t, k) => <p key={k}>{t}</p>)}
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,1.5vw,1.35rem)', margin: '28px 0 12px' }}>{C.communityListTitle}</h3>
            <List items={C.communityList} />
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.55, maxWidth: '46ch', marginTop: 18 }}>{C.communityNote}</p>
            <div className="row" style={{ gap: 12, marginTop: 28 }}>
              <Button variant="primary" href={C.communityHref}>{C.communityCta}</Button>
            </div>
          </Reveal>
        </div>
      </section>
      <Testimonials num="05" variant="Workshops" />
      <Contact num="06" variant="Workshops" />
    </>
  );
}

const COUNSELLING_IMAGES = ['psychologische-beratung.jpeg', 'ganzheitliche-gesundheit.jpg', 'persoenliche-begleitung-mentoring.jpg', 'paar-retreat-tanzen.jpeg'];

function Counselling() {
  const A = useAlt();
  const C = useC().counselling;
  return (
    <>
      <PageBanner image="ganzheitliche-ernaehrungsberatung.jpg" eyebrow={C.eyebrow} title={C.title} position="50% 50%" />
      <section className="sec">
        <div className="wrap">
          <Reveal>
            <Eyebrow num="01">{C.hookEyebrow}</Eyebrow>
            <h2 className="h2" style={{ maxWidth: '26ch' }}>{C.hookTitle}</h2>
            <div className="body" style={{ maxWidth: '54ch' }}>
              {C.hookBody.map((s, i) => <p key={i}>{s}</p>)}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="wrap split split-wide" style={{ alignItems: 'start' }}>
          <Reveal>
            <Eyebrow num="02">{C.familiarEyebrow}</Eyebrow>
            <h2 className="h2" style={{ maxWidth: '26ch' }}>{C.familiarTitle}</h2>
            <div className="list-left"><List items={C.familiarList} /></div>
            <p className="body" style={{ fontStyle: 'italic', maxWidth: '52ch', marginTop: 'clamp(18px,2vw,26px)' }}>{C.familiarNote}</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="media media-tall lift"><img src={IMG + 'debora-kocht-kueche.jpg'} alt={A('deboraCooking')} loading="lazy" /></div>
          </Reveal>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal>
            <Eyebrow num="03">{C.axisEyebrow}</Eyebrow>
            <h2 className="h2" style={{ maxWidth: '26ch' }}>{C.axisTitle}</h2>
            <div className="body" style={{ maxWidth: '58ch' }}>
              {C.axisBody.map((s, i) => <p key={i}>{s}</p>)}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="wrap">
          <Reveal>
            <Eyebrow num="04">{C.phasesEyebrow}</Eyebrow>
            <h2 className="h2" style={{ maxWidth: '24ch' }}>{C.phasesTitle}</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="phases">
              {C.phases.map((ph, i) => (
                <div className="phase" key={i}>
                  <span className="phase-num">{i + 1}</span>
                  <h3 className="h3 phase-title">{ph.title}</h3>
                  <p className="phase-body">{ph.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec sec-accent">
        <div className="wrap wrap-narrow">
          <Reveal>
            <div className="call-card">
              <Eyebrow num="05">{C.callEyebrow}</Eyebrow>
              <h2 className="h2" style={{ maxWidth: '22ch' }}>{C.callTitle}</h2>
              <p className="call-meta">{C.callMeta}</p>
              <p className="body">{C.callBody}</p>
              <div className="list-left"><List items={C.callList} /></div>
              <p className="body" style={{ marginTop: 'clamp(18px,2vw,26px)' }}>{C.callNote}</p>
              <div className="row" style={{ marginTop: 'clamp(22px,2.4vw,32px)' }}>
                <Button variant="primary" href="#contact">{C.callCta}</Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="next-steps">
              <Eyebrow>{C.nextEyebrow}</Eyebrow>
              {C.nextTiers.map((t, i) => (
                <div className="next-step" key={i}>
                  <h3 className="h3 next-step-title">{t.title}</h3>
                  <p className="next-step-meta">{t.meta}</p>
                  <p className="next-step-body">{t.body}</p>
                  {t.points && <div className="list-left" style={{ marginTop: 14 }}><List items={t.points} /></div>}
                </div>
              ))}
              {C.payNote && <p className="terms-pay">{C.payNote}</p>}
              {C.terms && (
                <div className="terms">
                  <h3 className="terms-title">{C.termsTitle}</h3>
                  <dl className="terms-list">
                    {C.terms.map((t, i) => (
                      <div className="terms-item" key={i}>
                        <dt>{t.h}</dt>
                        <dd>{t.p}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="wrap split split-wide" style={{ alignItems: 'start' }}>
          <Reveal>
            <Eyebrow num="06">{C.whoEyebrow}</Eyebrow>
            <h2 className="h2" style={{ maxWidth: '18ch', whiteSpace: 'pre-line' }}>{C.whoTitle}</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="body" style={{ maxWidth: '46ch' }}>
              {C.whoBody.map((s, i) => <p key={i}>{s}</p>)}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split split-wide" style={{ alignItems: 'start' }}>
          <Reveal>
            <Eyebrow num="07">{C.whyEyebrow}</Eyebrow>
            <h2 className="h2">{C.whyTitle}</h2>
            <div className="body" style={{ maxWidth: '52ch' }}>
              {C.whyBody.map((p, i) => <p key={i}>{p}</p>)}
              <p className="sig" style={{ marginTop: 18 }}>{C.signoff}</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="media media-tall lift"><img src={IMG + 'debora-tanzt-raum.jpeg'} alt={A('deboraDancing')} loading="lazy" /></div>
          </Reveal>
        </div>
      </section>
      <Testimonials num="08" variant="Counselling" tone="accent" />
      <section className="sec">
        <div className="wrap split split-narrow">
          <Reveal>
            <a href="https://www.akademie-der-naturheilkunde.com" target="_blank" rel="noopener">
              <img src={IMG + 'akn-zertifizierte-ernaehrungsberatung.png'} alt="Akademie der Naturheilkunde - zertifiziert" loading="lazy" style={{ display: 'block', width: '100%', maxWidth: 240 }} />
            </a>
          </Reveal>
          <Reveal delay={80}>
            <Eyebrow num="09">{C.eduEyebrow}</Eyebrow>
            <List items={C.eduList} />
          </Reveal>
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="wrap wrap-narrow">
          <Reveal>
            <Eyebrow num="10">{C.faqEyebrow}</Eyebrow>
            <div className="faq">
              {C.faq.map((f, i) => (
                <details className="faq-item" key={i}>
                  <summary className="faq-q">{f.q}<span className="faq-mark" aria-hidden="true"></span></summary>
                  {(Array.isArray(f.a) ? f.a : [f.a]).map((t, k) => <p className="faq-a" key={k}>{t}</p>)}
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <Contact num="11" variant="Counselling" />
    </>
  );
}

const SHOP_IMAGES = ['sri-lanka-curry-glas.jpeg', 'sri-lanka-curry-nachfuellpackung.jpeg'];

function Shop() {
  const A = useAlt();
  const C = useC().shop;
  return (
    <>
      <PageBanner image="sri-lanka-curry-shop.png" eyebrow={C.eyebrow} title={C.title} position="50% 60%" />
      <section className="sec">
        <div className="wrap split split-wide">
          <Reveal>
            <Eyebrow num="01">{C.secEyebrow}</Eyebrow>
            <h2 className="h2">{C.secTitle}</h2>
            <div className="body" style={{ maxWidth: '46ch' }}>
              {C.body.map((p, i) => <p key={i}>{p}</p>)}
              <p><strong>{C.orderNote}</strong></p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="media media-tall lift"><img src={IMG + 'gewuerze-frisch-gemahlen.png'} alt={A('shopKitchen')} loading="lazy" /></div>
          </Reveal>
        </div>
      </section>
      <section className="sec sec-alt">
        <div className="wrap split split-narrow">
          <Reveal>
            <div className="media media-wide lift"><img src={IMG + 'sri-lanka-curry-gericht.png'} alt={A('shopBowl')} loading="lazy" /></div>
          </Reveal>
          <Reveal delay={80}>
            <Eyebrow num="02">{C.storyEyebrow}</Eyebrow>
            <h2 className="h2" style={{ maxWidth: '24ch' }}>{C.storyTitle}</h2>
            <div className="body" style={{ maxWidth: '46ch' }}>
              {C.storyBody.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal><Eyebrow num="03">{C.tiersEyebrow}</Eyebrow></Reveal>
          <div className="grid-tiers" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}>
            {C.tiers.map((t, i) => (
              <Reveal key={i} delay={i * 70}>
                <a href={t.href} target="_blank" rel="noopener" onClick={() => track('kauf_klick', { produkt: t.title, kanal: 'payhip' })} style={{ display: 'block', textDecoration: 'none' }}>
                  <ProductCard image={IMG + SHOP_IMAGES[i]} title={t.title} price={t.price} />
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="row" style={{ gap: 12, marginTop: 'clamp(28px,3vw,40px)' }}>
              <Button variant="primary" href="https://payhip.com/FoodbyDebora" target="_blank" onClick={() => track('kauf_klick', { produkt: 'shop_uebersicht', kanal: 'payhip' })}>{C.cta}</Button>
            </div>
          </Reveal>
        </div>
      </section>
      <Contact num="04" variant="Shop" />
    </>
  );
}

function Impressum() {
  const { lang } = useLang();
  const L = window.LEGAL[lang].impressum;
  return (
    <>
      <section className="sec pagehead">
        <div className="wrap">
          <Reveal>
            <Eyebrow>{L.eyebrow}</Eyebrow>
            <h1 className="display">{L.title}</h1>
          </Reveal>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal>
            <div className="body" style={{ maxWidth: '40ch' }}>
              <p>{L.lines.map((l, i) => <React.Fragment key={i}>{l}<br /></React.Fragment>)}</p>
              <div className="stack" style={{ gap: 6 }}>
                {L.contact.map((c) => (
                  <div key={c.label}><span style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-small)' }}>{c.label}: </span><a href={c.href}>{c.value}</a></div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function AGB() {
  const { lang } = useLang();
  return <LegalDoc L={window.LEGAL[lang].agb} />;
}

function Datenschutz() {
  const { lang } = useLang();
  return <LegalDoc L={window.LEGAL[lang].datenschutz} />;
}

function LegalDoc({ L }) {
  return (
    <>
      <section className="sec pagehead">
        <div className="wrap">
          <Reveal>
            <Eyebrow>{L.eyebrow}</Eyebrow>
            <h1 className="display" style={{ maxWidth: '22ch' }}>{L.title}</h1>
            <p className="body" style={{ maxWidth: '52ch', marginTop: 'clamp(16px,2vw,24px)' }}>{L.intro}</p>
            {L.note ? <p style={{ maxWidth: '52ch', fontSize: 'var(--text-small)', color: 'var(--text-secondary)' }}>{L.note}</p> : null}
          </Reveal>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="stack" style={{ gap: 'clamp(28px,3vw,44px)', maxWidth: '62ch' }}>
            {L.sections.map((s, i) => (
              <Reveal key={s.h}>
                <h2 className="h3" style={{ marginBottom: 10 }}>{s.h}</h2>
                <div className="body">{s.p.map((p, j) => <p key={j}>{p}</p>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Catering, Cookbook, Workshops, Counselling, Shop, Impressum, AGB, Datenschutz, PageBanner });
