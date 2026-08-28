export const INDUSTRIES = [
  {
    id: "fintech",
    title: "FinTech",
    description: "Secure payment platforms, banking apps, and AI-powered financial analytics.",
    icon: "landmark",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "HIPAA-aware patient portals, telemedicine, and health data platforms.",
    icon: "heart-pulse",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "High-converting storefronts, inventory systems, and personalized shopping AI.",
    icon: "shopping-bag",
  },
  {
    id: "education",
    title: "EdTech",
    description: "Learning platforms, course delivery, and AI tutoring experiences.",
    icon: "graduation-cap",
  },
  {
    id: "saas",
    title: "SaaS",
    description: "Multi-tenant products, subscription billing, and scalable cloud architecture.",
    icon: "layers",
  },
  {
    id: "enterprise",
    title: "Enterprise & Operations",
    description: "ERPNext implementations for inventory, finance, HR, and end-to-end business operations.",
    icon: "building-2",
  },
  {
    id: "nonprofit",
    title: "Non-Profit",
    description: "Donation platforms, community portals, and impact-driven digital experiences.",
    icon: "heart",
  },
];

export const TECHNOLOGIES = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "OpenAI",
  "LangChain", "ERPNext", "Frappe", "PostgreSQL", "MongoDB", "AWS",
  "Docker", "Kubernetes", "React Native", "Redis", "GraphQL",
  "Tailwind CSS", "Figma", "Shopify", "Vercel", "Supabase", "MariaDB",
];

export const AI_CAPABILITIES = [
  {
    title: "LLM Integration",
    description: "OpenAI, Anthropic, and open-source models wired into your product with production-grade guardrails.",
    icon: "brain",
  },
  {
    title: "AI Agents",
    description: "Autonomous agents that handle workflows, customer support, and internal operations at scale.",
    icon: "bot",
  },
  {
    title: "RAG Pipelines",
    description: "Retrieval-augmented generation that grounds AI responses in your proprietary data.",
    icon: "database",
  },
  {
    title: "Computer Vision",
    description: "Image recognition, document parsing, and visual AI for real-world product features.",
    icon: "eye",
  },
  {
    title: "Generative AI",
    description: "Content generation, code assistants, and creative AI tools built for your brand.",
    icon: "sparkles",
  },
  {
    title: "MLOps",
    description: "Model deployment, monitoring, and continuous improvement in production environments.",
    icon: "activity",
  },
];

export const WHY_CODEVENTE = [
  {
    title: "AI-First Engineering",
    description: "We don't bolt AI onto legacy systems. Intelligence is architected into every layer from day one.",
    stat: "100%",
    statLabel: "AI-ready architecture",
  },
  {
    title: "Startup Velocity",
    description: "Ship in weeks, not months. Our sprint-based delivery gets you to market while competitors are still planning.",
    stat: "2.4x",
    statLabel: "Faster delivery",
  },
  {
    title: "Production Quality",
    description: "Every line of code is built for scale — auth, security, CI/CD, and monitoring included from the start.",
    stat: "95%",
    statLabel: "Client satisfaction",
  },
  {
    title: "Full-Stack Team",
    description: "Design, engineering, AI, and growth under one roof. No coordination overhead, no finger-pointing.",
    stat: "50+",
    statLabel: "Projects delivered",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What types of projects does CodeVente take on?",
    answer: "We specialize in AI-powered web apps, mobile apps, custom software, and ERPNext implementations for startups and growing businesses. From MVPs to enterprise ERP deployments — if it involves code and ambition, we're interested.",
  },
  {
    question: "How long does a typical project take?",
    answer: "MVPs typically ship in 4–8 weeks. Full product builds range from 8–16 weeks depending on scope. We work in focused sprints with weekly demos so you always know where things stand.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Absolutely. Many of our best partnerships started at the idea stage. We act as your technical co-founder — helping you validate, build, and launch with investor-ready architecture.",
  },
  {
    question: "What's your pricing model?",
    answer: "We offer fixed-price projects for well-defined scopes and retainer models for ongoing development. Every engagement starts with a free technical audit so we can recommend the right approach.",
  },
  {
    question: "Can you integrate AI into our existing product?",
    answer: "Yes. We audit your current stack, identify high-impact AI opportunities, and implement integrations that deliver measurable ROI — not demo-grade chatbots.",
  },
  {
    question: "Do you implement and customize ERPNext?",
    answer: "Yes. We deploy ERPNext on cloud or on-premise, customize modules to match your workflows, migrate existing data, train your team, and provide ongoing support after go-live.",
  },
  {
    question: "Where is your team located?",
    answer: "We're based in Karachi, Pakistan, serving clients globally. Our remote-first team works across time zones with async communication and real-time collaboration when needed.",
  },
];

export { BLOG_POSTS } from "./blog";

