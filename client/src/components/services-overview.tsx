import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code, Megaphone, TrendingUp, Palette, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/layout/section-header";

const iconMap = {
  code: Code,
  sparkles: Sparkles,
  megaphone: Megaphone,
  "trending-up": TrendingUp,
  palette: Palette,
};

export default function ServicesOverview() {
  return (
    <section className="section-padding section-dark">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <SectionHeader
              eyebrow="What We Build"
              title="AI, Software & Growth — One Team"
              description="Web apps, mobile apps, AI integrations, and growth systems — designed and shipped for startup speed."
              align="left"
              dark
            />
            <Link href="/services">
              <Button className="btn-primary-gradient gap-2 mt-2">
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.id}
                  className="card-light p-6 group hover:-translate-y-1"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">{`0${index + 1}`}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
