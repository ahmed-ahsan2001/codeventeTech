import SectionHeader from "@/components/layout/section-header";
import FadeInSection from "@/components/animations/FadeInSection";
import { PartnerLogoMarquee } from "@/components/partner-logo-marquee";
import NoiseOverlay from "@/components/effects/NoiseOverlay";

export default function TechnologiesSection() {
  return (
    <section className="relative section-padding-sm section-dark overflow-hidden border-y border-slate-200">
      <NoiseOverlay opacity={0.025} />

      <div className="section-container relative z-10 mb-10">
        <FadeInSection direction="up">
          <SectionHeader
            eyebrow="Technologies"
            title="Built With the Best"
            description="Modern tools and battle-tested frameworks for products that scale."
            dark
            align="center"
          />
        </FadeInSection>
      </div>

      <PartnerLogoMarquee />
      <div className="mt-5 opacity-90">
        <PartnerLogoMarquee reverse />
      </div>
    </section>
  );
}
