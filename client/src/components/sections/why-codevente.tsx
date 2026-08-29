import { motion } from "framer-motion";
import SectionHeader from "@/components/layout/section-header";
import FadeInSection from "@/components/animations/FadeInSection";
import CountUp from "@/components/animations/CountUp";
import GradientOrb from "@/components/effects/GradientOrb";
import { WHY_CODEVENTE } from "@/lib/content";

export default function WhyCodeVenteSection() {
  return (
    <section className="relative section-padding section-dark overflow-hidden">
      <GradientOrb size={600} color="blue" blur={140} opacity={0.1} className="top-1/2 left-0 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <FadeInSection direction="up">
          <SectionHeader
            eyebrow="Why CodeVente"
            title="The Technical Partner Startups Trust"
            description="We're not a typical software house. We're engineers who think like founders."
            dark
            align="center"
          />
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-5 mt-16">
          {WHY_CODEVENTE.map((item, index) => (
            <FadeInSection key={item.title} delay={index * 0.1} direction="up">
              <motion.div
                className="card-holographic p-8 h-full group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between gap-6 mb-5">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-electric transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-right flex-shrink-0">
                    <div className="text-3xl font-bold gradient-text">
                      <CountUp
                        end={parseFloat(item.stat)}
                        suffix={item.stat.includes("%") ? "%" : item.stat.includes("+") ? "+" : item.stat.includes("x") ? "x" : ""}
                        decimals={item.stat.includes(".") ? 1 : 0}
                        duration={2}
                      />
                    </div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">{item.statLabel}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
