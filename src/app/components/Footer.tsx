import { Zap, Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const footerLinks = {
  Product: ["Features", "Dashboard", "Integrations", "Changelog", "Roadmap", "Status"],
  Company: ["About us", "Blog", "Careers", "Press kit", "Partners", "Contact"],
  Resources: ["Documentation", "API Reference", "Help center", "Community", "Webinars", "Templates"],
  Legal: ["Privacy policy", "Terms of service", "Cookie policy", "GDPR", "Security"],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl sm:text-3xl mb-2">
                Ready to automate your sales?
              </h3>
              <p className="text-blue-100 text-sm">
                Join 12,000+ businesses growing smarter with SaleFlow
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2 group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white">
                <span className="text-blue-400">Sale</span>Flow
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed mb-5 max-w-xs">
              The all-in-one SaaS platform helping small and medium businesses automate, optimize, and
              scale their online sales.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-5">
              {[
                { icon: Mail, text: "hello@saleflow.io" },
                { icon: Phone, text: "+1 (888) 456-7890" },
                { icon: MapPin, text: "San Francisco, CA 94102" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-slate-400 text-xs">
                  <Icon className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400 hover:text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-xs hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <span className="text-slate-400 text-xs whitespace-nowrap">Stay updated:</span>
            <div className="flex w-full sm:w-72 bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 bg-transparent text-xs text-slate-300 placeholder-slate-500 px-3 py-2 outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-xs transition-colors duration-200 cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-slate-500 text-xs text-center sm:text-right">
            © 2026 SaleFlow Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
