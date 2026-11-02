import { siteConfig as c } from "../content/siteConfig.js";
import { navigation, navCta } from "../content/navigation.js";
import { theme } from "../content/theme.js";
import { esc } from "./util.js";
import { icon } from "./icons.js";

const favicon = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='${theme.colors.navy}'/><path d='M7 10l4 12 5-9 5 9 4-12' fill='none' stroke='${theme.colors.blue}' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'/></svg>`
)}`;

function jsonLd(pagePath) {
  const sameAs = [c.links.linkedin, c.links.newsletter];
  const graph = [
    {
      "@type": "Organization",
      name: c.brand,
      description: c.homeDescription,
      founder: { "@type": "Person", name: c.founder, jobTitle: c.founderRole, sameAs: [c.links.linkedin] },
      sameAs,
      ...(c.url ? { url: c.url } : {}),
      ...(c.contactEmail ? { email: c.contactEmail } : {}),
    },
  ];
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`;
}

export const waLink = c.whatsapp ? `https://wa.me/${c.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Umar, I would like a Personal Brand Review.")}` : "";

export function layout(ctx, { title, description, path, body, pageId }) {
  const canonical = c.url ? `<link rel="canonical" href="${esc(c.url.replace(/\/$/, "") + "/" + path)}">` : "";
  const og = `
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(c.brand)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  ${c.url ? `<meta property="og:url" content="${esc(c.url.replace(/\/$/, "") + "/" + path)}">` : ""}
  ${c.ogImage && c.url ? `<meta property="og:image" content="${esc(c.url.replace(/\/$/, "") + "/" + c.ogImage)}">` : ""}
  <meta name="twitter:card" content="${c.ogImage ? "summary_large_image" : "summary"}">`;

  const nav = navigation
    .map((n) => `<a href="${esc(ctx.href(n.path))}"${n.path === path ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`)
    .join("");

  const social = `
    <a href="${esc(c.links.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon("linkedin", 20)}</a>
    ${c.contactEmail ? `<a href="mailto:${esc(c.contactEmail)}" aria-label="Email">${icon("mail", 20)}</a>` : ""}
    ${c.whatsapp ? `<a href="${esc(waLink)}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("whatsapp", 20)}</a>` : ""}
    <a href="${esc(c.links.newsletter)}" target="_blank" rel="noopener" aria-label="Newsletter">${icon("news", 20)}</a>`;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="theme-color" content="${theme.colors.navy}">
  ${canonical}${og}
  <link rel="icon" href="${favicon}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="${theme.fonts.googleFontsHref}">
  <link rel="stylesheet" href="${ctx.root}assets/css/tokens.css">
  <link rel="stylesheet" href="${ctx.root}assets/css/styles.css">
  ${jsonLd(path)}
  <script>document.documentElement.classList.add("js")</script>
</head>
<body data-page="${esc(pageId)}">
  <a class="skip" href="#main">Skip to content</a>
  <div class="progress" id="progress" aria-hidden="true"></div>
  <header class="site-header" id="top">
    <div class="wrap site-header__in">
      <a class="logo" href="${esc(ctx.href(""))}" aria-label="${esc(c.brand)} home"><span class="logo__mark"><svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true"><path d="M5 9l5 14 6-10 6 10 5-14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>${esc(c.brand)}</a>
      <nav class="nav" id="nav" aria-label="Primary">${nav}<a class="btn btn--primary btn--sm nav__cta" href="${esc(ctx.href(navCta.path))}">${esc(navCta.label)}</a></nav>
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav" aria-label="Open menu">${icon("menu", 24)}</button>
    </div>
  </header>

  <main id="main">${body}</main>

  <footer class="site-footer">
    <div class="wrap footer__grid">
      <div>
        <p class="logo logo--footer">${esc(c.brand)}</p>
        <p class="footer__text">${esc(c.tagline)}. Founded by ${esc(c.founder)}.</p>
        <div class="social">${social}</div>
      </div>
      <div>
        <p class="footer__h">Explore</p>
        <ul>${navigation.map((n) => `<li><a href="${esc(ctx.href(n.path))}">${esc(n.label)}</a></li>`).join("")}</ul>
      </div>
      <div>
        <p class="footer__h">Contact</p>
        <ul>
          ${c.contactEmail ? `<li><a href="mailto:${esc(c.contactEmail)}">Email me</a></li>` : ""}
          ${c.bookingUrl ? `<li><a href="${esc(c.bookingUrl)}" target="_blank" rel="noopener">Book a call</a></li>` : ""}
          <li><a href="${esc(ctx.href("contact/"))}">Request a Personal Brand Review</a></li>
          <li><a href="${esc(c.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>
          ${c.whatsapp ? `<li><a href="${esc(waLink)}" target="_blank" rel="noopener">Chat on WhatsApp</a></li>` : ""}
        </ul>
      </div>
      <div>
        <p class="footer__h">Related resource</p>
        <p class="footer__text"><a class="link" href="${esc(c.links.newsletter)}" target="_blank" rel="noopener">${esc(c.newsletter.name)}</a><br>${esc(c.newsletter.description)}</p>
      </div>
    </div>
    <div class="wrap footer__base"><span>© <span id="year">${new Date().getFullYear()}</span> ${esc(c.brand)}</span><span>${esc(c.footerNote)}</span></div>
  </footer>
  <script src="${ctx.root}assets/js/main.js" defer></script>
</body>
</html>`;
}
