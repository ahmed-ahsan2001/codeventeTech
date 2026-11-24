import webDevelopment from "@/assets/services/web-development.jpg";
import aiSolutions from "@/assets/services/ai-solutions.jpg";
import erpImplementation from "@/assets/services/erp-implementation.jpg";
import hrSoftware from "@/assets/services/hr-software.jpg";
import uiUx from "@/assets/services/ui-ux.jpg";
import digitalMarketing from "@/assets/services/digital-marketing.jpg";
import seo from "@/assets/services/seo.jpg";
import mobileAppDevelopment from "@/assets/services/mobile-app-development.jpg";
import reactDevelopment from "@/assets/services/react-development.jpg";
import shopifyDevelopment from "@/assets/services/shopify-development.jpg";

export interface ServiceMetric {
  label: string;
  value: string;
  /** e.g. "+24%" — shown in accent when present */
  delta?: string;
}

export interface ServiceVisualConfig {
  src: string;
  alt: string;
  metrics: ServiceMetric[];
  /** Short headline on the analytics strip */
  kpiHeadline?: string;
}

/** Curated visuals + outcome metrics per service */
export const SERVICE_VISUALS: Record<string, ServiceVisualConfig> = {
  "web-development": {
    src: webDevelopment,
    alt: "Developer building a modern web application on laptop",
    kpiHeadline: "Launch velocity",
    metrics: [
      { label: "Projects shipped", value: "50+", delta: "+12 YTD" },
      { label: "Avg. perf. gain", value: "2.4×", delta: "Core Web Vitals" },
      { label: "Time to MVP", value: "4–8 wks", delta: "Typical range" },
    ],
  },
  "ai-solutions": {
    src: aiSolutions,
    alt: "Abstract AI and machine learning visualization",
    kpiHeadline: "Automation impact",
    metrics: [
      { label: "Manual work cut", value: "40–60%", delta: "Workflow AI" },
      { label: "LLM integrations", value: "Production", delta: "Guardrailed" },
      { label: "POC to prod.", value: "1–2 wks", delta: "RAG & agents" },
    ],
  },
  "erp-implementation": {
    src: erpImplementation,
    alt: "Business analytics dashboard for ERP operations",
    kpiHeadline: "ERPNext ops",
    metrics: [
      { label: "Modules live", value: "8+", delta: "Finance → Mfg" },
      { label: "Go-live window", value: "4–16 wks", delta: "Phased" },
      { label: "Data accuracy", value: "99%+", delta: "Post-migration" },
    ],
  },
  "hr-software": {
    src: hrSoftware,
    alt: "Team collaborating on HR and workforce management",
    kpiHeadline: "People ops",
    metrics: [
      { label: "Payroll cycles", value: "Automated", delta: "PK-compliant" },
      { label: "Attendance sync", value: "Real-time", delta: "Biometric" },
      { label: "ESS adoption", value: "85%+", delta: "After training" },
    ],
  },
  "ui-ux": {
    src: uiUx,
    alt: "UI UX design workspace with wireframes and prototypes",
    kpiHeadline: "Product UX",
    metrics: [
      { label: "Conversion lift", value: "+35%", delta: "Avg. client" },
      { label: "Research sprints", value: "1–2 wks", delta: "Tested flows" },
      { label: "Design system", value: "Scalable", delta: "Web + mobile" },
    ],
  },
  "digital-marketing": {
    src: digitalMarketing,
    alt: "Digital marketing analytics and campaign performance",
    kpiHeadline: "Campaign ROI",
    metrics: [
      { label: "Brand reach", value: "+180%", delta: "Campaign avg." },
      { label: "Cost per lead", value: "−32%", delta: "Optimized ads" },
      { label: "ROAS target", value: "3.5×+", delta: "E-commerce" },
    ],
  },
  seo: {
    src: seo,
    alt: "SEO strategy and search ranking growth",
    kpiHeadline: "Organic growth",
    metrics: [
      { label: "Organic traffic", value: "+220%", delta: "12-mo programs" },
      { label: "Keywords top 10", value: "45+", delta: "Per audit" },
      { label: "Technical score", value: "90+", delta: "Lighthouse SEO" },
    ],
  },
  "mobile-app-development": {
    src: mobileAppDevelopment,
    alt: "Mobile app on smartphone in a development context",
    kpiHeadline: "Mobile delivery",
    metrics: [
      { label: "Platforms", value: "iOS + Android", delta: "One codebase" },
      { label: "MVP timeline", value: "6–10 wks", delta: "React Native" },
      { label: "Store ready", value: "100%", delta: "Review support" },
    ],
  },
  "react-development": {
    src: reactDevelopment,
    alt: "React frontend development on a code editor",
    kpiHeadline: "Frontend perf.",
    metrics: [
      { label: "LCP target", value: "<2.5s", delta: "Production" },
      { label: "Type coverage", value: "Strict TS", delta: "Maintainable" },
      { label: "Bundle size", value: "−30%", delta: "vs. legacy" },
    ],
  },
  "shopify-development": {
    src: shopifyDevelopment,
    alt: "E-commerce retail store suitable for Shopify development",
    kpiHeadline: "Store conversion",
    metrics: [
      { label: "Checkout", value: "PKR native", delta: "Local gateways" },
      { label: "Collections", value: "Filtered", delta: "High conv. UX" },
      { label: "Go-live", value: "4–6 wks", delta: "OS 2.0" },
    ],
  },
};

export function getServiceVisual(serviceId: string): ServiceVisualConfig | undefined {
  return SERVICE_VISUALS[serviceId];
}

/** @deprecated use getServiceVisual */
export function getServiceImage(serviceId: string): ServiceVisualConfig | undefined {
  return getServiceVisual(serviceId);
}