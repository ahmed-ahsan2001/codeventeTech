import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo-head";
import PageHero from "@/components/layout/page-hero";
import FadeInSection from "@/components/animations/FadeInSection";
import CTABanner from "@/components/layout/cta-banner";
import { BLOG_POSTS } from "@/lib/content";

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog — AI, Engineering & Startup Insights | CodeVente"
        description="Insights on AI development, software engineering, and building products that scale. From the CodeVente team."
        keywords="AI blog, software development blog, startup engineering, tech insights"
        canonicalPath="/blog"
      />

      <PageHero
        eyebrow="Blog"
        title="Insights & Engineering"
        description="Thoughts on AI, product development, and building startups that scale."
      />

      <section className="section-padding section-light">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, index) => (
              <FadeInSection key={post.slug} delay={index * 0.08} direction="up">
                <Link href={`/blog/${post.slug}`}>
                  <motion.article
                    className="card-light overflow-hidden group cursor-pointer h-full"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="badge-glow">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>
                      <h2 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-electric transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-slate-600 line-clamp-2 mb-4">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-electric group-hover:gap-2 transition-all">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your Product?"
        description="Let's turn your idea into a production-ready AI product."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
      />
    </>
  );
}
