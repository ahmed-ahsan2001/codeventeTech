import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const maxWidth = align === "center" ? "max-w-3xl" : "max-w-2xl";

  return (
    <motion.div
      className={`mb-14 md:mb-16 ${alignClass} ${maxWidth}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
    >
      {eyebrow && <p className="eyebrow-light mb-3">{eyebrow}</p>}
      <h2 className="heading-section text-slate-900 mb-4">{title}</h2>
      {description && <p className="text-lead-light">{description}</p>}
    </motion.div>
  );
}
