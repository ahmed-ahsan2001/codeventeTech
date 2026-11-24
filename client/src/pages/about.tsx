import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  MessageCircle,
  Rocket,
  Shield,
  Eye,
  Code2,
  Sparkles,
  LayoutGrid,
  Users,
  Palette,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import PageHero from "@/components/layout/page-hero";
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";
import FadeInSection from "@/components/animations/FadeInSection";
import CountUp from "@/components/animations/CountUp";
import { MarqueeLight } from "@/components/effects/Marquee";
import { TrustLogoItems } from "@/components/trust-logo-strip";
import WhyCodeVenteSection from "@/components/sections/why-codevente";
import IndustriesSection from "@/components/sections/industries";
import TechnologiesSection from "@/components/sections/technologies";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroOffice from "@/assets/hero-office.png";
import { TEAM_MEMBERS, COMPANY_STATS, FAQ_ITEMS } from "@/lib/content";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";

const timeline = [
  { year: "2024", title: "CodeVente Founded", description: "Started with a vision to bridge innovative AI technology and startup growth." },
  { year: "2025", title: "First 10 Projects", description: "Delivered our first 10 client projects across web, mobile, and AI services." },
  { year: "2026", title: "50+ Projects Delivered", description: "Scaled operations with strong client satisfaction across 12+ industries." },
];

const values = [
  { title: "Ship Fast", desc: "Pragmatic delivery over endless planning.", icon: Rocket },
  { title: "Build Right", desc: "Production-grade code, not demo-quality patches.", icon: Shield },
  { title: "Stay Transparent", desc: "Clear timelines, honest scope, no surprises.", icon: Eye },
];

const studioHighlights = [
  "AI-first product engineering from MVP to scale",
  "ERPNext implementation for operations-heavy teams",
  "Remote-first delivery across Pakistan, GCC, and global startups",
  "Weekly demos, async updates, and founder-level communication",
];

const serviceIconMap: Record<string, typeof Code2> = {
  code: Code2,
  sparkles: Sparkles,
  "layout-grid": LayoutGrid,
  users: Users,
  palette: Palette,
  megaphone: Megaphone,
};

const aboutFaqs = FAQ_ITEMS.filter((item) =>
  ["Where is your team located?", "What types of projects does CodeVente take on?", "Do you work with early-stage startups?", "Do you implement and customize ERPNext?"].includes(
    item.question,
  ),
);

