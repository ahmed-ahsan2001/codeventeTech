import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

const speedMap = {
  slow: "40s",
  normal: "30s",
  fast: "20s",
};

export default function Marquee({
  children,
  reverse = false,
  speed = "normal",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-void to-transparent pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-void to-transparent pointer-events-none"
        aria-hidden
      />
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className={`flex gap-4 w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
          style={{ animationDuration: speedMap[speed] }}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

export function MarqueeLight({ children, reverse, speed, className }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"
        aria-hidden
      />
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className={`flex gap-4 w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
          style={{ animationDuration: speedMap[speed ?? "normal"] }}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
