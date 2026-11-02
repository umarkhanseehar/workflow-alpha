import { contactPage as p } from "../../content/pages.js";
import { siteConfig as c } from "../../content/siteConfig.js";
import { services } from "../../content/services.js";
import { faq } from "../../content/faq.js";
import { esc } from "../util.js";
import { icon } from "../icons.js";
import { waLink } from "../layout.js";

export const meta = { path: "contact/", id: "contact", title: p.title, description: p.description };

export function render(ctx) {
  const opt = (arr) => arr.map((x) => `<option>${esc(x)}</option>`).join("");
  return `
  <section class="page-hero">
    <div class="wrap">
      <p class="eyebrow eyebrow--light rise">Contact</p>
      <h1 class="rise">${esc(p.heading)}</h1>
      <p class="hero__support rise">${esc(p.intro)}</p>
    </div>
  </section>

  <section class="sec sec--light">
    <div class="wrap contact">
      <form class="form reveal" id="enquiry" novalidate
        data-endpoint="${esc(c.formEndpoint)}" data-email="${esc(c.contactEmail)}" data-brand="${esc(c.brand)}">
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;opacity:0;height:0;width:0">
        <div class="form__row">
          <label>Name<input name="name" required autocomplete="name"></label>
          <label>Business email<input name="email" type="email" required autocomplete="email"></label>
        </div>
        <div class="form__row">
          <label>Company or professional practice<input name="company" autocomplete="organization"></label>
          <label>Profession<select name="profession"><option value="">Select...</option>${opt(p.professions)}</select></label>
        </div>
        <label>LinkedIn profile or website<input name="link" placeholder="https://" autocomplete="url"></label>
        <label>Main objective<input name="objective" placeholder="e.g. a clearer, more consistent professional presence"></label>
        <label>Current starting point<select name="start" id="start"><option value="">Select...</option>${p.startingPoints.map((s) => `<option value="${esc(s.value)}">${esc(s.label)}</option>`).join("")}</select></label>
        <fieldset>
          <legend>Services of interest</legend>
          <div class="checkgrid">${services.map((s) => `<label class="check"><input type="checkbox" name="services" value="${esc(s.title)}"><span>${esc(s.title)}</span></label>`).join("")}</div>
        </fieldset>
        <label>Project details<textarea name="details" rows="5" placeholder="Tell us about your practice, audience and what you would like to achieve."></textarea></label>
        <p class="note">${esc(p.privacyNote)}</p>
        <label class="check check--consent"><input type="checkbox" name="consent" required><span>${esc(p.consent)}</span></label>
        <div class="form__actions">
          <button class="btn btn--primary" type="submit">Request a Personal Brand Review ${icon("arrow", 18)}</button>
        </div>
        <p class="form__msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>

      <aside class="contact__side reveal">
        <h3>Reach me directly</h3>
        ${c.whatsapp ? `<a class="btn btn--wa" href="${esc(waLink)}" target="_blank" rel="noopener">${icon("whatsapp", 20)}Chat on WhatsApp</a>` : ""}
        <ul class="plain plain--big plain--icons">
          ${c.contactEmail ? `<li>${icon("mail", 22)}<div><b>Email</b><a class="link" href="mailto:${esc(c.contactEmail)}">Send me an email</a></div></li>` : ""}
          ${c.whatsapp ? `<li>${icon("whatsapp", 22)}<div><b>WhatsApp</b><a class="link" href="${esc(waLink)}" target="_blank" rel="noopener">Message me on WhatsApp</a></div></li>` : ""}
          <li>${icon("linkedin", 22)}<div><b>LinkedIn</b><a class="link" href="${esc(c.links.linkedin)}" target="_blank" rel="noopener">Connect with Umar Khan</a></div></li>
          ${c.bookingUrl ? `<li>${icon("calendar", 22)}<div><b>Book a call</b><a class="link" href="${esc(c.bookingUrl)}" target="_blank" rel="noopener">Choose a time</a></div></li>` : ""}
        </ul>
        <p class="note">We will reply to your enquiry and recommend the most suitable path. We do not guarantee specific results.</p>
      </aside>
    </div>
  </section>

  <section class="sec sec--tint">
    <div class="wrap wrap--narrow">
      <header class="sec-head reveal"><p class="eyebrow">FAQ</p><h2>Before you get in touch</h2></header>
      <div class="faq">${faq.map((f) => `<details class="reveal"><summary>${esc(f.q)}${icon("arrow", 18)}</summary><p>${esc(f.a)}</p></details>`).join("")}</div>
    </div>
  </section>`;
}
