import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import PageHero from "@/components/layout/page-hero";
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";
import FadeInSection from "@/components/animations/FadeInSection";
import NotFound from "@/pages/404";
import { SERVICES } from "@/lib/constants";
import { SERVICE_DETAILS } from "@/lib/content";
import {
  ERP_KEYWORDS,
  ERP_PAGE_TITLE,
  ERP_PAGE_DESCRIPTION,
  ERP_CANONICAL_PATH,
  erpAllJsonLd,
} from "@/lib/erp-seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug ?? "";
  const service = SERVICES.find((s) => s.id === slug);
  const details = SERVICE_DETAILS[slug];

  if (!service || !details) return <NotFound />;

  const isErp = slug === "erp-implementation";

  return (
    <>
      <SEOHead
        title={isErp ? ERP_PAGE_TITLE : `${service.title} — CodeVente`}
        description={isErp ? ERP_PAGE_DESCRIPTION : details.hero}
        keywords={
          isErp
            ? ERP_KEYWORDS
            : `${service.title}, codevente services, AI development, software agency`
        }
        canonicalPath={isErp ? ERP_CANONICAL_PATH : `/services/${slug}`}
        jsonLd={isErp ? erpAllJsonLd() : undefined}
      />

      <PageHero
        eyebrow="Service"
        title={service.title}
        description={details.hero}
      >
        {isErp ? (
          <Link href="/erpnext-implementation">
            <Button size="lg" className="btn-primary-gradient rounded-xl px-10 py-6 gap-2">
              View Full ERPNext Guide
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        ) : (
          <Link href="/contact">
            <Button size="lg" className="btn-primary-gradient rounded-xl px-10 py-6 gap-2">
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        )}
      </PageHero>

      {/* Benefits */}
      <section className="section-padding section-dark">
        <div className="section-container relative z-10">
          <FadeInSection direction="up">
            <SectionHeader
              eyebrow="Benefits"
              title="What You Get"
              description="Comprehensive capabilities delivered by a team that ships."
              dark
              align="center"
            />
          </FadeInSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 max-w-4xl mx-auto">
            {details.benefits.map((benefit, i) => (
              <FadeInSection key={benefit} delay={i * 0.06} direction="up">
                <div className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{benefit}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
          {isErp && (
            <div className="text-center mt-10">
              <Link href="/erpnext-implementation">
                <span className="text-sm font-semibold text-electric hover:underline cursor-pointer">
                  Read the complete ERPNext implementation guide →
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding section-light">
        <div className="section-container">
          <SectionHeader
            eyebrow="Workflow"
            title="How We Deliver"
            description="A proven process refined across 50+ projects."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {details.workflow.map((step, i) => (
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

      {/* Technologies */}
      <section className="section-padding-sm section-dark border-y border-white/[0.06]">
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow="Stack"
            title="Technologies We Use"
            dark
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {details.technologies.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-muted">
        <div className="section-container max-w-2xl">
          <SectionHeader eyebrow="FAQ" title="Common Questions" align="center" />
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {details.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="card-light px-6 rounded-2xl border"
              >
                <AccordionTrigger className="font-semibold text-slate-900 hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABanner
        title={isErp ? "Ready to Implement ERPNext?" : `Ready for ${service.title}?`}
        description={
          isErp
            ? "Book a free ERPNext requirements audit and get a fixed-price quote."
            : "Book a free audit and let's discuss how we can help your startup ship faster."
        }
        primaryLabel={isErp ? "Get Free ERP Consultation" : "Start Your Project"}
        primaryHref="/contact"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
