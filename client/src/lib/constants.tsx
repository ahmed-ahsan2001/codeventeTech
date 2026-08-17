export type { PortfolioProject } from "./portfolio";
export { PORTFOLIO_PROJECTS, getProjectBySlug, getCaseStudyPath } from "./portfolio";

export const COMPANY_INFO = {
  name: "CodeVente",
  tagline: "AI, Software & ERP Development Agency for Startups",
  email: "ahmedbawany2001@gmail.com",
  supportEmail: "",
  whatsapp: "+923122739457",
  phone: "+92 312 2739457",
  address: {
    street: "Karachi",
    city: "Karachi",
    state: "Sindh",
    zip: "75500",
    country: "Pakistan",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/codevente",
    twitter: "",
    github: "https://github.com/codevente",
    instagram: "https://www.instagram.com/codevente",
  },
};

export const SERVICES = [
  {
    id: "web-development",
    title: "Web & App Development",
    description: "Full-stack web platforms and native cross-platform mobile apps — built with modern frameworks for performance, scale, and maintainability.",
    icon: "code",
    features: [
      "React, Next.js & Node.js Applications",
      "iOS & Android Apps (React Native)",
      "API Design & Backend Development",
      "E-commerce & SaaS Products",
    ],
    color: "blue",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Integration",
    description: "Custom AI features, LLM integrations, and intelligent automation that solve real business problems — not demo-grade chatbots.",
    icon: "sparkles",
    features: [
      "OpenAI & LangChain Integrations",
      "AI Agents & Workflow Automation",
      "RAG Pipelines & Custom Models",
      "AI-Powered Product Features",
    ],
    color: "violet",
  },
  {
    id: "erp-implementation",
    title: "ERP Implementation & Customization",
    description: "ERPNext deployment, customization, and managed hosting — tailored workflows for inventory, finance, HR, manufacturing, and operations.",
    icon: "layout-grid",
    features: [
      "ERPNext Setup & Cloud Deployment",
      "Custom DocTypes, Workflows & Reports",
      "Inventory, Accounting & HR Modules",
      "Data Migration & Team Training",
    ],
    color: "amber",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "User-centered design for web and mobile products — intuitive interfaces that drive engagement and conversion.",
    icon: "palette",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Visual Design & Design Systems",
      "Mobile & Web Interface Design",
    ],
    color: "emerald",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that drive engagement, increase conversions, and grow your brand online.",
    icon: "megaphone",
    features: [
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Pay-Per-Click Advertising",
      "Email Marketing Campaigns",
    ],
    color: "cyan",
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Improve your search rankings and organic traffic with data-driven SEO strategies and optimization.",
    icon: "trending-up",
    features: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Link Building & Authority",
    ],
    color: "blue",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    author: "Abid",
    company: "CEO Zakaria Masjid.",
    content: "CodeVente transformed our outdated website into a modern, high-performing platform",
    rating: 5
  },
  {
    id: 2,
    author: "CEO AK Impression",
    company: "AK Impression",
    content: "The team's expertise in digital marketing helped us reach new audiences and grow our online presence significantly. Highly recommended!",
    rating: 5
  },
];

