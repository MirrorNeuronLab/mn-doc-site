# MirrorNeuron Runtime user guide

This Next.js and Fumadocs site serves the MirrorNeuron Runtime user guide. Edit the MDX pages in `content/docs`. The sidebar order is defined in `content/docs/meta.json`.

## Preview and validate the site

Use Node.js 22 or later. Run the setup and preview commands from the site repository.

```bash
npm ci
npm run types:check
npm run build
npm run dev
```

Open [the local preview](http://localhost:3000/docs). Stop the preview with Ctrl+C. Next.js writes build output to `.next` and Fumadocs generates collections in `.source`.

## Edit a guide

Start with the task readers need to complete. State the prerequisites, show the command or UI action, and tell readers what success looks like. Check examples and defaults against the owning code, command help, or API schema. Use `mn-docs` for the longer component references.

Keep existing page URLs when you update the sidebar. After editing, check the rendered pages, local links, and heading links. Run `git diff --check` before submitting.