export default function About() {
  return (
    <>
      <SEOHead
        title="About CodeVente — Software Development Company in Karachi, Pakistan"
        description="CodeVente is an AI-first software development company in Karachi, Pakistan. We build web apps, mobile apps, ERPNext systems, and AI-powered products for startups worldwide."
        keywords="software development company Pakistan, software company Karachi, AI development agency, ERPNext partner, startup development team"
        canonicalPath="/about"
      />

      <PageHero
        eyebrow="About Us"
        title="Engineering the Future, One Startup at a Time"
        description="We're a team of engineers, designers, and AI specialists who think like founders — because we've been there."
      >
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2" asChild>
            <Link href="/contact">
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </PageHero>

      {/* Studio snapshot */}
      <section className="section-padding bg-white border-b border-slate-100">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeInSection direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50">
                <img
                  src={heroOffice}
                  alt="CodeVente team collaborating on software projects"
                  className="w-full aspect-[4/3] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-white/80 text-xs uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-white font-semibold text-lg">Karachi, Pakistan</p>
                  </div>
                  <div className="rounded-xl bg-white/95 backdrop-blur px-4 py-3 text-center">
                    <p className="text-2xl font-bold text-slate-900">50+</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">Projects</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection direction="right">
              <p className="eyebrow-light mb-3">Our Studio</p>
              <h2 className="heading-section text-slate-900 mb-4">A Product Team, Not a Ticket Queue</h2>
              <p className="text-lead-light mb-8">
                CodeVente combines design, full-stack engineering, AI integration, and ERP delivery under one roof — so
                startups get speed without sacrificing quality.
              </p>
              <ul className="space-y-3 mb-8">
                {studioHighlights.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="gap-2" asChild>
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="section-padding-sm bg-slate-50 border-b border-slate-100">
        <div className="section-container">
          <SectionHeader
            eyebrow="Trusted By"
            title="Teams Across Pakistan & Beyond"
            description="From e-commerce brands to operations-heavy businesses — we build software that ships."
            align="center"
          />
          <div className="mt-6">
            <MarqueeLight speed="slow">
              <TrustLogoItems />
            </MarqueeLight>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding section-dark">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection direction="left">
              <SectionHeader
                eyebrow="Mission"
                title="Building Software Startups Can Scale On"
                description="We deliver AI-powered web apps, mobile apps, and custom software that drive growth and create lasting competitive advantages."
                align="left"
              />
              <div className="mt-2 space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be the leading AI-first technology partner that transforms ideas into world-class digital products
                  — fostering innovation and success for clients worldwide.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {COMPANY_STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="card-light p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-3xl font-bold text-slate-900">
                      <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} duration={2} />
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <WhyCodeVenteSection />

      {/* Capabilities */}
      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="What We Build"
            title="Full-Stack Capabilities Under One Roof"
            description="Pick a lane or combine services — we scope honestly and ship in focused sprints."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((service, i) => {
              const Icon = serviceIconMap[service.icon] ?? Code2;
              return (
                <FadeInSection key={service.id} delay={i * 0.06} direction="up">
                  <Link href={`/services/${service.id}`} className="block h-full group">
                    <motion.div className="card-light p-7 h-full" whileHover={{ y: -4 }}>
                      <div className="w-11 h-11 rounded-xl bg-electric/5 border border-electric/10 flex items-center justify-center mb-4 group-hover:bg-electric/10 transition-colors">
                        <Icon className="w-5 h-5 text-electric" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-electric transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-3">{service.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-electric mt-4">
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </motion.div>
                  </Link>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* Values */}
      <section className="section-padding section-muted">
        <div className="section-container">
          <SectionHeader eyebrow="Values" title="How We Operate" description="Three principles that guide every engagement." />
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeInSection key={v.title} delay={i * 0.08} direction="up">
                  <motion.div className="card-light p-7 h-full" whileHover={{ y: -4 }}>
                    <div className="w-11 h-11 rounded-xl bg-electric/5 border border-electric/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-600">{v.desc}</p>
                  </motion.div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader eyebrow="Timeline" title="Our Journey" description="Key milestones in our growth." />
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-electric/50 via-electric/20 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <FadeInSection key={item.year} delay={index * 0.1} direction="up">
                  <div className="flex gap-6 items-start pl-2">
                    <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-xs font-bold text-electric">{item.year}</span>
                    </div>
                    <div className="card-light p-5 flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding section-dark">
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow="Team"
            title="The People Behind the Products"
            description="Passionate builders who ship."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-5 mt-4 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, i) => {
              const initials = member.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2);

              return (
                <FadeInSection key={member.name} delay={i * 0.1} direction="up">
                  <motion.div className="card-light overflow-hidden h-full" whileHover={{ y: -4 }}>
                    {"image" in member && member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-square object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-square bg-gradient-to-br from-electric/15 to-neon-purple/10 flex items-center justify-center border-b border-slate-100">
                        <span className="text-4xl font-bold text-electric/50">{initials}</span>
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-semibold text-slate-900">{member.name}</h3>
                      <p className="text-sm text-electric mb-2">{member.role}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
                    </div>
                  </motion.div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location & reach */}
      <section className="section-padding section-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <FadeInSection direction="left">
              <motion.div className="card-light p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Headquarters</p>
                    <p className="font-semibold text-slate-900">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  We're a Karachi-based software company working with startups and businesses across Pakistan, the GCC,
                  and international markets. Meetings are remote-first — with on-site workshops when you need them.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" className="gap-2" asChild>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/contact">Book a Call</Link>
                  </Button>
                </div>
              </motion.div>
            </FadeInSection>
            <FadeInSection direction="right">
              <motion.div className="card-light p-8 h-full border-electric/20 bg-gradient-to-br from-white to-electric/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-electric" />
                  </div>
                  <p className="font-semibold text-slate-900">Global delivery, local accountability</p>
                </div>
                <ul className="space-y-4">
                  {[
                    { label: "Time zones", value: "PKT · GST · flexible US/EU overlap" },
                    { label: "Engagement", value: "Fixed-scope projects & monthly retainers" },
                    { label: "ERP focus", value: "ERPNext for inventory, HR, finance & ops" },
                  ].map((row) => (
                    <li key={row.label} className="flex justify-between gap-4 text-sm border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-slate-500">{row.label}</span>
                      <span className="text-slate-900 font-medium text-right">{row.value}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/erpnext-implementation" className="inline-flex items-center gap-1 text-sm font-medium text-electric mt-6 hover:underline">
                  ERPNext implementation
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-muted">
        <div className="section-container max-w-3xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            description="Quick answers about how we work, where we're based, and what we build."
          />
          <Accordion type="single" collapsible className="w-full">
            {aboutFaqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`} className="card-light border border-slate-200 mb-3 px-5 rounded-xl overflow-hidden">
                <AccordionTrigger className="text-left font-medium text-slate-900 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 pb-5 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <TechnologiesSection />

      <CTABanner
        title="Want to Work With Us?"
        description="Whether you're launching a product or scaling an existing one — let's talk."
        primaryLabel="Get In Touch"
        primaryHref="/contact"
        secondaryLabel="View Careers"
        secondaryHref="/careers"
      />
    </>
  );
}