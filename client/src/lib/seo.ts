import { COMPANY_INFO } from "./constants";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://codevente.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const PUBLIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/portfolio", priority: "0.8", changefreq: "monthly" },
  { path: "/courses", priority: "0.8", changefreq: "weekly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/careers", priority: "0.7", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
] as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, "")}${normalized}`;
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
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_INFO.name,
    url: SITE_URL,
    description: COMPANY_INFO.tagline,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
