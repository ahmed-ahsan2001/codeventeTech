import { Link } from "wouter";
import { Linkedin, Twitter, Github, Instagram, ArrowUpRight, ArrowUp, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";
import MeshGradient from "@/components/effects/MeshGradient";
import GradientOrb from "@/components/effects/GradientOrb";
import logo from "@/assets/codevente-logo.png";

const socialIcons = [
  { key: "linkedin" as const, Icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30" },
  { key: "github" as const, Icon: Github, label: "GitHub", color: "hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/30" },
  { key: "instagram" as const, Icon: Instagram, label: "Instagram", color: "hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-500/30" },
];

export default function Footer() {
  const activeSocials = socialIcons.filter(({ key }) => COMPANY_INFO.social[key]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-space-dark border-t border-white/10 text-white overflow-hidden">
      {/* Background Effects */}
      <MeshGradient opacity={0.3} />
      <GradientOrb size={800} color="cyan" blur={150} opacity={0.08} className="top-0 left-0" />
      <GradientOrb size={600} color="purple" blur={130} opacity={0.06} className="bottom-0 right-0" />

      <div className="section-container relative z-10 py-20 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/">
              <motion.div
                className="flex items-center gap-3 mb-6 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur group-hover:blur-lg transition-all" />
                  <div className="relative w-full h-full rounded-xl overflow-hidden ring-2 ring-white/20 group-hover:ring-cyan-400/40 transition-all bg-white/10">
                    <img src={logo} alt="CodeVente" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                  {COMPANY_INFO.name}
                </span>
              </motion.div>
            </Link>

            <p className="text-slate-300 leading-relaxed mb-8 max-w-sm">
              {COMPANY_INFO.tagline}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>

            {/* Social Icons */}
            {activeSocials.length > 0 && (
              <div className="flex gap-3">
                {activeSocials.map(({ key, Icon, label, color }) => (
                  <motion.a
                    key={key}
                    href={COMPANY_INFO.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            )}
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-sm text-slate-400 hover:text-white transition-all cursor-pointer inline-flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-cyan-400 transition-all" />
                      {service.title}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-sm text-slate-400 hover:text-white transition-all cursor-pointer inline-flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-cyan-400 transition-all" />
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-sm text-slate-400 hover:text-white transition-all cursor-pointer inline-flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-cyan-400 transition-all" />
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
              Get Started
            </h3>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="card-holographic p-5 cursor-pointer group"
              >
                <p className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  Ready to build?
                </p>
                <p className="text-xs text-slate-400 mb-3">
                  Let's discuss your project
                </p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
