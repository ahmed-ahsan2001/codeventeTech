import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import CTABanner from "@/components/layout/cta-banner";
import NotFound from "@/pages/404";
import {
  PORTFOLIO_PROJECTS,
  getProjectBySlug,
  getCaseStudyPath,
  getCategoryLabel,
  getCategoryColor,
  getProjectCategories,
} from "@/lib/portfolio";
import { caseStudyJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { getServicePath, SERVICE_META } from "@/lib/service-seo";

export default function CaseStudy() {
  const [, params] = useRoute("/portfolio/:slug");
  const slug = params?.slug ?? "";
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }

  const currentIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PORTFOLIO_PROJECTS[(currentIndex + 1) % PORTFOLIO_PROJECTS.length];
  const categories = getProjectCategories(project);
  const gallery = project.gallery ?? (project.secondaryImage ? [project.image, project.secondaryImage] : [project.image]);

  const relatedServiceIds = (() => {
    const cats = getProjectCategories(project);
    const ids: string[] = [];
    if (cats.includes("web") || project.technologies.toLowerCase().includes("react")) {
      ids.push("web-development", "react-development");
    }
    if (cats.includes("mobile") || project.technologies.toLowerCase().includes("react native")) {
      ids.push("mobile-app-development");
    }
    if (project.technologies.toLowerCase().includes("shopify")) {
      ids.push("shopify-development");
    }
    if (cats.includes("marketing")) ids.push("digital-marketing", "seo");
    if (cats.includes("design")) ids.push("ui-ux");
    return Array.from(new Set(ids)).slice(0, 4);
  })();

  const caseStudyPath = getCaseStudyPath(project.slug);

  return (
    <>
      <SEOHead
        title={`${project.title} — Case Study | CodeVente`}
        description={project.overview}
        keywords={`${project.title} case study, ${project.technologies}, software development portfolio`}
        canonicalPath={caseStudyPath}
        jsonLd={[
          caseStudyJsonLd({
            title: project.title,
            description: project.overview,
            path: caseStudyPath,
            technologies: project.technologies,
            client: project.client,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: project.title, path: caseStudyPath },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-brand-gradient overflow-hidden">
        <div className="hero-mesh" />
        <div className="section-container relative z-10">
          <Link href="/portfolio">
            <span className="inline-flex items-center gap-2 text-slate-500 hover:text-electric text-sm mb-8 transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((cat) => (
                  <Badge key={cat} variant="outline" className={`${getCategoryColor(cat)} border`}>
                    {getCategoryLabel(cat)}
                  </Badge>
                ))}
              </div>
              <h1 className="heading-display text-slate-900 mb-4">{project.title}</h1>
              <p className="text-lead mb-6">{project.overview}</p>
              <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                <div>
                  <p className="text-electric text-xs uppercase tracking-wider mb-1">Client</p>
                  <p className="text-slate-900 font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-electric text-xs uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-slate-900 font-medium">{project.duration}</p>
                </div>
                <div>
                  <p className="text-electric text-xs uppercase tracking-wider mb-1">Stack</p>
                  <p className="text-slate-900 font-medium">{project.technologies}</p>
                </div>
              </div>
              {project.link && (
                <div className="mt-8">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-outline-dark rounded-xl gap-2">
                      View Live Project
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl"
            >
              <img src={project.image} alt={`${project.title} — project screenshot`} className="w-full aspect-[4/3] object-cover" width={1200} height={900} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding-sm section-muted border-b border-slate-200">
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-4">
            {project.outcomes.map((outcome, i) => (
              <motion.div
                key={outcome.label}
                className="card-light p-6 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold text-primary mb-1">{outcome.value}</p>
                <p className="text-sm text-slate-600">{outcome.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding section-light">
        <div className="section-container max-w-4xl">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow-light mb-3">The Challenge</p>
              <h2 className="heading-section text-slate-900 mb-4">What needed to change</h2>
              <p className="text-lead-light">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow-light mb-3">Our Solution</p>
              <h2 className="heading-section text-slate-900 mb-4">How we delivered</h2>
              <p className="text-lead-light mb-6">{project.solution}</p>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-sky-50 border border-sky-100">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm">
                  <strong>Results:</strong> {project.results}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 1 && (
        <section className="section-padding section-muted">
          <div className="section-container">
            <p className="eyebrow-light mb-3 text-center">Gallery</p>
            <h2 className="heading-section text-slate-900 mb-10 text-center">Project Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {gallery.map((src, i) => (
                <motion.div
                  key={src}
                  className="card-light overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedServiceIds.length > 0 && (
        <section className="section-padding-sm section-muted border-t border-slate-200">
          <div className="section-container max-w-3xl text-center">
            <p className="eyebrow-light mb-3">Services</p>
            <h2 className="heading-section text-slate-900 mb-6">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedServiceIds.map((id) => (
                <Link key={id} href={getServicePath(id)}>
                  <span className="tech-pill cursor-pointer hover:border-electric/40 transition-colors">
                    {SERVICE_META[id]?.title ?? id}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="section-padding-sm section-light border-t border-slate-200">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 card-light p-6 md:p-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Next case study</p>
              <h3 className="text-xl font-semibold text-slate-900">{nextProject.title}</h3>
            </div>
            <Link href={getCaseStudyPath(nextProject.slug)}>
              <Button className="btn-primary-gradient rounded-xl gap-2">
                Read Case Study
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want results like this?"
        description="Let's discuss your web app, mobile app, or AI product — we'll map a path from idea to launch."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="All Projects"
        secondaryHref="/portfolio"
      />
    </>
  );
}
