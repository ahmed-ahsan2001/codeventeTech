import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { SERVICES } from "@/lib/constants";
import PageHero from "@/components/layout/page-hero";
import CTABanner from "@/components/layout/cta-banner";
import FadeInSection from "@/components/animations/FadeInSection";
import NoiseOverlay from "@/components/effects/NoiseOverlay";

export default function Services() {
  return (
    <>
      <SEOHead
        title="Services — AI, Web & App Development | CodeVente"
        description="AI solutions, web and mobile development, ERPNext implementation, UI/UX design, digital marketing, and SEO — full-stack services built for startups and businesses."
        keywords="AI development services, mobile app development, web development agency, LLM integration"
        canonicalPath="/services"
      />

      <PageHero
        eyebrow="Services"
        title="AI & Software Built for Startups"
        description="Web apps, mobile apps, AI integrations, ERPNext deployments, and growth systems — one team from idea to production."
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
                  <p className="eyebrow mb-3">{String(index + 1).padStart(2, "0")} — Service</p>
                  <h2 className="heading-section text-white mb-4">{service.title}</h2>
                  <p className="text-lead mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Link href={`/services/${service.id}`}>
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
                    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-electric/20 via-void to-neon-purple/20 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/[0.06]">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeInSection>
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
