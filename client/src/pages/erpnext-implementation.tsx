import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Database,
  Factory,
  GraduationCap,
  Headset,
  MapPin,
  Plug,
  Settings,
  ShoppingBag,
  Star,
  Store,
  Truck,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";
import FadeInSection from "@/components/animations/FadeInSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TESTIMONIALS } from "@/lib/constants";
import { SERVICE_DETAILS } from "@/lib/content";
import ErpFeatureSection, { ErpFeatureBlock } from "@/components/sections/erp-feature-section";
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
import erpTrainingSupport from "@/assets/erp/training-support.png";
import erpAccountsDashboard from "@/assets/erp/accounts-dashboard.png";
import erpMigrationCloud from "@/assets/erp/migration-cloud.png";
import erpIntegrations from "@/assets/erp/integrations.png";

const workflow = SERVICE_DETAILS["erp-implementation"].workflow;

const methodologySteps = [
  "Process mapping and requirements analysis",
  "ERPNext implementation and configuration",
  "Data migration and system integration",
  "User training and acceptance testing",
  "Go-live support and post-launch optimization",
];
const technologies = SERVICE_DETAILS["erp-implementation"].technologies;

const IMAGES = {
  dashboard:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  meeting:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  manufacturing:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  warehouse:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  training:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  office:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  retail:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  analytics:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
};

const services = [
  {
    icon: ClipboardList,
    title: "ERPNext Consulting Services",
    desc: "We map how you actually buy, sell, stock, and close books — then design an implementation roadmap around those processes, not a generic template.",
    image: IMAGES.meeting,
  },
  {
    icon: Settings,
    title: "ERPNext Customization Services",
    desc: "Custom DocTypes, workflows, print formats, dashboards, and reports on Frappe — upgrade-safe, so future ERPNext versions do not wipe your work.",
    image: IMAGES.dashboard,
  },
  {
    icon: Plug,
    title: "ERPNext Integration Services",
    desc: "Connect ERPNext to e-commerce, JazzCash, EasyPaisa, Stripe, shipping, biometrics, and internal tools through APIs and webhooks.",
    image: IMAGES.analytics,
  },
  {
    icon: Database,
    title: "ERPNext Migration Services",
    desc: "Move data from Excel, QuickBooks, Tally, or a legacy ERP with validation, reconciliation, and a parallel run before cutover.",
    image: IMAGES.office,
  },
  {
    icon: Cloud,
    title: "Cloud & On-Premise Deployment",
    desc: "Managed hosting on AWS or a VPS with backups and SSL, or a hardened install on your own servers with full handover.",
    image: IMAGES.dashboard,
  },
  {
    icon: GraduationCap,
    title: "ERPNext Training Services",
    desc: "Role-based sessions for admins, accountants, warehouse teams, and managers — plus recordings and written guides.",
    image: IMAGES.training,
  },
  {
    icon: Headset,
    title: "Support & Maintenance",
    desc: "Go-live hypercare, then ongoing updates, issue resolution, and performance monitoring so the system stays stable.",
    image: IMAGES.meeting,
  },
];

const industries = [
  {
    icon: Store,
    title: "ERPNext for Retail",
    desc: "Inventory, POS-ready stock, pricing, and live sales reporting across stores and warehouses.",
    image: IMAGES.retail,
  },
  {
    icon: Factory,
    title: "ERPNext for Manufacturing",
    desc: "BOMs, work orders, production planning, job cards, and quality checks on the shop floor.",
    image: IMAGES.manufacturing,
  },
  {
    icon: Truck,
    title: "Trading & Distribution",
    desc: "Purchasing, warehouse transfers, landed cost, and finance in one flow for import/export businesses.",
    image: IMAGES.warehouse,
  },
  {
    icon: ShoppingBag,
    title: "SMEs & Service Businesses",
    desc: "Accounting, CRM, projects, and HR without SAP-level cost or complexity.",
    image: IMAGES.office,
  },
];

