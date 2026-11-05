import Link from "next/link";
import { notFound } from "next/navigation";
import { universities } from "../../../data/universities";
import { getCourses } from "../../../data/courses";
import { getInfo } from "../../../data/info";
import { OWNERSHIP_LABEL, PROFILE_NOTE } from "../../../data/classify.mjs";
import { tuitionSummary } from "../../../data/tuition-policy";

const find = (slug) => universities.find((u) => u.slug === slug);
const dash = (v) => v || "—";

export function generateStaticParams() {
  return universities.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const uni = find(slug);
  return { title: uni ? `${uni.name} | Universities in Germany` : "Not found" };
}

export default async function UniversityPage({ params }) {
  const { slug } = await params;
  const uni = find(slug);
  if (!uni) notFound();

  const programs = getCourses(slug);
  const summary = tuitionSummary(uni);
  const info = getInfo(slug);
  const links = [
    ["international_office_url", "International office"],
    ["housing_url", "Housing"],
    ["scholarships_url", "Scholarships"],
  ];
  const facts = [
    ["application_portal", "Application portal"],
    ["deadline_winter", "Winter semester deadline"],
    ["deadline_summer", "Summer semester deadline"],
    ["german_required", "German required?"],
    ["notes", "Notes"],
  ];
  const hasReqs = programs.some((c) => c.ielts || c.toefl || c.gmat || c.gre || c.min_grade || c.german || c.other);

  return (
    <main className="narrow">
      <Link href="/" className="back">← All universities</Link>

      <header className="hero">
        <div className="tags">
          <span className={`tag ${uni.ownership}`}>{OWNERSHIP_LABEL[uni.ownership]}</span>
          <span className="tag plain">{uni.profile}</span>
        </div>
        <h1>{uni.name}</h1>
        <p>{uni.city}, {uni.state}</p>
      </header>

      <dl className="facts">
        <div><dt>University</dt><dd>{uni.name}</dd></div>
        <div><dt>State</dt><dd>{uni.state}</dd></div>
        <div><dt>City</dt><dd>{uni.city}</dd></div>
        <div><dt>Type</dt><dd>{OWNERSHIP_LABEL[uni.ownership]}</dd></div>
        <div><dt>Institution profile</dt><dd>{uni.profile}</dd></div>
      </dl>

      <section className="glance" aria-label="Tuition at a glance">
        <h2>Tuition at a glance</h2>
        <p className="glance-title">{summary.title}</p>
        <p>{summary.text}</p>
      </section>

      <div className="accordion">
        <details className="acc">
          <summary>
            <span>Tuition fees by programme</span>
            <span className="count-pill">{programs.length ? `${programs.length} programmes` : "Not added yet"}</span>
          </summary>
          <div className="acc-body">
            {programs.length === 0 ? (
              <p className="empty">
                Programme-level fees have not been added for this university yet. The summary above shows the
                general rule. For exact figures, see the official website.
              </p>
            ) : (
              <div className="tablewrap">
                <table>
                  <thead>
                    <tr><th>Programme</th><th>Degree</th><th>Duration</th><th>Language</th><th>EU/EEA fee</th><th>Non-EU fee</th></tr>
                  </thead>
                  <tbody>
                    {programs.map((c) => (
                      <tr key={`${c.program}-${c.degree ?? ""}`}>
                        <td>
                          {c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer">{c.program}</a> : c.program}
                        </td>
                        <td>{dash(c.degree)}</td>
                        <td>{dash(c.duration)}</td>
                        <td>{dash(c.language)}</td>
                        <td>{dash(c.fee_eu)}</td>
                        <td>{dash(c.fee_non_eu)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </details>

        {hasReqs && (
          <details className="acc">
            <summary>
              <span>Admission requirements</span>
              <span className="count-pill">IELTS, TOEFL, GRE, GMAT, grades</span>
            </summary>
            <div className="acc-body">
              <div className="tablewrap">
                <table>
                  <thead>
                    <tr><th>Programme</th><th>IELTS</th><th>TOEFL</th><th>GRE / GMAT</th><th>Min. grade</th><th>German</th><th>Other</th></tr>
                  </thead>
                  <tbody>
                    {programs.map((c) => (
                      <tr key={`${c.program}-${c.degree ?? ""}-req`}>
                        <td>{c.program}</td>
                        <td>{dash(c.ielts)}</td>
                        <td>{dash(c.toefl)}</td>
                        <td>{dash([c.gre && `GRE ${c.gre}`, c.gmat && `GMAT ${c.gmat}`].filter(Boolean).join(", "))}</td>
                        <td>{dash(c.min_grade)}</td>
                        <td>{dash(c.german)}</td>
                        <td>{dash(c.other)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        )}

        <details className="acc">
          <summary>
            <span>About this type of institution</span>
            <span className="count-pill">{uni.profile}</span>
          </summary>
          <div className="acc-body"><p>{PROFILE_NOTE[uni.profile]}</p></div>
        </details>

        <details className="acc">
          <summary>
            <span>For international students</span>
            <span className="count-pill">Deadlines, language, how to apply</span>
          </summary>
          <div className="acc-body">
            {info ? (
              <dl className="facts">
                {facts.filter(([k]) => info[k]).map(([k, label]) => (
                  <div key={k}><dt>{label}</dt><dd>{info[k]}</dd></div>
                ))}
                {links.filter(([k]) => info[k]).map(([k, label]) => (
                  <div key={k}>
                    <dt>{label}</dt>
                    <dd><a href={info[k]} target="_blank" rel="noopener noreferrer">Open page</a></dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="empty">University-specific deadlines and contacts have not been added yet. See the general points below and the official website.</p>
            )}
            <ul className="tips">
              <li>Many Master’s programmes are taught in English, while most Bachelor’s programmes are taught in German. Check the language of each programme.</li>
              <li>Common deadlines for non-EU applicants are 15 July (winter semester, starting in October) and 15 January (summer semester, starting in April). They vary by university and programme.</li>
              <li>Some universities process international applications through uni-assist, others use their own portal.</li>
              <li>
                You will need an admission letter, a blocked account and health insurance for the visa.{" "}
                <Link href="/guide">Read the guide for international students</Link>.
              </li>
            </ul>
          </div>
        </details>
      </div>

      <p className="note">Fees and requirements change. Confirm them on the official website before you apply.</p>

      {uni.url && (
        <a className="cta" href={uni.url} target="_blank" rel="noopener noreferrer">Visit official website</a>
      )}
    </main>
  );
}
