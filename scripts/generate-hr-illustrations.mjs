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

function escapeXml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shell(title, body) {
  const safeTitle = escapeXml(title);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720" role="img">
  <title>${safeTitle}</title>
  <rect width="1200" height="720" fill="#F8FAFC"/>
  <rect x="40" y="40" width="1120" height="640" rx="24" fill="#fff" stroke="${BORDER}" stroke-width="2"/>
  <rect x="40" y="40" width="1120" height="56" rx="24" fill="${ACCENT_LIGHT}"/>
  <rect x="40" y="72" width="1120" height="24" fill="${ACCENT_LIGHT}"/>
  <circle cx="72" cy="68" r="8" fill="#F87171"/><circle cx="96" cy="68" r="8" fill="#FBBF24"/><circle cx="120" cy="68" r="8" fill="#34D399"/>
  <text x="150" y="76" font-family="system-ui,sans-serif" font-size="14" fill="${SLATE}">${safeTitle}</text>
  ${body}
</svg>`;
}

function sidebar(x = 56, w = 200) {
  return `
    <rect x="${x}" y="120" width="${w}" height="536" rx="12" fill="#F1F5F9"/>
    ${["Employees", "Attendance", "Leave", "Payroll", "Reports"].map(
      (label, i) => `
      <rect x="${x + 16}" y="${140 + i * 52}" width="${w - 32}" height="40" rx="8" fill="${i === 3 ? ACCENT_LIGHT : "#fff"}" stroke="${i === 3 ? ACCENT : BORDER}"/>
      <text x="${x + 28}" y="${166 + i * 52}" font-family="system-ui,sans-serif" font-size="13" fill="#0F172A">${escapeXml(label)}</text>
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
      <text x="${310 + i * 210}" y="200" font-size="12" fill="${SLATE}" font-family="system-ui,sans-serif">${escapeXml(label)}</text>
      <text x="${310 + i * 210}" y="232" font-size="26" font-weight="700" fill="${color}" font-family="system-ui,sans-serif">${escapeXml(val)}</text>
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
      <text x="136" y="${208 + i * 82}" font-size="15" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">${escapeXml(title)}</text>
      <text x="136" y="${230 + i * 82}" font-size="12" fill="${SLATE}" font-family="system-ui,sans-serif">${escapeXml(sub)}</text>
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
      <text x="116" y="${218 + i * 56}" font-size="13" fill="#0F172A" font-family="system-ui,sans-serif">${escapeXml(row)}</text>
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
      <text x="180" y="${168 + i * 108}" font-size="18" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">${escapeXml(title)}</text>
      <text x="180" y="${194 + i * 108}" font-size="13" fill="${SLATE}" font-family="system-ui,sans-serif">${escapeXml(sub)}</text>
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
      <text x="120" y="${284 + i * 88}" font-size="15" fill="#F8FAFC" font-family="system-ui,sans-serif">${escapeXml(item)}</text>
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
      <text x="${cx}" y="${cy + 6}" text-anchor="middle" font-size="13" fill="#0F172A" font-family="system-ui,sans-serif">${escapeXml(label)}</text>
      <path d="M600 380 L${cx} ${cy}" stroke="${ACCENT}" stroke-width="2" opacity="0.4"/>
    `,
      )
      .join("")}
  `,
  ),
};

const CREAM = "#FAF8F4";

function collage(title, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 640" role="img">
  <title>${escapeXml(title)}</title>
  <defs>
    <filter id="sh" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#0f172a" flood-opacity="0.14"/>
    </filter>
  </defs>
  <rect width="880" height="640" fill="${CREAM}"/>
  ${body}
</svg>`;
}

function card(x, y, w, h, inner) {
  return `<g filter="url(#sh)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#fff" stroke="#E2E8F0" stroke-width="1"/>
  ${inner}</g>`;
}

function btn(x, y, label, fill = ACCENT) {
  return `<rect x="${x}" y="${y}" width="${label.length * 7 + 24}" height="28" rx="8" fill="${fill}"/>
  <text x="${x + 12}" y="${y + 19}" font-size="11" font-weight="600" fill="#fff" font-family="system-ui,sans-serif">${escapeXml(label)}</text>`;
}

