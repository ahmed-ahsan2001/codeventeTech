/**
 * Flat-vector HR product illustrations for /hr-software (UI mock style).
 * Run: node scripts/generate-hr-illustrations.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../client/public/hr");

const ACCENT = "#0066FF";
const ACCENT_LIGHT = "#E8F1FF";
const SLATE = "#64748B";
const BORDER = "#CBD5E1";

function shell(title, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720" role="img">
  <title>${title}</title>
  <rect width="1200" height="720" fill="#F8FAFC"/>
  <rect x="40" y="40" width="1120" height="640" rx="24" fill="#fff" stroke="${BORDER}" stroke-width="2"/>
  <rect x="40" y="40" width="1120" height="56" rx="24" fill="${ACCENT_LIGHT}"/>
  <rect x="40" y="72" width="1120" height="24" fill="${ACCENT_LIGHT}"/>
  <circle cx="72" cy="68" r="8" fill="#F87171"/><circle cx="96" cy="68" r="8" fill="#FBBF24"/><circle cx="120" cy="68" r="8" fill="#34D399"/>
  <text x="150" y="76" font-family="system-ui,sans-serif" font-size="14" fill="${SLATE}">${title}</text>
  ${body}
</svg>`;
}

function sidebar(x = 56, w = 200) {
  return `
    <rect x="${x}" y="120" width="${w}" height="536" rx="12" fill="#F1F5F9"/>
    ${["Employees", "Attendance", "Leave", "Payroll", "Reports"].map(
      (label, i) => `
      <rect x="${x + 16}" y="${140 + i * 52}" width="${w - 32}" height="40" rx="8" fill="${i === 3 ? ACCENT_LIGHT : "#fff"}" stroke="${i === 3 ? ACCENT : BORDER}"/>
      <text x="${x + 28}" y="${166 + i * 52}" font-family="system-ui,sans-serif" font-size="13" fill="#0F172A">${label}</text>
    `,
    ).join("")}
  `;
}

const ILLUSTRATIONS = {
  "hero-dashboard": shell(
    "HR & Payroll overview",
    `
    ${sidebar()}
    <text x="290" y="150" font-family="system-ui,sans-serif" font-size="22" font-weight="600" fill="#0F172A">Payroll — March 2026</text>
    ${[
      ["Headcount", "248", ACCENT],
      ["On leave today", "12", "#7C3AED"],
      ["Pending approvals", "7", "#0891B2"],
      ["Payroll status", "Ready", "#059669"],
    ]
      .map(
        ([label, val, color], i) => `
      <rect x="${290 + i * 210}" y="170" width="190" height="88" rx="12" fill="#fff" stroke="${BORDER}"/>
      <text x="${310 + i * 210}" y="200" font-size="12" fill="${SLATE}" font-family="system-ui,sans-serif">${label}</text>
      <text x="${310 + i * 210}" y="232" font-size="26" font-weight="700" fill="${color}" font-family="system-ui,sans-serif">${val}</text>
    `,
      )
      .join("")}
    <rect x="290" y="280" width="860" height="360" rx="12" fill="#fff" stroke="${BORDER}"/>
    <text x="310" y="312" font-size="14" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">Salary register</text>
    ${[0, 1, 2, 3, 4, 5].map(
      (r) => `
      <rect x="310" y="${330 + r * 44}" width="820" height="36" rx="6" fill="${r % 2 ? "#F8FAFC" : "#fff"}"/>
      <text x="326" y="${354 + r * 44}" font-size="12" fill="#0F172A" font-family="system-ui,sans-serif">Employee ${r + 1}</text>
      <text x="520" y="${354 + r * 44}" font-size="12" fill="${SLATE}" font-family="system-ui,sans-serif">Operations</text>
      <text x="720" y="${354 + r * 44}" font-size="12" fill="#0F172A" font-family="system-ui,sans-serif">PKR —</text>
      <rect x="980" y="${338 + r * 44}" width="72" height="24" rx="6" fill="${ACCENT_LIGHT}"/>
      <text x="992" y="${355 + r * 44}" font-size="11" fill="${ACCENT}" font-family="system-ui,sans-serif">Payslip</text>
    `,
    ).join("")}
  `,
  ),
  "choose-payroll": shell(
    "Choosing HR & payroll software",
    `
    <text x="80" y="140" font-size="24" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">Evaluation checklist</text>
    ${[
      ["Local labor & tax rules", "Income tax, EOBI, social security mapped to salary components"],
      ["Automated payroll runs", "Structures, overtime, bonuses, deductions with audit trail"],
      ["Easy for HR & staff", "Clear screens, role-based access, minimal IT dependency"],
      ["Cloud & multi-branch", "Karachi HQ + warehouses — one live system"],
      ["HR module integration", "Attendance, leave, and employee master feed payroll"],
      ["Implementation support", "Local partner for setup, training, and go-live"],
    ]
      .map(
        ([title, sub], i) => `
      <rect x="80" y="${180 + i * 82}" width="1040" height="68" rx="12" fill="#fff" stroke="${BORDER}"/>
      <circle cx="108" cy="${214 + i * 82}" r="14" fill="${ACCENT_LIGHT}" stroke="${ACCENT}" stroke-width="2"/>
      <path d="M102 ${214 + i * 82} L106 ${218 + i * 82} L114 ${210 + i * 82}" stroke="${ACCENT}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <text x="136" y="${208 + i * 82}" font-size="15" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">${title}</text>
      <text x="136" y="${230 + i * 82}" font-size="12" fill="${SLATE}" font-family="system-ui,sans-serif">${sub}</text>
    `,
      )
      .join("")}
  `,
  ),
  "key-features": shell(
    "Payroll & HR features",
    `
    <rect x="80" y="130" width="520" height="500" rx="16" fill="#fff" stroke="${BORDER}"/>
    <text x="100" y="168" font-size="16" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">Salary structure</text>
    ${["Basic pay", "Housing allowance", "EOBI / SS", "Income tax"].map(
      (row, i) => `
      <rect x="100" y="${190 + i * 56}" width="480" height="44" rx="8" fill="#F8FAFC"/>
      <text x="116" y="${218 + i * 56}" font-size="13" fill="#0F172A" font-family="system-ui,sans-serif">${row}</text>
      <rect x="480" y="${200 + i * 56}" width="80" height="24" rx="6" fill="${ACCENT_LIGHT}"/>
      <text x="492" y="${217 + i * 56}" font-size="11" fill="${ACCENT}" font-family="system-ui,sans-serif">Auto</text>
    `,
    ).join("")}
    <rect x="620" y="130" width="500" height="240" rx="16" fill="#fff" stroke="${BORDER}"/>
    <text x="640" y="168" font-size="16" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">Attendance sync</text>
    <rect x="640" y="190" width="460" height="160" rx="10" fill="${ACCENT_LIGHT}"/>
    <rect x="660" y="210" width="120" height="120" rx="8" fill="#fff" stroke="${BORDER}"/>
    <text x="680" y="280" font-size="11" fill="${SLATE}" font-family="system-ui,sans-serif">Biometric</text>
    <path d="M800 270 L880 270" stroke="${ACCENT}" stroke-width="3" marker-end="url(#a)"/>
    <defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" fill="${ACCENT}"/></marker></defs>
    <rect x="900" y="220" width="180" height="100" rx="8" fill="#fff" stroke="${BORDER}"/>
    <text x="920" y="275" font-size="12" fill="#0F172A" font-family="system-ui,sans-serif">ERPNext HR</text>
    <rect x="620" y="390" width="500" height="240" rx="16" fill="#fff" stroke="${BORDER}"/>
    <text x="640" y="428" font-size="16" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">Payslip preview</text>
    <rect x="640" y="450" width="460" height="160" rx="10" fill="#F8FAFC" stroke="${BORDER}"/>
    <text x="660" y="480" font-size="13" fill="#0F172A" font-family="system-ui,sans-serif">Net pay · PDF · Employee portal</text>
    ${[0, 1, 2].map(
      (i) => `
      <rect x="660" y="${500 + i * 28}" width="${300 - i * 40}" height="12" rx="4" fill="#E2E8F0"/>
    `,
    ).join("")}
  `,
  ),
  "payroll-workflow": shell(
    "How payroll processing works",
    `
    ${[
      ["1", "Data input", "Attendance, leave, OT, expenses"],
      ["2", "Calculation", "Structures & rules per employee"],
      ["3", "Compliance", "Deductions & statutory checks"],
      ["4", "Payslips", "Itemized slips to ESS portal"],
      ["5", "Disbursement", "Bank file & management reports"],
    ]
      .map(
        ([num, title, sub], i) => `
      <rect x="80" y="${130 + i * 108}" width="1040" height="92" rx="14" fill="#fff" stroke="${BORDER}"/>
      <circle cx="130" cy="${176 + i * 108}" r="28" fill="${ACCENT}" />
      <text x="130" y="${182 + i * 108}" text-anchor="middle" font-size="20" font-weight="700" fill="#fff" font-family="system-ui,sans-serif">${num}</text>
      <text x="180" y="${168 + i * 108}" font-size="18" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">${title}</text>
      <text x="180" y="${194 + i * 108}" font-size="13" fill="${SLATE}" font-family="system-ui,sans-serif">${sub}</text>
      ${i < 4 ? `<path d="M130 ${204 + i * 108} L130 ${222 + i * 108}" stroke="${ACCENT}" stroke-width="2" stroke-dasharray="4 4"/>` : ""}
    `,
      )
      .join("")}
  `,
  ),
  "employee-portal": shell(
    "Employee self-service",
    `
    <rect x="80" y="120" width="480" height="520" rx="20" fill="#0F172A"/>
    <rect x="100" y="140" width="440" height="80" rx="12" fill="#1E293B"/>
    <text x="120" y="188" font-size="18" font-weight="600" fill="#fff" font-family="system-ui,sans-serif">My HR</text>
    ${["Leave balance", "This month attendance", "Latest payslip", "Update profile"].map(
      (item, i) => `
      <rect x="100" y="${240 + i * 88}" width="440" height="72" rx="12" fill="#1E293B"/>
      <text x="120" y="${284 + i * 88}" font-size="15" fill="#F8FAFC" font-family="system-ui,sans-serif">${item}</text>
      <circle cx="500" cy="${276 + i * 88}" r="16" fill="${ACCENT}"/>
      <path d="M494 ${276 + i * 88} L498 ${280 + i * 88} L506 ${272 + i * 88}" stroke="#fff" stroke-width="2" fill="none"/>
    `,
    ).join("")}
    <rect x="600" y="120" width="520" height="520" rx="16" fill="#fff" stroke="${BORDER}"/>
    <text x="620" y="160" font-size="20" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">Transparent communication</text>
    <text x="620" y="190" font-size="14" fill="${SLATE}" font-family="system-ui,sans-serif">Staff see payslips, deductions, and leave — fewer HR desk queries.</text>
    <rect x="620" y="220" width="480" height="380" rx="12" fill="${ACCENT_LIGHT}"/>
    <rect x="640" y="250" width="200" height="140" rx="10" fill="#fff" stroke="${BORDER}"/>
    <text x="660" y="320" font-size="12" fill="${SLATE}" font-family="system-ui,sans-serif">Leave</text>
    <text x="660" y="350" font-size="28" font-weight="700" fill="${ACCENT}" font-family="system-ui,sans-serif">14d</text>
    <rect x="860" y="250" width="220" height="140" rx="10" fill="#fff" stroke="${BORDER}"/>
    <text x="880" y="320" font-size="12" fill="${SLATE}" font-family="system-ui,sans-serif">Attendance</text>
    <text x="880" y="350" font-size="28" font-weight="700" fill="#059669" font-family="system-ui,sans-serif">98%</text>
    <rect x="640" y="410" width="440" height="160" rx="10" fill="#fff" stroke="${BORDER}"/>
    <text x="660" y="450" font-size="14" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">March payslip</text>
    <rect x="660" y="470" width="400" height="10" rx="4" fill="#E2E8F0"/>
    <rect x="660" y="490" width="320" height="10" rx="4" fill="#E2E8F0"/>
    <rect x="660" y="510" width="360" height="10" rx="4" fill="${ACCENT}" opacity="0.3"/>
  `,
  ),
  "integrations": shell(
    "HR integrations",
    `
    <circle cx="600" cy="380" r="72" fill="${ACCENT}" />
    <text x="600" y="388" text-anchor="middle" font-size="14" font-weight="600" fill="#fff" font-family="system-ui,sans-serif">ERPNext HR</text>
    ${[
      [320, 220, "ZKTeco"],
      [880, 220, "Biometric"],
      [320, 520, "Finance"],
      [880, 520, "Bank export"],
      [600, 160, "ESS portal"],
      [600, 580, "Mobile"],
    ]
      .map(
        ([cx, cy, label]) => `
      <rect x="${cx - 70}" y="${cy - 28}" width="140" height="56" rx="12" fill="#fff" stroke="${BORDER}"/>
      <text x="${cx}" y="${cy + 6}" text-anchor="middle" font-size="13" fill="#0F172A" font-family="system-ui,sans-serif">${label}</text>
      <path d="M600 380 L${cx} ${cy}" stroke="${ACCENT}" stroke-width="2" opacity="0.4"/>
    `,
      )
      .join("")}
  `,
  ),
};

/** Editorial illustrations (no browser chrome) — e.g. “why choose” hero art */
const STANDALONE = {
  "why-choose-hr": `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 520" role="img">
  <title>Choosing the right HR payroll solution</title>
  <rect width="640" height="520" fill="#FFFFFF"/>
  <ellipse cx="320" cy="470" rx="220" ry="28" fill="#F1F5F9"/>
  <text x="120" y="95" font-size="72" font-weight="700" fill="${ACCENT}" opacity="0.15" font-family="Georgia,serif">?</text>
  <text x="480" y="75" font-size="56" font-weight="700" fill="#7C3AED" opacity="0.2" font-family="Georgia,serif">?</text>
  <text x="400" y="130" font-size="64" font-weight="700" fill="${ACCENT}" opacity="0.25" font-family="Georgia,serif">?</text>
  <circle cx="320" cy="175" r="52" fill="#FDE68A"/>
  <path d="M268 175 Q320 120 372 175" fill="#0F172A"/>
  <ellipse cx="320" cy="200" rx="58" ry="14" fill="#0F172A"/>
  <rect x="268" y="228" width="104" height="120" rx="20" fill="${ACCENT_LIGHT}" stroke="${ACCENT}" stroke-width="2"/>
  <path d="M248 268 L228 310 L268 298" fill="#F8FAFC" stroke="${BORDER}" stroke-width="2"/>
  <path d="M392 268 L412 310 L372 298" fill="#F8FAFC" stroke="${BORDER}" stroke-width="2"/>
  <circle cx="300" cy="168" r="5" fill="#0F172A"/><circle cx="340" cy="168" r="5" fill="#0F172A"/>
  <path d="M305 188 Q320 178 335 188" stroke="#0F172A" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M290 155 L285 145 M350 155 L355 145" stroke="#0F172A" stroke-width="2" stroke-linecap="round"/>
  <rect x="200" y="350" width="240" height="12" rx="6" fill="#E2E8F0"/>
  <rect x="220" y="378" width="200" height="12" rx="6" fill="#E2E8F0"/>
  <rect x="180" y="320" width="280" height="8" rx="4" fill="${ACCENT}" opacity="0.2"/>
  <rect x="430" y="300" width="140" height="100" rx="10" fill="#fff" stroke="${BORDER}" stroke-width="2"/>
  <text x="448" y="335" font-size="11" fill="${SLATE}" font-family="system-ui,sans-serif">Payroll?</text>
  <text x="448" y="358" font-size="11" fill="${SLATE}" font-family="system-ui,sans-serif">Attendance?</text>
  <text x="448" y="381" font-size="11" fill="${SLATE}" font-family="system-ui,sans-serif">Compliance?</text>
  <circle cx="120" cy="400" r="36" fill="${ACCENT_LIGHT}"/>
  <path d="M108 400 L118 410 L132 392" stroke="${ACCENT}" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,
};

mkdirSync(OUT_DIR, { recursive: true });
for (const [name, svg] of Object.entries({ ...ILLUSTRATIONS, ...STANDALONE })) {
  writeFileSync(join(OUT_DIR, `${name}.svg`), svg.trim());
}
console.log(
  `HR illustrations written to ${OUT_DIR} (${Object.keys(ILLUSTRATIONS).length + Object.keys(STANDALONE).length} files)`,
);
