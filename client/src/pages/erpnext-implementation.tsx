import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Server,
  Settings,
  Database,
  Users,
  Shield,
  Globe,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import PageHero from "@/components/layout/page-hero";
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";
import FadeInSection from "@/components/animations/FadeInSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICE_DETAILS } from "@/lib/content";
import {
  ERP_KEYWORDS,
  ERP_PAGE_TITLE,
  ERP_PAGE_DESCRIPTION,
  ERP_OG_TITLE,
  ERP_CANONICAL_PATH,
  ERP_EXTENDED_FAQS,
  ERP_MODULES,
  erpAllJsonLd,
} from "@/lib/erp-seo";

const workflow = SERVICE_DETAILS["erp-implementation"].workflow;
const technologies = SERVICE_DETAILS["erp-implementation"].technologies;

const whyUs = [
  {
    icon: Settings,
    title: "Deep ERPNext Expertise",
    desc: "We have deployed production ERPNext systems for clients — not just demos. Real workflows, real data, real go-lives.",
  },
  {
    icon: Database,
    title: "End-to-End Delivery",
    desc: "From requirements audit to data migration, customization, deployment, training, and post-launch support.",
  },
  {
    icon: Server,
    title: "Cloud or On-Premise",
    desc: "Managed hosting on AWS/VPS with backups and monitoring, or deployment on your own infrastructure.",
  },
  {
    icon: Users,
    title: "Role-Based Training",
    desc: "Hands-on training for admins, accountants, warehouse teams, and managers — with documentation included.",
  },
  {
    icon: Shield,
    title: "Upgrade-Safe Customization",
    desc: "Custom DocTypes and workflows built on Frappe best practices so you can upgrade ERPNext without losing work.",
  },
  {
    icon: Globe,
    title: "Pakistan & Global Clients",
    desc: "Based in Karachi, serving businesses across Pakistan and internationally with remote implementation.",
  },
];

export default function ERPNextImplementation() {
  return (
    <>
      <SEOHead
        title={ERP_PAGE_TITLE}
        description={ERP_PAGE_DESCRIPTION}
        keywords={ERP_KEYWORDS}
        ogTitle={ERP_OG_TITLE}
        ogDescription={ERP_PAGE_DESCRIPTION}
        canonicalPath={ERP_CANONICAL_PATH}
        jsonLd={erpAllJsonLd()}
      />

      <PageHero
        eyebrow="ERPNext Implementation Partner"
        title={
          <>
            ERPNext Implementation &{" "}
            <span className="gradient-text">Customization Services</span>
          </>
        }
        description="We deploy, customize, and manage ERPNext for businesses in Pakistan and worldwide — accounting, inventory, HR, manufacturing, and more. Recently deployed for production clients."
      >
        <Link href="/contact">
          <Button size="lg" className="btn-primary-gradient rounded-xl px-10 py-6 gap-2">
            Get Free ERP Consultation
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </PageHero>

      {/* SEO-rich intro content */}
      <section className="section-padding section-light" aria-labelledby="erp-intro-heading">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <FadeInSection direction="up">
              <h2 id="erp-intro-heading" className="heading-section text-slate-900 mb-6">
                Expert ERPNext Implementation in Pakistan
              </h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong>CodeVente</strong> is an ERPNext implementation partner based in{" "}
                  <strong>Karachi, Pakistan</strong>, helping businesses replace spreadsheets and
                  legacy systems with a unified, open-source ERP platform. We recently deployed
                  ERPNext for production clients — customizing modules, migrating data, and
                  training teams for successful go-lives.
                </p>
                <p>
                  Whether you need a standard ERPNext setup with accounting and inventory, or a
                  fully customized system with manufacturing workflows and third-party integrations,
                  our team handles the entire lifecycle: discovery, configuration, customization,
                  data migration, deployment, and ongoing support.
                </p>
                <p>
                  ERPNext runs on the <strong>Frappe framework</strong> — giving you enterprise-grade
                  capabilities without per-user licensing fees. As your ERPNext consultant, we ensure
                  the system matches your business processes, not the other way around.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-electric" />
                Serving Karachi, Lahore, Islamabad, and clients worldwide
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-padding section-dark" aria-labelledby="erp-modules-heading">
        <div className="section-container relative z-10">
          <FadeInSection direction="up">
            <SectionHeader
              eyebrow="Modules"
              title="ERPNext Modules We Implement"
              description="Configure only what you need — scale as your business grows."
              dark
              align="center"
            />
          </FadeInSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {ERP_MODULES.map((mod, i) => (
              <FadeInSection key={mod.name} delay={i * 0.06} direction="up">
                <article className="card-holographic p-6 h-full">
                  <h3 className="font-semibold text-white mb-2">{mod.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{mod.desc}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why CodeVente */}
      <section className="section-padding section-light" aria-labelledby="erp-why-heading">
        <div className="section-container">
          <SectionHeader
            eyebrow="Why CodeVente"
            title="Your ERPNext Implementation Partner"
            description="Technical depth meets business process expertise."
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={item.title} delay={i * 0.07} direction="up">
                  <div className="card-light p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-electric/5 border border-electric/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding section-muted" aria-labelledby="erp-process-heading">
        <div className="section-container">
          <SectionHeader
            eyebrow="Process"
            title="Our ERPNext Implementation Process"
            description="A proven 4-phase approach from audit to go-live."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {workflow.map((step, i) => (
              <FadeInSection key={step.step} delay={i * 0.08} direction="up">
                <motion.div className="card-light p-6 h-full" whileHover={{ y: -4 }}>
                  <span className="text-3xl font-bold text-electric/20">{step.step}</span>
                  <h3 className="font-semibold text-slate-900 mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section-padding-sm section-dark border-y border-white/[0.06]">
        <div className="section-container relative z-10 text-center">
          <h2 className="text-lg font-semibold text-white mb-8">ERPNext Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Extended FAQ for SEO + schema */}
      <section className="section-padding section-light" aria-labelledby="erp-faq-heading">
        <div className="section-container max-w-3xl">
          <SectionHeader
            eyebrow="FAQ"
            title="ERPNext Implementation — Frequently Asked Questions"
            description="Everything businesses ask before starting an ERP project."
            align="center"
          />
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {ERP_EXTENDED_FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`erp-faq-${i}`}
                className="card-light px-6 rounded-2xl border data-[state=open]:border-electric/20"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related services internal links */}
      <section className="section-padding-sm section-muted border-t border-slate-100">
        <div className="section-container text-center">
          <p className="text-sm text-slate-500 mb-4">Related services</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/web-development">
              <span className="text-sm font-medium text-electric hover:underline cursor-pointer">
                Web & App Development
              </span>
            </Link>
            <Link href="/services/ai-solutions">
              <span className="text-sm font-medium text-electric hover:underline cursor-pointer">
                AI Solutions
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-sm font-medium text-electric hover:underline cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Implement ERPNext?"
        description="Book a free requirements audit. We'll map your processes, recommend modules, and provide a fixed-price quote."
        primaryLabel="Get Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </>
  );
}
