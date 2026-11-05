import Link from "next/link";
import UniversityList from "../components/UniversityList";
import { universities } from "../data/universities";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <h1>Universities in Germany</h1>
        <p>
          Public and private universities from all over the country. Search by name or city,
          then filter by type and state.
        </p>
        <p className="guide-link">
          <Link href="/guide">New to Germany? Read the guide for international students →</Link>
        </p>
      </header>
      <UniversityList items={universities} />
    </main>
  );
}
