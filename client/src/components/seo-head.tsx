import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalPath?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEOHead({
  title = "CodeVente — AI, Software & ERPNext Implementation Agency",
  description = "CodeVente builds AI-powered web apps, mobile apps, and custom ERPNext implementations for startups and businesses in Pakistan. ERPNext deployment, customization, data migration, and cloud hosting.",
  keywords = "ERPNext implementation Pakistan, ERPNext customization, ERPNext consultant Karachi, AI development, software development agency, mobile app development, ERP implementation services, Frappe ERPNext partner",
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  canonicalPath,
  noindex = false,
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (
      name: string,
      content: string,
      attribute: "name" | "property" = "name",
    ) => {
      let meta =
        document.querySelector(`meta[${attribute}="${name}"]`) ||
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");

    updateMetaTag("og:title", ogTitle || title, "property");
    updateMetaTag("og:description", ogDescription || description, "property");
    updateMetaTag("og:image", ogImage, "property");
    updateMetaTag("geo.region", "PK-SD");
    updateMetaTag("geo.placename", "Karachi, Pakistan");
    updateMetaTag("geo.position", "24.8607;67.0011");
    updateMetaTag("ICBM", "24.8607, 67.0011");

    updateMetaTag("og:type", "website", "property");
    updateMetaTag("og:locale", "en_PK", "property");
    updateMetaTag("og:site_name", "CodeVente", "property");
    updateMetaTag("og:url", absoluteUrl(canonicalPath || window.location.pathname), "property");

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", ogTitle || title);
    updateMetaTag("twitter:description", ogDescription || description);
    updateMetaTag("twitter:image", ogImage);

    const canonical = absoluteUrl(canonicalPath || window.location.pathname);
    updateLinkTag("canonical", canonical);

    const existingJsonLd = document.getElementById("page-json-ld");
    if (existingJsonLd) existingJsonLd.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "page-json-ld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    canonicalPath,
    noindex,
    jsonLd ? JSON.stringify(jsonLd) : null,
  ]);

  return null;
}
