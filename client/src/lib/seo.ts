import { COMPANY_INFO, SERVICES } from "./constants";
import { BLOG_POSTS } from "./blog";
import { PORTFOLIO_PROJECTS } from "./portfolio";
import { getAllServiceSlugs, getServicePath } from "./service-seo";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://codevente.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const STATIC_PAGES = [
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
] as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, "")}${normalized}`;
}

export function getSitemapEntries() {
  const serviceEntries = getAllServiceSlugs()
    .filter((slug) => slug !== "erp-implementation")
    .map((slug) => ({
      path: getServicePath(slug),
      priority: ["mobile-app-development", "shopify-development", "react-development", "web-development"].includes(slug)
        ? "0.85"
        : "0.8",
      changefreq: "monthly" as const,
    }));

  const portfolioEntries = PORTFOLIO_PROJECTS.map((project) => ({
    path: `/portfolio/${project.slug}`,
    priority: "0.7",
    changefreq: "monthly" as const,
  }));

  const blogEntries = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: post.slug.includes("erpnext") ? "0.9" : "0.7",
    changefreq: "monthly" as const,
  }));

  return [...STATIC_PAGES, ...serviceEntries, ...portfolioEntries, ...blogEntries];
}

export function organizationJsonLd() {
  const { address, email, phone, name, tagline } = COMPANY_INFO;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description: tagline,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    email,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: address.country,
      streetAddress: address.street,
    },
    sameAs: Object.values(COMPANY_INFO.social).filter(Boolean),
    knowsAbout: [
      "ERPNext",
      "Frappe Framework",
      "AI Development",
      "Software Development",
      "Mobile App Development",
      "Shopify Development",
      "React Development",
      "ERP Implementation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CodeVente Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: service.id === "erp-implementation"
            ? absoluteUrl("/erpnext-implementation")
            : absoluteUrl(`/services/${service.id}`),
        },
      })),
    },
  };
}

export function localBusinessJsonLd() {
  const { address, email, phone, name } = COMPANY_INFO;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description: "Software development, ERPNext implementation, and AI solutions in Karachi, Pakistan",
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    telephone: phone,
    email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.8607,
      longitude: 67.0011,
    },
    areaServed: [
      { "@type": "City", name: "Karachi" },
      { "@type": "Country", name: "Pakistan" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "19:00",
    },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_INFO.name,
    url: SITE_URL,
    description: COMPANY_INFO.tagline,
    inLanguage: "en-PK",
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  image,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    author: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
      },
    },
    image: image || DEFAULT_OG_IMAGE,
    mainEntityOfPage: absoluteUrl(path),
  };
}

export function caseStudyJsonLd({
  title,
  description,
  path,
  technologies,
  client,
}: {
  title: string;
  description: string;
  path: string;
  technologies: string;
  client: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: absoluteUrl(path),
    creator: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    about: client,
    keywords: technologies,
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "en-PK",
    isPartOf: { "@type": "WebSite", name: COMPANY_INFO.name, url: SITE_URL },
  };
}
