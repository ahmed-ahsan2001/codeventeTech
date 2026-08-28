import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import PageHero from "@/components/layout/page-hero";
import SectionHeader from "@/components/layout/section-header";
import CTABanner from "@/components/layout/cta-banner";
import FadeInSection from "@/components/animations/FadeInSection";
import NotFound from "@/pages/404";
import { SERVICE_DETAILS } from "@/lib/content";
import { getProjectBySlug, getCaseStudyPath } from "@/lib/portfolio";
import {
  ERP_KEYWORDS,
  ERP_PAGE_TITLE,
  ERP_PAGE_DESCRIPTION,
  ERP_CANONICAL_PATH,
  erpAllJsonLd,
} from "@/lib/erp-seo";
import {
  buildServiceJsonLd,
  getServiceMeta,
  getServicePath,
  SERVICE_META,
} from "@/lib/service-seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug ?? "";
  const meta = getServiceMeta(slug);
  const details = SERVICE_DETAILS[slug];

  if (!meta || !details) return <NotFound />;

  const isErp = slug === "erp-implementation";
  const relatedProjects = meta.relatedCaseStudies
    .map((s) => getProjectBySlug(s))
    .filter(Boolean);
  const relatedServices = meta.relatedServices
    .map((id) => SERVICE_META[id])
    .filter(Boolean);

  return (
    <>
      <SEOHead
        title={isErp ? ERP_PAGE_TITLE : meta.seoTitle}
        description={isErp ? ERP_PAGE_DESCRIPTION : meta.seoDescription}
        keywords={isErp ? ERP_KEYWORDS : meta.keywords}
        canonicalPath={isErp ? ERP_CANONICAL_PATH : meta.canonicalPath}
        jsonLd={isErp ? erpAllJsonLd() : buildServiceJsonLd(slug, meta)}
      />

      <nav aria-label="Breadcrumb" className="section-container pt-28 pb-0 relative z-10">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
          <li>
            <Link href="/">
              <span className="hover:text-white transition-colors cursor-pointer">Home</span>
            </Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden />
          <li>
            <Link href="/services">
              <span className="hover:text-white transition-colors cursor-pointer">Services</span>
            </Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden />
          <li className="text-slate-300" aria-current="page">
            {meta.title}
          </li>
        </ol>
      </nav>

      <PageHero
        eyebrow="Service"
        title={meta.title}
        description={details.hero}
        compact
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

      {/* What we provide */}
      <section className="section-padding-sm section-muted border-b border-slate-200">
        <div className="section-container max-w-3xl text-center">
          <p className="text-lead-light">
            {meta.intro ||
              `CodeVente delivers ${meta.title.toLowerCase()} for startups and businesses in Pakistan and worldwide. Based in Karachi, we combine engineering rigor with fast delivery — from discovery through production launch.`}
          </p>
        </div>
      </section>

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

      {/* Related case studies */}
      {relatedProjects.length > 0 && (
        <section className="section-padding section-light">
          <div className="section-container">
            <SectionHeader
              eyebrow="Case Studies"
              title="Related Work"
              description="Real projects that showcase this service in action."
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {relatedProjects.map((project) => (
                <Link key={project!.slug} href={getCaseStudyPath(project!.slug)}>
                  <motion.article
                    className="card-light overflow-hidden group cursor-pointer h-full"
                    whileHover={{ y: -4 }}
                  >
                    <img
                      src={project!.image}
                      alt={`${project!.title} project screenshot`}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="p-5">
                      <h3 className="font-semibold text-slate-900 group-hover:text-electric transition-colors">
                        {project!.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 line-clamp-2">{project!.description}</p>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-padding-sm section-dark border-t border-white/[0.06]">
          <div className="section-container">
            <SectionHeader
              eyebrow="Related"
              title="Explore More Services"
              dark
              align="center"
            />
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {relatedServices.map((related) => (
                <Link key={related.id} href={getServicePath(related.id)}>
                  <span className="tech-pill hover:border-electric/40 cursor-pointer transition-colors">
                    {related.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={isErp ? "Ready to Implement ERPNext?" : `Ready for ${meta.title}?`}
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
