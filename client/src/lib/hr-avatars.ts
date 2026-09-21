import ahmedBawany from "@/assets/ahmed-bawany.png";

/** Professional portrait URLs (Unsplash) — swap for client photos in /public/avatars when available. */
const portrait = (id: string) =>
  `https://images.unsplash.com/${id}?w=256&h=256&fit=crop&crop=face&auto=format&q=80`;

export const HR_PERSONAS = [
  {
    name: "HR & people operations",
    role: "Leave, attendance & employee records",
    detail: "Centralize contracts, departments, shifts, and approvals so managers stop chasing spreadsheets.",
    image: portrait("photo-1573496359142-b8d87734a5a2"),
  },
  {
    name: "Payroll & finance",
    role: "Salary structures & payslips",
    detail: "Salary components, deductions, and payslip workflows aligned with how your accounts team closes the month.",
    image: portrait("photo-1580489944761-15a19d654956"),
  },
  {
    name: "Operations & site teams",
    role: "Biometric & multi-branch attendance",
    detail: "Device sync, late rules, and branch-wise reporting for warehouses, retail, and field staff.",
    image: portrait("photo-1472099645785-5658abf4ff4e"),
  },
  {
    name: "Ahmed Bawany",
    role: "CodeVente — HR implementation lead",
    detail: "Maps your HR processes, configures ERPNext HR or custom portals, and trains your team through go-live.",
    image: ahmedBawany,
  },
] as const;

export const TESTIMONIAL_AVATAR_URLS = {
  abid: portrait("photo-1560250097-0b93528c311a"),
  akImpression: portrait("photo-1573497019940-1c28c88b4f3e"),
} as const;
