# AGENTS.md

Static portfolio site (Spanish content) for Carlos Leyva Proenza, built with vanilla HTML/CSS/JS. No build step, no package manager, no tests, no CI.

## Run & verify

- There is nothing to install or build. Open `index.html` directly in a browser, or serve the folder with any static server (e.g. `npx serve`).
- Verification is manual: check the page in a browser and the DevTools console. There is no lint/typecheck/test command.

## Layout

- Exactly 4 tracked files at the root: `index.html`, `script.js`, `styles.css`, `i18n.js`. All sections (hero, acerca-de, pilares, proyectos, publicaciones, stack, contacto) live in `index.html` as `<section id="...">` blocks.
- `.mimocode/` is local agent tooling (contains `node_modules`) and is **not** tracked by git. There is no `.gitignore`, so always stage files by name — never `git add -A` / `git add .`.

## Conventions

- All UI copy and git commit messages are in **Spanish** — match this for new content and commits.
- Styling uses CSS custom properties (design tokens) in `:root`, overridden by `[data-theme="dark"]`. Dark mode is persisted to `localStorage` as `theme`; `script.js` sets `data-theme` on `<html>`.
- All accent color comes from a **single unified accent** (`--accent`, `--accent-hover`, `--accent-bg`, `--accent-contrast`, defined in `:root` and redefined in `[data-theme="dark"]`). The `.cat-medicina`/`.cat-tech`/`.cat-educacion` and `.pilar-*` classes still exist in the HTML as semantic labels but no longer drive any colors — style accents through the token, never per-category colors.
- The hero signature is `.hero-signature` (decorative SVG growth-curve, `aria-hidden`, no `data-i18n`); it draws via CSS animation gated behind `prefers-reduced-motion`.
- Accessibility is a working convention, preserve it: skip link, `:focus-visible` outline, `prefers-reduced-motion` handling (CSS disables fade-in and the signature; `script.js` disconnects the observer).
- External assets load from CDNs (Google Fonts: Fraunces display / Inter body / JetBrains Mono for eyebrows and data labels; Phosphor Icons via unpkg) — there are no local fallbacks, and icons have no offline copy. Don't vendor them unless asked.

## `i18n.js` wiring (bilingual ES/EN)

- `i18n.js` loads before `script.js` (end of body) and defines the `I18N` dictionary plus `applyLang(lang)`. It runs once on load.
- Default language: browser detection (`navigator.language` starts with `es` → Spanish, else English); manual choice persists in `localStorage` as `lang`. No `fetch`/JSON — the page must keep working from `file://`.
- Markup conventions: `data-i18n` → `textContent`, `data-i18n-html` → `innerHTML` (for strings with `<strong>`/`<br>`; values are trusted static strings), `data-i18n-aria` → `aria-label`. `data-lang-meta="title|desc"` updates meta/og/twitter content tags.
- In English mode the `.pub-list` (publications) is hidden and only the `.pub-en-cta` ORCID block shows — handled by `applyLang` via the `hidden` attribute. Don't translate publication entries; they're ES-only citations.
- To translate new UI text: add the key to both `es` and `en` in `I18N` and tag the element. Untranslated elements keep their Spanish markup.
- `script.js` must not run before `i18n.js` — the lang-toggle handler calls `applyLang`, and the email/theme blocks must not be re-run on language switch.

## `script.js` wiring (non-obvious)

- The email is intentionally obfuscated by splitting `user` + `domain` — keep that pattern; don't collapse it into a plain `mailto:` string.
- Fade-in-on-scroll only applies to elements matching the `fadeElements` selector list (`.pilar, .project-card, .stack-group, .hero-actions, .contacto-links`). To animate a new block, add its selector there.
- Scroll-spy automatically observes every `section[id]`; adding a nav link to `.nav-links` in `index.html` is all that's needed to include a section in the header.
- Mobile menu: `#menu-toggle` + `#nav-links` — at `≤768px` the nav becomes a full-screen overlay (`.open` class); closes on link click, Escape, or viewport growth. `aria-expanded` must stay in sync.
- Project cards: arrow links carry `data-project` and get real URLs from the `projectLinks` map in `script.js`. New project → add an entry there and a `data-project` value on the link.
