/* ==========================================================================
   SOFTMACO — SPA Application Engine
   Blueprint dark theme | Space Grotesk / IBM Plex Mono / Inter
   ========================================================================== */

/* ── ROUTER ── */
const ROUTES = {};
let currentPage = '';

function navigate(page, params = {}) {
  window.location.hash = params.id ? `#/${page}/${params.id}` : `#/${page}`;
}

function addRoute(name, fn) { ROUTES[name] = fn; }

function handleRoute() {
  const hash = window.location.hash.replace('#/', '') || 'home';
  const parts = hash.split('/');
  const page = parts[0];
  const id = parts[1] || null;

  // active nav
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('onclick') && a.getAttribute('onclick').includes(`'${page}'`)) a.classList.add('active');
  });

  currentPage = page;
  const params = id ? { id } : {};

  if (page === 'products' && id) {
    ROUTES['product-detail'] ? ROUTES['product-detail']({ id }) : ROUTES['home']({});
  } else if (page === 'team' && id) {
    ROUTES['team-detail'] ? ROUTES['team-detail']({ id }) : ROUTES['home']({});
  } else if (page === 'blog' && id) {
    ROUTES['blog-detail'] ? ROUTES['blog-detail']({ id }) : ROUTES['home']({});
  } else if (ROUTES[page]) {
    ROUTES[page](params);
  } else {
    ROUTES['home']({});
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(initReveal, 120);
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
  registerRoutes();
  handleRoute();
});

/* ── SCROLL REVEAL ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ── TOAST ── */
function showToast(msg, color = 'var(--emerald)') {
  const c = document.getElementById('toasts');
  const t = document.createElement('div');
  t.className = 'toast';
  t.style.borderColor = color;
  t.innerHTML = `<span style="color:${color}">✓</span> ${msg}`;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s ease'; setTimeout(() => t.remove(), 300); }, 4000);
}

/* ── HELPERS ── */
const app = () => document.getElementById('app');
const setTitle = (t) => { document.title = `${t} — Softmaco`; };

function H(html) {
  const el = app();
  el.innerHTML = html;
  // re-create app animation
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = '';
}

/* ── RENDER HERO DIAGRAM ── */
function heroDiagram() {
  return `
  <div class="diagram-wrap">
    <div class="diagram-frame">
      <div class="corner tl"></div>
      <div class="corner br"></div>
      <svg viewBox="0 0 400 400">
        <path class="node-path delay1" d="M 200 200 L 90 90" />
        <path class="node-path delay2" d="M 200 200 L 320 90" />
        <path class="node-path delay3" d="M 200 200 L 90 320" />
        <path class="node-path delay4" d="M 200 200 L 320 320" />
        <circle class="node-dot" cx="90" cy="90" r="30" />
        <text class="node-label" x="90" y="94" text-anchor="middle">AI</text>
        <circle class="node-dot" cx="320" cy="90" r="30" />
        <text class="node-label" x="320" y="94" text-anchor="middle">MOBILE</text>
        <circle class="node-dot" cx="90" cy="320" r="30" />
        <text class="node-label" x="90" y="324" text-anchor="middle">WEB</text>
        <circle class="node-dot" cx="320" cy="320" r="30" />
        <text class="node-label" x="320" y="324" text-anchor="middle">CLOUD</text>
        <circle class="node-core" cx="200" cy="200" r="42" />
        <text class="node-label core" x="200" y="197" text-anchor="middle">SOFT-</text>
        <text class="node-label core" x="200" y="211" text-anchor="middle">MACO</text>
      </svg>
    </div>
  </div>`;
}

/* ── BADGE HELPER ── */
function badge(status) {
  if (status === 'Live') return `<span class="badge badge-live">Live</span>`;
  if (status === 'Beta') return `<span class="badge badge-beta">Beta</span>`;
  return `<span class="badge badge-dev">${status}</span>`;
}

/* ═══════════════════════════════════════════════════════
   ROUTE REGISTRATIONS
   ═══════════════════════════════════════════════════════ */
