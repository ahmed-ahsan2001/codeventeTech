import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code, Megaphone, TrendingUp, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  code: Code,
  megaphone: Megaphone,
  "trending-up": TrendingUp,
  palette: Palette,
};

const colorMap = {
  blue: "bg-sky-100 text-sky-700",
  violet: "bg-blue-100 text-blue-700",
  cyan: "bg-cyan-100 text-cyan-700",
  emerald: "bg-teal-100 text-teal-700",
};

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-3">What We Build</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-5">Services Designed Around Outcomes</h2>
            <p className="text-base md:text-lg text-slate-300">
              We combine product thinking, design, engineering, and growth strategy into one delivery pipeline.
            </p>
          </motion.div>

          <div className="lg:col-span-8 space-y-4 md:space-y-5">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.id}
                  className="relative overflow-hidden bg-white border border-sky-100 rounded-2xl p-4 md:p-7 shadow-sm"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 to-blue-500 md:hidden" />
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-5 pl-2 md:pl-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${colorMap[service.color as keyof typeof colorMap]}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-2 md:mb-3">
                        <h3 className="text-base md:text-xl font-semibold text-slate-900 leading-tight">{service.title}</h3>
                        <span className="text-xs md:text-sm text-slate-500 bg-slate-100 rounded-full px-2 py-0.5">{`0${index + 1}`}</span>
                      </div>
                      <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">{service.description}</p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={feature}
                            className={`text-[11px] md:text-xs px-2 py-1 rounded-full bg-sky-50 text-slate-600 border border-sky-100 ${
                              featureIndex > 0 ? "hidden sm:inline-flex" : "inline-flex"
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-brand-gradient text-white px-8 py-3 font-semibold hover:opacity-95 transition-all duration-200"
            >
              Learn More About Our Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
