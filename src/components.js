import { esc } from "./util.js";
import { icon } from "./icons.js";

export function button(ctx, cta, variant = "primary", extra = "") {
  const external = /^https?:/.test(cta.path || "");
  return `<a class="btn btn--${variant} ${extra}" href="${esc(ctx.href(cta.path))}"${external ? ' target="_blank" rel="noopener"' : ""}>${esc(cta.label)}${icon("arrow", 18)}</a>`;
}

export function sectionHead({ eyebrow, heading, intro, center = false, id = "" }) {
  return `<header class="sec-head${center ? " sec-head--center" : ""} reveal"${id ? ` id="${esc(id)}"` : ""}>
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
    <h2>${esc(heading)}</h2>
    ${intro ? `<p class="lede">${esc(intro)}</p>` : ""}
  </header>`;
}

export function checkList(items, cls = "") {
  return `<ul class="checks ${cls}">${items.map((i) => `<li>${icon("check", 18)}<span>${esc(i)}</span></li>`).join("")}</ul>`;
}

export function numberedSteps(steps, cls = "") {
  return `<ol class="steps ${cls}">${steps.map((s, i) => `<li><span class="steps__n">${String(i + 1).padStart(2, "0")}</span><span>${esc(typeof s === "string" ? s : s.text)}</span></li>`).join("")}</ol>`;
}

// Flow of labelled stages. Optional `icons` array; `loop` lights the stages one after another.
export function flow(stages, { cls = "", icons = [], loop = true } = {}) {
  return `<ol class="flow ${cls}"${loop ? " data-loop" : ""}>${stages
    .map((s, i) => {
      const title = typeof s === "string" ? s : s.title;
      const text = typeof s === "string" ? "" : s.text;
      const ic = icons[i] ? icon(icons[i], 18) : i + 1;
      return `<li class="flow__item reveal"><span class="flow__dot">${ic}</span><span class="flow__t">${esc(title)}</span>${text ? `<span class="flow__s">${esc(text)}</span>` : ""}</li>`;
    })
    .join("")}</ol>`;
}

// Scroll-driven timeline: a line fills as you scroll and each step lights up.
// items: [{ title?, text }]; icons: array of icon names; variant: "" | "h" (horizontal on desktop)
export function timeline(items, icons = [], { variant = "", dark = false } = {}) {
  return `<ol class="tl${variant ? " tl--" + variant : ""}${dark ? " tl--dark" : ""}" data-tl>${items
    .map((s, i) => {
      const o = typeof s === "string" ? { text: s } : s;
      return `<li class="tl__item"><span class="tl__bubble">${icon(icons[i] || "check", 20)}<em>${String(i + 1).padStart(2, "0")}</em></span><div class="tl__body">${o.title ? `<h3>${esc(o.title)}</h3>` : ""}<p>${esc(o.text)}</p></div></li>`;
    })
    .join("")}</ol>`;
}

// Accessible tabs. tabs: [{ id, label, icon, html }]
export function tabs(prefix, items, { cls = "" } = {}) {
  return `<div class="tabs ${cls}" data-tabs>
    <div class="tabs__list" role="tablist">${items
      .map((t, i) => `<button class="tabs__tab" role="tab" type="button" id="${prefix}-t-${esc(t.id)}" aria-controls="${prefix}-p-${esc(t.id)}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${t.icon ? icon(t.icon, 18) : ""}<span>${esc(t.label)}</span></button>`)
      .join("")}</div>
    ${items
      .map((t, i) => `<div class="tabs__panel" role="tabpanel" id="${prefix}-p-${esc(t.id)}" aria-labelledby="${prefix}-t-${esc(t.id)}"${i === 0 ? "" : " hidden"}>${t.html}</div>`)
      .join("")}
  </div>`;
}
export function noteLine(text) {
  return text ? `<p class="note">${esc(text)}</p>` : "";
}

// Person / role photo area: shows the image when set, otherwise a labelled placeholder
export function portrait(ctx, { image, name, role, iconName = "user" }) {
  if (image) return `<div class="portrait"><img src="${esc(ctx.href(image))}" alt="${esc(name ? `${name}, ${role}` : role)}" loading="lazy" width="400" height="500"></div>`;
  return `<div class="portrait portrait--ph" role="img" aria-label="Photo placeholder for ${esc(role)}">${icon(iconName, 40)}<span>Photo placeholder</span></div>`;
}
