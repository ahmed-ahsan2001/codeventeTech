import SectionHeader from "@/components/layout/section-header";
import FadeInSection from "@/components/animations/FadeInSection";
import { MarqueeLight } from "@/components/effects/Marquee";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import { TECHNOLOGIES } from "@/lib/content";

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

      <MarqueeLight speed="slow">
        {TECHNOLOGIES.map((tech) => (
          <span key={tech} className="tech-pill mx-2 whitespace-nowrap">
            {tech}
          </span>
        ))}
      </MarqueeLight>

      <div className="mt-6">
        <MarqueeLight speed="slow" reverse>
          {[...TECHNOLOGIES].reverse().map((tech) => (
            <span key={`rev-${tech}`} className="tech-pill mx-2 whitespace-nowrap opacity-60">
              {tech}
            </span>
          ))}
        </MarqueeLight>
      </div>
    </section>
  );
}
