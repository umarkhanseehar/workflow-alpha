import { services, tiers } from "../../content/services.js";
import { servicesPage as p } from "../../content/pages.js";
import { siteConfig as c } from "../../content/siteConfig.js";
import * as h from "../../content/home.js";
import { esc } from "../util.js";
import { icon } from "../icons.js";
import { button, sectionHead } from "../components.js";
import { serviceBlock, pathsTabs } from "./shared.js";

export const meta = { path: "services/", id: "services", title: p.title, description: p.description };

export function render(ctx) {
  const { paths } = h;
  let n = 0;
  const order = ["core", "business", "additional"];

  const tierSections = order
    .map((key) => {
      const t = tiers[key];
      const items = services.filter((s) => s.tier === key);
      return `<section class="sec ${key === "business" ? "sec--tint" : "sec--light"}" id="tier-${key}">
        <div class="wrap">
          <header class="sec-head reveal"><p class="eyebrow">${esc(t.scope)}</p><h2>${esc(t.title)}</h2><p class="lede">${esc(t.blurb)}</p></header>
          <div class="svcs">${items.map((s, i) => serviceBlock(s, ++n, t.scope, key === "core" && i === 0)).join("")}</div>
        </div>
      </section>`;
    })
    .join("");

  return `
  <section class="page-hero">
    <div class="wrap">
      <p class="eyebrow eyebrow--light rise">Services</p>
      <h1 class="rise">${esc(p.heading)}</h1>
      <p class="hero__support rise">${esc(p.intro)}</p>
      <ul class="jump rise">${order.map((k) => `<li><a href="#tier-${k}">${esc(tiers[k].label)}</a></li>`).join("")}<li><a href="#paths-detail">Two ways to start</a></li></ul>
    </div>
  </section>

  ${tierSections}

  <section class="sec sec--light" id="paths-detail">
    <div class="wrap">
      ${sectionHead({ eyebrow: "Getting started", heading: p.twoPaths.heading, intro: p.twoPaths.text })}
      ${pathsTabs(ctx, "svc")}
    </div>
  </section>



  <section class="sec sec--final">
    <div class="wrap center reveal">
      <h2>Not sure which services fit?</h2>
      <p class="lede lede--light">Request a Personal Brand Review and we will recommend the right starting point.</p>
      <div class="hero__cta hero__cta--center">${button(ctx, c.cta.primary, "primary")}</div>
    </div>
  </section>`;
}
