/* Renders content.js into the page. You shouldn't need to edit this file. */
(function () {
  const S = window.SITE || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ext = (url) => `href="${esc(url)}" target="_blank" rel="noopener"`;

  // Simple text bindings
  $$("[data-bind]").forEach((el) => { el.textContent = S[el.dataset.bind] ?? ""; });
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  $$("[data-mail]").forEach((el) => (el.href = "mailto:" + (S.email || "")));

  // Photo with graceful fallback
  $$("[data-photo]").forEach((img) => {
    img.addEventListener("error", () => img.closest(".arch, .kit-avatar")?.classList.add("no-photo"));
    img.src = S.photo || "";
    if (!S.photo) img.closest(".arch, .kit-avatar")?.classList.add("no-photo");
  });

  // Sun rays
  const rays = $(".sun .rays");
  if (rays) for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2, r1 = 52, r2 = i % 2 ? 70 : 84;
    rays.insertAdjacentHTML("beforeend", `<line x1="${100 + r1 * Math.cos(a)}" y1="${100 + r1 * Math.sin(a)}" x2="${100 + r2 * Math.cos(a)}" y2="${100 + r2 * Math.sin(a)}"/>`);
  }

  const render = {
    about: (d) => d.map((p) => `<p>${esc(p)}</p>`).join(""),
    aboutFacts: (d) => d.map((f) => `<li><span>${esc(f.label)}</span><strong>${esc(f.value)}</strong></li>`).join(""),
    tags: (d) => d.map((t) => `<li>${esc(t)}</li>`).join(""),
    platforms: () => (S.socials || []).map((s) => `
      <a class="platform${s.primary ? " primary" : ""}" ${ext(s.url)}>
        <i class="${esc(s.icon)}"></i>
        <span class="p-name">${esc(s.platform)}</span>
        <span class="p-handle">${esc(s.handle)}</span>
        ${s.followers ? `<span class="p-stat"><strong>${esc(s.followers)}</strong> followers</span>` : ""}
        ${s.avgViews ? `<span class="p-stat"><strong>${esc(s.avgViews)}</strong> avg. views</span>` : ""}
      </a>`).join(""),
    pillars: (d) => d.map((p) => `<li><i class="${esc(p.icon)}"></i><div><strong>${esc(p.title)}</strong><span>${esc(p.text)}</span></div></li>`).join(""),
    services: (d) => d.map((s) => `<li><strong>${esc(s.title)}</strong><span>${esc(s.text)}</span></li>`).join(""),
    partnerNames: () => (S.partnerGroups || []).flatMap((g) => g.items)
      .filter((p) => p.code !== "FREE").map((p) => `<li>${esc(p.name)}</li>`).join(""),
    featuredLinks: (d) => d.map((l) => `
      <a class="feature-link" ${ext(l.url)}>
        <i class="${esc(l.icon)}"></i>
        <span><strong>${esc(l.title)}</strong><small>${esc(l.note)}</small></span>
        <i class="fa-solid fa-arrow-right arrow"></i>
      </a>`).join(""),
    socials: (d) => d.map((s) => `
      <a class="social" ${ext(s.url)} aria-label="${esc(s.platform)}">
        <i class="${esc(s.icon)}"></i><span>${esc(s.platform)}</span>
      </a>`).join(""),
    footerSocials: () => (S.socials || []).map((s) => `<a ${ext(s.url)} aria-label="${esc(s.platform)}"><i class="${esc(s.icon)}"></i></a>`).join(""),
    partnerGroups: (d) => d.map((g) => `
      <div class="partner-group">
        <h3>${esc(g.group)}</h3>
        <div class="stamps">
          ${g.items.map((p) => `
            <a class="stamp" ${ext(p.url)}>
              <span class="stamp-inner">
                <span class="stamp-cat">${esc(p.category)}</span>
                <span class="stamp-name">${esc(p.name)}</span>
                ${p.code ? `<span class="stamp-code" data-code="${esc(p.code)}">${p.code === "FREE" ? "free download" : "code: " + esc(p.code)}</span>` : `<span class="stamp-go">shop the link →</span>`}
              </span>
            </a>`).join("")}
        </div>
      </div>`).join(""),
    shop: (d) => d.length
      ? d.map((item) => `
        <a class="product" ${ext(item.url)}>
          <span class="product-img">${item.image ? `<img src="${esc(item.image)}" alt="${esc(item.name)}" loading="lazy">` : ""}${item.tag ? `<em>${esc(item.tag)}</em>` : ""}</span>
          <span class="product-info"><strong>${esc(item.name)}</strong><span>${esc(item.price)}</span></span>
        </a>`).join("")
      : `<div class="shop-soon">
          <div class="tag-card"><i class="fa-solid fa-shirt"></i><span>merch</span></div>
          <div class="tag-card"><i class="fa-solid fa-palette"></i><span>overlays & emotes</span></div>
          <div class="tag-card"><i class="fa-solid fa-file-arrow-down"></i><span>digital goodies</span></div>
          <div class="soon-copy">
            <h3>Packing the bags…</h3>
            <p>Merch, stream overlays and digital downloads are on the way. Follow along on Twitch or join The Cosmic Forest to hear first.</p>
            <a class="btn btn-ghost" href="https://discord.gg/yZJDUx5bV8" target="_blank" rel="noopener"><i class="fa-brands fa-discord"></i> Join the Discord</a>
          </div>
        </div>`
  };

  $$("[data-list]").forEach((el) => {
    const key = el.dataset.list;
    const fn = render[key];
    if (fn) el.innerHTML = fn(S[key] || []);
  });

  // Total audience (only if follower numbers are filled in)
  const toNum = (v) => { if (!v) return 0; const m = String(v).trim().match(/^([\d.,]+)\s*([kKmM]?)/); if (!m) return 0; const n = parseFloat(m[1].replace(/,/g, "")); return m[2].toLowerCase() === "m" ? n * 1e6 : m[2].toLowerCase() === "k" ? n * 1e3 : n; };
  const total = (S.socials || []).reduce((t, s) => t + toNum(s.followers), 0);
  if (total > 0) {
    const fmt = total >= 1e6 ? (total / 1e6).toFixed(1) + "M" : total >= 1e3 ? (total / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : String(total);
    $("[data-total-value]").textContent = fmt + ((S.socials || []).some((s) => String(s.followers || "").includes("+")) ? "+" : "");
    $("[data-total]").hidden = false;
  }

  // Audience bars (only if filled in)
  const aud = S.audience || {};
  const blocks = [["gender", "Gender"], ["age", "Age"], ["countries", "Top countries"]].filter(([k]) => Array.isArray(aud[k]) && aud[k].length);
  if (blocks.length) {
    $("[data-audience] .audience-grid").innerHTML = blocks.map(([k, label]) => `
      <div><h5>${label}</h5>${aud[k].map((r) => `<div class="bar"><span>${esc(r.label)}</span><div><i style="width:${Math.min(100, +r.pct || 0)}%"></i></div><b>${esc(r.pct)}%</b></div>`).join("")}</div>`).join("");
    $("[data-audience]").hidden = false;
  }

  // Copy discount codes on click (still opens the link)
  document.addEventListener("click", (e) => {
    const code = e.target.closest("[data-code]");
    if (code && code.dataset.code !== "FREE" && navigator.clipboard) {
      navigator.clipboard.writeText(code.dataset.code).then(() => {
        const old = code.textContent; code.textContent = "copied!"; setTimeout(() => (code.textContent = old), 1400);
      }).catch(() => {});
    }
  });

  // Print media kit only
  $("[data-print]")?.addEventListener("click", () => {
    document.body.classList.add("print-kit");
    window.print();
    setTimeout(() => document.body.classList.remove("print-kit"), 500);
  });

  // Mobile nav
  const toggle = $(".nav-toggle"), nav = $(".nav");
  toggle?.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", open); });
  $$(".nav-links a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }));

  // Reveal on scroll
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 }) : null;
  $$(".section").forEach((s) => (io ? io.observe(s) : s.classList.add("in")));
})();
