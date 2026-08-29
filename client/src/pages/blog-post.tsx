import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import CTABanner from "@/components/layout/cta-banner";
import NotFound from "@/pages/404";
import { getBlogPost, getRelatedPosts } from "@/lib/blog";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { useToast } from "@/hooks/use-toast";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getBlogPost(slug);
  const { toast } = useToast();

  if (!post) return <NotFound />;

  const related = getRelatedPosts(slug, 3);
  const postPath = `/blog/${post.slug}`;
  const { Content } = post;

  const parseDate = (dateStr: string) => {
    const parsed = Date.parse(dateStr);
    return Number.isNaN(parsed) ? new Date().toISOString() : new Date(parsed).toISOString();
  };

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({ title: "Link copied", description: "Article URL copied to clipboard." });
    } catch {
      toast({ title: "Could not copy link", variant: "destructive" });
    }
  }, [toast]);

  return (
    <>
      <SEOHead
        title={`${post.title} | CodeVente Blog`}
        description={post.excerpt}
        canonicalPath={postPath}
        ogImage={post.image}
        jsonLd={[
          articleJsonLd({
            title: post.title,
            description: post.excerpt,
            path: postPath,
            datePublished: parseDate(post.date),
            image: post.image,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: postPath },
          ]),
        ]}
      />

      <article>
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-slate-100 overflow-hidden">
          <div className="aurora-bg opacity-60" />
          <div className="section-container relative z-10 max-w-3xl">
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-slate-500 hover:text-electric text-sm mb-8 transition-colors cursor-pointer">
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
              <h1 className="heading-display text-slate-900 mb-6">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <time dateTime={parseDate(post.date)}>{post.date}</time>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-light section-padding-sm">
          <div className="section-container max-w-3xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl mb-12 aspect-[16/9] object-cover"
              loading="eager"
              width={1200}
              height={630}
            />

            <div className="max-w-none">
              <p className="text-xl text-slate-700 leading-relaxed mb-10 font-medium">{post.excerpt}</p>
              <Content />
            </div>

            <div className="flex items-center gap-3 mt-12 pt-8 border-t border-slate-200">
              <span className="text-sm text-slate-500">Share:</span>
              <Button variant="outline" size="sm" className="rounded-lg gap-2" onClick={copyLink}>
                <Share2 className="w-4 h-4" />
                Copy link
              </Button>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-padding-sm section-muted border-t border-slate-100">
            <div className="section-container max-w-3xl">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`}>
                    <article className="card-light p-5 cursor-pointer hover:-translate-y-1 transition-transform h-full">
                      <p className="text-xs text-electric mb-1">{r.category}</p>
                      <h3 className="font-medium text-slate-900 text-sm leading-snug">{r.title}</h3>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTABanner
        title="Need Help With Your Project?"
        description="ERPNext, Shopify, mobile apps, or custom software — tell us what you are building."
        primaryLabel="Contact CodeVente"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
