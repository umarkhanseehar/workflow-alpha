// ============================================================================
// TEAM: founder + supporting capabilities.
// - Workflow Alpha is two people: Umar Khan and Sufian Dildar. Set `confirmed: false` on any role you do not have; it is then hidden.
// - To add a real person: fill in `name`, `bio` and `image` (e.g. "assets/img/team/aisha.jpg").
//   While `image` is null the site shows a clearly labelled photo placeholder.
// - Do not add names, qualifications or experience that are not verified.
// ============================================================================

export const founder = {
  name: "Umar Khan",
  role: "Founder and Personal Brand Strategy Lead",
  image: "assets/img/team/umar-khan.jpg",
  intro:
    "Umar Khan founded Workflow Alpha to help professionals communicate their expertise consistently and build a stronger online presence without having to manage every part of the process themselves.",
  bio:
    "He leads the personal brand strategy and coordinates the work across content, publishing, and business development support so that the agreed services work together as one system.",
  responsibilities: [
    "Strategy and positioning",
    "Client direction",
    "Overall personal brand growth process",
    "Coordination across content, publishing and business development",
  ],
};

export const collaborationModel =
  "Umar Khan leads the strategy and works closely with Sufian Dildar, who builds the website and automation side, so that clients receive a connected service rather than disconnected individual tasks.";

export const teamRoles = [
  {
    confirmed: true,
    icon: "globe",
    role: "Web Developer and AI Automation Engineer",
    name: "Sufian Dildar",
    bio: null,    // TODO approved biography (do not add unverified experience or qualifications)
    image: "assets/img/team/sufian-dildar.webp",
    summary:
      "Builds professional websites and landing pages, and sets up the AI and workflow automation that supports research, drafting and day-to-day delivery.",
    responsibilities: [
      "Websites and landing pages",
      "Enquiry forms and lead-capture pathways",
      "AI and workflow automation",
    ],
  },
  {
    confirmed: false,
    icon: "film",
    role: "Video Editor",
    name: null,
    bio: null,
    image: null,
    summary:
      "Helps transform supplied video footage into polished short-form content and other agreed formats.",
    responsibilities: [
      "Selecting and editing short clips",
      "Captions and formatting",
      "Agreed video formats",
    ],
  },
  {
    confirmed: false,
    icon: "layers",
    role: "Content and Creative Production",
    name: null,
    bio: null,
    image: null,
    summary:
      "Supports content preparation, visual assets, formatting and production tasks included in the actual team workflow.",
    responsibilities: [
      "Content preparation",
      "Carousels and visual assets",
      "Formatting and production",
    ],
  },
  {
    confirmed: false,
    icon: "calendar",
    role: "Publishing and Workflow Support",
    name: null,
    bio: null,
    image: null,
    summary:
      "Supports content organisation, scheduling, project coordination and the agreed delivery process where applicable.",
    responsibilities: [
      "Content organisation and scheduling",
      "Project coordination",
      "Agreed delivery process",
    ],
  },
];
