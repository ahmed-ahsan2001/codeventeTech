import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { getServicePath, SERVICE_META } from "@/lib/service-seo";

const helpfulLinks = [
  { href: "/", label: "Homepage" },
  { href: "/services", label: "All Services" },
  { href: "/erpnext-implementation", label: "ERPNext Implementation" },
  { href: getServicePath("mobile-app-development"), label: SERVICE_META["mobile-app-development"].title },
  { href: getServicePath("shopify-development"), label: SERVICE_META["shopify-development"].title },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | CodeVente"
        description="The page you're looking for doesn't exist. Return to CodeVente's homepage or contact us for assistance."
        noindex
      />
      
      <section className="min-h-screen flex items-center justify-center bg-brand-gradient animate-gradient-shift relative overflow-hidden">
        <div className="text-center px-4 relative z-10">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-9xl font-bold text-slate-200 mb-4">404</div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Page Not Found</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
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
                className="bg-electric text-white px-8 py-4 font-semibold hover:bg-electric/90 transition-all duration-200 mr-4"
              >
                Return Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 font-semibold hover:bg-slate-100 transition-all duration-200"
              >
                Contact Support
              </Button>
            </Link>
          </motion.div>

          <motion.nav
            className="mt-12 pt-8 border-t border-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            aria-label="Helpful links"
          >
            <p className="text-sm text-slate-500 mb-4">Popular pages</p>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {helpfulLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-slate-600 hover:text-electric transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-cyan-300 rounded-full opacity-60"
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
            className="absolute top-40 right-20 w-6 h-6 bg-sky-200 rounded-full opacity-40"
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
            className="absolute bottom-40 left-20 w-8 h-8 bg-sky-300 rounded-full opacity-50"
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