const COLLAGES = {
  "collage-choose-payroll": collage(
    "Choosing payroll software UI",
    `
    ${card(
      40,
      50,
      380,
      200,
      `
      <text x="58" y="82" font-size="13" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Salary revisions</text>
      <rect x="58" y="95" width="340" height="22" rx="4" fill="#F1F5F9"/>
      <text x="66" y="110" font-size="9" fill="${SLATE}" font-family="system-ui,sans-serif">Name · Date · Status · Amount</text>
      <rect x="58" y="125" width="340" height="28" rx="6" fill="#F8FAFC"/>
      <text x="66" y="144" font-size="10" fill="#0F172A" font-family="system-ui,sans-serif">Pending approval</text>
      ${btn(300, 132, "Approve")}
      <rect x="58" y="160" width="340" height="28" rx="6" fill="#F8FAFC"/>
      <text x="66" y="179" font-size="10" fill="#0F172A" font-family="system-ui,sans-serif">Structure update</text>
      ${btn(280, 167, "Review")}
    `,
    )}
    ${card(
      450,
      30,
      200,
      120,
      `
      <text x="468" y="58" font-size="12" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Compliance</text>
      ${["EOBI", "Income tax", "Social security"]
        .map(
          (l, i) => `
        <circle cx="478" cy="${78 + i * 22}" r="6" fill="#10B981"/>
        <path d="M475 ${78 + i * 22} L477 ${80 + i * 22} L481 ${76 + i * 22}" stroke="#fff" stroke-width="1.5" fill="none"/>
        <text x="492" y="${82 + i * 22}" font-size="10" fill="#0F172A" font-family="system-ui,sans-serif">${l}</text>
      `,
        )
        .join("")}
    `,
    )}
    ${card(
      430,
      170,
      400,
      150,
      `
      <text x="448" y="198" font-size="12" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Tax deduction summary</text>
      ${[0, 1, 2, 3, 4].map(
        (i) => `
        <rect x="${448 + i * 68}" y="210" width="56" height="52" rx="8" fill="${ACCENT_LIGHT}"/>
        <text x="${456 + i * 68}" y="232" font-size="8" fill="${SLATE}" font-family="system-ui,sans-serif">Month</text>
        <text x="${456 + i * 68}" y="248" font-size="10" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">PKR</text>
      `,
      ).join("")}
      <rect x="448" y="275" width="360" height="32" rx="8" fill="#F1F5F9"/>
      <text x="460" y="295" font-size="10" fill="#0F172A" font-family="system-ui,sans-serif">Total income tax payable</text>
    `,
    )}
    ${card(
      60,
      280,
      160,
      100,
      `
      <text x="78" y="308" font-size="11" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Payslip</text>
      ${btn(78, 320, "Download")}
      <text x="78" y="360" font-size="10" fill="${SLATE}" font-family="system-ui,sans-serif">ESS portal</text>
    `,
    )}
    ${card(
      250,
      320,
      280,
      200,
      `
      <text x="268" y="348" font-size="12" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Payroll register</text>
      ${[0, 1, 2, 3].map(
        (r) => `
        <rect x="268" y="${360 + r * 34}" width="240" height="26" rx="6" fill="${r % 2 ? "#F8FAFC" : "#fff"}"/>
        <text x="278" y="${378 + r * 34}" font-size="9" fill="#0F172A" font-family="system-ui,sans-serif">Employee · Days · Net pay</text>
      `,
      ).join("")}
    `,
    )}
    ${card(
      560,
      340,
      260,
      120,
      `
      <text x="578" y="372" font-size="12" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Attendance</text>
      ${btn(578, 388, "Clock-In")}
      <text x="578" y="430" font-size="9" fill="${SLATE}" font-family="system-ui,sans-serif">Biometric sync</text>
    `,
    )}
  `,
  ),
  "collage-choose-cloud": collage(
    "Cloud HR dashboard",
    `
    ${card(
      80,
      40,
      720,
      340,
      `
      <rect x="98" y="58" width="120" height="24" rx="6" fill="${ACCENT_LIGHT}"/>
      <text x="108" y="74" font-size="11" font-weight="700" fill="${ACCENT}" font-family="system-ui,sans-serif">CodeVente HR</text>
      <rect x="98" y="92" width="140" height="260" rx="10" fill="#F8FAFC"/>
      ${["Dashboard", "Employees", "Attendance", "Payroll"].map(
        (l, i) => `
        <rect x="108" y="${108 + i * 44}" width="120" height="32" rx="6" fill="${i === 0 ? ACCENT_LIGHT : "#fff"}"/>
        <text x="118" y="${128 + i * 44}" font-size="10" fill="#0F172A" font-family="system-ui,sans-serif">${l}</text>
      `,
      ).join("")}
      ${[
        ["Total staff", "248"],
        ["On leave", "12"],
        ["Open jobs", "7"],
      ]
        .map(
          ([l, v], i) => `
        <rect x="${260 + i * 170}" y="100" width="150" height="70" rx="10" fill="#fff" stroke="#E2E8F0"/>
        <text x="272" y="${122 + i * 0}" font-size="9" fill="${SLATE}" font-family="system-ui,sans-serif">${l}</text>
        <text x="272" y="${145 + i * 0}" font-size="20" font-weight="700" fill="${ACCENT}" font-family="system-ui,sans-serif">${v}</text>
      `,
        )
        .join("")}
      <rect x="260" y="185" width="520" height="150" rx="10" fill="#F8FAFC"/>
      ${[40, 70, 55, 90, 65, 80].map(
        (h, i) => `
        <rect x="${280 + i * 72}" y="${320 - h}" width="36" height="${h}" rx="4" fill="${ACCENT}" opacity="0.7"/>
      `,
      ).join("")}
    `,
    )}
    ${card(120, 400, 200, 110, `<text x="138" y="430" font-size="11" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Attendance</text>${btn(138, 448, "Clock-In")}`)}
    ${card(360, 380, 200, 130, `<text x="378" y="410" font-size="11" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Payslip</text>${btn(378, 428, "Download")}<circle cx="530" cy="450" r="10" fill="#10B981"/><text x="378" y="480" font-size="9" fill="${SLATE}" font-family="system-ui,sans-serif">Manager approved</text>`)}
    ${card(600, 410, 200, 100, `<text x="618" y="440" font-size="11" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Documents</text>${btn(618, 458, "Download")}`)}
  `,
  ),
  "collage-key-features": collage(
    "Leave and payroll features",
    `
    ${card(
      40,
      80,
      220,
      420,
      `
      <rect x="70" y="100" width="160" height="320" rx="24" fill="#0F172A"/>
      <rect x="82" y="120" width="136" height="40" rx="8" fill="#1E293B"/>
      <text x="94" y="146" font-size="11" font-weight="600" fill="#fff" font-family="system-ui,sans-serif">Leave application</text>
      ${[0, 1, 2, 3].map(
        (i) => `
        <rect x="82" y="${175 + i * 58}" width="136" height="48" rx="8" fill="#1E293B"/>
        <text x="92" y="${202 + i * 58}" font-size="9" fill="#E2E8F0" font-family="system-ui,sans-serif">Request · Pending</text>
      `,
      ).join("")}
    `,
    )}
    ${card(
      290,
      50,
      550,
      100,
      `
      <text x="308" y="78" font-size="11" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Allocated leaves</text>
      <rect x="308" y="88" width="510" height="24" rx="4" fill="${ACCENT}"/>
      <text x="318" y="104" font-size="8" fill="#fff" font-family="system-ui,sans-serif">Type · Allocated · Used · Available</text>
    `,
    )}
    ${card(
      320,
      170,
      240,
      140,
      `
      <text x="338" y="198" font-size="11" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Leave requests</text>
      <circle cx="520" cy="210" r="14" fill="#FEE2E2"/>
      <text x="515" y="214" font-size="9" fill="#DC2626" font-family="system-ui,sans-serif">3</text>
      <rect x="338" y="215" width="200" height="12" rx="4" fill="#E2E8F0"/>
      <rect x="338" y="235" width="160" height="12" rx="4" fill="#E2E8F0"/>
    `,
    )}
    ${card(
      300,
      330,
      520,
      180,
      `
      <text x="318" y="358" font-size="11" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Time off — admin view</text>
      <rect x="318" y="370" width="480" height="28" rx="6" fill="${ACCENT_LIGHT}"/>
      <text x="328" y="388" font-size="9" fill="#0F172A" font-family="system-ui,sans-serif">Employee · Dates · Status</text>
      ${btn(680, 410, "Approve")}
      ${btn(680, 448, "Approve")}
    `,
    )}
  `,
  ),
  "collage-features-ess": collage(
    "Review payment and ESS",
    `
    ${card(
      60,
      80,
      420,
      460,
      `
      <text x="78" y="110" font-size="14" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Review payment</text>
      <rect x="78" y="125" width="380" height="44" rx="8" fill="${ACCENT}"/>
      <text x="92" y="152" font-size="10" fill="#fff" font-family="system-ui,sans-serif">ERPNext payroll · Bank disbursement ready</text>
      ${[
        ["Payment method", "Bank transfer"],
        ["Selected employees", "186"],
        ["Total amount", "PKR —"],
        ["Fund date", "28 Feb 2026"],
      ]
        .map(
          ([k, v], i) => `
        <text x="88" y="${195 + i * 36}" font-size="10" fill="${SLATE}" font-family="system-ui,sans-serif">${escapeXml(k)}</text>
        <text x="280" y="${195 + i * 36}" font-size="10" font-weight="600" fill="#0F172A" font-family="system-ui,sans-serif">${escapeXml(v)}</text>
      `,
        )
        .join("")}
      ${btn(320, 480, "Submit payment")}
    `,
    )}
    <circle cx="580" cy="200" r="48" fill="${ACCENT_LIGHT}" stroke="${ACCENT}" stroke-width="2"/>
    <text x="580" y="206" text-anchor="middle" font-size="32" fill="${ACCENT}" font-family="system-ui,sans-serif">⚖</text>
  `,
  ),
  "collage-benefits": collage(
    "Attendance and payroll benefits",
    `
    ${card(
      40,
      60,
      400,
      220,
      `
      <text x="58" y="88" font-size="12" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">ATTENDANCE</text>
      <text x="58" y="108" font-size="10" fill="${ACCENT}" font-family="system-ui,sans-serif">Time and pay adjustments</text>
      <rect x="58" y="118" width="360" height="24" rx="4" fill="${ACCENT}"/>
      <text x="66" y="134" font-size="8" fill="#fff" font-family="system-ui,sans-serif">Name · Date · Type · Action</text>
      ${[0, 1, 2].map(
        (r) => `
        <rect x="58" y="${150 + r * 32}" width="360" height="26" rx="4" fill="#F8FAFC"/>
        ${btn(350, 154 + r * 32, "To payroll")}
      `,
      ).join("")}
    `,
    )}
    ${card(
      80,
      300,
      480,
      200,
      `
      <text x="98" y="328" font-size="10" fill="${SLATE}" font-family="system-ui,sans-serif">ADMIN VIEW</text>
      <text x="98" y="348" font-size="12" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Daily report</text>
      <rect x="98" y="358" width="440" height="22" rx="4" fill="${ACCENT}"/>
      <text x="106" y="373" font-size="8" fill="#fff" font-family="system-ui,sans-serif">Employee · Check-in · Check-out · Hours</text>
      ${[0, 1, 2, 3].map(
        (r) => `
        <rect x="98" y="${388 + r * 22}" width="440" height="18" rx="3" fill="${r % 2 ? "#F8FAFC" : "#fff"}"/>
      `,
      ).join("")}
    `,
    )}
    ${card(520, 120, 300, 140, `<text x="538" y="150" font-size="12" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">Attendance</text><text x="538" y="175" font-size="20" font-weight="700" fill="#0F172A" font-family="system-ui,sans-serif">9:30 AM</text>${btn(538, 195, "Clock-In")}`)}
    <circle cx="600" cy="520" r="36" fill="${ACCENT_LIGHT}"/>
    <text x="600" y="528" text-anchor="middle" font-size="24" fill="${ACCENT}" font-family="system-ui,sans-serif">👆</text>
  `,
  ),
};

mkdirSync(OUT_DIR, { recursive: true });
const all = { ...ILLUSTRATIONS, ...COLLAGES };
for (const [name, svg] of Object.entries(all)) {
  writeFileSync(join(OUT_DIR, `${name}.svg`), svg.trim());
}
console.log(`HR illustrations written to ${OUT_DIR} (${Object.keys(all).length} files)`);
