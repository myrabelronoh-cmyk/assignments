# The Almost Atlas — Personal Blog

A responsive personal field journal built with React and Vite. Its visual direction takes inspiration from hand-annotated maps and field notebooks: pine-ink panels, map-grid textures, numbered story plates, coordinate-like labels, and warm paper tones.

## Run the project

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Component tree

```text
App
├── Header
├── Hero
├── Journal
│   └── PostGrid
│       └── PostCard (rendered for each story)
├── About
├── Newsletter
├── Footer
└── ArticleReader (shown when a story is selected)
```

## Project structure

- `src/data/posts.js` — example story content and topics
- `src/components/` — reusable page sections and article reader
- `src/App.jsx` — page composition, search, topic filters, and reader state
- `src/styles.css` — shared visual system, responsive layout, and reduced-motion support

## Notes

Stories and images are sample content. Newsletter signup currently demonstrates client-side form feedback; connect it to a mailing-list service before collecting real subscriptions. The visual identity is an original design direction for this assignment; no one can reliably guarantee that a design has never appeared elsewhere.
