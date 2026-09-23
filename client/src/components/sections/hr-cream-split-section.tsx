import FadeInSection from "@/components/animations/FadeInSection";
import { Check } from "lucide-react";
import { HR_CREAM } from "@/lib/hr-content";

export interface HrSplitItem {
  title: string;
  description: string;
}

interface HrCreamSplitSectionProps {
  id?: string;
  title: string;
  intro?: string;
  items: readonly HrSplitItem[];
  image: string;
  imageAlt: string;
  /** Text column first on large screens */
  textFirst?: boolean;
  cream?: boolean;
  /** Blends dark matte PNGs into the cream section background */
  imageBlendLighten?: boolean;
}

export default function HrCreamSplitSection({
  id,
  title,
  intro,
  items,
  image,
  imageAlt,
  textFirst = true,
  cream = true,
  imageBlendLighten = false,
}: HrCreamSplitSectionProps) {
  const bg = cream ? HR_CREAM : "#ffffff";

  const textCol = (
    <FadeInSection delay={textFirst ? 0 : 0.08} direction="up" className="w-full">
      <h2
        id={id}
        className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-electric leading-snug mb-5"
      >
        {title}
      </h2>
      {intro && (
        <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-8 max-w-xl">{intro}</p>
      )}
      <ul className="space-y-7 max-w-xl">
        {items.map((item) => (
          <li key={item.title} className="flex gap-4">
            <span
              className="flex-shrink-0 mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm"
              aria-hidden
            >
              <Check className="h-4 w-4 stroke-[3]" />
            </span>
            <div>
              <h3 className="font-bold text-electric text-lg md:text-xl mb-2">{item.title}</h3>
              <p className="text-base md:text-[1.0625rem] text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </FadeInSection>
  );

  const imageCol = (
    <FadeInSection
      direction={textFirst ? "right" : "left"}
      delay={textFirst ? 0.08 : 0}
      className="w-full"
    >
      <div
        className="relative rounded-2xl p-2 sm:p-4"
        style={{ backgroundColor: bg }}
      >
        <img
          src={image}
          alt={imageAlt}
          className={`w-full h-auto max-w-2xl mx-auto ${
            imageBlendLighten ? "mix-blend-lighten" : "drop-shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
          }`}
          width={880}
          height={640}
          loading="lazy"
        />
      </div>
    </FadeInSection>
  );

  return (
    <section
      className="section-padding border-y border-stone-200/50"
      style={{ backgroundColor: bg }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {textFirst ? (
            <>
              {textCol}
              {imageCol}
            </>
          ) : (
            <>
              {imageCol}
              {textCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
