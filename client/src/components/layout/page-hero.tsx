import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  compact?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-brand-gradient animate-gradient-shift ${
        compact ? "pt-32 pb-16 md:pt-36 md:pb-20" : "pt-32 pb-20 md:pt-40 md:pb-28"
      }`}
    >
      <div className="hero-mesh" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {eyebrow && (
            <motion.p
              className="eyebrow mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            className="heading-display text-white mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lead text-sky-100/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {description}
          </motion.p>
          {children && (
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
