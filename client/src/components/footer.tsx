import { Link } from "wouter";
import { Linkedin, Github, Instagram, ArrowUpRight, ArrowUp, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import GradientOrb from "@/components/effects/GradientOrb";
import logo from "@/assets/codevente-logo.png";

const socialIcons = [
  { key: "linkedin" as const, Icon: Linkedin, label: "LinkedIn" },
  { key: "github" as const, Icon: Github, label: "GitHub" },
  { key: "instagram" as const, Icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  const activeSocials = socialIcons.filter(({ key }) => COMPANY_INFO.social[key]);
  const location = `${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.country}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-void border-t border-white/[0.06] text-white overflow-hidden">
      <NoiseOverlay opacity={0.025} />
      <GradientOrb size={700} color="blue" blur={150} opacity={0.06} className="top-0 left-0" />
      <GradientOrb size={500} color="purple" blur={130} opacity={0.05} className="bottom-0 right-0" />

      <div className="section-container relative z-10 py-20 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link href="/">
              <motion.div
                className="flex items-center gap-3 mb-6 group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                <div className="relative w-10 h-10">
                  <div className="relative w-full h-full rounded-xl overflow-hidden ring-1 ring-white/15 group-hover:ring-electric/40 transition-all">
                    <img src={logo} alt="CodeVente" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Code<span className="text-electric">Vente</span>
                </span>
              </motion.div>
            </Link>

            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm text-sm">
              {COMPANY_INFO.tagline}. Building AI-powered products for startups and enterprises worldwide.
            </p>

            <div className="space-y-3 mb-8">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-sm text-slate-500 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-electric/30 transition-all">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                {location}
              </div>
            </div>

            {activeSocials.length > 0 && (
              <div className="flex gap-2">
                {activeSocials.map(({ key, Icon, label }) => (
                  <motion.a
                    key={key}
                    href={COMPANY_INFO.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:border-electric/30 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-white mb-5 uppercase tracking-[0.15em]">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`}>
                    <span className="text-sm text-slate-500 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-electric transition-all" />
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-white mb-5 uppercase tracking-[0.15em]">Company</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/blog", label: "Blog" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-slate-500 hover:text-white transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-white mb-5 uppercase tracking-[0.15em]">Legal</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-slate-500 hover:text-white transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <Link href="/contact">
              <motion.div
                whileHover={{ y: -3 }}
                className="card-holographic p-5 cursor-pointer group"
              >
                <p className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  Ready to build?
                </p>
                <p className="text-xs text-slate-500 mb-3">Free technical audit included</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-electric">
                  Contact Us <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.div>
            </Link>
          </div>
        </div>

        <div className="glow-line mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-electric/30 flex items-center justify-center text-slate-500 hover:text-electric transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
