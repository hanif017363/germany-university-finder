<h1 align="center">Germany University Finder</h1>

<p align="center">
  A simple, fast way to explore universities in Germany, built with international students in mind.
</p>

<p align="center">
  <a href="https://germany-university-finder.vercel.app/"><strong>Live demo →</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/hanif017363/germany-university-finder"><strong>GitHub repository →</strong></a>
</p>

<p align="center">
  <img width="650" alt="Home page on desktop" src="https://github.com/user-attachments/assets/8610b914-bb28-49ba-b02c-f68453b28075" />
  &nbsp;&nbsp;
  <img width="200" alt="Home page on mobile" src="https://github.com/user-attachments/assets/43388fb8-5ef8-4d54-a59f-9b8bc676cd23" />
</p>

---

## About

Finding the right university in Germany means jumping between dozens of websites. This project puts the basics in one place: browse about 400 higher-education institutions, filter them by type and state, and open a page for each one with the details an international applicant looks for first.

## Features

- **Search and filter** by name, city, state, and type (public, private or church-run)
- **University pages** with location, state, institution profile and a link to the official website
- **Tuition at a glance**: a short summary of how tuition works for that university's type and state
- **Expandable sections** for programme fees and admission requirements (IELTS, TOEFL, GRE, GMAT, minimum grade, German level)
- **Student guide** for international students: key costs, application steps, deadlines, working rules and useful links
- **Light and dark mode** with a toggle that remembers your choice
- **Responsive design** that works on phones, tablets and desktops

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) and [React](https://react.dev/)
- Plain CSS, no UI framework
- Static data files, no database
- Deployed on [Vercel](https://vercel.com/)

## Getting started

You need [Node.js](https://nodejs.org/) 18.18 or newer.

```bash
git clone https://github.com/hanif017363/germany-university-finder.git
cd germany-university-finder
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm start
```

## Project structure

```text
app/                    Pages and layout (home, university detail, student guide)
components/             Search and filter list, theme toggle
data/                   University data, classification rules, tuition summaries
scripts/                Import scripts for universities and course data
```

## Adding programme and university data

Programme fees, admission requirements and university-specific deadlines are loaded from CSV files, so you can add them without touching the code.

1. Fill in `data/courses.csv` (one row per programme) and, optionally, `data/university-info.csv`.
2. Run the import script:

   ```bash
   node scripts/import-courses.mjs
   ```

3. Restart the dev server.

The `university` column can be the exact name shown on the site or the last part of its page URL. The column names are listed at the top of each CSV file.

## Data and accuracy

- The university list comes from an imported dataset of German higher-education institutions (see `scripts/import-universities.mjs`).
- Whether an institution is church-run is detected from its name, so a few entries may need a manual check.
- Programme fees and admission requirements are only shown where data has been added.
- Tuition rules, visa amounts and deadlines change often. **Always confirm the current details on the university's official website and with the German embassy or DAAD before you apply.**

## Roadmap

- [ ] Add verified programme fees and requirements for more universities
- [ ] Filters for tuition-free options and English-taught programmes
- [ ] Country-specific notes for applicants (for example APS requirements)
- [ ] Installable app (PWA / Android)
- [ ] German-language version

## Built with AI assistance

This project was built with the help of AI tools: [Claude](https://claude.ai) by Anthropic and [ChatGPT](https://chatgpt.com) by OpenAI. They helped with code, design and drafting content, while I set the requirements, reviewed and tested the results, and deployed the site. AI tools can make mistakes, so please report anything that looks wrong.

## Contributing

Issues and pull requests are welcome, especially corrections to university details and verified programme data. If you add data, please include a link to the official source.

## License

A license has not been added yet.
