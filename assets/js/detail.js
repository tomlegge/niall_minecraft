/* ============================================================
   Build detail page renderer
   - Each detail HTML page just sets <body data-build-id="...">
   - This script reads it and fills in the page from builds.js
   ============================================================ */

(function () {
  const root = document.getElementById('build-detail');
  if (!root) return;

  const id = document.body.dataset.buildId;
  const b  = (window.BUILDS || []).find(x => x.id === id);
  const labels = window.CATEGORY_LABELS || {};

  if (!b) {
    root.innerHTML = `
      <a class="back-link" href="../index.html">← Back to builds</a>
      <div class="empty">
        <h2>Build not found</h2>
        <p>No build with id "${id}" — check builds.js.</p>
      </div>`;
    return;
  }

  // Title in <title>
  document.title = `${b.title} — My Minecraft Builds`;

  // Materials
  const materialsList = (b.materials || [])
    .map(m => `<li><span>${m.item}</span><span>${m.qty}</span></li>`)
    .join('') || '<li>—</li>';

  // Optional gallery
  const galleryHTML = (b.gallery && b.gallery.length)
    ? `<div class="info-card" style="grid-column:1 / -1;">
         <h3>More Shots</h3>
         <div class="gallery-strip">
           ${b.gallery.map(src => `<img src="${src}" alt="">`).join('')}
         </div>
       </div>`
    : '';

  root.innerHTML = `
    <a class="back-link" href="../index.html">← Back to builds</a>

    <div class="hero"><img src="${b.hero || b.thumb}" alt="${b.title}"></div>

    <h1>${b.title}</h1>
    <div class="meta-row">
      <span class="tag ${b.category}">${labels[b.category] || b.category}</span>
      ${b.dateBuilt ? `<span class="tag" style="background:#333;color:#fff;">${b.dateBuilt}</span>` : ''}
      ${b.world     ? `<span class="tag" style="background:#333;color:#fff;">${b.world}</span>` : ''}
    </div>

    <div class="info-grid">
      <div class="info-card">
        <h3>About this build</h3>
        <p>${b.description || ''}</p>
        ${b.notes ? `<p style="margin-top:10px;">${b.notes}</p>` : ''}
      </div>

      <div class="info-card">
        <h3>Materials</h3>
        <ul>${materialsList}</ul>
        ${b.coords ? `<h3 style="margin-top:14px;">Coordinates</h3><div class="coords">${b.coords}</div>` : ''}
      </div>

      ${galleryHTML}
    </div>
  `;
})();
