import { motion } from "framer-motion";
import { Link } from "wouter";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

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
    <section className="section-padding relative overflow-hidden bg-brand-gradient animate-gradient-shift">
      <div className="hero-mesh" />
      <div className="section-container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-section text-white mb-5">{title}</h2>
          <p className="text-lead text-sky-100/90 mb-8">{description}</p>
          {children ?? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={primaryHref}>
                <Button size="lg" className="btn-outline-dark rounded-xl px-8 py-6 text-base">
                  {primaryLabel}
                </Button>
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link href={secondaryHref}>
                  <Button size="lg" className="btn-outline-light rounded-xl px-8 py-6 text-base">
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
