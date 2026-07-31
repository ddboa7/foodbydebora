// Sub-pages rebuilt from the old site: retreats, masterclass, curry, press.
// Block types: prose | list | split | people | quotes | cards | image | gallery
const MARIA_DE = ['Ich habe mein ganzes Leben lang viel Sport gemacht. Über die Jahre habe ich gemerkt, dass mir die ruhigeren Bewegungsformen wie Yoga besonders gut tun. Auch der leistungsfreie Aspekt tut mir gut. Durch Yoga habe ich gelernt, dass der Körper nie im selben Zustand ist. Indem du auf der Yogamatte den JETZIGEN Moment akzeptierst, wird dies auch im täglichen Alltag einfacher.', 'Ich mag es sehr, jede Bewegung bewusst und präzise auszuführen, um zu spüren und zu beobachten, wie sich mein Körper auf der Matte bewegt. Ich lasse mich gerne von der Energie der Teilnehmenden inspirieren, um eine für den jeweiligen Moment passende Einheit anzubieten. Es sind genau diese Adaptionen, das Spüren und Einfühlen in die Menschen, die jede Yogastunde für mich zu einem Glücksmoment machen.'];
const MARIA_EN = ['I have done a lot of sport all my life. Over the years I noticed that the calmer forms of movement such as yoga do me particularly good, as does the absence of performance pressure. Yoga taught me that the body is never in the same state twice. By accepting the PRESENT moment on the mat, it becomes easier in everyday life too.', 'I love carrying out every movement consciously and precisely, feeling and observing how my body moves on the mat. I like to let myself be inspired by the energy of the participants to offer a session that fits the moment. It is exactly these adaptations, this sensing and empathising with people, that make every yoga class a moment of happiness for me.'];
const DEBORA_DE = ['Debora ist eine vegane Köchin, Psychologin (MSc) und zertifizierte Ernährungsberaterin mit Schwerpunkt auf Ayurveda und Darmgesundheit. Sie hat eine Leidenschaft für leckeres Essen und setzt sich für Gesundheit und Wohlbefinden ein.', 'Für sie geht es bei der pflanzlichen Ernährung nicht darum, auf kulinarische Genüsse zu verzichten. Es geht darum, sich lebendiger, ausgeglichener und rundum zufrieden zu fühlen.'];
const DEBORA_EN = ['Debora is a vegan cook, psychologist (MSc) and certified nutritionist with a focus on Ayurveda and gut health. She has a passion for delicious food and is committed to health and wellbeing.', 'For her, plant-based eating is not about giving up culinary pleasure. It is about feeling more alive, more balanced and thoroughly content.'];

