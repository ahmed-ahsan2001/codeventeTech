import { motion } from "framer-motion";
import SEOHead from "@/components/seo-head";
import PageHero from "@/components/layout/page-hero";
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";

export default function About() {
  const timeline = [
    {
      year: "2024",
      title: "CodeVente Founded",
      description: "Started with a vision to bridge the gap between innovative technology and business growth.",
    },
    {
      year: "2025",
      title: "First 10 Projects",
      description: "Successfully delivered our first 10 client projects across web, mobile, and digital growth services.",
    },
    {
      year: "2026",
      title: "50+ Projects Delivered",
      description: "Scaled delivery operations and crossed 50+ completed projects with strong client satisfaction.",
    },
  ];

  const values = [
    { title: "Ship Fast", desc: "Pragmatic delivery over endless planning." },
    { title: "Build Right", desc: "Production-grade code, not demo-quality patches." },
    { title: "Stay Transparent", desc: "Clear timelines, honest scope, no surprises." },
  ];

  return (
    <>
      <SEOHead
        title="About CodeVente - AI & Software Development for Startups"
        description="CodeVente is an AI and software development agency helping startups build web apps, mobile apps, and AI-powered products. Meet our team and discover our mission."
        keywords="about codevente, AI software agency, startup development team, mobile app developers, web development team"
        canonicalPath="/about"
      />

      <PageHero
        eyebrow="About Us"
        title="An AI & Software Agency for Startups"
        description="We help ambitious teams ship web apps, mobile apps, and AI-powered software — with strategy, design, and engineering under one roof."
      />

      <section className="section-padding section-dark">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
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
                  To be the leading technology partner that transforms ideas into impactful
                  digital experiences — fostering innovation and success for clients worldwide.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden border border-sky-800/40 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Team collaboration"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="Values"
            title="How We Operate"
            description="Three principles that guide every engagement."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="card-light p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="section-container">
          <SectionHeader
            eyebrow="Timeline"
            title="Our Journey"
            description="Key milestones in our growth and evolution."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="card-light p-6 flex gap-6 items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
