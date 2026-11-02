# Workflow Alpha: Editing Guide

All website text, links, services, team and portfolio items live in the `content/` folder. You never need to touch the page templates for normal edits.

**Workflow:** edit a file in `content/` â†’ save â†’ refresh the browser.

```
npm run dev      # builds, serves http://localhost:5173 and rebuilds on every save
npm run build    # builds the finished site into /dist
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Where things are

| You want to change | Edit this file |
|---|---|
| Brand, founder, tagline, contact email, booking link, social links, main CTAs, SEO defaults | `content/siteConfig.js` |
| Colours, fonts, corner radius, page width | `content/theme.js` |
| Menu items | `content/navigation.js` |
| Homepage text (name and intro, three steps, two ways to start, who I help, how it works, team, FAQ, final CTA) | `content/home.js` |
| All 12 services | `content/services.js` |
| Founder profile and team roles | `content/team.js` |
| Portfolio demonstrations | `content/portfolio.js` |
| FAQs | `content/faq.js` |
| Services, Portfolio, About and Contact page copy; form options | `content/pages.js` |

## Common edits

**Change a headline or paragraph:** find the text in `content/home.js` or `content/pages.js`, change it, save.

**Change a button label or destination:** `content/siteConfig.js` â†’ `cta` (main buttons). Other buttons are in the same content file as their section (for example `paths.a.cta` in `home.js`). `path` is a page such as `"contact/"`, or a full `https://` link.

**Add a service:** in `content/services.js`, copy one object, give it a new `id`, choose `tier` (`"core"`, `"business"` or `"additional"`), add `title`, `summary`, `body`, `includes` and an optional `note`. It appears on the Services page and in the contact form's "Services of interest".

**Remove or reorder a service:** delete or move its object in `services.js`.

**Replace an image:** put the image in `assets/img/` (for example `assets/img/team/umar-khan.jpg`) and set the matching field, such as `founder.image` in `content/team.js`. Use `image: null` to show the labelled placeholder again. Portraits work best at about 4:5 portrait shape.

**Update the founder:** `content/team.js` â†’ `founder`.

**Add a team member:** in `content/team.js`, copy a role object inside `teamRoles`, then add a real `name`, approved `bio` and `image`. Workflow Alpha is currently two people (Umar and Sufian). Set `confirmed: false` on a role to hide it.

**Add a portfolio project:** in `content/portfolio.js`, copy a project object and change `id`, `title`, `persona`, `problem`, `process`, `purpose`. Choose a built-in `visual` (`week`, `plan`, `profile`, `video`, `calendar`, `pipeline`, `site`) and edit its `sample` data.

**Add a genuine client case study (only when verified and approved):** copy a project, set `kind: "client"`, add `client: "Client name"`, and replace `visual` with `image: "assets/img/portfolio/x.jpg"` and `imageAlt: "..."`. It will be labelled "Client project". Never add testimonials, logos or results that are not real.

**Edit FAQs:** `content/faq.js`. `home: true` shows a question on the homepage; every question also appears on the Contact page.

**Change brand colours or fonts:** `content/theme.js`.

## Placeholders you still need to fill in

Running `npm run build` prints this list. Open `content/siteConfig.js` and set:

1. `url`: your live domain (enables canonical links, sitemap and structured data URL).
2. `contactEmail`: shown in the footer and used by the form if no form service is set.
3. `bookingUrl`: when set, "Book a call" buttons appear.
4. `formEndpoint`: your Formspree form address (see "Enquiry form emails" below). Until it is set, the form opens the visitor's email app addressed to `contactEmail`.
5. `ogImage`: a 1200x630 image for link previews.

Then in `content/team.js`, add the founder's photo and any approved team names, bios and photos.

## Official links

Set in `siteConfig.js` (WhatsApp and email are also there):
LinkedIn `https://www.linkedin.com/in/umar-khan-7952103b6`,
Newsletter `https://workflowalpha.beehiiv.com/`.

## Honesty rules built into the content

No testimonials, client logos, performance figures, awards, team photos or biographies have been invented. Keep it that way: only add proof once it is real and approved.

## Icons and interactive sections

- Homepage icons are set per item in `content/home.js` (for example `icon: "chat"`). The detailed Path A / Path B step icons are in the `icons` object at the bottom of that file and line up in order with the steps. Available icon names are in `src/icons.js`.
- The scrolling band under the hero is `marquee` in `content/home.js`.
- Services open and close as an accordion. The first core service starts open; the rest are closed. Links like `/services/#svc-repurposing` open that service directly.
- Path A / Path B and the portfolio projects use tabs; the text for each is unchanged in `home.js` and `portfolio.js`.

## Hero photo and illustrations

- The hero shows your name first, then your introduction (`hero` in `content/home.js`; the name comes from `siteConfig.founder`).
- Add your photo at `founder.image` in `content/team.js` (for example `assets/img/team/umar-khan.jpg`, portrait 4:5). It replaces the "MU" placeholder in the hero, About page and team strip.
- The three-step pictures are original illustrations drawn in `src/art.js`. To use real photos instead, replace the call in `src/pages/home.js` with an `<img>` pointing at a file in `assets/img/`.
## Enquiry form emails

1. Create a free account at formspree.io and make a new form.
2. Add and confirm your email address in Formspree.
3. Copy the form address (https://formspree.io/f/xxxxxxx) into ormEndpoint in content/siteConfig.js and rebuild.
4. Submit a test enquiry. Every enquiry is emailed to you and also saved in your Formspree dashboard.
