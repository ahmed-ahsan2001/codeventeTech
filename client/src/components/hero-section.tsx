import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-16 lg:-mt-20 pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1080"
          alt="Modern tech workspace with multiple monitors and code"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-violet-900/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-violet-400 rounded-full opacity-40"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-8 h-8 bg-blue-400 rounded-full opacity-50"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Innovation,
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Delivering Digital Solutions
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your digital presence with cutting-edge web development, strategic digital
          marketing, and innovative design solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-violet-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Your Project
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              View Our Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
