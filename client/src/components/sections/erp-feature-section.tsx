import type { ReactNode } from "react";
import FadeInSection from "@/components/animations/FadeInSection";

interface ErpFeatureSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
  children: ReactNode;
  className?: string;
}

export default function ErpFeatureSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageFirst = false,
  children,
  className = "section-light",
}: ErpFeatureSectionProps) {
  const imageBlock = (
    <FadeInSection direction={imageFirst ? "left" : "right"} className="w-full">
      <div className="rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-[0_24px_60px_-20px_rgba(0,102,255,0.15)]">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    </FadeInSection>
  );

  const textBlock = (
    <FadeInSection delay={0.08} direction="up" className="w-full">
      {eyebrow && <p className="eyebrow-light mb-3">{eyebrow}</p>}
      <h2 className="heading-section text-slate-900 mb-4">{title}</h2>
      {description && (
        <p className="text-lead-light mb-6">{description}</p>
      )}
      <div className="space-y-6">{children}</div>
    </FadeInSection>
  );

  return (
    <section className={`section-padding ${className}`}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {imageFirst ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function ErpFeatureBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{children}</p>
    </div>
  );
}
