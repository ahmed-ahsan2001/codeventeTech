import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = "CodeVente - Empowering Innovation, Delivering Digital Solutions",
  description = "CodeVente delivers cutting-edge web development, digital marketing, SEO, and UI/UX design services for startups, SMEs, and enterprise clients.",
  keywords = "web development, digital marketing, SEO, UI/UX design, tech consultation",
  ogTitle,
  ogDescription,
  ogImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        if (name.startsWith("og:")) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("og:title", ogTitle || title);
    updateMetaTag("og:description", ogDescription || description);
    updateMetaTag("og:image", ogImage);
    updateMetaTag("og:url", window.location.href);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage]);

  return null;
}
