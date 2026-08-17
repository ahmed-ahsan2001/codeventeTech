import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import CTABanner from "@/components/layout/cta-banner";
import NotFound from "@/pages/404";
import { BLOG_POSTS } from "@/lib/content";

function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <SEOHead
        title={`${post.title} | CodeVente Blog`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
      />

      <article>
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-void overflow-hidden">
          <div className="aurora-bg" />
          <div className="section-container relative z-10 max-w-3xl">
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm mb-8 transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </span>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge-glow mb-5">{post.category}</span>
              <h1 className="heading-display text-white mb-6">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
                <span>{post.date}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-container max-w-3xl py-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-2xl mb-12 aspect-[16/9] object-cover"
          />

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">{post.excerpt}</p>
            <p className="text-slate-600 leading-relaxed mb-6">
              At CodeVente, we work with startups every day to turn ambitious ideas into production-ready products.
              This article explores key insights from our experience building AI-powered software for founders who
              need to move fast without sacrificing quality.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Key Takeaways</h2>
            <ul className="space-y-3 text-slate-600">
              <li>Start with a clear problem definition before choosing your tech stack</li>
              <li>AI features should solve real user problems, not exist for marketing</li>
              <li>Production readiness — auth, monitoring, CI/CD — should be planned from day one</li>
              <li>Ship early, iterate based on real user feedback, not assumptions</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-6">
              Whether you're building your first MVP or scaling an existing product, the principles remain the same:
              focus on user value, ship incrementally, and harden for production as you grow.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-12 pt-8 border-t border-slate-200">
            <span className="text-sm text-slate-500">Share:</span>
            <Button variant="outline" size="sm" className="rounded-lg gap-2">
              <Share2 className="w-4 h-4" />
              Copy link
            </Button>
          </div>
        </div>

        {related.length > 0 && (
          <section className="section-padding-sm section-muted border-t border-slate-100">
            <div className="section-container max-w-3xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Articles</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`}>
                    <div className="card-light p-5 cursor-pointer hover:-translate-y-1 transition-transform">
                      <p className="text-xs text-electric mb-1">{r.category}</p>
                      <p className="font-medium text-slate-900 text-sm">{r.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTABanner
        title="Want to Build Something Like This?"
        description="Let's discuss your product idea and how we can help you ship faster."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
      />
    </>
  );
}
