import { COMPANY_INFO, TESTIMONIALS } from "./constants";
import { absoluteUrl, SITE_URL } from "./seo";

/** Primary keyword clusters for ERPNext SEO */
export const ERP_KEYWORDS = [
  "ERPNext implementation",
  "ERPNext customization",
  "ERPNext consultant Pakistan",
  "ERPNext developer Karachi",
  "ERPNext deployment services",
  "ERPNext implementation company",
  "ERPNext setup Pakistan",
  "Frappe ERPNext partner",
  "ERP software development Pakistan",
  "ERPNext cloud hosting",
  "ERPNext modules setup",
  "ERPNext data migration",
  "ERPNext training",
  "ERP implementation services",
  "custom ERP development",
  "ERPNext accounting module",
  "ERPNext inventory management",
  "ERPNext manufacturing",
  "ERPNext HR module",
  "ERPNext for small business Pakistan",
  "ERPNext for startups",
  "ERPNext remote implementation",
].join(", ");

export const ERP_PAGE_TITLE =
  "ERPNext Implementation Partner in Pakistan | CodeVente";

export const ERP_PAGE_DESCRIPTION =
  "CodeVente is an ERPNext implementation partner in Pakistan. Consulting, customization, integration, data migration, cloud or on-premise deployment, training, and post go-live support. Free requirements audit.";

export const ERP_OG_TITLE =
  "ERPNext Implementation Partner in Pakistan — CodeVente";

export const ERP_CANONICAL_PATH = "/erpnext-implementation";

export const ERP_EXTENDED_FAQS = [
  {
    question: "What is ERPNext and why should my business use it?",
    answer:
      "ERPNext is an open-source enterprise resource planning (ERP) platform built on the Frappe framework. It covers accounting, inventory, sales, purchasing, HR, manufacturing, CRM, and projects in one system. Businesses choose ERPNext because it is cost-effective, highly customizable, and avoids expensive per-user licensing fees common with legacy ERP vendors.",
  },
  {
    question: "How much does ERPNext implementation cost in Pakistan?",
    answer:
      "ERPNext implementation cost depends on modules, customization depth, data migration complexity, and user count. Basic setups with standard modules typically start from PKR 150,000–300,000. Full custom implementations with manufacturing workflows, integrations, and migration can range PKR 500,000–2,000,000+. CodeVente provides a free requirements audit and fixed-price quote before any work begins.",
  },
  {
    question: "How long does ERPNext implementation take?",
    answer:
      "A standard ERPNext deployment with core modules (accounting, inventory, sales) takes 4–8 weeks. Implementations with custom DocTypes, complex manufacturing workflows, or large data migrations typically take 8–16 weeks. We work in phased go-lives so critical modules launch first while others are configured in parallel.",
  },
  {
    question: "Do you provide ERPNext implementation services in Karachi and across Pakistan?",
    answer:
      "Yes. CodeVente is based in Karachi, Pakistan, and serves clients nationwide — Lahore, Islamabad, Rawalpindi, Faisalabad, and remote teams globally. We offer on-site discovery workshops in major cities and fully remote implementation for distributed teams.",
  },
  {
    question: "Can you customize ERPNext to match our existing business workflows?",
    answer:
      "Absolutely. We build custom DocTypes, fields, workflows, approval chains, print formats, dashboards, and reports tailored to how your team operates — not force you into generic templates. Customizations are built on the Frappe framework using Python and JavaScript, fully upgrade-safe when done correctly.",
  },
  {
    question: "Which ERPNext modules does CodeVente implement?",
    answer:
      "We implement and configure Accounting, Inventory, Sales, Purchasing, CRM, HR & Payroll, Manufacturing, Projects, Assets, Quality Management, and Website/eCommerce modules. Module selection is based on your requirements audit — you only pay for what you need.",
  },
  {
    question: "Can you migrate data from Excel, QuickBooks, or our old ERP?",
    answer:
      "Yes. We handle data migration from Excel spreadsheets, QuickBooks, Tally, SAP B1, legacy databases, and other ERP systems. Every migration includes data validation, reconciliation reports, and a parallel run period before cutover to ensure accuracy.",
  },
  {
    question: "Do you host ERPNext or deploy on our own servers?",
    answer:
      "Both options are available. We offer managed cloud hosting on AWS or dedicated VPS with backups, SSL, monitoring, and updates included. Alternatively, we deploy on your infrastructure with full documentation and handover for your IT team to manage.",
  },
  {
    question: "Do you provide ERPNext training after go-live?",
    answer:
      "Yes. Every implementation includes role-based training sessions for administrators, accountants, warehouse staff, and managers. We provide video recordings, user guides, and 30 days of post-launch support to ensure your team is confident on day one.",
  },
  {
    question: "Can ERPNext integrate with our website, payment gateway, or other software?",
    answer:
      "Yes. We integrate ERPNext with e-commerce platforms, payment gateways (JazzCash, EasyPaisa, Stripe), shipping providers, biometric attendance systems, and custom APIs. ERPNext's REST API and webhook support make third-party integrations straightforward.",
  },
  {
    question: "Is ERPNext suitable for small businesses and startups?",
    answer:
      "ERPNext is ideal for SMEs and growing startups that have outgrown spreadsheets but cannot afford SAP or Oracle. You can start with core modules and scale as you grow — adding manufacturing, multi-company, or advanced workflows without switching platforms.",
  },
  {
    question: "Why choose CodeVente as your ERPNext implementation partner?",
    answer:
      "CodeVente combines ERPNext expertise with full-stack software development and AI capabilities. We have recently deployed production ERPNext systems for clients, understand both technical customization and business process design, and provide ongoing support — not just a one-time setup.",
  },
  {
    question: "Can ERPNext handle Pakistani tax, FBR, and multi-company setups?",
    answer:
      "Yes. We configure sales tax, withholding, chart of accounts, and print formats for Pakistani operations, including multi-company and multi-warehouse setups for groups that trade from Karachi, Lahore, Islamabad, or overseas.",
  },
  {
    question: "Do you offer post go-live ERPNext support?",
    answer:
      "Yes. Implementation includes go-live hypercare, then optional retainers for updates, new reports, user support, and performance monitoring so the system stays stable after launch.",
  },
];

