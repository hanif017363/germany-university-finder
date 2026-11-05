import { slugify } from "./slug.mjs";
import { ownershipOf, profileOf } from "./classify.mjs";
import { more } from "./more-universities";
import { imported } from "./imported-universities";
// Add more entries here to grow the list. type: "public" | "private"
const BW = "Baden-Württemberg",
  BY = "Bavaria",
  BE = "Berlin",
  BB = "Brandenburg",
  HB = "Bremen",
  HH = "Hamburg",
  HE = "Hesse",
  MV = "Mecklenburg-Vorpommern",
  NI = "Lower Saxony",
  NW = "North Rhine-Westphalia",
  RP = "Rhineland-Palatinate",
  SL = "Saarland",
  SN = "Saxony",
  ST = "Saxony-Anhalt",
  SH = "Schleswig-Holstein",
  TH = "Thuringia";

const u = (name, city, state, type, founded, url) => ({
  name,
  city,
  state,
  type,
  founded,
  url,
});

const featured = [
  u(
    "Heidelberg University",
    "Heidelberg",
    BW,
    "public",
    1386,
    "https://www.uni-heidelberg.de",
  ),
  u(
    "University of Freiburg",
    "Freiburg",
    BW,
    "public",
    1457,
    "https://www.uni-freiburg.de",
  ),
  u(
    "University of Tübingen",
    "Tübingen",
    BW,
    "public",
    1477,
    "https://uni-tuebingen.de",
  ),
  u(
    "Karlsruhe Institute of Technology (KIT)",
    "Karlsruhe",
    BW,
    "public",
    2009,
    "https://www.kit.edu",
  ),
  u(
    "University of Stuttgart",
    "Stuttgart",
    BW,
    "public",
    1829,
    "https://www.uni-stuttgart.de",
  ),
  u(
    "University of Mannheim",
    "Mannheim",
    BW,
    "public",
    1967,
    "https://www.uni-mannheim.de",
  ),
  u(
    "University of Konstanz",
    "Konstanz",
    BW,
    "public",
    1966,
    "https://www.uni-konstanz.de",
  ),
  u("Ulm University", "Ulm", BW, "public", 1967, "https://www.uni-ulm.de"),
  u(
    "Zeppelin University",
    "Friedrichshafen",
    BW,
    "private",
    2003,
    "https://www.zu.de",
  ),

  u("LMU Munich", "Munich", BY, "public", 1472, "https://www.lmu.de"),
  u(
    "Technical University of Munich",
    "Munich",
    BY,
    "public",
    1868,
    "https://www.tum.de",
  ),
  u(
    "University of Erlangen-Nuremberg (FAU)",
    "Erlangen",
    BY,
    "public",
    1743,
    "https://www.fau.de",
  ),
  u(
    "University of Würzburg",
    "Würzburg",
    BY,
    "public",
    1402,
    "https://www.uni-wuerzburg.de",
  ),
  u(
    "University of Regensburg",
    "Regensburg",
    BY,
    "public",
    1962,
    "https://www.uni-regensburg.de",
  ),
  u(
    "University of Bayreuth",
    "Bayreuth",
    BY,
    "public",
    1975,
    "https://www.uni-bayreuth.de",
  ),
  u(
    "Catholic University of Eichstätt-Ingolstadt",
    "Eichstätt",
    BY,
    "private",
    1980,
    "https://www.ku.de",
  ),

  u(
    "Humboldt University of Berlin",
    "Berlin",
    BE,
    "public",
    1810,
    "https://www.hu-berlin.de",
  ),
  u(
    "Free University of Berlin",
    "Berlin",
    BE,
    "public",
    1948,
    "https://www.fu-berlin.de",
  ),
  u(
    "Technical University of Berlin",
    "Berlin",
    BE,
    "public",
    1879,
    "https://www.tu-berlin.de",
  ),
  u("ESMT Berlin", "Berlin", BE, "private", 2002, "https://esmt.berlin"),
  u(
    "Hertie School",
    "Berlin",
    BE,
    "private",
    2003,
    "https://www.hertie-school.org",
  ),

  u(
    "University of Potsdam",
    "Potsdam",
    BB,
    "public",
    1991,
    "https://www.uni-potsdam.de",
  ),
  u(
    "University of Bremen",
    "Bremen",
    HB,
    "public",
    1971,
    "https://www.uni-bremen.de",
  ),
  u(
    "Constructor University",
    "Bremen",
    HB,
    "private",
    2001,
    "https://constructor.university",
  ),

  u(
    "University of Hamburg",
    "Hamburg",
    HH,
    "public",
    1919,
    "https://www.uni-hamburg.de",
  ),
  u(
    "Bucerius Law School",
    "Hamburg",
    HH,
    "private",
    2000,
    "https://www.law-school.de",
  ),
  u(
    "Kühne Logistics University",
    "Hamburg",
    HH,
    "private",
    2010,
    "https://www.the-klu.org",
  ),

  u(
    "Goethe University Frankfurt",
    "Frankfurt",
    HE,
    "public",
    1914,
    "https://www.uni-frankfurt.de",
  ),
  u(
    "TU Darmstadt",
    "Darmstadt",
    HE,
    "public",
    1877,
    "https://www.tu-darmstadt.de",
  ),
  u(
    "University of Marburg",
    "Marburg",
    HE,
    "public",
    1527,
    "https://www.uni-marburg.de",
  ),
  u(
    "Frankfurt School of Finance & Management",
    "Frankfurt",
    HE,
    "private",
    1957,
    "https://www.frankfurt-school.de",
  ),
  u(
    "Hochschule Fresenius",
    "Idstein",
    HE,
    "private",
    1848,
    "https://www.hs-fresenius.de",
  ),

  u(
    "University of Rostock",
    "Rostock",
    MV,
    "public",
    1419,
    "https://www.uni-rostock.de",
  ),
  u(
    "University of Greifswald",
    "Greifswald",
    MV,
    "public",
    1456,
    "https://www.uni-greifswald.de",
  ),

  u(
    "University of Göttingen",
    "Göttingen",
    NI,
    "public",
    1737,
    "https://www.uni-goettingen.de",
  ),
  u(
    "Leibniz University Hannover",
    "Hannover",
    NI,
    "public",
    1831,
    "https://www.uni-hannover.de",
  ),
  u(
    "TU Braunschweig",
    "Braunschweig",
    NI,
    "public",
    1745,
    "https://www.tu-braunschweig.de",
  ),

  u(
    "University of Cologne",
    "Cologne",
    NW,
    "public",
    1388,
    "https://www.uni-koeln.de",
  ),
  u(
    "RWTH Aachen University",
    "Aachen",
    NW,
    "public",
    1870,
    "https://www.rwth-aachen.de",
  ),
  u(
    "University of Bonn",
    "Bonn",
    NW,
    "public",
    1818,
    "https://www.uni-bonn.de",
  ),
  u(
    "University of Münster",
    "Münster",
    NW,
    "public",
    1780,
    "https://www.uni-muenster.de",
  ),
  u(
    "Ruhr University Bochum",
    "Bochum",
    NW,
    "public",
    1962,
    "https://www.ruhr-uni-bochum.de",
  ),
  u(
    "TU Dortmund University",
    "Dortmund",
    NW,
    "public",
    1968,
    "https://www.tu-dortmund.de",
  ),
  u(
    "Witten/Herdecke University",
    "Witten",
    NW,
    "private",
    1982,
    "https://www.uni-wh.de",
  ),

  u(
    "Johannes Gutenberg University Mainz",
    "Mainz",
    RP,
    "public",
    1477,
    "https://www.uni-mainz.de",
  ),
  u(
    "RPTU Kaiserslautern-Landau",
    "Kaiserslautern",
    RP,
    "public",
    2023,
    "https://rptu.de",
  ),
  u(
    "WHU – Otto Beisheim School of Management",
    "Vallendar",
    RP,
    "private",
    1984,
    "https://www.whu.edu",
  ),

  u(
    "Saarland University",
    "Saarbrücken",
    SL,
    "public",
    1948,
    "https://www.uni-saarland.de",
  ),

  u(
    "Leipzig University",
    "Leipzig",
    SN,
    "public",
    1409,
    "https://www.uni-leipzig.de",
  ),
  u("TU Dresden", "Dresden", SN, "public", 1828, "https://tu-dresden.de"),
  u(
    "HHL Leipzig Graduate School of Management",
    "Leipzig",
    SN,
    "private",
    1898,
    "https://www.hhl.de",
  ),

  u(
    "Martin Luther University Halle-Wittenberg",
    "Halle",
    ST,
    "public",
    1502,
    "https://www.uni-halle.de",
  ),
  u(
    "Otto von Guericke University Magdeburg",
    "Magdeburg",
    ST,
    "public",
    1993,
    "https://www.ovgu.de",
  ),

  u("Kiel University", "Kiel", SH, "public", 1665, "https://www.uni-kiel.de"),

  u(
    "Friedrich Schiller University Jena",
    "Jena",
    TH,
    "public",
    1558,
    "https://www.uni-jena.de",
  ),
  u(
    "IU International University of Applied Sciences",
    "Erfurt",
    TH,
    "private",
    1998,
    "https://www.iu.org",
  ),
];

// true: use only the imported dataset (no duplicate English/German entries, institution type known).
// false: also include the hand-written lists, which overlap with the imported data.
const IMPORTED_ONLY = true;

const source = IMPORTED_ONLY ? imported : [...featured, ...more, ...imported];
const seen = new Set();
const slugs = new Set();

export const universities = source
  .filter((uni) => {
    const key = uni.name.trim().toLocaleLowerCase("de");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  })
  .map((uni) => {
    let slug = slugify(uni.name);
    if (slugs.has(slug)) slug = `${slug}-${slugify(uni.city)}`;
    slugs.add(slug);
    return { ...uni, slug, ownership: ownershipOf(uni), profile: profileOf(uni) };
  });
