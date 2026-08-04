import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import ReactCountUp from "react-countup";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export default function CountUp({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      const timer = setTimeout(() => {
        setHasStarted(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasStarted, delay]);

  return (
    <span ref={ref} className={className}>
      {hasStarted ? (
        <ReactCountUp
          start={start}
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
        />
      ) : (
        `${prefix}${start}${suffix}`
      )}
    </span>
  );
}
