import type { ReactNode } from "react";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  relatedSlugs?: string[];
}

export type BlogPost = BlogPostMeta & {
  Content: () => ReactNode;
};
