/* ==========================================================================
   shared.js — Single source of truth for navbar, footer, scroll reveal,
   toast system, and mobile menu. Include on every page.
   ========================================================================== */
(function () {

  /* Nav mode is declared per-page via <body data-nav-mode="app-portal|app-admin">.
     Unset/anything else = public marketing nav. Keeps each role seeing only the
     options relevant to it, instead of one nav bar trying to serve everyone. */
  const navMode = document.body.dataset.navMode || 'marketing';
  const isApp = navMode === 'app-portal' || navMode === 'app-admin';

  /* ── NAVBAR ── */
  if (isApp) {
    const label = navMode === 'app-portal' ? 'Team Portal' : 'Admin Control';
    document.body.insertAdjacentHTML('afterbegin', `
    <header id="site-header" class="app-header">
      <nav>
        <div class="app-nav-left">
          <a class="logo" href="/index.html">
            <img src="/assets/softmaco_logo.png" alt="Softmaco" class="logo-img">
          </a>
          <span class="app-divider"></span>
          <span class="app-label">${label}</span>
        </div>
        <div class="app-nav-right">
          <a href="/index.html" class="app-link">Main site <span class="app-link-arrow">↗</span></a>
          <span id="sm-nav-auth" class="nav-auth"></span>
        </div>
      </nav>
    </header>
    <div class="toast-container" id="toasts"></div>`);
  } else {
    document.body.insertAdjacentHTML('afterbegin', `
    <header id="site-header">
      <nav>
        <a class="logo" href="/index.html">
          <img src="/assets/softmaco_logo.png" alt="Softmaco" class="logo-img">
        </a>

        <ul class="nav-links" id="main-nav">
          <li><a href="/index.html">Home</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/products.html">Products</a></li>
          <li><a href="/team.html">Team</a></li>
          <li><a href="/blog.html">Blog</a></li>
          <li><a href="/careers.html">Careers</a></li>
        </ul>

        <div class="nav-cta">
          <a href="/portal.html" class="btn btn-ghost btn-sm">Team Portal 🔑</a>
          <a href="/contact.html" class="btn btn-primary btn-sm">Start a project →</a>
          <button class="menu-toggle" id="menu-toggle-btn" onclick="smToggleNav()" aria-label="Open menu" aria-expanded="false">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <line x1="3" y1="5" x2="17" y2="5"/>
              <line x1="3" y1="10" x2="17" y2="10"/>
              <line x1="3" y1="15" x2="17" y2="15"/>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile drawer -->
      <div class="mobile-nav" id="mobile-nav" aria-hidden="true">
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
        <a href="/#services">Services</a>
        <a href="/products.html">Products</a>
        <a href="/team.html">Team</a>
        <a href="/blog.html">Blog</a>
        <a href="/careers.html">Careers</a>
        <a href="/portal.html">Team Portal 🔑</a>
        <a href="/contact.html" class="btn btn-azure btn-sm" style="width:fit-content;">Contact us</a>
      </div>
    </header>
    <div class="toast-container" id="toasts"></div>`);
  }

  /* ── FOOTER ── */
  if (isApp) {
    document.body.insertAdjacentHTML('beforeend', `
    <footer class="app-footer">
      <div class="wrap">
        <span>© <span id="sm-year"></span> Softmaco Inc. All rights reserved.</span>
        <a href="/index.html" class="app-link">← Back to softmaco.com</a>
      </div>
    </footer>`);
  } else {
    document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <a class="logo" href="/index.html"><img src="/assets/softmaco_logo.png" alt="Softmaco" class="logo-img"></a>
            <p>An AI-first software studio designing and building products for startups, enterprises — and ourselves.</p>
            <div class="footer-social" style="margin-top:20px;">
              <a href="https://linkedin.com/company/softmaco" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://twitter.com/softmaco" target="_blank" rel="noopener">X / Twitter</a>
              <a href="https://github.com/softmaco" target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="/about.html">About us</a></li>
              <li><a href="/team.html">Team</a></li>
              <li><a href="/careers.html">Careers</a></li>
              <li><a href="/blog.html">Blog</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Work</h5>
            <ul>
              <li><a href="/services.html">Services</a></li>
              <li><a href="/products.html">Products</a></li>
              <li><a href="/case-studies.html">Case Studies</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Products</h5>
            <ul>
              <li><a href="/product.html?id=restroai">RestroAI</a></li>
              <li><a href="/product.html?id=inventorypro">InventoryPro</a></li>
              <li><a href="/product.html?id=softcrm">SoftCRM</a></li>
              <li><a href="/product.html?id=datapulse">DataPulse AI</a></li>
              <li><a href="/product.html?id=softlaunch">SoftLaunch</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@softmaco.com">hello@softmaco.com</a></li>
              <li><a href="/contact.html">Send inquiry</a></li>
              <li><a href="/privacy.html">Privacy Policy</a></li>
              <li><a href="/terms.html">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span id="sm-year"></span> Softmaco Inc. All rights reserved.</span>
          <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--muted-2);">AI-first · San Francisco &amp; Gurugram</span>
          <a href="/admin.html" style="color:var(--muted-2);font-size:12px;">Staff Admin →</a>
        </div>
      </div>
    </footer>`);
  }

  document.getElementById('sm-year').textContent = new Date().getFullYear();

  /* ── ACTIVE NAV LINK ── */
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#main-nav a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const hFile = href.split('/').pop() || 'index.html';
    if (hFile === file) a.classList.add('active');
  });

  /* ── APP NAV AUTH (role-aware login state in the header) ── */
  const LOGOUT_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`;

  function logoutBtn(fn) {
    return `<button class="icon-btn" onclick="${fn}(); return false;" title="Log out" aria-label="Log out">${LOGOUT_ICON}</button>`;
  }

  function navAuthHTML() {
    if (navMode === 'app-portal') {
      if (!localStorage.getItem('softmaco_logged_user')) return '';
      const u = window.SM_CURRENT_USER || {};
      const name = u.name || 'You';
      const avatar = u.photo
        ? `<img src="${u.photo}" alt="">`
        : `<span class="user-chip-initial">${name.charAt(0)}</span>`;
      return `<span class="user-chip">${avatar}<span class="user-chip-name">${name}</span></span>` + logoutBtn('logout');
    }
    if (navMode === 'app-admin') {
      if (sessionStorage.getItem('softmaco_admin') !== '1') return '';
      return `<span class="user-chip"><span class="user-chip-initial admin">⚙</span><span class="user-chip-name">Admin</span></span>` + logoutBtn('adminLogout');
    }
    return '';
  }
  if (isApp) {
    document.getElementById('sm-nav-auth').innerHTML = navAuthHTML();
    window.smRefreshNavAuth = function () {
      document.getElementById('sm-nav-auth').innerHTML = navAuthHTML();
    };
  }

  /* ── HEADER SHADOW ON SCROLL ── */
  window.addEventListener('scroll', () => {
    const h = document.getElementById('site-header');
    h.style.boxShadow = window.scrollY > 10 ? '0 4px 32px rgba(0,0,0,.35)' : 'none';
  }, { passive: true });

  /* ── MOBILE NAV TOGGLE ── */
  window.smToggleNav = function () {
    const nav = document.getElementById('mobile-nav');
    const btn = document.getElementById('menu-toggle-btn');
    const isOpen = nav.classList.toggle('open');
    nav.setAttribute('aria-hidden', String(!isOpen));
    btn.setAttribute('aria-expanded', String(isOpen));
  };

  /* Close mobile nav on outside click */
  document.addEventListener('click', e => {
    const nav = document.getElementById('mobile-nav');
    const btn = document.getElementById('menu-toggle-btn');
    if (nav && nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
      nav.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  /* ── SCROLL REVEAL ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  function initReveal() {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
  setTimeout(initReveal, 300); // catch late-rendered elements

  /* ── TOAST SYSTEM ── */
  window.showToast = function (msg, color) {
    color = color || 'var(--emerald)';
    const c = document.getElementById('toasts');
    if (!c) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.style.borderColor = color;
    t.innerHTML = '<span style="color:' + color + '">✓</span> ' + msg;
    c.appendChild(t);
    setTimeout(function () {
      t.style.opacity = '0';
      t.style.transition = 'opacity .3s';
      setTimeout(function () { t.remove(); }, 300);
    }, 4000);
  };

})();
