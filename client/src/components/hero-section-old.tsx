import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroOffice from "@/assets/hero-office.png";

export default function HeroSection() {
  const heroPoints = [
    "Web, mobile & AI products built for startups",
    "Custom LLM integrations & intelligent automation",
    "Production-ready architecture from prototype to launch",
  ];

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-28 lg:pt-32 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroOffice}
          alt="CodeVente team collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-gradient animate-gradient-shift opacity-92" />
        <div className="hero-mesh" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute -top-24 -left-12 w-72 h-72 rounded-full bg-sky-400/10 blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-cyan-300/10 blur-3xl animate-pulse-soft [animation-delay:1200ms]" />
      </div>

      <div className="section-container relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sky-100 text-sm mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AI & Software Development for Startups — Karachi & Remote
            </motion.div>

            <motion.h1
              className="heading-display text-white mb-6"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Build AI-Powered Software{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                That Startups Can Scale
              </span>
            </motion.h1>

            <motion.p
              className="text-lead text-slate-200 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We design and ship web apps, mobile apps, and AI-powered products for startups —
              from vibe-coded prototypes to secure, production-ready software ready for real users
              and investor conversations.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link href="/contact">
                <Button size="lg" className="btn-outline-dark rounded-xl px-8 py-6 text-base gap-2">
                  Book Free Audit
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" className="btn-outline-light rounded-xl px-8 py-6 text-base">
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {heroPoints.map((point) => (
                <div
                  key={point}
                  className="card-glass px-4 py-3.5 text-sm text-slate-200 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-sky-300 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="card-glass p-6 md:p-8">
              <p className="eyebrow mb-3">Execution Snapshot</p>
              <h3 className="text-2xl font-bold text-white mb-6">
                From Demo to Launch in Weeks
              </h3>

              <div className="space-y-4">
                <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Recent delivery</p>
                  <p className="font-semibold text-white">Quran App — Web + Mobile</p>
                  <p className="text-sm text-slate-400 mt-1">React, React Native, Firebase</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="stat-pill">
                    <p className="text-3xl font-bold text-white">95%</p>
                    <p className="text-xs text-slate-400 mt-1">Client Satisfaction</p>
                  </div>
                  <div className="stat-pill">
                    <p className="text-3xl font-bold text-white">50+</p>
                    <p className="text-xs text-slate-400 mt-1">Projects Delivered</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs text-slate-400">
                    Trusted by Zakaria Masjid, AK Impression, Khadija Tul Kubra & more
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
