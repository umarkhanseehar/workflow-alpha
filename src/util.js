export const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Each page is rendered with a context carrying `root` (relative path back to site root)
export function makeCtx(depth) {
  const root = depth === 0 ? "./" : "../".repeat(depth);
  const href = (p = "") => {
    if (/^(https?:|mailto:|#)/.test(p)) return p;
    if (p.startsWith("#")) return p;
    return root + p;
  };
  return { root, href };
}

export const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
