import FadeInSection from "@/components/animations/FadeInSection";
import { Check } from "lucide-react";
import { HR_CREAM, HR_WHY_CHOOSE_IMAGE, HR_WHY_CODEVENTE, HR_WHY_INTRO } from "@/lib/hr-content";

export default function HrWhyChooseSection() {
  return (
    <section
      className="section-padding border-y border-stone-200/70"
      style={{ backgroundColor: HR_CREAM }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection direction="left" className="order-2 lg:order-1">
            <div
              className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-6 sm:p-10 flex items-center justify-center"
              style={{ backgroundColor: HR_CREAM }}
            >
              <img
                src={HR_WHY_CHOOSE_IMAGE}
                alt="Employer overwhelmed by HR and payroll questions — CodeVente helps simplify HRMS in Pakistan"
                className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-contain"
                width={640}
                height={520}
                loading="lazy"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.08} direction="up" className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-[2.125rem] lg:text-4xl font-bold text-electric leading-tight mb-6">
              Why choose CodeVente for HR & payroll software?
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-10 max-w-xl">
              {HR_WHY_INTRO}
            </p>
            <ul className="space-y-7 max-w-xl">
              {HR_WHY_CODEVENTE.map((item) => (
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
        </div>
      </div>
    </section>
  );
}
