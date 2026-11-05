"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { OWNERSHIP_LABEL } from "../data/classify.mjs";

const TYPES = [
  ["all", "All"],
  ["public", "Public"],
  ["private", "Private"],
  ["church", "Church-run"],
];

export default function UniversityList({ items }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [state, setState] = useState("all");

  const states = useMemo(() => [...new Set(items.map((u) => u.state))].sort(), [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .filter((u) => type === "all" || u.ownership === type)
      .filter((u) => state === "all" || u.state === state)
      .filter((u) => !q || `${u.name} ${u.city}`.toLowerCase().includes(q))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [items, query, type, state]);

  return (
    <section>
      <div className="toolbar">
        <label className="search">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            placeholder="Search by university or city"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search universities"
          />
        </label>
        <select value={state} onChange={(e) => setState(e.target.value)} aria-label="State">
          <option value="all">All states</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="chips" role="group" aria-label="Filter by type">
        {TYPES.map(([value, label]) => (
          <button
            key={value}
            type="button"
            className={`chip${type === value ? " active" : ""}`}
            aria-pressed={type === value}
            onClick={() => setType(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="count" aria-live="polite">
        {filtered.length} of {items.length} universities
      </p>

      {filtered.length === 0 ? (
        <p className="empty">No universities match. Clear the search or choose a different state.</p>
      ) : (
        <ul className="rows">
          {filtered.map((u) => (
            <li key={`${u.name}-${u.city}`} className="card">
              <Link href={`/universities/${u.slug}`} className="card-link">{u.name}</Link>
              <span className="place">{u.city}, {u.state}</span>
              <div className="card-foot">
                <span className={`tag ${u.ownership}`}>{OWNERSHIP_LABEL[u.ownership]}</span>
                <span className="profile">{u.profile}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