export const ERP_MODULES = [
  { name: "Accounting & Finance", desc: "General ledger, invoicing, payments, tax compliance, multi-currency, bank reconciliation." },
  { name: "Inventory & Warehouse", desc: "Stock tracking, batch/serial numbers, reorder levels, warehouse transfers, barcode scanning." },
  { name: "Sales & CRM", desc: "Quotations, sales orders, customer portal, pipeline management, email campaigns." },
  { name: "Purchasing", desc: "Supplier management, purchase orders, RFQs, landed cost tracking, supplier scorecards." },
  { name: "Manufacturing", desc: "BOMs, work orders, production planning, job cards, subcontracting, capacity planning." },
  { name: "HR & Payroll", desc: "Employee records, attendance, leave management, payroll processing, expense claims." },
];

export function erpServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ERPNext Implementation & Customization",
    description: ERP_PAGE_DESCRIPTION,
    url: absoluteUrl(ERP_CANONICAL_PATH),
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMPANY_INFO.address.city,
        addressRegion: COMPANY_INFO.address.state,
        addressCountry: COMPANY_INFO.address.country,
      },
    },
    serviceType: "ERPNext Implementation",
    category: "Enterprise Resource Planning",
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Place", name: "Worldwide" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
      servicePhone: COMPANY_INFO.phone,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "PKR",
      price: "0",
      description: "Free ERPNext requirements audit and consultation",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/contact"),
    },
  };
}

export function erpFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ERP_EXTENDED_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function erpBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
      {
        "@type": "ListItem",
        position: 3,
        name: "ERPNext Implementation",
        item: absoluteUrl(ERP_CANONICAL_PATH),
      },
    ],
  };
}

export function erpWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: ERP_PAGE_TITLE,
    description: ERP_PAGE_DESCRIPTION,
    url: absoluteUrl(ERP_CANONICAL_PATH),
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: COMPANY_INFO.name, url: SITE_URL },
    about: {
      "@type": "Thing",
      name: "ERPNext",
      description: "Open-source ERP platform for business management",
    },
    primaryImageOfPage: `${SITE_URL}/og-image.png`,
  };
}

export function erpProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY_INFO.name,
    description: "ERPNext implementation, customization, and deployment services in Pakistan",
    url: absoluteUrl(ERP_CANONICAL_PATH),
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    priceRange: "$$",
    image: `${SITE_URL}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.zip,
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.8607,
      longitude: 67.0011,
    },
    areaServed: [
      { "@type": "City", name: "Karachi" },
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Islamabad" },
      { "@type": "Country", name: "Pakistan" },
    ],
    knowsAbout: [
      "ERPNext",
      "Frappe Framework",
      "ERP Implementation",
      "Business Process Automation",
      "Inventory Management",
      "Accounting Software",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ERPNext Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERPNext Implementation",
            description: "Full ERPNext deployment with module configuration and go-live support",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERPNext Customization",
            description: "Custom DocTypes, workflows, reports, and integrations on Frappe",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERPNext Cloud Hosting",
            description: "Managed ERPNext hosting with backups, SSL, and monitoring",
          },
        },
      ],
    },
  };
}

export function erpReviewJsonLd() {
  const ratings = TESTIMONIALS.map((t) => t.rating);
  const avg =
    ratings.reduce((sum, rating) => sum + rating, 0) / Math.max(ratings.length, 1);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ERPNext Implementation & Customization",
    url: absoluteUrl(ERP_CANONICAL_PATH),
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avg.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      ratingCount: String(TESTIMONIALS.length),
      reviewCount: String(TESTIMONIALS.length),
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.author },
      reviewBody: t.content,
      reviewRating: {
        "@type": "ReviewRating",
        ratingValue: String(t.rating),
        bestRating: "5",
      },
    })),
  };
}

export function erpAllJsonLd() {
  return [
    erpWebPageJsonLd(),
    erpServiceJsonLd(),
    erpFaqJsonLd(),
    erpBreadcrumbJsonLd(),
    erpProfessionalServiceJsonLd(),
    erpReviewJsonLd(),
  ];
}