export const TEAM_MEMBERS = [
  {
    name: "Ahmed Bawany",
    role: "CEO",
    bio: "Full-stack engineer and product strategist leading CodeVente's AI, software, and ERPNext delivery.",
  },
  {
    name: "Ammar Ahsan",
    role: "Digital Marketing Executive",
    bio: "Drives brand growth through SEO, social media, and data-driven digital marketing campaigns.",
  },
  {
    name: "Talha Shakeel",
    role: "QA Engineer",
    bio: "Ensures every release meets production standards through rigorous testing and quality assurance.",
  },
];

export const COMPANY_STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Industries Served" },
  { value: 2.4, suffix: "x", label: "Avg. Speed Increase", decimals: 1 },
];

export const TRUST_LOGOS = [
  "Fiabila",
  "Zakaria Masjid",
  "AK Impression",
  "Khadija Tul Kubra",
  "Quran App",
];

export const SERVICE_DETAILS: Record<string, {
  hero: string;
  benefits: string[];
  workflow: { step: string; title: string; description: string }[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}> = {
  "web-development": {
    hero: "Full-stack web platforms built with modern frameworks — performant, scalable, and maintainable.",
    benefits: [
      "React & Next.js applications with server-side rendering",
      "RESTful and GraphQL API design",
      "Real-time features with WebSockets",
      "Progressive Web Apps (PWA)",
      "E-commerce and SaaS architecture",
      "Performance optimization & Core Web Vitals",
    ],
    workflow: [
      { step: "01", title: "Discovery", description: "Understand your users, define features, and architect the system." },
      { step: "02", title: "Design & Prototype", description: "Wireframes, UI design, and interactive prototypes for validation." },
      { step: "03", title: "Development", description: "Agile sprints with weekly demos and continuous integration." },
      { step: "04", title: "Launch", description: "QA, performance testing, deployment, and post-launch support." },
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Shopify", "PostgreSQL", "Redis", "AWS", "Vercel"],
    faqs: [
      { question: "Do you build both frontend and backend?", answer: "Yes. We're a full-stack team that handles everything from UI to database architecture." },
      { question: "Can you work with our existing codebase?", answer: "Absolutely. We audit your current stack and integrate seamlessly or recommend migration paths." },
      { question: "Do you build Shopify or mobile apps too?", answer: "Yes. We also offer dedicated Shopify store development and cross-platform mobile apps — see our Shopify and mobile app service pages for details." },
    ],
  },
  "mobile-app-development": {
    hero: "Cross-platform iOS and Android apps built with React Native — one codebase, native performance, and production-ready from launch.",
    benefits: [
      "React Native for iOS & Android from a single codebase",
      "Push notifications, offline support & device APIs",
      "App Store & Google Play submission support",
      "Backend APIs, auth & real-time sync with Firebase or custom servers",
      "UI/UX designed for thumb-friendly mobile flows",
      "Performance profiling & crash monitoring in production",
    ],
    workflow: [
      { step: "01", title: "Discovery", description: "Define user journeys, platform requirements, and MVP scope for iOS and Android." },
      { step: "02", title: "Design", description: "Mobile-first wireframes and prototypes validated before development starts." },
      { step: "03", title: "Build", description: "Agile sprints with TestFlight and internal APK builds for weekly feedback." },
      { step: "04", title: "Launch", description: "Store submission, analytics setup, and post-launch iteration support." },
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "Node.js", "PostgreSQL", "Expo", "Redux", "Push Notifications"],
    faqs: [
      { question: "Do you build native iOS and Android apps?", answer: "We primarily build cross-platform apps with React Native, which covers both iOS and Android from one codebase — faster to ship and easier to maintain. For most business apps, this is the right trade-off." },
      { question: "How much does mobile app development cost in Pakistan?", answer: "A focused MVP typically starts from PKR 400,000–800,000 depending on features, integrations, and design complexity. We provide a fixed-price quote after a free scoping call." },
      { question: "Can you maintain an app after launch?", answer: "Yes. We offer retainer support for bug fixes, OS updates, new features, and store compliance after your initial launch." },
      { question: "Do you handle App Store and Play Store submission?", answer: "Yes. We prepare store listings, screenshots, privacy policies, and guide you through Apple and Google review requirements." },
    ],
  },
  "react-development": {
    hero: "Production-grade React and Next.js applications — fast SPAs, dashboards, SaaS products, and SEO-friendly marketing sites.",
    benefits: [
      "React & Next.js with TypeScript for type-safe codebases",
      "Server-side rendering & static generation for SEO and performance",
      "Component libraries & design system integration",
      "State management with React Query, Zustand, or Redux",
      "API integration with REST, GraphQL, and third-party services",
      "Core Web Vitals optimization & accessibility (WCAG)",
    ],
    workflow: [
      { step: "01", title: "Architecture", description: "Define routes, data flow, component structure, and deployment strategy." },
      { step: "02", title: "UI Build", description: "Implement designs with reusable components and responsive layouts." },
      { step: "03", title: "Integrate", description: "Wire APIs, auth, payments, and third-party services with error handling." },
      { step: "04", title: "Ship", description: "CI/CD, performance audits, and deployment to Vercel, AWS, or your infrastructure." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Query", "Node.js", "Vercel", "PostgreSQL"],
    faqs: [
      { question: "React or Next.js — which should we use?", answer: "Next.js is ideal when SEO, server rendering, or API routes matter. Plain React works well for dashboards and internal tools. We recommend the right fit during discovery." },
      { question: "Can you migrate our existing React app to Next.js?", answer: "Yes. We audit your current setup, plan incremental migration, and move routes to Next.js without disrupting live users." },
      { question: "Do you work with our design team?", answer: "Absolutely. We implement Figma designs pixel-accurately and collaborate on component specs and handoff." },
    ],
  },
  "shopify-development": {
    hero: "Custom Shopify stores for Pakistani brands — Online Store 2.0 themes, collections, checkout, and conversion-focused e-commerce.",
    benefits: [
      "Shopify Online Store 2.0 theme setup & customization",
      "Collection pages, filters, and product merchandising",
      "PKR checkout, shipping rules & free-shipping thresholds",
      "Wishlist, search, cart, and promotional banners",
      "Mobile-first storefront optimized for WhatsApp shoppers",
      "Speed optimization & basic SEO for product pages",
    ],
    workflow: [
      { step: "01", title: "Store Planning", description: "Map catalog structure, collections, shipping zones, and brand requirements." },
      { step: "02", title: "Theme & Design", description: "Customize Shopify theme to match brand colors, typography, and merchandising." },
      { step: "03", title: "Catalog Setup", description: "Import products, configure variants, filters, and payment/shipping rules." },
      { step: "04", title: "Launch", description: "Domain setup, testing checkout flows, and handover with training." },
    ],
    technologies: ["Shopify", "Liquid", "Online Store 2.0", "Shopify Payments", "JavaScript", "CSS", "Google Analytics"],
    faqs: [
      { question: "How much does Shopify development cost in Pakistan?", answer: "A branded Shopify store with custom theme work typically starts from PKR 150,000–400,000 depending on catalog size, custom features, and integrations. We quote after reviewing your requirements." },
      { question: "Can you migrate from WooCommerce or a custom site?", answer: "Yes. We migrate products, collections, customer data, and redirects to Shopify with minimal SEO disruption." },
      { question: "Do you support Pakistani payment and shipping?", answer: "Yes. We configure PKR pricing, local shipping zones, COD where applicable, and integrations with Pakistani payment gateways supported by Shopify." },
      { question: "Can you see examples of your Shopify work?", answer: "Yes — see our Fiabila case study for a live skincare store we built at fiabila.com.pk." },
    ],
  },
  "ai-solutions": {
    hero: "Custom AI features and LLM integrations that solve real business problems — not demo-grade chatbots.",
    benefits: [
      "OpenAI, Anthropic & open-source LLM integration",
      "AI agents & workflow automation",
      "RAG pipelines with vector databases",
      "Custom model fine-tuning",
      "AI-powered search & recommendations",
      "Production monitoring & guardrails",
    ],
    workflow: [
      { step: "01", title: "AI Audit", description: "Identify high-impact AI opportunities in your product and operations." },
      { step: "02", title: "Proof of Concept", description: "Build and validate AI features with real data in 1–2 weeks." },
      { step: "03", title: "Production Integration", description: "Deploy with guardrails, monitoring, and cost optimization." },
      { step: "04", title: "Iterate & Scale", description: "Continuous improvement based on user feedback and metrics." },
    ],
    technologies: ["OpenAI", "LangChain", "Python", "Pinecone", "PostgreSQL", "Redis", "AWS Lambda", "Docker"],
    faqs: [
      { question: "How much does AI integration cost?", answer: "It depends on complexity. Simple chatbot integrations start around $5K; full RAG pipelines range $15K–50K." },
      { question: "Do you handle AI safety and compliance?", answer: "Yes. We implement content filtering, rate limiting, audit logging, and data privacy controls." },
    ],
  },
  "erp-implementation": {
    hero: "ERPNext deployed, customized, and managed for your business — from setup to go-live and beyond.",
    benefits: [
      "ERPNext installation on cloud or dedicated servers",
      "Custom DocTypes, workflows, print formats & dashboards",
      "Accounting, inventory, CRM, HR & manufacturing modules",
      "Legacy data migration from spreadsheets or older systems",
      "Role-based access, approvals & audit trails",
      "Post-launch support, updates & team training",
    ],
    workflow: [
      { step: "01", title: "Requirements & Audit", description: "Map your business processes, pain points, and modules needed before configuration." },
      { step: "02", title: "Configure & Customize", description: "Set up ERPNext, build custom fields, workflows, reports, and integrations." },
      { step: "03", title: "Migrate & Test", description: "Import historical data, run UAT with your team, and refine until workflows fit." },
      { step: "04", title: "Deploy & Train", description: "Go live on production, train staff, and hand over with ongoing support options." },
    ],
    technologies: ["ERPNext", "Frappe Framework", "Python", "MariaDB", "Redis", "Docker", "Nginx", "AWS", "Linux"],
    faqs: [
      { question: "Which ERPNext modules do you implement?", answer: "We commonly deploy accounting, inventory, sales, purchasing, HR, manufacturing, and CRM — configured and customized to match how your team actually works." },
      { question: "Can you migrate data from our current system?", answer: "Yes. We migrate from Excel, QuickBooks, legacy ERPs, and other sources — with validation and reconciliation before go-live." },
      { question: "Do you host ERPNext or deploy on our infrastructure?", answer: "Both. We can manage cloud hosting for you or deploy on your own servers/VPS with full handover documentation." },
    ],
  },
  "ui-ux": {
    hero: "User-centered design that drives engagement, conversion, and product-market fit.",
    benefits: [
      "User research & persona development",
      "Wireframing & interactive prototyping",
      "Visual design & design systems",
      "Mobile-first responsive design",
      "Usability testing & iteration",
      "Design-to-development handoff",
    ],
    workflow: [
      { step: "01", title: "Research", description: "User interviews, competitive analysis, and journey mapping." },
      { step: "02", title: "Wireframe", description: "Low-fidelity flows and information architecture." },
      { step: "03", title: "Design", description: "High-fidelity UI with design system components." },
      { step: "04", title: "Validate", description: "Prototype testing and iterative refinement." },
    ],
    technologies: ["Figma", "Framer", "Adobe Creative Suite", "Maze", "Hotjar", "Storybook"],
    faqs: [
      { question: "Do you design for both web and mobile?", answer: "Yes. We create cohesive design systems that work across all platforms and screen sizes." },
      { question: "Can you redesign an existing product?", answer: "Absolutely. We specialize in UX audits and redesigns that improve conversion and retention." },
    ],
  },
  "digital-marketing": {
    hero: "Data-driven marketing strategies that grow your brand and acquire customers at scale.",
    benefits: [
      "Social media strategy & management",
      "Content marketing & SEO",
      "Paid advertising (Google, Meta, LinkedIn)",
      "Email marketing automation",
      "Analytics & conversion tracking",
      "Brand identity & positioning",
    ],
    workflow: [
      { step: "01", title: "Audit", description: "Analyze your current marketing performance and competitive landscape." },
      { step: "02", title: "Strategy", description: "Define channels, messaging, and KPIs aligned with business goals." },
      { step: "03", title: "Execute", description: "Launch campaigns with creative assets and tracking infrastructure." },
      { step: "04", title: "Optimize", description: "A/B testing, analytics review, and continuous improvement." },
    ],
    technologies: ["Google Analytics", "Meta Ads", "Google Ads", "Mailchimp", "HubSpot", "SEMrush"],
    faqs: [
      { question: "Do you handle creative production?", answer: "Yes. Our team creates ad creatives, social content, and landing pages in-house." },
      { question: "What's your minimum engagement?", answer: "Marketing retainers typically start at 3 months to allow strategy implementation and optimization." },
    ],
  },
  "seo": {
    hero: "Technical SEO and content strategy that drives sustainable organic growth.",
    benefits: [
      "Technical SEO audits & fixes",
      "Keyword research & content strategy",
      "On-page optimization",
      "Link building & authority development",
      "Local SEO & Google Business",
      "Performance & Core Web Vitals",
    ],
    workflow: [
      { step: "01", title: "Audit", description: "Comprehensive technical and content SEO analysis." },
      { step: "02", title: "Strategy", description: "Keyword targeting, content calendar, and link building plan." },
      { step: "03", title: "Implement", description: "On-page fixes, content creation, and technical improvements." },
      { step: "04", title: "Monitor", description: "Rank tracking, traffic analysis, and monthly reporting." },
    ],
    technologies: ["Google Search Console", "Ahrefs", "Screaming Frog", "SEMrush", "Google Analytics", "Schema.org"],
    faqs: [
      { question: "How long until we see SEO results?", answer: "Technical fixes show impact in 2–4 weeks. Content and authority building typically take 3–6 months." },
      { question: "Do you write content?", answer: "Yes. We create SEO-optimized blog posts, landing pages, and meta content as part of our service." },
    ],
  },
};
