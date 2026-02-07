/* Data + interactions for the portfolio site */
const PROFILE = {
  name: "Akshay S S",
  roles: [
    "ECE Student",
    "VLSI / Verilog HDL",
    "Embedded Systems",
    "Digital Design"
  ],
  summary:
    "Electronics and Communication engineering enthusiast with hands‑on exposure to embedded systems, digital electronics, VLSI fundamentals and UAV technology. Interested in practical prototyping, documentation and real‑time learning environments.",
  email: "akshaylakshna@gmail.com", // corrected domain
  phone: "+91 7397662991",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/akshay-s-s-28089b345",
  github: "https://github.com/AKSHAY09012006",
  instagram: "https://www.instagram.com/akshay.iq/",
  resume: "https://drive.google.com/file/d/1bTc9lV2PaMuehr7Cycd6G5BaviCClvVH/view?usp=sharing",
  badges: ["ECE", "VLSI", "Verilog HDL", "Embedded C", "IoT", "Digital Logic"],
  languages: [
    { name: "Malayalam", level: "Native" },
    { name: "Tamil", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "Intermediate" },
  ],
};

// Contact backend configuration — replace formspreeFormId with your Formspree form ID.
const CONTACT_BACKEND = { type: 'formspree', formspreeFormId: 'xblqyywp' };

const SKILLS = [
  {
    title: "Programming",
    items: [
      { name: "C", level: 70 },
      { name: "Python", level: 55 },
      { name: "SQL", level: 50 },
    ],
  },
  {
    title: "Electronics & Embedded",
    items: [
      { name: "Digital Electronics", level: 60 },
      { name: "Microcontrollers", level: 55 },
      { name: "Verilog", level: 50 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: 45 },
      { name: "MS Office", level: 75 },
      { name: "Simulation & Documentation Tools", level: 55 },
    ],
  },
  {
    title: "Concepts",
    items: [
      { name: "UAV Systems", level: 45 },
      { name: "VLSI Fundamentals", level: 55 },
      { name: "Automation", level: 50 },
    ],
  },
];

const PUBLICATIONS = [
  {
    title: "Revolutionizing VLSI Design: Integrating QCA for Future‑Ready Systems",
    desc: "Publication/Presentation; IEEE‑format research work.",
    tags: ["Publication", "VLSI", "QCA"],
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10841562&isnumber=10841479",
  },
];

