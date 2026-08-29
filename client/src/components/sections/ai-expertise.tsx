import { motion } from "framer-motion";
import {
  Brain, Bot, Database, Eye, Sparkles, Activity,
} from "lucide-react";
import SectionHeader from "@/components/layout/section-header";
import FadeInSection from "@/components/animations/FadeInSection";
import GradientOrb from "@/components/effects/GradientOrb";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import { AI_CAPABILITIES } from "@/lib/content";

const iconMap = {
  brain: Brain,
  bot: Bot,
  database: Database,
  eye: Eye,
  sparkles: Sparkles,
  activity: Activity,
};

export default function AIExpertiseSection() {
  return (
    <section className="relative section-padding section-dark overflow-hidden">
      <div className="aurora-bg" />
      <NoiseOverlay />
      <GradientOrb size={500} color="purple" blur={120} opacity={0.12} className="top-0 right-0" />
      <GradientOrb size={400} color="cyan" blur={100} opacity={0.1} className="bottom-0 left-1/4" />

      <div className="section-container relative z-10">
        <FadeInSection direction="up">
          <SectionHeader
            eyebrow="AI Expertise"
            title="Intelligence Engineered Into Every Product"
            description="From LLM integrations to autonomous agents — we build AI that delivers measurable business impact."
            dark
            align="center"
          />
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {AI_CAPABILITIES.map((cap, index) => {
            const Icon = iconMap[cap.icon as keyof typeof iconMap];
            return (
              <FadeInSection key={cap.title} delay={index * 0.08} direction="up">
                <motion.div
                  className="card-holographic p-7 h-full group"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-5 group-hover:bg-electric/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-electric transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{cap.description}</p>
                </motion.div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
