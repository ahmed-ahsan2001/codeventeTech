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
  Sparkles,
  Zap,
  Target,
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
import GradientOrb from "@/components/effects/GradientOrb";
import { PORTFOLIO_PROJECTS, COMPANY_INFO } from "@/lib/constants";
import { getCaseStudyPath } from "@/lib/portfolio";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo";

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
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your services.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${whatsappMessage}`;

  return (
    <>
      <SEOHead
        canonicalPath="/"
        jsonLd={[organizationJsonLd(), webSiteJsonLd()]}
      />

      <HeroSection />

      {/* Trust bar */}
      <section className="section-padding-sm bg-gradient-to-b from-slate-50 to-white border-y border-slate-100">
        <div className="section-container">
          <SectionHeader
            eyebrow="Trusted By"
            title="Growing Brands Across Pakistan & Beyond"
            align="center"
          />

          {/* Marquee animation */}
          <div className="relative mt-12">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex gap-8 w-max"
                animate={{
                  x: [0, -1000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {[...trustLogos, ...trustLogos, ...trustLogos].map((logo, index) => (
                  <div
                    key={`${logo}-${index}`}
                    className="trust-pill min-w-[200px] group hover:scale-105 hover:shadow-lg hover:border-cyan-300 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{logo}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="relative section-padding section-dark border-y border-white/5 overflow-hidden">
        <GradientOrb size={600} color="cyan" blur={140} opacity={0.15} className="top-1/2 left-1/4" />
        <GradientOrb size={500} color="purple" blur={120} opacity={0.12} className="bottom-0 right-1/3" />

        <div className="section-container relative z-10">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Built for <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Real results from startups and businesses who trusted us with their vision
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, label: "Projects Delivered", value: 50, suffix: "+", color: "cyan" },
              { icon: Sparkles, label: "Client Satisfaction", value: 95, suffix: "%", color: "purple" },
              { icon: TrendingUp, label: "Industries Served", value: 12, suffix: "+", color: "blue" },
              { icon: Zap, label: "Avg. Speed Increase", value: 2.4, suffix: "x", color: "cyan" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <FadeInSection key={stat.label} delay={index * 0.1} direction="up">
                  <motion.div
                    className="card-holographic p-6 text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.suffix === "x" ? 1 : 0}
                        duration={2.5}
                      />
                    </div>
                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                  </motion.div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* Process */}
      <section className="relative section-padding section-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="section-container relative z-10">
          <FadeInSection direction="up">
            <SectionHeader
              eyebrow="How We Work"
              title="A Process Built for Real Launches"
              description="Strategy without shipping is noise. We work in focused cycles — audit, harden, launch."
              dark
            />
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12 relative">
            {/* Connecting lines */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeInSection
                  key={step.title}
                  delay={index * 0.15}
                  direction="up"
                  className="relative"
                >
                  <motion.div
                    className="card-holographic p-8 h-full group"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step number background */}
                    <div className="absolute top-4 right-4 text-7xl font-bold text-white/5 select-none">
                      0{index + 1}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                          <Icon className="w-7 h-7 text-cyan-400" />
                        </div>
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                          Step {index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Hover indicator */}
                      <div className="mt-6 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-cyan-400 animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Featured work */}
      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured Work"
            description="Recent projects where design, engineering, and growth worked together."
          />

          <div className="grid lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
            {/* Featured project — col-span must be on direct grid child */}
            <Link
              href={getCaseStudyPath(featuredProject.slug)}
              className="lg:col-span-7 block group"
            >
              <motion.div
                className="card-light overflow-hidden h-full hover:-translate-y-1 transition-transform cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative min-h-[220px] md:min-h-full md:aspect-auto">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        Featured Project
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {featuredProject.title}
                      </h3>
                      <p className="text-slate-600 text-sm md:text-base mb-3">
                        {featuredProject.description}
                      </p>
                      <p className="text-xs text-slate-500">{featuredProject.technologies}</p>
                    </div>
                    <p className="text-sm font-medium text-primary mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read case study <ArrowRight className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Supporting projects */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {supportingProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={getCaseStudyPath(project.slug)}
                  className="block group flex-1"
                >
                  <motion.div
                    className="card-light p-5 md:p-6 h-full hover:-translate-y-1 transition-all cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2">{project.description}</p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-sky-50 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio">
              <Button className="btn-primary-gradient gap-2 px-8 py-6 text-base rounded-xl">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Assurance */}
      <section className="section-padding-sm section-dark">
        <div className="section-container relative z-10">
          <motion.div
            className="card-glass p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Built for reliability, speed, and long-term scale
                </h3>
                <p className="text-slate-400 text-sm">
                  From architecture to QA — every delivery is production-focused and maintainable.
                </p>
              </div>
            </div>
            <Link href="/contact">
              <Button className="btn-primary-gradient whitespace-nowrap rounded-xl px-6">
                Discuss Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Courses CTA */}
      <section className="section-padding section-muted">
        <div className="section-container">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-brand-gradient animate-gradient-shift p-8 md:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="hero-mesh" />
            <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="eyebrow mb-3">Learn With Us</p>
                <h2 className="heading-section text-white mb-3">
                  Upskill With Practical, Expert-Led Training
                </h2>
                <p className="text-sky-100/90">
                  Web, mobile, AI, and product design — with real project workflows.
                </p>
              </div>
              <div className="lg:text-right">
                <Link href="/courses">
                  <Button size="lg" className="btn-outline-dark rounded-xl px-8 py-6 text-base gap-2">
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
        title="Ready to Launch?"
        description="Book a free technical audit. We'll assess your product idea — web, mobile, or AI — and outline a clear path to production."
        primaryLabel="Book Free Audit"
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
