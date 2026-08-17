import quranAppImageOne from "@/assets/quran-app-1.png";
import quranAppImageTwo from "@/assets/quran-app-2.png";
import zakariaMasjidDesktop from "@/assets/zakaria-masjid-desktop.png";
import zakariaMasjidMobile from "@/assets/zakaria-masjid-mobile.png";
import kkwtDesktop from "@/assets/kkwt-desktop.png";
import kkwtPrograms from "@/assets/kkwt-programs.jpg";
import kkwtOrphans from "@/assets/kkwt-orphans.jpg";
import fiabilaDesktop from "@/assets/fiabila-desktop.jpg";
import fiabilaShop from "@/assets/fiabila-shop.jpg";
import fiabilaMobile from "@/assets/fiabila-mobile.jpg";

export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  categories?: string[];
  image: string;
  secondaryImage?: string;
  technologies: string;
  results: string;
  rating: number;
  link?: string;
  client: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  outcomes: { label: string; value: string }[];
  gallery?: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 4,
    slug: "fiabila-shopify-store",
    title: "Fiabila Shopify Store",
    description:
      "Custom Shopify storefront for a Pakistan skincare brand — collections, cart, wishlist, and PKR checkout.",
    category: "web",
    image: fiabilaDesktop,
    secondaryImage: fiabilaShop,
    technologies: "Shopify, Liquid, Online Store 2.0",
    results: "Live catalog, collection filters, and mobile-ready checkout at fiabila.com.pk",
    rating: 5,
    link: "https://fiabila.com.pk",
    client: "Fiabila",
    duration: "6 weeks",
    overview:
      "A conversion-focused Shopify store for Fiabila, a Karachi-based skincare and grooming brand. We launched a branded Online Store 2.0 shop with hero merchandising, category collections, product filters, wishlist, and PKR checkout — covering face washes, sunblocks, aloe vera, serums, and salon-grade hair care.",
    challenge:
      "Fiabila needed a credible online store that could sell nationwide from Karachi. Their catalog spans multiple ranges, so shoppers needed clear collections, shipping messaging, and a mobile checkout they could complete on WhatsApp-heavy devices.",
    solution:
      "We designed and built the store on Shopify: custom homepage merchandising for sun protection, collection pages with availability and price filters, product cards with add-to-cart, promotional banners for free shipping above Rs 2,999, and a theme setup aligned with the brand’s green-and-white look. Cart, wishlist, and storefront search were wired for everyday shopping.",
    outcomes: [
      { label: "Platform", value: "Shopify" },
      { label: "Catalog ranges", value: "8+" },
      { label: "Live at", value: "fiabila.com.pk" },
    ],
    gallery: [fiabilaDesktop, fiabilaShop, fiabilaMobile],
  },
  {
    id: 1,
    slug: "zakaria-masjid",
    title: "Zakaria Masjid Website",
    description: "Community website and hifz platform portal for a masjid in the UK.",
    category: "web",
    image: zakariaMasjidDesktop,
    secondaryImage: zakariaMasjidMobile,
    technologies: "React, Node.js, Firebase",
    results: "High user interaction and strong community engagement",
    rating: 5,
    link: "https://zakariamasjid.com",
    client: "Zakaria Masjid",
    duration: "8 weeks",
    overview:
      "A modern digital home for Zakaria Masjid — combining prayer timings, event updates, Friday bayans, spotlight videos, and community resources in one responsive platform.",
    challenge:
      "The masjid relied on outdated pages and scattered WhatsApp groups. Families couldn't easily find timings, announcements, or bayans in one place.",
    solution:
      "We designed and built a fast React frontend with Firebase-backed content management, jamat timing displays, media sections for bayans and naats, and a mobile-first layout for community members on the go.",
    outcomes: [
      { label: "Page load", value: "< 2s" },
      { label: "Mobile traffic", value: "70%+" },
      { label: "Live at", value: "zakariamasjid.com" },
    ],
    gallery: [zakariaMasjidDesktop, zakariaMasjidMobile],
  },
  {
    id: 2,
    slug: "healthcare-mobile-app",
    title: "HealthCare Mobile App",
    description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
    category: "design",
    categories: ["design", "mobile"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: "Figma, React Native",
    results: "95% user satisfaction, 40% reduction in appointment no-shows",
    rating: 5,
    client: "Healthcare Startup",
    duration: "12 weeks",
    overview:
      "An end-to-end patient experience app connecting scheduling, records, and video consultations — designed for clarity under stress and built for cross-platform reach.",
    challenge:
      "Clinic staff juggled phone bookings and paper records while patients missed appointments due to poor reminders and confusing interfaces.",
    solution:
      "We ran user research with patients and staff, prototyped in Figma, then shipped a React Native app with push reminders, telemedicine flows, and an admin dashboard for providers.",
    outcomes: [
      { label: "User satisfaction", value: "95%" },
      { label: "No-show reduction", value: "40%" },
      { label: "Booking time", value: "−60%" },
    ],
  },
  {
    id: 3,
    slug: "khadija-tul-kubra",
    title: "Khadija Tul Kubra Welfare Trust",
    description: "Charity website for kkwt.org with online donations, welfare programs, and community outreach across Pakistan.",
    category: "web",
    image: kkwtDesktop,
    secondaryImage: kkwtPrograms,
    technologies: "React, Node.js, Firebase, Pay Pro API",
    results: "High donation conversion and streamlined payment flow",
    rating: 5,
    link: "https://kkwt.org",
    client: "Khadija Tul Kubra Welfare Trust",
    duration: "6 weeks",
    overview:
      "A trust-focused charity website at kkwt.org — showcasing welfare programs including education, food supply, orphan support, health care, and water projects, with secure online donations for supporters in Pakistan and abroad.",
    challenge:
      "Manual bank transfers and unclear donation paths limited fundraising. The trust needed a credible online presence to showcase programs and accept donations reliably.",
    solution:
      "We built a React site with Pay Pro payment integration, Firebase for program content and updates, and a donation flow optimized for mobile users — with dedicated pages for each welfare initiative.",
    outcomes: [
      { label: "Donation rate", value: "↑ High" },
      { label: "Mobile donations", value: "65%+" },
      { label: "Live at", value: "kkwt.org" },
    ],
    gallery: [kkwtDesktop, kkwtPrograms, kkwtOrphans],
  },
  {
    id: 5,
    slug: "edtech-learning-platform",
    title: "EdTech Learning Platform",
    description: "Online learning platform with course management, progress tracking, and interactive assessments.",
    category: "design",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: "Figma, Vue.js, Firebase",
    results: "90% course completion rate, 45% increase in student engagement",
    rating: 5,
    client: "EdTech Startup",
    duration: "14 weeks",
    overview:
      "A scalable learning platform where instructors publish courses, students track progress, and admins monitor engagement — designed for retention, not just enrollment.",
    challenge:
      "Students dropped off after the first module. Instructors lacked tools to see who was struggling, and the existing MVP couldn't handle growth.",
    solution:
      "We redesigned the learner journey in Figma, rebuilt core flows in Vue.js with Firebase, and added progress dashboards, quizzes, and nudge notifications.",
    outcomes: [
      { label: "Completion rate", value: "90%" },
      { label: "Engagement", value: "+45%" },
      { label: "Active courses", value: "50+" },
    ],
  },
  {
    id: 6,
    slug: "retail-brand-campaign",
    title: "Retail Brand Campaign",
    description: "Integrated marketing campaign with brand repositioning and omnichannel strategy.",
    category: "marketing",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    technologies: "SEO, Content, Social Media",
    results: "400% increase in brand awareness, 180% growth in online sales",
    rating: 5,
    client: "Fashion Retailer",
    duration: "10 weeks",
    overview:
      "A full-funnel digital campaign repositioning a fashion retailer online — from SEO and content to paid social and conversion-focused landing pages.",
    challenge:
      "The brand had strong offline presence but weak digital identity. Organic traffic was flat and paid ads weren't converting.",
    solution:
      "We audited the funnel, rebuilt content strategy around search intent, launched targeted social campaigns, and aligned landing pages with ad messaging.",
    outcomes: [
      { label: "Brand awareness", value: "+400%" },
      { label: "Online sales", value: "+180%" },
      { label: "Organic traffic", value: "+220%" },
    ],
  },
  {
    id: 7,
    slug: "quran-app",
    title: "Quran App",
    description: "Cross-platform Quran application with recitation, translation, bookmarks, and daily reminders.",
    category: "web",
    categories: ["web", "mobile"],
    image: quranAppImageOne,
    secondaryImage: quranAppImageTwo,
    technologies: "React, React Native, Node.js, Firebase",
    results: "Unified experience across web and mobile with strong user engagement",
    rating: 5,
    client: "CodeVente Product",
    duration: "16 weeks",
    overview:
      "A unified Quran experience on web and mobile — recitation, translations, bookmarks, and daily reminders synced across devices for a global user base.",
    challenge:
      "Users wanted one consistent experience whether on phone or desktop. Existing apps were either mobile-only or lacked modern UX and sync.",
    solution:
      "We shipped a React web app and React Native mobile app sharing Firebase backend, offline-friendly bookmarks, audio recitation, and push reminders for daily reading goals.",
    outcomes: [
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Daily active users", value: "Growing" },
      { label: "Session length", value: "12 min avg" },
    ],
    gallery: [quranAppImageOne, quranAppImageTwo],
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}

export function getCaseStudyPath(slug: string): string {
  return `/portfolio/${slug}`;
}

export function getCategoryLabel(category: string): string {
  switch (category) {
    case "web":
      return "Web App";
    case "mobile":
      return "Mobile App";
    case "marketing":
      return "Digital Marketing";
    case "design":
      return "UI/UX Design";
    default:
      return category;
  }
}

export function getCategoryColor(category: string): string {
  switch (category) {
    case "web":
      return "bg-sky-100 text-sky-800 border-sky-200";
    case "mobile":
      return "bg-cyan-100 text-cyan-800 border-cyan-200";
    case "marketing":
      return "bg-violet-100 text-violet-800 border-violet-200";
    case "design":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    default:
      return "bg-slate-100 text-slate-800 border-slate-200";
  }
}

export function getProjectCategories(project: PortfolioProject): string[] {
  return Array.isArray(project.categories) ? project.categories : [project.category];
}