function registerRoutes() {

  /* ──────────── HOME ──────────── */
  addRoute('home', () => {
    setTitle('Software, engineered like it matters.');
    const D = SOFTMACO_DATA;
    const featProds = D.products.slice(0, 3);
    H(`
    <main>
      <!-- HERO -->
      <section class="hero">
        <div class="wrap hero-grid">
          <div>
            <div class="eyebrow">SOFTMACO — AI-FIRST SOFTWARE STUDIO</div>
            <h1>Software, <span class="hl">engineered</span> like it matters.</h1>
            <p>${D.company.subtagline}</p>
            <div class="hero-actions">
              <a onclick="navigate('products')" class="btn btn-primary">Explore products</a>
              <a onclick="navigate('contact')" class="btn btn-ghost">Start your project →</a>
            </div>
            <div class="hero-note">
              <span><span class="dot"></span>Custom builds, not templates</span>
              <span><span class="dot"></span>AI woven in from day one</span>
              <span><span class="dot"></span>${D.company.stats.years} years of craft</span>
            </div>
          </div>
          ${heroDiagram()}
        </div>
      </section>

      <!-- TRUSTED BY -->
      <section class="trusted" style="padding-top:0;padding-bottom:56px;">
        <div class="wrap">
          <div class="trusted-label mono">TRUSTED BY TEAMS BUILDING SOMETHING REAL</div>
          <div class="logo-row">
            <span>Apex Global Logistics</span>
            <span>Nova Digital Bank</span>
            <span>Savor Hospitality</span>
            <span>OmniTech Ventures</span>
            <span>CoreFintech Labs</span>
            <span>Meridian</span>
          </div>
        </div>
      </section>

      <!-- SERVICES PREVIEW -->
      <section>
        <div class="wrap">
          <div class="section-head reveal">
            <div class="eyebrow">WHAT WE BUILD</div>
            <h2>One team, every layer of the stack.</h2>
            <p>From first wireframe to the server it runs on — we design, build, and ship so you work with one accountable partner.</p>
          </div>
          <div class="g3">
            ${D.services.slice(0, 6).map(s => `
            <div class="card reveal">
              <div class="service-icon">${s.icon}</div>
              <h3>${s.title}</h3>
              <p>${s.summary.substring(0, 100)}…</p>
              <a onclick="navigate('services')" class="card-link">Learn more →</a>
            </div>`).join('')}
          </div>
        </div>
      </section>

      <!-- PRODUCTS PREVIEW -->
      <section style="background: var(--panel-3); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);">
        <div class="wrap">
          <div class="section-head reveal">
            <div class="eyebrow">OUR PRODUCTS</div>
            <h2>We don't just build for clients. We build our own.</h2>
            <p>Every Softmaco product is a live proving ground — shipped, used, and iterated in the open.</p>
          </div>
          <div class="g3">
            ${featProds.map(p => `
            <div class="card product-card reveal">
              <div class="product-top">
                ${badge(p.status)}
                <div class="product-logo" style="margin-top:14px;">${p.logo}</div>
                <div class="product-cat">${p.category}</div>
                <h3>${p.name}</h3>
                <p class="card-desc">${p.description.substring(0, 110)}…</p>
              </div>
              <div class="product-bottom">
                <span class="product-year mono">${p.launchDate}</span>
                <a onclick="navigate('products', {id:'${p.id}'})" class="product-cta">Learn more →</a>
              </div>
            </div>`).join('')}
          </div>
          <div style="text-align:center;margin-top:40px;" class="reveal">
            <a onclick="navigate('products')" class="btn btn-ghost btn-lg">View all products →</a>
          </div>
        </div>
      </section>

      <!-- PROCESS -->
      <section>
        <div class="wrap">
          <div class="section-head reveal">
            <div class="eyebrow">HOW WE WORK</div>
            <h2>A process with no guesswork.</h2>
            <p>Six stages, one continuous thread — you always know exactly where your project stands.</p>
          </div>
          <div class="process-rail">
            ${['Discovery','Design','Development','Testing','Deployment','Support'].map((s,i) => `
            <div class="process-step reveal">
              <div class="process-num mono">0${i+1}</div>
              <h4>${s}</h4>
              <p>${['Map the problem before a line of code.','Polished UI reviewed at every stage.','Clean, modular code built to extend.','Manual and automated checks.','Careful, monitored releases.','We stay on after launch.'][i]}</p>
            </div>`).join('')}
          </div>
        </div>
      </section>

      <!-- WHY SOFTMACO -->
      <section style="border-top: 1px solid var(--line);">
        <div class="wrap why-layout">
          <div class="reveal">
            <div class="eyebrow">WHY SOFTMACO</div>
            <h2 style="margin-top:16px;font-size:clamp(26px,3vw,34px);">Small enough to care. Disciplined enough to scale.</h2>
            <p style="color:var(--muted);margin-top:14px;">We keep teams small and senior so nothing gets lost between intent and shipped code.</p>
            <ul class="why-list">
              <li><span class="tick">✓</span>One accountable team across design and engineering</li>
              <li><span class="tick">✓</span>AI built in where it earns its place — never bolted on</li>
              <li><span class="tick">✓</span>Transparent pricing, no hidden fees</li>
              <li><span class="tick">✓</span>Products we run ourselves, so we feel what we ship</li>
            </ul>
          </div>
          <div class="stat-grid reveal">
            <div class="stat-cell"><div class="stat-num">${D.company.stats.years}<span class="unit">+</span></div><div class="stat-label">Years building</div></div>
            <div class="stat-cell"><div class="stat-num">${D.company.stats.projects}<span class="unit"></span></div><div class="stat-label">Projects shipped</div></div>
            <div class="stat-cell"><div class="stat-num">${D.company.stats.countries}<span class="unit"></span></div><div class="stat-label">Countries served</div></div>
            <div class="stat-cell"><div class="stat-num">98<span class="unit">%</span></div><div class="stat-label">Client satisfaction</div></div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS -->
      <section>
        <div class="wrap">
          <div class="section-head reveal">
            <div class="eyebrow">FROM PEOPLE WE'VE BUILT WITH</div>
            <h2>What it's like to work with us.</h2>
          </div>
          <div class="g3">
            ${D.testimonials.map(t => `
            <div class="card testi-card reveal">
              <blockquote>"${t.quote}"</blockquote>
              <div class="testi-who">
                <div class="testi-avatar"></div>
                <div>
                  <div class="testi-name">${t.author}</div>
                  <div class="testi-role">${t.role} — ${t.company}</div>
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section style="padding:100px 0;">
        <div class="wrap">
          <div class="cta-box reveal">
            <div class="eyebrow" style="justify-content:center;margin-bottom:18px;">LET'S BUILD</div>
            <h2>Ready to build something that actually holds up?</h2>
            <p>Tell us what you're building. We'll tell you honestly whether we're the right team.</p>
            <div class="cta-actions">
              <a onclick="navigate('contact')" class="btn btn-primary btn-lg">Start your project</a>
              <a onclick="navigate('products')" class="btn btn-ghost btn-lg">Explore products</a>
            </div>
          </div>
        </div>
      </section>
    </main>`);
  });

  /* ──────────── PRODUCTS HUB ──────────── */
  addRoute('products', () => {
    setTitle('Products');
    H(`
    <main style="padding-top:100px;">
      <div class="wrap">
        <div class="section-head center reveal" style="margin-bottom:48px;">
          <div class="eyebrow" style="justify-content:center;">SOFTMACO VENTURE PRODUCTS</div>
          <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Software we build and run ourselves.</h1>
          <p>Every product is a live proving ground for how we work — shipped, iterated, and openly used by real businesses.</p>
        </div>

        <div class="filter-bar reveal">
          <div class="filter-pills" id="cat-filters">
            <button class="filter-pill active" data-cat="All">All</button>
            <button class="filter-pill" data-cat="AI">AI</button>
            <button class="filter-pill" data-cat="SaaS">SaaS</button>
            <button class="filter-pill" data-cat="Mobile">Mobile</button>
            <button class="filter-pill" data-cat="Enterprise">Enterprise</button>
            <button class="filter-pill" data-cat="Internal Tools">Internal Tools</button>
          </div>
          <div class="search-wrap">
            <span class="search-icon">⌕</span>
            <input type="text" id="prod-search" class="search-input" placeholder="Search products…">
          </div>
        </div>

        <div class="g3" id="products-grid"></div>
      </div>
    </main>`);

    let cat = 'All', q = '';
    function render() {
      const filtered = SOFTMACO_DATA.products.filter(p => {
        const mc = cat === 'All' || p.category.toLowerCase() === cat.toLowerCase();
        const mq = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
        return mc && mq;
      });
      const g = document.getElementById('products-grid');
      if (!g) return;
      if (!filtered.length) {
        g.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--muted);">No products match. <button onclick="navigate('contact')" class="btn btn-ghost btn-sm" style="margin-left:12px;">Request custom build</button></div>`;
        return;
      }
      g.innerHTML = filtered.map(p => `
      <div class="card product-card">
        <div class="product-top">
          ${badge(p.status)}
          <div class="product-logo" style="margin-top:14px;">${p.logo}</div>
          <div class="product-cat">${p.category}</div>
          <h3>${p.name}</h3>
          <p class="card-desc">${p.description}</p>
          <div class="tech-row" style="margin-top:14px;">
            ${p.techStack.frontend.slice(0,3).map(t=>`<span class="tech-pill">${t}</span>`).join('')}
          </div>
        </div>
        <div class="product-bottom">
          <span class="product-year mono">${p.launchDate}</span>
          <a onclick="navigate('products',{id:'${p.id}'})" class="product-cta">Learn more →</a>
        </div>
      </div>`).join('');
    }
    render();
    document.querySelectorAll('#cat-filters .filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#cat-filters .filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        cat = btn.dataset.cat;
        render();
      });
    });
    document.getElementById('prod-search').addEventListener('input', e => { q = e.target.value.toLowerCase(); render(); });
  });

  /* ──────────── PRODUCT DETAIL ──────────── */
  addRoute('product-detail', ({ id }) => {
    const p = SOFTMACO_DATA.products.find(x => x.id === id || x.slug === id) || SOFTMACO_DATA.products[0];
    setTitle(p.name);
    const related = SOFTMACO_DATA.products.filter(x => x.id !== p.id).slice(0, 2);
    H(`
    <main style="padding-top:100px;">
      <div class="wrap">
        <div class="breadcrumb reveal">
          <a onclick="navigate('products')">Products</a>
          <span class="sep">/</span>
          <span class="current">${p.name}</span>
        </div>

        <div class="product-hero reveal">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:20px;">
            <div>
              <div style="font-size:3rem;margin-bottom:12px;">${p.logo}</div>
              <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:8px;">
                <h1 style="font-size:clamp(28px,4vw,42px);">${p.name}</h1>
                ${badge(p.status)}
              </div>
              <p style="color:var(--muted);font-size:11px;font-family:'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:0.08em;">${p.category} · Launched ${p.launchDate}</p>
              <p style="font-size:1.2rem;color:var(--text);margin-top:16px;max-width:640px;">${p.tagline}</p>
            </div>
            <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:flex-start;">
              <a href="${p.website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
                Visit official site ↗
              </a>
              <a onclick="navigate('contact')" class="btn btn-ghost btn-lg">Book a demo</a>
            </div>
          </div>
          <img src="${p.screenshots[0]}" alt="${p.name}" class="product-detail-img" onerror="this.style.display='none'">
        </div>

        <div class="g2" style="margin-bottom:48px;">
          <div class="card reveal">
            <div class="eyebrow" style="margin-bottom:16px;">ABOUT</div>
            <p style="color:var(--muted);line-height:1.75;">${p.fullDescription}</p>
            <div style="margin-top:24px;">
              <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;text-transform:uppercase;color:var(--muted-2);margin-bottom:10px;">Target Audience</div>
              <div class="tech-row">
                ${p.targetAudience.map(t=>`<span class="tech-pill" style="color:var(--azure);border-color:var(--azure-soft);">${t}</span>`).join('')}
              </div>
            </div>
          </div>
          <div class="card reveal" style="border-color:var(--line-strong);">
            <div class="eyebrow" style="margin-bottom:16px;">PROBLEM & BENEFITS</div>
            <div style="background:rgba(240,76,108,0.08);border-left:3px solid var(--rose);padding:12px 16px;border-radius:var(--radius-sm);margin-bottom:20px;font-size:13.5px;color:#fca5a5;">
              ${p.problemSolved}
            </div>
            <ul style="display:flex;flex-direction:column;gap:12px;">
              ${p.keyBenefits.map(b=>`<li style="display:flex;gap:10px;font-size:14px;color:var(--text);"><span style="color:var(--azure);flex-shrink:0;">✓</span>${b}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Features -->
        <div style="margin-bottom:48px;">
          <h2 class="reveal" style="font-size:clamp(22px,3vw,30px);margin-bottom:28px;">Core capabilities</h2>
          <div class="g3">
            ${p.features.map(f=>`
            <div class="card reveal">
              <div class="service-icon">${f.icon}</div>
              <h3>${f.title}</h3>
              <p>${f.description}</p>
            </div>`).join('')}
          </div>
        </div>

        <!-- Screenshots Gallery -->
        ${p.screenshots.length > 1 ? `
        <div style="margin-bottom:48px;">
          <h2 class="reveal" style="font-size:clamp(22px,3vw,30px);margin-bottom:28px;">Screenshots</h2>
          <div class="g2">
            ${p.screenshots.map((s,i)=>`
            <div class="card reveal" style="padding:10px;cursor:pointer;" onclick="openLightbox('${s}')">
              <img src="${s}" alt="Screenshot ${i+1}" style="width:100%;height:220px;object-fit:cover;border-radius:var(--radius-sm);">
              <div style="text-align:center;padding:8px 0 0;font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--muted-2);">Click to expand</div>
            </div>`).join('')}
          </div>
        </div>` : ''}

        <!-- Tech Stack -->
        <div class="card reveal" style="margin-bottom:48px;padding:36px;">
          <div class="eyebrow" style="margin-bottom:24px;">TECHNOLOGY STACK</div>
          <div class="g3" style="gap:28px;">
            <div><div style="font-size:12px;color:var(--azure);font-family:'IBM Plex Mono',monospace;text-transform:uppercase;margin-bottom:10px;">Frontend</div><div class="tech-row">${p.techStack.frontend.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div></div>
            <div><div style="font-size:12px;color:var(--brass);font-family:'IBM Plex Mono',monospace;text-transform:uppercase;margin-bottom:10px;">Backend</div><div class="tech-row">${p.techStack.backend.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div></div>
            <div><div style="font-size:12px;color:var(--emerald);font-family:'IBM Plex Mono',monospace;text-transform:uppercase;margin-bottom:10px;">Database</div><div class="tech-row">${p.techStack.database.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div></div>
            <div><div style="font-size:12px;color:var(--muted);font-family:'IBM Plex Mono',monospace;text-transform:uppercase;margin-bottom:10px;">Cloud</div><div class="tech-row">${p.techStack.cloud.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div></div>
            <div><div style="font-size:12px;color:var(--rose);font-family:'IBM Plex Mono',monospace;text-transform:uppercase;margin-bottom:10px;">AI Models</div><div class="tech-row">${(p.techStack.aiModels||[]).map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div></div>
          </div>
        </div>

        <!-- Pricing -->
        ${p.pricing ? `
        <div style="margin-bottom:48px;">
          <h2 class="reveal" style="font-size:clamp(22px,3vw,30px);margin-bottom:28px;">Pricing</h2>
          <div class="g3">
            ${p.pricing.map(tier=>`
            <div class="card reveal" style="${tier.popular ? 'border-color:var(--azure);background:var(--panel-2);' : ''}">
              ${tier.popular ? `<div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--azure);text-transform:uppercase;margin-bottom:14px;">Most Popular</div>` : ''}
              <div style="font-size:14px;font-weight:600;margin-bottom:8px;">${tier.tier}</div>
              <div style="font-family:'Space Grotesk',sans-serif;font-size:2.2rem;font-weight:700;margin-bottom:4px;">${tier.price}</div>
              <div style="font-size:12px;color:var(--muted-2);margin-bottom:20px;">${tier.period||''}</div>
              <ul style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
                ${tier.features.map(f=>`<li style="font-size:13.5px;color:var(--muted);display:flex;gap:8px;"><span style="color:var(--azure);">✓</span>${f}</li>`).join('')}
              </ul>
              <a onclick="navigate('contact')" class="btn ${tier.popular?'btn-azure':'btn-ghost'}" style="width:100%;justify-content:center;">Get started</a>
            </div>`).join('')}
          </div>
        </div>` : ''}

        <!-- FAQ -->
        ${p.faq && p.faq.length ? `
        <div style="margin-bottom:48px;">
          <h2 class="reveal" style="font-size:clamp(22px,3vw,30px);margin-bottom:28px;">Frequently asked questions</h2>
          <div style="display:flex;flex-direction:column;gap:14px;">
            ${p.faq.map(f=>`
            <div class="card reveal" style="padding:24px 28px;">
              <h4 style="font-size:15px;margin-bottom:10px;">${f.question}</h4>
              <p style="color:var(--muted);font-size:14px;">${f.answer}</p>
            </div>`).join('')}
          </div>
        </div>` : ''}

        <!-- Related -->
        <div style="margin-bottom:48px;">
          <h2 class="reveal" style="font-size:clamp(22px,3vw,30px);margin-bottom:28px;">Related products</h2>
          <div class="g2">
            ${related.map(rp=>`
            <div class="card reveal" style="display:flex;align-items:center;justify-content:space-between;gap:16px;">
              <div>
                <div style="font-size:1.75rem;margin-bottom:8px;">${rp.logo}</div>
                <h3 style="font-size:17px;">${rp.name}</h3>
                <p style="font-size:13px;color:var(--muted);margin-top:6px;">${rp.tagline}</p>
              </div>
              <a onclick="navigate('products',{id:'${rp.id}'})" class="btn btn-ghost btn-sm" style="flex-shrink:0;">View →</a>
            </div>`).join('')}
          </div>
        </div>

        <!-- Final CTA -->
        <div class="cta-box reveal" style="margin-bottom:60px;">
          <div class="eyebrow" style="justify-content:center;margin-bottom:18px;">READY TO TRANSFORM?</div>
          <h2>Ready to put ${p.name} to work?</h2>
          <p>Visit the official product site or speak directly with our team.</p>
          <div class="cta-actions">
            <a href="${p.website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">Visit ${p.name} site ↗</a>
            <a onclick="navigate('contact')" class="btn btn-ghost btn-lg">Contact Softmaco</a>
          </div>
        </div>
      </div>
    </main>`);
  });

  /* ──────────── ABOUT ──────────── */
  addRoute('about', () => {
    setTitle('About Us');
    H(`
    <main style="padding-top:100px;">
      <div class="wrap">
        <div class="section-head reveal" style="margin-bottom:60px;">
          <div class="eyebrow">ABOUT SOFTMACO</div>
          <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Engineers, inventors, and product builders.</h1>
          <p>We build the autonomous software foundations that empower global enterprises and scale ambitious startups.</p>
        </div>

        <div class="g2" style="margin-bottom:60px;">
          <div class="card reveal">
            <div class="eyebrow" style="margin-bottom:16px;">OUR MISSION</div>
            <p style="color:var(--muted);line-height:1.8;font-size:15.5px;margin-bottom:14px;">Softmaco was founded on a singular principle: enterprise software should be as fast, fluid, and intuitive as luxury consumer products while offering sub-millisecond reliability.</p>
            <p style="color:var(--muted);line-height:1.8;font-size:15.5px;">We operate both as an elite engineering partner for client enterprises and as an autonomous software incubator creating our own standalone SaaS and AI venture products.</p>
          </div>
          <div class="card reveal">
            <div class="eyebrow" style="margin-bottom:16px;">DUAL DIVISION ARCHITECTURE</div>
            <div style="margin-bottom:24px;border-left:2px solid var(--azure);padding-left:20px;">
              <h3 style="font-size:17px;color:var(--azure);">Softmaco Studios</h3>
              <p style="font-size:14px;color:var(--muted);margin-top:8px;">High-touch client software engineering, AI integration, and custom cloud development for startups and enterprises.</p>
            </div>
            <div style="border-left:2px solid var(--brass);padding-left:20px;">
              <h3 style="font-size:17px;color:var(--brass);">Softmaco Venture Labs</h3>
              <p style="font-size:14px;color:var(--muted);margin-top:8px;">In-house R&D product incubator launching RestroAI, InventoryPro, SoftCRM, and DataPulse AI.</p>
            </div>
          </div>
        </div>

        <div style="margin-bottom:60px;">
          <h2 class="reveal" style="font-size:clamp(22px,3vw,30px);margin-bottom:28px;">Our core operating values</h2>
          <div class="g4">
            ${[
              {icon:'⚙️',t:'Engineering Craft',d:'Zero tech debt tolerances and sub-50ms performance standards on every system we ship.'},
              {icon:'🧠',t:'AI-First Architecture',d:'Integrating intelligence natively into every workflow — not bolted on as an afterthought.'},
              {icon:'🛡️',t:'Enterprise Trust',d:'SOC2 security standards, GDPR compliance, and 99.99% uptime guarantees by default.'},
              {icon:'🚀',t:'Speed of Execution',d:'Production code in days, not months. We move with startup velocity and enterprise precision.'}
            ].map(v=>`
            <div class="card reveal">
              <div style="font-size:2rem;margin-bottom:12px;">${v.icon}</div>
              <h3 style="font-size:16px;margin-bottom:8px;">${v.t}</h3>
              <p style="font-size:13.5px;">${v.d}</p>
            </div>`).join('')}
          </div>
        </div>

        <div class="stat-grid reveal" style="margin-bottom:60px;">
          <div class="stat-cell"><div class="stat-num">5<span class="unit">+</span></div><div class="stat-label">Years of Innovation</div></div>
          <div class="stat-cell"><div class="stat-num">140<span class="unit">+</span></div><div class="stat-label">Projects Delivered</div></div>
          <div class="stat-cell"><div class="stat-num">28<span class="unit">+</span></div><div class="stat-label">Countries Served</div></div>
          <div class="stat-cell"><div class="stat-num">60<span class="unit">+</span></div><div class="stat-label">Senior Engineers</div></div>
        </div>
      </div>
    </main>`);
  });

  /* ──────────── SERVICES ──────────── */
  addRoute('services', () => {
    setTitle('Services');
    H(`
    <main style="padding-top:100px;">
      <div class="wrap">
        <div class="section-head reveal" style="margin-bottom:60px;">
          <div class="eyebrow">ENGINEERING CAPABILITIES</div>
          <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Everything you need to ship great software.</h1>
          <p>Comprehensive software engineering, AI deployment, mobile development, and cloud capabilities — all under one roof.</p>
        </div>
        <div class="g2">
          ${SOFTMACO_DATA.services.map(s=>`
          <div class="card reveal">
            <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
              <div class="service-icon" style="flex-shrink:0;">${s.icon}</div>
              <div>
                <h3 style="font-size:18px;">${s.title}</h3>
                <span style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--azure);text-transform:uppercase;">Enterprise Grade</span>
              </div>
            </div>
            <p style="font-size:14.5px;color:var(--muted);margin-bottom:18px;">${s.summary}</p>
            <div style="margin-bottom:18px;">
              <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted-2);text-transform:uppercase;margin-bottom:8px;">Key Benefits</div>
              <ul style="display:flex;flex-direction:column;gap:6px;">
                ${s.benefits.map(b=>`<li style="font-size:13px;color:var(--text);display:flex;gap:8px;"><span style="color:var(--azure);">✓</span>${b}</li>`).join('')}
              </ul>
            </div>
            <div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted-2);text-transform:uppercase;margin-bottom:8px;">Technologies</div>
              <div class="tech-row">${s.technologies.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div>
            </div>
            <a onclick="navigate('contact')" class="btn btn-ghost btn-sm" style="margin-top:20px;">Discuss this service →</a>
          </div>`).join('')}
        </div>
      </div>
    </main>`);
  });

  /* ──────────── TEAM ──────────── */
  addRoute('team', () => {
    setTitle('Team');
    const byDept = {};
    SOFTMACO_DATA.team.forEach(m => { (byDept[m.department] = byDept[m.department]||[]).push(m); });
    H(`
    <main style="padding-top:100px;">
      <div class="wrap">
        <div class="section-head center reveal" style="margin-bottom:60px;">
          <div class="eyebrow" style="justify-content:center;">SOFTMACO PEOPLE</div>
          <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">The team behind the work.</h1>
          <p>Senior engineers, researchers, designers, and growth partners — kept small and accountable on purpose.</p>
        </div>
        ${Object.entries(byDept).map(([dept, members]) => `
        <div style="margin-bottom:56px;">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted-2);margin-bottom:24px;padding-bottom:12px;border-bottom:1px solid var(--line);">${dept}</div>
          <div class="g3">
            ${members.map(m=>`
            <div class="card team-card reveal" onclick="navigate('team',{id:'${m.id}'})">
              <img src="${m.photo}" alt="${m.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=14203A&color=4C7CF0&size=80'">
              <div class="team-dept">${m.department}</div>
              <h3 style="font-size:17px;margin-bottom:6px;">${m.name}</h3>
              <p style="font-size:13px;color:var(--azure);font-weight:500;margin-bottom:10px;">${m.role}</p>
              <p style="font-size:13px;color:var(--muted);">${m.bio}</p>
              <div style="margin-top:16px;font-size:12.5px;color:var(--azure);">View profile →</div>
            </div>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </main>`);
  });

  /* ──────────── TEAM MEMBER ──────────── */
  addRoute('team-detail', ({ id }) => {
    const m = SOFTMACO_DATA.team.find(x => x.id === id) || SOFTMACO_DATA.team[0];
    setTitle(m.name);
    H(`
    <main style="padding-top:100px;">
      <div class="wrap">
        <div class="breadcrumb reveal">
          <a onclick="navigate('team')">Team</a>
          <span class="sep">/</span>
          <span class="current">${m.name}</span>
        </div>

        <div class="card reveal" style="padding:48px;margin-bottom:40px;">
          <div style="display:flex;align-items:flex-start;gap:36px;flex-wrap:wrap;">
            <img src="${m.photo}" alt="${m.name}" style="width:160px;height:160px;border-radius:50%;object-fit:cover;border:2px solid var(--azure);flex-shrink:0;" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=14203A&color=4C7CF0&size=160'">
            <div style="flex:1;">
              <div class="team-dept" style="margin-bottom:8px;">${m.department}</div>
              <h1 style="font-size:clamp(26px,4vw,38px);margin-bottom:8px;">${m.name}</h1>
              <div style="font-size:15px;color:var(--azure);font-weight:500;margin-bottom:20px;">${m.role}</div>
              <p style="color:var(--muted);line-height:1.75;font-size:15px;max-width:680px;margin-bottom:24px;">${m.fullBio}</p>
              <div style="display:flex;gap:10px;flex-wrap:wrap;">
                ${m.social.linkedin ? `<a href="${m.social.linkedin}" target="_blank" class="btn btn-ghost btn-sm">LinkedIn ↗</a>` : ''}
                ${m.social.github ? `<a href="${m.social.github}" target="_blank" class="btn btn-ghost btn-sm">GitHub ↗</a>` : ''}
                ${m.social.twitter ? `<a href="${m.social.twitter}" target="_blank" class="btn btn-ghost btn-sm">X ↗</a>` : ''}
                ${m.social.email ? `<a href="mailto:${m.social.email}" class="btn btn-azure btn-sm">Email ${m.name.split(' ')[0]}</a>` : ''}
              </div>
            </div>
          </div>
        </div>

        <div class="g2">
          <div class="card reveal">
            <div class="eyebrow" style="margin-bottom:18px;">SKILLS</div>
            <div class="tech-row" style="margin-bottom:28px;">
              ${m.skills.map(s=>`<span class="tech-pill" style="padding:6px 14px;">${s}</span>`).join('')}
            </div>
            <div class="eyebrow" style="margin-bottom:14px;">PRODUCTS CONTRIBUTED</div>
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
              ${m.productsContributed.map(p=>`<span class="badge badge-live">${p}</span>`).join('')}
            </div>
            ${m.awards && m.awards.length ? `
            <div style="margin-top:24px;">
              <div class="eyebrow" style="margin-bottom:12px;">AWARDS & RECOGNITION</div>
              <ul style="display:flex;flex-direction:column;gap:8px;">
                ${m.awards.map(a=>`<li style="font-size:13.5px;color:var(--brass);display:flex;gap:8px;"><span>★</span>${a}</li>`).join('')}
              </ul>
            </div>` : ''}
          </div>
          <div class="card reveal">
            <div class="eyebrow" style="margin-bottom:18px;">CAREER EXPERIENCE</div>
            <div class="timeline">
              ${m.experience.map(e=>`
              <div class="timeline-item">
                <div class="timeline-role">${e.role}</div>
                <div class="timeline-org">${e.company}</div>
                <div class="timeline-period">${e.period}</div>
              </div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </main>`);
  });

  /* ──────────── CASE STUDIES ──────────── */
  addRoute('case-studies', () => {
    setTitle('Case Studies');
    H(`
    <main style="padding-top:100px;">
      <div class="wrap">
        <div class="section-head reveal" style="margin-bottom:60px;">
          <div class="eyebrow">PROVEN RESULTS</div>
          <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Enterprise case studies.</h1>
          <p>Real-world impact, measured and verifiable. Each engagement started with a hard problem and a deadline that mattered.</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:40px;">
          ${SOFTMACO_DATA.caseStudies.map(cs=>`
          <div class="card reveal" style="padding:40px;">
            <div class="g2" style="gap:40px;">
              <div>
                <span style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:var(--muted-2);text-transform:uppercase;letter-spacing:0.08em;">${cs.category} · ${cs.timeline}</span>
                <h2 style="font-size:clamp(20px,2.5vw,28px);margin:12px 0 8px;">${cs.title}</h2>
                <p style="font-size:13px;color:var(--brass);margin-bottom:20px;">Client: ${cs.client}</p>
                <div style="margin-bottom:20px;">
                  <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--muted-2);text-transform:uppercase;margin-bottom:10px;">The Challenge</div>
                  <p style="font-size:14.5px;color:var(--muted);line-height:1.65;">${cs.challenge}</p>
                </div>
                <div style="margin-bottom:20px;">
                  <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--muted-2);text-transform:uppercase;margin-bottom:10px;">The Solution</div>
                  <p style="font-size:14.5px;color:var(--muted);line-height:1.65;">${cs.solution}</p>
                </div>
                <div class="tech-row">${cs.technologies.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div>
              </div>
              <div>
                <img src="${cs.coverImage}" alt="${cs.title}" style="width:100%;height:220px;object-fit:cover;border-radius:var(--radius);border:1px solid var(--line);" onerror="this.style.display='none'">
                <div class="metric-row">
                  <div class="metric-cell"><div class="metric-val">${cs.metrics.metric1}</div><div class="metric-lbl">${cs.metrics.label1}</div></div>
                  <div class="metric-cell"><div class="metric-val">${cs.metrics.metric2}</div><div class="metric-lbl">${cs.metrics.label2}</div></div>
                  <div class="metric-cell"><div class="metric-val">${cs.metrics.metric3}</div><div class="metric-lbl">${cs.metrics.label3}</div></div>
                </div>
              </div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </main>`);
  });

  /* ──────────── BLOG ──────────── */
  addRoute('blog', () => {
    setTitle('Blog');
    H(`
    <main style="padding-top:100px;">
      <div class="wrap">
        <div class="section-head reveal" style="margin-bottom:60px;">
          <div class="eyebrow">SOFTMACO ENGINEERING JOURNAL</div>
          <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Thinking on software and AI.</h1>
          <p>Deep dives into AI agents, low-latency architectures, and software design from the team actually building this stuff.</p>
        </div>
        <div class="g2">
          ${SOFTMACO_DATA.blogPosts.map(b=>`
          <div class="card reveal" style="cursor:pointer;" onclick="navigate('blog',{id:'${b.id}'})">
            <div class="blog-meta">
              <span>${b.category}</span>
              <span>${b.readTime}</span>
              <span>${b.date}</span>
            </div>
            <h2 style="font-size:clamp(17px,2vw,22px);margin-bottom:14px;line-height:1.3;">${b.title}</h2>
            <p style="color:var(--muted);font-size:14px;line-height:1.6;margin-bottom:20px;">${b.excerpt}</p>
            <div style="border-top:1px solid var(--line);padding-top:16px;display:flex;align-items:center;justify-content:space-between;">
              <div>
                <div style="font-size:13.5px;font-weight:600;">${b.author}</div>
                <div style="font-size:12px;color:var(--muted-2);">${b.authorRole}</div>
              </div>
              <span style="color:var(--azure);font-size:13.5px;">Read →</span>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </main>`);
  });

  /* ──────────── BLOG DETAIL ──────────── */
  addRoute('blog-detail', ({ id }) => {
    const b = SOFTMACO_DATA.blogPosts.find(x => x.id === id) || SOFTMACO_DATA.blogPosts[0];
    setTitle(b.title);
    H(`
    <main style="padding-top:100px;">
      <div class="wrap" style="max-width:800px;">
        <div class="breadcrumb reveal">
          <a onclick="navigate('blog')">Blog</a>
          <span class="sep">/</span>
          <span class="current">${b.category}</span>
        </div>
        <div class="blog-meta reveal" style="margin-bottom:16px;">
          <span>${b.category}</span><span>${b.readTime}</span><span>${b.date}</span>
        </div>
        <h1 class="reveal" style="font-size:clamp(24px,3.5vw,38px);margin-bottom:24px;line-height:1.15;">${b.title}</h1>
        <div class="reveal" style="display:flex;align-items:center;gap:12px;margin-bottom:48px;padding-bottom:24px;border-bottom:1px solid var(--line);">
          <div class="testi-avatar" style="width:40px;height:40px;"></div>
          <div>
            <div style="font-weight:600;font-size:14.5px;">${b.author}</div>
            <div style="font-size:12.5px;color:var(--muted-2);">${b.authorRole}</div>
          </div>
        </div>
        <div class="card reveal" style="padding:36px;line-height:1.85;color:var(--muted);font-size:15.5px;">
          ${b.content}
        </div>
        <div style="margin-top:40px;text-align:center;" class="reveal">
          <a onclick="navigate('blog')" class="btn btn-ghost">← Back to blog</a>
        </div>
      </div>
    </main>`);
  });

  /* ──────────── CAREERS ──────────── */
  addRoute('careers', () => {
    setTitle('Careers');
    H(`
    <main style="padding-top:100px;">
      <div class="wrap">
        <div class="section-head reveal" style="margin-bottom:60px;">
          <div class="eyebrow">JOIN SOFTMACO</div>
          <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Build future software with us.</h1>
          <p>We're hiring exceptional senior engineers, AI researchers, and product designers. Small team, real ownership, meaningful work.</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px;">
          ${SOFTMACO_DATA.careers.map(j=>`
          <div class="card reveal">
            <div class="job-card">
              <div style="flex:1;">
                <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:10px;">
                  <h3 style="font-size:18px;">${j.title}</h3>
                  <span class="badge badge-live">Open</span>
                </div>
                <p style="font-size:14px;color:var(--muted);max-width:700px;">${j.description}</p>
                <div class="job-tags">
                  <span class="job-tag">${j.department}</span>
                  <span class="job-tag">${j.location}</span>
                  <span class="job-tag">${j.type}</span>
                  <span class="job-tag" style="color:var(--brass);">${j.salary}</span>
                </div>
              </div>
              <a onclick="navigate('contact');showToast('Application inquiry for: ${j.title}');" class="btn btn-ghost" style="flex-shrink:0;">Apply →</a>
            </div>
          </div>`).join('')}
        </div>

        <div class="cta-box reveal" style="margin-top:60px;">
          <h2>Don't see the right role?</h2>
          <p>We occasionally hire exceptional generalists. Send us what you've built.</p>
          <div class="cta-actions">
            <a href="mailto:hello@softmaco.com" class="btn btn-primary btn-lg">hello@softmaco.com</a>
          </div>
        </div>
      </div>
    </main>`);
  });

  /* ──────────── CONTACT ──────────── */
  addRoute('contact', () => {
    setTitle('Contact');
    H(`
    <main style="padding-top:100px;">
      <div class="wrap">
        <div class="section-head reveal" style="margin-bottom:60px;">
          <div class="eyebrow">GET IN TOUCH</div>
          <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Let's talk about your project.</h1>
          <p>Whether you need a custom build, want to license a product, or just want a second opinion — we're easy to reach.</p>
        </div>

        <div class="g2">
          <div class="card reveal" style="padding:40px;">
            <div class="eyebrow" style="margin-bottom:24px;">SEND AN INQUIRY</div>
            <form onsubmit="handleContact(event)">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-input" placeholder="Sarah Jenkins" required>
              </div>
              <div class="form-group">
                <label class="form-label">Work Email</label>
                <input type="email" class="form-input" placeholder="sarah@company.com" required>
              </div>
              <div class="form-group">
                <label class="form-label">Category</label>
                <select class="form-select">
                  <option>Custom Software Development</option>
                  <option>AI / Machine Learning Solutions</option>
                  <option>RestroAI Enterprise Licensing</option>
                  <option>InventoryPro Solution</option>
                  <option>SoftCRM License</option>
                  <option>Venture Partnership / Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Project Overview</label>
                <textarea class="form-textarea" placeholder="Tell us about your project goals, timelines, and technical context…" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;margin-top:8px;">Send inquiry →</button>
            </form>
          </div>

          <div>
            <div class="card reveal" style="margin-bottom:18px;">
              <div class="eyebrow" style="margin-bottom:20px;">OFFICES</div>
              <div style="display:flex;flex-direction:column;gap:22px;">
                <div>
                  <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--azure);text-transform:uppercase;margin-bottom:6px;">Headquarters</div>
                  <p style="color:var(--muted);font-size:14px;line-height:1.6;">${SOFTMACO_DATA.company.contact.address}</p>
                </div>
                <div>
                  <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--brass);text-transform:uppercase;margin-bottom:6px;">India Innovation Center</div>
                  <p style="color:var(--muted);font-size:14px;line-height:1.6;">${SOFTMACO_DATA.company.contact.indiaOffice}</p>
                </div>
              </div>
            </div>
            <div class="card reveal" style="margin-bottom:18px;">
              <div class="eyebrow" style="margin-bottom:20px;">CONTACT DETAILS</div>
              <div style="display:flex;flex-direction:column;gap:14px;font-size:14px;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <span style="color:var(--muted-2);font-family:'IBM Plex Mono',monospace;font-size:11px;width:60px;">EMAIL</span>
                  <a href="mailto:${SOFTMACO_DATA.company.contact.email}" style="color:var(--azure);">${SOFTMACO_DATA.company.contact.email}</a>
                </div>
                <div style="display:flex;align-items:center;gap:10px;">
                  <span style="color:var(--muted-2);font-family:'IBM Plex Mono',monospace;font-size:11px;width:60px;">PHONE</span>
                  <span style="color:var(--text);">${SOFTMACO_DATA.company.contact.phone}</span>
                </div>
                <div style="display:flex;align-items:center;gap:10px;">
                  <span style="color:var(--muted-2);font-family:'IBM Plex Mono',monospace;font-size:11px;width:60px;">HOURS</span>
                  <span style="color:var(--muted);">${SOFTMACO_DATA.company.contact.hours}</span>
                </div>
              </div>
            </div>
            <div class="card reveal" style="background:var(--panel-2);border-style:dashed;text-align:center;padding:28px;">
              <div style="font-size:2rem;margin-bottom:8px;">📍</div>
              <div style="font-size:14px;font-weight:600;">San Francisco HQ</div>
              <div style="font-size:12px;color:var(--muted);margin-top:4px;">500 Technology Blvd, Suite 1200</div>
              <div style="display:inline-flex;align-items:center;gap:6px;margin-top:10px;font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--emerald);">
                <span style="width:6px;height:6px;border-radius:50%;background:var(--emerald);"></span> Office open
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>`);
  });

  /* ──────────── PRIVACY ──────────── */
  addRoute('privacy', () => {
    setTitle('Privacy Policy');
    H(`
    <main style="padding-top:100px;">
      <div class="wrap" style="max-width:800px;">
        <div class="breadcrumb reveal"><span class="current">Privacy Policy</span></div>
        <h1 class="reveal" style="font-size:clamp(28px,4vw,42px);margin-bottom:32px;">Privacy Policy</h1>
        <div class="card reveal" style="padding:40px;line-height:1.85;color:var(--muted);">
          <p style="margin-bottom:20px;">Softmaco Inc. respects your privacy and is committed to protecting enterprise data across all products and services. This policy outlines how we collect, process, and safeguard information.</p>
          <h3 style="color:var(--text);margin:24px 0 10px;font-size:17px;">1. Data Isolation & Security</h3>
          <p style="margin-bottom:20px;">All client data processed through Softmaco products (RestroAI, DataPulse AI, SoftCRM) is stored in encrypted, isolated database partitions conforming to SOC2 Type II standards.</p>
          <h3 style="color:var(--text);margin:24px 0 10px;font-size:17px;">2. AI Model Privacy</h3>
          <p style="margin-bottom:20px;">Proprietary enterprise data processed through Softmaco AI models is never used to train public machine learning models or shared with third parties.</p>
          <h3 style="color:var(--text);margin:24px 0 10px;font-size:17px;">3. Data Retention</h3>
          <p>Data is retained only for the duration required by your service agreement. Upon contract termination, all data is securely purged within 30 days.</p>
        </div>
      </div>
    </main>`);
  });

  /* ──────────── TERMS ──────────── */
  addRoute('terms', () => {
    setTitle('Terms of Service');
    H(`
    <main style="padding-top:100px;">
      <div class="wrap" style="max-width:800px;">
        <div class="breadcrumb reveal"><span class="current">Terms of Service</span></div>
        <h1 class="reveal" style="font-size:clamp(28px,4vw,42px);margin-bottom:32px;">Terms of Service</h1>
        <div class="card reveal" style="padding:40px;line-height:1.85;color:var(--muted);">
          <p style="margin-bottom:20px;">By accessing or using Softmaco software products, client services, or APIs, you agree to comply with the following terms and our enterprise service level agreements.</p>
          <h3 style="color:var(--text);margin:24px 0 10px;font-size:17px;">1. Intellectual Property</h3>
          <p style="margin-bottom:20px;">100% of custom source code and design assets engineered for your project are transferred to your company upon completion. We retain no rights to custom client IP.</p>
          <h3 style="color:var(--text);margin:24px 0 10px;font-size:17px;">2. Service Level</h3>
          <p style="margin-bottom:20px;">Enterprise clients receive a 99.99% uptime SLA with dedicated 24/7 support, automated rollback, and proactive incident response.</p>
          <h3 style="color:var(--text);margin:24px 0 10px;font-size:17px;">3. Acceptable Use</h3>
          <p>Softmaco products may not be used for unlawful activities, data harvesting, or building competing services without written permission.</p>
        </div>
      </div>
    </main>`);
  });
}

/* ── CONTACT HANDLER ── */
window.handleContact = function(e) {
  e.preventDefault();
  showToast('Inquiry sent! We\'ll respond within 4 business hours.');
  e.target.reset();
};

/* ══════════════════════════════════════════════════
   SHARED PARTIAL HELPERS  (reused across all pages)
   ══════════════════════════════════════════════════ */

/** Reusable FAQ accordion block */
function faqBlock(items) {
  return items.map((f,i) => `
  <div class="card reveal" style="padding:0;overflow:hidden;" id="faq-${i}">
    <button onclick="toggleFaq(${i})" style="width:100%;padding:22px 28px;background:none;border:none;display:flex;align-items:center;justify-content:space-between;cursor:pointer;gap:16px;text-align:left;">
      <span style="font-family:'Space Grotesk',sans-serif;font-size:16px;font-weight:600;color:var(--text);">${f.question}</span>
      <span style="color:var(--azure);font-size:20px;flex-shrink:0;transition:transform .25s ease;" id="faq-icon-${i}">+</span>
    </button>
    <div id="faq-body-${i}" style="display:none;padding:0 28px 22px;color:var(--muted);font-size:14.5px;line-height:1.7;">${f.answer}</div>
  </div>`).join('');
}

window.toggleFaq = function(i) {
  const body = document.getElementById(`faq-body-${i}`);
  const icon = document.getElementById(`faq-icon-${i}`);
  if (!body) return;
  const open = body.style.display === 'block';
  body.style.display = open ? 'none' : 'block';
  icon.style.transform = open ? 'rotate(0deg)' : 'rotate(45deg)';
};

/** Reusable bottom CTA strip */
function ctaBlock(headline, sub, btn1Text, btn1Route, btn2Text, btn2Route) {
  return `
  <div class="cta-box reveal" style="margin-top:60px;margin-bottom:40px;">
    <div class="eyebrow" style="justify-content:center;margin-bottom:18px;">NEXT STEP</div>
    <h2>${headline}</h2>
    <p>${sub}</p>
    <div class="cta-actions">
      <a onclick="navigate('${btn1Route}')" class="btn btn-primary btn-lg">${btn1Text}</a>
      ${btn2Text ? `<a onclick="navigate('${btn2Route}')" class="btn btn-ghost btn-lg">${btn2Text}</a>` : ''}
    </div>
  </div>`;
}

/** Reusable breadcrumb row */
function bc(items) {
  return `<div class="breadcrumb reveal">
    ${items.map((it,i) => i < items.length-1
      ? `<a onclick="navigate('${it.route}')">${it.label}</a><span class="sep">/</span>`
      : `<span class="current">${it.label}</span>`
    ).join('')}
  </div>`;
}

/* ══════════════════════════════════════════════════
   PAGE PATCHES  — override thin routes registered
   above with richer versions
   ══════════════════════════════════════════════════ */

/* ── PATCH: HOME  (adds FAQ + blog teaser) ── */
(function patchHome() {
  const D = SOFTMACO_DATA;
  const orig = ROUTES['home'];
  ROUTES['home'] = () => {
    orig();   // render existing home content first

    // append FAQ + blog teaser after existing CTA section
    const main = document.querySelector('#app main');
    if (!main) return;

    const extra = document.createElement('div');
    extra.innerHTML = `
    <!-- COMPANY FAQ -->
    <section style="border-top:1px solid var(--line);">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="eyebrow">COMMON QUESTIONS</div>
          <h2>Things people ask before working with us.</h2>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${faqBlock(D.faqs)}
        </div>
        <div style="text-align:center;margin-top:28px;" class="reveal">
          <a onclick="navigate('contact')" class="btn btn-ghost">Still have a question? Ask us directly →</a>
        </div>
      </div>
    </section>

    <!-- BLOG TEASER -->
    <section style="border-top:1px solid var(--line);padding-bottom:80px;">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="eyebrow">FROM THE JOURNAL</div>
          <h2>Thinking out loud on software and AI.</h2>
        </div>
        <div class="g2">
          ${D.blogPosts.map(b => `
          <div class="card reveal" style="cursor:pointer;" onclick="navigate('blog',{id:'${b.id}'})">
            <div class="blog-meta"><span>${b.category}</span><span>${b.readTime}</span><span>${b.date}</span></div>
            <h3 style="font-size:18px;margin-bottom:10px;line-height:1.3;">${b.title}</h3>
            <p style="color:var(--muted);font-size:14px;line-height:1.6;">${b.excerpt}</p>
            <div style="margin-top:16px;color:var(--azure);font-size:13.5px;">Read article →</div>
          </div>`).join('')}
        </div>
        <div style="text-align:center;margin-top:32px;" class="reveal">
          <a onclick="navigate('blog')" class="btn btn-ghost">View all articles →</a>
        </div>
      </div>
    </section>`;

    main.appendChild(extra);
    setTimeout(initReveal, 60);
  };
})();

/* ── PATCH: ABOUT  (adds team preview + FAQ) ── */
ROUTES['about'] = () => {
  setTitle('About Us');
  const D = SOFTMACO_DATA;
  H(`
  <main style="padding-top:100px;">
    <div class="wrap">
      <div class="section-head reveal" style="margin-bottom:60px;">
        <div class="eyebrow">ABOUT SOFTMACO</div>
        <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Engineers, inventors, and product builders.</h1>
        <p>We build the software foundations that empower global enterprises and scale ambitious startups — then hold the same standard for our own products.</p>
      </div>

      <!-- Mission + dual division -->
      <div class="g2" style="margin-bottom:60px;">
        <div class="card reveal">
          <div class="eyebrow" style="margin-bottom:16px;">MISSION</div>
          <p style="color:var(--muted);line-height:1.8;font-size:15px;margin-bottom:14px;">Softmaco was founded on a principle: enterprise software should be as fast, fluid, and intuitive as great consumer products while delivering sub-millisecond reliability.</p>
          <p style="color:var(--muted);line-height:1.8;font-size:15px;">We operate as an elite engineering partner for clients and as an autonomous product incubator for our own SaaS and AI ventures.</p>
        </div>
        <div class="card reveal">
          <div class="eyebrow" style="margin-bottom:16px;">TWO DIVISIONS</div>
          <div style="border-left:2px solid var(--azure);padding-left:20px;margin-bottom:24px;">
            <h3 style="font-size:17px;color:var(--azure);margin-bottom:6px;">Softmaco Studios</h3>
            <p style="font-size:14px;color:var(--muted);">High-touch client engineering — custom software, AI, cloud, mobile. One team from wireframe to deploy.</p>
          </div>
          <div style="border-left:2px solid var(--brass);padding-left:20px;">
            <h3 style="font-size:17px;color:var(--brass);margin-bottom:6px;">Softmaco Venture Labs</h3>
            <p style="font-size:14px;color:var(--muted);">In-house R&D incubator. RestroAI, InventoryPro, SoftCRM, DataPulse AI — products we build, run, and iterate publicly.</p>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="stat-grid reveal" style="margin-bottom:60px;">
        <div class="stat-cell"><div class="stat-num">5<span class="unit">+</span></div><div class="stat-label">Years of engineering</div></div>
        <div class="stat-cell"><div class="stat-num">140<span class="unit">+</span></div><div class="stat-label">Projects delivered</div></div>
        <div class="stat-cell"><div class="stat-num">28<span class="unit">+</span></div><div class="stat-label">Countries served</div></div>
        <div class="stat-cell"><div class="stat-num">60<span class="unit">+</span></div><div class="stat-label">Senior engineers</div></div>
      </div>

      <!-- Values -->
      <div style="margin-bottom:60px;">
        <h2 class="reveal" style="font-size:clamp(22px,3vw,30px);margin-bottom:28px;">How we operate</h2>
        <div class="g4">
          ${[
            {icon:'⚙️',t:'Engineering Craft',d:'Zero tech debt tolerance. Every system ships with documented architecture and 90%+ test coverage.'},
            {icon:'🧠',t:'AI-First',d:'We integrate intelligence natively — not as a feature toggle, but as a core design decision from day one.'},
            {icon:'🛡️',t:'Enterprise Trust',d:'SOC2, GDPR, HIPAA-ready patterns on every product. Security is not a checklist, it is a posture.'},
            {icon:'🚀',t:'Speed Discipline',d:'We move fast by being deliberate. Fast iterations, not fast cutting corners.'}
          ].map(v=>`
          <div class="card reveal">
            <div style="font-size:1.75rem;margin-bottom:12px;">${v.icon}</div>
            <h3 style="font-size:15px;margin-bottom:8px;">${v.t}</h3>
            <p style="font-size:13.5px;color:var(--muted);">${v.d}</p>
          </div>`).join('')}
        </div>
      </div>

      <!-- Team preview -->
      <div style="margin-bottom:60px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:28px;">
          <h2 class="reveal" style="font-size:clamp(22px,3vw,30px);">The people behind the work</h2>
          <a onclick="navigate('team')" class="btn btn-ghost btn-sm reveal">Meet the full team →</a>
        </div>
        <div class="g3">
          ${D.team.slice(0,3).map(m=>`
          <div class="card reveal team-card" onclick="navigate('team',{id:'${m.id}'})">
            <img src="${m.photo}" alt="${m.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=14203A&color=4C7CF0&size=80'">
            <div class="team-dept">${m.department}</div>
            <h3 style="font-size:16px;margin-bottom:4px;">${m.name}</h3>
            <p style="font-size:13px;color:var(--azure);font-weight:500;margin-bottom:8px;">${m.role}</p>
            <p style="font-size:13px;color:var(--muted);">${m.bio}</p>
          </div>`).join('')}
        </div>
      </div>

      <!-- Testimonials strip -->
      <div style="margin-bottom:60px;">
        <h2 class="reveal" style="font-size:clamp(22px,3vw,30px);margin-bottom:28px;">What clients say</h2>
        <div class="g3">
          ${D.testimonials.map(t=>`
          <div class="card testi-card reveal">
            <blockquote>"${t.quote}"</blockquote>
            <div class="testi-who">
              <div class="testi-avatar"></div>
              <div><div class="testi-name">${t.author}</div><div class="testi-role">${t.role} — ${t.company}</div></div>
            </div>
          </div>`).join('')}
        </div>
      </div>

      ${ctaBlock('Ready to build with us?','Tell us what you need. We\'ll tell you honestly if we\'re the right team.','Start a project','contact','See our work','case-studies')}
    </div>
  </main>`);
};

/* ── PATCH: CAREERS  (adds per-job requirements) ── */
ROUTES['careers'] = () => {
  setTitle('Careers');
  const D = SOFTMACO_DATA;
  H(`
  <main style="padding-top:100px;">
    <div class="wrap">
      <div class="section-head reveal" style="margin-bottom:60px;">
        <div class="eyebrow">JOIN SOFTMACO</div>
        <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Build something meaningful.</h1>
        <p>We keep teams small and senior. No layers of management between you and the work. Real ownership, real impact.</p>
      </div>

      <!-- Perks row -->
      <div class="g4" style="margin-bottom:56px;">
        ${[
          {icon:'🌍',t:'Fully Remote',d:'Work from anywhere. Async-first culture with optional in-person sprints.'},
          {icon:'📈',t:'Real Equity',d:'Meaningful stake in Softmaco and the products you ship.'},
          {icon:'🧠',t:'Learning Budget',d:'$2,000/yr for courses, books, conferences — no approvals needed.'},
          {icon:'🛡️',t:'Health + Wellness',d:'Comprehensive cover for you and your family, day one.'}
        ].map(p=>`
        <div class="card reveal">
          <div style="font-size:1.75rem;margin-bottom:10px;">${p.icon}</div>
          <h3 style="font-size:15px;margin-bottom:6px;">${p.t}</h3>
          <p style="font-size:13px;color:var(--muted);">${p.d}</p>
        </div>`).join('')}
      </div>

      <!-- Job listings -->
      <h2 class="reveal" style="font-size:clamp(20px,2.5vw,28px);margin-bottom:24px;">Open positions</h2>
      <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:56px;">
        ${D.careers.map((j,i)=>`
        <div class="card reveal" id="job-card-${i}">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:16px;">
            <div style="flex:1;min-width:260px;">
              <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:8px;">
                <h3 style="font-size:18px;">${j.title}</h3>
                <span class="badge badge-live">Open</span>
              </div>
              <p style="font-size:14px;color:var(--muted);margin-bottom:12px;">${j.description}</p>
              <div class="job-tags">
                <span class="job-tag">${j.department}</span>
                <span class="job-tag">${j.location}</span>
                <span class="job-tag">${j.type}</span>
                <span class="job-tag" style="color:var(--brass);border-color:var(--brass-soft);">${j.salary}</span>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end;">
              <a onclick="navigate('contact');showToast('Application opened for: ${j.title.replace(/'/g,'\\\'')}')" class="btn btn-azure btn-sm">Apply now →</a>
              <button onclick="toggleJob(${i})" class="btn btn-ghost btn-sm" id="job-toggle-${i}">View requirements</button>
            </div>
          </div>
          <div id="job-req-${i}" style="display:none;margin-top:20px;padding-top:20px;border-top:1px solid var(--line);">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;text-transform:uppercase;color:var(--muted-2);margin-bottom:12px;">Requirements</div>
            <ul style="display:flex;flex-direction:column;gap:10px;">
              ${j.requirements.map(r=>`<li style="display:flex;gap:10px;font-size:14px;color:var(--muted);"><span style="color:var(--azure);flex-shrink:0;">→</span>${r}</li>`).join('')}
            </ul>
          </div>
        </div>`).join('')}
      </div>

      <!-- Open application -->
      <div class="cta-box reveal">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">OPEN APPLICATION</div>
        <h2>Don't see the right role?</h2>
        <p>We occasionally hire exceptional generalists. Send us what you've built and why you think we'd be a good match.</p>
        <div class="cta-actions">
          <a href="mailto:hello@softmaco.com" class="btn btn-primary btn-lg">hello@softmaco.com</a>
          <a onclick="navigate('about')" class="btn btn-ghost btn-lg">Learn about us first</a>
        </div>
      </div>
    </div>
  </main>`);
};

window.toggleJob = function(i) {
  const body = document.getElementById(`job-req-${i}`);
  const btn = document.getElementById(`job-toggle-${i}`);
  if (!body) return;
  const open = body.style.display === 'block';
  body.style.display = open ? 'none' : 'block';
  btn.textContent = open ? 'View requirements' : 'Hide requirements';
};

/* ── PATCH: SERVICES  (adds process steps + industries per service) ── */
ROUTES['services'] = () => {
  setTitle('Services');
  const D = SOFTMACO_DATA;
  H(`
  <main style="padding-top:100px;">
    <div class="wrap">
      <div class="section-head reveal" style="margin-bottom:60px;">
        <div class="eyebrow">ENGINEERING CAPABILITIES</div>
        <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Everything in one place.</h1>
        <p>From first wireframe to production server — one team, full accountability.</p>
      </div>

      <!-- services accordion -->
      <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:60px;" id="svc-list">
        ${D.services.map((s,i)=>`
        <div class="card reveal" id="svc-${i}">
          <button onclick="toggleSvc(${i})" style="width:100%;background:none;border:none;display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;padding:4px 0;text-align:left;">
            <div style="display:flex;align-items:center;gap:16px;">
              <div class="service-icon" style="margin-bottom:0;flex-shrink:0;">${s.icon}</div>
              <h3 style="font-size:18px;color:var(--text);">${s.title}</h3>
            </div>
            <span style="color:var(--azure);font-size:20px;flex-shrink:0;transition:transform .25s ease;" id="svc-icon-${i}">+</span>
          </button>
          <div id="svc-body-${i}" style="display:none;margin-top:22px;padding-top:22px;border-top:1px solid var(--line);">
            <div class="g2" style="gap:28px;">
              <div>
                <p style="color:var(--muted);font-size:14.5px;margin-bottom:18px;">${s.summary}</p>
                <div style="margin-bottom:16px;">
                  <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;text-transform:uppercase;color:var(--muted-2);margin-bottom:10px;">Benefits</div>
                  <ul style="display:flex;flex-direction:column;gap:8px;">
                    ${s.benefits.map(b=>`<li style="display:flex;gap:8px;font-size:13.5px;color:var(--text);"><span style="color:var(--azure);">✓</span>${b}</li>`).join('')}
                  </ul>
                </div>
                <div>
                  <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;text-transform:uppercase;color:var(--muted-2);margin-bottom:8px;">Industries</div>
                  <div class="tech-row">${s.industries.map(ind=>`<span class="tech-pill" style="color:var(--brass);border-color:var(--brass-soft);">${ind}</span>`).join('')}</div>
                </div>
              </div>
              <div>
                <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;text-transform:uppercase;color:var(--muted-2);margin-bottom:14px;">Our Process</div>
                <div style="display:flex;flex-direction:column;gap:10px;">
                  ${s.process.map((step,pi)=>`
                  <div style="display:flex;align-items:flex-start;gap:12px;">
                    <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;background:var(--azure-soft);color:var(--azure);width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">${pi+1}</div>
                    <span style="font-size:14px;color:var(--text);padding-top:4px;">${step}</span>
                  </div>`).join('')}
                </div>
                <div style="margin-top:18px;">
                  <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;text-transform:uppercase;color:var(--muted-2);margin-bottom:8px;">Technologies</div>
                  <div class="tech-row">${s.technologies.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div>
                </div>
              </div>
            </div>
            <div style="margin-top:20px;padding-top:20px;border-top:1px solid var(--line);text-align:right;">
              <a onclick="navigate('contact')" class="btn btn-ghost btn-sm">Discuss this →</a>
            </div>
          </div>
        </div>`).join('')}
      </div>

      ${ctaBlock('Need something custom?','Every engagement starts with an honest conversation about what you actually need.','Schedule a call','contact','See case studies','case-studies')}
    </div>
  </main>`);
};

window.toggleSvc = function(i) {
  const body = document.getElementById(`svc-body-${i}`);
  const icon = document.getElementById(`svc-icon-${i}`);
  if (!body) return;
  const open = body.style.display === 'block';
  body.style.display = open ? 'none' : 'block';
  icon.style.transform = open ? 'rotate(0deg)' : 'rotate(45deg)';
};

/* ── PATCH: BLOG  (adds category filter tabs) ── */
ROUTES['blog'] = () => {
  setTitle('Blog');
  const D = SOFTMACO_DATA;
  const cats = ['All', ...new Set(D.blogPosts.map(b=>b.category))];
  H(`
  <main style="padding-top:100px;">
    <div class="wrap">
      <div class="section-head reveal" style="margin-bottom:48px;">
        <div class="eyebrow">SOFTMACO ENGINEERING JOURNAL</div>
        <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Thinking on software and AI.</h1>
        <p>Deep dives from the team actually shipping this stuff.</p>
      </div>

      <div class="filter-pills reveal" id="blog-cats" style="margin-bottom:36px;gap:8px;">
        ${cats.map(c=>`<button class="filter-pill ${c==='All'?'active':''}" data-cat="${c}">${c}</button>`).join('')}
      </div>

      <div class="g2" id="blog-grid">
        ${D.blogPosts.map(b=>`
        <div class="card reveal" style="cursor:pointer;" data-cat="${b.category}" onclick="navigate('blog',{id:'${b.id}'})">
          <div class="blog-meta"><span>${b.category}</span><span>${b.readTime}</span><span>${b.date}</span></div>
          <h2 style="font-size:clamp(17px,2vw,21px);margin-bottom:12px;line-height:1.3;">${b.title}</h2>
          <p style="color:var(--muted);font-size:14px;line-height:1.6;margin-bottom:18px;">${b.excerpt}</p>
          <div style="border-top:1px solid var(--line);padding-top:14px;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-size:13px;font-weight:600;">${b.author}</div>
              <div style="font-size:12px;color:var(--muted-2);">${b.authorRole}</div>
            </div>
            <span style="color:var(--azure);font-size:13px;">Read →</span>
          </div>
        </div>`).join('')}
      </div>

      <!-- newsletter -->
      <div class="card reveal" style="margin-top:60px;text-align:center;padding:40px;background:var(--panel-2);">
        <div class="eyebrow" style="justify-content:center;margin-bottom:14px;">STAY UPDATED</div>
        <h3 style="font-size:22px;margin-bottom:8px;">Get new articles in your inbox.</h3>
        <p style="color:var(--muted);font-size:14px;margin-bottom:20px;">No spam. Unsubscribe anytime.</p>
        <form onsubmit="event.preventDefault();showToast('Subscribed! Next article drops soon.')" style="display:flex;gap:10px;max-width:420px;margin:0 auto;">
          <input type="email" class="form-input" placeholder="you@company.com" required style="flex:1;">
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  </main>`);

  // category filter
  document.querySelectorAll('#blog-cats .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#blog-cats .filter-pill').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('#blog-grid .card').forEach(card => {
        card.style.display = (cat === 'All' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
};

/* ── PATCH: CONTACT  (adds social links + FAQ strip) ── */
ROUTES['contact'] = () => {
  setTitle('Contact');
  const D = SOFTMACO_DATA;
  H(`
  <main style="padding-top:100px;">
    <div class="wrap">
      <div class="section-head reveal" style="margin-bottom:60px;">
        <div class="eyebrow">GET IN TOUCH</div>
        <h1 style="font-size:clamp(32px,4vw,48px);margin-top:14px;">Let's talk about your project.</h1>
        <p>Custom builds, product demos, enterprise licensing, or a genuine second opinion — we're easy to reach and honest to a fault.</p>
      </div>

      <div class="g2" style="margin-bottom:60px;">
        <!-- Form -->
        <div class="card reveal" style="padding:40px;">
          <div class="eyebrow" style="margin-bottom:24px;">SEND AN INQUIRY</div>
          <form onsubmit="handleContact(event)">
            <div class="g2" style="gap:16px;">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-input" placeholder="Sarah Jenkins" required>
              </div>
              <div class="form-group">
                <label class="form-label">Work Email</label>
                <input type="email" class="form-input" placeholder="sarah@company.com" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Company / Organisation</label>
              <input type="text" class="form-input" placeholder="Apex Corp">
            </div>
            <div class="form-group">
              <label class="form-label">Category</label>
              <select class="form-select">
                <option>Custom Software Development</option>
                <option>AI / Machine Learning</option>
                <option>RestroAI Enterprise Licensing</option>
                <option>InventoryPro Solution</option>
                <option>SoftCRM License</option>
                <option>Cloud & DevOps</option>
                <option>Venture Partnership / Other</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Estimated Budget</label>
              <select class="form-select">
                <option>< $10,000</option>
                <option>$10,000 – $50,000</option>
                <option>$50,000 – $150,000</option>
                <option>$150,000+</option>
                <option>Let's discuss</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Project Overview</label>
              <textarea class="form-textarea" placeholder="Tell us about your goals, timelines, and any technical requirements…" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;">Send inquiry →</button>
          </form>
        </div>

        <!-- Info panel -->
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div class="card reveal">
            <div class="eyebrow" style="margin-bottom:18px;">OFFICES</div>
            <div style="display:flex;flex-direction:column;gap:20px;">
              <div>
                <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--azure);text-transform:uppercase;margin-bottom:6px;">Headquarters · San Francisco</div>
                <p style="color:var(--muted);font-size:14px;line-height:1.6;">${D.company.contact.address}</p>
              </div>
              <div>
                <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--brass);text-transform:uppercase;margin-bottom:6px;">India Innovation Centre · Gurugram</div>
                <p style="color:var(--muted);font-size:14px;line-height:1.6;">${D.company.contact.indiaOffice}</p>
              </div>
            </div>
          </div>

          <div class="card reveal">
            <div class="eyebrow" style="margin-bottom:18px;">DIRECT CONTACT</div>
            <div style="display:flex;flex-direction:column;gap:14px;font-size:14px;">
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted-2);width:52px;text-transform:uppercase;">Email</span>
                <a href="mailto:${D.company.contact.email}" style="color:var(--azure);">${D.company.contact.email}</a>
              </div>
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted-2);width:52px;text-transform:uppercase;">Phone</span>
                <span>${D.company.contact.phone}</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--muted-2);width:52px;text-transform:uppercase;">Hours</span>
                <span style="color:var(--muted);">${D.company.contact.hours}</span>
              </div>
            </div>
          </div>

          <div class="card reveal">
            <div class="eyebrow" style="margin-bottom:18px;">SOCIAL</div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              <a href="${D.company.social.linkedin}" target="_blank" class="btn btn-ghost btn-sm">LinkedIn ↗</a>
              <a href="${D.company.social.github}" target="_blank" class="btn btn-ghost btn-sm">GitHub ↗</a>
              <a href="${D.company.social.twitter}" target="_blank" class="btn btn-ghost btn-sm">X / Twitter ↗</a>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="card reveal" style="padding:0;overflow:hidden;">
            <div style="width:100%;height:180px;background:linear-gradient(135deg,var(--panel-2),var(--panel-3));display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;border-bottom:1px solid var(--line);">
              <span style="font-size:2rem;">📍</span>
              <div style="font-weight:600;font-size:14px;">500 Technology Blvd, Suite 1200</div>
              <div style="font-size:12px;color:var(--muted);">San Francisco, CA 94107</div>
            </div>
            <div style="padding:14px 20px;display:flex;align-items:center;gap:8px;">
              <span style="width:8px;height:8px;border-radius:50%;background:var(--emerald);flex-shrink:0;"></span>
              <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--emerald);">Office open · ${D.company.contact.hours}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ strip -->
      <div style="margin-bottom:60px;">
        <h2 class="reveal" style="font-size:clamp(20px,2.5vw,28px);margin-bottom:24px;">Before you reach out</h2>
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${faqBlock(D.faqs)}
        </div>
      </div>
    </div>
  </main>`);
};

