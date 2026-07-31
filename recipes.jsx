function useRecipeList() {
  const { lang } = useLang();
  return (lang === 'de' ? window.RECIPES_DE : window.RECIPES_EN) || [];
}

function RecipeGrid({ items }) {
  const { lang } = useLang();
  return (
    <div className="grid-recipes">
      {items.map((r, i) => (
        <Reveal key={r.slug} delay={(i % 4) * 60}>
          <a className="recipe-tile" href={pageUrl('recipe', lang, r.slug)}>
            <div className="media"><img src={IMG + r.photo} alt={r.name} loading="lazy" /></div>
            <div className="recipe-meta">
              <span className="recipe-cat">{r.cat}</span>
              <span className="recipe-name">{r.name}</span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

function CookbookCta({ num, compact }) {
  const C = useC().recipes;
  const { lang } = useLang();
  return (
    <section className={'sec' + (compact ? ' sec-alt' : '')}>
      <div className="wrap split split-narrow">
        <Reveal>
          <div className="media lift" style={{ background: 'var(--surface-accent)', padding: 'clamp(18px,3vw,40px)' }}>
            <img src={IMG + C.cover} alt="" style={{ borderRadius: 'var(--radius-sm)' }} />
          </div>
        </Reveal>
        <Reveal delay={80}>
          {num ? <Eyebrow num={num}>{C.bookEyebrow}</Eyebrow> : <Eyebrow>{C.bookEyebrow}</Eyebrow>}
          <h2 className="h2">{C.bookTitle}</h2>
          <p className="body" style={{ maxWidth: '46ch', marginBottom: 26 }}>{C.bookBody}</p>
          <div className="stack" style={{ gap: 12, alignItems: 'flex-start', marginTop: 28 }}>
            <Button variant="primary" href="https://payhip.com/b/H2zm" target="_blank" onClick={() => track('kauf_klick', { produkt: 'kochbuch', kanal: 'payhip' })}>{C.cta1}</Button>
            <Button variant="ghost" href="https://www.amazon.de/Lieblingsrezepte-aus-Welt-Entfessle-Kreativit%C3%A4t/dp/B08NVVW8PS/" target="_blank" onClick={() => track('kauf_klick', { produkt: 'kochbuch_print_de', kanal: 'amazon' })}>{C.cta2}</Button>
            <Button variant="ghost" href="https://www.amazon.de/dp/B08NW3XDBX" target="_blank" onClick={() => track('kauf_klick', { produkt: 'kochbuch_print_en', kanal: 'amazon' })}>{C.cta3}</Button>
          </div>
          <p style={{ marginTop: 26, fontSize: 'var(--text-small)' }}><a href={pageUrl('cookbook', lang)}>{C.back}</a></p>
        </Reveal>
      </div>
    </section>
  );
}

function Recipes() {
  const C = useC().recipes;
  const list = useRecipeList();
  return (
    <>
      <PageBanner image="rainbow-salad-bowl-vegan.jpg" position="50% 60%" eyebrow={C.eyebrow} title={C.title} />
      <section className="sec">
        <div className="wrap">
          <Reveal><Eyebrow num="01">{C.introEyebrow}</Eyebrow></Reveal>
          <Reveal delay={80} className="body cols-2">
            {C.intro.map((b, i) => (
              <div className="intro-block" key={i}>
                {b.h ? <h3 className="intro-sub">{b.h}</h3> : null}
                <p>{b.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="sec sec-alt" id="rezepte">
        <div className="wrap">
          <Reveal>
            <Eyebrow num="02">{C.gridEyebrow}</Eyebrow>
            <h2 className="h2" style={{ maxWidth: '26ch', marginBottom: 'clamp(20px,3vw,40px)' }}>{C.gridTitle}</h2>
          </Reveal>
          <RecipeGrid items={list} />
        </div>
      </section>
      <CookbookCta num="03" />
    </>
  );
}

function RecipeDetail({ slug }) {
  const C = useC().recipes;
  const L = C.labels;
  const list = useRecipeList();
  const { lang } = useLang();
  const idx = list.findIndex((r) => r.slug === slug);
  const r = list[idx];
  if (!r) {
    return (
      <section className="sec">
        <div className="wrap-narrow" style={{ paddingTop: 'clamp(60px,10vw,140px)' }}>
          <h1 className="h2">{C.title}</h1>
          <p className="body"><a href={pageUrl('recipes', lang)}>{L.allRecipes}</a></p>
        </div>
      </section>
    );
  }
  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];
  return (
    <>
      <PageBanner image={r.photo} position={r.pos || '50% 55%'} eyebrow={C.detailEyebrow} title={r.title} />
      <section className="sec">
        <div className="wrap-narrow">
          <Reveal>
            <p className="lede" style={{ fontStyle: 'italic', textAlign: 'center' }}>{r.intro}</p>
          </Reveal>
        </div>
      </section>
      {r.scan ? (
        <section className="sec sec-tight" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal>
              <figure className="recipe-scan">
                <div className="frame"><img src={IMG + r.scan} alt={r.title} loading="lazy" /></div>
              </figure>
            </Reveal>
          </div>
        </section>
      ) : null}
      <section className="sec sec-alt sec-tight" style={{ paddingTop: 'clamp(28px,4vw,56px)' }}>
        <div className="wrap split split-narrow" style={{ alignItems: 'start' }}>
          <Reveal>
            <div className="recipe-card">
              <h2 className="h3">{L.ingredients}</h2>
              {r.servings ? <p className="recipe-servings">{r.servings}</p> : null}
              {r.ingredients.map((g, i) => (
                <div key={i} className="recipe-group">
                  {g.label ? <div className="recipe-group-label">{g.label}</div> : null}
                  <ul className="recipe-ing">
                    {g.items.map((it, k) => <li key={k}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h3" style={{ marginBottom: 18 }}>{L.steps}</h2>
            <ol className="recipe-steps">
              {r.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ol>
            {r.note ? <p className="recipe-note">{r.note}</p> : null}
            {r.creative && r.creative.length ? (
              <div style={{ marginTop: 'clamp(28px,4vw,44px)' }}>
                <Eyebrow>{L.creative}</Eyebrow>
                <List items={r.creative} />
              </div>
            ) : null}
          </Reveal>
        </div>
        <div className="wrap" style={{ marginTop: 'clamp(36px,5vw,64px)' }}>
          <hr className="rule" />
          <div className="recipe-nav">
            <a href={pageUrl('recipe', lang, prev.slug)}>← {prev.name}</a>
            <a href={pageUrl('recipes', lang)}>{L.allRecipes}</a>
            <a href={pageUrl('recipe', lang, next.slug)}>{next.name} →</a>
          </div>
        </div>
      </section>
      <CookbookCta />
    </>
  );
}

Object.assign(window, { Recipes, RecipeDetail, RecipeGrid, CookbookCta, useRecipeList });
