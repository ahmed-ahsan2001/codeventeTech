import type { BlogPost } from "./types";
import {
  BestErpSmallBusinessPakistan,
  ErpnextCostPakistan,
  ErpnextVsOdooPakistan,
  MigrateExcelToErp,
} from "./articles/erp-articles";
import {
  CustomBusinessManagementSystem,
  MobileAppCostPakistan,
  ReactVsNextjs,
  ShopifyCostPakistan,
} from "./articles/dev-articles";
import {
  AiAgentsPlaybook,
  ChoosingTechStack2026,
  ErpnextGuidePakistan,
  ErpnextVsTraditionalErp,
  MvpProductionChecklist,
} from "./articles/legacy-articles";

const ALL_BLOG_POSTS: BlogPost[] = [
  {
    slug: "erpnext-implementation-cost-pakistan",
    title: "How Much Does ERPNext Implementation Cost in Pakistan? (2026 Guide)",
    excerpt:
      "Realistic PKR price ranges for ERPNext setup, customization, migration, and support — and what drives the final quote.",
    category: "ERP",
    readTime: "10 min read",
    date: "Aug 20, 2026",
    image:
      "https://images.unsplash.com/photo-1554224311-beee415c201f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    relatedSlugs: [
      "erpnext-implementation-guide-pakistan",
      "erpnext-vs-odoo-small-business-pakistan",
      "best-erp-software-small-business-pakistan",
    ],
    Content: ErpnextCostPakistan,
  },
  {
    slug: "erpnext-vs-odoo-small-business-pakistan",
    title: "ERPNext vs Odoo for Small Businesses in Pakistan",
    excerpt:
      "An honest comparison of licensing, customization, cost, and which open-source ERP fits Pakistani SMEs better.",
    category: "ERP",
    readTime: "9 min read",
    date: "Aug 18, 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    relatedSlugs: [
      "erpnext-implementation-cost-pakistan",
      "best-erp-software-small-business-pakistan",
      "erpnext-vs-traditional-erp",
    ],
    Content: ErpnextVsOdooPakistan,
  },
  {
    slug: "shopify-development-cost-pakistan",
    title: "How Much Does Shopify Development Cost in Pakistan? (2026)",
    excerpt:
      "PKR pricing for Shopify store setup, custom themes, integrations, and what a professional e-commerce build includes.",
    category: "E-Commerce",
    readTime: "8 min read",
    date: "Aug 17, 2026",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    relatedSlugs: ["react-vs-nextjs-business-websites"],
    Content: ShopifyCostPakistan,
  },
  {
    slug: "mobile-app-development-cost-pakistan",
    title: "How Much Does Mobile App Development Cost in Pakistan? (2026)",
    excerpt:
      "Cross-platform and native app pricing, timelines, and how to scope an MVP without overpaying.",
    category: "Mobile",
    readTime: "9 min read",
    date: "Aug 16, 2026",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    relatedSlugs: ["custom-business-management-system"],
    Content: MobileAppCostPakistan,
  },
  {
    slug: "react-vs-nextjs-business-websites",
    title: "React vs Next.js for Business Websites: Which Should You Choose?",
    excerpt:
      "A founder-friendly guide to SEO, performance, and when each framework makes sense for your product.",
    category: "Engineering",
    readTime: "7 min read",
    date: "Aug 14, 2026",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    relatedSlugs: ["choosing-tech-stack-2026", "shopify-development-cost-pakistan"],
    Content: ReactVsNextjs,
  },
  {
    slug: "migrate-excel-to-erp-software",
    title: "How to Migrate a Business from Excel to ERP Software",
    excerpt:
      "A step-by-step playbook for cleaning data, choosing modules, and going live without operational chaos.",
    category: "ERP",
    readTime: "8 min read",
    date: "Aug 12, 2026",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    relatedSlugs: [
      "best-erp-software-small-business-pakistan",
      "erpnext-implementation-cost-pakistan",
    ],
    Content: MigrateExcelToErp,
  },
  {
    slug: "best-erp-software-small-business-pakistan",
    title: "Best ERP Software for Small Businesses in Pakistan (2026)",
    excerpt:
      "ERPNext, Tally, Odoo, and more — compared for Pakistani SMEs with honest pros, cons, and fit.",
    category: "ERP",
    readTime: "10 min read",
    date: "Aug 10, 2026",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    relatedSlugs: [
      "erpnext-vs-odoo-small-business-pakistan",
      "erpnext-implementation-cost-pakistan",
    ],
    Content: BestErpSmallBusinessPakistan,
  },
  {
    slug: "custom-business-management-system",
    title: "How to Build a Custom Business Management System",
    excerpt:
      "When off-the-shelf ERP is not enough, what custom software includes, costs, and how to avoid failure.",
    category: "Strategy",
    readTime: "9 min read",
    date: "Aug 8, 2026",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    relatedSlugs: [
      "migrate-excel-to-erp-software",
      "mobile-app-development-cost-pakistan",
    ],
    Content: CustomBusinessManagementSystem,
  },
  {
    slug: "erpnext-implementation-guide-pakistan",
    title: "ERPNext Implementation Guide for Pakistani Businesses (2026)",
    excerpt:
      "Everything you need to know before implementing ERPNext — modules, costs, timeline, and how to choose the right partner in Pakistan.",
    category: "ERP",
    readTime: "12 min read",
    date: "Aug 15, 2026",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    relatedSlugs: ["erpnext-implementation-cost-pakistan"],
    Content: ErpnextGuidePakistan,
  },
  {
    slug: "erpnext-vs-traditional-erp",
    title: "ERPNext vs Traditional ERP: Why Startups Are Switching",
    excerpt:
      "Compare ERPNext with SAP, Oracle, and Tally — cost, customization, and why open-source ERP wins for growing businesses.",
    category: "ERP",
    readTime: "9 min read",
    date: "Aug 5, 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    relatedSlugs: ["erpnext-vs-odoo-small-business-pakistan"],
    Content: ErpnextVsTraditionalErp,
  },
  {
    slug: "ai-agents-startup-playbook",
    title: "The Startup Playbook for AI Agents in 2026",
    excerpt:
      "How early-stage companies are using autonomous AI agents to automate ops, support, and growth.",
    category: "AI",
    readTime: "8 min read",
    date: "Aug 10, 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    relatedSlugs: [],
    Content: AiAgentsPlaybook,
  },
  {
    slug: "mvp-to-production-checklist",
    title: "From MVP to Production: A Technical Checklist",
    excerpt:
      "The 12 things every startup must harden before launching to real users and investors.",
    category: "Engineering",
    readTime: "6 min read",
    date: "Jul 28, 2026",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    relatedSlugs: [],
    Content: MvpProductionChecklist,
  },
  {
    slug: "choosing-tech-stack-2026",
    title: "Choosing Your Tech Stack in 2026",
    excerpt:
      "React, Next.js, or something else? A pragmatic guide for founders who aren't engineers.",
    category: "Strategy",
    readTime: "5 min read",
    date: "Jul 15, 2026",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    relatedSlugs: ["react-vs-nextjs-business-websites"],
    Content: ChoosingTechStack2026,
  },
];

export type BlogPostMeta = Omit<BlogPost, "Content">;

export const BLOG_POSTS: BlogPostMeta[] = ALL_BLOG_POSTS.map(({ Content: _c, ...meta }) => meta);

export function getBlogPost(slug: string): BlogPost | undefined {
  return ALL_BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const post = getBlogPost(slug);
  if (!post?.relatedSlugs?.length) {
    return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit);
  }
  const related = post.relatedSlugs
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter((p): p is BlogPostMeta => !!p);
  return related.slice(0, limit);
}