const PROJECTS = [
  {
    title: "Autonomous Logistics Drone",
    desc: "Autonomous UAV for precise payload delivery using computer vision and GPS. Features failsafe mechanisms and reduced human intervention.",
    tags: ["UAV", "Drone", "Computer Vision", "Embedded", "Logistics"],
    link: "https://drive.google.com/drive/folders/1fclnMLwHnFThjI2CrSZsVXJsmFPDIvjM?usp=drive_link",
    workflow: "https://drive.google.com/drive/folders/1fclnMLwHnFThjI2CrSZsVXJsmFPDIvjM?usp=drive_link",
    report: "https://drive.google.com/drive/folders/1gagtuBQLaLjptNFnMS1WqHWTngn5SyLy?usp=sharing",
  },
  {
    title: "Smart Battery Monitoring System (IoT-Based | Arduino & ESP32)",
    desc: "Real-time battery monitoring system measuring voltage and estimating SOC. Features OLED display, ESP32 Wi-Fi connectivity for MQTT cloud logging, and fault alert support.",
    tags: ["IoT", "Arduino", "ESP32", "MQTT", "C/C++", "Embedded", "Sensors"],
    link: "https://wokwi.com/projects/443977277636198401",
    report: "https://drive.google.com/file/d/1QbtUvj67SesyGE46RAaKSby6MhH8pfKw/view?usp=sharing",
  },
  {
    title: "Real‑Time Gas Monitoring System (RTGMS)",
    desc: "Embedded LPG/propane monitoring using HX711 load cell + MQ‑6 sensor with LCD and buzzer.",
    tags: ["Embedded", "Sensors", "C"],
    link: "https://wokwi.com/projects/437115151985582081",
    report: "https://drive.google.com/file/d/1mMDl24n0oo1D2Rrw4yOzHp4PrSHluflJ/view?usp=sharing",
  },
  {
    title: "Vision Cane — Assistive Navigation Prototype",
    desc: "Ultrasonic‑based smart cane with vibration feedback; user‑centric design.",
    tags: ["Embedded", "Sensors"],
    link: "#",
    report: "https://drive.google.com/file/d/1HuYhNUWZTk_ZOqqtBCYQ4nLbB94SZIk4/view?usp=sharing",
  },
  {
    title: "ExpanseIQ",
    desc: "Expense intelligence web app (demo).",
    tags: ["Web", "JS"],
    link: "assets/projects/ExpanseIQ/index.html",
    github: "https://github.com/AKSHAY09012006/ExpanseIq.git",
  },
  {
    title: "Complaint Management System",
    desc: "Simple portal for complaint submission and status tracking.",
    tags: ["Web"],
    link: "assets/projects/ComplaintSystem/index.html",
    github: "https://github.com/AKSHAY09012006/ComplaintHub.git",
  },
  {
    title: "Elite Shop — Mini E‑Commerce Prototype",
    desc: "Basic online shop prototype with product listing and checkout flow.",
    tags: ["Web", "E‑commerce"],
    link: "assets/projects/EliteShop/index.html",
    github: "https://github.com/AKSHAY09012006/EliteShop.git",
  },
];

const CERTS = [
  {
    title: "DCDC - Digital Communication and Design Club",
    link: "assets/certificates/Hands On Section DCDC.pdf",
  },
  {
    title: "Code Galata - Programming Certification",
    link: "assets/certificates/Code Galata.pdf",
  },
  {
    title: "Design Thinking - A Primer (NPTEL)",
    link: "assets/certificates/Design Thinking - A Primer.pdf",
  },
  {
    title: "Community Connect (NGO) - Human Milk Bank",
    link: "assets/certificates/Community Connect (NGO).pdf",
  },
  {
    title: "Cool Maker Solar Systems Internship",
    link: "assets/certificates/AKSHAY INTERSHIP 2.pdf",
  },
  {
    title: "IEEE – Certificate of Presentation (ICACRS 2024)",
    link: "assets/certificates/273-3.pdf",
  },
  {
    title: "WOPPD 2024 - Photonics Workshop (SRM)",
    link: "assets/certificates/WOPPD.pdf",
  },
  {
    title: "Amphenol Omniconnect Internship",
    link: "assets/certificates/Internship Certificate.pdf",
  },
  {
    title: "Oracle Certified Foundations Associate",
    link: "assets/certificates/Orcale.pdf",
  },
  {
    title: "MongoDB Atlas Administration",
    link: "assets/certificates/MangoDB.pdf",
  },
  {
    title: "Verilog HDL: VLSI Hardware Design (Udemy)",
    link: "assets/certificates/VSLI UDEMY.pdf",
  },
];

const EXPERIENCE = [
  { period: "Dec 2024", role: "Technical Trainee", where: "Amphenol Omniconnect India Pvt. Ltd.", notes: "Exposure to production workflows, quality discipline, and documentation in a manufacturing setup." },
  { period: "Jun 2025", role: "Technical Intern", where: "Coolmaker Solar Systems Pvt. Ltd.", notes: "Gained hands-on experience in solar panel installation, fixing, and servicing. Additionally, performed installation and maintenance services for solar water heaters." },
  { period: "Jan 2 2026 — Jan 31 2026", role: "Electronics Head", where: "Aerospace & UAV Technology", notes: "Worked on Computer Vision (CV) integration and assisted in UAV assembly." },
  { period: "Dates", role: "Intern Trainee", where: "SRM Institute of Science and Technology, Kattankulathur", notes: "Mastered the complete PCB manufacturing process from raw materials to assembly, developing hands-on skills in chemical etching and solder mask application. Conducted electrical continuity and short-circuit testing to ensure reliability. Bridged hardware with embedded systems by programming ESP32 firmware for sensor interfacing." },
];

