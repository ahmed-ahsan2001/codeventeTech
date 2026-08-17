import { motion } from "framer-motion";
import {
  Landmark, HeartPulse, ShoppingBag, GraduationCap, Layers, Heart,
} from "lucide-react";
import SectionHeader from "@/components/layout/section-header";
import FadeInSection from "@/components/animations/FadeInSection";
import { INDUSTRIES } from "@/lib/content";

const iconMap = {
  landmark: Landmark,
  "heart-pulse": HeartPulse,
  "shopping-bag": ShoppingBag,
  "graduation-cap": GraduationCap,
  layers: Layers,
  heart: Heart,
};

export default function IndustriesSection() {
  return (
    <section className="section-padding section-light">
      <div className="section-container">
        <FadeInSection direction="up">
          <SectionHeader
            eyebrow="Industries"
            title="Built for Every Vertical"
            description="Deep domain expertise across sectors — from fintech to healthcare to e-commerce."
            align="center"
          />
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap];
            return (
              <FadeInSection key={industry.id} delay={index * 0.07} direction="up">
                <motion.div
                  className="card-light p-7 group cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-electric/5 border border-electric/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric group-hover:border-electric transition-all duration-300">
                      <Icon className="w-5 h-5 text-electric group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1.5">{industry.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
