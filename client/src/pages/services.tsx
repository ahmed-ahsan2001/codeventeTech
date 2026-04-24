import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  const serviceImages = {
    "web-development": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "digital-marketing": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "seo": "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "ui-ux": "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  };

  return (
    <>
      <SEOHead
        title="Our Services - Web Development, Digital Marketing, SEO & UI/UX Design"
        description="Comprehensive digital solutions including web development, digital marketing, SEO optimization, and UI/UX design services for startups and enterprises."
        keywords="web development services, digital marketing agency, SEO optimization, UI/UX design, react development"
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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-sky-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive digital solutions tailored to your business needs.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center mr-4 border border-sky-100">
                    {/* Icon would be rendered here */}
                  </div>
                  <h2 className="text-4xl font-bold text-white">{service.title}</h2>
                </div>
                <p className="text-lg text-slate-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-sky-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="bg-brand-gradient text-white px-8 py-3 font-semibold transition-all duration-200 hover:opacity-95">
                    Get Quote
                  </Button>
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img
                  src={serviceImages[service.id as keyof typeof serviceImages]}
                  alt={`${service.title} illustration`}
                  className="rounded-xl shadow-lg ring-1 ring-sky-100"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gradient animate-gradient-shift">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-sky-100 mb-8">
              Let's discuss how our services can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#145983] px-8 py-4 font-semibold hover:bg-sky-50 transition-all duration-200"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-[#145983] transition-all duration-200"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
