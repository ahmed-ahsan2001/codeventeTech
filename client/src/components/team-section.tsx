import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const colorMap = {
  blue: "text-blue-600",
  violet: "text-violet-600",
  cyan: "text-cyan-600",
  emerald: "text-emerald-600",
};

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-600">The talented individuals behind CodeVente's success.</p>
        </motion.div>
      </div>
    </section>
  );
}
