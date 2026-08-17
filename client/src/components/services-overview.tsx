import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code, Megaphone, TrendingUp, Palette, Sparkles, ArrowRight, ArrowUpRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/layout/section-header";
import FadeInSection from "@/components/animations/FadeInSection";
import NoiseOverlay from "@/components/effects/NoiseOverlay";

const iconMap = {
  code: Code,
  sparkles: Sparkles,
  megaphone: Megaphone,
  "trending-up": TrendingUp,
  palette: Palette,
  "layout-grid": LayoutGrid,
};

const colorMap: Record<string, string> = {
  blue: "from-electric/20 to-electric/5 border-electric/20 group-hover:border-electric/40",
  violet: "from-neon-purple/20 to-neon-purple/5 border-neon-purple/20 group-hover:border-neon-purple/40",
  emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 group-hover:border-emerald-500/40",
  cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 group-hover:border-cyan-500/40",
  amber: "from-amber-500/20 to-amber-500/5 border-amber-500/20 group-hover:border-amber-500/40",
};

export default function ServicesOverview() {
  return (
    <section className="relative section-padding section-dark overflow-hidden">
      <NoiseOverlay opacity={0.025} />

      <div className="section-container relative z-10">
        <FadeInSection direction="up">
          <SectionHeader
            eyebrow="Services"
            title="End-to-End Product & Operations Engineering"
            description="From AI integration and full-stack development to ERPNext deployment — one team, one vision, zero friction."
            dark
            align="center"
          />
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const colorClass = colorMap[service.color] ?? colorMap.blue;
            return (
              <FadeInSection key={service.id} delay={index * 0.07} direction="up">
                <Link href={service.id === "erp-implementation" ? "/erpnext-implementation" : `/services/${service.id}`}>
                  <motion.div
                    className={`card-holographic p-7 h-full group cursor-pointer`}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-600 tracking-wider">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.features.slice(0, 2).map((f) => (
                        <span key={f} className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-500 border border-white/[0.06]">
                          {f}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-electric group-hover:gap-2.5 transition-all">
                      Learn more <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </Link>
              </FadeInSection>
            );
          })}
        </div>

        <FadeInSection delay={0.4} direction="up" className="text-center mt-12">
          <Link href="/services">
            <Button className="btn-outline-light rounded-xl px-8 py-6 gap-2">
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
}
