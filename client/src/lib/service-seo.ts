import { COMPANY_INFO } from "./constants";
import { SERVICE_DETAILS } from "./content";
import { absoluteUrl, SITE_URL } from "./seo";

export interface ServiceMeta {
  id: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  canonicalPath: string;
  intro?: string;
  relatedServices: string[];
  relatedCaseStudies: string[];
}

export const SERVICE_META: Record<string, ServiceMeta> = {
  "web-development": {
    id: "web-development",
    title: "Web & App Development",
    seoTitle: "Web Development Company in Pakistan | CodeVente",
    seoDescription:
      "Full-stack web development in Pakistan — React, Next.js, Node.js, APIs, e-commerce, and SaaS platforms built for performance and scale.",
    keywords:
      "web development Pakistan, web development company Karachi, React development, Next.js development, full-stack development, custom web applications",
    canonicalPath: "/services/web-development",
    relatedServices: ["react-development", "mobile-app-development", "shopify-development", "ui-ux"],
    relatedCaseStudies: ["zakaria-masjid", "khadija-tul-kubra", "fiabila-shopify-store"],
  },
  "mobile-app-development": {
    id: "mobile-app-development",
    title: "Mobile App Development",
    seoTitle: "Mobile App Development in Pakistan | iOS & Android | CodeVente",
    seoDescription:
      "Cross-platform mobile app development in Pakistan with React Native — iOS and Android apps for startups and businesses, from MVP to production.",
    keywords:
      "mobile app development Pakistan, mobile app development Karachi, React Native development, iOS app development, Android app development",
    canonicalPath: "/services/mobile-app-development",
    relatedServices: ["web-development", "react-development", "ui-ux", "ai-solutions"],
    relatedCaseStudies: ["quran-app", "healthcare-mobile-app"],
  },
  "react-development": {
    id: "react-development",
    title: "React Development",
    seoTitle: "React Development Services in Pakistan | CodeVente",
    seoDescription:
      "Expert React and Next.js development in Pakistan — SPAs, dashboards, SaaS products, and performant frontends with TypeScript and modern tooling.",
    keywords:
      "React development Pakistan, React developer Karachi, Next.js development, TypeScript React, frontend development services",
    canonicalPath: "/services/react-development",
    relatedServices: ["web-development", "mobile-app-development", "ai-solutions", "ui-ux"],
    relatedCaseStudies: ["zakaria-masjid", "khadija-tul-kubra", "quran-app"],
  },
  "shopify-development": {
    id: "shopify-development",
    title: "Shopify Development",
    seoTitle: "Shopify Development in Pakistan | E-Commerce Stores | CodeVente",
    seoDescription:
      "Shopify store development in Pakistan — custom themes, Online Store 2.0, collections, checkout, and conversion-focused e-commerce for Pakistani brands.",
    keywords:
      "Shopify development Pakistan, Shopify developer Karachi, Shopify store setup, e-commerce development Pakistan, Shopify customization",
    canonicalPath: "/services/shopify-development",
    relatedServices: ["web-development", "ui-ux", "digital-marketing", "seo"],
    relatedCaseStudies: ["fiabila-shopify-store"],
  },
  "ai-solutions": {
    id: "ai-solutions",
    title: "AI Solutions & Integration",
    seoTitle: "AI Development & LLM Integration Services | CodeVente",
    seoDescription:
      "Custom AI features, LLM integrations, RAG pipelines, and intelligent automation for products — built for production, not demos.",
    keywords:
      "AI development Pakistan, LLM integration, OpenAI integration, AI agents, RAG pipeline development",
    canonicalPath: "/services/ai-solutions",
    relatedServices: ["web-development", "mobile-app-development", "erp-implementation"],
    relatedCaseStudies: ["quran-app"],
  },
  "erp-implementation": {
    id: "erp-implementation",
    title: "ERP Implementation & Customization",
    seoTitle: "ERPNext Implementation Partner in Pakistan | CodeVente",
    seoDescription:
      "ERPNext deployment, customization, data migration, and managed hosting for businesses in Pakistan — accounting, inventory, HR, and manufacturing.",
    keywords: "ERPNext implementation Pakistan, ERP customization Karachi, Frappe ERPNext partner",
    canonicalPath: "/erpnext-implementation",
    relatedServices: ["web-development", "ai-solutions"],
    relatedCaseStudies: [],
  },
  "ui-ux": {
    id: "ui-ux",
    title: "UI/UX Design",
    seoTitle: "UI/UX Design Services for Web & Mobile | CodeVente",
    seoDescription:
      "User-centered UI/UX design — research, wireframes, prototypes, and design systems that improve engagement and conversion.",
    keywords: "UI UX design Pakistan, product design services, mobile app design, web interface design",
    canonicalPath: "/services/ui-ux",
    relatedServices: ["web-development", "mobile-app-development", "shopify-development"],
    relatedCaseStudies: ["healthcare-mobile-app", "edtech-learning-platform"],
  },
  "digital-marketing": {
    id: "digital-marketing",
    title: "Digital Marketing",
    seoTitle: "Digital Marketing Services for Startups | CodeVente",
    seoDescription:
      "Data-driven digital marketing — social media, content, paid ads, and email campaigns that grow your brand and acquire customers.",
    keywords: "digital marketing Pakistan, social media marketing, PPC advertising, content marketing",
    canonicalPath: "/services/digital-marketing",
    relatedServices: ["seo", "shopify-development", "web-development"],
    relatedCaseStudies: ["retail-brand-campaign"],
  },
  seo: {
    id: "seo",
    title: "SEO Optimization",
    seoTitle: "SEO Services & Technical SEO Audits | CodeVente",
    seoDescription:
      "Technical SEO, keyword strategy, on-page optimization, and content that drives sustainable organic traffic and better search rankings.",
    keywords: "SEO services Pakistan, technical SEO audit, on-page SEO, local SEO Karachi",
    canonicalPath: "/services/seo",
    relatedServices: ["digital-marketing", "web-development", "shopify-development"],
    relatedCaseStudies: ["retail-brand-campaign"],
  },
};

export const SPECIALIZED_SERVICE_IDS = [
  "mobile-app-development",
  "shopify-development",
  "react-development",
] as const;

export function getServiceMeta(slug: string): ServiceMeta | undefined {
  return SERVICE_META[slug];
}

export function getServicePath(slug: string): string {
  if (slug === "erp-implementation") return "/erpnext-implementation";
  return `/services/${slug}`;
}

export function serviceBreadcrumbJsonLd(slug: string, serviceName: string) {
  const path = getServicePath(slug);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
      { "@type": "ListItem", position: 3, name: serviceName, item: absoluteUrl(path) },
    ],
  };
}

export function servicePageJsonLd(slug: string, meta: ServiceMeta) {
  const details = SERVICE_DETAILS[slug];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: meta.title,
    description: meta.seoDescription,
    url: absoluteUrl(meta.canonicalPath),
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "City", name: "Karachi" },
    ],
    serviceType: meta.title,
    ...(details?.technologies?.length
      ? { termsOfService: absoluteUrl("/terms-of-service") }
      : {}),
  };
}

export function serviceFaqJsonLd(slug: string) {
  const details = SERVICE_DETAILS[slug];
  if (!details?.faqs?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: details.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function buildServiceJsonLd(slug: string, meta: ServiceMeta): Record<string, unknown>[] {
  return [
    serviceBreadcrumbJsonLd(slug, meta.title),
    servicePageJsonLd(slug, meta),
    serviceFaqJsonLd(slug),
  ].filter((item): item is Record<string, unknown> => item !== null);
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICE_META);
}
