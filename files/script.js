
(() => {
  const NS = "http://www.w3.org/2000/svg";

  const P = {
    home: '<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    work: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M12 11v5M9.5 13.5h5"/>',
    code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    github: '<path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5a3 3 0 0 0-1-2.5c3.5-.4 7-1.7 7-7.5a5.5 5.5 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.8s-1.3-.4-4 1.5a13.4 13.4 0 0 0-7 0C6.7 2.8 5.4 3.2 5.4 3.2a5 5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.8 10.8c0 5.8 3.5 7.1 7 7.5a3 3 0 0 0-1 2.5v3.5"/>',
    x: '<path d="M4 4l16 16M20 4L4 20"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v6M8 7.5v.01M12 17v-6m0 3a3 3 0 0 1 6 0v3"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z"/>',
    up: '<path d="M6 15l6-6 6 6"/>',
    ext: '<path d="M14 4h6v6M20 4L10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
  };

  // SVG icon helper
  const icon = n => {
    const s = document.createElementNS(NS, "svg");

    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("aria-hidden", "true");
    s.setAttribute("fill", "none");
    s.setAttribute("stroke", "currentColor");
    s.setAttribute("stroke-width", "1.8");
    s.setAttribute("stroke-linecap", "round");
    s.setAttribute("stroke-linejoin", "round");

    s.innerHTML = P[n] || "";

    return s;
  };

  // Element helper
  const el = (tag, cls, text, kids) => {
    const e = document.createElement(tag);

    if (cls) e.className = cls;

    if (text !== undefined && text !== null) {
      e.textContent = text;
    }

    (kids || []).forEach(k => e.append(k));

    return e;
  };

  // Link helper
  const a = (href, cls, label) => {
    const e = el("a", cls);

    e.href = href || "#";

    if (/^https?:/i.test(href || "")) {
      e.target = "_blank";
      e.rel = "noopener noreferrer";
    }

    if (label) {
      e.setAttribute("aria-label", label);
    }

    return e;
  };

  const $ = id => document.getElementById(id);
  const D = DATA;

  document.title = `${D.name} – ${D.tagline}`;

  // Navigation
  const nav = $("nav");

  if (nav) {
    D.nav.forEach((n, i) => {
      const l = a(n.href, i === 0 ? "active" : "", n.label);
      l.append(icon(n.icon));
      nav.append(l);
    });

    nav.append(el("span", "sep"));

    D.socials.forEach(s => {
      const l = a(s.href, "", s.label);
      l.append(icon(s.icon));
      nav.append(l);
    });

    const tb = el("button");
    tb.setAttribute("aria-label", "Toggle theme");
    tb.append(icon("moon"));

    tb.onclick = () => {
      const r = document.documentElement;
      const light =
        getComputedStyle(r).getPropertyValue("--bg").trim() === "#fafafa";

      r.dataset.theme = light ? "dark" : "light";
    };

    nav.append(tb);
  }

  // Hero
  const hero = $("home");

  if (hero) {
    const av = el("img", "avatar");

    av.alt = `Portrait of ${D.name}`;

    av.src =
      D.avatar ||
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23222'/><circle cx='50' cy='38' r='16' fill='%23666'/><path d='M18 90c4-22 20-30 32-30s28 8 32 30z' fill='%23666'/></svg>";

    const btns = el("div", "btns");

    const b1 = a("#projects", "btn primary");
    b1.textContent = "View Projects";

    const b2 = a("#contact", "btn");
    b2.textContent = "Get in Touch";

    const b3 = a(D.resume, "btn");
    b3.target = "_blank";
    b3.rel = "noopener noreferrer";
    b3.append("Resume", icon("ext"));
    b3.lastChild.style.cssText = "width:14px;height:14px";

    btns.append(b1, b2, b3);

    const stats = el("div", "stats");

    D.stats.forEach(s => {
      stats.append(
        el("div", "", null, [
          el("b", "", s.value),
          el("span", "", s.label)
        ])
      );
    });

    const hint = el("p", "hint");
    hint.append(
      "type ",
      el("kbd", "", "resume"),
      " anywhere to open my resume"
    );

    const taglineEl = el("p", "tag", D.taglines[0] || "");

    hero.append(
      av,
      el("h1", "", D.name),
      taglineEl,
      el("p", "bio", D.bio),
      btns,
      stats,
      hint
    );

    let taglineIndex = 0;

    if (D.taglines.length > 1) {
      setInterval(() => {
        taglineIndex = (taglineIndex + 1) % D.taglines.length;
        taglineEl.textContent = D.taglines[taglineIndex];
      }, 3000);
    }
  }

  // Experience
  const experienceList = $("expList");

  if (experienceList) {
    D.experience.forEach(x => {
      const sub = el("p", "sub", x.org);

      if (x.orgLink) {
        const p = a(x.orgLink, "pill");
        p.append(icon("ext"), x.orgLabel || x.orgLink);
        sub.append(p);
      }

      const top = el("div", "top", null, [
        el("div", "", null, [
          el("h3", "", x.role),
          sub
        ]),
        el("div", "when", x.period, [
          el("small", "", x.place)
        ])
      ]);

      const card = el("article", "card", null, [top]);

      if (x.bullets) {
        const ul = el("ul");

        x.bullets.forEach(b => {
          ul.append(el("li", "", b));
        });

        card.append(ul);
      }

      if (x.tags) {
        const c = el("div", "chips");

        x.tags.forEach(t => c.append(el("span", "", t)));

        card.append(c);
      }

      experienceList.append(card);
    });
  }

  // Projects
  const projectGrid = $("projectGrid");

  if (projectGrid) {
    D.projects.forEach(p => {
      const card = el("article", "card");
      const header = el("div", "project-header");
      const titleBlock = el("div", "project-title");

      titleBlock.append(el("h3", "", p.name));

      if (p.shortDesc) {
        titleBlock.append(el("p", "project-short-desc", p.shortDesc));
      }

      header.append(titleBlock);

      const projectLinks = el("div", "project-links");

      if (p.live) {
        const live = a(p.live, "", "Live Demo");
        live.append(icon("ext"), document.createTextNode("Live Demo"));
        projectLinks.append(live);
      }

      const githubUrl = p.github || p.link;

      if (githubUrl) {
        const github = a(githubUrl, "", "GitHub");
        github.append(icon("github"), document.createTextNode("GitHub"));
        projectLinks.append(github);
      }

      header.append(projectLinks);
      card.append(header);

      if (p.desc) {
        card.append(el("p", "", p.desc));
      }

      const chips = el("div", "chips");

      (p.tags || []).forEach(t => chips.append(el("span", "", t)));

      card.append(chips);
      projectGrid.append(card);
    });
  }

  // Achievements
  const achievementGrid = $("achievementGrid") || $("winList");

  if (achievementGrid) {
    D.achievements.forEach(w => {
      const card = el("article", "card achievement-card");

      if (w.award) {
        card.append(el("span", "project-award", w.award));
      }

      card.append(el("h3", "", w.title));

      // Preserve line breaks entered in data.js
      const description = el(
        "p",
        "achievement-description",
        w.desc || ""
      );

      card.append(description);
      achievementGrid.append(card);
    });
  }

  // Skills
  const skillList = $("skillList");

  if (skillList) {
    skillList.innerHTML = "";

    D.skills.forEach(skill => {
      const card = el("article", "card skill-card");

      // Support the new category/items format
      if (
        skill &&
        typeof skill === "object" &&
        !Array.isArray(skill)
      ) {
        card.append(
          el("h3", "skill-category", skill.category || "Skills")
        );

        const items = el("div", "skill-items");

        (skill.items || []).forEach(item => {
          items.append(el("span", "skill-tag", item));
        });

        card.append(items);
      } else {
        // Backward compatibility with the old skills: ["Python", ...] format
        card.className = "skill-tag";
        card.textContent = skill;
      }

      skillList.append(card);
    });
  }

  // Contact
  const contact = $("contact");

  if (contact) {
    const cb = el("div", "btns");

    D.contact.buttons.forEach(b => {
      const l = a(
        b.href,
        "btn " + (b.primary ? "primary" : "dark")
      );

      l.append(icon(b.icon), b.label);
      cb.append(l);
    });

    contact.append(
      el("h2", "", "CONTACT"),
      el("h3", "", D.contact.heading),
      el("p", "", D.contact.text),
      cb
    );
  }

  // Footer
  const foot = $("foot");

  if (foot) {
    const left = el(
      "span",
      "",
      `© ${new Date().getFullYear()} ${D.name}`,
      [el("span", "loc", D.location)]
    );

    const footerTop = a("#home", "");
    footerTop.append("Back to top", icon("up"));

    foot.append(left, footerTop);
  }

  // Active navigation on scroll
  const navLinks = nav
    ? [...nav.querySelectorAll('a[href^="#"]')]
    : [];

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(link => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + entry.target.id
              );
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));

      if (section) io.observe(section);
    });
  }

  // Keyboard shortcut: type "resume" to open the resume
  let buf = "";

  addEventListener("keydown", e => {
    if (
      /input|textarea/i.test(e.target.tagName) ||
      e.target.isContentEditable ||
      !e.key
    ) {
      return;
    }

    buf = (buf + e.key.toLowerCase()).slice(-6);

    if (buf === "resume") {
      window.open(D.resume, "_blank");
      buf = "";
    }
  });
})();