const pakistanPoints = [
  "Sales tax, withholding, and chart of accounts configured for Pakistani operations",
  "Multi-company and multi-warehouse for groups trading from Karachi, Lahore, and Islamabad",
  "Print formats and numbering that match how finance teams actually file",
  "On-site discovery in major cities and fully remote delivery nationwide",
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

      <section className="relative overflow-hidden bg-white border-b border-slate-100 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="aurora-bg opacity-60" />
        <div className="hero-mesh" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="eyebrow-light mb-5">ERPNext Implementation Partner in Pakistan</p>
              <h1 className="heading-display text-slate-900 mb-6">
                Why CodeVente should be your{" "}
                <span className="gradient-text">ERPNext implementation partner</span> in Pakistan
              </h1>
              <p className="text-lead mb-8">
                End-to-end ERPNext consulting, customization, migration, and go-live — configured
                for Pakistani tax, inventory, and operations. Recently deployed for production clients.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Business-first implementation, not a generic install",
                  "Industry settings for retail, manufacturing, and trading",
                  "Cloud or on-premise, with support after go-live",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mb-8 text-sm text-slate-600">
                <span className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </span>
                <span>
                  5.0 from {TESTIMONIALS.length} client reviews
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="btn-primary-gradient rounded-xl px-8 py-6 gap-2">
                    Request a free audit
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" className="btn-outline-light rounded-xl px-8 py-6">
                    See our work
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                <img
                  src={erpAccountsDashboard}
                  alt="ERPNext Accounts Dashboard with financial charts and ageing reports"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 md:left-8 md:right-auto md:w-64 card-glass p-4">
                <p className="text-xs uppercase tracking-wider text-electric mb-1">Live systems</p>
                <p className="text-slate-900 font-semibold">Production ERPNext go-lives in Pakistan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light" aria-labelledby="erp-intro-heading">
        <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src={IMAGES.office}
                alt="CodeVente team planning an ERPNext rollout"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <h2 id="erp-intro-heading" className="heading-section text-slate-900 mb-6">
              ERPNext implementation services in Pakistan
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong>CodeVente</strong> is an ERPNext implementation partner based in{" "}
                <strong>Karachi</strong>. We help businesses replace spreadsheets and disconnected
                tools with one system for finance, inventory, sales, HR, and production.
              </p>
              <p>
                Implementing ERPNext is not only a software install. It is process design, data
                cleanup, user adoption, and a stable go-live. We handle the full lifecycle:
                discovery, configuration, customization, migration, training, and support.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-slate-500">
              <MapPin className="w-4 h-4 text-electric" />
              Karachi, Lahore, Islamabad, and remote teams worldwide
            </div>
          </FadeInSection>
        </div>
      </section>

      <ErpFeatureSection
        eyebrow="Training & Support"
        title="ERPNext training and long-term support"
        image={erpTrainingSupport}
        imageAlt="ERPNext role-based training dashboards and support ticket summary"
        imageFirst
        className="section-muted"
      >
        <ErpFeatureBlock title="ERPNext training services">
          The success of ERP depends on user adoption. We offer role-based training in ERPNext so your
          finance, warehouse, sales, and admin teams are confident on day one — with session
          recordings, guides, and hands-on practice on your actual data.
        </ErpFeatureBlock>
        <ErpFeatureBlock title="ERPNext support and maintenance">
          We are not done at go-live. Our support services include ongoing technical help, performance
          monitoring, issue resolution, security updates, and maintenance so your ERPNext system
          stays stable as your business grows.
        </ErpFeatureBlock>
      </ErpFeatureSection>

      <ErpFeatureSection
        eyebrow="Methodology"
        title="ERPNext implementation methodology"
        description="A step-by-step procedure that reduces risk, speeds user adoption, and delivers measurable ROI."
        image={erpAccountsDashboard}
        imageAlt="ERPNext configured with live accounts, billing, and ageing dashboards"
        className="section-light"
      >
        <ol className="space-y-3">
          {methodologySteps.map((step, index) => (
            <li key={step} className="flex items-start gap-3 text-slate-700">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-electric/10 text-electric text-xs font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <span className="pt-0.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-slate-500 pt-2">
          Every phase includes documented sign-offs so your team knows what is done before we move to
          the next stage.
        </p>
      </ErpFeatureSection>

      <ErpFeatureSection
        eyebrow="Migration & Hosting"
        title="ERPNext migration and deployment"
        image={erpMigrationCloud}
        imageAlt="ERPNext data migration from legacy systems with cloud and on-premise deployment options"
        imageFirst
        className="section-muted"
      >
        <ErpFeatureBlock title="ERPNext migration services">
          We safely move your data from older ERP systems, spreadsheets, or accounting software into
          ERPNext — with validation, reconciliation, and parallel runs so you do not lose accuracy,
          integrity, or Pakistani tax and compliance settings.
        </ErpFeatureBlock>
        <ErpFeatureBlock title="ERPNext cloud and on-premise deployment">
          Whether you prefer ERPNext on managed cloud or on your own servers, we handle installation,
          performance tuning, backups, SSL, and scaling to match your infrastructure and compliance
          needs in Pakistan.
        </ErpFeatureBlock>
      </ErpFeatureSection>

      <section className="section-padding section-light">
        <div className="section-container">
          <FadeInSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="eyebrow-light mb-3">Integrations</p>
              <h2 className="heading-section text-slate-900 mb-4">
                Integrate with your favorite apps
              </h2>
              <p className="text-lead-light">
                ERPNext connects to the tools your team already uses — e-commerce, payments, messaging,
                and cloud services — so sales, finance, and operations stay in sync without duplicate
                data entry.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_24px_60px_-20px_rgba(0,102,255,0.12)] p-4 md:p-8">
              <img
                src={erpIntegrations}
                alt="ERPNext integrations with Slack, Shopify, Stripe, PayPal, Google, AWS, and more"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <p className="text-center text-sm text-slate-500 mt-8 max-w-2xl mx-auto">
              We implement payment gateways (JazzCash, EasyPaisa, Stripe), Shopify and WooCommerce
              sync, shipping providers, biometric attendance, and custom APIs through ERPNext&apos;s
              REST interface.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="section-container">
          <SectionHeader
            eyebrow="Services"
            title="ERPNext implementation services we deliver"
            description="Named workstreams so you know exactly what is in scope — from consulting to support."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeInSection key={service.title} delay={i * 0.05}>
                  <article className="card-light overflow-hidden h-full flex flex-col">
                    <div className="h-40 overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-electric/5 border border-electric/10 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-electric" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                    </div>
                  </article>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding-sm section-muted">
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-white shadow-sm p-8 md:p-10">
            <div>
              <p className="eyebrow-light mb-3">Free requirements audit</p>
              <h2 className="heading-sub text-slate-900 mb-2">Not sure which modules you need?</h2>
              <p className="text-slate-600 max-w-xl">
                We map your processes, recommend ERPNext modules, and send a fixed-price quote.
                No obligation.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="btn-primary-gradient rounded-xl px-8 py-6 gap-2">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="Industries"
            title="Industry-specific ERPNext solutions"
            description="Practical setups for how Pakistani retailers, factories, traders, and SMEs actually operate."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <FadeInSection key={industry.title} delay={i * 0.06}>
                  <article className="card-light overflow-hidden h-full grid sm:grid-cols-5">
                    <div className="sm:col-span-2 min-h-[180px]">
                      <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="sm:col-span-3 p-6 flex flex-col justify-center">
                      <Icon className="w-5 h-5 text-electric mb-3" />
                      <h3 className="font-semibold text-slate-900 mb-2">{industry.title}</h3>
                      <p className="text-sm text-slate-600">{industry.desc}</p>
                    </div>
                  </article>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding section-dark">
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow="Modules"
            title="ERPNext modules we implement"
            description="Configure only what you need — scale as the business grows."
            dark
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ERP_MODULES.map((mod, i) => (
              <FadeInSection key={mod.name} delay={i * 0.05}>
                <article className="card-holographic p-6 h-full">
                  <h3 className="font-semibold text-slate-900 mb-2">{mod.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{mod.desc}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <p className="eyebrow-light mb-3">Pakistan</p>
            <h2 className="heading-section text-slate-900 mb-5">
              ERPNext implementation built for Pakistani businesses
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Local tax, compliance, and trading patterns matter. We configure ERPNext so finance
              and operations teams in Pakistan can run day-to-day work without fighting the system.
            </p>
            <ul className="space-y-3">
              {pakistanPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src={IMAGES.warehouse}
                alt="Warehouse and distribution operations managed in ERPNext"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="Process detail"
            title="What happens in each implementation phase"
            description="Our four-phase delivery model — expanded from discovery through optimization."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflow.map((step, i) => (
              <FadeInSection key={step.step} delay={i * 0.08}>
                <motion.div className="card-light p-6 h-full" whileHover={{ y: -4 }}>
                  <span className="text-3xl font-bold text-electric/20">{step.step}</span>
                  <h3 className="font-semibold text-slate-900 mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Workflow className="w-4 h-4 text-electric" />
            Process mapping → configuration → migration → training → go-live optimization
          </div>
        </div>
      </section>

      <section className="section-padding section-dark">
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow="Client reviews"
            title="What clients say after working with us"
            description="Ratings from real CodeVente projects — published as reviews, not invented counts."
            dark
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TESTIMONIALS.map((review, i) => (
              <FadeInSection key={review.id} delay={i * 0.08}>
                <article className="card-holographic p-7 h-full">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {Array.from({ length: review.rating }).map((_, star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6">“{review.content}”</p>
                  <p className="text-slate-900 font-semibold">{review.author}</p>
                  <p className="text-sm text-slate-500">{review.company}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm section-dark border-y border-slate-200">
        <div className="section-container relative z-10 text-center">
          <h2 className="text-lg font-semibold text-slate-900 mb-8">ERPNext technology stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="section-container max-w-3xl">
          <SectionHeader
            eyebrow="FAQ"
            title="ERPNext implementation — frequently asked questions"
            description="Cost, timeline, customization, Pakistan coverage, and support."
          />
          <Accordion type="single" collapsible className="mt-2 space-y-3">
            {ERP_EXTENDED_FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
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
        title="Ready to implement ERPNext?"
        description="Book a free requirements audit. We'll map your processes, recommend modules, and provide a fixed-price quote."
        primaryLabel="Get free consultation"
        primaryHref="/contact"
        secondaryLabel="View all services"
        secondaryHref="/services"
      />
    </>
  );
}
