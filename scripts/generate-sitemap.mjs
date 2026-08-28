/**
 * Generates sitemap.xml from the site's public route configuration.
 * Run during build: node scripts/generate-sitemap.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const siteUrl = (process.env.VITE_SITE_URL || "https://codevente.com").replace(/\/$/, "");
const outPath = path.resolve(root, "client/public/sitemap.xml");

const staticPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/erpnext-implementation", priority: "1.0", changefreq: "weekly" },
  { path: "/portfolio", priority: "0.9", changefreq: "weekly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/courses", priority: "0.6", changefreq: "monthly" },
  { path: "/careers", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
];

const serviceSlugs = [
  "web-development",
  "mobile-app-development",
  "react-development",
  "shopify-development",
  "ai-solutions",
  "ui-ux",
  "digital-marketing",
  "seo",
];

const portfolioSlugs = [
  "fiabila-shopify-store",
  "zakaria-masjid",
  "healthcare-mobile-app",
  "khadija-tul-kubra",
  "edtech-learning-platform",
  "retail-brand-campaign",
  "quran-app",
];

const blogSlugs = [
  "erpnext-implementation-cost-pakistan",
  "erpnext-vs-odoo-small-business-pakistan",
  "shopify-development-cost-pakistan",
  "mobile-app-development-cost-pakistan",
  "react-vs-nextjs-business-websites",
  "migrate-excel-to-erp-software",
  "best-erp-software-small-business-pakistan",
  "custom-business-management-system",
  "erpnext-implementation-guide-pakistan",
  "erpnext-vs-traditional-erp",
  "ai-agents-startup-playbook",
  "mvp-to-production-checklist",
  "choosing-tech-stack-2026",
];

const highPriorityBlog = new Set([
  "erpnext-implementation-cost-pakistan",
  "erpnext-vs-odoo-small-business-pakistan",
  "best-erp-software-small-business-pakistan",
  "erpnext-implementation-guide-pakistan",
  "erpnext-vs-traditional-erp",
  "shopify-development-cost-pakistan",
  "mobile-app-development-cost-pakistan",
]);

function urlEntry(path, priority, changefreq) {
  return `  <url><loc>${siteUrl}${path}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

const entries = [
  ...staticPages.map((p) => urlEntry(p.path, p.priority, p.changefreq)),
  ...serviceSlugs.map((slug) => urlEntry(`/services/${slug}`, "0.85", "monthly")),
  ...portfolioSlugs.map((slug) => urlEntry(`/portfolio/${slug}`, "0.7", "monthly")),
  ...blogSlugs.map((slug) =>
    urlEntry(`/blog/${slug}`, highPriorityBlog.has(slug) ? "0.9" : "0.7", "monthly"),
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

fs.writeFileSync(outPath, xml, "utf-8");
console.log(`Sitemap written to ${outPath} (${entries.length} URLs)`);
