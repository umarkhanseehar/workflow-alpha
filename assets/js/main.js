(() => {
  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });
  }

  // Scroll reveal (content stays visible if JS or IntersectionObserver is unavailable)
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((el) => io.observe(el));
  } else els.forEach((el) => el.classList.add("in"));

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Stagger siblings that reveal together
  document.querySelectorAll(".reveal").forEach((el) => {
    const sibs = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
    if (sibs.length > 1) el.style.setProperty("--rd", sibs.indexOf(el) * 0.08 + "s");
  });

  // Tabs (keyboard accessible)
  document.querySelectorAll("[data-tabs]").forEach((root) => {
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const panels = [...root.querySelectorAll('[role="tabpanel"]')];
    const select = (i, focus) => {
      tabs.forEach((t, k) => { t.setAttribute("aria-selected", String(k === i)); t.tabIndex = k === i ? 0 : -1; });
      panels.forEach((p, k) => { p.hidden = k !== i; });
      if (focus) tabs[i].focus();
      measure();
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(i));
      t.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); select((i + 1) % tabs.length, true); }
        if (e.key === "ArrowLeft") { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length, true); }
      });
    });
  });

  // Accordion
  const accs = [...document.querySelectorAll("[data-acc]")];
  const setAcc = (a, open) => { a.classList.toggle("is-open", open); a.querySelector(".acc__head").setAttribute("aria-expanded", String(open)); };
  accs.forEach((a) => a.querySelector(".acc__head").addEventListener("click", () => setAcc(a, !a.classList.contains("is-open"))));
  if (location.hash.startsWith("#svc-")) { const a = document.getElementById(location.hash.slice(1)); if (a && a.matches("[data-acc]")) setAcc(a, true); }

  // Timelines: line fills and steps light up while scrolling
  const tls = [...document.querySelectorAll("[data-tl]")];
  let tlRects = [];
  function measure() { update(); }
  function update() {
    const vh = innerHeight;
    tls.forEach((tl) => {
      const r = tl.getBoundingClientRect();
      if (!r.height) return; // hidden tab
      const horizontal = getComputedStyle(tl).display === "grid" && tl.classList.contains("tl--h") && innerWidth > 1020;
      const items = [...tl.children];
      const line = vh * 0.68;
      let lit = 0;
      items.forEach((li) => { const on = li.getBoundingClientRect().top < line; li.classList.toggle("on", on); if (on) lit++; });
      const p = horizontal ? Math.max(0, (lit - 1) / Math.max(items.length - 1, 1)) : Math.max(0, Math.min(1, (line - r.top) / r.height));
      tl.style.setProperty("--p", String(p));
    });
    const doc = document.documentElement;
    const prog = document.getElementById("progress");
    if (prog) prog.style.transform = `scaleX(${doc.scrollHeight > vh ? scrollY / (doc.scrollHeight - vh) : 0})`;
  }
  let ticking = false;
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { update(); ticking = false; }); } }, { passive: true });
  addEventListener("resize", update);
  update();

  // Loop: light the system stages one after another while visible
  document.querySelectorAll("[data-loop]").forEach((ol) => {
    const items = [...ol.children]; let i = 0, vis = false;
    new IntersectionObserver((en) => { vis = en[0].isIntersecting; }, { threshold: 0.2 }).observe(ol);
    if (reduce) return;
    setInterval(() => { if (!vis) return; items.forEach((x) => x.classList.remove("lit")); items[i % items.length].classList.add("lit"); i++; }, 1300);
  });

  // Hero map: highlight rows in turn
  const map = document.querySelector("[data-map]");
  if (map && !reduce) { const rows = [...map.children]; let k = 0; setInterval(() => { rows.forEach((r) => r.classList.remove("active")); rows[k++ % rows.length].classList.add("active"); }, 1600); }
  // Enquiry form
  const form = document.getElementById("enquiry");
  if (!form) return;
  const msg = document.getElementById("form-msg");
  const say = (t, err) => { msg.textContent = t; msg.classList.toggle("is-error", !!err); };

  // Pre-select the starting point from ?start=
  const startParam = new URLSearchParams(location.search).get("start");
  if (startParam) { const s = form.querySelector("#start"); if ([...s.options].some((o) => o.value === startParam)) s.value = startParam; }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    say("");
    const fd = new FormData(form);
    const need = ["name", "email"];
    const missing = need.filter((k) => !String(fd.get(k) || "").trim());
    if (missing.length || !form.email.validity.valid) { say("Please complete the required fields and use a valid email address.", true); return; }
    if (!form.consent.checked) { say("Please tick the contact consent box so we can reply.", true); return; }

    const data = {
      name: fd.get("name"), email: fd.get("email"), company: fd.get("company"), profession: fd.get("profession"),
      link: fd.get("link"), objective: fd.get("objective"),
      startingPoint: form.start.value ? form.start.options[form.start.selectedIndex].text : "",
      services: fd.getAll("services").join(", "), details: fd.get("details"),
    };
    const { endpoint, email, brand } = form.dataset;

    const viaEmailApp = () => {
      const body = Object.entries(data).map(([k, v]) => `${k}: ${v || "-"}`).join("\n");
      location.href = `mailto:${email}?subject=${encodeURIComponent(`Personal Brand Review request (${brand})`)}&body=${encodeURIComponent(body)}`;
      say("Your email app should open with your enquiry ready to send.");
    };

    if (endpoint) {
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; say("Sending...");
      try {
        const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...data, _subject: `New Personal Brand Review request from ${data.name}`, _gotcha: fd.get("_gotcha") || "" }) });
        const res = await r.json().catch(() => ({}));
        if (!r.ok || String(res.success) === "false") { console.warn("Form service replied:", res); throw new Error(res.message || "send failed"); }
        if (/activat/i.test(String(res.message || ""))) { say("Your enquiry was received, but the email service still needs a one-time activation. Check the inbox for the activation email, click it, then send again.", true); return; }
        form.reset(); say("Thank you. Your enquiry has been sent and we will be in touch.");
      } catch (err) {
        // Never lose an enquiry: fall back to the visitor's email app
        if (email) viaEmailApp(); else say("Sorry, something went wrong sending your enquiry. Please try again.", true);
      } finally { btn.disabled = false; }
      return;
    }
    if (email) { viaEmailApp(); return; }
    say("This form is not connected yet. Set formEndpoint or contactEmail in content/siteConfig.js and rebuild.", true);
  });
})();
