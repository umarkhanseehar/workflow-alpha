// ============================================================================
// THEME: design tokens. Change a value here and rebuild; it updates everywhere.
// These become CSS variables in assets/css/tokens.css.
// ============================================================================

export const theme = {
  colors: {
    navy: "#0B1220",        // Deep Navy
    charcoal: "#111827",    // Charcoal
    warmWhite: "#F8FAFC",   // Warm White
    blue: "#4F8CFF",        // Electric Blue (accent, use sparingly)
    blueDeep: "#2F6BE0",    // Accent for text on light backgrounds
    tint: "#EDF2FA",        // Soft blue-grey section background
    slate: "#5B6B82",       // Body text on light backgrounds
    slateLight: "#9AA9BF",  // Body text on dark backgrounds
    line: "#D8E0EC",        // Dividers on light backgrounds
    lineDark: "#243049",    // Dividers on dark backgrounds
  },
  fonts: {
    heading: "'Sora', 'Manrope', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    // Google Fonts request used in the page head
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@500;600;700&display=swap",
  },
  radius: "14px",
  maxWidth: "1180px",
};
