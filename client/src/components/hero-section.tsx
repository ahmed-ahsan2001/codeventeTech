import { useEffect, lazy, Suspense } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/animations/TextReveal";
import FadeInSection from "@/components/animations/FadeInSection";
import MagneticButton from "@/components/animations/MagneticButton";
import CountUp from "@/components/animations/CountUp";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import Marquee from "@/components/effects/Marquee";
import { TRUST_LOGOS, COMPANY_STATS } from "@/lib/content";
import heroOffice from "@/assets/hero-office.png";

const HeroScene3D = lazy(() => import("@/components/three/HeroScene3D"));

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const heroPoints = [
    "AI-native architecture",
    "ERPNext deployment & customization",
    "Production-ready from day one",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 lg:left-[40%] opacity-50">
          <Suspense fallback={null}>
            <HeroScene3D />
          </Suspense>
        </div>
        <div className="aurora-bg opacity-70" />
        <NoiseOverlay opacity={0.02} />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 lg:from-white lg:via-white/85 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
      </div>

      {/* Content */}
      <div className="section-container relative z-20 w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <FadeInSection delay={0} direction="up">
              <div className="badge-glow mb-8">
                <motion.span
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                />
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI & Software Development Agency</span>
              </div>
            </FadeInSection>

            <h1 className="heading-display text-slate-900 mb-6">
              <TextReveal delay={0.1} className="block">
                Building AI Products
              </TextReveal>
              <span className="block mt-1 gradient-text">
                <TextReveal delay={0.25}>That Define the Future</TextReveal>
              </span>
            </h1>

            <FadeInSection delay={0.45} direction="up">
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                We're the technical co-founder startups hire when{" "}
                <span className="text-slate-900 font-medium">speed</span> and{" "}
                <span className="text-slate-900 font-medium">quality</span> matter —
                from AI integration to production launch.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.55} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact">
                  <MagneticButton strength={0.25}>
                    <Button
                      size="lg"
                      className="btn-primary-gradient rounded-2xl px-10 py-7 text-base gap-2"
                    >
                      Start Your Project
                      <ArrowUpRight className="w-5 h-5" />
                    </Button>
                  </MagneticButton>
                </Link>
                <Link href="/portfolio">
                  <MagneticButton strength={0.25}>
                    <Button size="lg" className="btn-outline-light rounded-2xl px-10 py-7 text-base">
                      View Case Studies
                    </Button>
                  </MagneticButton>
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.65} direction="up">
              <div className="flex flex-wrap gap-3">
                {heroPoints.map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 bg-white text-sm text-slate-700 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    {point}
                  </span>
                ))}
              </div>
            </FadeInSection>
          </div>

          {/* Hero image + stats */}
          <FadeInSection delay={0.7} direction="left" className="lg:col-span-5">
            <motion.div style={{ x: springX, y: springY }} className="space-y-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3]">
                <img
                  src={heroOffice}
                  alt="CodeVente team collaborating on software and ERP projects"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={640}
                  height={480}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-semibold drop-shadow-sm">Karachi-based engineering team</p>
                  <p className="text-white/80 text-xs">AI, web, mobile & ERPNext delivery</p>
                </div>
              </div>

              <div className="card-holographic p-6 hidden lg:block">
                <p className="eyebrow-light mb-4 text-center">Impact at a Glance</p>
                <div className="grid grid-cols-2 gap-3">
                  {COMPANY_STATS.map((stat) => (
                    <div key={stat.label} className="stat-pill text-center py-4">
                      <p className="text-2xl font-bold text-slate-900">
                        <CountUp
                          end={stat.value}
                          suffix={stat.suffix}
                          decimals={stat.decimals ?? 0}
                          duration={2.5}
                        />
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeInSection>
        </div>

        {/* Trust logos marquee */}
        <FadeInSection delay={0.9} direction="up" className="mt-20 lg:mt-28">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-600 mb-6">
            Trusted by innovative teams
          </p>
          <Marquee speed="slow">
            {TRUST_LOGOS.map((logo) => (
              <span
                key={logo}
                className="mx-4 px-6 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-600 whitespace-nowrap shadow-sm"
              >
                {logo}
              </span>
            ))}
          </Marquee>
        </FadeInSection>

        {/* Scroll indicator */}
        <motion.div
          className="hidden lg:flex flex-col items-center gap-2 mt-16 text-slate-600"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
