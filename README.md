# My Minecraft Builds

A pixelated, Minecraft-themed website that catalogues my builds. Static HTML, CSS and JS — no build step, no framework. Designed to be hosted on **GitHub Pages**.

---

## What's in here

```
.
├── index.html              # Gallery homepage with category filters
├── about.html              # About-me page
├── builds/                 # One HTML file per build (auto-rendered from builds.js)
│   ├── stone-keep.html
│   ├── auto-wheat-farm.html
│   └── ...
├── assets/
│   ├── css/style.css       # The whole pixelated theme
│   ├── js/builds.js        # ← edit this to add new builds
│   ├── js/main.js          # Gallery + filter logic
│   ├── js/detail.js        # Detail-page renderer
│   └── images/             # SVG placeholders (swap with real screenshots)
├── .nojekyll               # Tells GitHub Pages not to run Jekyll
└── README.md
```

---

## Deploy to GitHub Pages

1. Push this folder to your GitHub repo.
   ```bash
   git init
   git add .
   git commit -m "Initial Minecraft builds site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub, open **Settings → Pages**.
3. Under *Build and deployment*, set:
   - Source: **Deploy from a branch**
   - Branch: **main** / Folder: **/(root)**
4. Save. GitHub gives you a URL like `https://<your-username>.github.io/<your-repo>/` — usually live in under a minute.

All internal links are *relative*, so the site works equally well at the root (`<username>.github.io`) or under a subpath (`<username>.github.io/<repo>/`).

---

## Adding a new build

1. Drop a screenshot into `assets/images/` (anything reasonable — JPG, PNG, WebP).
2. Open `assets/js/builds.js` and append an entry to the `BUILDS` array:
   ```js
   {
     id: "spawn-portal",                    // becomes builds/spawn-portal.html
     title: "Nether Portal at Spawn",
     category: "other",                     // castle | redstone | farm | house | pixelart | other
     thumb: "assets/images/spawn-portal.jpg",
     hero:  "assets/images/spawn-portal.jpg",
     description: "Obsidian arch with a roof and torches lighting the way.",
     materials: [
       { item: "Obsidian", qty: "14" },
       { item: "Cobblestone", qty: "80" }
     ],
     coords: "X: 0  Y: 64  Z: 0",
     world: "Survival, 1.20.4",
     dateBuilt: "May 2026",
     notes: "Optional extra context."
   }
   ```
3. Create the matching detail HTML file. The easiest way is to copy `builds/stone-keep.html` and change one line:
   ```html
   <body data-build-id="spawn-portal">
   ```
4. Commit and push — GitHub Pages redeploys automatically.

If you forget step 3, the site still shows the build in the gallery, but clicking it would 404. You can also bulk-generate detail pages by copying the loop in the deploy notes below.

---

## Bulk-generate detail pages (optional)

If you have a lot of builds, run this from the repo root to regenerate all detail pages from the IDs in `builds.js`:

```bash
ids=$(node -e "require('./assets/js/builds.js'); console.log(BUILDS.map(b=>b.id).join(' '))" 2>/dev/null \
      || grep -oE 'id:\s*"[^"]+"' assets/js/builds.js | sed 's/.*"\(.*\)".*/\1/')

for id in $ids; do
  out="builds/${id}.html"
  [ -f "$out" ] && continue
  sed "s/data-build-id=\"[^\"]*\"/data-build-id=\"${id}\"/" builds/stone-keep.html > "$out"
done
```

---

## Future-feature ideas (not built yet)

- **Build detail lightbox** for the screenshot gallery.
- **Search bar** that filters by title/description as you type.
- **World map** using Leaflet + a Minecraft world render (e.g. from Unmined) — clickable pins for each build's coordinates.
- **Devlog/blog** section using Markdown files rendered with [marked](https://marked.js.org/).
- **Build timeline** — a chronological view by `dateBuilt`.
- **Featured build of the week** banner on the homepage.
- **Visitor counter / guestbook** using a free service like Goatcounter or a Formspree-backed comments form.
- **Light/dark toggle** (currently always dark — could add a "day mode" with sky-blue backgrounds).
- **RSS feed** for the devlog so people can subscribe.
- **OG/Twitter cards** per build so links unfurl nicely on Discord/social.
- **Schematic downloads** — link to Litematica `.litematic` or WorldEdit `.schem` files for builds you want to share.

---

Not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang Synergies AB.
