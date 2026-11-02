// ============================================================================
// PORTFOLIO: demonstration projects (and, later, genuine client case studies).
//
// ADD A PROJECT: copy an object, change `id`, text and `visual`, save, rebuild.
// - `kind: "demo"`   -> shown with a "Demonstration project" label (fictional).
// - `kind: "client"` -> use ONLY for verified, approved client work. Add a `client` name,
//                       and replace `visual` with `image: "assets/img/portfolio/x.jpg"` + `imageAlt`.
// - `visual` picks a built-in sample layout: "week" | "plan" | "profile" | "video" |
//                                            "calendar" | "pipeline" | "site"
// Never add testimonials, logos, results or figures that are not real and verified.
// ============================================================================

export const portfolioIntro =
  "Workflow Alpha is building its portfolio. Every project below is a demonstration, concept or fictional example that shows how we work. Verified client work will be added only once it exists and the client has agreed.";

export const portfolio = [
  {
    id: "one-source-week",
    kind: "demo",
    title: "One Source, A Week of Content",
    persona: "Fictional commercial mortgage broker",
    problem:
      "A useful 30-minute webinar was recorded once, then forgotten. The expertise inside it never reached the audience again.",
    process: [
      "Review the recording and mark the strongest ideas",
      "Extract insights, opinions and audience questions",
      "Assign each idea to the format that suits it",
      "Draft for review and approval",
    ],
    purpose:
      "Shows how one existing source becomes several adapted assets, rather than the same text pasted everywhere.",
    visual: "week",
    sample: {
      source: "Source: fictional webinar, “What borrowers should prepare before speaking to a lender”",
      items: [
        { day: "Mon", format: "LinkedIn post", text: "The three documents that make a first lender conversation easier." },
        { day: "Tue", format: "Carousel", text: "5 slides: what to prepare before you approach a lender." },
        { day: "Wed", format: "Newsletter idea", text: "A short note answering the question borrowers ask most." },
        { day: "Thu", format: "Short-video script", text: "30-second script from the clearest segment of the recording." },
        { day: "Fri", format: "Article outline", text: "A longer piece expanding Monday's post." },
      ],
    },
  },
  {
    id: "voice-notes-plan",
    kind: "demo",
    title: "Voice Notes to a Personal Brand Content Plan",
    persona: "Fictional executive coach",
    problem:
      "Plenty of expertise, no content library, and no time for long writing sessions.",
    process: [
      "Discovery session to understand expertise, audience and goals",
      "Client sends two or three short voice notes a week",
      "We reply with prompts so the next notes are easy to record",
      "Ideas are organised into pillars and drafted in the client's voice",
    ],
    purpose:
      "Shows how short voice notes provide the raw expertise while we handle the organised content process.",
    visual: "plan",
    sample: {
      note: "Sample voice note (3 min): “Leaders keep asking me how to give feedback without damaging trust...”",
      pillars: [
        { name: "Feedback & trust", topics: ["Feedback that lands", "When silence is the problem"] },
        { name: "Leading through change", topics: ["What teams need to hear first", "Small signals that matter"] },
        { name: "Coaching in practice", topics: ["A question I ask every leader", "What coaching is not"] },
      ],
    },
  },
  {
    id: "profile-positioning",
    kind: "demo",
    title: "LinkedIn Profile Positioning",
    persona: "Fictional commercial real estate advisor",
    problem:
      "A profile that lists a job title but does not say who the advisor helps or why they are credible.",
    process: [
      "Clarify audience and positioning",
      "Rewrite the headline and About section",
      "Recommend Featured items and a clear call to action",
      "Align the profile with the advisor's website",
    ],
    purpose:
      "Shows how a profile can communicate credibility and value more clearly. It does not promise leads.",
    visual: "profile",
    sample: {
      before: "Commercial Real Estate Advisor | Property Consultant",
      after: "Helping owners and investors make clearer commercial property decisions | Commercial real estate advisor",
      about:
        "I work with owners and investors who want a straightforward view of their options before they commit. [Fictional example text]",
      cta: "Featured: a short guide to the questions to ask before you list or buy.",
    },
  },
  {
    id: "video-short-form",
    kind: "demo",
    title: "Video to Short-Form Editing",
    persona: "Layout demonstration (footage must be supplied)",
    problem:
      "Long recordings contain strong moments that are never shared as short, watchable clips.",
    process: [
      "Review supplied video",
      "Select useful segments",
      "Edit short clips",
      "Add suitable captions and formatting",
      "Review, then publish or deliver",
    ],
    purpose:
      "Shows the editing workflow and layout. Real clips require real footage; voice notes alone do not create video.",
    visual: "video",
    sample: {
      segments: [
        { label: "Hook", length: 2 },
        { label: "Key point", length: 4 },
        { label: "Example", length: 3 },
        { label: "Takeaway", length: 2 },
      ],
      captions: ["Caption line 1 (sample)", "Caption line 2 (sample)"],
    },
  },
  {
    id: "distribution-calendar",
    kind: "demo",
    title: "Content Distribution Calendar",
    persona: "Fictional founder",
    problem:
      "Content gets made but publishing is irregular, and nobody can see what is going out when.",
    process: [
      "Agree platforms and posting rhythm",
      "Plan formats across the week",
      "Schedule approved content",
      "Review publishing consistency",
    ],
    purpose:
      "Shows how planning and scheduling keep publishing consistent. Platforms vary by client and package.",
    visual: "calendar",
    sample: {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      rows: [
        { channel: "LinkedIn (personal)", cells: ["Post", "Carousel", "", "Post", "Short video"] },
        { channel: "LinkedIn (company)", cells: ["", "Repost", "", "", "Article link"] },
        { channel: "Newsletter", cells: ["", "", "Draft", "", "Send"] },
      ],
    },
  },
  {
    id: "lead-pipeline",
    kind: "demo",
    title: "Lead Pipeline Workflow",
    persona: "Fictional B2B professional",
    problem:
      "Enquiries arrive in different places and follow-ups depend on memory.",
    process: [
      "Capture enquiries and their source",
      "Record prospect details and next steps",
      "Set follow-up tasks",
      "Review pipeline progression where tracking is in place",
    ],
    purpose:
      "Shows how enquiries, prospects and follow-ups can be organised. It does not imply any lead becomes a client.",
    visual: "pipeline",
    sample: {
      stages: [
        { name: "New enquiry", items: ["Sample enquiry A"] },
        { name: "Contacted", items: ["Sample prospect B", "Sample prospect C"] },
        { name: "Conversation booked", items: ["Sample prospect D"] },
        { name: "Follow-up due", items: ["Sample prospect E"] },
      ],
    },
  },
  {
    id: "sample-website",
    kind: "demo",
    title: "Sample Professional Website",
    persona: "Fictional business advisor",
    problem:
      "Interest from LinkedIn goes nowhere because there is no clear place to learn more or get in touch.",
    process: [
      "Define positioning, services and the next step",
      "Structure a simple, clear page",
      "Add an enquiry form and calls to action",
      "Connect it to the profile and content",
    ],
    purpose:
      "Shows the kind of focused website or landing page we can build as a supporting service.",
    visual: "site",
    sample: {
      brand: "Sample Advisory",
      headline: "Clear advice for owners planning their next move",
      sections: ["Who I help", "How I work", "Insights", "Get in touch"],
    },
  },
];
