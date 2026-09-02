import SectionHeader from "@/components/layout/section-header";
import FadeInSection from "@/components/animations/FadeInSection";
import { MarqueeLight } from "@/components/effects/Marquee";
import {
  TECHNOLOGY_PARTNERS,
  type TechnologyPartner,
} from "@/lib/technology-partners";

const ICON_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons";

function PartnerLogo({ name, slug, color, textLogo }: TechnologyPartner) {
  return (
    <div className="mx-3 flex min-w-[140px] max-w-[160px] flex-col items-center gap-2.5 py-1">
      <div className="flex h-14 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition-shadow duration-300 hover:border-electric/20 hover:shadow-md">
        {textLogo ? (
          <span
            className="text-base font-bold tracking-tight"
            style={{ color }}
            aria-hidden
          >
            {name}
          </span>
        ) : (
          <div
            role="img"
            aria-label={name}
            className="h-7 w-full max-w-[100px]"
            style={{
              backgroundColor: color,
              maskImage: `url(${ICON_CDN}/${slug}.svg)`,
              WebkitMaskImage: `url(${ICON_CDN}/${slug}.svg)`,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
        )}
      </div>
      <p className="text-center text-[11px] font-medium leading-snug text-slate-600 line-clamp-2 sm:text-xs">
        {name}
      </p>
    </div>
  );
}

function PartnerRow({ reverse = false }: { reverse?: boolean }) {
  const partners = reverse ? [...TECHNOLOGY_PARTNERS].reverse() : TECHNOLOGY_PARTNERS;

  return (
    <MarqueeLight speed="slow" reverse={reverse}>
      {partners.map((partner) => (
        <PartnerLogo key={`${partner.name}-${reverse ? "rev" : "fwd"}`} {...partner} />
      ))}
    </MarqueeLight>
  );
}

export default function TechnologyPartnersSection() {
  return (
    <section className="section-padding-sm section-light border-y border-slate-100 overflow-hidden">
      <div className="section-container relative z-10 mb-10">
        <FadeInSection direction="up">
          <SectionHeader
            eyebrow="Platforms & Partners"
            title="Built on Trusted Cloud & Dev Tools"
            description="AWS, Azure, Google Cloud, and the platforms we deploy, integrate, and scale on every project."
            align="center"
          />
        </FadeInSection>
      </div>

      <PartnerRow />
      <div className="mt-5 opacity-90">
        <PartnerRow reverse />
      </div>
    </section>
  );
}
