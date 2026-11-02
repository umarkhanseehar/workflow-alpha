import { aboutPage as p } from "../../content/pages.js";
import { siteConfig as c } from "../../content/siteConfig.js";
import { esc } from "../util.js";
import { icon } from "../icons.js";
import { button, sectionHead } from "../components.js";
import { founderBlock, rolesGrid, collaboration } from "./shared.js";

export const meta = { path: "about/", id: "about", title: p.title, description: p.description };

export function render(ctx) {
  return `
  <section class="page-hero">
    <div class="wrap">
      <p class="eyebrow eyebrow--light rise">About</p>
      <h1 class="rise">${esc(p.heading)}</h1>
      <p class="hero__support rise">${esc(p.intro)}</p>
    </div>
  </section>

  <section class="sec sec--light">
    <div class="wrap">
      ${founderBlock(ctx)}
    </div>
  </section>

  <section class="sec sec--light">
    <div class="wrap">
      ${sectionHead({ eyebrow: "The team", heading: p.teamHeading, intro: p.teamNote })}
      ${collaboration()}
      ${rolesGrid(ctx, { detailed: true })}
    </div>
  </section>

  <section class="sec sec--dark">
    <div class="wrap two two--center">
      <div class="reveal">
        <p class="eyebrow eyebrow--light">${esc(p.newsletterHeading)}</p>
        <h2>${esc(c.newsletter.name)}</h2>
        <p class="lede lede--light">${esc(c.newsletter.description)}</p>
      </div>
      <div class="reveal">${button(ctx, { label: "Visit the newsletter", path: c.links.newsletter }, "ghost")}</div>
    </div>
  </section>

  <section class="sec sec--final">
    <div class="wrap center reveal">
      <h2>Let's talk about your personal brand</h2>
      <p class="lede lede--light">Request a Personal Brand Review to get started.</p>
      <div class="hero__cta hero__cta--center">${button(ctx, c.cta.primary, "primary")}</div>
    </div>
  </section>`;
}
