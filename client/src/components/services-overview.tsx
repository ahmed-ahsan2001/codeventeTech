import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code, Megaphone, TrendingUp, Palette, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  code: Code,
  megaphone: Megaphone,
  "trending-up": TrendingUp,
  palette: Palette,
};

const colorMap = {
  blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-200",
  violet: "bg-violet-100 text-violet-600 group-hover:bg-violet-200",
  cyan: "bg-cyan-100 text-cyan-600 group-hover:bg-cyan-200",
  emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200",
};

const gradientMap = {
  blue: "hover:from-blue-50 hover:to-violet-50",
  violet: "hover:from-violet-50 hover:to-cyan-50",
  cyan: "hover:from-cyan-50 hover:to-emerald-50",
  emerald: "hover:from-emerald-50 hover:to-blue-50",
};

export default function ServicesOverview() {
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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern
            marketplace.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`group bg-slate-50 hover:bg-gradient-to-br ${
                    gradientMap[service.color as keyof typeof gradientMap]
                  } transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer h-full`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${
                        colorMap[service.color as keyof typeof colorMap]
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-3 font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-200"
            >
              Learn More About Our Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
