import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Fingerprint,
  MapPin,
  Star,
  Wallet,
  Users,
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
import { HR_PERSONAS } from "@/lib/hr-avatars";
import {
  HR_KEYWORDS,
  HR_PAGE_TITLE,
  HR_PAGE_DESCRIPTION,
  HR_OG_TITLE,
  HR_CANONICAL_PATH,
  HR_FAQS,
  hrAllJsonLd,
} from "@/lib/hr-seo";
import erpAccountsDashboard from "@/assets/erp/accounts-dashboard.png";

const workflow = SERVICE_DETAILS["hr-software"].workflow;
const benefits = SERVICE_DETAILS["hr-software"].benefits;
const technologies = SERVICE_DETAILS["hr-software"].technologies;

const modules = [
  {
    icon: Users,
    title: "Employee lifecycle",
    desc: "Hiring data, departments, grades, documents, and org chart — one source of truth for HR and managers.",
  },
  {
    icon: CalendarClock,
    title: "Attendance & leave",
    desc: "Shifts, holidays, leave types, encashment rules, and manager approvals with audit history.",
  },
  {
    icon: Wallet,
    title: "Payroll & expenses",
    desc: "Salary structures, deductions, payslips, and expense claims wired to your finance chart of accounts.",
  },
  {
    icon: Fingerprint,
    title: "Biometric & integrations",
    desc: "ZKTeco and API-based attendance sync, plus hooks to ERP inventory or custom internal tools.",
  },
];

const pakistanPoints = [
  "PKR payroll components and payslip layouts your finance team recognizes",
  "Multi-branch attendance for Karachi, Lahore, Islamabad, and remote sites",
  "Role-based access so employees only see their own leave and payslips",
  "On-site HR discovery in major cities or fully remote implementation",
];

export default function HRSoftware() {
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
              <p className="eyebrow-light mb-5">HR software implementation in Pakistan</p>
              <h1 className="heading-display text-slate-900 mb-6">
                HR software &{" "}
                <span className="gradient-text">ERPNext HR</span> for growing teams
              </h1>
              <p className="text-lead mb-8">
                {SERVICE_DETAILS["hr-software"].hero} CodeVente configures, integrates, and trains
                your HR and payroll staff — so attendance and payslips are not stuck in WhatsApp and Excel.
              </p>
              <ul className="space-y-3 mb-10">
                {benefits.slice(0, 3).map((item) => (
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
                <span>5.0 from {TESTIMONIALS.length} client reviews</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="btn-primary-gradient rounded-xl px-8 py-6 gap-2">
                    Book a free HR audit
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/erpnext-implementation">
                  <Button size="lg" variant="outline" className="rounded-xl px-8 py-6 border-slate-200">
                    Full ERPNext services
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative"
            >
              <img
                src={erpAccountsDashboard}
                alt="ERPNext HR and payroll dashboard configured by CodeVente"
                className="rounded-2xl border border-slate-200 shadow-xl w-full"
                width={1200}
                height={800}
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding section-dark border-y border-slate-200">
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow="Built for HR teams"
            title="Who we configure HR software for"
            description="HR managers, payroll, site teams, and your CodeVente implementation lead — configured around how you actually run people operations."
            dark
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {HR_PERSONAS.map((persona, i) => (
              <FadeInSection key={persona.name} delay={i * 0.06}>
                <article className="card-holographic p-6 h-full text-center">
                  <img
                    src={persona.image}
                    alt={persona.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-2 ring-electric/20"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                  <h3 className="font-semibold text-slate-900 text-sm">{persona.name}</h3>
                  <p className="text-xs text-electric mt-1 mb-3">{persona.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{persona.detail}</p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="Modules"
            title="What you get with CodeVente HR software"
            description="ERPNext HR as the core — extended with biometrics, self-service, and custom workflows when you need them."
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {modules.map((mod, i) => (
              <FadeInSection key={mod.title} delay={i * 0.08}>
                <div className="card-light p-6 flex gap-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <mod.icon className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{mod.title}</h3>
                    <p className="text-sm text-slate-600">{mod.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-dark">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <SectionHeader
              eyebrow="Pakistan"
              title="HR software for Pakistani businesses"
              description="Local payroll practices, multi-city teams, and finance alignment — not a generic overseas template."
              dark
            />
            <ul className="space-y-4">
              {pakistanPoints.map((point) => (
                <li key={point} className="flex gap-3 text-slate-600 text-sm">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="Delivery"
            title="Our HR implementation process"
            description="Four phases from audit to the first live payroll cycle."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {workflow.map((step, i) => (
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
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow="Client reviews"
            title="Teams that trust CodeVente"
            description="Published feedback from real projects — with client portraits."
            dark
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
            {TESTIMONIALS.map((review, i) => (
              <FadeInSection key={review.id} delay={i * 0.08}>
                <article className="card-holographic p-7 h-full">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {Array.from({ length: review.rating }).map((_, star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6">"{review.content}"</p>
                  <div className="flex items-center gap-3">
                    {review.avatar ? (
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-white/10"
                        width={44}
                        height={44}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-electric to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                        {review.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="text-slate-900 font-semibold">{review.author}</p>
                      <p className="text-sm text-slate-500">{review.company}</p>
                    </div>
                  </div>
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
            eyebrow="FAQ"
            title="HR software — frequently asked questions"
            description="Cost, timeline, ERPNext HR, biometrics, and training in Pakistan."
          />
          <Accordion type="single" collapsible className="mt-2 space-y-3">
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
          <p className="text-sm text-slate-500 mt-8 text-center">
            Also exploring full ERP?{" "}
            <Link href="/erpnext-implementation" className="text-electric hover:underline">
              ERPNext implementation services
            </Link>
            {" · "}
            <Link href="/contact" className="text-electric hover:underline">
              Contact CodeVente
            </Link>
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to modernize HR and payroll?"
        description="Share your headcount, branches, and current tools — we will reply with a clear scope and timeline."
        primaryLabel="Get a free HR audit"
        primaryHref="/contact"
        secondaryLabel="View ERPNext services"
        secondaryHref="/erpnext-implementation"
      />
    </>
  );
}
