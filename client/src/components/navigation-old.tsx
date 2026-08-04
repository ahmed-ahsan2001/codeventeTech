import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/codevente-logo.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/courses", label: "Courses" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <>
      <nav
        className={`site-nav fixed top-0 left-0 right-0 z-[100] transition-shadow duration-300 border-b border-white/10 ${
          isScrolled ? "shadow-lg shadow-black/30" : "shadow-sm shadow-black/10"
        }`}
      >
        <div className="section-container">
          <div className="flex justify-between items-center h-16 lg:h-[4.5rem]">
            <Link href="/">
              <motion.div
                className="flex items-center cursor-pointer gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10">
                  <img src={logo} alt="CodeVente logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-lg lg:text-xl font-bold text-white tracking-tight">
                  CodeVente
                </span>
              </motion.div>
            </Link>

            <div className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive(item.href)
                        ? "text-white bg-white/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex xl:hidden items-center gap-1">
              {navItems.slice(0, 5).map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive(item.href)
                        ? "text-white bg-white/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <Button className="btn-primary-gradient gap-2 rounded-xl">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-brand-dark border-l border-white/10 shadow-2xl z-[100] lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                  <Link href="/">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-white/20">
                        <img src={logo} alt="CodeVente" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-lg font-bold text-white">CodeVente</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <div
                        className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                          isActive(item.href)
                            ? "bg-primary/20 text-white border border-primary/30"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="p-5 border-t border-white/10">
                  <Link href="/contact">
                    <Button
                      className="w-full btn-primary-gradient py-6 text-base rounded-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
