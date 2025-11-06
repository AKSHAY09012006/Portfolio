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
    "ECE student focusing on digital design, HDL (Verilog), and embedded systems. I like building practical hardware + software projects and learning VLSI flows.",
  email: "akshaylakshna@gamil.com", // confirm if this should be gmail.com
  phone: "+91 7397662991",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/akshay-s-s-28089b345",
  github: "#",
  resume: "assets/Akshay-Resume.pdf",
  badges: ["ECE", "VLSI", "Verilog HDL", "Embedded C", "IoT", "Digital Logic"],
};

const SKILLS = [
  {
    title: "Digital/VLSI",
    items: [
      { name: "Verilog HDL", level: 80 },
      { name: "ModelSim/Vivado", level: 60 },
      { name: "FPGA basics", level: 55 },
    ],
  },
  {
    title: "Embedded",
    items: [
      { name: "C / Arduino", level: 75 },
      { name: "Sensors & IoT", level: 60 },
      { name: "Microcontrollers", level: 55 },
    ],
  },
  {
    title: "Programming",
    items: [
      { name: "Python", level: 70 },
      { name: "SQL", level: 50 },
      { name: "HTML/CSS/JS", level: 65 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "MATLAB/LTspice", level: 60 },
      { name: "KiCad/Proteus", level: 50 },
      { name: "Git/GitHub", level: 55 },
    ],
  },
];

const PROJECTS = [
  {
    title: "ExpanseIQ",
    desc: "Expense intelligence web app (demo).",
    tags: ["Web", "JS"],
    link: "assets/projects/ExpanseIQ/index.html",
  },
  {
    title: "Elite Shop",
    desc: "E‑commerce sample site.",
    tags: ["Web"],
    link: "assets/projects/EliteShop/index.html",
  },
  {
    title: "Complaint Management System",
    desc: "A complete complaint management system project.",
    tags: ["Full‑stack"],
    link: "assets/projects/ComplaintSystem/index.html",
  },
  {
    title: "DCDC Hands‑On",
    desc: "DC‑DC converter exploration report.",
    tags: ["Power Electronics"],
    link: "assets/projects/DCDC.pdf",
  },
];

const CERTS = [
  { title: "IEEE Certificate", link: "assets/certificates/IEEE.pdf" },
  { title: "Internship Certificate", link: "assets/certificates/Internship Certificate.pdf" },
  { title: "MongoDB", link: "assets/certificates/MongoDB.pdf" },
  { title: "Oracle", link: "assets/certificates/Oracle.pdf" },
  { title: "VLSI Udemy", link: "assets/certificates/VLSI UDEMY.pdf", image: "assets/certificates/VLSI UDEMY_page-0001.jpg" },
  { title: "WOPPD", link: "assets/certificates/WOPPD.pdf" },
  { title: "Design Thinking - A Primer", link: "assets/certificates/Design Thinking - A Primer.pdf" },
  { title: "Code Galata", link: "assets/certificates/Code Galata.pdf" },
  { title: "Community Connect (NGO)", link: "assets/certificates/Community Connect (NGO).pdf" },
];

const EXPERIENCE = [
  { period: "Internship — yyyy", role: "Intern", where: "Company (update)", notes: "Briefly describe your work and outcomes." },
];

const EDUCATION = [
  { period: "B.E./B.Tech — yyyy", role: "Electronics & Communication Engineering", where: "College/University (update)", notes: "CGPA/percentage, highlights." },
];

// DOM helpers
const $ = (sel) => document.querySelector(sel);
function el(tag, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}

// Populate hero
function hydrateHero() {
  $("#name").textContent = PROFILE.name;
  $("#summary").textContent = PROFILE.summary;
  $("#resumeLink").href = PROFILE.resume;
  $("#linkedinLink").href = PROFILE.linkedin;
  $("#linkedinLink2").href = PROFILE.linkedin;
  $("#githubLink").href = PROFILE.github;
  $("#emailLink").href = `mailto:${PROFILE.email}`;
  $("#emailLink").textContent = PROFILE.email;
  $("#phoneLink").href = `tel:${PROFILE.phone.replace(/\s|\+/g, "")}`;
  $("#phoneLink").textContent = PROFILE.phone;
  $("#locationText").textContent = PROFILE.location;
  $("#year").textContent = new Date().getFullYear();
  // badges
  PROFILE.badges.forEach((b) => {
    const s = el("span", "badge");
    s.textContent = b;
    $("#heroBadges").appendChild(s);
  });
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
    const card = el("div", "skill");
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
  const card = el("article", "card tilt");
  const body = el("div", "card__body");
  const h = el("h4", "card__title"); h.textContent = item.title; body.appendChild(h);
  if (item.desc) { const p = el("p", "card__desc"); p.textContent = item.desc; body.appendChild(p); }

  if (item.tags) {
    const tags = el("div", "card__tags");
    item.tags.forEach(t => { const s = el("span", "tag"); s.textContent = t; tags.appendChild(s); });
    body.appendChild(tags);
  }
  card.appendChild(body);

  const foot = el("div", "card__footer");
  const a = el("a"); a.href = item.link || "#"; a.target = "_blank"; a.rel = "noreferrer"; a.textContent = item.link ? "Open" : "Coming soon";
  foot.appendChild(a);
  card.appendChild(foot);
  return card;
}

function drawProjects() {
  const grid = $("#projectsGrid");
  PROJECTS.forEach(p => grid.appendChild(makeCard(p)));
}

function drawCerts() {
  const grid = $("#certsGrid");
  CERTS.forEach(c => {
    const card = makeCard({ title: c.title, desc: c.image ? "Preview available" : "", tags: ["Certificate"], link: c.link });
    grid.appendChild(card);
  });
}

function drawTimeline(selector, data) {
  const root = $(selector);
  data.forEach(item => {
    const div = el("div", "item");
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
    }
  });
}, { threshold: 0.15 });

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

// Boot
window.addEventListener('DOMContentLoaded', () => {
  hydrateHero();
  typing(document.getElementById('tagline'), PROFILE.roles);
  drawSkills();
  drawProjects();
  drawCerts();
  drawTimeline('#expTimeline', EXPERIENCE);
  drawTimeline('#eduTimeline', EDUCATION);
  enableTilt();
  document.querySelectorAll('.reveal').forEach(n => io.observe(n));
  window.addEventListener('scroll', scrollProgress, { passive: true });
});
