import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { getServiceVisual } from "@/lib/service-images";

type ServiceVisualVariant = "featured" | "card" | "banner";

interface ServiceVisualProps {
  serviceId: string;
  variant?: ServiceVisualVariant;
  className?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
}

export default function ServiceVisual({
  serviceId,
  variant = "featured",
  className,
  imageClassName,
  loading = "lazy",
}: ServiceVisualProps) {
  const config = getServiceVisual(serviceId);

  if (!config) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-white/5 text-slate-500",
          className,
        )}
      >
        No preview
      </div>
    );
  }

  const metrics =
    variant === "card" ? config.metrics.slice(0, 2) : config.metrics.slice(0, 3);

  return (
    <div className={cn("relative overflow-hidden bg-void/40", className)}>
      <img
        src={config.src}
        alt={config.alt}
        className={cn("w-full h-full object-cover", imageClassName)}
        loading={loading}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/35 to-void/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/40 via-transparent to-transparent pointer-events-none" />

      {variant === "featured" && config.kpiHeadline && (
        <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-auto">
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-void/70 backdrop-blur-md px-3 py-2 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-slate-300 uppercase tracking-wider font-semibold">
              {config.kpiHeadline}
            </span>
          </div>
        </div>
      )}

      {variant === "featured" && (
        <div className="absolute top-14 right-3 sm:top-4 sm:right-4 w-[42%] max-w-[140px] hidden sm:block pointer-events-none">
          <div className="rounded-lg border border-white/15 bg-void/75 backdrop-blur-md p-2.5 shadow-xl">
            <div className="flex items-end justify-between gap-1 h-14">
              {[42, 68, 55, 82, 74, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-electric/80 to-cyan-400/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="text-[10px] text-slate-400 mt-1.5 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-cyan-400" />
              Outcomes trend
            </p>
          </div>
        </div>
      )}

      <div
        className={cn(
          "absolute left-2 right-2 sm:left-3 sm:right-3",
          variant === "banner" ? "bottom-3" : "bottom-2 sm:bottom-3",
        )}
      >
        <div
          className={cn(
            "grid gap-1.5 sm:gap-2",
            metrics.length === 2 ? "grid-cols-2" : "grid-cols-3",
          )}
        >
          {metrics.map((metric) => (
            <div
              key={`${metric.label}-${metric.value}`}
              className="rounded-lg border border-white/15 bg-void/80 backdrop-blur-md px-2 py-2 sm:px-2.5 sm:py-2.5 shadow-lg"
            >
              <p className="text-[9px] sm:text-[10px] uppercase tracking-wide text-slate-400 leading-tight truncate">
                {metric.label}
              </p>
              <p className="text-sm sm:text-base font-bold text-white leading-tight mt-0.5">
                {metric.value}
              </p>
              {metric.delta && (
                <p className="text-[9px] sm:text-[10px] text-cyan-300/90 mt-0.5 truncate flex items-center gap-0.5">
                  <TrendingUp className="w-2.5 h-2.5 flex-shrink-0" />
                  {metric.delta}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}