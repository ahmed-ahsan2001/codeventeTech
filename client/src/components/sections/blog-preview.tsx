import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeader from "@/components/layout/section-header";
import FadeInSection from "@/components/animations/FadeInSection";
import { BLOG_POSTS } from "@/lib/content";

export default function BlogPreviewSection() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="section-padding section-muted">
      <div className="section-container">
        <FadeInSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeader
              eyebrow="Insights"
              title="From the CodeVente Blog"
              description="Thoughts on AI, engineering, and building products that scale."
              align="left"
            />
            <Link href="/blog">
              <motion.span
                className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:gap-3 transition-all cursor-pointer"
                whileHover={{ x: 4 }}
              >
                View all articles <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <FadeInSection key={post.slug} delay={index * 0.1} direction="up">
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
                      <span className="badge-glow bg-void/80 backdrop-blur-sm">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-electric transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
                  </div>
                </motion.article>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
