/**
 * Generates flat-vector blog cover SVGs for OG/social sharing.
 * Run: node scripts/generate-blog-covers.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../client/public/blog-covers");

const THEMES = {
  ERP: { accent: "#0066FF", accentLight: "#E8F1FF" },
  "E-Commerce": { accent: "#7C3AED", accentLight: "#F3EEFF" },
  Mobile: { accent: "#0891B2", accentLight: "#E6F9FD" },
  Engineering: { accent: "#0F172A", accentLight: "#F1F5F9" },
  AI: { accent: "#6366F1", accentLight: "#EEF2FF" },
  Strategy: { accent: "#059669", accentLight: "#ECFDF5" },
};

const POSTS = [
  { slug: "erpnext-implementation-cost-pakistan", title: "How Much Does ERPNext Implementation Cost in Pakistan? (2026 Guide)", category: "ERP" },
  { slug: "erpnext-vs-odoo-small-business-pakistan", title: "ERPNext vs Odoo for Small Businesses in Pakistan", category: "ERP" },
  { slug: "shopify-development-cost-pakistan", title: "How Much Does Shopify Development Cost in Pakistan? (2026)", category: "E-Commerce" },
  { slug: "mobile-app-development-cost-pakistan", title: "How Much Does Mobile App Development Cost in Pakistan? (2026)", category: "Mobile" },
  { slug: "react-vs-nextjs-business-websites", title: "React vs Next.js for Business Websites: Which Should You Choose?", category: "Engineering" },
  { slug: "migrate-excel-to-erp-software", title: "How to Migrate a Business from Excel to ERP Software", category: "ERP" },
  { slug: "best-erp-software-small-business-pakistan", title: "Best ERP Software for Small Businesses in Pakistan (2026)", category: "ERP" },
  { slug: "custom-business-management-system", title: "How to Build a Custom Business Management System", category: "Strategy" },
  { slug: "erpnext-implementation-guide-pakistan", title: "ERPNext Implementation Guide for Pakistani Businesses (2026)", category: "ERP" },
  { slug: "erpnext-vs-traditional-erp", title: "ERPNext vs Traditional ERP: Why Startups Are Switching", category: "ERP" },
  { slug: "ai-agents-startup-playbook", title: "The Startup Playbook for AI Agents in 2026", category: "AI" },
  { slug: "mvp-to-production-checklist", title: "From MVP to Production: A Technical Checklist", category: "Engineering" },
  { slug: "choosing-tech-stack-2026", title: "Choosing Your Tech Stack in 2026", category: "Strategy" },
];

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapTitle(title, maxCharsPerLine = 32) {
  const words = title.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 4);
}

function erpArt(accent, accentLight) {
  return `
    <rect x="620" y="120" width="280" height="200" rx="12" fill="#fff" stroke="#CBD5E1" stroke-width="2"/>
    <rect x="620" y="120" width="280" height="36" rx="12" fill="${accentLight}"/>
    <circle cx="640" cy="138" r="6" fill="#F87171"/><circle cx="660" cy="138" r="6" fill="#FBBF24"/><circle cx="680" cy="138" r="6" fill="#34D399"/>
    ${[0, 1, 2, 3].map((i) => `
      <circle cx="650" cy="${178 + i * 32}" r="10" fill="${accent}"/>
      <path d="M645 ${178 + i * 32} L649 ${182 + i * 32} L655 ${174 + i * 32}" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
      <rect x="670" y="${170 + i * 32}" width="200" height="16" rx="8" fill="#E2E8F0"/>
    `).join("")}
    <circle cx="940" cy="180" r="48" fill="${accentLight}" stroke="${accent}" stroke-width="3"/>
    <path d="M940 140 A40 40 0 0 1 980 180 L940 180 Z" fill="${accent}"/>
    <rect x="900" y="260" width="20" height="60" rx="4" fill="${accent}"/>
    <rect x="930" y="240" width="20" height="80" rx="4" fill="#94A3B8"/>
    <rect x="960" y="220" width="20" height="100" rx="4" fill="${accent}" opacity="0.5"/>
  `;
}

function ecommerceArt(accent, accentLight) {
  return `
    <rect x="640" y="140" width="240" height="170" rx="12" fill="#fff" stroke="#CBD5E1" stroke-width="2"/>
    <rect x="640" y="140" width="240" height="40" rx="12" fill="${accentLight}"/>
    <path d="M670 240 L710 240 L720 280 L750 200 L780 240 L850 240 L850 290 L670 290 Z" fill="${accent}" opacity="0.85"/>
    <circle cx="920" cy="180" r="50" fill="${accentLight}" stroke="${accent}" stroke-width="3"/>
    <path d="M895 180 H945 M920 155 V205" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
  `;
}

function mobileArt(accent, accentLight) {
  return `
    <rect x="700" y="100" width="140" height="240" rx="24" fill="#0F172A"/>
    <rect x="712" y="124" width="116" height="196" rx="10" fill="${accentLight}"/>
    <rect x="728" y="148" width="84" height="16" rx="8" fill="${accent}" opacity="0.3"/>
    <rect x="728" y="176" width="84" height="64" rx="10" fill="${accent}" opacity="0.85"/>
  `;
}

function engineeringArt(accent, accentLight) {
  return `
    <rect x="620" y="120" width="360" height="220" rx="14" fill="#0F172A"/>
    <rect x="640" y="148" width="120" height="12" rx="6" fill="#34D399"/>
    <rect x="660" y="172" width="90" height="12" rx="6" fill="#94A3B8"/>
    <rect x="660" y="196" width="150" height="12" rx="6" fill="#60A5FA"/>
    <rect x="660" y="220" width="70" height="12" rx="6" fill="#FBBF24"/>
    <circle cx="920" cy="170" r="36" fill="${accentLight}" stroke="${accent}" stroke-width="3"/>
    <path d="M908 170 L916 178 L932 158" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
  `;
}

function aiArt(accent, accentLight) {
  return `
    <circle cx="800" cy="220" r="56" fill="${accentLight}" stroke="${accent}" stroke-width="3"/>
    <circle cx="800" cy="220" r="20" fill="${accent}"/>
    ${[[680, 160], [920, 160], [680, 280], [920, 280]].map(([cx, cy]) => `
      <line x1="800" y1="220" x2="${cx}" y2="${cy}" stroke="${accent}" stroke-width="2" opacity="0.4"/>
      <circle cx="${cx}" cy="${cy}" r="14" fill="#fff" stroke="${accent}" stroke-width="2"/>
      <circle cx="${cx}" cy="${cy}" r="5" fill="${accent}"/>
    `).join("")}
  `;
}

function strategyArt(accent, accentLight) {
  return `
    <path d="M620 300 L700 220 L780 250 L860 180 L940 210" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="940" cy="210" r="10" fill="${accent}"/>
    <rect x="640" y="160" width="24" height="140" rx="6" fill="#E2E8F0"/>
    <rect x="640" y="220" width="24" height="80" rx="6" fill="${accent}" opacity="0.5"/>
    <rect x="680" y="190" width="24" height="110" rx="6" fill="#E2E8F0"/>
    <rect x="680" y="240" width="24" height="60" rx="6" fill="${accent}" opacity="0.7"/>
    <circle cx="900" cy="150" r="36" fill="${accentLight}" stroke="${accent}" stroke-width="3"/>
  `;
}

const ART = {
  ERP: erpArt,
  "E-Commerce": ecommerceArt,
  Mobile: mobileArt,
  Engineering: engineeringArt,
  AI: aiArt,
  Strategy: strategyArt,
};

function buildSvg(post) {
  const theme = THEMES[post.category] ?? THEMES.Strategy;
  const lines = wrapTitle(post.title);
  const titleSvg = lines
    .map(
      (line, i) =>
        `<tspan x="72" dy="${i === 0 ? 0 : 44}">${escapeXml(line)}</tspan>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img">
  <rect width="1200" height="630" fill="#ffffff"/>
  <defs>
    <radialGradient id="blob" cx="75%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="${theme.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#blob)"/>
  <text x="72" y="120" fill="${theme.accent}" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="18" font-weight="700" letter-spacing="0.2em">${escapeXml(post.category.toUpperCase())}</text>
  <text x="72" y="180" fill="#0F172A" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="38" font-weight="700">${titleSvg}</text>
  <text x="1080" y="56" text-anchor="end" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="20" font-weight="700">Code<tspan fill="${theme.accent}">Vente</tspan></text>
  ${ART[post.category]?.(theme.accent, theme.accentLight) ?? strategyArt(theme.accent, theme.accentLight)}
</svg>`;
}

mkdirSync(OUT_DIR, { recursive: true });

for (const post of POSTS) {
  const path = join(OUT_DIR, `${post.slug}.svg`);
  writeFileSync(path, buildSvg(post), "utf8");
}

console.log(`Blog covers written to ${OUT_DIR} (${POSTS.length} files)`);
