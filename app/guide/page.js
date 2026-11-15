import Link from "next/link";

export const metadata = { title: "Guide for international students | Universities in Germany" };

const CHECKED = "November 2026";

const STATS = [
  ["€11,904", "Blocked account for the student visa (€992 per month)"],
  ["€75", "Typical national visa fee"],
  ["€120–150", "Public health insurance per month for students under 30"],
  ["140 / 280", "Days a year non-EU students may work: 140 full days or 280 half days"],
  ["€75 + €30", "uni-assist: first application, then each additional one"],
  ["15 Jul / 15 Jan", "Common deadlines for the winter and summer semester"],
];

const STEPS = [
  ["Choose a programme", "Check the language of instruction, the tuition rules for your university and state, and whether the programme has extra entry tests."],
  ["Check that your qualification is recognised", "Bachelor’s applicants need a school-leaving certificate that qualifies for German university entry. If yours does not, you may need a preparatory year (Studienkolleg). The anabin database shows how German authorities rate foreign qualifications."],
  ["Prepare your documents and language proof", "Certified transcripts and certificates, passport, CV, motivation letter if required, and an English or German language certificate. Applicants from some countries, such as India, China and Vietnam, need an APS certificate."],
  ["Apply before the deadline", "Many universities use uni-assist or their own portal. Common deadlines for non-EU applicants are 15 July for the winter semester (October start) and 15 January for the summer semester (April start). Apply early."],
  ["Receive your admission letter", "You need it for the visa. Accept the place by the date given."],
  ["Open a blocked account and get health insurance", "The blocked account proves you can support yourself. Health insurance is mandatory for the visa and for enrolment."],
  ["Apply for the student visa", "Book the embassy or consulate appointment early, because slots fill up, especially from July to September."],
  ["Arrive and register", "Register your address (Anmeldung), enrol at the university (Immatrikulation), and apply for your residence permit at the foreigners’ office (Ausländerbehörde)."],
];

const COSTS = [
  ["Tuition", "Usually €0 at public universities (Baden-Württemberg charges non-EU students €1,500 per semester; TUM charges non-EU students too). Private universities set their own fees."],
  ["Semester contribution", "Paid every semester by everyone. The amount is set by each university and often includes a public transport ticket."],
  ["Blocked account", "€11,904 for 12 months in 2026. This is your own money, paid out to you at €992 per month."],
  ["Blocked account provider fee", "A one-off fee of roughly €50–150, depending on the provider."],
  ["Visa fee", "€75 for the national student visa."],
  ["Health insurance", "About €120–150 per month for public insurance if you are under 30. Older students usually need private insurance."],
  ["Student housing", "Student dorms are often cheaper than private rooms (roughly €250–400 per month), but places are limited. Apply as soon as you have your admission."],
];

const LINKS = [
  ["DAAD: study and scholarships", "https://www.daad.de/en/"],
  ["uni-assist: international applications", "https://www.uni-assist.de/en/"],
  ["anabin: recognition of foreign qualifications", "https://anabin.kmk.org"],
  ["Make it in Germany: visas and moving", "https://www.make-it-in-germany.com"],
];

export default function Guide() {
  return (
    <main className="narrow">
      <Link href="/" className="back">← All universities</Link>
      <header className="hero">
        <h1>Studying in Germany: a guide for international students</h1>
        <p>The key numbers, steps and documents you need before you apply. Last checked {CHECKED}.</p>
      </header>

      <div className="stats">
        {STATS.map(([big, label]) => (
          <div key={big} className="stat">
            <strong>{big}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <h2>Step by step</h2>
      <ol className="steps">
        {STEPS.map(([title, text]) => (
          <li key={title}>
            <strong>{title}</strong>
            <span>{text}</span>
          </li>
        ))}
      </ol>

      <div className="accordion">
        <details className="acc">
          <summary><span>What it costs</span></summary>
          <div className="acc-body">
            <div className="tablewrap">
              <table>
                <tbody>
                  {COSTS.map(([item, text]) => (
                    <tr key={item}><th scope="row">{item}</th><td>{text}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </details>

        <details className="acc">
          <summary><span>Language requirements</span></summary>
          <div className="acc-body">
            <ul className="tips">
              <li>English-taught programmes usually ask for IELTS or TOEFL. The minimum score differs by programme.</li>
              <li>German-taught programmes usually ask for around level C1 (for example TestDaF or DSH). Some programmes accept a lower level or a different test.</li>
              <li>Some Master’s programmes also ask for GRE or GMAT, or a minimum grade. Check each programme page.</li>
            </ul>
          </div>
        </details>

        <details className="acc">
          <summary><span>Working while you study</span></summary>
          <div className="acc-body">
            <ul className="tips">
              <li>Non-EU students may work 140 full days or 280 half days per calendar year. A day of more than four hours counts as a full day. The limit was raised from 120 / 240 days in 2024.</li>
              <li>During lectures, about 20 hours a week is the usual maximum.</li>
              <li>Student assistant jobs at the university do not count towards the annual limit.</li>
              <li>Keep a simple log of the days you work.</li>
            </ul>
          </div>
        </details>

        <details className="acc">
          <summary><span>Useful official links</span></summary>
          <div className="acc-body">
            <ul className="tips">
              {LINKS.map(([label, href]) => (
                <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>
              ))}
            </ul>
          </div>
        </details>
      </div>

      <p className="note">
        Rules, fees and amounts change. Confirm the current figures with the German embassy, DAAD and your
        university before you apply.
      </p>
    </main>
  );
}
