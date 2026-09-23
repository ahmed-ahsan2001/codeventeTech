import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";
import FadeInSection from "@/components/animations/FadeInSection";
import { TrustLogoItems } from "@/components/trust-logo-strip";
import { MarqueeLight } from "@/components/effects/Marquee";
import ErpFeatureSection, { ErpFeatureBlock } from "@/components/sections/erp-feature-section";
import HrCreamSplitSection from "@/components/sections/hr-cream-split-section";
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
  HR_BENEFITS_IMAGE,
  HR_BENEFITS_INTRO,
  HR_BUSINESS_BENEFITS,
  HR_CHOOSE_CRITERIA,
  HR_CHOOSE_INTRO,
  HR_CHOOSE_PAYROLL_IMAGE,
  HR_CLOUD_BRANCHES_IMAGE,
  HR_KEY_FEATURES,
  HR_KEY_FEATURES_IMAGE,
  HR_KEY_FEATURES_INTRO,
  HR_PAYROLL_WORKFLOW_IMAGE,
  HR_PAYSLIP_ESS_IMAGE,
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

      <HrCreamSplitSection
        id="hr-choose-heading"
        title="How to choose payroll software in Pakistan"
        intro={HR_CHOOSE_INTRO}
        items={HR_CHOOSE_CRITERIA.slice(0, 3)}
        image={HR_CHOOSE_PAYROLL_IMAGE}
        imageAlt="Payroll software UI: salary revisions, tax deductions in PKR, payslips, and attendance clock-in"
        textFirst
      />

      <HrCreamSplitSection
        title="Cloud HR that scales with your branches"
        items={HR_CHOOSE_CRITERIA.slice(3, 6)}
        image={HR_CLOUD_BRANCHES_IMAGE}
        imageAlt="Cloud HR map connecting HQ and global branches with live sync, attendance, and payroll-ready status"
        textFirst={false}
      />

      <HrCreamSplitSection
        title="Key features of payroll software in Pakistan"
        intro={HR_KEY_FEATURES_INTRO}
        items={HR_KEY_FEATURES.slice(0, 3)}
        image={HR_KEY_FEATURES_IMAGE}
        imageAlt="Allocated leave balances, mobile leave applications, manager approvals, and HR documents"
        textFirst
      />

      <HrCreamSplitSection
        title="Payslips, branches & employee self-service"
        items={HR_KEY_FEATURES.slice(3, 6)}
        image={HR_PAYSLIP_ESS_IMAGE}
        imageAlt="Payslips and bank transfer, multi-branch HR, and employee self-service on mobile"
        textFirst={false}
      />

      <HrCreamSplitSection
        title="Benefits of HR & payroll software for businesses"
        intro={HR_BENEFITS_INTRO}
        items={HR_BUSINESS_BENEFITS.slice(0, 3)}
        image={HR_BENEFITS_IMAGE}
        imageAlt="Integrated HR and payroll benefits: efficiency, accuracy, compliance, attendance and pay adjustments"
        textFirst={false}
      />

      <section
        className="section-padding bg-white border-y border-slate-100"
        aria-label="How payroll software works"
      >
        <div className="section-container">
          <FadeInSection>
            <img
              src={HR_PAYROLL_WORKFLOW_IMAGE}
              alt="How payroll software works: data input, salary calculation, compliance, payslips, and disbursement"
              className="w-full max-w-6xl mx-auto h-auto rounded-2xl"
              width={1400}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </FadeInSection>
        </div>
      </section>

      <HrWhyChooseSection />

      <ErpFeatureSection
        eyebrow="Integrations"
        title="Connect HR with attendance, finance & banking"
        description="Biometrics, APIs, and ERP modules — alongside our integration practice."
        image={hrIllustrationPath("integrations")}
        imageAlt="Diagram of ERPNext HR connected to biometric, finance, bank, and mobile"
        imageFirst
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

      <section className="section-padding border-y border-stone-200/50" style={{ backgroundColor: "#FAF8F4" }}>
        <div className="section-container">
          <SectionHeader
            eyebrow="Delivery"
            title="Our HR implementation methodology"
            description="Four phases from process audit through your first live payroll cycle."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {SERVICE_DETAILS["hr-software"].workflow.map((step, i) => (
              <FadeInSection key={step.step} delay={i * 0.08}>
                <div className="card-light p-6 h-full bg-white/80">
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
