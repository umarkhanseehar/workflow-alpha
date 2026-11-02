// ============================================================================
// SITE CONFIG: brand, founder, links, contact details and SEO defaults.
// Anything marked TODO is a placeholder the founder must replace.
// ============================================================================

export const siteConfig = {
  brand: "Workflow Alpha",
  founder: "Umar Khan",
  founderRole: "Founder and Personal Brand Strategy Lead",
  tagline: "Personal Brand Growth & Content Systems",

  // SEO defaults (individual pages can override these in src/pages/*)
  homeTitle: "Workflow Alpha | Personal Brand Growth & Content Systems",
  homeDescription:
    "Workflow Alpha helps commercial lenders, brokers, founders, coaches and B2B professionals build their personal brand through strategy, content creation, repurposing, publishing and lead-generation support.",

  // TODO: your live website address, e.g. "https://www.workflowalpha.com".
  // Used for canonical links, sitemap.xml and structured data. Leave "" until the domain is live.
  url: "",

  // TODO: path to a 1200x630 JPG/PNG in /assets/img used when the site is shared. Leave "" to skip.
  ogImage: "",

  // ---- Contact (TODO: replace placeholders) -------------------------------
  // Real address shown in the footer and used by the enquiry form fallback.
  contactEmail: "umarsehar01@gmail.com",
  // WhatsApp number in international format. Powers the WhatsApp buttons (wa.me link).
  whatsapp: "+923020107343",

  // Booking link (Calendly, Cal.com, etc.). When set, a "Book a call" button appears.
  bookingUrl: "", // TODO e.g. "https://cal.com/your-name"
  // Optional form service (Formspree, Basin, Getform...). When set, the form posts here.
  // If empty, the form opens the visitor's email app addressed to contactEmail.
  formEndpoint: "https://formspree.io/f/mqppbajp", // Formspree: enquiries are emailed to you and saved in your Formspree dashboard

  // ---- Official links (exact URLs as supplied) ----------------------------
  links: {
    linkedin: "https://www.linkedin.com/in/umar-khan-7952103b6",
    newsletter: "https://workflowalpha.beehiiv.com/",
  },

  newsletter: {
    name: "The Workflow Alpha Newsletter",
    description:
      "A related resource sharing useful AI, workflow and business-operations ideas for founders. It is separate from the agency's personal brand services.",
  },

  // ---- Main calls to action ------------------------------------------------
  cta: {
    primary: { label: "Request a Personal Brand Review", path: "contact/" },
    secondary: { label: "Explore How It Works", path: "#what" },
  },

  footerNote:
    "Workflow Alpha is a founder-led service business. Results depend on each client's service, audience, market, timing and sales process.",
};