const EDUCATION = [
  { period: "Aug 2023 — May 2027", role: "Bachelor of Technology (B.Tech) — Electronics & Communication Engineering", where: "SRM Institute of Science & Technology, Ramapuram", notes: "CGPA: 7.74" },
  { period: "Jun 2022 — May 2023", role: "Higher Secondary (Computer Maths)", where: "Green Garden Matriculation Higher Secondary School, Erode", notes: "Percentage: 64%" },
];

// DOM helpers
const $ = (sel) => document.querySelector(sel);
function el(tag, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}
// Ensure external links are absolute (prevents same-site redirects when protocol is omitted)
function toAbsUrl(url) {
  if (!url || url === '#') return '#';
  return /^https?:\/\//i.test(url) ? url : `https://${url.replace(/^\/+/, '')}`;
}

// Populate hero
function hydrateHero() {
  const setText = (sel, val) => { const n = $(sel); if (n) n.textContent = val; };
  const setHref = (sel, val) => { const n = $(sel); if (n) n.href = val; };

  setText("#name", PROFILE.name);
  setText("#summary", PROFILE.summary);
  setHref("#resumeLink", PROFILE.resume);
  setHref("#linkedinLink", toAbsUrl(PROFILE.linkedin));
  setHref("#linkedinLink2", toAbsUrl(PROFILE.linkedin));
  setHref("#instagramLink", toAbsUrl(PROFILE.instagram));
  const gh = $("#githubLink");
  if (gh) { gh.href = toAbsUrl(PROFILE.github); gh.textContent = PROFILE.github && PROFILE.github !== "#" ? "GitHub" : "Add GitHub"; }
  const email = $("#emailLink"); if (email) { email.href = `mailto:${PROFILE.email}`; email.textContent = PROFILE.email; }
  const phone = $("#phoneLink"); if (phone) { phone.href = `tel:${PROFILE.phone.replace(/\s|\+/g, "")}`; phone.textContent = PROFILE.phone; }
  setText("#locationText", PROFILE.location);
  setText("#year", String(new Date().getFullYear()));
  // badges
  const badgesRoot = $("#heroBadges");
  if (badgesRoot) {
    PROFILE.badges.forEach((b) => {
      const s = el("span", "badge");
      s.textContent = b;
      badgesRoot.appendChild(s);
    });
  }
  // Languages
  if (PROFILE.languages && PROFILE.languages.length) {
    const wrap = el("div");
    wrap.className = "badges";
    PROFILE.languages.forEach((lng) => {
      const s = el("span", "badge");
      s.textContent = `${lng.name}: ${lng.level}`;
      wrap.appendChild(s);
    });
    const hero = $(".hero__content"); if (hero) hero.appendChild(wrap);
  }
}

// Typing effect
function typing(elm, words) {
  let i = 0, j = 0, dir = 1;
  function tick() {
    const word = words[i];
    j += dir;
    elm.textContent = word.slice(0, j);
    if (j === word.length + 12) dir = -1; // pause at end
    if (j === 0) { dir = 1; i = (i + 1) % words.length; }
    const delay = dir > 0 ? 80 : 40;
    setTimeout(tick, delay);
  }
  tick();
}

// Skills
function drawSkills() {
  const grid = $("#skillsGrid");
  SKILLS.forEach(cat => {
    const card = el("div", "skill reveal");
    const h = el("h4"); h.textContent = cat.title; card.appendChild(h);
    cat.items.forEach(it => {
      const row = el("div"); row.style.margin = "10px 0"; row.textContent = it.name;
      const bar = el("div", "progress");
      const span = el("span");
      span.style.width = "0%"; // will animate on reveal
      bar.appendChild(span);
      card.appendChild(row); card.appendChild(bar);
      // store level for reveal
      bar.dataset.level = it.level;
    });
    grid.appendChild(card);
  });
}

