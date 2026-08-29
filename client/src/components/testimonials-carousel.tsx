import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeader from "@/components/layout/section-header";
import FadeInSection from "@/components/animations/FadeInSection";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import GradientOrb from "@/components/effects/GradientOrb";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative section-padding section-dark overflow-hidden border-y border-slate-200">
      <div className="aurora-bg" />
      <NoiseOverlay opacity={0.025} />
      <GradientOrb size={500} color="purple" blur={120} opacity={0.1} className="top-0 left-1/3" />

      <div className="section-container relative z-10">
        <FadeInSection direction="up">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Real feedback from teams who've transformed their business with us."
            dark
            align="center"
          />
        </FadeInSection>

        <div className="relative max-w-3xl mx-auto mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{ duration: 0.45 }}
            >
              <div className="card-holographic p-8 md:p-10">
                <Quote className="w-10 h-10 text-electric/40 mb-5" />
                <div className="flex text-amber-400 mb-5 gap-0.5">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-slate-800 leading-relaxed mb-8 font-light">
                  "{TESTIMONIALS[currentIndex].content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                    {TESTIMONIALS[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{TESTIMONIALS[currentIndex].author}</div>
                    <div className="text-sm text-slate-500">{TESTIMONIALS[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 p-0 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-electric w-8" : "bg-white/20 w-1.5 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 p-0 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
