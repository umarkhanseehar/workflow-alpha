// ============================================================================
// HOMEPAGE COPY: deliberately short. Detail lives on the Services, Portfolio
// and About pages. Section order is set in src/pages/home.js.
// ============================================================================

// ---- 1. Hero: name and introduction come first -----------------------------
export const hero = {
  eyebrow: "Founder, Workflow Alpha",
  // The name itself comes from siteConfig.founder
  headline: "Build Your Personal Brand. Turn Visibility Into Conversations.",
  intro:
    "I'm Umar Khan. Together with Sufian Dildar, I build and manage your personal brand: your profile, your content and your publishing. You share your expertise. We do the rest.",
  audienceLine:
    "Commercial Lenders · Mortgage Brokers · CRE Professionals · Founders · Coaches & Advisors",
};

// ---- 2. What we do, in three steps -----------------------------------------
export const whatWeDo = {
  eyebrow: "What we do",
  heading: "Three simple steps",
  steps: [
    { art: "profile", title: "Build your brand", text: "A clear profile and message that show who you help." },
    { art: "content", title: "Create and publish", text: "Posts, carousels and short videos from your expertise." },
    { art: "conversation", title: "Start conversations", text: "Optional lead generation and follow-up support." },
  ],
};

// ---- 3. Two ways to start ---------------------------------------------------
export const starts = {
  eyebrow: "Two easy ways to start",
  heading: "Start with what you have",
  a: {
    tag: "Path A",
    icon: "folder",
    title: "I already have content",
    text: "We turn your videos, podcasts and articles into posts and clips.",
    cta: { label: "Repurpose My Content", path: "contact/?start=repurpose" },
  },
  b: {
    tag: "Path B",
    icon: "mic",
    title: "I'm starting from scratch",
    text: "Send two or three short voice notes a week. We do the writing.",
    cta: { label: "Build My Personal Brand", path: "contact/?start=expertise" },
  },
  more: { label: "See the full process", path: "services/#paths-detail" },
};

// ---- 4. Who I help ----------------------------------------------------------
export const who = {
  eyebrow: "Who I help",
  heading: "Professionals who sell trust",
  list: [
    { icon: "landmark", label: "Commercial mortgage brokers and lenders" },
    { icon: "building", label: "Commercial real estate professionals" },
    { icon: "rocket", label: "Founders and CEOs" },
    { icon: "users", label: "Coaches and consultants" },
    { icon: "briefcase", label: "M&A and business advisors" },
  ],
};

// ---- 5. How it works --------------------------------------------------------
export const how = {
  eyebrow: "How it works",
  heading: "Simple from day one",
  steps: [
    { icon: "chat", title: "Talk", text: "A short Personal Brand Review call." },
    { icon: "target", title: "Plan", text: "We set your message and profile." },
    { icon: "pen", title: "Create", text: "We draft. You approve." },
    { icon: "send", title: "Publish", text: "We publish and support follow-up." },
  ],
};

// ---- 6. Team ----------------------------------------------------------------
export const teamTeaser = {
  eyebrow: "The team",
  heading: "Two people, one connected service",
  text: "I lead your strategy. Sufian builds the website and automation behind it.",
};

// ---- 7. FAQ (first 3 homepage questions come from content/faq.js) ----------
export const faqHome = { eyebrow: "Quick answers", heading: "Good to know" };

// ---- 8. Final call to action ------------------------------------------------
export const finalCta = {
  heading: "Ready to be the professional people remember?",
  text: "Request a Personal Brand Review. You approve everything we publish. No guaranteed results, just a clear system.",
};

// ============================================================================
// DETAIL CONTENT used on the Services page (the two paths, in full)
// ============================================================================
export const paths = {
  eyebrow: "Two ways to start",
  heading: "Start with what you have",
  intro: "You do not need a content library to begin, and you do not need to start from nothing if you already have one.",
  a: {
    tag: "Path A",
    headline: "Already Have Content? Let's Turn It Into a Consistent Content System.",
    intro:
      "Many professionals have valuable material but not the time or process to use it. We organise it, find what matters and adapt it for the right platforms.",
    sources: [
      "YouTube videos", "Podcasts", "Interviews", "Webinars", "Presentations",
      "Market reports and research", "Articles and newsletters", "Existing LinkedIn posts",
      "Professional insights and client FAQs", "Suitable video recordings",
    ],
    steps: [
      "Review and organise existing source material.",
      "Extract valuable insights, experiences, opinions and lessons.",
      "Develop appropriate text posts, carousel content and other agreed formats.",
      "Create short-form video clips from supplied footage when included in scope.",
      "Prepare drafts for review and approval.",
      "Publish or schedule approved content across agreed platforms.",
      "Review available performance data and improve the process.",
    ],
    outputs:
      "Possible outputs: LinkedIn posts, carousels, newsletter material, articles, and short-form videos where you have suitable footage. Content is adapted to the intended platform rather than copied blindly everywhere.",
    cta: { label: "Repurpose My Content", path: "contact/?start=repurpose" },
  },
  b: {
    tag: "Path B",
    headline: "No Content Yet? We Build From Your Expertise.",
    intro:
      "You do not need an existing podcast, YouTube channel or published content library. Your expertise is the raw material.",
    steps: [
      "Initial discovery session to understand your expertise, business, audience, positioning and goals.",
      "You send roughly two or three short voice notes a week, usually two to five minutes each, or follow the agreed input schedule.",
      "We provide useful questions and prompts so you know what to talk about.",
      "We use the voice notes, your expertise, written answers, relevant source material and research to develop content ideas.",
      "We draft content in your authentic professional voice.",
      "We prepare text posts, carousels and other agreed formats.",
      "Where applicable, we edit supplied video footage into suitable short-form content.",
      "We send the content for your review and approval.",
      "We publish or schedule approved content according to the agreed plan.",
    ],
    note:
      "Your voice notes provide the raw expertise and ideas. We handle the organised content process. You may still be asked to clarify facts, approve drafts and add context. The workflow is designed to minimise unnecessary meetings and use asynchronous communication where practical.",
    cta: { label: "Build My Personal Brand", path: "contact/?start=expertise" },
  },
};

export const icons = {
  pathASources: ["play", "mic", "chat", "users", "layers", "chart", "doc", "linkedin", "bulb", "film"],
  pathASteps: ["folder", "bulb", "pen", "film", "eye", "send", "chart"],
  pathBSteps: ["search", "mic", "bulb", "folder", "pen", "layers", "film", "eye", "send"],
};
