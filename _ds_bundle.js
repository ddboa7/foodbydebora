/* @ds-bundle: {"format":4,"namespace":"FoodByDeboraDesignSystem_3eedd1","components":[{"name":"BioCard","sourcePath":"components/cards/BioCard.jsx"},{"name":"CategoryCard","sourcePath":"components/cards/CategoryCard.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"List","sourcePath":"components/core/List.jsx"},{"name":"Banner","sourcePath":"components/navigation/Banner.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/cards/BioCard.jsx":"2498eb840907","components/cards/CategoryCard.jsx":"16923834d209","components/cards/ProductCard.jsx":"548279685d0d","components/core/Button.jsx":"6f854555bef4","components/core/List.jsx":"14cd86afa6d3","components/navigation/Banner.jsx":"4a55672ce3f5","components/navigation/Navbar.jsx":"1c62930550d3","ui_kits/website/Screens.jsx":"1ebd24d66387"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FoodByDeboraDesignSystem_3eedd1 = window.FoodByDeboraDesignSystem_3eedd1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/BioCard.jsx
try { (() => {
function BioCard({
  image,
  name,
  role,
  bio
}) {
  return React.createElement('div', {
    style: {
      overflow: 'hidden',
      background: 'var(--surface-alt)',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '425px',
      width: '100%',
      margin: '0 auto',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement('img', {
    src: image,
    style: {
      height: '260px',
      width: '170px',
      objectFit: 'cover',
      flexShrink: 0
    }
  }), React.createElement('div', {
    style: {
      padding: '20px'
    }
  }, React.createElement('h2', {
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: 0,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, name), role && React.createElement('h3', {
    style: {
      fontSize: '14px',
      margin: 0,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, role), React.createElement('p', {
    style: {
      fontSize: '14px',
      lineHeight: 1.4,
      opacity: 0.7,
      marginTop: '8px',
      color: 'var(--text-primary)'
    }
  }, bio)));
}
Object.assign(__ds_scope, { BioCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BioCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/CategoryCard.jsx
try { (() => {
function CategoryCard({
  image,
  label,
  href
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('a', {
    href,
    target: '_blank',
    rel: 'noreferrer',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      borderRadius: 'var(--radius-md)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--transition), box-shadow var(--transition)',
      textDecoration: 'none',
      width: '100%'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '2.5rem',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
      color: 'white'
    }
  }, label));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  title,
  price
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      overflow: 'hidden',
      height: '120px',
      background: 'var(--surface-accent)',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '450px',
      width: '100%',
      margin: '0 auto',
      borderRadius: 'var(--radius-md)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--transition), box-shadow var(--transition)'
    }
  }, React.createElement('img', {
    src: image,
    style: {
      height: '100%',
      width: '120px',
      objectFit: 'cover',
      flexShrink: 0
    }
  }), React.createElement('div', {
    style: {
      padding: '16px'
    }
  }, React.createElement('h2', {
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: 0,
      textAlign: 'left',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, title), React.createElement('p', {
    style: {
      fontSize: '12px',
      lineHeight: 1.4,
      opacity: 0.7,
      marginTop: '8px',
      color: 'var(--text-primary)'
    }
  }, price)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  display: 'inline-block',
  fontFamily: 'var(--font-body)',
  textDecoration: 'none',
  letterSpacing: 'var(--tracking-wide)',
  textTransform: 'uppercase',
  transition: 'background var(--transition), color var(--transition), transform var(--transition), box-shadow var(--transition)',
  cursor: 'pointer',
  border: 'none'
};
const variants = {
  primary: {
    background: 'var(--brand-primary)',
    color: '#fff',
    borderRadius: 'var(--radius-pill)',
    padding: '12px 22px',
    fontSize: '1.05rem',
    fontWeight: 500,
    boxShadow: 'var(--shadow-sm)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    borderRadius: 'var(--radius-pill)',
    padding: '0.6rem 1.2rem',
    fontSize: '1.05rem',
    fontWeight: 500
  }
};
const hoverVariants = {
  primary: {
    background: 'var(--brand-primary-hover)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-md)'
  },
  ghost: {
    background: 'var(--brand-primary)',
    color: '#fff',
    transform: 'translateY(-2px)'
  }
};
function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  disabled = false
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hoverVariants[variant] : {}),
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto'
  };
  const props = {
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  };
  return href ? React.createElement('a', {
    ...props,
    href
  }, children) : React.createElement('button', props, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/List.jsx
try { (() => {
function List({
  items
}) {
  return React.createElement('ul', {
    style: {
      listStyle: 'none',
      padding: 0,
      maxWidth: '420px',
      margin: '0 auto'
    }
  }, items.map((item, i) => React.createElement('li', {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: '1.4rem',
      marginBottom: '0.6rem',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-body)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      left: 0,
      color: 'var(--brand-primary)',
      fontWeight: 'bold'
    }
  }, '\u2022'), item)));
}
Object.assign(__ds_scope, { List });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/List.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Banner.jsx
try { (() => {
function Banner({
  image,
  height = '50vh',
  position = '50% 60%',
  children
}) {
  return React.createElement('div', {
    style: {
      position: 'relative',
      height,
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: position,
      backgroundColor: 'var(--surface-accent)'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-banner)'
    }
  }), React.createElement('div', {
    style: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      color: 'rgb(250,250,250)',
      paddingTop: '1.5rem'
    }
  }, children));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Banner.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function Navbar({
  logo,
  items,
  active,
  langs
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--surface-page)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: 'var(--shadow-sm)',
      padding: '8px 24px',
      flexWrap: 'wrap'
    }
  }, React.createElement('img', {
    src: logo,
    style: {
      width: '130px',
      transition: 'transform var(--transition)'
    }
  }), React.createElement('ul', {
    style: {
      display: 'flex',
      gap: '2px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flexWrap: 'wrap'
    }
  }, items.map((it, i) => React.createElement('li', {
    key: i
  }, React.createElement('a', {
    href: it.href,
    style: {
      margin: '8px 9px',
      display: 'inline-block',
      opacity: it.label === active ? 1 : 0.6,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      fontSize: 'var(--text-small)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      borderBottom: it.label === active ? '2px solid var(--brand-primary)' : '2px solid transparent',
      paddingBottom: '4px'
    }
  }, it.label)))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
const {
  Navbar,
  Banner,
  CategoryCard,
  ProductCard,
  BioCard,
  List,
  Button
} = window.FoodByDeboraDesignSystem_3eedd1;
const IMG = '../../image_folder/';
const NAV_ITEMS = [{
  label: 'Catering',
  key: 'home'
}, {
  label: 'Rezepte',
  key: 'recipes'
}, {
  label: 'Beratung',
  key: 'counselling'
}, {
  label: 'Shop',
  key: 'shop'
}];
function Page({
  children
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, children);
}
function Section({
  children,
  style
}) {
  return React.createElement('section', {
    style: {
      maxWidth: '600px',
      width: 'calc(100% - 2rem)',
      margin: '0 auto',
      padding: '2rem 0',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-loose)',
      textAlign: 'center',
      ...style
    }
  }, children);
}
function H1({
  children
}) {
  return React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      textAlign: 'center',
      color: 'var(--text-primary)',
      padding: '2rem 1rem 0.5rem'
    }
  }, children);
}
function H2({
  children
}) {
  return React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      textAlign: 'center',
      color: 'var(--text-primary)',
      paddingBottom: '1rem'
    }
  }, children);
}
function Footer() {
  return React.createElement('footer', {
    style: {
      background: 'var(--surface-accent)',
      textAlign: 'center',
      padding: '1.5rem 1rem'
    }
  }, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      marginBottom: '1rem'
    }
  }, 'Kontakt'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '8px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '10px'
    }
  }, React.createElement(Button, {
    variant: 'ghost'
  }, 'Instagram'), React.createElement(Button, {
    variant: 'ghost'
  }, 'Email'), React.createElement(Button, {
    variant: 'ghost'
  }, 'Facebook')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '8px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement(Button, {
    variant: 'ghost'
  }, 'Impressum'), React.createElement(Button, {
    variant: 'ghost'
  }, 'AGB')), React.createElement('div', {
    style: {
      fontSize: 'var(--text-xs)',
      opacity: 0.75,
      paddingTop: '1rem',
      fontFamily: 'var(--font-body)'
    }
  }, '\u00A9 2020-2026 Foodbydebora'));
}
function Home() {
  return React.createElement(Page, null, React.createElement(Banner, {
    image: IMG + 'IMG_6151.JPG',
    height: '50vh'
  }, React.createElement('div', {
    style: {
      paddingTop: '1.2rem',
      fontSize: '0.9rem',
      textTransform: 'uppercase'
    }
  }, 'Deutsch \uD83C\uDDE9\uD83C\uDDEA \u00B7 English \uD83C\uDDEC\uD83C\uDDE7')), React.createElement(H1, null, 'Ein Catering, das n\u00e4hrt', React.createElement('br'), 'und begeistert'), React.createElement(Section, null, React.createElement('p', {
    style: {
      fontStyle: 'italic'
    }
  }, 'Hausgemachte, ausgewogene und leckere vegane und vegetarische Gerichte, die begeistern und nachhaltig gut tun.'), React.createElement('br'), React.createElement('br'), React.createElement('p', null, 'Mein Name ist Debora und f\u00fcr mich ist Essen weit mehr als nur Verpflegung. Mit meinem Catering zeige ich, dass pflanzliche K\u00fcche kein Verzicht ist, sondern eine Bereicherung.')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '16px',
      padding: '2%',
      maxWidth: '1000px',
      margin: '0 auto'
    }
  }, React.createElement(CategoryCard, {
    image: IMG + 'IMG_9243.jpg',
    label: 'Blog',
    href: '#'
  }), React.createElement(CategoryCard, {
    image: IMG + 'IMG_0261.jpg',
    label: 'Referenzen',
    href: '#'
  }), React.createElement(CategoryCard, {
    image: IMG + 'IMG_6151.JPG',
    label: 'Press',
    href: '#'
  })), React.createElement(Section, null, React.createElement(List, {
    items: ['vegan / pflanzenbasiert (auf Wunsch vegetarisch und glutenfrei)', 'mit einem Fokus auf Vollwertkost', 'frei von raffiniertem Zucker', 'mit frischen, vielf\u00e4ltigen und saisonalen Produkten']
  })), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '0 1rem 2rem',
      maxWidth: '450px',
      margin: '0 auto'
    }
  }, React.createElement(ProductCard, {
    image: IMG + 'IMG_0699.jpg',
    title: 'Take-Away',
    price: '23 CHF pro Mahlzeit'
  }), React.createElement(ProductCard, {
    image: IMG + 'IMG_0444.jpg',
    title: 'Standard Package',
    price: 'Verf\u00fcgbar ab 26 CHF pro Person'
  }), React.createElement(ProductCard, {
    image: IMG + 'Vegan_Brunch.jpg',
    title: 'Golden Package',
    price: 'Verf\u00fcgbar ab 48 CHF pro Person'
  }), React.createElement(ProductCard, {
    image: IMG + 'IMG_9019.JPG',
    title: 'Deluxe Package',
    price: 'Verf\u00fcgbar ab 150 CHF pro Person'
  })), React.createElement('div', {
    style: {
      textAlign: 'center',
      paddingBottom: '2rem'
    }
  }, React.createElement(Button, {
    variant: 'primary'
  }, 'Offerte anfragen')), React.createElement(Footer));
}
function Recipes() {
  const photos = ['IMG_0699.jpg', 'IMG_0261.jpg', 'IMG_0444.jpg', 'Vegan_Brunch.jpg', 'IMG_9019.JPG', 'IMG-7863.JPG'];
  return React.createElement(Page, null, React.createElement(Banner, {
    image: IMG + 'IMG_9019.JPG',
    height: '50vh'
  }, React.createElement('div', {
    style: {
      paddingTop: '1.2rem',
      fontSize: '0.9rem',
      textTransform: 'uppercase'
    }
  }, 'Deutsch \uD83C\uDDE9\uD83C\uDDEA \u00B7 English \uD83C\uDDEC\uD83C\uDDE7')), React.createElement(H1, null, 'Rezepte'), React.createElement(Section, null, 'Gesund und ausgewogen zu essen ist nicht immer einfach \u2014 besonders am Anfang. Die Rezepte unten fokussieren auf eine pflanzenbasierte Vollwertern\u00e4hrung.'), React.createElement('div', {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      justifyContent: 'center',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 1rem'
    }
  }, photos.map((p, i) => React.createElement('div', {
    key: i,
    style: {
      flex: '0 0 15%',
      minWidth: '110px',
      aspectRatio: '1',
      backgroundImage: `url(${IMG + p})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 'var(--radius-sm)'
    }
  }))), React.createElement('div', {
    style: {
      textAlign: 'center',
      padding: '2rem 1rem'
    }
  }, React.createElement('img', {
    src: IMG + 'Kochbuch Cover_eng.png',
    style: {
      maxWidth: '400px',
      width: '100%',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)'
    }
  })), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      paddingBottom: '2rem'
    }
  }, React.createElement(Button, {
    variant: 'primary'
  }, 'Buy E-BOOK / PDF'), React.createElement(Button, {
    variant: 'primary'
  }, 'Buy PRINTED version')), React.createElement(Footer));
}
function Counselling() {
  return React.createElement(Page, null, React.createElement(Banner, {
    image: IMG + 'boa_tanzt.jpeg',
    height: '60vh'
  }, React.createElement('div', {
    style: {
      paddingTop: '1.2rem',
      fontSize: '0.9rem',
      textTransform: 'uppercase'
    }
  }, 'Deutsch \uD83C\uDDE9\uD83C\uDDEA \u00B7 English \uD83C\uDDEC\uD83C\uDDE7')), React.createElement(H1, null, 'Personalisiertes Mentoring'), React.createElement(Section, null, 'Ich begleite gesundheitsbewusste Menschen ganzheitlich dabei, sich nachhaltig k\u00f6rperlich und mental besser zu f\u00fchlen \u2014 mit einer Kombination aus Ern\u00e4hrungswissen, Psychologie und alltagstauglichen Strategien.'), React.createElement('div', {
    style: {
      maxWidth: '425px',
      margin: '0 auto 2rem'
    }
  }, React.createElement(BioCard, {
    image: IMG + 'boa_tanzt.jpeg',
    name: 'Debora',
    role: 'Psychologin & Ern\u00e4hrungsberaterin',
    bio: 'Schwerpunkt auf Ayurveda und Darmgesundheit. Ich betreibe zudem einen Catering-Service.'
  })), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '0 1rem 2rem',
      maxWidth: '450px',
      margin: '0 auto'
    }
  }, React.createElement(ProductCard, {
    image: IMG + 'IMG_0261.jpg',
    title: 'Psychologische Beratung, 60 Min.',
    price: 'CHF 120'
  }), React.createElement(ProductCard, {
    image: IMG + 'IMG_0444.jpg',
    title: '1:1 Begleitung (4 Videoanrufe)',
    price: 'CHF 980'
  }), React.createElement(ProductCard, {
    image: IMG + 'Vegan_Brunch.jpg',
    title: '1:1 Begleitung (4 Monate)',
    price: "CHF 3'800"
  })), React.createElement('div', {
    style: {
      textAlign: 'center',
      paddingBottom: '2rem'
    }
  }, React.createElement(Button, {
    variant: 'primary'
  }, '\u27a1\ufe0f Buche einen FREE Discovery-Call')), React.createElement(Footer));
}
function Shop() {
  return React.createElement(Page, null, React.createElement(Banner, {
    image: IMG + 'Oatmeal.jpg',
    height: '60vh'
  }, React.createElement('div', {
    style: {
      paddingTop: '1.2rem',
      fontSize: '0.9rem',
      textTransform: 'uppercase'
    }
  }, 'Deutsch \uD83C\uDDE9\uD83C\uDDEA \u00B7 English \uD83C\uDDEC\uD83C\uDDE7')), React.createElement(H1, null, 'Online Shop'), React.createElement(Section, null, 'Tauche ein in die Welt der Aromen und entdecke unsere mit Liebe frisch gemahlenen Gew\u00fcrze. Qualit\u00e4t, Nachhaltigkeit und fairer Handel stehen an erster Stelle.'), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '0 1rem 2rem',
      maxWidth: '450px',
      margin: '0 auto'
    }
  }, React.createElement(ProductCard, {
    image: IMG + 'IMG_0699.jpg',
    title: 'Sri Lanka Curry im Glas',
    price: '7.90 CHF (46 g, 13 Portionen)'
  }), React.createElement(ProductCard, {
    image: IMG + 'IMG_0261.jpg',
    title: 'Sri Lanka Curry Nachf\u00fcllpackung',
    price: '3.20 CHF (22 g, 6 Portionen)'
  })), React.createElement(Footer));
}
Object.assign(window, {
  Home,
  Recipes,
  Counselling,
  Shop,
  NAV_ITEMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BioCard = __ds_scope.BioCard;

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.List = __ds_scope.List;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
