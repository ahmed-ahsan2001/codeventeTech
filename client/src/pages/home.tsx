import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, GraduationCap, Clock, Users, MessageCircle } from "lucide-react"; // ✅ Added MessageCircle
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import NewsletterSignup from "@/components/newsletter-signup";
import { PORTFOLIO_PROJECTS, COMPANY_INFO } from "@/lib/constants"; // ✅ optional: use company info if phone available

export default function Home() {
  const recentProjects = PORTFOLIO_PROJECTS.slice(0, 3);
 

  // ✅ Define your WhatsApp link — replace with your business number
  const whatsappNumber = COMPANY_INFO?.whatsapp || "+923122739457";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your services.");
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${whatsappMessage}`;

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

      {/* Featured Courses */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Learn New Skills</h2>
            <p className="text-xl text-slate-600">
              Advance your career with our professional courses taught by industry experts.
            </p>
          </motion.div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                      Save {Math.round((1 - parseInt(course.price.replace('$', '').replace(',', '')) / parseInt(course.originalPrice.replace('$', '').replace(',', ''))) * 100)}%
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{course.category}</Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{course.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="text-sm text-slate-500">
                        {course.level}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-slate-900">{course.price}</span>
                        <span className="text-sm text-slate-500 line-through ml-2">{course.originalPrice}</span>
                      </div>
                      <Link href="/courses">
                        <Button variant="ghost" size="sm" className="p-2">
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div> */}

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/courses">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-200"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                View All Courses
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* ✅ WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
