// Descriptive alt texts (SEO + accessibility), keyed by image role.
window.ALT = {
  de: {
    heroCatering: 'Veganes Buffet von Food by Debora für einen Anlass in Zug angerichtet',
    approach: 'Frisch zubereitete pflanzliche Gerichte aus der Catering-Küche von Food by Debora',
    why: 'Nährstoffreiche vegane Bowl mit Gemüse, Hülsenfrüchten und Saucen',
    aboutPortrait: 'Debora Döhrbeck, Psychologin und Ernährungsberaterin, in ihrer Küche',
    cookbookHero: 'Veganes Tiramisu aus dem Kochbuch von Food by Debora',
    cookbookCover: 'Kochbuch Lieblingsrezepte aus der Welt von Debora Döhrbeck',
    workshopsHero: 'Teilnehmerinnen kochen gemeinsam in einem veganen Kochkurs',
    workshopsBowls: 'Bowls und Beilagen aus einem veganen Kochkurs in Zürich',
    retreatVenue: 'Kursraum und Küche des Mariposa Zentrums für Kochkurse und Retreats',
    counsellingHero: 'Ganzheitliche Ernährungsberatung bei Food by Debora',
    counsellingNature: 'Ruhiger See als Sinnbild für ganzheitliche Gesundheit und Balance',
    counsellingPsychology: 'Psychologische Beratung und Ernährungscoaching im Gespräch',
    shopHero: 'Frisch gemahlenes Sri Lanka Curry von Food by Debora',
    shopKitchen: 'Gewürze werden für das Sri Lanka Curry frisch gemahlen',
    shopBowl: 'Gericht mit frisch gemahlenem Sri Lanka Curry',
    galleryDefault: 'Veganes Gericht von Food by Debora',
    logo: 'Food by Debora',
  },
  en: {
    heroCatering: 'Vegan buffet by Food by Debora served at an event in Zug',
    approach: 'Freshly prepared plant-based dishes from the Food by Debora catering kitchen',
    why: 'Nutrient-dense vegan bowl with vegetables, legumes and sauces',
    aboutPortrait: 'Debora Döhrbeck, psychologist and nutritionist, in her kitchen',
    cookbookHero: 'Vegan tiramisu from the Food by Debora cookbook',
    cookbookCover: 'Cookbook Favourite recipes from the world by Debora Döhrbeck',
    workshopsHero: 'Participants cooking together in a vegan cooking class',
    workshopsBowls: 'Bowls and side dishes from a vegan cooking class in Zurich',
    retreatVenue: 'Course room and kitchen of the Mariposa centre for cooking classes and retreats',
    counsellingHero: 'Holistic nutrition counselling at Food by Debora',
    counsellingNature: 'A calm lake as an image for holistic health and balance',
    counsellingPsychology: 'Psychological counselling and nutrition coaching in conversation',
    shopHero: 'Freshly ground Sri Lanka Curry by Food by Debora',
    shopKitchen: 'Spices being freshly ground for the Sri Lanka Curry',
    shopBowl: 'A dish made with freshly ground Sri Lanka Curry',
    galleryDefault: 'Vegan dish by Food by Debora',
    logo: 'Food by Debora',
  },
};

window.imgAlt = function (key, lang) {
  const t = window.ALT[lang] || window.ALT.de;
  return t[key] || t.galleryDefault;
};
