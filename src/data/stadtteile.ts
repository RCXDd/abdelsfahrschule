export interface Stadtteil {
  slug: string;
  name: string;
  plz: string[];
  bezirk: string;
  nachbarStadtteile: string[];
  keywords: string[];
}

export const stadtteile: Stadtteil[] = [
  // Bezirk 1 - Stadtmitte
  {
    slug: "altstadt",
    name: "Altstadt",
    plz: ["40213"],
    bezirk: "Stadtmitte",
    nachbarStadtteile: ["carlstadt", "pempelfort", "stadtmitte"],
    keywords: ["Altstadt", "Innenstadt", "Zentrum"],
  },
  {
    slug: "carlstadt",
    name: "Carlstadt",
    plz: ["40213", "40219"],
    bezirk: "Stadtmitte",
    nachbarStadtteile: ["altstadt", "unterbilk", "hafen", "stadtmitte"],
    keywords: ["Carlstadt", "Kunstakademie"],
  },
  {
    slug: "stadtmitte",
    name: "Stadtmitte",
    plz: ["40210", "40211", "40212"],
    bezirk: "Stadtmitte",
    nachbarStadtteile: ["altstadt", "pempelfort", "flingern-nord", "oberbilk", "friedrichstadt"],
    keywords: ["Stadtmitte", "Hauptbahnhof", "Kö", "Königsallee"],
  },
  {
    slug: "pempelfort",
    name: "Pempelfort",
    plz: ["40211", "40474", "40477", "40479"],
    bezirk: "Stadtmitte",
    nachbarStadtteile: ["altstadt", "golzheim", "derendorf", "duesseltal", "flingern-nord", "stadtmitte"],
    keywords: ["Pempelfort", "Nordpark", "Nordstraße"],
  },
  {
    slug: "derendorf",
    name: "Derendorf",
    plz: ["40468", "40474", "40476", "40477"],
    bezirk: "Stadtmitte",
    nachbarStadtteile: ["pempelfort", "golzheim", "moersenbroich", "duesseltal"],
    keywords: ["Derendorf", "Rather Straße"],
  },
  {
    slug: "golzheim",
    name: "Golzheim",
    plz: ["40474", "40476", "40477", "40479"],
    bezirk: "Stadtmitte",
    nachbarStadtteile: ["pempelfort", "derendorf", "stockum", "niederkassel"],
    keywords: ["Golzheim", "Rheinufer", "Messe"],
  },

  // Bezirk 2 - Flingern/Düsseltal
  {
    slug: "flingern-nord",
    name: "Flingern-Nord",
    plz: ["40233", "40235"],
    bezirk: "Flingern/Düsseltal",
    nachbarStadtteile: ["pempelfort", "duesseltal", "flingern-sued", "stadtmitte"],
    keywords: ["Flingern Nord", "Flingern", "Ackerstraße", "Kiefernstraße"],
  },
  {
    slug: "flingern-sued",
    name: "Flingern-Süd",
    plz: ["40231", "40233"],
    bezirk: "Flingern/Düsseltal",
    nachbarStadtteile: ["flingern-nord", "oberbilk", "lierenfeld", "eller"],
    keywords: ["Flingern Süd", "Flingern"],
  },
  {
    slug: "duesseltal",
    name: "Düsseltal",
    plz: ["40235", "40237"],
    bezirk: "Flingern/Düsseltal",
    nachbarStadtteile: ["pempelfort", "derendorf", "flingern-nord", "grafenberg", "gerresheim"],
    keywords: ["Düsseltal", "Zoo", "Zooviertel"],
  },

  // Bezirk 3 - Oberbilk/Friedrichstadt
  {
    slug: "friedrichstadt",
    name: "Friedrichstadt",
    plz: ["40215", "40217"],
    bezirk: "Oberbilk",
    nachbarStadtteile: ["stadtmitte", "unterbilk", "bilk", "oberbilk"],
    keywords: ["Friedrichstadt", "Fürstenplatz", "Kirchplatz"],
  },
  {
    slug: "unterbilk",
    name: "Unterbilk",
    plz: ["40219", "40221"],
    bezirk: "Oberbilk",
    nachbarStadtteile: ["carlstadt", "friedrichstadt", "bilk", "hafen", "hamm"],
    keywords: ["Unterbilk", "Medienhafen", "Lorettostraße"],
  },
  {
    slug: "hafen",
    name: "Hafen",
    plz: ["40221"],
    bezirk: "Oberbilk",
    nachbarStadtteile: ["carlstadt", "unterbilk", "hamm", "volmerswerth"],
    keywords: ["Hafen", "Medienhafen", "Rheinturm"],
  },
  {
    slug: "hamm",
    name: "Hamm",
    plz: ["40221", "40549"],
    bezirk: "Oberbilk",
    nachbarStadtteile: ["unterbilk", "hafen", "volmerswerth", "bilk", "flehe"],
    keywords: ["Hamm", "Hammer Dorfstraße"],
  },
  {
    slug: "volmerswerth",
    name: "Volmerswerth",
    plz: ["40221"],
    bezirk: "Oberbilk",
    nachbarStadtteile: ["hafen", "hamm", "flehe"],
    keywords: ["Volmerswerth"],
  },
  {
    slug: "bilk",
    name: "Bilk",
    plz: ["40223", "40225"],
    bezirk: "Oberbilk",
    nachbarStadtteile: ["unterbilk", "friedrichstadt", "oberbilk", "wersten", "hamm", "flehe"],
    keywords: ["Bilk", "Uni", "Universität", "Bilker Arcaden", "Florastraße"],
  },
  {
    slug: "oberbilk",
    name: "Oberbilk",
    plz: ["40227", "40229"],
    bezirk: "Oberbilk",
    nachbarStadtteile: ["stadtmitte", "friedrichstadt", "bilk", "flingern-sued", "wersten", "eller"],
    keywords: ["Oberbilk", "Mintropplatz", "Ellerstraße"],
  },
  {
    slug: "flehe",
    name: "Flehe",
    plz: ["40223", "40589"],
    bezirk: "Oberbilk",
    nachbarStadtteile: ["bilk", "hamm", "volmerswerth", "wersten", "himmelgeist"],
    keywords: ["Flehe", "Fleher Deich"],
  },

  // Bezirk 4 - Oberkassel
  {
    slug: "oberkassel",
    name: "Oberkassel",
    plz: ["40545", "40547"],
    bezirk: "Linksrheinisch",
    nachbarStadtteile: ["niederkassel", "heerdt", "loerick"],
    keywords: ["Oberkassel", "Luegallee", "Belsenplatz", "Linksrheinisch"],
  },
  {
    slug: "niederkassel",
    name: "Niederkassel",
    plz: ["40547"],
    bezirk: "Linksrheinisch",
    nachbarStadtteile: ["oberkassel", "heerdt", "golzheim"],
    keywords: ["Niederkassel", "Rheinufer"],
  },
  {
    slug: "heerdt",
    name: "Heerdt",
    plz: ["40549"],
    bezirk: "Linksrheinisch",
    nachbarStadtteile: ["oberkassel", "niederkassel", "loerick"],
    keywords: ["Heerdt", "Heerdter Landstraße"],
  },
  {
    slug: "loerick",
    name: "Lörick",
    plz: ["40547"],
    bezirk: "Linksrheinisch",
    nachbarStadtteile: ["oberkassel", "heerdt"],
    keywords: ["Lörick"],
  },

  // Bezirk 5 - Stockum/Lohausen
  {
    slug: "stockum",
    name: "Stockum",
    plz: ["40474", "40489"],
    bezirk: "Stockum",
    nachbarStadtteile: ["golzheim", "lohausen", "unterrath"],
    keywords: ["Stockum", "Messe", "Arena", "LTU Arena"],
  },
  {
    slug: "lohausen",
    name: "Lohausen",
    plz: ["40474", "40489"],
    bezirk: "Stockum",
    nachbarStadtteile: ["stockum", "kaiserswerth", "kalkum", "unterrath"],
    keywords: ["Lohausen", "Flughafen", "Airport"],
  },
  {
    slug: "kaiserswerth",
    name: "Kaiserswerth",
    plz: ["40489"],
    bezirk: "Stockum",
    nachbarStadtteile: ["lohausen", "kalkum", "wittlaer", "angermund"],
    keywords: ["Kaiserswerth", "Suitbertus", "Kaiserpfalz", "historisch"],
  },
  {
    slug: "kalkum",
    name: "Kalkum",
    plz: ["40489"],
    bezirk: "Stockum",
    nachbarStadtteile: ["kaiserswerth", "lohausen", "wittlaer", "angermund", "unterrath"],
    keywords: ["Kalkum", "Schloss Kalkum"],
  },
  {
    slug: "angermund",
    name: "Angermund",
    plz: ["40489"],
    bezirk: "Stockum",
    nachbarStadtteile: ["kaiserswerth", "kalkum", "wittlaer"],
    keywords: ["Angermund", "Anger"],
  },
  {
    slug: "wittlaer",
    name: "Wittlaer",
    plz: ["40489"],
    bezirk: "Stockum",
    nachbarStadtteile: ["kaiserswerth", "kalkum", "angermund"],
    keywords: ["Wittlaer", "Bockum"],
  },

  // Bezirk 6 - Rath/Unterrath
  {
    slug: "rath",
    name: "Rath",
    plz: ["40472"],
    bezirk: "Rath",
    nachbarStadtteile: ["moersenbroich", "unterrath", "grafenberg"],
    keywords: ["Rath", "Rather Broich"],
  },
  {
    slug: "moersenbroich",
    name: "Mörsenbroich",
    plz: ["40470"],
    bezirk: "Rath",
    nachbarStadtteile: ["derendorf", "rath", "unterrath", "duesseltal"],
    keywords: ["Mörsenbroich"],
  },
  {
    slug: "unterrath",
    name: "Unterrath",
    plz: ["40468", "40470"],
    bezirk: "Rath",
    nachbarStadtteile: ["moersenbroich", "rath", "stockum", "lohausen", "lichtenbroich"],
    keywords: ["Unterrath"],
  },
  {
    slug: "lichtenbroich",
    name: "Lichtenbroich",
    plz: ["40472"],
    bezirk: "Rath",
    nachbarStadtteile: ["unterrath", "rath"],
    keywords: ["Lichtenbroich"],
  },

  // Bezirk 7 - Gerresheim
  {
    slug: "gerresheim",
    name: "Gerresheim",
    plz: ["40625", "40627", "40629"],
    bezirk: "Gerresheim",
    nachbarStadtteile: ["grafenberg", "duesseltal", "ludenberg", "hubbelrath", "vennhausen"],
    keywords: ["Gerresheim", "Glasmacherviertel", "Gerresheimer Glashütte"],
  },
  {
    slug: "grafenberg",
    name: "Grafenberg",
    plz: ["40629"],
    bezirk: "Gerresheim",
    nachbarStadtteile: ["duesseltal", "gerresheim", "rath", "ludenberg"],
    keywords: ["Grafenberg", "Wildpark", "Staufenplatz"],
  },
  {
    slug: "ludenberg",
    name: "Ludenberg",
    plz: ["40629"],
    bezirk: "Gerresheim",
    nachbarStadtteile: ["grafenberg", "gerresheim", "hubbelrath"],
    keywords: ["Ludenberg"],
  },
  {
    slug: "hubbelrath",
    name: "Hubbelrath",
    plz: ["40629"],
    bezirk: "Gerresheim",
    nachbarStadtteile: ["gerresheim", "ludenberg"],
    keywords: ["Hubbelrath", "Golfplatz"],
  },

  // Bezirk 8 - Eller
  {
    slug: "eller",
    name: "Eller",
    plz: ["40229"],
    bezirk: "Eller",
    nachbarStadtteile: ["flingern-sued", "oberbilk", "lierenfeld", "vennhausen", "unterbach"],
    keywords: ["Eller", "Schloss Eller", "Gertrudisplatz"],
  },
  {
    slug: "lierenfeld",
    name: "Lierenfeld",
    plz: ["40231"],
    bezirk: "Eller",
    nachbarStadtteile: ["flingern-sued", "eller", "vennhausen"],
    keywords: ["Lierenfeld"],
  },
  {
    slug: "vennhausen",
    name: "Vennhausen",
    plz: ["40627"],
    bezirk: "Eller",
    nachbarStadtteile: ["eller", "lierenfeld", "gerresheim", "unterbach"],
    keywords: ["Vennhausen"],
  },
  {
    slug: "unterbach",
    name: "Unterbach",
    plz: ["40627"],
    bezirk: "Eller",
    nachbarStadtteile: ["eller", "vennhausen"],
    keywords: ["Unterbach", "Unterbacher See"],
  },

  // Bezirk 9 - Wersten/Holthausen
  {
    slug: "wersten",
    name: "Wersten",
    plz: ["40591"],
    bezirk: "Wersten",
    nachbarStadtteile: ["bilk", "oberbilk", "flehe", "holthausen", "himmelgeist"],
    keywords: ["Wersten", "Werstener Dorfstraße"],
  },
  {
    slug: "himmelgeist",
    name: "Himmelgeist",
    plz: ["40589"],
    bezirk: "Wersten",
    nachbarStadtteile: ["flehe", "wersten", "holthausen", "itter"],
    keywords: ["Himmelgeist", "St. Nikolaus"],
  },
  {
    slug: "holthausen",
    name: "Holthausen",
    plz: ["40589", "40591"],
    bezirk: "Wersten",
    nachbarStadtteile: ["wersten", "himmelgeist", "itter", "benrath", "reisholz"],
    keywords: ["Holthausen"],
  },
  {
    slug: "itter",
    name: "Itter",
    plz: ["40589"],
    bezirk: "Wersten",
    nachbarStadtteile: ["himmelgeist", "holthausen"],
    keywords: ["Itter"],
  },

  // Bezirk 10 - Benrath/Garath
  {
    slug: "benrath",
    name: "Benrath",
    plz: ["40593", "40597"],
    bezirk: "Benrath",
    nachbarStadtteile: ["holthausen", "urdenbach", "hassels", "reisholz"],
    keywords: ["Benrath", "Schloss Benrath", "Benrather Marktplatz"],
  },
  {
    slug: "urdenbach",
    name: "Urdenbach",
    plz: ["40593"],
    bezirk: "Benrath",
    nachbarStadtteile: ["benrath", "garath"],
    keywords: ["Urdenbach", "Urdenbacher Kämpe"],
  },
  {
    slug: "hassels",
    name: "Hassels",
    plz: ["40599"],
    bezirk: "Benrath",
    nachbarStadtteile: ["benrath", "reisholz", "garath"],
    keywords: ["Hassels", "In den Hassels"],
  },
  {
    slug: "reisholz",
    name: "Reisholz",
    plz: ["40599"],
    bezirk: "Benrath",
    nachbarStadtteile: ["holthausen", "benrath", "hassels"],
    keywords: ["Reisholz", "Henkel"],
  },
  {
    slug: "garath",
    name: "Garath",
    plz: ["40595"],
    bezirk: "Benrath",
    nachbarStadtteile: ["urdenbach", "hassels", "hellerhof"],
    keywords: ["Garath"],
  },
  {
    slug: "hellerhof",
    name: "Hellerhof",
    plz: ["40595"],
    bezirk: "Benrath",
    nachbarStadtteile: ["garath"],
    keywords: ["Hellerhof"],
  },
];

// Helper function to get a stadtteil by slug
export function getStadtteilBySlug(slug: string): Stadtteil | undefined {
  return stadtteile.find((s) => s.slug === slug);
}

// Get all slugs for static generation
export function getAllStadtteilSlugs(): string[] {
  return stadtteile.map((s) => s.slug);
}

// Get nearby stadtteile for internal linking
export function getNearbyStadtteile(slug: string): Stadtteil[] {
  const current = getStadtteilBySlug(slug);
  if (!current) return [];

  return current.nachbarStadtteile
    .map((nachbar) => getStadtteilBySlug(nachbar))
    .filter((s): s is Stadtteil => s !== undefined);
}
