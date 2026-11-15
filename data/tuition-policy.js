// General rules only. Exact fees depend on the programme and the student, so always confirm on the official website.
export function tuitionSummary(u) {
  if (u.ownership === "private")
    return {
      title: "Private institution: sets its own fees",
      text: "Private universities decide their own tuition fees, and these can be substantial. See the programme table below, or ask the university for the current fee schedule.",
    };
  if (u.ownership === "church")
    return {
      title: "Church-run institution: fees vary",
      text: "Church-run institutions are privately sponsored, and fees differ from one institution and programme to the next. Check the programme table below or ask the university.",
    };
  if (u.state === "Baden-Württemberg")
    return {
      title: "Non-EU students pay €1,500 per semester",
      text: "Public universities in Baden-Württemberg have charged non-EU/EEA students €1,500 per semester since winter semester 2017/18. Everyone also pays the semester contribution (Semesterbeitrag). Exemptions and scholarships exist.",
    };
  if (u.state === "Bavaria")
    return {
      title: "Mostly tuition-free; some exceptions",
      text: "Bavarian public universities may charge non-EU students, and the Technical University of Munich does, with amounts that vary by programme. Most other Bavarian public universities do not charge tuition. Everyone pays the semester contribution (Semesterbeitrag).",
    };
  return {
    title: "Generally no tuition at public universities",
    text: "Public universities in this state generally charge no tuition for most programmes. Everyone pays a semester contribution (Semesterbeitrag), and some programmes, such as part-time or executive Master’s degrees, can carry fees.",
  };
}
