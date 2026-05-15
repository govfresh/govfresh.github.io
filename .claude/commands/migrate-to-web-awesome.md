# Migrate to Web Awesome

Migrate govfresh.github.io from Bootstrap to Web Awesome (web components). All files stored locally.

Reference: https://webawesome.com
Current Bootstrap assets: `assets/bootstrap/`
Target Web Awesome assets: `assets/web-awesome/`

This migration is done in phases. Run only the phase requested by the user.

---

## Phase 0 — Download Web Awesome locally

1. Go to https://webawesome.com and find the direct download package
2. Download the latest Web Awesome release (CSS + JS loader + assets)
3. Place files in `assets/web-awesome/`:
   - `assets/web-awesome/css/web-awesome.css` (or equivalent)
   - `assets/web-awesome/js/web-awesome-loader.js` (or equivalent)
   - Any icon/font assets
4. Update [_includes/style.html](_includes/style.html): replace Bootstrap `<link>` with Web Awesome CSS `<link>`
5. Update [_includes/js.html](_includes/js.html): replace all Bootstrap CDN `<script>` tags with local Web Awesome loader `<script>`
6. Remove `assets/bootstrap/` directory
7. Build and confirm no CSS/JS load errors

---

## Phase 1 — Replace Bootstrap JS components

Files to update: [_includes/nav.html](_includes/nav.html), [_includes/js.html](_includes/js.html), any file using `data-bs-*` attributes.

1. Audit all `data-bs-*` usage:
```
grep -rn "data-bs-" _includes/ _layouts/
```

2. Replace each Bootstrap JS component with its Web Awesome equivalent:
   - Navbar collapse/toggle → `<wa-dropdown>` or `<wa-nav>`
   - Dark mode toggle (`data-bs-theme`) → Web Awesome theming (`wa-theme` or CSS custom properties)
   - Dropdowns → `<wa-dropdown>`
   - Modals → `<wa-dialog>`

3. Update theme toggle in [_includes/js.html](_includes/js.html) — remove `data-bs-theme` logic, replace with Web Awesome theme switching

4. Build and test navbar collapse, dark mode toggle, and any dropdowns

---

## Phase 2 — Replace Bootstrap CSS components

Audit Bootstrap component classes in use:
```
grep -rn "class=\"btn\|class=\"card\|class=\"badge\|class=\"alert\|class=\"tab" _includes/ _layouts/
```

Replace each with Web Awesome equivalents in every layout and include file:

| Bootstrap | Web Awesome |
|---|---|
| `<div class="card"><div class="card-body">` | `<wa-card>` |
| `<button class="btn btn-primary">` | `<wa-button variant="brand">` |
| `<span class="badge">` | `<wa-badge>` |
| `<div class="alert">` | `<wa-alert>` |
| `<ul class="nav nav-tabs">` | `<wa-tab-group>` |

Work through layouts one at a time. Build after each file to catch regressions.

---

## Phase 3 — Replace the grid system

This is the largest phase. Bootstrap's `container / row / col-*` classes have no Web Awesome equivalent — they must be replaced with CSS Grid or Flexbox in [css/style.css](css/style.css).

1. Audit all grid class usage:
```
grep -rn "col-\|class=\"row\|class=\"container" _includes/ _layouts/ | sort | uniq -c | sort -rn
```

2. Define replacement layout classes in `css/style.css`:
   - `.wa-container` → centered max-width wrapper
   - `.wa-grid` → CSS Grid row
   - Column widths via `grid-template-columns` or named classes

3. Replace Bootstrap grid classes in each layout file, working one layout at a time:
   - `_layouts/default.html`
   - `_layouts/home.html`
   - `_layouts/page.html`
   - All remaining layouts in `_layouts/`
   - All grid usage in `_includes/`

4. Build and visually verify layout at mobile, tablet, and desktop widths after each file

---

## Phase 4 — Replace utility classes

Audit Bootstrap utility class usage:
```
grep -rn "d-flex\|d-none\|d-sm-\|d-md-\|d-lg-\|mb-\|mt-\|ms-\|me-\|p-\|px-\|py-\|pt-\|pb-\|align-items-\|justify-content-\|text-center\|text-end\|fw-\|fs-" _includes/ _layouts/ | wc -l
```

For each utility type, either:
- Add a direct CSS equivalent to `css/style.css`, or
- Remove the class if it duplicates a Web Awesome default

Work file by file. Build after each.

---

## Phase 5 — Final cleanup and verification

1. Confirm no Bootstrap references remain:
```
grep -rn "bootstrap\|col-\|data-bs-" _includes/ _layouts/ css/ assets/
```

2. Remove `assets/bootstrap/` if not already done

3. Update [_includes/style.html](_includes/style.html) and [_includes/js.html](_includes/js.html) to remove any remaining Bootstrap references

4. Update CSP meta tag in [_includes/header.html](_includes/header.html) — remove `cdn.jsdelivr.net` from `script-src` if Bootstrap CDN is fully gone

5. Full build and visual test of every layout type:
   - Home, default, page, thoughts, signal, briefs, demos, dm, research, books, events, orgs, people, labs, papers, topics

6. Summarize: files changed, classes replaced, anything left to address
