import type { FC } from "react";
import type { BlogCoverCategory } from "@/lib/blog/cover-themes";

type IllustrationProps = {
  className?: string;
  accent?: string;
  accentLight?: string;
};

function ErpIllustration({ className, accent = "#0066FF", accentLight = "#E8F1FF" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden>
      <rect x="48" y="18" width="120" height="88" rx="8" fill="#fff" stroke="#CBD5E1" strokeWidth="2" />
      <rect x="48" y="18" width="120" height="18" rx="8" fill={accentLight} />
      <rect x="48" y="28" width="120" height="8" fill={accentLight} />
      <circle cx="58" cy="27" r="3" fill="#F87171" />
      <circle cx="68" cy="27" r="3" fill="#FBBF24" />
      <circle cx="78" cy="27" r="3" fill="#34D399" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="62" cy={50 + i * 16} r="6" fill={accent} />
          <path d={`M59 ${50 + i * 16} L61 ${52 + i * 16} L65 ${48 + i * 16}`} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="74" y={46 + i * 16} width="78" height="8" rx="4" fill="#E2E8F0" />
        </g>
      ))}
      <circle cx="178" cy="42" r="22" fill={accentLight} stroke={accent} strokeWidth="2" />
      <path d="M178 32 A10 10 0 0 1 188 42 L178 42 Z" fill={accent} />
      <rect x="168" y="78" width="8" height="28" rx="2" fill={accent} />
      <rect x="180" y="70" width="8" height="36" rx="2" fill="#94A3B8" />
      <rect x="192" y="62" width="8" height="44" rx="2" fill={accent} opacity="0.5" />
      <path d="M20 120 L44 96 L68 108 L92 84 L116 100" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="116" cy="100" r="5" fill={accent} />
      <rect x="8" y="124" width="28" height="20" rx="4" fill="#FBBF24" />
      <circle cx="22" cy="118" r="8" fill="#FCD34D" />
      <rect x="130" y="118" width="36" height="6" rx="3" fill="#0F172A" opacity="0.15" />
      <rect x="130" y="130" width="24" height="6" rx="3" fill="#0F172A" opacity="0.1" />
    </svg>
  );
}

function EcommerceIllustration({ className, accent = "#7C3AED", accentLight = "#F3EEFF" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden>
      <rect x="40" y="36" width="100" height="72" rx="8" fill="#fff" stroke="#CBD5E1" strokeWidth="2" />
      <rect x="40" y="36" width="100" height="20" rx="8" fill={accentLight} />
      <path d="M52 82 L68 82 L72 96 L88 56 L100 82 L128 82 L128 100 L52 100 Z" fill={accent} opacity="0.85" />
      <circle cx="154" cy="52" r="26" fill={accentLight} stroke={accent} strokeWidth="2" />
      <path d="M144 52 H164 M154 42 V62" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <rect x="148" y="88" width="48" height="32" rx="6" fill={accent} />
      <circle cx="160" cy="104" r="6" fill="#fff" />
      <circle cx="184" cy="104" r="6" fill="#fff" />
      <rect x="20" y="118" width="40" height="28" rx="6" fill="#FBBF24" />
      <rect x="26" y="124" width="28" height="4" rx="2" fill="#fff" opacity="0.6" />
      <rect x="26" y="132" width="20" height="4" rx="2" fill="#fff" opacity="0.4" />
    </svg>
  );
}

