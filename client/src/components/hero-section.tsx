import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroOffice from "@/assets/hero-office.png";

export default function HeroSection() {
  const heroPoints = [
    "Web and mobile products built for growth",
    "Conversion-focused UX and brand positioning",
    "Fast execution with measurable outcomes",
  ];

  return (
    <section className="relative min-h-[78vh] lg:min-h-[82vh] flex items-center overflow-hidden pt-28 lg:pt-32 pb-12">
      {/* Branded background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroOffice}
          alt="CodeVente team collaborating in office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-gradient animate-gradient-shift opacity-90" />
      </div>

      {/* Animated ambient glows */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute -top-24 -left-12 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-cyan-200/20 blur-3xl animate-pulse-soft [animation-delay:1200ms]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-cyan-300 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-sky-200 rounded-full opacity-40"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-8 h-8 bg-sky-300 rounded-full opacity-50"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white/90 text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Partnering with ambitious brands across Pakistan and beyond
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build Digital Products
          <br className="hidden md:block" />
          {" "}
          That People Actually Use
          <br />
          <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
            and Businesses Can Scale
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We blend product strategy, design, and development to launch modern web and mobile
          experiences that drive engagement, trust, and revenue.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-[#145983] px-8 py-4 font-semibold hover:bg-sky-50 transition-all duration-200 shadow-lg"
            >
              Start Your Project
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/80 text-white bg-transparent px-8 py-4 font-semibold hover:bg-white hover:text-[#145983] transition-all duration-200 backdrop-blur-sm"
            >
              View Our Work
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {heroPoints.map((point) => (
            <div key={point} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white text-sm flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-200 flex-shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            <div className="brand-glass rounded-2xl p-6 text-slate-100 shadow-2xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em] mb-2">Execution Snapshot</p>
              <h3 className="text-2xl font-bold text-white mb-4">From Idea to Launch in Weeks</h3>
              <div className="space-y-4">
                <div className="rounded-xl bg-slate-900/70 p-4 border border-sky-700/40">
                  <p className="text-sm text-slate-300">Recent delivery</p>
                  <p className="font-semibold text-white">Quran App (Web + Mobile)</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-900/70 p-4 border border-sky-700/40">
                    <p className="text-2xl font-bold text-white">95%</p>
                    <p className="text-xs text-slate-300">Client Satisfaction</p>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 p-4 border border-sky-700/40">
                    <p className="text-2xl font-bold text-white">50+</p>
                    <p className="text-xs text-slate-300">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
