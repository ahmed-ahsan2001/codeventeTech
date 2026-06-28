import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { SERVICES } from "@/lib/constants";
import PageHero from "@/components/layout/page-hero";
import CTABanner from "@/components/layout/cta-banner";

export default function Services() {
  const serviceImages = {
    "web-development": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "ai-solutions": "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "digital-marketing": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "seo": "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "ui-ux": "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  };

  return (
    <>
      <SEOHead
        title="Our Services - AI, Web & App Development, UI/UX & Growth"
        description="AI solutions, web and mobile app development, UI/UX design, digital marketing, and SEO — full-stack software services built for startups."
        keywords="AI development services, mobile app development, web development agency, software development startup, LLM integration, UI/UX design"
        canonicalPath="/services"
      />

      <PageHero
        eyebrow="Services"
        title="AI & Software Built for Startups"
        description="Web apps, mobile apps, AI integrations, and growth systems — one team from idea to production."
      />

      <section className="section-padding section-dark">
        <div className="section-container relative z-10 space-y-24 md:space-y-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <p className="eyebrow mb-3">{`0${index + 1} — Service`}</p>
                <h2 className="heading-section text-white mb-4">{service.title}</h2>
                <p className="text-lead mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-sky-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="btn-primary-gradient rounded-xl px-8">
                    Get a Quote
                  </Button>
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="rounded-2xl overflow-hidden border border-sky-800/40 shadow-2xl shadow-black/30">
                  <img
                    src={serviceImages[service.id as keyof typeof serviceImages]}
                    alt={`${service.title} illustration`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
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
