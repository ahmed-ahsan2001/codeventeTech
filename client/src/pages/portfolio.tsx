import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import PortfolioGrid from "@/components/portfolio-grid";

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Portfolio - Our Best Web Development & Digital Marketing Projects"
        description="Explore CodeVente's portfolio showcasing successful web development, digital marketing, and UI/UX design projects with proven results."
        keywords="web development portfolio, digital marketing case studies, UI/UX design projects, react projects"
      />

      {/* Hero Section */}
      <section className="py-20 bg-brand-gradient animate-gradient-shift">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-xl text-sky-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing successful projects and client transformations.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-white/90 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-600">
              Filter projects by category to see our expertise in action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioGrid />

      {/* CTA Section */}
      <section className="py-20 bg-brand-gradient animate-gradient-shift">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-sky-100 mb-8">Let's create something amazing together.</p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#145983] px-8 py-4 font-semibold hover:bg-sky-50 transition-all duration-200"
              >
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
