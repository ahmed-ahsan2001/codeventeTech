import { motion } from "framer-motion";
import { GraduationCap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import SEOHead from "@/components/seo-head";

export default function Courses() {
  const [, setLocation] = useLocation();

  return (
    <>
      <SEOHead
        title="Professional Tech Courses - AI Agent Content Video Ads"
        description="Master AI-powered video advertising and content creation. Learn to create automated content with AI agents. Expert instruction and hands-on projects."
        keywords="ai video ads, content creation courses, ai agents, video marketing training, online tech education, ai content bootcamp"
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
            Learn Future-Ready Skills
          </motion.h1>
          <motion.p
            className="text-xl text-sky-100 mb-8"
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
              className="bg-white text-[#145983] px-8 py-4 font-semibold hover:bg-sky-50 transition-all duration-200"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Browse Courses
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white bg-transparent px-8 py-4 font-semibold hover:bg-white hover:text-[#145983] transition-all duration-200 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Learning
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Course Offering Section */}
      <section id="courses" className="py-20 bg-brand-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Course</h2>
            <p className="text-lg text-slate-300">
              Limited time launch pricing - First 100 students only!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#141824] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-6">
                    <div>
                      <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        🚀 LAUNCH OFFER
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        AI Agent Content Video Ads
                      </h3>
                      <p className="text-gray-300 text-lg mb-4">
                        Master AI-powered video advertising and content creation with automated agents.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <GraduationCap className="w-5 h-5 text-orange-500" />
                        <span>10 Full Modules with Lifetime Access</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Play className="w-5 h-5 text-orange-500" />
                        <span>Live Projects & Challenges</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <GraduationCap className="w-5 h-5 text-orange-500" />
                        <span>WhatsApp Support & Private Community</span>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-3 pt-4">
                      <span className="text-5xl font-bold text-orange-500">$15</span>
                      <div>
                        <span className="text-2xl font-semibold text-white">Rs. 4,800</span>
                        <div className="text-sm text-gray-400">Limited Time Only</div>
                      </div>
                      <span className="text-gray-500 line-through text-lg ml-2">Rs. 9,900</span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Button
                      size="lg"
                      onClick={() => setLocation("/courses/enroll")}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-orange-500/50 transition-all duration-200"
                    >
                      Enroll Now
                      <GraduationCap className="w-6 h-6 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-gray-400">
              ⏱️ Price increases to Rs. 9,900 after 100 enrollments • Limited seats remaining
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
