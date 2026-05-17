/* ============================================================
   Gallery rendering + category filter
   ============================================================ */

(function () {
  const gridEl   = document.getElementById('build-grid');
  const filterEl = document.getElementById('filter-bar');
  const countEl  = document.getElementById('build-count');
  if (!gridEl) return;

  const builds = window.BUILDS || [];
  const labels = window.CATEGORY_LABELS || { all: 'All' };

  // Build filter buttons from the categories that actually exist
  const presentCats = ['all'].concat(
    Array.from(new Set(builds.map(b => b.category)))
      .sort((a, b) => a.localeCompare(b))
  );

  filterEl.innerHTML = presentCats.map((cat, i) =>
    `<button class="filter-btn${i === 0 ? ' active' : ''}" data-cat="${cat}">${labels[cat] || cat}</button>`
  ).join('');

  // Render a card
  function cardHTML(b) {
    return `
      <article class="build-card" data-cat="${b.category}">
        <a href="builds/${b.id}.html">
          <div class="thumb">
            <img src="${b.thumb}" alt="${b.title}" loading="lazy">
          </div>
          <div class="body">
            <h3>${b.title}</h3>
            <p>${b.description}</p>
            <div class="meta">
              <span class="tag ${b.category}">${labels[b.category] || b.category}</span>
            </div>
          </div>
        </a>
      </article>`;
  }

  function render(cat) {
    const filtered = cat === 'all' ? builds : builds.filter(b => b.category === cat);
    if (filtered.length === 0) {
      gridEl.innerHTML = `<div class="empty"><p>No builds in this category yet.</p></div>`;
    } else {
      gridEl.innerHTML = filtered.map(cardHTML).join('');
    }
    if (countEl) {
      countEl.textContent = filtered.length === 1
        ? '1 build'
        : `${filtered.length} builds`;
    }
  }

  // Wire up filter clicks
  filterEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.cat);
  });

  render('all');
})();
