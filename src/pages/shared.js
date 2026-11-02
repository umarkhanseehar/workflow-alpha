import { esc } from "../util.js";
import { icon } from "../icons.js";
import { checkList, noteLine, portrait, button, timeline, tabs } from "../components.js";
import * as home from "../../content/home.js";
import { founder, teamRoles, collaborationModel } from "../../content/team.js";

// ---------------------------------------------------------------- Services (accordion)
export function serviceBlock(s, index, tierScope, open = false) {
  return `<article class="acc${open ? " is-open" : ""}" data-acc id="svc-${esc(s.id)}">
    <button class="acc__head" type="button" aria-expanded="${open}" aria-controls="acc-${esc(s.id)}">
      <span class="acc__n">${String(index).padStart(2, "0")}</span>
      <span class="acc__icon">${icon(s.icon, 24)}</span>
      <span class="acc__t"><b>${esc(s.title)}</b><small>${esc(s.summary)}</small></span>
      <span class="tag acc__scope">${esc(tierScope)}</span>
      <span class="acc__chev">${icon("arrow", 18)}</span>
    </button>
    <div class="acc__body" id="acc-${esc(s.id)}" role="region"><div class="acc__clip"><div class="acc__inner">
      <div class="acc__main"><p>${esc(s.body)}</p>${noteLine(s.note)}</div>
      <div><p class="mini">What it can include</p>${checkList(s.includes)}</div>
    </div></div></div>
  </article>`;
}

// ---------------------------------------------------------------- Two paths (tabs)
const pathVisuals = {
  a: `<div class="fan" aria-hidden="true">
    <div class="fan__src">${icon("play", 22)}<span>One source</span></div>
    <svg class="fan__lines" viewBox="0 0 120 160" preserveAspectRatio="none"><path d="M0 80 C60 80 60 20 120 20"/><path d="M0 80 C60 80 60 60 120 60"/><path d="M0 80 C60 80 60 100 120 100"/><path d="M0 80 C60 80 60 140 120 140"/></svg>
    <ul class="fan__out"><li>${icon("linkedin", 16)}Post</li><li>${icon("layers", 16)}Carousel</li><li>${icon("film", 16)}Clip</li><li>${icon("news", 16)}Newsletter</li></ul>
  </div>`,
  b: `<div class="wave" aria-hidden="true">
    <div class="wave__mic"><span></span>${icon("mic", 24)}</div>
    <div class="wave__bars">${Array.from({ length: 14 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
    <div class="wave__out"><span>${icon("pen", 16)}Drafts</span><span>${icon("eye", 16)}Your approval</span><span>${icon("send", 16)}Published</span></div>
  </div>`,
};

function pathPanel(ctx, p, key, ic, dark) {
  const sources = key === "a"
    ? `<p class="mini${dark ? " mini--light" : ""}">Source material may include</p><ul class="srcs">${p.sources.map((s, i) => `<li>${icon(ic.pathASources[i] || "doc", 16)}${esc(s)}</li>`).join("")}</ul>`
    : "";
  return `<div class="pp">
    <div class="pp__side">
      <p class="tag${dark ? " tag--light" : ""}">${esc(p.tag)}</p>
      <h3>${esc(p.headline)}</h3>
      <p>${esc(p.intro)}</p>
      ${pathVisuals[key]}
      ${noteLine(key === "a" ? p.outputs : p.note)}
      ${button(ctx, p.cta, dark ? "primary" : "dark")}
    </div>
    <div class="pp__main">
      ${sources}
      <p class="mini${dark ? " mini--light" : ""}">${key === "a" ? "Our workflow" : "Our process"}</p>
      ${timeline(p.steps, key === "a" ? ic.pathASteps : ic.pathBSteps, { dark })}
    </div>
  </div>`;
}

export function pathsTabs(ctx, prefix, { dark = false } = {}) {
  const { paths, icons } = home;
  return tabs(prefix, [
    { id: "a", label: "Path A: I already have content", icon: "folder", html: pathPanel(ctx, paths.a, "a", icons, dark) },
    { id: "b", label: "Path B: I have expertise, no content yet", icon: "mic", html: pathPanel(ctx, paths.b, "b", icons, dark) },
  ], { cls: dark ? "tabs--dark" : "" });
}
// ---------------------------------------------------------------- Team
export function founderBlock(ctx) {
  return `<div class="founder reveal">
    ${portrait(ctx, { image: founder.image, name: founder.name, role: founder.role })}
    <div class="founder__text">
      <p class="eyebrow">Founder</p>
      <h3>${esc(founder.name)}</h3>
      <p class="founder__role">${esc(founder.role)}</p>
      <p>${esc(founder.intro)}</p>
      <p>${esc(founder.bio)}</p>
      <ul class="pills">${founder.responsibilities.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
    </div>
  </div>`;
}

