import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-blue-200 transition-shadow duration-300">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-800 tracking-tight">
              <span className="text-blue-600">Sale</span>Flow
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 px-4 py-2 cursor-pointer">
              Log in
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="text-sm bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-blue-200 transition-all duration-200 cursor-pointer"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-200"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-slate-600 hover:text-blue-600 transition-colors py-2 text-left cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <button className="text-sm text-slate-600 py-2 text-left cursor-pointer">Log in</button>
            <button
              onClick={() => { navigate("/dashboard"); setMobileOpen(false); }}
              className="text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-lg shadow-md cursor-pointer"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