// Cards utility
function makeCard(item) {
  const card = el("article", "card tilt reveal");
  const body = el("div", "card__body");
  const h = el("h4", "card__title"); h.textContent = item.title; body.appendChild(h);
  if (item.desc) { const p = el("p", "card__desc"); p.textContent = item.desc; body.appendChild(p); }

  if (item.tags) {
    const tags = el("div", "card__tags");
    item.tags.forEach(t => { const s = el("span", "tag"); s.textContent = t; tags.appendChild(s); });
    body.appendChild(tags);
  }
  card.appendChild(body);

  // Actions: remove all "Live Demo" for Projects; keep links for other sections
  const isProjects = item.section === 'projects';
  const github = item.github || null;
  const report = item.report || null;
  const workflow = item.workflow || null;

  // For non-project cards (e.g., Publications/Certificates), keep the single link as "Open →"
  const openLink = (!isProjects) ? (item.demo || item.link || null) : null;
  // For projects, show simulation link only for Wokwi links (external simulation URLs)
  const simLink = (isProjects && item.link && item.link !== '#' && item.link.includes('wokwi.com')) ? item.link : null;

  if (github || openLink || simLink || report || workflow) {
    const acts = el("div", "actions");
    if (openLink) {
      const a1 = el("a"); a1.href = openLink; a1.target = "_blank"; a1.rel = "noreferrer"; a1.textContent = "Open →"; acts.appendChild(a1);
    }
    if (simLink) {
      const aSim = el("a"); aSim.href = simLink; aSim.target = "_blank"; aSim.rel = "noreferrer"; aSim.textContent = "Simulation →"; acts.appendChild(aSim);
    }
    if (report) {
      const aRep = el("a"); aRep.href = report; aRep.target = "_blank"; aRep.rel = "noreferrer"; aRep.textContent = "Report →"; acts.appendChild(aRep);
    }
    if (workflow) {
      const aWork = el("a"); aWork.href = workflow; aWork.target = "_blank"; aWork.rel = "noreferrer"; aWork.textContent = "Workflow →"; acts.appendChild(aWork);
    }
    if (github) { const a2 = el("a"); a2.href = github; a2.target = "_blank"; a2.rel = "noreferrer"; a2.textContent = "GitHub →"; acts.appendChild(a2); }
    card.appendChild(acts);
  }
  return card;
}

function drawProjects() {
  const grid = $("#projectsGrid");
  PROJECTS.forEach(p => grid.appendChild(makeCard({ ...p, section: 'projects' })));
}

function drawPublications() {
  const grid = $("#publicationsGrid");
  if (!grid) return;
  PUBLICATIONS.forEach(p => grid.appendChild(makeCard(p)));
}

async function drawCerts() {
  const grid = $("#certsGrid");
  if (!grid) return;
  let list = [];
  try {
    const res = await fetch(`assets/data/certificates.json?t=${Date.now()}`);
    list = await res.json();
  } catch (e) {
    // fallback to embedded CERTS array if fetch fails
    list = CERTS || [];
  }
  list.forEach(c => {
    const card = makeCard({ title: c.title, desc: c.desc || "", tags: ["Certificate"], link: c.link });
    const a = card.querySelector('.actions a');
    if (a) {
      if (c.images && c.images.length) {
        a.textContent = 'View Certificates →';
        a.addEventListener('click', (ev) => { ev.preventDefault(); openIfImageAvailable(c); });
      } else {
        // no images; open PDF directly
        a.textContent = 'View Certificates →';
      }
    }
    grid.appendChild(card);
  });
  // Observe newly added cards
  grid.querySelectorAll('.reveal').forEach(n => io.observe(n));
}

