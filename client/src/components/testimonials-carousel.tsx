import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeader from "@/components/layout/section-header";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden bg-brand-gradient animate-gradient-shift">
      <div className="hero-mesh" />
      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from clients who've transformed their business with us."
          dark
        />

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="card-glass p-8 md:p-10">
                <Quote className="w-8 h-8 text-sky-400/60 mb-4" />
                <div className="flex text-amber-400 mb-4">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-slate-100 leading-relaxed mb-6">
                  "{TESTIMONIALS[currentIndex].content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">
                    {TESTIMONIALS[currentIndex].author}
                  </div>
                  <div className="text-sm text-slate-400">
                    {TESTIMONIALS[currentIndex].company}
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
              className="w-10 h-10 p-0 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 p-0 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
