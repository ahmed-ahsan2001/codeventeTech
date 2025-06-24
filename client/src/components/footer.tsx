import { Link } from "wouter";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-slate-300 mb-6">{COMPANY_INFO.tagline}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services">
                  <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Web Development
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Digital Marketing
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                    SEO Optimization
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                    UI/UX Design
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Careers
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  Blog
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-slate-300">{COMPANY_INFO.email}</li>
              <li className="text-slate-300">{COMPANY_INFO.phone}</li>
              <li className="text-slate-300">
                {COMPANY_INFO.address.street}
                <br />
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; 2024 {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
