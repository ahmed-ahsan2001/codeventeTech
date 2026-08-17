import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Rocket, Shield, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import PageHero from "@/components/layout/page-hero";
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";
import FadeInSection from "@/components/animations/FadeInSection";
import CountUp from "@/components/animations/CountUp";
import TechnologiesSection from "@/components/sections/technologies";
import { TEAM_MEMBERS, COMPANY_STATS } from "@/lib/content";

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

export default function About() {
  return (
    <>
      <SEOHead
        title="About CodeVente — AI & Software Development Agency"
        description="CodeVente is an AI-first software development agency helping startups build web apps, mobile apps, and AI-powered products."
        keywords="about codevente, AI software agency, startup development team"
        canonicalPath="/about"
      />

      <PageHero
        eyebrow="About Us"
        title="Engineering the Future, One Startup at a Time"
        description="We're a team of engineers, designers, and AI specialists who think like founders — because we've been there."
      />

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
                dark
              />
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-white">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  To be the leading AI-first technology partner that transforms ideas into
                  world-class digital products — fostering innovation and success for clients worldwide.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {COMPANY_STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="card-holographic p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-3xl font-bold text-white">
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

      {/* Values */}
      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader eyebrow="Values" title="How We Operate" description="Three principles that guide every engagement." />
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeInSection key={v.title} delay={i * 0.08} direction="up">
                  <motion.div className="card-light p-7" whileHover={{ y: -4 }}>
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
      <section className="section-padding section-muted">
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
            dark
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-5 mt-4 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member, i) => (
              <FadeInSection key={member.name} delay={i * 0.1} direction="up">
                <motion.div className="card-holographic overflow-hidden" whileHover={{ y: -4 }}>
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" loading="lazy" />
                  <div className="p-5">
                    <h3 className="font-semibold text-white">{member.name}</h3>
                    <p className="text-sm text-electric mb-2">{member.role}</p>
                    <p className="text-xs text-slate-500">{member.bio}</p>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
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
