import { motion } from "framer-motion";
import { Link } from "wouter";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/animations/MagneticButton";
import GradientOrb from "@/components/effects/GradientOrb";

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  children?: ReactNode;
}

export default function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  children,
}: CTABannerProps) {
  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-electric/5 via-white to-cyan-50 border-t border-slate-100">
      <GradientOrb size={600} color="blue" blur={140} opacity={0.1} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-section text-slate-900 mb-5">{title}</h2>
          <p className="text-lead-light mb-10">{description}</p>
          {children ?? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={primaryHref}>
                <MagneticButton strength={0.2}>
                  <Button size="lg" className="btn-primary-gradient rounded-xl px-10 py-6 text-base gap-2">
                    {primaryLabel}
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </MagneticButton>
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link href={secondaryHref}>
                  <Button size="lg" className="btn-outline-dark rounded-xl px-10 py-6 text-base">
                    {secondaryLabel}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
