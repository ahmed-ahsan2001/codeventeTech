import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/seo-head";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import NewsletterSignup from "@/components/newsletter-signup";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

export default function Home() {
  const recentProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <>
      <SEOHead />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Recent Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-slate-600">
              Showcasing some of our latest work and client success stories.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        project.category === 'web' ? 'text-blue-600' :
                        project.category === 'marketing' ? 'text-violet-600' : 'text-emerald-600'
                      }`}>
                        {project.category === 'web' ? 'Web Development' :
                         project.category === 'marketing' ? 'Digital Marketing' : 'UI/UX Design'}
                      </span>
                      <Button variant="ghost" size="sm" className="p-2">
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-3 font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-200"
              >
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
}
