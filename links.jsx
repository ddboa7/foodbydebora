const SOCIAL_ICONS = {
  Instagram: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.23 1 .5 1.5.95.44.45.72.85.95 1.44.17.43.36 1.06.42 2.24.06 1.28.07 1.68.07 4.9s0 3.6-.07 4.9c-.06 1.17-.25 1.8-.42 2.23-.23.6-.5 1-.95 1.45-.45.44-.85.72-1.45.95-.43.17-1.05.36-2.23.42-1.28.06-1.68.07-4.9.07s-3.6 0-4.9-.07c-1.17-.06-1.8-.25-2.23-.42a3.9 3.9 0 0 1-1.45-.95 3.9 3.9 0 0 1-.95-1.45c-.17-.43-.36-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.62.07-4.9c.06-1.18.25-1.8.42-2.24.23-.59.5-.99.95-1.44a3.9 3.9 0 0 1 1.45-.95c.43-.17 1.06-.36 2.23-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.73.07-.94.04-1.4.19-1.72.31-.4.16-.66.34-.95.63-.29.29-.47.55-.63.95-.12.32-.27.78-.31 1.72-.06 1.23-.07 1.6-.07 4.32s0 3.09.07 4.32c.04.94.19 1.4.31 1.72.16.4.34.66.63.95.29.29.55.47.95.63.32.12.78.27 1.72.31 1.23.06 1.6.07 4.73.07s3.5-.01 4.73-.07c.94-.04 1.4-.19 1.72-.31.4-.16.66-.34.95-.63.29-.29.47-.55.63-.95.12-.32.27-.78.31-1.72.06-1.23.07-1.6.07-4.32s0-3.09-.07-4.32c-.04-.94-.19-1.4-.31-1.72a2.6 2.6 0 0 0-.63-.95 2.6 2.6 0 0 0-.95-.63c-.32-.12-.78-.27-1.72-.31C15.5 4.01 15.14 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.2-2.4a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z',
  Facebook: 'M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.87.24-1.46 1.5-1.46h1.6V4.36c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.94 1.42-3.94 4.04v2.12H7.5v3h2.8V21h3.2Z',
  LinkedIn: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.2 21h3.6V9.6H3.2V21Zm6.2 0H13v-6.2c0-1.7 1.13-2.1 1.9-2.1.77 0 1.8.45 1.8 2.1V21h3.6v-6.5c0-3.4-1.9-5.1-4.2-5.1-1.6 0-2.6.7-3.1 1.5V9.6H9.4c.05.9 0 11.4 0 11.4Z',
  YouTube: 'M21.6 7.9a2.5 2.5 0 0 0-1.76-1.77C18.25 5.7 12 5.7 12 5.7s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.9C2 9.5 2 12 2 12s0 2.5.4 4.1a2.5 2.5 0 0 0 1.76 1.77C5.75 18.3 12 18.3 12 18.3s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 14.5 22 12 22 12s0-2.5-.4-4.1ZM10 15.1V8.9l5.3 3.1-5.3 3.1Z',
  TikTok: 'M16.6 2h-3.1v13.1a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12V9.5a5.7 5.7 0 1 0 4.92 5.64V8.6a5.6 5.6 0 0 0 3.4 1.15V6.65a2.9 2.9 0 0 1-2.05-.85 2.9 2.9 0 0 1-1.35-2.4V2Z',
};

const LINK_ROUTES = { '#/counselling': 'counselling', '#/catering': 'catering', '#/cookbook': 'cookbook', '#/recipes': 'recipes', '#/workshops': 'workshops', '#/shop': 'shop' };

function Links() {
  const C = useC().links;
  const { lang } = useLang();
  return (
    <>
      <section className="sec links-page">
        <div className="wrap-narrow">
          <Reveal className="links-head">
            <img className="links-avatar" src={IMG + 'veganer-brunch-zuerich.jpg'} alt="Debora Döhrbeck" />
            <h1 className="h2 links-name">Debora Döhrbeck</h1>
            <p className="links-role">{C.role}</p>
            <div className="links-social">
              {C.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label} title={s.label}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d={SOCIAL_ICONS[s.label]} /></svg>
                </a>
              ))}
            </div>
          </Reveal>
          {C.groups.map((g, gi) => (
            <Reveal key={g.title} delay={60 + gi * 40} className="links-group">
              <Eyebrow num={String(gi + 1).padStart(2, '0')}>{g.title}</Eyebrow>
              <div className="links-list">
                {g.items.map((it) => (
                  <a key={it.label} className="link-row" href={LINK_ROUTES[it.href] ? pageUrl(LINK_ROUTES[it.href], lang) : it.href} target={LINK_ROUTES[it.href] ? undefined : '_blank'} rel="noopener">
                    <span>{it.label}</span>
                    <span className="link-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Links });
