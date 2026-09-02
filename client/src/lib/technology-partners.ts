export interface TechnologyPartner {
  name: string;
  /** simple-icons slug — omit when using textLogo */
  slug?: string;
  color: string;
  /** Render brand name as styled text (no SVG available) */
  textLogo?: boolean;
}

export const TECHNOLOGY_PARTNERS: TechnologyPartner[] = [
  { name: "Amazon Web Services", slug: "amazonaws", color: "#FF9900" },
  { name: "Microsoft Azure", slug: "microsoftazure", color: "#0078D4" },
  { name: "Google Cloud", slug: "googlecloud", color: "#4285F4" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Kubernetes", slug: "kubernetes", color: "#326CE5" },
  { name: "Vercel", slug: "vercel", color: "#000000" },
  { name: "Shopify", slug: "shopify", color: "#7AB55C" },
  { name: "OpenAI", slug: "openai", color: "#412991" },
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "Redis", slug: "redis", color: "#FF4438" },
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "#000000" },
  { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "Firebase", slug: "firebase", color: "#DD2C00" },
  { name: "Stripe", slug: "stripe", color: "#635BFF" },
  { name: "Supabase", slug: "supabase", color: "#3FCF8E" },
  { name: "GitHub", slug: "github", color: "#181717" },
  { name: "DigitalOcean", slug: "digitalocean", color: "#0080FF" },
  { name: "Nginx", slug: "nginx", color: "#009639" },
  { name: "ERPNext", color: "#0089FF", textLogo: true },
];
