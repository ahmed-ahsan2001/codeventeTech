import { Link } from "wouter";
import { Linkedin, Twitter, Github, Instagram, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";
import logo from "@/assets/codevente-logo.png";

const socialIcons = [
  { key: "linkedin" as const, Icon: Linkedin, label: "LinkedIn" },
  { key: "twitter" as const, Icon: Twitter, label: "Twitter" },
  { key: "github" as const, Icon: Github, label: "GitHub" },
  { key: "instagram" as const, Icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  const activeSocials = socialIcons.filter(({ key }) => COMPANY_INFO.social[key]);

  return (
    <footer className="bg-brand-dark border-t border-white/10 text-white">
      <div className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/20">
                  <img src={logo} alt="CodeVente" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              {COMPANY_INFO.tagline}
            </p>
            {activeSocials.length > 0 && (
              <div className="flex gap-2">
                {activeSocials.map(({ key, Icon, label }) => (
                  <a
                    key={key}
                    href={COMPANY_INFO.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`}>
                    <span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 group">
                      {service.title}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/careers", label: "Careers" },
                { href: "/courses", label: "Courses" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2026 {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy">
              <span className="text-slate-500 hover:text-white text-sm transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms-of-service">
              <span className="text-slate-500 hover:text-white text-sm transition-colors cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
