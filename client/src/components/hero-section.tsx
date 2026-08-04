import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene3D from "@/components/three/HeroScene3D";
import TextReveal from "@/components/animations/TextReveal";
import FadeInSection from "@/components/animations/FadeInSection";
import MagneticButton from "@/components/animations/MagneticButton";
import CountUp from "@/components/animations/CountUp";
import GradientOrb from "@/components/effects/GradientOrb";
import MeshGradient from "@/components/effects/MeshGradient";
import GridOverlay from "@/components/effects/GridOverlay";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const heroPoints = [
    "AI-powered web & mobile products",
    "Production-ready architecture",
    "Startup-focused delivery",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with 3D Scene */}
      <div className="absolute inset-0 bg-space-dark">
        <div className="absolute inset-0 opacity-60">
          <HeroScene3D />
        </div>

        <MeshGradient opacity={0.4} />
        <GridOverlay size={64} opacity={0.02} />

        {/* Gradient orbs */}
        <GradientOrb
          size={400}
          color="blue"
          blur={100}
          opacity={0.3}
          className="top-0 left-1/4"
        />
        <GradientOrb
          size={500}
          color="cyan"
          blur={120}
          opacity={0.2}
          className="bottom-0 right-1/4"
        />
        <GradientOrb
          size={300}
          color="purple"
          blur={80}
          opacity={0.25}
          className="top-1/2 right-1/3"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="section-container relative z-20 w-full py-32 lg:py-40"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <FadeInSection delay={0} direction="up">
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sky-100 text-sm mb-8 backdrop-blur-md">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full bg-emerald-400"
                />
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="font-medium">AI & Software Development for Startups</span>
              </div>
            </FadeInSection>

            {/* Headline */}
            <h1 className="heading-display text-white mb-6">
              <TextReveal delay={0.1} className="block">
                Build AI Products That
              </TextReveal>
              <span className="block mt-2 bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                <TextReveal delay={0.3}>Define the Future</TextReveal>
              </span>
            </h1>

            {/* Subheading */}
            <FadeInSection delay={0.5} direction="up">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
                We're the technical co-founder startups hire when speed{" "}
                <span className="text-cyan-300 font-semibold">and</span> quality matter —
                from AI integration to production launch.
              </p>
            </FadeInSection>

            {/* CTAs */}
            <FadeInSection delay={0.6} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact">
                  <MagneticButton strength={0.2}>
                    <Button
                      size="lg"
                      className="btn-primary-gradient rounded-2xl px-10 py-7 text-lg gap-3 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
                    >
                      Start Your Project
                      <ArrowUpRight className="w-5 h-5" />
                    </Button>
                  </MagneticButton>
                </Link>
                <Link href="/portfolio">
                  <MagneticButton strength={0.2}>
                    <Button
                      size="lg"
                      className="btn-outline-light rounded-2xl px-10 py-7 text-lg border-2"
                    >
                      View Case Studies
                    </Button>
                  </MagneticButton>
                </Link>
              </div>
            </FadeInSection>

            {/* Feature Points */}
            <FadeInSection delay={0.7} direction="up">
              <div className="grid sm:grid-cols-3 gap-3">
                {heroPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    className="card-holographic px-5 py-4 text-sm text-slate-200 flex items-start gap-3"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                    <span className="font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>

          {/* Right Column - Stats Card */}
          <FadeInSection delay={0.8} direction="left" className="lg:col-span-5">
            <div className="card-holographic p-8 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                <p className="eyebrow">Why CodeVente</p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Trusted by Innovative Startups
              </h3>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.div
                  className="stat-pill relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  <p className="text-4xl font-bold text-white relative z-10">
                    <CountUp end={50} suffix="+" duration={2.5} />
                  </p>
                  <p className="text-sm text-slate-400 mt-2 relative z-10">
                    Projects Delivered
                  </p>
                </motion.div>

                <motion.div
                  className="stat-pill relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  <p className="text-4xl font-bold text-white relative z-10">
                    <CountUp end={95} suffix="%" duration={2.5} />
                  </p>
                  <p className="text-sm text-slate-400 mt-2 relative z-10">
                    Client Satisfaction
                  </p>
                </motion.div>

                <motion.div
                  className="stat-pill relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  <p className="text-4xl font-bold text-white relative z-10">
                    <CountUp end={12} suffix="+" duration={2.5} />
                  </p>
                  <p className="text-sm text-slate-400 mt-2 relative z-10">Industries Served</p>
                </motion.div>

                <motion.div
                  className="stat-pill relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  <p className="text-4xl font-bold text-white relative z-10">
                    <CountUp end={2.4} suffix="x" decimals={1} duration={2.5} />
                  </p>
                  <p className="text-sm text-slate-400 mt-2 relative z-10">
                    Avg. Speed Increase
                  </p>
                </motion.div>
              </div>

              {/* Trust Bar */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-center text-sm text-slate-400 mb-3">Trusted by</p>
                <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    Zakaria Masjid
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    AK Impression
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    Quran App
                  </span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Scroll Indicator */}
        <FadeInSection delay={1} direction="up" className="mt-16 lg:mt-20">
          <motion.div
            className="flex flex-col items-center gap-2 text-slate-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </FadeInSection>
      </motion.div>
    </section>
  );
}
