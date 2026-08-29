export type BlogCoverCategory =
  | "ERP"
  | "E-Commerce"
  | "Mobile"
  | "Engineering"
  | "AI"
  | "Strategy";

export interface CoverTheme {
  accent: string;
  accentLight: string;
  blob: string;
}

export const COVER_THEMES: Record<BlogCoverCategory, CoverTheme> = {
  ERP: {
    accent: "#0066FF",
    accentLight: "#E8F1FF",
    blob: "radial-gradient(circle at 70% 50%, rgba(0,102,255,0.12), transparent 70%)",
  },
  "E-Commerce": {
    accent: "#7C3AED",
    accentLight: "#F3EEFF",
    blob: "radial-gradient(circle at 70% 50%, rgba(124,58,237,0.12), transparent 70%)",
  },
  Mobile: {
    accent: "#0891B2",
    accentLight: "#E6F9FD",
    blob: "radial-gradient(circle at 70% 50%, rgba(8,145,178,0.12), transparent 70%)",
  },
  Engineering: {
    accent: "#0F172A",
    accentLight: "#F1F5F9",
    blob: "radial-gradient(circle at 70% 50%, rgba(15,23,42,0.08), transparent 70%)",
  },
  AI: {
    accent: "#6366F1",
    accentLight: "#EEF2FF",
    blob: "radial-gradient(circle at 70% 50%, rgba(99,102,241,0.12), transparent 70%)",
  },
  Strategy: {
    accent: "#059669",
    accentLight: "#ECFDF5",
    blob: "radial-gradient(circle at 70% 50%, rgba(5,150,105,0.12), transparent 70%)",
  },
};

export function resolveCoverCategory(category: string): BlogCoverCategory {
  if (category in COVER_THEMES) return category as BlogCoverCategory;
  return "Strategy";
}

export function getBlogCoverImagePath(slug: string): string {
  return `/blog-covers/${slug}.svg`;
}
