import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Scale,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";
import FadeInSection from "@/components/animations/FadeInSection";
import { TrustLogoItems } from "@/components/trust-logo-strip";
import { MarqueeLight } from "@/components/effects/Marquee";
import ErpFeatureSection, { ErpFeatureBlock } from "@/components/sections/erp-feature-section";
import HrWhyChooseSection from "@/components/sections/hr-why-choose-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TESTIMONIALS } from "@/lib/constants";
import { SERVICE_DETAILS } from "@/lib/content";
import {
  HR_BUSINESS_BENEFITS,
  HR_CHOOSE_CRITERIA,
  HR_KEY_FEATURES,
  HR_PAYROLL_STEPS,
  hrIllustrationPath,
} from "@/lib/hr-content";
import {
  HR_KEYWORDS,
  HR_PAGE_TITLE,
  HR_PAGE_DESCRIPTION,
  HR_OG_TITLE,
  HR_CANONICAL_PATH,
  HR_FAQS,
  hrAllJsonLd,
} from "@/lib/hr-seo";
import erpIntegrations from "@/assets/erp/integrations.png";

const technologies = SERVICE_DETAILS["hr-software"].technologies;

const benefitIcons = [Users, Scale, Shield, TrendingUp];

export default function HRSoftware() {
  const heroImage = hrIllustrationPath("hero-dashboard");

  return (
    <>
      <SEOHead
        title={HR_PAGE_TITLE}
        description={HR_PAGE_DESCRIPTION}
        keywords={HR_KEYWORDS}
        ogTitle={HR_OG_TITLE}
        ogDescription={HR_PAGE_DESCRIPTION}
        canonicalPath={HR_CANONICAL_PATH}
        jsonLd={hrAllJsonLd()}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="aurora-bg opacity-60" />
        <div className="hero-mesh" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="eyebrow-light mb-5">HR & payroll software · Pakistan</p>
              <h1 className="heading-display text-slate-900 mb-6">
                HR and payroll software for{" "}
                <span className="gradient-text">growing Pakistani teams</span>
              </h1>
              <p className="text-lead mb-6">
                Human resources today means more than spreadsheets and manual payslips. CodeVente
                implements <strong>ERPNext HR</strong> and custom HRMS solutions so hiring,
                attendance, leave, payroll, and compliance run on one organized system — from
                Karachi to nationwide branches.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                {SERVICE_DETAILS["hr-software"].hero}
              </p>
              <div className="flex items-center gap-3 mb-8 text-sm text-slate-600">
                <span className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </span>
                <span>5.0 from {TESTIMONIALS.length} client reviews</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="btn-primary-gradient rounded-xl px-8 py-6 gap-2">
                    Request a demo
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/erpnext-implementation">
                  <Button size="lg" variant="outline" className="rounded-xl px-8 py-6 border-slate-200">
                    Full ERPNext platform
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
                  src={heroImage}
                  alt="HR and payroll dashboard with salary register and payroll status"
                  className="w-full h-auto"
                  width={1200}
                  height={720}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 md:left-8 md:right-auto md:max-w-xs card-glass p-4">
                <p className="text-xs uppercase tracking-wider text-electric mb-1">ERPNext HR</p>
                <p className="text-slate-900 font-semibold text-sm">
                  Attendance, leave, payroll & ESS in one implementation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white border-b border-slate-100">
        <div className="section-container">
          <SectionHeader
            eyebrow="Trusted by"
            title="Growing brands across Pakistan"
            align="center"
          />
          <div className="mt-8">
            <MarqueeLight speed="slow">
              <TrustLogoItems />
            </MarqueeLight>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding section-light" aria-labelledby="hr-intro-heading">
        <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
              <img
                src={hrIllustrationPath("choose-payroll")}
                alt="Checklist for choosing HR and payroll software in Pakistan"
                className="w-full h-auto"
                width={1200}
                height={720}
                loading="lazy"
              />
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h2 id="hr-intro-heading" className="heading-section text-slate-900 mb-6">
              How to choose payroll software in Pakistan
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The right HR and payroll system affects employee trust and your finance close. Use this
              checklist when evaluating HRMS options — then compare how{" "}
              <Link href="/erpnext-implementation" className="text-electric hover:underline">
                ERPNext
              </Link>{" "}
              fits your size, branches, and compliance needs.
            </p>
            <ul className="space-y-4">
              {HR_CHOOSE_CRITERIA.map((item) => (
                <li key={item.title} className="flex gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-slate-600 mt-0.5">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </section>

      {/* Key features */}
      <section className="section-padding section-muted">
        <div className="section-container">
          <SectionHeader
            eyebrow="Features"
            title="Key features of payroll & HR software"
            description="Built for Pakistani SMEs and multi-branch operations — configured on ERPNext HR with CodeVente."
            align="center"
          />
          <FadeInSection className="mt-10 mb-12">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white max-w-5xl mx-auto">
              <img
                src={hrIllustrationPath("key-features")}
                alt="Salary structure, attendance sync, and payslip preview in HR software"
                className="w-full h-auto"
                width={1200}
                height={720}
                loading="lazy"
              />
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {HR_KEY_FEATURES.map((feature, i) => (
              <FadeInSection key={feature.title} delay={i * 0.05}>
                <article className="card-light p-6 h-full border border-slate-200/80">
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <ErpFeatureSection
        eyebrow="Process"
        title="How does payroll software work?"
        description="From attendance data to payslips and reports — a clear pipeline with fewer manual steps."
        image={hrIllustrationPath("payroll-workflow")}
        imageAlt="Five-step payroll workflow from data input to disbursement"
        imageFirst
        className="section-light"
      >
        <ol className="space-y-4">
          {HR_PAYROLL_STEPS.map((step) => (
            <li key={step.step} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-electric/10 text-electric text-xs font-bold flex items-center justify-center">
                {step.step}
              </span>
              <div>
                <p className="font-semibold text-slate-900">{step.title}</p>
                <p className="text-sm text-slate-600 mt-1">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </ErpFeatureSection>

      <ErpFeatureSection
        eyebrow="Employee experience"
        title="Transparent communication through self-service"
        description="When staff can see payslips, leave, and attendance themselves, HR spends less time on repeat questions."
        image={hrIllustrationPath("employee-portal")}
        imageAlt="Employee self-service portal with leave, attendance, and payslip views"
        className="section-muted"
      >
        <ErpFeatureBlock title="Employee self-service portals">
          We enable ESS on ERPNext HR or custom portals so employees apply for leave, download
          payslips, and view balances — with permissions that match your policies.
        </ErpFeatureBlock>
        <ErpFeatureBlock title="Manager approvals">
          Leave and attendance corrections route to line managers with notifications, keeping payroll
          inputs accurate before each run.
        </ErpFeatureBlock>
      </ErpFeatureSection>

      {/* Benefits */}
      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="Benefits"
            title="Benefits of HR & payroll software for businesses"
            description="More than time savings — a compliant, scalable people operations foundation."
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-5 mt-12 max-w-4xl mx-auto">
            {HR_BUSINESS_BENEFITS.map((item, i) => {
              const Icon = benefitIcons[i] ?? Cloud;
              return (
                <FadeInSection key={item.title} delay={i * 0.06}>
                  <div className="card-light p-6 flex gap-4 h-full">
                    <div className="w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <HrWhyChooseSection />

      <ErpFeatureSection
        eyebrow="Integrations"
        title="Connect HR with attendance, finance & banking"
        description="Biometrics, APIs, and ERP modules — illustrated below alongside our integration practice."
        image={hrIllustrationPath("integrations")}
        imageAlt="Diagram of ERPNext HR connected to biometric, finance, bank, and mobile"
        className="section-light"
      >
        <ErpFeatureBlock title="Biometric & device sync">
          ZKTeco and scheduled imports bring check-in data into attendance before payroll runs.
        </ErpFeatureBlock>
        <ErpFeatureBlock title="Unified ERP when you need it">
          HR sits beside accounting, inventory, and CRM on ERPNext — one partner for implementation.
        </ErpFeatureBlock>
        <div className="rounded-2xl overflow-hidden border border-slate-200 mt-4">
          <img
            src={erpIntegrations}
            alt="ERPNext integration architecture for HR and business systems"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </ErpFeatureSection>

      {/* Implementation phases */}
      <section className="section-padding section-muted">
        <div className="section-container">
          <SectionHeader
            eyebrow="Delivery"
            title="Our HR implementation methodology"
            description="Four phases from process audit through your first live payroll cycle."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {SERVICE_DETAILS["hr-software"].workflow.map((step, i) => (
              <FadeInSection key={step.step} delay={i * 0.08}>
                <div className="card-light p-6 h-full">
                  <span className="text-3xl font-bold text-electric/20">{step.step}</span>
                  <h3 className="font-semibold text-slate-900 mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-dark">
        <div className="section-container relative z-10 max-w-4xl">
          <SectionHeader
            eyebrow="Reviews"
            title="What clients say"
            description="Feedback from real CodeVente projects."
            dark
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {TESTIMONIALS.map((review, i) => (
              <FadeInSection key={review.id} delay={i * 0.08}>
                <article className="card-holographic p-7 h-full">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {Array.from({ length: review.rating }).map((_, star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6">"{review.content}"</p>
                  <p className="text-slate-900 font-semibold">{review.author}</p>
                  <p className="text-sm text-slate-500">{review.company}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm section-dark border-y border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-lg font-semibold text-slate-900 mb-8">HR technology stack</h2>
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
            eyebrow="FAQs"
            title="HR & payroll software — frequently asked questions"
            description="Implementation, ERPNext HR, biometrics, payslips, and training in Pakistan."
            align="center"
          />
          <Accordion type="single" collapsible className="mt-8 space-y-3">
            {HR_FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`hr-faq-${i}`}
                className="card-light px-6 rounded-2xl border data-[state=open]:border-electric/20"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner
        title="Book a live HR & payroll demo"
        description="See how CodeVente configures ERPNext HR for your headcount, branches, and compliance — free discovery call."
        primaryLabel="Request a demo"
        primaryHref="/contact"
        secondaryLabel="ERPNext services"
        secondaryHref="/erpnext-implementation"
      />
    </>
  );
}
