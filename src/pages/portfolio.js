import { portfolio, portfolioIntro } from "../../content/portfolio.js";
import { portfolioPage as p } from "../../content/pages.js";
import { siteConfig as c } from "../../content/siteConfig.js";
import { esc } from "../util.js";
import { button } from "../components.js";
import { projectTabs } from "./shared.js";

export const meta = { path: "portfolio/", id: "portfolio", title: p.title, description: p.description };

export function render(ctx) {
  return `
  <section class="page-hero">
    <div class="wrap">
      <p class="eyebrow eyebrow--light rise">Portfolio</p>
      <h1 class="rise">${esc(p.heading)}</h1>
      <p class="hero__support rise">${esc(p.intro || portfolioIntro)}</p>
      <p class="badge rise">All samples below are demonstration projects, concepts or fictional examples.</p>
    </div>
  </section>

  <section class="sec sec--light">
    <div class="wrap">
      <p class="mini">Choose a demonstration</p>${projectTabs(ctx, portfolio)}
    </div>
  </section>

  <section class="sec sec--final">
    <div class="wrap center reveal">
      <h2>Want a system like this for your practice?</h2>
      <p class="lede lede--light">Request a Personal Brand Review and tell us where you are starting from.</p>
      <div class="hero__cta hero__cta--center">${button(ctx, c.cta.primary, "primary")}</div>
    </div>
  </section>`;
}