function drawTimeline(selector, data) {
  const root = $(selector);
  data.forEach(item => {
    const div = el("div", "item reveal");
    const role = el("div", "role"); role.textContent = `${item.role}`; div.appendChild(role);
    const where = el("div", "where"); where.textContent = `${item.where} • ${item.period}`; div.appendChild(where);
    if (item.notes) { const p = el("p", "muted"); p.textContent = item.notes; div.appendChild(p); }

    root.appendChild(div);
  });
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      // animate any progress bars inside
      e.target.querySelectorAll('.progress').forEach(bar => {
        const level = bar.dataset.level || 0;
        const span = bar.querySelector('span');
        if (span) span.style.width = level + '%';
      });
      // Stop observing once revealed (optional - remove if you want repeat animations)
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Tilt effect
function enableTilt() {
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = ((y / r.height) - .5) * -6;
      const ry = ((x / r.width) - .5) * 6;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

// Scroll progress bar
function scrollProgress() {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  document.getElementById('scroll-progress').style.width = scrolled + '%';
}

// ECE-themed signal animation (oscilloscope-style)
function startECEAnimation() {
  const canvas = document.getElementById('ece-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const css = getComputedStyle(document.documentElement);
  const brand = (css.getPropertyValue('--brand') || '#6cf9e6').trim();
  const brand2 = (css.getPropertyValue('--brand-2') || '#7c6cff').trim();
  let dpr = Math.max(1, window.devicePixelRatio || 1);

  function resize() {
    dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(300, Math.floor(rect.width * dpr));
    canvas.height = Math.max(150, Math.floor(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels
  }
  resize();
  window.addEventListener('resize', resize);

  let raf = 0;
  function draw(now) {
    const t = now / 1000; // seconds
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    ctx.clearRect(0, 0, w, h);
    // Waves removed - keeping canvas clear
    raf = requestAnimationFrame(draw);
  }

  function onVis() {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    }
  }
  document.addEventListener('visibilitychange', onVis);
  raf = requestAnimationFrame(draw);
}


// Contact form -> Submit via Formspree
function setupContactForm() {
  const form = document.querySelector('.contact__form');
  if (!form) return;
  const statusEl = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const fromEmail = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();

    if (!name || !fromEmail || !message) {
      if (statusEl) {
        statusEl.textContent = 'Please fill all required fields.';
        statusEl.style.color = '#ff6b6b';
      }
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const prevText = btn ? btn.textContent : '';
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending…';
    }

    try {
      // Submit directly to Formspree
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd,
      });

      if (res.ok) {
        form.reset();
        if (statusEl) {
          statusEl.textContent = '✓ Thanks! Your message was sent successfully.';
          statusEl.style.color = '#6cf9e6';
        }
      } else {
        if (statusEl) {
          statusEl.textContent = 'Sorry, there was a problem. Please try again.';
          statusEl.style.color = '#ff6b6b';
        }
      }
    } catch (err) {
      if (statusEl) {
        statusEl.textContent = 'Network error. Please check your connection and try again.';
        statusEl.style.color = '#ff6b6b';
      }
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = prevText;
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  hydrateHero();
  const taglineEl = document.getElementById('tagline');
  if (taglineEl) typing(taglineEl, PROFILE.roles);
  if (document.getElementById('skillsGrid')) drawSkills();
  if (document.getElementById('publicationsGrid')) drawPublications();
  if (document.getElementById('projectsGrid')) drawProjects();
  if (document.getElementById('certsGrid')) drawCerts();
  if (document.querySelector('#expTimeline')) drawTimeline('#expTimeline', EXPERIENCE);
  if (document.querySelector('#eduTimeline')) drawTimeline('#eduTimeline', EDUCATION);
  enableTilt();
  setupModal();
  // Observe all elements with reveal class, including dynamically added ones
  document.querySelectorAll('.reveal').forEach(n => io.observe(n));
  // Re-observe after a brief delay to catch dynamically generated content
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(n => io.observe(n));
  }, 100);
  window.addEventListener('scroll', scrollProgress, { passive: true });
  startTopECEAnimation();
  startECEAnimation();
  setupContactForm();
});