window.EXTRAS = {
  de: {
    yogaretreat: {
      eyebrow: 'Retreat', title: 'Yoga Retreat in Spanien', sub: 'Nähe Málaga · Do 12. – Di 17. September',
      banner: 'villa-spanien-yogaraum.jpg', bannerPos: '50% 60%',
      blocks: [
        { t: 'prose', h: 'Explore the Art of Self-Love & Self-Care', p: [
          'Geniesse das Plätschern des Wassers, das Rauschen des Windes, die Wärme der Sonne auf deinem Gesicht und Zeit für dich, um wieder in deine Mitte zu kommen.',
          'Während dieses Retreats stehen Self-Love und Self-Care im Mittelpunkt. Warum gerade diese Themen? Manchmal ist es nicht einfach, die richtigen Entscheidungen für sich selbst zu treffen oder optimal für sich zu sorgen. Stress oder andere äussere Einflüsse können uns dazu bringen, andere Entscheidungen zu treffen als die, die uns eigentlich gut tun.',
          'Bei diesem Retreat geht es darum, sich nach innen zu wenden und zu fühlen. Nimm dich selbst wahr und entdecke wieder, was dir gut tut. Was brauchst du? Was möchtest du und was ist dir wichtig? Aus eigener Erfahrung wissen wir, wie viel ein paar Tage weg vom Alltag an Klarheit und Veränderung schaffen können.',
          'Lass dich dabei kulinarisch von allen Sinnen verwöhnen. Für dieses Retreat haben wir eine wunderschön renovierte Mühle ausgewählt, durch welche der Fluss Rio Guaro fliesst. Eine Oase der Ruhe mit luxuriösem Ambiente.',
          'Wir freuen uns, dich auf deiner Reise begleiten zu dürfen. — Maria & Debora',
        ] },
        { t: 'gallery', imgs: ['villa-spanien-patio.jpeg', 'villa-spanien-pool-garten.jpeg', 'villa-spanien-zimmer.jpeg', 'villa-spanien-badezimmer.jpeg', 'villa-spanien-wohnzimmer.jpeg', 'villa-spanien-esszimmer.jpeg', 'villa-spanien-terrasse-essen.jpg', 'villa-spanien-yogapatio.jpeg', 'villa-spanien-bei-nacht.jpeg'], alts: ['Patio der Villa mit Sitzplätzen im Schatten', 'Pool mit Liegen und Blick in die Olivenhaine', 'Schlafzimmer mit Lehmwänden und Rundbogenfenster', 'Badezimmer mit Regenduschen und warmem Licht', 'Wohnzimmer mit Holzbalken und Sitzkissen', 'Esszimmer mit langem Holztisch und Kerzen', 'Gedeckter Tisch auf der Terrasse mit Bergblick', 'Yogaplattform im Freien mit Matten', 'Die Villa bei Nacht mit beleuchtetem Innenhof'] },
        { t: 'split', h: 'Programmpaket & Inklusive', img: 'villa-spanien-yogapatio.jpeg', side: 'right', list: [
          'Transfer vom und zum Flughafen Málaga',
          '5 Übernachtungen in liebevoll gestalteten Zimmern mit eigenem Badezimmer',
          'Yoga und Meditation zweimal täglich unter Leitung von Maria (jedes Niveau willkommen)',
          'Yoga-Ausrüstung vorhanden: Matten, Bolster, Blöcke, Decken, Meditationskissen',
          'Gesunde, leckere vegetarische Mahlzeiten, angepasst an deine Ernährungsbedürfnisse: Brunch, Abendessen, Snacks, Kaffee und Tee',
          'Kochkurs unter Leitung von Debora',
          '1:1 Beratung mit Debora',
          'Breath Workshop und Zeit für dich',
          'Kleine Gruppengrösse, maximal 13 Personen',
        ], p: ['Nicht inbegriffen: Flug oder Zug nach Málaga sowie Reise- und Annullierungsversicherung.'] },
        { t: 'split', h: 'Investition', img: 'villa-spanien-zimmer.jpeg', side: 'left', list: [
          'Viererzimmer mit privatem Badezimmer: CHF 1\'390 pro Person',
          'Doppelzimmer mit privatem Badezimmer: CHF 1\'540 pro Person',
          'Einzelzimmer mit privatem Badezimmer: CHF 1\'890 pro Person',
        ], p: [
          'Early Bird: Bei früher Buchung erhältst du 10 % Rabatt.',
          'Es gibt die Möglichkeit, bereits einen Tag vor dem Start anzureisen und die Villa zu geniessen. Aufpreis CHF 100.',
          'Um deine Buchung zu sichern: 50 % Anzahlung, der Rest spätestens eine Woche vor dem Retreat.',
          'Stornierung: 2 Monate vorher 50 % erstattungsfähig, 1 Monat vorher nicht erstattungsfähig.',
        ] },
        { t: 'split', h: 'Unterkunft', img: 'villa-spanien-pool.jpg', side: 'right', p: ['Die Unterkunft liegt in Südspanien, Andalusien, eine Autostunde vom Flughafen Málaga entfernt, in der Nähe des Dorfes Periana. Die alte Mühle wurde komplett renoviert und sehr geschmackvoll eingerichtet.'] },
        { t: 'people', h: 'Wer dich begleitet', items: [
          { img: 'maria-yogalehrerin.jpg', name: 'Maria', role: 'Yoga & Meditation', p: MARIA_DE, link: { label: 'uyuniyoga.ch', href: 'https://uyuniyoga.ch' } },
          { img: 'debora-doehrbeck-portrait.jpg', name: 'Debora', role: 'Küche & Beratung', p: DEBORA_DE },
        ] },
      ],
      cta: 'Buchung per E-Mail', ctaNote: 'Schreib mir für die Buchung oder offene Fragen.',
    },
    coupleretreat: {
      eyebrow: 'Retreat', title: 'Paar Wochenende in Rifferswil', sub: 'Maximal drei Paare · Alle Mahlzeiten inklusive',
      banner: 'paar-retreat-tanzen.jpeg', bannerPos: '50% 40%',
      blocks: [
        { t: 'prose', h: 'Ein Wochenende, das euch als Paar näher bringt', p: [
          'Mit konkreten Werkzeugen für mehr Verbindung im Alltag.',
          'Ich bin mit Eltern aufgewachsen, die sich nicht nur innig lieben, sondern diese Liebe auch offen zeigen. Sie haben uns von ihren Schwierigkeiten erzählt, von ihren Gesprächen, den Paarseminaren, die sie besucht haben, und den Büchern, die sie gelesen haben, um gemeinsam zu wachsen. Deshalb war unser Zuhause ein Ort, an dem alle Fragen willkommen waren.',
          'Ich glaube, deshalb haben mich intime Beziehungen schon so früh fasziniert. Diese wahrhaftige, sich entwickelnde, zärtliche Liebe, die Präsenz und Mut erfordert.',
          'Während meines Masterstudiums besuchte ich ein Seminar mit dem Titel „Psychologie und Business". Unsere Abschlussaufgabe bestand darin, einen Businessplan zu erstellen, der beide Bereiche verbindet. Ohne zu zögern entschied ich mich für präventive Paarseminare. Der Dozent sagte damals, das sei eine dumme Geschäftsidee, so etwas würde niemand besuchen. Er war älter, erfahrener, also zweifelte ich an mir und verwarf den Gedanken. Aber tief im Herzen habe ich nie aufgehört zu glauben, dass er sich irrte.',
          'Nachdem ich über fünfzehn Retreats organisiert, für Menschen gekocht, einen geschützten Raum geschaffen und die Gruppendynamik beobachtet habe, ist dieselbe Idee zurückgekehrt, stärker denn je.',
          'Was mich bei meinen Retreats am meisten fasziniert, sind die Momente, in denen Paare gemeinsam kochen. Wie sie miteinander kommunizieren. Wie sie sich necken. Wie kleine Gewohnheiten, Zärtlichkeiten und Spannungen zwischen Gemüseschneiden und Umrühren im Topf zum Vorschein kommen.',
          'Es liegt eine besondere Kraft und Intimität darin, einen sicheren Raum zu haben, in dem Paare wachsen, wieder zueinander finden und sich neu entdecken können. Nicht weil etwas kaputt ist, sondern weil sie die Liebe wertschätzen und verstehen, dass bewusste Zuwendung sie lebendig hält.',
          'Wir freuen uns darauf, den Raum zu halten und euch kulinarisch zu verwöhnen. — Jan & Debora',
        ] },
        { t: 'split', h: 'Programm', img: 'paar-retreat-tanzen.jpeg', side: 'right', list: [
          'Zusammen träumen: Wohin geht eure gemeinsame Reise?',
          'Kreative Kooperation: Teamwork im Alltag',
          'Achtsame Berührung wiederentdecken, jenseits von Routine und Erwartungsdruck',
          'Training und Dehnen mal anders: Führen und Hingeben',
          'Drei Techniken zum besser Streiten: Sprache, die eure Beziehung stärkt',
        ], p: ['Das Programm ist flexibel und passt sich den aktuellen Bedürfnissen der Teilnehmenden an.'] },
        { t: 'split', h: 'Investition, wann & wo', img: 'veganer-brunch-zuerich.jpg', side: 'left', p: [
          'Investition: CHF 580 pro Person. Alle Mahlzeiten und Getränke sind inklusive und wir geniessen sie gemeinsam. Während des Wochenendes wird kein Alkohol ausgeschenkt, ausser Kombucha.',
          'Early Bird: Bei früher Buchung erhältst du 10 % Rabatt.',
          'Sprache: Da wir Anfragen von deutsch- und englischsprachigen Paaren erhalten haben, bieten wir voraussichtlich ein Wochenende auf Deutsch und ein weiteres auf Englisch an.',
          'Wir mieten den Yogaraum in unserem Dorf und gestalten das Erlebnis bewusst intim: maximal drei Paare.',
          'Um deine Buchung zu sichern: 50 % Anzahlung. Der Restbetrag ist spätestens zwei Wochen vor dem Wochenende fällig. Stornierung: bis 2 Monate vorher werden 50 % erstattet, bis 1 Monat vorher erfolgt keine Rückerstattung.',
        ] },
        { t: 'split', h: 'Unterkunft', img: 'gasthaus-im-poestli-rifferswil.png', side: 'right', p: [
          'Das erste Paar, das bucht, kann in unserem schönen Gästezimmer mit eigenem Bad übernachten.',
          'Die beiden anderen Paare können ein Zimmer im gemütlichen Boutique Gasthaus im Pöstli buchen, ab CHF 140 pro Nacht, nur 7 Gehminuten entfernt, oder zu Hause übernachten, wenn sie in der Nähe wohnen.',
          'Jedes Paar ist für die Organisation seiner eigenen Unterkunft selbst verantwortlich.',
        ], link: { label: 'Boutique Gasthaus im Pöstli', href: 'https://www.poestli-rifferswil.ch/rooms' } },
      ],
      cta: 'Buchung per E-Mail', ctaNote: 'Schreibt mir für die Buchung oder offene Fragen.',
    },
    tagesretreat: {
      eyebrow: 'Retreat', title: 'Tages Retreat in Zug', sub: 'Ein Tag, ein Moment nur für dich',
      banner: 'tages-retreat-zug.png', bannerPos: '50% 50%',
      blocks: [
        { t: 'prose', p: [
          'Ein Tag, ein Moment speziell für dich und nur für dich. Warum? Weil du es wert bist, dir Zeit für dich zu nehmen.',
          'Manchmal verlieren wir uns in der Hektik des Alltags. Ein anstrengender Job, ein aktives Sozialleben, andere Verpflichtungen, vielleicht ein Familienleben. Alles Faktoren, in denen wir uns selbst verlieren können. Manchmal tut es gut, sich einen Moment Zeit zu nehmen, um bewusst innezuhalten und zu spüren, was man braucht. Nimm deinen Körper einfach mal wahr. Was spürst du, was fällt dir auf?',
          'Vielleicht nimmst du dir etwas Zeit, um darüber nachzudenken, womit du gerne mehr oder weniger Zeit verbringen möchtest. Mit anderen Worten: Was genau macht dich glücklich?',
          'Mit Meditation, Yoga, Atemübungen, leckerem Essen und Journaling-Fragen bieten wir dir dafür einen schönen Moment. Vielleicht kannst du einige Dinge in deinen Alltag integrieren und die Liebe zu dir selbst wiederfinden.',
        ] },
        { t: 'list', h: 'Programm', items: [
          '11.00 Uhr: Willkommenskreis',
          '11.30 – 13.00 Uhr: Meditation, Yoga und Atemübungen',
          '13.15 – 14.00 Uhr: Mittagessen',
          'Nach dem Mittagessen: praktische Beispiele, um mehr Selbstliebe in den Alltag zu integrieren',
          '15.00 Uhr: Abschlusskreis mit Mantra-Singen',
        ] },
        { t: 'quotes', h: 'Was unsere Teilnehmenden sagen', items: [
          { q: 'Thank you Debora and Maria for organising the perfect day I didn\'t know I needed. Through meditation, yoga, a nourishing vegan lunch, breathing techniques and singing in a group, you lifted me away from the day to day distractions and turned the focus gently and lovingly inwards. After spending the day with the group, I cycled home magnetised and rejuvenated. Please never stop doing day events for people like me who aren\'t able to join on the longer trips.', name: 'Katie' },
          { q: 'Vielen herzlichen Dank für den tollen Tag. Ihr habt es wirklich super gut organisiert! Und das Essen war wieder der Hammer.', name: 'Lisa' },
          { q: 'Vielen Dank für das Yoga Retreat. Ich habe es sehr genossen. Um ehrlich zu sein, bin ich noch nie zu einem Retreat wie diesem gewesen. Die Gruppe, die Atmosphäre, das Mittagessen … wunderbar. Ihr habt davon gesprochen, sich selbst zu lieben. Das habe ich seit vielen Jahren nicht getan. Aber gestern habe ich zum ersten Mal so viel Ruhe in mir gespürt, dass ich weiter an mir arbeiten möchte. Ich bin sehr froh, dass ich teilgenommen habe. Und die zwei Lieder, die wir gesungen haben, sind wunderschön. Seit gestern singe ich.', name: 'Claudia' },
        ] },
        { t: 'people', h: 'Über uns', items: [
          { img: 'maria-yogalehrerin.jpg', name: 'Maria', role: 'Yoga & Meditation', p: MARIA_DE, link: { label: 'uyuniyoga.ch', href: 'https://uyuniyoga.ch' } },
          { img: 'debora-doehrbeck-portrait.jpg', name: 'Debora', role: 'Küche & Beratung', p: DEBORA_DE },
        ] },
      ],
      cta: 'Anmeldung per E-Mail', ctaNote: 'Schreib mir für die Anmeldung oder offene Fragen.',
    },
    mealprep: {
      eyebrow: 'Onlinekurs', title: 'Meal Prep Masterclass', sub: 'Online · CHF 98',
      banner: 'meal-prep-vegan.jpg', bannerPos: '50% 55%',
      blocks: [
        { t: 'prose', p: [
          'Meistere die Kunst des Meal Preppings: Spare Zeit und Geld und ernähre dich ausgewogener. Erfahre mehr über die richtige Lagerung von Lebensmitteln, wie man einen Meal Plan zusammenstellt, neue Rezepte und Ideen für schnelle Snacks.',
        ] },
        { t: 'list', h: 'Rahmen', items: ['Ort: Online', 'Dauer: 90 Minuten', 'Kosten: CHF 98', 'Anmeldung: per E-Mail'] },
        { t: 'prose', h: 'Für wen ist der Kurs?', p: [
          'Bist du es leid, jeden Tag stundenlang in der Küche zu stehen und keine Zeit zu finden, nahrhafte und leckere Mahlzeiten zuzubereiten? Möchtest du Geld sparen, indem du Lebensmittelabfälle reduzierst und den Kauf von Fertiggerichten minimierst?',
          'Die Masterclass gibt dir das Wissen und die Rezepte, um deine Essensvorbereitung umzustellen. Wir gehen den Geheimnissen der richtigen Lagerung nach, damit deine Mahlzeiten die ganze Woche frisch und aromatisch bleiben.',
          'Du lernst den richtigen Einsatz von Ölen und Gartechniken kennen, die Geschmack und gesundheitlichen Nutzen deiner Gerichte verbessern. Dazu kommt eine Sammlung praktischer, sättigender Rezepte: von Hauptgerichten über Beilagen bis zu Süssem.',
          'Und weil es im Alltag oft schnell gehen muss, bekommst du ausserdem eine Sammlung von Snack-Ideen, die dich durch den Tag tragen.',
        ] },
        { t: 'people', h: 'Deine Kursleiterin', items: [
          { img: 'debora-doehrbeck-portrait.jpg', name: 'Debora', role: 'Psychologin & Ernährungsberaterin', p: [
            'Meine Leidenschaft fürs Kochen und Essen hat bereits als Kind angefangen. Nach meinem Psychologiestudium ging ich auf eine mehrjährige Reise, um herauszufinden, wie man die mentale und physische Gesundheit sonst noch positiv beeinflussen kann. Dabei weckten besonders die Ernährung und das Meditieren meine Aufmerksamkeit.',
            'Neben meiner Weiterbildung als ganzheitliche Ernährungs- und Gesundheitsberaterin integriere ich auch Prinzipien des Ayurveda und lege einen Fokus auf die Darmgesundheit. Ich liebe es, Menschen dabei zu unterstützen, gesünder, abwechslungsreicher und genussvoller zu essen.',
          ] },
        ] },
      ],
      cta: 'Anmeldung per E-Mail', ctaNote: 'Schreib mir für die Anmeldung oder offene Fragen.',
    },
    srilankacurry: {
      eyebrow: 'Shop', title: 'Sri Lanka Curry', sub: 'Monatlich frisch gemahlen',
      banner: 'sri-lanka-curry-shop.png', bannerPos: '50% 60%',
      blocks: [
        { t: 'prose', p: [
          'Lass dich inspirieren und verfeinere deine Gerichte mit unseren hochwertigen Gewürzen.',
          'Wir mahlen die Gewürze mit minimaler Hitzeentwicklung. So bleiben Geschmack und Nährstoffe vollständig erhalten.',
          'Um die Frische und Intensität zu garantieren, mahlen wir alle bestellten Gewürze zu Beginn des Monats frisch und verschicken sie am darauffolgenden Montag.',
          'Bestelle jeweils bis zum 20. jedes Monats und bring deine Gerichte auf ein neues Niveau.',
        ] },
        { t: 'split', h: 'Wofür kannst du dieses Curry verwenden?', img: 'rezept-linsencurry-kochbuch.png', side: 'right', fit: 'contain', list: [
          'Gebackene Kartoffeln oder Gemüse: Olivenöl, Salz, Curry, 20 Minuten bei 200 °C backen',
          'Linsen-Kokosnuss-Curry',
          'Tofu Butter Makhani',
          'Chana Masala',
          'Dal Makhani',
        ] },
        { t: 'cards', items: [
          { img: 'sri-lanka-curry-glas.jpeg', title: 'Sri Lanka Curry im Glas', price: '7.90 CHF (46 g, 13 Portionen)', href: 'https://payhip.com/b/LMTIk' },
          { img: 'sri-lanka-curry-nachfuellpackung.jpeg', title: 'Sri Lanka Curry in Nachfüllpackung', price: '3.20 CHF (22 g, 6 Portionen)', href: 'https://payhip.com/b/vaCgY' },
        ] },
      ],
      cta: 'Im Shop bestellen', ctaHref: 'https://payhip.com/b/LMTIk', ctaNote: 'Aktuell nur innerhalb der Schweiz. Abholung in Rifferswil ist möglich.',
    },
    presse: {
      eyebrow: 'Presse', title: 'Presse', sub: 'Interviews und Zeitungsberichte',
      banner: 'referenzen-veganes-catering.jpg', bannerPos: '50% 50%',
      blocks: [
        { t: 'prose', p: ['Beiträge über Food by Debora, Ernährung, Darmgesundheit und Ayurveda.'] },
        { t: 'links', items: [
          { label: 'Interview mit Humasana über Ernährung, Darmgesundheit und Ayurveda', href: 'https://daswesentliche.humasana.com/2022/12/14/debora-dohrbeck-ernahrung-fur-gesunden-darm/', meta: 'Humasana · Dezember 2022' },
        ] },
        { t: 'clips', items: [
          { img: 'presse-bieler-tagblatt.jpg', label: 'Bieler Tagblatt · Dezember 2021' },
          { img: 'presse-zuger-zeitung.jpg', label: 'Zuger Zeitung · Dezember 2020' },
        ] },
      ],
    },
  },
  en: {
    yogaretreat: {
      eyebrow: 'Retreat', title: 'Yoga Retreat in Spain', sub: 'Near Málaga · Thu 12 – Tue 17 September',
      banner: 'villa-spanien-yogaraum.jpg', bannerPos: '50% 60%',
      blocks: [
        { t: 'prose', h: 'Explore the art of self-love & self-care', p: [
          'Enjoy the sound of water, the rustling of the wind, the warmth of the sun on your face and time for yourself to come back to your centre.',
          'This retreat puts self-love and self-care at the centre. Why these themes? Sometimes it is not easy to make the right decisions for yourself or to take proper care of yourself. Stress and other outside influences can lead us to choose differently from what actually does us good.',
          'This retreat is about turning inwards and feeling. Notice yourself and rediscover what is good for you. What do you need? What do you want, and what matters to you? From our own experience we know how much clarity and change a few days away from everyday life can create.',
          'Let yourself be spoiled culinarily through all your senses. For this retreat we chose a beautifully renovated mill with the Rio Guaro river running through it. An oasis of calm with a luxurious atmosphere.',
          'We look forward to accompanying you on your journey. — Maria & Debora',
        ] },
        { t: 'gallery', imgs: ['villa-spanien-patio.jpeg', 'villa-spanien-pool-garten.jpeg', 'villa-spanien-zimmer.jpeg', 'villa-spanien-badezimmer.jpeg', 'villa-spanien-wohnzimmer.jpeg', 'villa-spanien-esszimmer.jpeg', 'villa-spanien-terrasse-essen.jpg', 'villa-spanien-yogapatio.jpeg', 'villa-spanien-bei-nacht.jpeg'], alts: ['Villa patio with shaded seating', 'Pool with loungers and a view over the olive groves', 'Bedroom with clay walls and an arched window', 'Bathroom with rain shower and warm light', 'Living room with wooden beams and floor cushions', 'Dining room with a long wooden table and candles', 'Table set on the terrace with a mountain view', 'Outdoor yoga platform with mats', 'The villa at night with the lit courtyard'] },
        { t: 'split', h: 'Programme & included', img: 'villa-spanien-yogapatio.jpeg', side: 'right', list: [
          'Transfer from and to Málaga airport',
          '5 nights in lovingly designed rooms with private bathroom',
          'Yoga and meditation twice a day led by Maria (all levels welcome)',
          'Yoga equipment provided: mats, bolsters, blocks, blankets, meditation cushions',
          'Healthy, delicious vegetarian meals adapted to your nutritional needs: brunch, dinner, snacks, coffee and tea',
          'Cooking class led by Debora',
          '1:1 consultation with Debora',
          'Breath workshop and time for yourself',
          'Small group size, maximum 13 people',
        ], p: ['Not included: flight or train to Málaga, and travel or cancellation insurance.'] },
        { t: 'split', h: 'Investment', img: 'villa-spanien-zimmer.jpeg', side: 'left', list: [
          'Four-bed room with private bathroom: CHF 1\'390 per person',
          'Double room with private bathroom: CHF 1\'540 per person',
          'Single room with private bathroom: CHF 1\'890 per person',
        ], p: [
          'Early bird: book early and receive 10 % off.',
          'You can arrive a day before the retreat starts and enjoy the villa. Surcharge CHF 100.',
          'To secure your booking: 50 % deposit, the rest at the latest one week before the retreat.',
          'Cancellation: 2 months in advance 50 % refundable, 1 month in advance non-refundable.',
        ] },
        { t: 'split', h: 'Accommodation', img: 'villa-spanien-pool.jpg', side: 'right', p: ['The accommodation is in southern Spain, Andalusia, an hour by car from Málaga airport, near the village of Periana. The old mill was completely renovated and furnished with great taste.'] },
        { t: 'people', h: 'Who is with you', items: [
          { img: 'maria-yogalehrerin.jpg', name: 'Maria', role: 'Yoga & meditation', p: MARIA_EN, link: { label: 'uyuniyoga.ch', href: 'https://uyuniyoga.ch' } },
          { img: 'debora-doehrbeck-portrait.jpg', name: 'Debora', role: 'Kitchen & counselling', p: DEBORA_EN },
        ] },
      ],
      cta: 'Book by e-mail', ctaNote: 'Write to me to book or ask anything.',
    },
    coupleretreat: {
      eyebrow: 'Retreat', title: 'Couple Weekend in Rifferswil', sub: 'Maximum three couples · All meals included',
      banner: 'paar-retreat-tanzen.jpeg', bannerPos: '50% 40%',
      blocks: [
        { t: 'prose', h: 'A weekend that brings you closer as a couple', p: [
          'With concrete tools for more connection in everyday life.',
          'I grew up with parents who not only love each other deeply but also show that love openly. They told us about their difficulties, their conversations, the couple seminars they attended and the books they read to grow together. That is why our home was a place where every question was welcome.',
          'I think that is why intimate relationships fascinated me so early on. That truthful, evolving, tender love that asks for presence and courage.',
          'During my master\'s studies I attended a seminar called "Psychology and Business". Our final task was to write a business plan combining the two. Without hesitating I chose preventive couple seminars. The lecturer told me it was a silly business idea, that nobody would ever attend. He was older, more experienced, so I doubted myself and dropped the thought. But deep in my heart I never stopped believing he was wrong.',
          'After organising more than fifteen retreats, cooking for people, holding a protected space and observing group dynamics, the same idea came back, stronger than ever.',
          'What fascinates me most at my retreats are the moments when couples cook together. How they communicate. How they tease each other. How small habits, tendernesses and tensions surface between chopping vegetables and stirring the pot.',
          'There is a particular power and intimacy in having a safe space where couples can grow, find each other again and rediscover one another. Not because something is broken, but because they value love and understand that conscious attention keeps it alive.',
          'We look forward to holding the space and spoiling you culinarily. — Jan & Debora',
        ] },
        { t: 'split', h: 'Programme', img: 'paar-retreat-tanzen.jpeg', side: 'right', list: [
          'Dreaming together: where is your shared journey going?',
          'Creative cooperation: teamwork in everyday life',
          'Rediscovering mindful touch, beyond routine and expectation',
          'Training and stretching differently: leading and surrendering',
          'Three techniques for arguing better: language that strengthens your relationship',
        ], p: ['The programme is flexible and adapts to the current needs of the participants.'] },
        { t: 'split', h: 'Investment, when & where', img: 'veganer-brunch-zuerich.jpg', side: 'left', p: [
          'Investment: CHF 580 per person. All meals and drinks are included and we enjoy them together. No alcohol is served during the weekend, except kombucha.',
          'Early bird: book early and receive 10 % off.',
          'Language: as we have had enquiries from German- and English-speaking couples, we plan to offer one weekend in German and another in English.',
          'We rent the yoga room in our village and keep the experience deliberately intimate: maximum three couples.',
          'To secure your booking: 50 % deposit. The remainder is due at the latest two weeks before the weekend. Cancellation: up to 2 months in advance 50 % is refunded, up to 1 month in advance there is no refund.',
        ] },
        { t: 'split', h: 'Accommodation', img: 'gasthaus-im-poestli-rifferswil.png', side: 'right', p: [
          'The first couple to book can stay in our beautiful guest room with its own bathroom.',
          'The other two couples can book a room at the cosy Boutique Gasthaus im Pöstli from CHF 140 per night, only a 7-minute walk away, or stay at home if they live nearby.',
          'Each couple is responsible for organising their own accommodation.',
        ], link: { label: 'Boutique Gasthaus im Pöstli', href: 'https://www.poestli-rifferswil.ch/rooms' } },
      ],
      cta: 'Book by e-mail', ctaNote: 'Write to us to book or ask anything.',
    },
    tagesretreat: {
      eyebrow: 'Retreat', title: 'Day Retreat in Zug', sub: 'One day, one moment just for you',
      banner: 'tages-retreat-zug.png', bannerPos: '50% 50%',
      blocks: [
        { t: 'prose', p: [
          'One day, one moment especially for you and only for you. Why? Because you are worth taking time for yourself.',
          'Sometimes we lose ourselves in the rush of everyday life. A demanding job, an active social life, other obligations, perhaps family life. All factors in which we can lose ourselves. Sometimes it does us good to take a moment to consciously pause and feel what we need. Simply notice your body. What do you feel, what do you notice?',
          'Perhaps you take some time to think about what you would like to spend more or less time on. In other words: what exactly makes you happy?',
          'With meditation, yoga, breathing exercises, delicious food and journaling questions we offer you a beautiful moment for exactly that. Perhaps you can integrate some of it into your everyday life and rediscover the love for yourself.',
        ] },
        { t: 'list', h: 'Programme', items: [
          '11.00: welcome circle',
          '11.30 – 13.00: meditation, yoga and breathing exercises',
          '13.15 – 14.00: lunch',
          'After lunch: practical examples for bringing more self-love into everyday life',
          '15.00: closing circle with mantra singing',
        ] },
        { t: 'quotes', h: 'What our participants say', items: [
          { q: 'Thank you Debora and Maria for organising the perfect day I didn\'t know I needed. Through meditation, yoga, a nourishing vegan lunch, breathing techniques and singing in a group, you lifted me away from the day to day distractions and turned the focus gently and lovingly inwards. After spending the day with the group, I cycled home magnetised and rejuvenated. Please never stop doing day events for people like me who aren\'t able to join on the longer trips.', name: 'Katie' },
          { q: 'Thank you so much for the wonderful day. You organised it really well! And the food was fantastic again.', name: 'Lisa' },
          { q: 'Thank you for the yoga retreat. I enjoyed it very much. To be honest, I have never been to a retreat like this before. The group, the atmosphere, the lunch … wonderful. You spoke about loving yourself. I had not done that for many years. But yesterday, for the first time, I felt so much calm inside me that I want to keep working on myself. I am very glad I took part. And the two songs we sang are beautiful. I have been singing since yesterday.', name: 'Claudia' },
        ] },
        { t: 'people', h: 'About us', items: [
          { img: 'maria-yogalehrerin.jpg', name: 'Maria', role: 'Yoga & meditation', p: MARIA_EN, link: { label: 'uyuniyoga.ch', href: 'https://uyuniyoga.ch' } },
          { img: 'debora-doehrbeck-portrait.jpg', name: 'Debora', role: 'Kitchen & counselling', p: DEBORA_EN },
        ] },
      ],
      cta: 'Sign up by e-mail', ctaNote: 'Write to me to sign up or ask anything.',
    },
    mealprep: {
      eyebrow: 'Online course', title: 'Meal Prep Masterclass', sub: 'Online · CHF 98',
      banner: 'meal-prep-vegan.jpg', bannerPos: '50% 55%',
      blocks: [
        { t: 'prose', p: [
          'Master the art of meal prepping: save time and money and eat more balanced. Learn about proper food storage, how to put together a meal plan, new recipes and ideas for quick snacks.',
        ] },
        { t: 'list', h: 'The essentials', items: ['Place: online', 'Duration: 90 minutes', 'Cost: CHF 98', 'Sign up: by e-mail'] },
        { t: 'prose', h: 'Who is it for?', p: [
          'Are you tired of standing in the kitchen for hours every day and never finding time to prepare nourishing, delicious meals? Would you like to save money by reducing food waste and buying fewer ready meals?',
          'This masterclass equips you with the knowledge and recipes to revolutionise your meal preparation. We go into the secrets of proper food storage, so your meals stay fresh and flavourful throughout the week.',
          'You will discover the correct use of oils and cooking techniques that improve both the taste and the health benefits of your dishes. On top of that comes a collection of practical, satisfying recipes: from main courses to sides and sweets.',
          'And because everyday life often needs to be quick, you also get a collection of snack ideas that carry you through the day.',
        ] },
        { t: 'people', h: 'Your course leader', items: [
          { img: 'debora-doehrbeck-portrait.jpg', name: 'Debora', role: 'Psychologist & nutritionist', p: [
            'My passion for cooking and food already started when I was a child. After my master\'s in psychology I went on a multi-year journey to find out how else I could positively influence mental and physical health. Nutrition and meditation in particular caught my attention.',
            'In addition to my further education as a holistic nutrition and health consultant, I integrate principles of Ayurveda and focus on gut health. I love helping people to eat healthier, more varied and more enjoyably.',
          ] },
        ] },
      ],
      cta: 'Sign up by e-mail', ctaNote: 'Write to me to sign up or ask anything.',
    },
    srilankacurry: {
      eyebrow: 'Shop', title: 'Sri Lanka Curry', sub: 'Freshly ground monthly',
      banner: 'sri-lanka-curry-shop.png', bannerPos: '50% 60%',
      blocks: [
        { t: 'prose', p: [
          'Be inspired and refine your dishes with our high-quality spices.',
          'We grind the spices with minimal heat development. This ensures that the flavour and nutrients are fully preserved.',
          'To guarantee freshness and intensity, we grind all the spices ordered fresh at the beginning of the month and send them the following Monday.',
          'Order by the 20th of each month and take your dishes to a new level.',
        ] },
        { t: 'split', h: 'What can you use this curry for?', img: 'rezept-linsencurry-kochbuch.png', side: 'right', fit: 'contain', list: [
          'Baked potatoes or vegetables: olive oil, salt, curry, bake for 20 minutes at 200 °C',
          'Lentil coconut curry',
          'Tofu butter makhani',
          'Chana masala',
          'Dal makhani',
        ] },
        { t: 'cards', items: [
          { img: 'sri-lanka-curry-glas.jpeg', title: 'Sri Lanka Curry in a jar', price: '7.90 CHF (46 g, 13 servings)', href: 'https://payhip.com/b/LMTIk' },
          { img: 'sri-lanka-curry-nachfuellpackung.jpeg', title: 'Sri Lanka Curry in refill pack', price: '3.20 CHF (22 g, 6 servings)', href: 'https://payhip.com/b/vaCgY' },
        ] },
      ],
      cta: 'Order in the shop', ctaHref: 'https://payhip.com/b/LMTIk', ctaNote: 'Currently only available within Switzerland. Collection in Rifferswil is possible.',
    },
    presse: {
      eyebrow: 'Press', title: 'Press', sub: 'Interviews and newspaper features',
      banner: 'referenzen-veganes-catering.jpg', bannerPos: '50% 50%',
      blocks: [
        { t: 'prose', p: ['Features about Food by Debora, nutrition, gut health and Ayurveda.'] },
        { t: 'links', items: [
          { label: 'Interview with Humasana about nutrition, gut health and Ayurveda', href: 'https://daswesentliche.humasana.com/2022/12/14/debora-dohrbeck-ernahrung-fur-gesunden-darm/', meta: 'Humasana · December 2022' },
        ] },
        { t: 'clips', items: [
          { img: 'presse-bieler-tagblatt.jpg', label: 'Bieler Tagblatt · December 2021' },
          { img: 'presse-zuger-zeitung.jpg', label: 'Zuger Zeitung · December 2020' },
        ] },
      ],
    },
  },
};
