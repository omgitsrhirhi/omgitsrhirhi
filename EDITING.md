# Editing omgitsrhirhi.com

Everything you'll want to change lives in **`content.js`** — open it on GitHub, click the ✏️ pencil, edit, and **Commit changes**. The site updates in about a minute.

| What | Where in `content.js` |
|---|---|
| Tagline, location, email | top of the file |
| About me paragraphs & quick facts | `about`, `aboutFacts` |
| Follower counts / avg views (media kit) | `followers`, `avgViews` on each item in `socials` — e.g. `"12.4K"`. Total audience appears automatically once any are filled in. |
| Audience gender / age / countries | `audience` — uncomment the examples and put in your real percentages |
| Content pillars & ways to work together | `pillars`, `services`, `ratesNote` |
| Partners & affiliate links | `partnerGroups` — add/remove items, set `code` to show a discount code |
| Shop items | `shop` — while empty, a "coming soon" teaser shows |

Leave anything as `null` and it hides itself.

## Photos
- **Your photo:** upload a portrait image named `rhirhi.jpg` into the `assets` folder (Add file → Upload files). Tall/portrait crops look best in the arch.
- **Shop images:** upload into `assets/shop/` and reference them like `"assets/shop/tee.jpg"`.

## Files
- `index.html` — page structure
- `styles.css` — colours, fonts, layout (colours are at the very top under `:root`)
- `main.js` — turns `content.js` into the page (no need to touch)
- `CNAME` — tells GitHub Pages to use omgitsrhirhi.com

## Hosting (one-time setup)
1. Repo **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
2. At your domain registrar, add DNS records for `omgitsrhirhi.com`:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `omgitsrhirhi.github.io`
3. Back in **Settings → Pages**, confirm the custom domain shows `omgitsrhirhi.com`, wait for the DNS check, then tick **Enforce HTTPS**.
