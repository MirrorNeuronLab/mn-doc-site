# MirrorNeuron developer manual

This Next.js/Fumadocs site is the external developer manual. Content lives in `content/docs`; `meta.json` orders the task-oriented sidebar. Detailed internal design and contributor contracts live in the separate `mn-docs` repository. Verify behavior against the owning runtime code before updating both layers.

From this repository, with Node.js and npm installed:

```bash
npm ci
npm run types:check
npm run build
npm run dev
```

Open http://localhost:3000 for the local preview and stop it with Ctrl+C. Build output is generated under `.next`; MDX collections are generated under `.source`. Do not commit generated dependencies or build output.

Start readers with installation, quickstart, monitoring, authoring, and integration tasks. Keep implementation history and maintainer checklists out of the main reader journey. Preserve existing document routes when changing navigation. Run the type check, production build, local link audit, and `git diff --check` after content changes.