function MobileIllustration({ className, accent = "#0891B2", accentLight = "#E6F9FD" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden>
      <rect x="72" y="16" width="76" height="128" rx="14" fill="#0F172A" />
      <rect x="78" y="28" width="64" height="104" rx="6" fill={accentLight} />
      <rect x="86" y="40" width="48" height="8" rx="4" fill={accent} opacity="0.3" />
      <rect x="86" y="54" width="48" height="32" rx="6" fill={accent} opacity="0.85" />
      <rect x="86" y="92" width="20" height="6" rx="3" fill="#94A3B8" />
      <rect x="110" y="92" width="24" height="6" rx="3" fill="#CBD5E1" />
      <circle cx="110" cy="22" r="3" fill="#334155" />
      <rect x="28" y="48" width="36" height="56" rx="8" fill="#fff" stroke="#CBD5E1" strokeWidth="2" />
      <rect x="34" y="58" width="24" height="4" rx="2" fill={accent} />
      <rect x="34" y="68" width="20" height="4" rx="2" fill="#E2E8F0" />
      <rect x="156" y="56" width="40" height="48" rx="8" fill="#fff" stroke="#CBD5E1" strokeWidth="2" />
      <circle cx="176" cy="72" r="10" fill={accentLight} stroke={accent} strokeWidth="2" />
      <path d="M172 72 L175 75 L180 68" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EngineeringIllustration({ className, accent = "#0F172A", accentLight = "#F1F5F9" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden>
      <rect x="36" y="32" width="148" height="96" rx="10" fill="#0F172A" />
      <rect x="44" y="44" width="60" height="6" rx="3" fill="#34D399" />
      <rect x="52" y="58" width="44" height="6" rx="3" fill="#94A3B8" />
      <rect x="52" y="72" width="72" height="6" rx="3" fill="#60A5FA" />
      <rect x="52" y="86" width="36" height="6" rx="3" fill="#FBBF24" />
      <rect x="52" y="100" width="56" height="6" rx="3" fill="#94A3B8" />
      <text x="108" y="66" fill="#F472B6" fontSize="10" fontFamily="monospace">{"</>"}</text>
      <circle cx="172" cy="52" r="18" fill={accentLight} stroke={accent} strokeWidth="2" />
      <path d="M166 52 L170 56 L178 48" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      <rect x="150" y="100" width="48" height="32" rx="6" fill={accentLight} stroke="#CBD5E1" />
      <rect x="158" y="110" width="12" height="12" rx="2" fill={accent} opacity="0.2" />
      <rect x="174" y="110" width="16" height="12" rx="2" fill={accent} opacity="0.35" />
    </svg>
  );
}

function AiIllustration({ className, accent = "#6366F1", accentLight = "#EEF2FF" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden>
      <circle cx="110" cy="80" r="28" fill={accentLight} stroke={accent} strokeWidth="2" />
      <circle cx="110" cy="80" r="10" fill={accent} />
      {[
        [50, 50],
        [170, 50],
        [50, 110],
        [170, 110],
        [110, 30],
        [110, 130],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <line x1="110" y1="80" x2={cx} y2={cy} stroke={accent} strokeWidth="1.5" opacity="0.4" />
          <circle cx={cx} cy={cy} r="8" fill="#fff" stroke={accent} strokeWidth="2" />
          <circle cx={cx} cy={cy} r="3" fill={accent} />
        </g>
      ))}
      <rect x="24" y="118" width="48" height="28" rx="6" fill="#fff" stroke="#CBD5E1" strokeWidth="2" />
      <rect x="32" y="126" width="32" height="4" rx="2" fill={accent} opacity="0.5" />
      <rect x="32" y="134" width="24" height="4" rx="2" fill="#E2E8F0" />
    </svg>
  );
}

function StrategyIllustration({ className, accent = "#059669", accentLight = "#ECFDF5" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden>
      <path d="M32 120 L72 88 L108 100 L148 64 L188 80" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="188" cy="80" r="6" fill={accent} />
      <rect x="44" y="36" width="12" height="84" rx="4" fill="#E2E8F0" />
      <rect x="44" y="72" width="12" height="48" rx="4" fill={accent} opacity="0.5" />
      <rect x="68" y="52" width="12" height="68" rx="4" fill="#E2E8F0" />
      <rect x="68" y="80" width="12" height="40" rx="4" fill={accent} opacity="0.7" />
      <rect x="92" y="44" width="12" height="76" rx="4" fill="#E2E8F0" />
      <rect x="92" y="68" width="12" height="52" rx="4" fill={accent} />
      <circle cx="156" cy="44" r="20" fill={accentLight} stroke={accent} strokeWidth="2" />
      <path d="M156 36 V44 H164" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      <rect x="148" y="108" width="52" height="32" rx="6" fill="#fff" stroke="#CBD5E1" strokeWidth="2" />
      <rect x="156" y="118" width="36" height="4" rx="2" fill={accent} opacity="0.4" />
      <rect x="156" y="126" width="28" height="4" rx="2" fill="#E2E8F0" />
    </svg>
  );
}

const ILLUSTRATIONS: Record<BlogCoverCategory, FC<IllustrationProps>> = {
  ERP: ErpIllustration,
  "E-Commerce": EcommerceIllustration,
  Mobile: MobileIllustration,
  Engineering: EngineeringIllustration,
  AI: AiIllustration,
  Strategy: StrategyIllustration,
};

export function CoverIllustration({
  category,
  className,
  accent,
  accentLight,
}: {
  category: BlogCoverCategory;
  className?: string;
  accent?: string;
  accentLight?: string;
}) {
  const Illustration = ILLUSTRATIONS[category];
  return <Illustration className={className} accent={accent} accentLight={accentLight} />;
}