// export const COURSES = [
//   {
//     id: "modern-web-development",
//     title: "Modern Web Development Bootcamp",
//     description: "Master React, Node.js, and modern development practices in this comprehensive 12-week program.",
//     category: "development",
//     level: "Beginner to Intermediate",
//     duration: "12 weeks",
//     price: "$1,299",
//     originalPrice: "$1,599",
//     image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//     instructor: "Sarah Kim",
//     rating: 4.9,
//     students: 1247,
//     modules: [
//       "HTML5, CSS3 & JavaScript Fundamentals",
//       "React & Component Architecture",
//       "Node.js & Express Backend",
//       "Database Design & MongoDB",
//       "API Development & Integration",
//       "Deployment & DevOps Basics"
//     ],
//     features: [
//       "Live coding sessions",
//       "1-on-1 mentorship",
//       "Real-world projects",
//       "Job placement assistance",
//       "Certificate of completion",
//       "Lifetime access to materials"
//     ]
//   },
//   {
//     id: "digital-marketing-mastery",
//     title: "Digital Marketing Mastery",
//     description: "Learn proven strategies to grow businesses online through SEO, PPC, social media, and content marketing.",
//     category: "marketing",
//     level: "Beginner",
//     duration: "8 weeks",
//     price: "$899",
//     originalPrice: "$1,199",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//     instructor: "David Chen",
//     rating: 4.8,
//     students: 892,
//     modules: [
//       "Digital Marketing Fundamentals",
//       "SEO & Content Strategy",
//       "Google Ads & PPC Campaigns",
//       "Social Media Marketing",
//       "Email Marketing & Automation",
//       "Analytics & Performance Tracking"
//     ],
//     features: [
//       "Industry case studies",
//       "Google Ads certification prep",
//       "Marketing tools access",
//       "Campaign templates",
//       "Weekly live Q&A sessions",
//       "Professional network access"
//     ]
//   },
//   {
//     id: "ui-ux-design-fundamentals",
//     title: "UI/UX Design Fundamentals",
//     description: "Create beautiful, user-centered designs using industry-standard tools and proven design principles.",
//     category: "design",
//     level: "Beginner",
//     duration: "10 weeks",
//     price: "$1,099",
//     originalPrice: "$1,399",
//     image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//     instructor: "Maria Garcia",
//     rating: 4.9,
//     students: 634,
//     modules: [
//       "Design Thinking & User Research",
//       "Wireframing & Prototyping",
//       "Visual Design Principles",
//       "Figma Mastery",
//       "Interaction Design",
//       "Portfolio Development"
//     ],
//     features: [
//       "Figma Pro access included",
//       "Design critique sessions",
//       "Portfolio review",
//       "Industry connections",
//       "Design system templates",
//       "Career guidance"
//     ]
//   },
//   {
//     id: "full-stack-javascript",
//     title: "Full-Stack JavaScript Developer",
//     description: "Become a complete JavaScript developer with React, Node.js, databases, and cloud deployment skills.",
//     category: "development",
//     level: "Intermediate to Advanced",
//     duration: "16 weeks",
//     price: "$1,799",
//     originalPrice: "$2,199",
//     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//     instructor: "James Wilson",
//     rating: 4.8,
//     students: 423,
//     modules: [
//       "Advanced JavaScript & ES6+",
//       "React & State Management",
//       "Node.js & Express Advanced",
//       "Database Design & ORMs",
//       "Authentication & Security",
//       "Cloud Deployment & CI/CD"
//     ],
//     features: [
//       "Capstone project",
//       "Code review sessions",
//       "Industry mentorship",
//       "Job interview prep",
//       "GitHub portfolio setup",
//       "Tech community access"
//     ]
//   },
//   {
//     id: "seo-content-strategy",
//     title: "SEO & Content Strategy",
//     description: "Master search engine optimization and content marketing to drive organic traffic and conversions.",
//     category: "marketing",
//     level: "Intermediate",
//     duration: "6 weeks",
//     price: "$699",
//     originalPrice: "$899",
//     image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//     instructor: "Lisa Park",
//     rating: 4.7,
//     students: 756,
//     modules: [
//       "SEO Fundamentals & Technical SEO",
//       "Keyword Research & Strategy",
//       "Content Planning & Creation",
//       "Link Building Strategies",
//       "Local SEO & E-commerce SEO",
//       "SEO Tools & Analytics"
//     ],
//     features: [
//       "SEO tools access",
//       "Content templates",
//       "Website audit practice",
//       "Live optimization sessions",
//       "Industry case studies",
//       "Certification preparation"
//     ]
//   },
//   {
//     id: "mobile-app-design",
//     title: "Mobile App Design Workshop",
//     description: "Design stunning mobile applications with focus on user experience, accessibility, and modern design trends.",
//     category: "design",
//     level: "Intermediate",
//     duration: "8 weeks",
//     price: "$999",
//     originalPrice: "$1,299",
//     image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
//     instructor: "Alex Thompson",
//     rating: 4.8,
//     students: 312,
//     modules: [
//       "Mobile Design Principles",
//       "iOS & Android Guidelines",
//       "Prototyping & Animation",
//       "Accessibility Design",
//       "App Store Optimization",
//       "Design Handoff & Development"
//     ],
//     features: [
//       "Mobile prototyping tools",
//       "Design system creation",
//       "App store submission guide",
//       "Real client projects",
//       "Peer design reviews",
//       "Industry networking"
//     ]
//   }
// ];
