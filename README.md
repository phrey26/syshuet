# SYS.HUET Portfolio

A static portfolio built with HTML, Tailwind CSS v4, and vanilla JavaScript.

## Development

1. Install dependencies with `npm install`.
2. Run `npm run dev` to watch the HTML and JavaScript in `src/` and rebuild the CSS as you work.
3. Open `src/index.html` with your preferred local static server (for example, VS Code Live Server).

## Production

Run `npm run build` to generate minified `src/css/output.css`, then serve or deploy the contents of `src/`.

Edit the theme in `src/css/input.css` and utility classes in the HTML or JavaScript. `src/css/output.css` is generated; rebuild it instead of editing it directly.

## GitHub Pages

In the repository's Settings → Pages, set the publishing source to **GitHub Actions**. Commit and push the changes to `main`. The workflow in `.github/workflows/pages.yml` installs dependencies, builds Tailwind CSS, and publishes `src/` as the site root. Check the repository's Actions tab for deployment results.

## JavaScript components

`src/js/main.js` loads the matching modules in `src/js/core/`, `src/js/sections/`, and `src/js/effects/` based on the elements present on each page. Each module exports an idempotent `hydrate()` function that attaches behavior to existing HTML. This is progressive enhancement of static HTML; there is no framework or server-rendered component state.

`core/` contains navigation and header scrolling. `sections/` contains contact submission, contact links, project modals, and project filters. `effects/` contains reveal animations, typing, and loading dots. Add new behavior in its own module and register its selector and import in `main.js`. Serve the site through Live Server so browser ES modules can load.