// Simple image gallery modal for certificates
const gallery = { items: [], index: 0, title: '', link: '' };
async function imageExists(url) {
  try { const r = await fetch(url, { method: 'HEAD' }); return r.ok; } catch { return false; }
}
async function openIfImageAvailable(cert) {
  const first = (cert.images && cert.images[0]) || null;
  if (!first) { if (cert.link) window.open(cert.link, '_blank'); return; }
  const ok = await imageExists(first);
  if (ok) openGallery(cert); else if (cert.link) window.open(cert.link, '_blank');
}
function setupModal() {
  const modal = document.getElementById('imageModal');
  if (!modal) return;
  const closeBtn = document.getElementById('modalClose');
  const prevBtn = document.getElementById('modalPrev');
  const nextBtn = document.getElementById('modalNext');
  function close() { modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); }
  closeBtn?.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  prevBtn?.addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
  nextBtn?.addEventListener('click', (e) => { e.stopPropagation(); step(1); });
}
function openGallery(cert) {
  gallery.items = cert.images || [];
  gallery.index = 0;
  gallery.title = cert.title || '';
  gallery.link = cert.link || '';
  renderModal();
}
function step(d) {
  if (!gallery.items.length) return;
  gallery.index = (gallery.index + d + gallery.items.length) % gallery.items.length;
  renderModal();
}
function renderModal() {
  const modal = document.getElementById('imageModal');
  const img = document.getElementById('modalImg');
  const cap = document.getElementById('modalCaption');
  if (!modal || !img || !cap) return;
  const src = gallery.items[gallery.index];
  img.onerror = () => {
    // If an image fails inside the modal, close it and open PDF fallback
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    if (gallery.link) window.open(gallery.link, '_blank');
  };
  img.src = src;
  cap.textContent = `${gallery.title} (${gallery.index + 1}/${gallery.items.length})`;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

// Full-width top ECE animation (re-uses same drawing but shorter height)
function startTopECEAnimation() {
  const canvas = document.getElementById('ece-canvas-top');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const css = getComputedStyle(document.documentElement);
  const brand = (css.getPropertyValue('--brand') || '#6cf9e6').trim();
  const brand2 = (css.getPropertyValue('--brand-2') || '#7c6cff').trim();
  let dpr = Math.max(1, window.devicePixelRatio || 1);
  function resize() {
    dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(300, Math.floor(rect.width * dpr));
    canvas.height = Math.max(120, Math.floor(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);
  let raf = 0;
  function draw(now) {
    const t = now / 1000;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const baseA = h * 0.40;
    const A1 = Math.min(18, h * 0.28);
    ctx.beginPath();
    for (let x = 0; x <= w; x += 1) {
      const y = baseA + Math.sin(x * 0.02 + t * 2.3) * A1;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = brand;
    ctx.globalAlpha = 0.85;
    ctx.lineWidth = 1.6;
    ctx.stroke();
    const baseD = h * 0.72;
    const ampD = Math.min(12, h * 0.22);
    const period = 140;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 1) {
      const s = Math.sin((x / period) * Math.PI * 2 + t * 3.4);
      const y = baseD + (s > 0 ? -ampD : ampD);
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = brand2;
    ctx.globalAlpha = 0.6;
    ctx.lineWidth = 1.4;
    ctx.stroke();
    ctx.restore();
    raf = requestAnimationFrame(draw);
  }
  function onVis() {
    if (document.hidden) { cancelAnimationFrame(raf); }
    else { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
  }
  document.addEventListener('visibilitychange', onVis);
  raf = requestAnimationFrame(draw);
}

