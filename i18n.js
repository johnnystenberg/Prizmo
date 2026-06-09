/* Prisio · i18n + language switcher
   Default language is English. On first visit we detect the browser language
   (sv / de / fr → that language, anything else → en). The choice is saved and
   can be changed from the header switcher or the footer links. Strings are easy
   to edit below — one object per language. */
(function () {
  "use strict";

  var SUPPORTED = ["en", "sv", "de", "fr"];

  var dict = {
    en: {
      "nav.download": "Download",
      "badge.small": "Download on the",
      "hero.eyebrow": "Travel price scanner · iPhone",
      "hero.h1": 'See what it <span class="em">really</span> costs.',
      "hero.sub": "Point your camera at any foreign price tag. Prisio shows it in your money — with the local sales tax that isn't on the shelf.",
      "trust.ondevice": "100% on-device",
      "trust.onetime": "One-time purchase",
      "trust.noaccount": "No account",
      "rc.loc": "San Francisco · just now",
      "rc.shelf": "Shelf price",
      "rc.tax": "+ Tax 8.625%",
      "rc.incl": "Incl. tax",
      "how.eyebrow": "How it works",
      "how.h2": "Three taps from shelf to honest total.",
      "how.s1t": "Scan the price tag",
      "how.s1d": "Aim your camera at the number on the shelf. No typing.",
      "how.s2t": "We add local tax & convert",
      "how.s2d": "Prisio applies the state or province sales tax, then your exchange rate.",
      "how.s3t": "See the real price in your money",
      "how.s3d": "One clear total — what you'll actually pay at the register.",
      "feat.eyebrow": "Why Prisio",
      "feat.h2": "Built for honest prices and zero surprises.",
      "feat.p": "Everything that matters when you're shopping somewhere new — and nothing you didn't ask for.",
      "feat.c1t": "The real price",
      "feat.c1d": "Converted to your currency, with hidden sales tax added.",
      "feat.c2t": "Private & on-device",
      "feat.c2d": "Nothing leaves your phone. No account, no tracking.",
      "feat.c3t": "No subscription",
      "feat.c3d": "One-time purchase for Pro. Buy it once, keep it.",
      "feat.c4t": "Works offline",
      "feat.c4d": "Pro keeps the latest rates cached — scan with no signal.",
      "feat.c5t": "195 countries",
      "feat.c5d": "Live exchange rates wherever your trip takes you.",
      "feat.c6t": "US & CA sales tax",
      "feat.c6d": "State and province rates, added so the total is real.",
      "feat.c7t": "Scan history",
      "feat.c7d": "Pro saves every scan so you can compare as you go.",
      "feat.c8t": "Multi-language",
      "feat.c8d": "Use Prisio in your language — English, Svenska, Deutsch, Français.",
      "brk.eyebrow": "The breakdown",
      "brk.h2": "Every number, nothing hidden.",
      "brk.p": "An example: that $79.99 US price tag isn't what you pay. Prisio shows the math the shelf leaves out — tax in, then converted to your money.",
      "brk.note": "Approximate — local fees may apply. Rates and tax are estimates to help you decide, not a receipt.",
      "brk.shelf": "Shelf price",
      "brk.shelfm": "What the tag says",
      "brk.tax": "San Francisco tax",
      "brk.taxm": "8.625% — not printed on the shelf",
      "brk.instore": "In-store price",
      "brk.instorem": "What you actually pay",
      "brk.rate": "Exchange rate · today",
      "brk.total": "You pay about",
      "brk.incl": "Incl. local tax",
      "plans.eyebrow": "Free & Pro",
      "plans.h2": "Start free. Go Pro once.",
      "plans.p": "Conversion and tax are free for everyone. Pro removes the limit and works offline — a single one-time purchase.",
      "plans.free": "Free",
      "plans.freesub": "Always",
      "plans.pro": "Pro",
      "plans.prosub": "$12.99 · one-time",
      "plans.scans": "Scans",
      "plans.scansfree": "10 / month",
      "plans.scanspro": "Unlimited",
      "plans.conv": "Currency conversion",
      "plans.tax": "Local sales tax",
      "plans.offline": "Offline cached rates",
      "plans.history": "Scan history",
      "plans.cta": "Get Prisio",
      "plans.note": 'Pro is a one-time <b>$12.99</b>. No subscription, ever.',
      "plans.region": "Shown for your region. The App Store always displays your exact local price before you buy.",
      "priv.eyebrow": "Private by design",
      "priv.h2": "Your trip is nobody else's business.",
      "priv.i1t": "Everything runs on-device",
      "priv.i1d": "Scanning, tax and conversion all happen on your iPhone.",
      "priv.i2t": "No account, no sign-up",
      "priv.i2d": "Open the app and scan. There's nothing to log into.",
      "priv.i3t": "No tracking, no analytics",
      "priv.i3d": "We don't collect, sell, or share anything about you.",
      "priv.cardbig": 'Nothing <span class="accent">leaves</span> your phone.',
      "priv.cardp": "No servers. No cookies. No data brokers. Prisio works because your iPhone is fast enough to do the math itself — so the only place your scans live is with you.",
      "priv.cardlink": "Read the privacy policy",
      "final.eyebrow": "Ready when you are",
      "final.h2": "Travel knowing the real price.",
      "final.p": "Download Prisio, point your camera, and never guess at a foreign price tag again.",
      "final.note": "Free to start · Pro is a one-time $12.99",
      "foot.support": "Support",
      "foot.privacy": "Privacy",
      "foot.contact": "Contact",
      "foot.lang": "Language",
      "foot.madefor": "Made for travelers"
    },

    sv: {
      "nav.download": "Ladda ner",
      "badge.small": "Ladda ner från",
      "hero.eyebrow": "Reseprisskanner · iPhone",
      "hero.h1": 'Se vad det <span class="em">verkligen</span> kostar.',
      "hero.sub": "Rikta kameran mot vilken prislapp som helst utomlands. Prisio visar priset i dina pengar — med den lokala momsen som inte står på hyllan.",
      "trust.ondevice": "100 % på enheten",
      "trust.onetime": "Engångsköp",
      "trust.noaccount": "Inget konto",
      "rc.loc": "San Francisco · nyss",
      "rc.shelf": "Hyllpris",
      "rc.tax": "+ Skatt 8,625 %",
      "rc.incl": "Inkl. skatt",
      "how.eyebrow": "Så fungerar det",
      "how.h2": "Tre tryck från hylla till ärlig slutsumma.",
      "how.s1t": "Skanna prislappen",
      "how.s1d": "Rikta kameran mot siffran på hyllan. Ingen inmatning.",
      "how.s2t": "Vi lägger på lokal skatt & växlar",
      "how.s2d": "Prisio lägger på delstatens eller provinsens moms och tillämpar sedan din växelkurs.",
      "how.s3t": "Se det verkliga priset i dina pengar",
      "how.s3d": "En tydlig slutsumma — vad du faktiskt betalar i kassan.",
      "feat.eyebrow": "Varför Prisio",
      "feat.h2": "Byggd för ärliga priser och noll överraskningar.",
      "feat.p": "Allt som spelar roll när du handlar på ett nytt ställe — och inget du inte bad om.",
      "feat.c1t": "Det verkliga priset",
      "feat.c1d": "Omräknat till din valuta, med dold moms inräknad.",
      "feat.c2t": "Privat & på enheten",
      "feat.c2d": "Inget lämnar din telefon. Inget konto, ingen spårning.",
      "feat.c3t": "Ingen prenumeration",
      "feat.c3d": "Engångsköp för Pro. Köp en gång, behåll den.",
      "feat.c4t": "Fungerar offline",
      "feat.c4d": "Pro cachar de senaste kurserna — skanna utan täckning.",
      "feat.c5t": "195 länder",
      "feat.c5d": "Live-växelkurser vart resan än tar dig.",
      "feat.c6t": "Moms i USA & Kanada",
      "feat.c6d": "Delstats- och provinssatser läggs på så att summan blir verklig.",
      "feat.c7t": "Skanningshistorik",
      "feat.c7d": "Pro sparar varje skanning så att du kan jämföra under resan.",
      "feat.c8t": "Flera språk",
      "feat.c8d": "Använd Prisio på ditt språk — English, Svenska, Deutsch, Français.",
      "brk.eyebrow": "Uträkningen",
      "brk.h2": "Varje siffra, inget dolt.",
      "brk.p": "Ett exempel: prislappen på 79,99 US$ är inte vad du betalar. Prisio visar uträkningen som hyllan utelämnar — moms in, sedan omräknat till dina pengar.",
      "brk.note": "Ungefärligt — lokala avgifter kan tillkomma. Kurser och skatt är uppskattningar som hjälper dig att besluta, inte ett kvitto.",
      "brk.shelf": "Hyllpris",
      "brk.shelfm": "Vad lappen säger",
      "brk.tax": "San Francisco-skatt",
      "brk.taxm": "8,625 % — står inte på hyllan",
      "brk.instore": "Pris i butiken",
      "brk.instorem": "Vad du faktiskt betalar",
      "brk.rate": "Växelkurs · idag",
      "brk.total": "Du betalar ungefär",
      "brk.incl": "Inkl. lokal skatt",
      "plans.eyebrow": "Gratis & Pro",
      "plans.h2": "Börja gratis. Bli Pro en gång.",
      "plans.p": "Omräkning och skatt är gratis för alla. Pro tar bort gränsen och fungerar offline — ett enda engångsköp.",
      "plans.free": "Gratis",
      "plans.freesub": "Alltid",
      "plans.pro": "Pro",
      "plans.prosub": "129 kr · engångsköp",
      "plans.scans": "Skanningar",
      "plans.scansfree": "10 / månad",
      "plans.scanspro": "Obegränsat",
      "plans.conv": "Valutaomräkning",
      "plans.tax": "Lokal moms",
      "plans.offline": "Cachade kurser offline",
      "plans.history": "Skanningshistorik",
      "plans.cta": "Skaffa Prisio",
      "plans.note": 'Pro är ett engångsköp på <b>129 kr</b>. Aldrig någon prenumeration.',
      "plans.region": "Visas för din region. App Store visar alltid ditt exakta lokala pris innan du köper.",
      "priv.eyebrow": "Privat från grunden",
      "priv.h2": "Din resa angår ingen annan.",
      "priv.i1t": "Allt körs på enheten",
      "priv.i1d": "Skanning, skatt och omräkning sker på din iPhone.",
      "priv.i2t": "Inget konto, ingen registrering",
      "priv.i2d": "Öppna appen och skanna. Det finns inget att logga in på.",
      "priv.i3t": "Ingen spårning, ingen analys",
      "priv.i3d": "Vi samlar inte in, säljer eller delar något om dig.",
      "priv.cardbig": 'Inget <span class="accent">lämnar</span> din telefon.',
      "priv.cardp": "Inga servrar. Inga cookies. Inga datamäklare. Prisio fungerar för att din iPhone är snabb nog att göra uträkningen själv — så den enda plats dina skanningar finns är hos dig.",
      "priv.cardlink": "Läs integritetspolicyn",
      "final.eyebrow": "Redo när du är",
      "final.h2": "Res med koll på det verkliga priset.",
      "final.p": "Ladda ner Prisio, rikta kameran och gissa aldrig på en utländsk prislapp igen.",
      "final.note": "Gratis att börja · Pro är ett engångsköp på 129 kr",
      "foot.support": "Support",
      "foot.privacy": "Integritet",
      "foot.contact": "Kontakt",
      "foot.lang": "Språk",
      "foot.madefor": "Gjord för resenärer"
    },

    de: {
      "nav.download": "Laden",
      "badge.small": "Laden im",
      "hero.eyebrow": "Reise-Preisscanner · iPhone",
      "hero.h1": 'Sieh, was es <span class="em">wirklich</span> kostet.',
      "hero.sub": "Richte die Kamera auf ein beliebiges Preisschild im Ausland. Prisio zeigt den Preis in deinem Geld — inklusive der lokalen Steuer, die nicht im Regal steht.",
      "trust.ondevice": "100 % auf dem Gerät",
      "trust.onetime": "Einmalkauf",
      "trust.noaccount": "Kein Konto",
      "rc.loc": "San Francisco · gerade eben",
      "rc.shelf": "Regalpreis",
      "rc.tax": "+ Steuer 8,625 %",
      "rc.incl": "inkl. Steuer",
      "how.eyebrow": "So funktioniert's",
      "how.h2": "Drei Tipps vom Regal zur ehrlichen Summe.",
      "how.s1t": "Preisschild scannen",
      "how.s1d": "Richte die Kamera auf die Zahl am Regal. Kein Tippen.",
      "how.s2t": "Wir rechnen Steuer & Wechselkurs ein",
      "how.s2d": "Prisio addiert die Steuer des Bundesstaats oder der Provinz und wendet dann deinen Wechselkurs an.",
      "how.s3t": "Sieh den echten Preis in deinem Geld",
      "how.s3d": "Eine klare Summe — was du an der Kasse tatsächlich zahlst.",
      "feat.eyebrow": "Warum Prisio",
      "feat.h2": "Gemacht für ehrliche Preise und null Überraschungen.",
      "feat.p": "Alles, was zählt, wenn du an einem neuen Ort einkaufst — und nichts, worum du nicht gebeten hast.",
      "feat.c1t": "Der echte Preis",
      "feat.c1d": "Umgerechnet in deine Währung, mit versteckter Steuer.",
      "feat.c2t": "Privat & auf dem Gerät",
      "feat.c2d": "Nichts verlässt dein Telefon. Kein Konto, kein Tracking.",
      "feat.c3t": "Kein Abo",
      "feat.c3d": "Einmalkauf für Pro. Einmal kaufen, behalten.",
      "feat.c4t": "Funktioniert offline",
      "feat.c4d": "Pro speichert die neuesten Kurse — scanne ohne Empfang.",
      "feat.c5t": "195 Länder",
      "feat.c5d": "Live-Wechselkurse, wohin die Reise auch geht.",
      "feat.c6t": "Steuer in USA & Kanada",
      "feat.c6d": "Bundesstaat- und Provinzsätze, damit die Summe stimmt.",
      "feat.c7t": "Scan-Verlauf",
      "feat.c7d": "Pro speichert jeden Scan, damit du unterwegs vergleichen kannst.",
      "feat.c8t": "Mehrsprachig",
      "feat.c8d": "Nutze Prisio in deiner Sprache — English, Svenska, Deutsch, Français.",
      "brk.eyebrow": "Die Aufschlüsselung",
      "brk.h2": "Jede Zahl, nichts versteckt.",
      "brk.p": "Ein Beispiel: Das Preisschild mit 79,99 US$ ist nicht, was du zahlst. Prisio zeigt die Rechnung, die das Regal auslässt — Steuer rein, dann in dein Geld umgerechnet.",
      "brk.note": "Ungefähr — lokale Gebühren können anfallen. Kurse und Steuer sind Schätzungen zur Entscheidungshilfe, kein Beleg.",
      "brk.shelf": "Regalpreis",
      "brk.shelfm": "Was das Schild sagt",
      "brk.tax": "San-Francisco-Steuer",
      "brk.taxm": "8,625 % — nicht am Regal angegeben",
      "brk.instore": "Preis im Laden",
      "brk.instorem": "Was du tatsächlich zahlst",
      "brk.rate": "Wechselkurs · heute",
      "brk.total": "Du zahlst etwa",
      "brk.incl": "inkl. lokaler Steuer",
      "plans.eyebrow": "Gratis & Pro",
      "plans.h2": "Gratis starten. Einmal Pro werden.",
      "plans.p": "Umrechnung und Steuer sind für alle kostenlos. Pro hebt das Limit auf und funktioniert offline — ein einziger Einmalkauf.",
      "plans.free": "Gratis",
      "plans.freesub": "Immer",
      "plans.pro": "Pro",
      "plans.prosub": "11,99 € · einmalig",
      "plans.scans": "Scans",
      "plans.scansfree": "10 / Monat",
      "plans.scanspro": "Unbegrenzt",
      "plans.conv": "Währungsumrechnung",
      "plans.tax": "Lokale Steuer",
      "plans.offline": "Offline-Kurse",
      "plans.history": "Scan-Verlauf",
      "plans.cta": "Prisio holen",
      "plans.note": 'Pro ist ein einmaliger Kauf für <b>11,99 €</b>. Niemals ein Abo.',
      "plans.region": "Für deine Region angezeigt. Der App Store zeigt vor dem Kauf immer deinen genauen lokalen Preis.",
      "priv.eyebrow": "Privat by Design",
      "priv.h2": "Deine Reise geht niemanden etwas an.",
      "priv.i1t": "Alles läuft auf dem Gerät",
      "priv.i1d": "Scannen, Steuer und Umrechnung passieren auf deinem iPhone.",
      "priv.i2t": "Kein Konto, keine Anmeldung",
      "priv.i2d": "App öffnen und scannen. Es gibt nichts, wo man sich anmeldet.",
      "priv.i3t": "Kein Tracking, keine Analyse",
      "priv.i3d": "Wir sammeln, verkaufen oder teilen nichts über dich.",
      "priv.cardbig": 'Nichts <span class="accent">verlässt</span> dein Telefon.',
      "priv.cardp": "Keine Server. Keine Cookies. Keine Datenhändler. Prisio funktioniert, weil dein iPhone schnell genug ist, um selbst zu rechnen — der einzige Ort, an dem deine Scans liegen, bist du.",
      "priv.cardlink": "Datenschutzerklärung lesen",
      "final.eyebrow": "Bereit, wenn du es bist",
      "final.h2": "Reise mit dem echten Preis im Blick.",
      "final.p": "Lade Prisio, richte die Kamera aus und rate nie wieder bei einem ausländischen Preisschild.",
      "final.note": "Gratis starten · Pro ist ein Einmalkauf für 11,99 €",
      "foot.support": "Support",
      "foot.privacy": "Datenschutz",
      "foot.contact": "Kontakt",
      "foot.lang": "Sprache",
      "foot.madefor": "Für Reisende gemacht"
    },

    fr: {
      "nav.download": "Télécharger",
      "badge.small": "Télécharger dans l'",
      "hero.eyebrow": "Scanner de prix de voyage · iPhone",
      "hero.h1": 'Voyez ce que ça coûte <span class="em">vraiment</span>.',
      "hero.sub": "Pointez l'appareil photo vers n'importe quelle étiquette à l'étranger. Prisio l'affiche dans votre monnaie — avec la taxe locale qui n'est pas indiquée en rayon.",
      "trust.ondevice": "100 % sur l'appareil",
      "trust.onetime": "Achat unique",
      "trust.noaccount": "Sans compte",
      "rc.loc": "San Francisco · à l'instant",
      "rc.shelf": "Prix en rayon",
      "rc.tax": "+ Taxe 8,625 %",
      "rc.incl": "Taxe incluse",
      "how.eyebrow": "Comment ça marche",
      "how.h2": "Trois gestes, du rayon au vrai total.",
      "how.s1t": "Scannez l'étiquette",
      "how.s1d": "Visez le chiffre en rayon avec l'appareil photo. Sans rien taper.",
      "how.s2t": "On ajoute la taxe locale & on convertit",
      "how.s2d": "Prisio applique la taxe de l'État ou de la province, puis votre taux de change.",
      "how.s3t": "Voyez le vrai prix dans votre monnaie",
      "how.s3d": "Un total clair — ce que vous paierez vraiment en caisse.",
      "feat.eyebrow": "Pourquoi Prisio",
      "feat.h2": "Conçu pour des prix honnêtes et zéro surprise.",
      "feat.p": "Tout ce qui compte quand vous faites des achats dans un nouvel endroit — et rien que vous n'ayez demandé.",
      "feat.c1t": "Le vrai prix",
      "feat.c1d": "Converti dans votre monnaie, taxe cachée comprise.",
      "feat.c2t": "Privé & sur l'appareil",
      "feat.c2d": "Rien ne quitte votre téléphone. Sans compte, sans suivi.",
      "feat.c3t": "Sans abonnement",
      "feat.c3d": "Achat unique pour Pro. Achetez une fois, gardez-le.",
      "feat.c4t": "Fonctionne hors ligne",
      "feat.c4d": "Pro garde les derniers taux en cache — scannez sans réseau.",
      "feat.c5t": "195 pays",
      "feat.c5d": "Des taux de change en direct où que vous alliez.",
      "feat.c6t": "Taxe USA & Canada",
      "feat.c6d": "Taux des États et provinces, ajoutés pour un total réel.",
      "feat.c7t": "Historique des scans",
      "feat.c7d": "Pro enregistre chaque scan pour comparer en chemin.",
      "feat.c8t": "Multilingue",
      "feat.c8d": "Utilisez Prisio dans votre langue — English, Svenska, Deutsch, Français.",
      "brk.eyebrow": "Le détail",
      "brk.h2": "Chaque chiffre, rien de caché.",
      "brk.p": "Un exemple : cette étiquette à 79,99 $US n'est pas ce que vous payez. Prisio montre le calcul que le rayon omet — taxe ajoutée, puis converti dans votre monnaie.",
      "brk.note": "Approximatif — des frais locaux peuvent s'appliquer. Les taux et la taxe sont des estimations pour vous aider à décider, pas un reçu.",
      "brk.shelf": "Prix en rayon",
      "brk.shelfm": "Ce que dit l'étiquette",
      "brk.tax": "Taxe de San Francisco",
      "brk.taxm": "8,625 % — non indiquée en rayon",
      "brk.instore": "Prix en magasin",
      "brk.instorem": "Ce que vous payez vraiment",
      "brk.rate": "Taux de change · aujourd'hui",
      "brk.total": "Vous payez environ",
      "brk.incl": "Taxe locale incluse",
      "plans.eyebrow": "Gratuit & Pro",
      "plans.h2": "Commencez gratuitement. Passez Pro une fois.",
      "plans.p": "La conversion et la taxe sont gratuites pour tous. Pro lève la limite et fonctionne hors ligne — un seul achat unique.",
      "plans.free": "Gratuit",
      "plans.freesub": "Toujours",
      "plans.pro": "Pro",
      "plans.prosub": "11,99 € · achat unique",
      "plans.scans": "Scans",
      "plans.scansfree": "10 / mois",
      "plans.scanspro": "Illimité",
      "plans.conv": "Conversion de devise",
      "plans.tax": "Taxe locale",
      "plans.offline": "Taux hors ligne",
      "plans.history": "Historique des scans",
      "plans.cta": "Obtenir Prisio",
      "plans.note": 'Pro est un achat unique de <b>11,99 €</b>. Jamais d\'abonnement.',
      "plans.region": "Affiché pour votre région. L'App Store indique toujours votre prix local exact avant l'achat.",
      "priv.eyebrow": "Privé par conception",
      "priv.h2": "Votre voyage ne regarde personne.",
      "priv.i1t": "Tout s'exécute sur l'appareil",
      "priv.i1d": "Le scan, la taxe et la conversion se font sur votre iPhone.",
      "priv.i2t": "Sans compte, sans inscription",
      "priv.i2d": "Ouvrez l'app et scannez. Il n'y a rien où se connecter.",
      "priv.i3t": "Sans suivi, sans analyse",
      "priv.i3d": "Nous ne collectons, ne vendons ni ne partageons rien sur vous.",
      "priv.cardbig": 'Rien ne <span class="accent">quitte</span> votre téléphone.',
      "priv.cardp": "Aucun serveur. Aucun cookie. Aucun courtier de données. Prisio fonctionne parce que votre iPhone est assez rapide pour calculer lui-même — le seul endroit où vivent vos scans, c'est chez vous.",
      "priv.cardlink": "Lire la politique de confidentialité",
      "final.eyebrow": "Prêt quand vous l'êtes",
      "final.h2": "Voyagez en connaissant le vrai prix.",
      "final.p": "Téléchargez Prisio, pointez l'appareil photo et ne devinez plus jamais une étiquette étrangère.",
      "final.note": "Gratuit pour commencer · Pro est un achat unique de 11,99 €",
      "foot.support": "Assistance",
      "foot.privacy": "Confidentialité",
      "foot.contact": "Contact",
      "foot.lang": "Langue",
      "foot.madefor": "Pensé pour les voyageurs"
    }
  };

  var LABEL = { en: "English", sv: "Svenska", de: "Deutsch", fr: "Français" };

  function detect() {
    try {
      var q = new URLSearchParams(location.search).get("lang");
      if (q && SUPPORTED.indexOf(q) !== -1) return q;
      var saved = localStorage.getItem("prisio_lang");
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    var code = nav.slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(code) !== -1 ? code : "en";
  }

  function pageHref(page, lang) {
    return lang === "en" ? page + ".html" : page + "." + lang + ".html";
  }

  function apply(lang) {
    var d = dict[lang] || dict.en;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (d[k] != null) el.innerHTML = d[k];
    });
    document.querySelectorAll("[data-page]").forEach(function (a) {
      a.setAttribute("href", pageHref(a.getAttribute("data-page"), lang));
    });

    var label = document.getElementById("langLabel");
    if (label) label.textContent = LABEL[lang];
    document.querySelectorAll("#langMenu [role=option]").forEach(function (li) {
      li.setAttribute("aria-selected", li.getAttribute("data-lang") === lang ? "true" : "false");
    });
    document.querySelectorAll("[data-lang-link]").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-lang-link") === lang);
    });

    try { localStorage.setItem("prisio_lang", lang); } catch (e) {}
  }

  function wire() {
    var btn = document.getElementById("langBtn");
    var menu = document.getElementById("langMenu");

    function close() {
      if (!menu) return;
      menu.classList.remove("open");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }
    function toggle() {
      if (!menu) return;
      var open = menu.classList.toggle("open");
      if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    if (btn) btn.addEventListener("click", function (e) { e.stopPropagation(); toggle(); });
    if (menu) {
      menu.querySelectorAll("[role=option]").forEach(function (li) {
        li.addEventListener("click", function () {
          apply(li.getAttribute("data-lang"));
          close();
        });
      });
    }
    document.querySelectorAll("[data-lang-link]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        apply(a.getAttribute("data-lang-link"));
      });
    });
    document.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  function init() {
    wire();
    apply(detect());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
