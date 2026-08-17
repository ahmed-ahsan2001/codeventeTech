import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/layout/section-header";
import FadeInSection from "@/components/animations/FadeInSection";
import { FAQ_ITEMS } from "@/lib/content";

export default function FAQSection() {
  return (
    <section className="section-padding section-light">
      <div className="section-container">
        <FadeInSection direction="up">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            description="Everything you need to know before starting your project."
            align="center"
          />
        </FadeInSection>

        <FadeInSection delay={0.15} direction="up" className="max-w-3xl mx-auto mt-14">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="card-light px-6 border border-slate-200/70 rounded-2xl overflow-hidden data-[state=open]:shadow-lg data-[state=open]:border-electric/20 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInSection>
      </div>
    </section>
  );
}
