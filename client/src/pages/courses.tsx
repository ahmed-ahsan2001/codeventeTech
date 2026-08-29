import { motion } from "framer-motion";
import { GraduationCap, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import SEOHead from "@/components/seo-head";
import PageHero from "@/components/layout/page-hero";
import SectionHeader from "@/components/layout/section-header";

export default function Courses() {
  const [, setLocation] = useLocation();

  return (
    <>
      <SEOHead
        title="Professional Tech Courses - AI Agent Content Video Ads"
        description="Master AI-powered video advertising and content creation. Learn to create automated content with AI agents. Expert instruction and hands-on projects."
        keywords="ai video ads, content creation courses, ai agents, video marketing training, online tech education, ai content bootcamp"
        canonicalPath="/courses"
      />

      <PageHero
        eyebrow="Courses"
        title="Learn Future-Ready Skills"
        description="Master in-demand technologies with hands-on learning from industry experts."
      >
        <Button
          size="lg"
          onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
          className="btn-outline-dark rounded-xl px-8 py-6 text-base gap-2"
        >
          <GraduationCap className="w-5 h-5" />
          Browse Courses
        </Button>
        <Button
          size="lg"
          onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
          className="btn-outline-light rounded-xl px-8 py-6 text-base gap-2"
        >
          <Play className="w-5 h-5" />
          Start Learning
        </Button>
      </PageHero>

      <section id="courses" className="section-padding section-dark">
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow="Featured"
            title="AI Agent Content Video Ads"
            description="Limited time launch pricing — first 100 students only."
            dark
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl mx-auto"
          >
            <div className="card-glass overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-5">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-sky-300 text-xs font-semibold uppercase tracking-wide">
                      Launch Offer
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      AI Agent Content Video Ads
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Master AI-powered video advertising and content creation with automated agents.
                    </p>

                    <div className="space-y-2.5">
                      {[
                        "10 Full Modules with Lifetime Access",
                        "Live Projects & Challenges",
                        "WhatsApp Support & Private Community",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                          <GraduationCap className="w-4 h-4 text-electric flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-baseline gap-3 pt-2">
                      <span className="text-4xl font-bold text-slate-900">$15</span>
                      <div>
                        <span className="text-xl font-semibold text-electric">Rs. 4,800</span>
                        <p className="text-xs text-slate-500 line-through">Rs. 9,900</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Button
                      size="lg"
                      onClick={() => setLocation("/courses/enroll")}
                      className="btn-primary-gradient px-10 py-7 text-lg rounded-xl gap-2"
                    >
                      Enroll Now
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                    <p className="text-xs text-slate-500 text-center mt-3">
                      Price increases after 100 enrollments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
