import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function TextReveal({
  children,
  delay = 0,
  className = "",
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  // If children is not a string, just fade in normally
  if (typeof children !== "string") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
