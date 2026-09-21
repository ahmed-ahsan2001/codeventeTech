import { COMPANY_INFO } from "./constants";
import { absoluteUrl, breadcrumbJsonLd, SITE_URL, webPageJsonLd } from "./seo";
import { buildServiceJsonLd, type ServiceMeta } from "./service-seo";

export const HR_KEYWORDS = [
  "HR software Pakistan",
  "HR software Karachi",
  "HR management system Pakistan",
  "HRMS implementation",
  "ERPNext HR module",
  "payroll software Pakistan",
  "attendance management system",
  "leave management software",
  "employee self service portal",
  "biometric attendance integration",
  "HR software for SMEs",
  "custom HR software development",
  "Frappe HR",
  "HR and payroll ERPNext",
].join(", ");

export const HR_PAGE_TITLE =
  "HR Software & ERPNext HR Module Implementation | Pakistan | CodeVente";

export const HR_PAGE_DESCRIPTION =
  "HR software implementation in Pakistan — attendance, leave, payroll, employee records, and biometric integrations on ERPNext or custom HRMS. Setup, training, and support from CodeVente.";

export const HR_OG_TITLE = "HR Software Implementation in Pakistan — CodeVente";

export const HR_CANONICAL_PATH = "/hr-software";

export const HR_FAQS = [
  {
    question: "What HR software does CodeVente implement?",
    answer:
      "We primarily implement the ERPNext HR module — employee records, attendance, leave, payroll, expense claims, recruitment, and performance workflows. For teams that need a standalone HRMS, we also build custom web and mobile HR portals integrated with your existing systems.",
  },
  {
    question: "Can you integrate biometric attendance with HR software?",
    answer:
      "Yes. We connect ZKTeco and other biometric devices to ERPNext or custom HR systems via API imports, scheduled sync jobs, and shift rules so attendance feeds payroll and leave balances automatically.",
  },
  {
    question: "Is ERPNext HR suitable for Pakistani payroll and compliance?",
    answer:
      "ERPNext can be configured for Pakistani payroll structures, tax deductions, and company-specific policies. We map your salary components, approvals, and payslip formats with finance so HR and accounts stay aligned.",
  },
  {
    question: "How long does HR software setup take?",
    answer:
      "Core HR (employee data, leave, attendance) often goes live in 2–4 weeks. Payroll and biometric integrations add 2–4 weeks depending on testing with your finance team.",
  },
  {
    question: "Do you train HR and line managers after go-live?",
    answer:
      "Yes. Role-based training for HR admins, payroll staff, and managers — plus short guides for employees on leave requests and self-service where enabled.",
  },
];

export const HR_SERVICE_META: ServiceMeta = {
  id: "hr-software",
  title: "HR Software & Payroll Systems",
  seoTitle: HR_PAGE_TITLE,
  seoDescription: HR_PAGE_DESCRIPTION,
  keywords: HR_KEYWORDS,
  canonicalPath: HR_CANONICAL_PATH,
  intro:
    "CodeVente implements HR software for growing businesses in Pakistan — from ERPNext HR modules to custom employee portals with attendance, leave, payroll, and biometric integrations.",
  relatedServices: ["erp-implementation", "web-development", "mobile-app-development", "ai-solutions"],
  relatedCaseStudies: ["zakaria-masjid", "khadija-tul-kubra"],
};

export function hrAllJsonLd(): Record<string, unknown>[] {
  const page = webPageJsonLd({
    title: HR_PAGE_TITLE,
    description: HR_PAGE_DESCRIPTION,
    path: HR_CANONICAL_PATH,
  });
  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "HR Software", path: HR_CANONICAL_PATH },
  ]);
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HR_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const professional = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "HR Software Implementation — CodeVente",
    url: absoluteUrl(HR_CANONICAL_PATH),
    description: HR_PAGE_DESCRIPTION,
    areaServed: { "@type": "Country", name: "Pakistan" },
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
      email: COMPANY_INFO.email,
      telephone: COMPANY_INFO.phone,
    },
    serviceType: "Human Resources Software Implementation",
  };

  return [...buildServiceJsonLd("hr-software", HR_SERVICE_META), page, crumbs, faq, professional];
}
