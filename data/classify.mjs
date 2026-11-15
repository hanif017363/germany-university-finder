// Ownership and institution profile are worked out from the data and the institution name.
// Church-run is detected from the name (for example "Evangelische", "Katholische", "Theologische"),
// so check any entry you rely on.
export const OWNERSHIP_LABEL = { public: "Public", private: "Private", church: "Church-run" };

const CHURCH =
  /katholisch|evangelisch|kirchlich|kirchenmusik|theologisch|christlich|diakonie|catholic|protestant|jesuit|adventist|\((rk|ev)\)|augustana|cvjm/i;

export function ownershipOf(u) {
  return CHURCH.test(u.name) ? "church" : u.type;
}

export function profileOf(u) {
  const t = u.institutionType;
  if (t === "University") return "University";
  if (t === "University of applied sciences") return "University of applied sciences";
  if (!t) return "Not specified";
  const n = u.name;
  if (/kunst|künste|musik|film|schauspiel|gestaltung|bildende|tanz|theater/i.test(n)) return "Art, music & film college";
  if (/pädagogisch/i.test(n)) return "University of education";
  if (/theolog|philosoph|kirch/i.test(n)) return "Theology & philosophy college";
  if (/charité|medizin|medical/i.test(n)) return "Medical school";
  if (/verwaltung|polizei/i.test(n)) return "Public administration college";
  return "Specialised institution";
}

export const PROFILE_NOTE = {
  "University": "Research-oriented institution with a broad range of subjects. Usually offers Bachelor’s, Master’s and doctoral degrees.",
  "University of applied sciences": "Practice-oriented, science-based degrees with close links to industry. Programmes often include internships or practical semesters.",
  "Art, music & film college": "Admission usually involves an audition, portfolio or aptitude test in addition to the formal requirements.",
  "University of education": "Focused on teacher training and education studies.",
  "Theology & philosophy college": "Focused on theology and philosophy. Many of these institutions are run by a church.",
  "Medical school": "Focused on medicine and health sciences.",
  "Public administration college": "Trains staff for public administration or the police service.",
  "Specialised institution": "Focused on a specific field. Check the official website for its programmes.",
  "Not specified": "The institution type is not specified in the data.",
};
