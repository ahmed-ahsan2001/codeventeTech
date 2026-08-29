import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { SERVICES } from "@/lib/constants";
import PageHero from "@/components/layout/page-hero";
import CTABanner from "@/components/layout/cta-banner";
import FadeInSection from "@/components/animations/FadeInSection";
import SectionHeader from "@/components/layout/section-header";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import {
  SPECIALIZED_SERVICE_IDS,
  getServicePath,
  SERVICE_META,
} from "@/lib/service-seo";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

function serviceDetailHref(id: string) {
  return id === "erp-implementation" ? "/erpnext-implementation" : `/services/${id}`;
}

export default function Services() {
  return (
    <>
      <SEOHead
        title="Software Development Services in Pakistan | CodeVente"
        description="AI solutions, web and mobile development, ERPNext implementation, Shopify stores, React apps, UI/UX design, digital marketing, and SEO — full-stack services for startups in Pakistan."
        keywords="software development services Pakistan, web development Karachi, mobile app development, ERPNext implementation, Shopify development, AI development agency"
        canonicalPath="/services"
        jsonLd={[
          webPageJsonLd({
            title: "Software Development Services in Pakistan | CodeVente",
            description: "AI, web, mobile, ERPNext, Shopify, and growth services for startups.",
            path: "/services",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Services"
        title="AI & Software Built for Startups"
        description="Web apps, mobile apps, AI integrations, ERPNext deployments, Shopify stores, and growth systems — one team from idea to production."
      />

      <section className="relative section-padding section-dark overflow-hidden">
        <NoiseOverlay opacity={0.025} />
        <div className="section-container relative z-10 space-y-20 md:space-y-28">
          {SERVICES.map((service, index) => (
            <FadeInSection key={service.id} delay={index * 0.05} direction="up">
              <div
                id={service.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <p className="eyebrow-light mb-3">{String(index + 1).padStart(2, "0")} — Service</p>
                  <h2 className="heading-section text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lead mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Link href={serviceDetailHref(service.id)}>
                      <Button className="btn-primary-gradient rounded-xl px-8 gap-2">
                        Learn More
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="btn-outline-light rounded-xl px-8">Get a Quote</Button>
                    </Link>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <motion.div
                    className="card-holographic p-2 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-electric/10 via-slate-50 to-neon-purple/10 flex items-center justify-center">
                      <span className="text-6xl font-bold text-slate-200">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className="section-padding section-light border-t border-slate-200">
        <div className="section-container">
          <SectionHeader
            eyebrow="Specialized"
            title="Focused Development Services"
            description="Dedicated pages for our most-requested capabilities — mobile apps, React development, and Shopify e-commerce."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {SPECIALIZED_SERVICE_IDS.map((id, index) => {
              const meta = SERVICE_META[id];
              return (
                <FadeInSection key={id} delay={index * 0.08} direction="up">
                  <Link href={getServicePath(id)}>
                    <motion.article
                      className="card-light p-6 h-full group cursor-pointer"
                      whileHover={{ y: -4 }}
                    >
                      <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-electric transition-colors">
                        {meta.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">{meta.seoDescription}</p>
                      <span className="text-sm font-medium text-electric inline-flex items-center gap-1">
                        View service <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </motion.article>
                  </Link>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Business?"
        description="Let's discuss how our AI and software services can help your startup ship faster."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
