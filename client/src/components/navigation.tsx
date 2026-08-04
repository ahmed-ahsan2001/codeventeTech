import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import logo from "@/assets/codevente-logo.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
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
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-space-dark/95 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-white/10"
            : "bg-space-dark/80 backdrop-blur-md border-b border-white/5"
        }`}
      >
        {/* Scroll progress indicator */}
        <motion.div
          style={{ scaleX }}
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 origin-left"
        />

        <div className="section-container">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center cursor-pointer gap-3 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="relative w-10 h-10 lg:w-11 lg:h-11">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur group-hover:blur-lg transition-all" />
                  <div className="relative w-full h-full rounded-xl overflow-hidden ring-2 ring-white/20 group-hover:ring-cyan-400/40 transition-all bg-white/10">
                    <img src={logo} alt="CodeVente" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent tracking-tight">
                  CodeVente
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-2">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer group ${
                      isActive(item.href)
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                    {!isActive(item.href) && (
                      <span className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Tablet Navigation */}
            <div className="hidden lg:flex xl:hidden items-center gap-1">
              {navItems.slice(0, 5).map((item) => (
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

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="btn-primary-gradient rounded-xl px-6 py-2.5 gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
                    <span className="font-semibold">Start Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-space-dark/98 backdrop-blur-xl border-l border-white/10 z-[90] lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`block px-5 py-4 rounded-xl text-base font-semibold transition-all cursor-pointer ${
                        isActive(item.href)
                          ? "bg-white/10 text-white border border-white/20"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-6 mt-6 border-t border-white/10"
                >
                  <Link href="/contact">
                    <Button className="btn-primary-gradient w-full rounded-xl py-6 text-base gap-2 shadow-lg shadow-cyan-500/20">
                      <span className="font-semibold">Start Your Project</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
