import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import PortfolioGrid from "@/components/portfolio-grid";
import PageHero from "@/components/layout/page-hero";
import CTABanner from "@/components/layout/cta-banner";

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Portfolio - Web Apps, Mobile Apps & AI Projects"
        description="Explore CodeVente's portfolio of web apps, mobile apps, AI integrations, and software projects built for startups with proven results."
        keywords="software development portfolio, mobile app projects, AI integration case studies, web app portfolio, startup projects"
        canonicalPath="/portfolio"
      />

      <PageHero
        eyebrow="Our Work"
        title="Projects That Ship & Scale"
        description="Real client work across web apps, mobile apps, AI products, and growth — with measurable outcomes."
      >
        <Link href="/contact">
          <Button size="lg" className="btn-outline-dark rounded-xl px-8 py-6 text-base">
            Start Your Project
          </Button>
        </Link>
      </PageHero>

      <PortfolioGrid />

      <CTABanner
        title="Ready to Join Our Success Stories?"
        description="Let's create something amazing together."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
      />
    </>
  );
}
