// Workflow Alpha site generator (no dependencies).
//   node build.mjs           -> builds the site into /dist
//   node build.mjs --serve   -> builds, serves http://localhost:5173 and rebuilds when files change
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, "dist");
const serve = process.argv.includes("--serve");

async function build() {
  const { siteConfig: c } = await import("./content/siteConfig.js");
  const { theme } = await import("./content/theme.js");
  const { layout } = await import("./src/layout.js");
  const { makeCtx } = await import("./src/util.js");

  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // static assets
  fs.cpSync(path.join(ROOT, "assets"), path.join(DIST, "assets"), { recursive: true });

  // design tokens -> CSS variables
  const t = theme;
  const tokens = `:root{
${Object.entries(t.colors).map(([k, v]) => `  --c-${k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}: ${v};`).join("\n")}
  --font-heading: ${t.fonts.heading};
  --font-body: ${t.fonts.body};
  --radius: ${t.radius};
  --max: ${t.maxWidth};
}
`;
  fs.writeFileSync(path.join(DIST, "assets/css/tokens.css"), tokens);

  // pages
  const pages = ["home", "services", "portfolio", "about", "contact"];
  const urls = [];
  for (const name of pages) {
    const mod = await import(`./src/pages/${name}.js`);
    const { meta } = mod;
    const depth = meta.path ? meta.path.split("/").filter(Boolean).length : 0;
    const ctx = makeCtx(depth);
    const body = mod.render(ctx);
    const html = layout(ctx, { title: meta.title, description: meta.description, path: meta.path, body, pageId: meta.id });
    const out = path.join(DIST, meta.path, "index.html");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    urls.push(meta.path);
  }

  // robots + sitemap
  const base = c.url.replace(/\/$/, "");
  fs.writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n${base ? `Sitemap: ${base}/sitemap.xml\n` : ""}`);
  if (base) {
    fs.writeFileSync(
      path.join(DIST, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${base}/${u}</loc></url>`).join("\n")}\n</urlset>\n`
    );
  }

  // setup checklist: placeholders that still need real values
  const todo = [];
  if (!c.url) todo.push("siteConfig.url (needed for canonical links, sitemap and structured data)");
  if (!c.contactEmail) todo.push("siteConfig.contactEmail (footer + form fallback)");
  if (!c.bookingUrl) todo.push("siteConfig.bookingUrl (shows a 'Book a call' button when set)");
  if (!c.formEndpoint) todo.push("siteConfig.formEndpoint (form service; otherwise the form uses email)");
  if (!c.ogImage) todo.push("siteConfig.ogImage (social sharing image)");
  const { founder, teamRoles } = await import("./content/team.js");
  if (!founder.image) todo.push("team.js founder.image (portrait)");
  if (teamRoles.some((r) => r.confirmed && !r.image)) todo.push("team.js role portraits/names (placeholders shown)");
  console.log(`Built ${pages.length} pages into dist/`);
  if (todo.length) console.log("Still to configure:\n  - " + todo.join("\n  - "));
}

if (!serve) {
  await build();
} else {
  const rebuild = () => {
    const r = spawnSync(process.execPath, [path.join(ROOT, "build.mjs")], { stdio: "inherit" });
    return r.status === 0;
  };
  rebuild();

  let timer;
  for (const dir of ["content", "src", "assets"]) {
    fs.watch(path.join(ROOT, dir), { recursive: true }, () => {
      clearTimeout(timer);
      timer = setTimeout(() => { console.log("Change detected, rebuilding..."); rebuild(); }, 150);
    });
  }

  const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".txt": "text/plain", ".xml": "application/xml", ".ico": "image/x-icon" };
  const port = Number(process.env.PORT) || 5173;
  http
    .createServer((req, res) => {
      let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
      let file = path.join(DIST, p);
      if (!file.startsWith(DIST)) { res.writeHead(403).end(); return; }
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
      if (!fs.existsSync(file)) { res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found"); return; }
      res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
      fs.createReadStream(file).pipe(res);
    })
    .listen(port, () => console.log(`Serving http://localhost:${port}  (edits to /content, /src, /assets rebuild automatically; refresh the page)`));
}
