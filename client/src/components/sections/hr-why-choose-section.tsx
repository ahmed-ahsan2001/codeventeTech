import FadeInSection from "@/components/animations/FadeInSection";
import { Check } from "lucide-react";
import { HR_WHY_CODEVENTE, HR_WHY_INTRO, hrIllustrationPath } from "@/lib/hr-content";

export default function HrWhyChooseSection() {
  return (
    <section className="section-padding bg-white border-y border-slate-100">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection direction="left" className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <img
                src={hrIllustrationPath("why-choose-hr")}
                alt="Business leader evaluating HR and payroll software options in Pakistan"
                className="w-full h-auto"
                width={640}
                height={520}
                loading="lazy"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.08} direction="up" className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-electric leading-tight mb-5">
              Why choose CodeVente for HR & payroll software?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">{HR_WHY_INTRO}</p>
            <ul className="space-y-6">
              {HR_WHY_CODEVENTE.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white"
                    aria-hidden
                  >
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <div>
                    <h3 className="font-bold text-electric text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
