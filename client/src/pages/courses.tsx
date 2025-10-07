import { motion } from "framer-motion";
import { GraduationCap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";

export default function Courses() {
  return (
    <>
      <SEOHead
        title="Professional Tech Courses - Learn Web Development, Marketing & Design"
        description="Advance your career with CodeVente's professional courses in web development, digital marketing, and UI/UX design. Expert instruction and hands-on projects."
        keywords="web development courses, digital marketing training, ui ux design courses, online tech education, programming bootcamp"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-violet-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Learn Future-Ready Skills
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master in-demand technologies with hands-on learning from industry experts.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-blue-600 px-8 py-4 font-semibold hover:bg-blue-50 transition-all duration-200"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Browse Courses
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white bg-transparent px-8 py-4 font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Learning
            </Button>
          </motion.div>
        </div>
      </section>

      {/* No Courses Section */}
      <section id="courses" className="py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">No Current Courses Available</h2>
            <p className="text-lg text-slate-600 mb-8">
              We’re updating our course catalog. Please check back soon or subscribe to our newsletter to stay informed.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-3 font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-200"
            >
              Notify Me
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
