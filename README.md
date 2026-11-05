# Universities in Germany

```bash
npm install
npm run dev     # http://localhost:3000
```

Each university has a page at `/universities/<slug>` with name, state, type (public, private or church-run),
institution profile, a tuition summary, accordions for programme fees and admission requirements, and a link to the official website.

## Adding programmes and fees

1. Fill in `data/courses.csv` (one row per programme). Columns:
   `university, program, degree, duration, language, fee_eu, fee_non_eu, ielts, toefl, gmat, gre, min_grade, german, other, url`
   - `university`: exact name shown on the site, or the slug from the page URL
   - only `university` and `program` are required; empty cells show as a dash
2. Run `node scripts/import-courses.mjs`
3. Restart `npm run dev`

Take fees and requirements from the university's official programme pages and re-check them every intake.

## University-specific info for international students

Fill in `data/university-info.csv` (columns: `university, application_portal, deadline_winter, deadline_summer, german_required, international_office_url, housing_url, scholarships_url, notes`)
and run the same import script. A row needs `university` and `application_portal`. The general guide lives at `/guide` (`app/guide/page.js`); update its figures each year.

## Notes

- `data/universities.js` uses only the imported dataset (`IMPORTED_ONLY = true`). Set it to `false` to add the hand-written lists back (they duplicate many imported entries).
- Church-run status is detected from the institution name in `data/classify.mjs`.
