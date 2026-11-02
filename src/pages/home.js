import { siteConfig as c } from "../../content/siteConfig.js";
import * as h from "../../content/home.js";
import { faq } from "../../content/faq.js";
import { founder, teamRoles } from "../../content/team.js";
import { esc } from "../util.js";
import { icon } from "../icons.js";
import { button, sectionHead } from "../components.js";
import { heroArt, artProfile, artContent, artConversation } from "../art.js";

export const meta = { path: "", id: "home", title: c.homeTitle, description: c.homeDescription };

const arts = { profile: artProfile, content: artContent, conversation: artConversation };

export function render(ctx) {
  const { hero, whatWeDo, starts, who, how, teamTeaser, faqHome, finalCta } = h;
  const roles = teamRoles.filter((r) => r.confirmed);

  return `
  <!-- 1. HERO: name and introduction first -->
  <section class="hero">
    <div class="wrap hero__grid">
      <div class="hero__text">
        <p class="chip rise">${icon("user", 16)}${esc(hero.eyebrow)}</p>
        <h1 class="rise">${esc(c.founder)}</h1>
        <p class="hero__headline rise">${esc(hero.headline)}</p>
        <p class="hero__support rise">${esc(hero.intro)}</p>
        <div class="hero__cta rise">
          ${button(ctx, c.cta.primary, "primary")}
          ${button(ctx, c.cta.secondary, "ghost")}
        </div>
        <p class="hero__aud rise">${esc(hero.audienceLine)}</p>
      </div>
      <div class="rise" style="--d:.2s">${heroArt(ctx, founder)}</div>
    </div>
  </section>

  <!-- 2. WHAT WE DO -->
  <section class="sec sec--light" id="what">
    <div class="wrap">
      ${sectionHead({ ...whatWeDo, center: true })}
      <div class="trio">
        ${whatWeDo.steps.map((s, i) => `<article class="trio__item reveal">
          <div class="trio__art">${arts[s.art]()}</div>
          <span class="trio__n">${i + 1}</span>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.text)}</p>
        </article>`).join("")}
      </div>
    </div>
  </section>

  <!-- 3. TWO WAYS TO START -->
  <section class="sec sec--dark" id="start">
    <div class="wrap">
      ${sectionHead({ ...starts, center: true })}
      <div class="duo">
        ${[starts.a, starts.b].map((p, i) => `<article class="duo__item reveal">
          <div class="duo__icon">${icon(p.icon, 28)}</div>
          <p class="tag tag--light">${esc(p.tag)}</p>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.text)}</p>
          ${button(ctx, p.cta, "primary")}
        </article>`).join("")}
      </div>
      <p class="center"><a class="link link--light" href="${esc(ctx.href(starts.more.path))}">${esc(starts.more.label)} ${icon("arrow", 16)}</a></p>
    </div>
  </section>

  <!-- 4. WHO I HELP -->
  <section class="sec sec--tint">
    <div class="wrap">
      ${sectionHead({ ...who, center: true })}
      <ul class="who">${who.list.map((w) => `<li class="reveal"><span class="who__icon">${icon(w.icon, 26)}</span><span>${esc(w.label)}</span></li>`).join("")}</ul>
    </div>
  </section>

  <!-- 5. HOW IT WORKS -->
  <section class="sec sec--light" id="how">
    <div class="wrap">
      ${sectionHead({ ...how, center: true })}
      <ol class="quad">${how.steps.map((s, i) => `<li class="reveal"><span class="quad__icon">${icon(s.icon, 26)}<em>${i + 1}</em></span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join("")}</ol>
    </div>
  </section>

  <!-- 6. TEAM -->
  <section class="sec sec--tint">
    <div class="wrap">
      ${sectionHead({ ...teamTeaser, center: true, intro: teamTeaser.text })}
      <div class="crew reveal">
        <div class="crew__lead">
          <div class="crew__photo">${founder.image ? `<img src="${esc(ctx.href(founder.image))}" alt="${esc(founder.name)}" loading="lazy">` : `<span>MU</span>`}</div>
          <div><b>${esc(founder.name)}</b><span>${esc(founder.role)}</span></div>
        </div>
        <ul class="crew__roles">${roles.map((r) => `<li>${icon(r.icon, 20)}${esc(r.name ? r.name + " · " + r.role : r.role)}</li>`).join("")}</ul>
      </div>
      <p class="center">${button(ctx, { label: "Meet the team", path: "about/" }, "dark")}</p>
    </div>
  </section>

  <!-- 7. FAQ -->
  <section class="sec sec--light" id="faq">
    <div class="wrap wrap--narrow">
      ${sectionHead({ ...faqHome, center: true })}
      <div class="faq">${faq.filter((f) => f.home).slice(0, 3).map((f) => `<details class="reveal"><summary>${esc(f.q)}${icon("arrow", 18)}</summary><p>${esc(f.a)}</p></details>`).join("")}</div>
    </div>
  </section>

  <!-- 8. FINAL CTA -->
  <section class="sec sec--final">
    <div class="wrap center reveal">
      <h2>${esc(finalCta.heading)}</h2>
      <p class="lede lede--light">${esc(finalCta.text)}</p>
      <div class="hero__cta hero__cta--center">${button(ctx, c.cta.primary, "primary")}${c.bookingUrl ? button(ctx, { label: "Book a call", path: c.bookingUrl }, "ghost") : ""}</div>
    </div>
  </section>`;
}
