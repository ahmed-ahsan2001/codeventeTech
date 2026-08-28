import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  GraduationCap,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Building2,
  BarChart3,
  Target,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import NewsletterSignup from "@/components/newsletter-signup";
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";
import CountUp from "@/components/animations/CountUp";
import FadeInSection from "@/components/animations/FadeInSection";
import { MarqueeLight } from "@/components/effects/Marquee";
import AIExpertiseSection from "@/components/sections/ai-expertise";
import IndustriesSection from "@/components/sections/industries";
import TechnologiesSection from "@/components/sections/technologies";
import WhyCodeVenteSection from "@/components/sections/why-codevente";
import FAQSection from "@/components/sections/faq-section";
import BlogPreviewSection from "@/components/sections/blog-preview";
import { PORTFOLIO_PROJECTS, COMPANY_INFO } from "@/lib/constants";
import { TRUST_LOGOS } from "@/lib/content";
import { getCaseStudyPath } from "@/lib/portfolio";
import { organizationJsonLd, webSiteJsonLd, localBusinessJsonLd } from "@/lib/seo";

export default function Home() {
  const recentProjects = PORTFOLIO_PROJECTS.slice(0, 3);
  const featuredProject = recentProjects[0];
  const supportingProjects = recentProjects.slice(1);

  const processSteps = [
    {
      title: "Audit & Plan",
      description: "We assess your product — web, mobile, or AI — identify risks, and define a prioritized roadmap to production.",
      icon: Building2,
    },
    {
      title: "Build & Harden",
      description: "Refactor architecture, implement auth, security, CI/CD, and monitoring for core flows.",
      icon: Rocket,
    },
    {
      title: "Launch & Scale",
      description: "Final QA, performance checks, and a technical summary ready for investors and real users.",
      icon: BarChart3,
    },
  ];

  const whatsappNumber = COMPANY_INFO?.whatsapp || "+923122739457";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in starting a project with CodeVente.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${whatsappMessage}`;

  return (
    <>
      <SEOHead
        title="CodeVente — ERPNext Implementation, AI & Software Development | Pakistan"
        description="ERPNext implementation partner in Pakistan. CodeVente deploys, customizes, and manages ERPNext plus AI-powered web and mobile apps for startups and businesses."
        keywords="ERPNext implementation Pakistan, ERPNext consultant Karachi, ERP customization, AI development, software agency Pakistan, ERPNext deployment"
        canonicalPath="/"
        jsonLd={[organizationJsonLd(), webSiteJsonLd(), localBusinessJsonLd()]}
      />

      <HeroSection />

      {/* Trust bar */}
      <section className="section-padding-sm bg-white border-y border-slate-100">
        <div className="section-container">
          <SectionHeader
            eyebrow="Trusted By"
            title="Growing Brands Across Pakistan & Beyond"
            align="center"
          />
          <div className="mt-10">
            <MarqueeLight speed="slow">
              {TRUST_LOGOS.map((logo) => (
                <div key={logo} className="trust-pill min-w-[180px] mx-2">
                  {logo}
                </div>
              ))}
            </MarqueeLight>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="relative section-padding section-dark overflow-hidden border-y border-white/[0.06]">
        <div className="section-container relative z-10">
          <FadeInSection direction="up">
            <SectionHeader
              eyebrow="Impact"
              title="Numbers That Speak"
              description="Real results from startups and businesses who trusted us with their vision."
              dark
              align="center"
            />
          </FadeInSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mt-14">
            {[
              { icon: Target, label: "Projects Delivered", value: 50, suffix: "+", color: "text-cyan-400" },
              { icon: Sparkles, label: "Client Satisfaction", value: 95, suffix: "%", color: "text-neon-purple" },
              { icon: TrendingUp, label: "Industries Served", value: 12, suffix: "+", color: "text-electric" },
              { icon: Zap, label: "Avg. Speed Increase", value: 2.4, suffix: "x", color: "text-cyan-400", decimals: 1 },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <FadeInSection key={stat.label} delay={index * 0.08} direction="up">
                  <motion.div
                    className="card-holographic p-6 text-center group"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                    <div className="text-4xl font-bold text-white mb-1">
                      <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} duration={2.5} />
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesOverview />

      <section className="section-padding-sm section-dark border-y border-white/[0.06]">
        <div className="section-container relative z-10">
          <FadeInSection direction="up">
            <div className="card-holographic p-8 md:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <p className="eyebrow mb-2">ERPNext Services</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  ERPNext Implementation in Pakistan
                </h2>
                <p className="text-slate-400 max-w-xl">
                  Deploy, customize, and manage ERPNext for accounting, inventory, HR, and
                  manufacturing — recently delivered for production clients.
                </p>
              </div>
              <Link href="/erpnext-implementation">
                <Button className="btn-primary-gradient rounded-xl px-8 py-6 gap-2 whitespace-nowrap">
                  ERPNext Implementation Guide
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <AIExpertiseSection />
      <IndustriesSection />

      {/* Process */}
      <section className="relative section-padding section-dark overflow-hidden">
        <div className="section-container relative z-10">
          <FadeInSection direction="up">
            <SectionHeader
              eyebrow="Process"
              title="A Process Built for Real Launches"
              description="Strategy without shipping is noise. We work in focused cycles — audit, harden, launch."
              dark
              align="center"
            />
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-5 mt-16 relative">
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px glow-line" />

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeInSection key={step.title} delay={index * 0.12} direction="up">
                  <motion.div
                    className="card-holographic p-8 h-full group relative"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-4 right-4 text-6xl font-bold text-white/[0.03] select-none">
                      0{index + 1}
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-electric/40 transition-all">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <p className="text-[10px] font-bold text-electric uppercase tracking-[0.2em] mb-3">
                        Step {index + 1}
                      </p>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured Work"
            description="Recent projects where design, engineering, and growth worked together."
            align="center"
          />

          <div className="grid lg:grid-cols-12 gap-5 mt-14 items-stretch">
            <Link href={getCaseStudyPath(featuredProject.slug)} className="lg:col-span-7 block group">
              <motion.div
                className="card-light overflow-hidden h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative min-h-[220px] md:min-h-full overflow-hidden">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <span className="badge-glow mb-3">Featured Project</span>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-electric transition-colors">
                        {featuredProject.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3">{featuredProject.description}</p>
                      <p className="text-xs text-slate-400">{featuredProject.technologies}</p>
                    </div>
                    <p className="text-sm font-semibold text-electric mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read case study <ArrowRight className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            <div className="lg:col-span-5 flex flex-col gap-4">
              {supportingProjects.map((project, index) => (
                <Link key={project.id} href={getCaseStudyPath(project.slug)} className="block group flex-1">
                  <motion.div
                    className="card-light p-5 md:p-6 h-full"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-electric transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2">{project.description}</p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-electric/5 group-hover:bg-electric flex items-center justify-center flex-shrink-0 transition-colors">
                        <ArrowRight className="w-4 h-4 text-electric group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button className="btn-primary-gradient gap-2 px-8 py-6 text-base rounded-xl">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      <TechnologiesSection />
      <WhyCodeVenteSection />

      {/* Assurance */}
      <section className="section-padding-sm section-dark border-y border-white/[0.06]">
        <div className="section-container relative z-10">
          <motion.div
            className="card-glass p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Built for reliability, speed, and long-term scale
                </h3>
                <p className="text-slate-400 text-sm">
                  From architecture to QA — every delivery is production-focused and maintainable.
                </p>
              </div>
            </div>
            <Link href="/contact">
              <Button className="btn-primary-gradient whitespace-nowrap rounded-xl px-8 py-6">
                Discuss Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <FAQSection />
      <BlogPreviewSection />

      {/* Courses CTA */}
      <section className="section-padding section-muted">
        <div className="section-container">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-void border border-white/10 p-8 md:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="aurora-bg" />
            <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="eyebrow mb-3">Learn With Us</p>
                <h2 className="heading-section text-white mb-3">
                  Upskill With Practical, Expert-Led Training
                </h2>
                <p className="text-slate-400">
                  Web, mobile, AI, and product design — with real project workflows.
                </p>
              </div>
              <div className="lg:text-right">
                <Link href="/courses">
                  <Button size="lg" className="btn-outline-light rounded-xl px-8 py-6 gap-2">
                    <GraduationCap className="w-5 h-5" />
                    View All Courses
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <NewsletterSignup />

      <CTABanner
        title="Ready to Build Something Extraordinary?"
        description="Book a free technical audit. We'll assess your product idea and outline a clear path to production."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-xl shadow-emerald-500/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
