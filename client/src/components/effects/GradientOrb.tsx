import { motion } from "framer-motion";

interface GradientOrbProps {
  size?: number;
  color?: "blue" | "cyan" | "purple";
  blur?: number;
  opacity?: number;
  className?: string;
  animate?: boolean;
}

export default function GradientOrb({
  size = 300,
  color = "blue",
  blur = 80,
  opacity = 0.6,
  className = "",
  animate = true,
}: GradientOrbProps) {
  const colors = {
    blue: "from-blue-500/40 to-cyan-500/40",
    cyan: "from-cyan-500/40 to-sky-400/40",
    purple: "from-purple-500/40 to-pink-500/40",
  };

  const orbStyles = {
    width: `${size}px`,
    height: `${size}px`,
    filter: `blur(${blur}px)`,
    opacity,
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${colors[color]} ${className}`}
      style={orbStyles}
      animate={
        animate
          ? {
              scale: [1, 1.2, 1],
              opacity: [opacity * 0.8, opacity, opacity * 0.8],
            }
          : {}
      }
      transition={
        animate
          ? {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : {}
      }
    />
  );
}
