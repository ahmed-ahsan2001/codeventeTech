import { cn } from "@/lib/utils";
import { CoverIllustration } from "@/components/blog/cover-illustrations";
import { COVER_THEMES, resolveCoverCategory } from "@/lib/blog/cover-themes";

export interface BlogCoverProps {
  title: string;
  category: string;
  className?: string;
  /** card = blog grid, hero = article header, compact = small related links */
  size?: "card" | "hero" | "compact";
  showBrand?: boolean;
}

const sizeStyles = {
  card: {
    title: "text-[13px] sm:text-sm md:text-[15px] font-bold leading-snug line-clamp-3",
    category: "text-[9px] sm:text-[10px]",
    padding: "p-4 sm:p-5",
    illustration: "w-[44%] max-w-[140px] sm:max-w-[160px]",
  },
  hero: {
    title: "text-xl sm:text-2xl md:text-3xl font-bold leading-tight line-clamp-4",
    category: "text-xs",
    padding: "p-6 sm:p-8 md:p-10",
    illustration: "w-[38%] max-w-[220px] sm:max-w-[280px]",
  },
  compact: {
    title: "text-xs font-bold leading-snug line-clamp-2",
    category: "text-[8px]",
    padding: "p-3",
    illustration: "w-[40%] max-w-[90px]",
  },
};

export default function BlogCover({
  title,
  category,
  className,
  size = "card",
  showBrand = true,
}: BlogCoverProps) {
  const coverCategory = resolveCoverCategory(category);
  const theme = COVER_THEMES[coverCategory];
  const styles = sizeStyles[size];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-white border-b border-slate-100",
        className,
      )}
      role="img"
      aria-label={`${title} — ${category}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: theme.blob }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className={cn("relative z-10 h-full flex items-center gap-3", styles.padding)}>
        <div className="flex-1 min-w-0">
          <span
            className={cn(
              "inline-block font-bold uppercase tracking-[0.18em] mb-1.5",
              styles.category,
            )}
            style={{ color: theme.accent }}
          >
            {category}
          </span>
          <p className={cn("text-slate-900", styles.title)}>{title}</p>
        </div>

        <div className={cn("flex-shrink-0 flex items-center justify-end", styles.illustration)}>
          <CoverIllustration
            category={coverCategory}
            accent={theme.accent}
            accentLight={theme.accentLight}
            className="w-full h-auto"
          />
        </div>
      </div>

      {showBrand && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[9px] sm:text-[10px] font-bold text-slate-400 tracking-tight pointer-events-none">
          Code<span style={{ color: theme.accent }}>Vente</span>
        </div>
      )}
    </div>
  );
}
