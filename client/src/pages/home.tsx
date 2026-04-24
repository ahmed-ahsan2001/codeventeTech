import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  GraduationCap,
  MessageCircle,
  BarChart3,
  Rocket,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import NewsletterSignup from "@/components/newsletter-signup";
import { PORTFOLIO_PROJECTS, COMPANY_INFO } from "@/lib/constants"; // ✅ optional: use company info if phone available

export default function Home() {
  const recentProjects = PORTFOLIO_PROJECTS.slice(0, 3);
  const featuredProject = recentProjects[0];
  const supportingProjects = recentProjects.slice(1);
  const trustLogos = ["Zakaria Masjid", "AK Impression", "Khadija Tul Kubra", "Quran App"];
  const impactStats = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Client Satisfaction", value: "95%" },
    { label: "Industries Served", value: "12+" },
    { label: "Avg. Delivery Speed Up", value: "2.4x" },
  ];
  const processSteps = [
    {
      title: "Discover & Align",
      description: "We define goals, audience, and the exact outcomes your business needs from digital execution.",
      icon: Building2,
    },
    {
      title: "Build & Launch",
      description: "Our team designs, develops, and ships with speed using modern stacks and pragmatic delivery.",
      icon: Rocket,
    },
    {
      title: "Measure & Scale",
      description: "We optimize conversion, performance, and growth loops with data-backed iteration.",
      icon: BarChart3,
    },
  ];
  const getPrimaryCategory = (project: any) =>
    Array.isArray(project.categories) && project.categories.length > 0
      ? project.categories[0]
      : project.category;
  const getCategoryTextClass = (category: string) => {
    if (category === "web") return "text-blue-600";
    if (category === "mobile") return "text-cyan-600";
    if (category === "marketing") return "text-violet-600";
    return "text-emerald-600";
  };
  const getCategoryLabel = (project: any) => {
    const categories = Array.isArray(project.categories) ? project.categories : [project.category];
    if (categories.includes("web") && categories.includes("mobile")) return "Web & Mobile Development";
    const primaryCategory = getPrimaryCategory(project);
    if (primaryCategory === "web") return "Web Development";
    if (primaryCategory === "mobile") return "Mobile Development";
    if (primaryCategory === "marketing") return "Digital Marketing";
    return "UI/UX Design";
  };
 

  // ✅ Define your WhatsApp link — replace with your business number
  const whatsappNumber = COMPANY_INFO?.whatsapp || "+923122739457";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your services.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${whatsappMessage}`;

  return (
    <>
      <SEOHead />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar */}
      <section className="py-12 bg-white border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-center text-sm uppercase tracking-[0.24em] text-slate-500 mb-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Trusted by Growing Brands
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {trustLogos.map((logo, index) => (
              <motion.div
                key={logo}
                className="rounded-xl border border-sky-100 bg-sky-50/70 px-4 py-4 text-center text-slate-700 font-medium"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-5 marquee-track hover:[animation-play-state:paused]">
              {[...impactStats, ...impactStats].map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className="bg-slate-900/70 border border-sky-800/50 rounded-2xl p-6 min-w-[240px] sm:min-w-[260px] lg:min-w-[280px] flex-shrink-0"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesOverview />

      {/* Delivery Process */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">A Process Built for Execution</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Strategy without shipping is noise. We work in focused cycles to deliver measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="rounded-2xl border border-sky-800/60 bg-slate-900/70 p-7"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-11 h-11 rounded-lg bg-slate-800 border border-sky-800/60 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-primary font-semibold mb-2">{`Step 0${index + 1}`}</p>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Featured Work */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-xl text-slate-300">
              A selection of recent projects where design, engineering, and growth worked together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
            <motion.div
              className="lg:col-span-7 bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative min-h-[170px] md:min-h-[260px]">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-8 flex flex-col justify-between">
                  <div>
                    <p className={`text-sm font-semibold uppercase tracking-wide mb-3 ${getCategoryTextClass(getPrimaryCategory(featuredProject))}`}>
                      Featured Project
                    </p>
                    <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">{featuredProject.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-5 line-clamp-3 md:line-clamp-none">{featuredProject.description}</p>
                    <p className="text-xs md:text-sm text-slate-500 line-clamp-1">{featuredProject.technologies}</p>
                  </div>
                  <div className="pt-4 md:pt-6">
                    <span className={`text-sm font-medium ${getCategoryTextClass(getPrimaryCategory(featuredProject))}`}>
                      {getCategoryLabel(featuredProject)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 space-y-3 md:space-y-6">
              {supportingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl border border-sky-100 p-4 md:p-6 shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1.5 md:mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-2 md:mb-3 line-clamp-2">{project.description}</p>
                    <span className={`text-sm font-medium ${getCategoryTextClass(getPrimaryCategory(project))}`}>
                      {getCategoryLabel(project)}
                    </span>
                  </div>
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-sky-50 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                </div>
              </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio">
              <Button
                size="lg"
                className="bg-brand-gradient text-white px-8 py-3 font-semibold hover:opacity-95 transition-all duration-200"
              >
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Assurance Strip */}
      <section className="py-14 bg-brand-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl border border-sky-800/60 bg-slate-900/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white">Built for reliability, speed, and long-term scale</h3>
                <p className="text-slate-300">From architecture to QA, every delivery is production-focused and maintainable.</p>
              </div>
            </div>
            <Link href="/contact">
              <Button className="bg-brand-gradient text-white hover:opacity-95">Discuss Your Project</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Learning CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-brand-gradient animate-gradient-shift rounded-3xl p-8 md:p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold mb-4">Learn New Skills With Practical Training</h2>
                <p className="text-sky-100 text-lg">
                  Upskill in web, mobile, product design, and growth marketing with expert-led guidance and real project workflows.
                </p>
              </div>
              <div className="lg:text-right">
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-white text-[#145983] px-8 py-3 font-semibold hover:bg-sky-50 transition-all duration-200"
                  >
                    <GraduationCap className="w-5 h-5 mr-2" />
                    View All Courses
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* ✅ WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
