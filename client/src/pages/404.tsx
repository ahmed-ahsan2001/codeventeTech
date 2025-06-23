import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | CodeVente"
        description="The page you're looking for doesn't exist. Return to CodeVente's homepage or contact us for assistance."
      />
      
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-violet-900 relative overflow-hidden">
        <div className="text-center px-4 relative z-10">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-9xl font-bold text-white/20 mb-4">404</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Page Not Found</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into cyberspace.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-200 mr-4"
              >
                Return Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200"
              >
                Contact Support
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </section>
    </>
  );
}