export function rolesGrid(ctx, { detailed = false } = {}) {
  const roles = teamRoles.filter((r) => r.confirmed);
  if (detailed && roles.length <= 2) {
    return roles
      .map(
        (r) => `<div class="member reveal">
      ${portrait(ctx, { image: r.image, name: r.name, role: r.role, iconName: r.icon })}
      <div class="member__text">
        <p class="eyebrow">Web and automation</p>
        <h3>${esc(r.name || r.role)}</h3>
        ${r.name ? `<p class="member__role">${esc(r.role)}</p>` : ""}
        <p>${esc(r.bio || r.summary)}</p>
        <ul class="pills">${r.responsibilities.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>
    </div>`
      )
      .join("");
  }  return `<div class="roles">${roles
    .map(
      (r) => `<article class="role reveal">
      ${detailed ? portrait(ctx, { image: r.image, name: r.name, role: r.role, iconName: r.icon }) : `<div class="role__icon">${icon(r.icon, 24)}</div>`}
      <h3>${esc(r.name || r.role)}</h3>
      ${r.name ? `<p class="role__role">${esc(r.role)}</p>` : ""}
      <p>${esc(r.bio || r.summary)}</p>
      ${detailed ? `<ul class="plain">${r.responsibilities.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    </article>`
    )
    .join("")}</div>`;
}

export function collaboration() {
  return `<p class="collab reveal">${icon("layers", 22)}<span>${esc(collaborationModel)}</span></p>`;
}

// ---------------------------------------------------------------- Portfolio visuals
const v = {
  week: (s) => `<div class="viz viz--week"><p class="viz__src">${esc(s.source)}</p><div class="viz__days">${s.items
    .map((i) => `<div><b>${esc(i.day)}</b><span class="viz__fmt">${esc(i.format)}</span><p>${esc(i.text)}</p></div>`)
    .join("")}</div></div>`,
  plan: (s) => `<div class="viz viz--plan"><p class="viz__src">${icon("mic", 18)}<span>${esc(s.note)}</span></p><div class="viz__pillars">${s.pillars
    .map((p) => `<div><b>${esc(p.name)}</b><ul>${p.topics.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>`)
    .join("")}</div></div>`,
  profile: (s) => `<div class="viz viz--profile"><div class="viz__ba"><div><span class="viz__label">Before</span><p>${esc(s.before)}</p></div><div class="viz__after"><span class="viz__label">After</span><p>${esc(s.after)}</p></div></div><p class="viz__about">${esc(s.about)}</p><p class="viz__cta">${esc(s.cta)}</p></div>`,
  video: (s) => `<div class="viz viz--video"><div class="viz__strip">${s.segments
    .map((x) => `<span style="flex:${x.length}">${esc(x.label)}</span>`)
    .join("")}</div><div class="viz__caps">${s.captions.map((c) => `<span>${esc(c)}</span>`).join("")}</div></div>`,
  calendar: (s) => `<div class="viz viz--cal"><table><thead><tr><th></th>${s.days.map((d) => `<th>${esc(d)}</th>`).join("")}</tr></thead><tbody>${s.rows
    .map((r) => `<tr><th>${esc(r.channel)}</th>${r.cells.map((c) => `<td>${c ? `<span>${esc(c)}</span>` : ""}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`,
  pipeline: (s) => `<div class="viz viz--pipe">${s.stages
    .map((st) => `<div><b>${esc(st.name)}</b>${st.items.map((i) => `<span>${esc(i)}</span>`).join("")}</div>`)
    .join("")}</div>`,
  site: (s) => `<div class="viz viz--site"><div class="viz__bar"><i></i><i></i><i></i></div><div class="viz__page"><p class="viz__brand">${esc(s.brand)}</p><p class="viz__h">${esc(s.headline)}</p><div class="viz__secs">${s.sections
    .map((x) => `<span>${esc(x)}</span>`)
    .join("")}</div></div></div>`,
};

export function projectCard(ctx, p, { compact = false } = {}) {
  const label = p.kind === "client" ? "Client project" : "Demonstration project";
  const visual = p.image
    ? `<img class="proj__img" src="${esc(ctx.href(p.image))}" alt="${esc(p.imageAlt || p.title)}" loading="lazy">`
    : (v[p.visual] ? v[p.visual](p.sample) : "");
  return `<article class="proj reveal" id="${esc(p.id)}">
    <div class="proj__meta"><span class="tag tag--demo">${label}</span><span class="proj__persona">${esc(p.client || p.persona)}</span></div>
    <h3>${esc(p.title)}</h3>
    ${visual}
    ${compact ? `<p class="proj__purpose">${esc(p.purpose)}</p>` : `
    <div class="proj__cols">
      <div><p class="mini">The problem</p><p>${esc(p.problem)}</p></div>
      <div><p class="mini">The process</p><ol class="plain plain--num">${p.process.map((x) => `<li>${esc(x)}</li>`).join("")}</ol></div>
      <div><p class="mini">Intended purpose</p><p>${esc(p.purpose)}</p></div>
    </div>`}
  </article>`;
}

// ---------------------------------------------------------------- Portfolio tabs
const projIcons = { "one-source-week": "repeat", "voice-notes-plan": "mic", "profile-positioning": "profile", "video-short-form": "film", "distribution-calendar": "calendar", "lead-pipeline": "funnel", "sample-website": "globe" };

export function projectTabs(ctx, list) {
  return tabs("proj", list.map((p) => ({ id: p.id, label: p.title, icon: projIcons[p.id] || "layers", html: projectCard(ctx, p, { panel: true }) })), { cls: "tabs--proj" });
}
