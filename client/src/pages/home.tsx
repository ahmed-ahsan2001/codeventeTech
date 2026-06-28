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
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";
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
      <section className="section-padding-sm section-muted">
        <div className="section-container">
          <SectionHeader
            eyebrow="Trusted By"
            title="Growing Brands Across Pakistan & Beyond"
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {trustLogos.map((logo, index) => (
              <motion.div
                key={logo}
                className="trust-pill"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="section-padding-sm section-dark border-y border-white/5">
        <div className="section-container relative z-10">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-4 marquee-track hover:[animation-play-state:paused]">
              {[...impactStats, ...impactStats].map((stat, index) => (
                <div key={`${stat.label}-${index}`} className="stat-pill min-w-[220px] md:min-w-[260px] flex-shrink-0">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* Process */}
      <section className="section-padding section-dark">
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow="How We Work"
            title="A Process Built for Real Launches"
            description="Strategy without shipping is noise. We work in focused cycles — audit, harden, launch."
            dark
          />
          <div className="grid md:grid-cols-3 gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="card-dark p-7"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sky-300" />
                    </div>
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                      Step 0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
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
