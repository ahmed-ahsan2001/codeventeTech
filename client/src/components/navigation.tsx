import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { SPECIALIZED_SERVICE_IDS, getServicePath, SERVICE_META } from "@/lib/service-seo";
import logo from "@/assets/codevente-logo.png";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const isHome = location === "/";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled || !isHome
            ? "bg-void/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <motion.div
          style={{ scaleX }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-electric via-cyan-400 to-neon-purple origin-left"
        />

        <div className="section-container">
          <div className="flex justify-between items-center h-16 lg:h-[72px]">
            <Link href="/">
              <motion.div
                className="flex items-center cursor-pointer gap-3 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-9 h-9 lg:w-10 lg:h-10">
                  <div className="absolute inset-0 rounded-xl bg-electric/20 blur-md group-hover:blur-lg transition-all opacity-0 group-hover:opacity-100" />
                  <div className="relative w-full h-full rounded-xl overflow-hidden ring-1 ring-white/15 group-hover:ring-electric/40 transition-all">
                    <img src={logo} alt="CodeVente" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-lg lg:text-xl font-bold text-white tracking-tight">
                  Code<span className="text-electric">Vente</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-1">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
                >
                  <Link href={item.href}>
                    <motion.span
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 + 0.15 }}
                      className={`relative flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                        isActive(item.href)
                          ? "text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {isActive(item.href) && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute inset-0 bg-white/[0.08] rounded-lg border border-white/10"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className={`relative z-10 w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      )}
                    </motion.span>
                  </Link>

                  {item.hasDropdown && (
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-void-elevated/95 backdrop-blur-2xl border border-white/10 shadow-2xl"
                        >
                          {SERVICES.map((service) => (
                            <Link key={service.id} href={service.id === "erp-implementation" ? "/erpnext-implementation" : `/services/${service.id}`}>
                              <div className="px-4 py-3 rounded-xl hover:bg-white/[0.06] transition-colors cursor-pointer group">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                                  {service.title}
                                </p>
                                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                          {SPECIALIZED_SERVICE_IDS.map((id) => (
                            <Link key={id} href={getServicePath(id)}>
                              <div className="px-4 py-3 rounded-xl hover:bg-white/[0.06] transition-colors cursor-pointer group">
                                <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                                  {SERVICE_META[id].title}
                                </p>
                                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                  {SERVICE_META[id].seoDescription.slice(0, 72)}…
                                </p>
                              </div>
                            </Link>
                          ))}
                          <div className="border-t border-white/10 mt-1 pt-1">
                            <Link href="/services">
                              <div className="px-4 py-2.5 text-xs font-semibold text-electric hover:text-cyan-300 transition-colors cursor-pointer">
                                View all services →
                              </div>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Button className="btn-primary-gradient rounded-xl px-5 py-2.5 gap-2 text-sm">
                    Start Project
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </Link>
            </div>

            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-void-elevated/98 backdrop-blur-2xl border-l border-white/10 z-[95] lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-20 space-y-1">
                {navItems.map((item, index) => (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-all cursor-pointer ${
                        isActive(item.href)
                          ? "bg-white/[0.08] text-white border border-white/10"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 mt-4 border-t border-white/10"
                >
                  <Link href="/contact">
                    <Button className="btn-primary-gradient w-full rounded-xl py-6 gap-2">
                      Start Your Project
                      <ArrowRight className="w-4 h-4" />
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
