import whyChooseHrIllustration from "@/assets/hr/why-choose-hr.png";
import hrChoosePayrollIllustration from "@/assets/hr/hr-choose-payroll.png";
import hrKeyFeaturesIllustration from "@/assets/hr/hr-key-features.png";
import hrBenefitsIllustration from "@/assets/hr/hr-benefits.png";

/** Warm off-white band — matches Sowaan-style HR landing sections. */
export const HR_CREAM = "#FAF8F4";

/** Structured copy for /hr-software — organized like long-form product landing pages. */

export const HR_CHOOSE_CRITERIA = [
  {
    title: "Local labor laws & compliance",
    description:
      "Configure income tax, EOBI, social security, and company policies so payroll matches how Pakistani businesses actually file and pay.",
  },
  {
    title: "Automated payroll calculations",
    description:
      "Salary structures, overtime, bonuses, and deductions should run with clear rules — not fragile spreadsheets rebuilt every month.",
  },
  {
    title: "Simple for HR and employees",
    description:
      "Clean screens, role-based permissions, and self-service so teams adopt the system without constant IT intervention.",
  },
  {
    title: "Cloud access across branches",
    description:
      "One live system for HQ, warehouses, and retail — attendance and payroll stay in sync wherever staff work.",
  },
  {
    title: "Integrated HR modules",
    description:
      "When attendance, leave, and employee records connect to payroll, you cut double entry and reconciliation errors.",
  },
  {
    title: "Implementation partner in Pakistan",
    description:
      "Setup, data migration, training, and post go-live support from a team that understands local operations.",
  },
] as const;

export const HR_KEY_FEATURES = [
  {
    title: "Salary structuring & auto-calculation",
    description:
      "Define basic pay, allowances, bonuses, and deductions once. Payroll runs use those structures every cycle with an audit trail.",
  },
  {
    title: "Taxation & statutory alignment",
    description:
      "Map Pakistani tax and contribution rules to salary components. We align with your finance team on payslip layout and reports.",
  },
  {
    title: "Attendance & leave integration",
    description:
      "Connect biometric or RFID devices, import shifts, and route leave approvals so worked days feed payroll accurately.",
  },
  {
    title: "Payslip generation & distribution",
    description:
      "Generate itemized payslips each cycle and publish them securely through employee self-service portals.",
  },
  {
    title: "Multi-location & departmental payroll",
    description:
      "Run payroll for multiple branches and cost centers from one dashboard — with permissions per site or department.",
  },
  {
    title: "Employee self-service (ESS)",
    description:
      "Staff view payslips, apply for leave, check attendance, and update profile fields without queueing at HR.",
  },
] as const;

export const HR_PAYROLL_STEPS = [
  {
    step: "01",
    title: "Data input",
    description:
      "Attendance, leave balances, overtime, and expense claims flow in from HR modules, imports, or biometric sync jobs.",
  },
  {
    step: "02",
    title: "Salary calculation",
    description:
      "Pre-defined structures and deduction rules compute gross, statutory deductions, and net pay per employee.",
  },
  {
    step: "03",
    title: "Compliance checks",
    description:
      "Review totals with finance, validate component mapping, and sign off before payslips are released.",
  },
  {
    step: "04",
    title: "Payslip generation",
    description:
      "Itemized payslips are created and published to each employee’s portal with PDF download where needed.",
  },
  {
    step: "05",
    title: "Disbursement & reporting",
    description:
      "Export bank payment files, management summaries, and audit-ready registers for leadership and accountants.",
  },
] as const;

export const HR_BUSINESS_BENEFITS = [
  {
    title: "Less administrative workload",
    description:
      "Automate repetitive payroll tasks so HR can focus on hiring, culture, and policy — not re-keying attendance.",
  },
  {
    title: "Accurate, on-time payments",
    description:
      "Fewer manual errors and a repeatable monthly process so salaries go out on schedule every cycle.",
  },
  {
    title: "Stronger compliance posture",
    description:
      "Documented structures and reports make it easier to align with tax and labor obligations as rules evolve.",
  },
  {
    title: "Scales with headcount",
    description:
      "Whether you are at 25 employees or 2,500, the same ERPNext HR foundation grows with modular configuration.",
  },
] as const;

export const HR_WHY_INTRO =
  "When it comes to HRMS and payroll in Pakistan, CodeVente stands out for solving local operational challenges — not selling a generic install. We implement ERPNext HR and custom HRMS with discovery, training, and support so your team trusts the system after go-live.";

export const HR_WHY_CODEVENTE = [
  {
    title: "Localized expertise",
    description:
      "We understand Pakistani labor practices, payroll structures, and how finance and HR work together — so configuration matches your business culture and compliance needs.",
  },
  {
    title: "Fully integrated ERP platform",
    description:
      "HR and payroll sit alongside accounting, inventory, CRM, and operations on ERPNext when you need one ecosystem instead of disconnected tools.",
  },
  {
    title: "Cloud-based and secure",
    description:
      "Access HR from any branch with managed cloud hosting or your own servers — SSL, backups, and role-based permissions by default.",
  },
  {
    title: "Dedicated support in Pakistan",
    description:
      "Karachi-based delivery with on-site discovery in major cities and responsive help during implementation and after your first payroll cycles.",
  },
  {
    title: "Customizable and modular",
    description:
      "Start with employee master, attendance, and leave — add payroll, biometrics, and self-service as you grow without replacing the platform.",
  },
] as const;

/** Section illustrations (user-provided assets). */
export const HR_WHY_CHOOSE_IMAGE = whyChooseHrIllustration;
export const HR_CHOOSE_PAYROLL_IMAGE = hrChoosePayrollIllustration;
export const HR_KEY_FEATURES_IMAGE = hrKeyFeaturesIllustration;
export const HR_BENEFITS_IMAGE = hrBenefitsIllustration;

export const HR_CHOOSE_INTRO =
  "Picking the right payroll software in Pakistan affects employee trust and your finance close. Use this checklist when you compare HRMS options — then see how ERPNext HR fits your branches and compliance needs.";

export const HR_KEY_FEATURES_INTRO =
  "CodeVente configures ERPNext HR for Pakistani businesses — salary structures, statutory mapping, and attendance tied to payroll, not disconnected spreadsheets.";

export const HR_BENEFITS_INTRO =
  "Adopting HR software in Pakistan is not only about saving time — it is about a more efficient, compliant workplace your team can rely on every payday.";

export function hrIllustrationPath(name: string): string {
  return `/hr/${name}.svg`;
}
