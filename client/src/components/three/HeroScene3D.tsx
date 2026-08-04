import { useState, useEffect } from "react";
import Scene3D from "./Scene3D";
import FloatingShapes from "./FloatingShapes";

interface HeroScene3DProps {
  className?: string;
}

export default function HeroScene3D({ className = "" }: HeroScene3DProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Simple device detection for performance
    const checkPerformance = () => {
      // Check if on mobile or low-end device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const isLowEndMobile = isMobile && window.innerWidth < 768;

      setIsLowPerformance(isLowEndMobile);
    };

    checkPerformance();
  }, []);

  if (!isMounted) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 ${className}`} />
    );
  }

  if (isLowPerformance) {
    // Fallback to animated gradient on low-end devices
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-gradient-x ${className}`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Scene3D camera={{ position: [0, 0, 6], fov: 60 }}>
        <FloatingShapes />
      </Scene3D>
    </div>
  );
}
