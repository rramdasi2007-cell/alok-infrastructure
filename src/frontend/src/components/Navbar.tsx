import { ChevronDown, Mail, Menu, Phone, Shield, X } from "lucide-react";
import { useState } from "react";
import type { ActiveSection } from "../App";

interface NavbarProps {
  activeSection: ActiveSection;
  navigateTo: (s: ActiveSection) => void;
  isAdminLoggedIn?: boolean;
  onOpenQuote: () => void;
}

export default function Navbar({
  activeSection,
  navigateTo,
  isAdminLoggedIn,
  onOpenQuote,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceLinks: { label: string; section: ActiveSection }[] = [
    { label: "PEB Structures", section: "peb" },
    { label: "Steel Fabrication", section: "steel" },
    { label: "Civil Works & RCC", section: "civil" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-navy-light text-gray-300 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span className="hidden sm:block">
            Welcome to Alok Infrastructure – Quality • Precision • Trust
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:+918208118583"
              className="flex items-center gap-1 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3 h-3" />
              +91 8208118583
            </a>
            <a
              href="mailto:alokinfra@gmail.com"
              className="flex items-center gap-1 hover:text-brand-orange transition-colors"
            >
              <Mail className="w-3 h-3" />
              alokinfra@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              data-ocid="nav.home.link"
              onClick={() => navigateTo("home")}
              className="flex items-center gap-2 text-white"
            >
              <img
                src="/assets/uploads/WhatsApp-Image-2026-03-17-at-4.47.30-PM-1.jpeg"
                alt="Alok Infrastructure Logo"
                className="h-11 w-11 rounded-full object-cover border-2 border-brand-orange"
              />
              <div className="leading-none">
                <div className="font-bold text-base tracking-wide text-white">
                  ALOK
                </div>
                <div className="text-xs text-brand-orange tracking-widest font-medium">
                  INFRASTRUCTURE
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <button
                type="button"
                data-ocid="nav.home.tab"
                onClick={() => navigateTo("home")}
                className={`px-4 py-5 text-sm font-medium transition-colors border-b-2 ${
                  activeSection === "home"
                    ? "text-brand-orange border-brand-orange"
                    : "text-gray-200 border-transparent hover:text-brand-orange"
                }`}
              >
                Home
              </button>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  data-ocid="nav.services.dropdown_menu"
                  className={`px-4 py-5 text-sm font-medium transition-colors border-b-2 flex items-center gap-1 ${
                    ["peb", "steel", "civil"].includes(activeSection)
                      ? "text-brand-orange border-brand-orange"
                      : "text-gray-200 border-transparent hover:text-brand-orange"
                  }`}
                >
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-52 bg-white shadow-lg border border-gray-100 z-50">
                    {serviceLinks.map((link) => (
                      <button
                        type="button"
                        key={link.section}
                        data-ocid={`nav.${link.section}.link`}
                        onClick={() => {
                          navigateTo(link.section);
                          setServicesOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-orange hover:text-white transition-colors border-b border-gray-100 last:border-0"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                data-ocid="nav.about.link"
                onClick={() => navigateTo("about")}
                className={`px-4 py-5 text-sm font-medium transition-colors border-b-2 ${
                  activeSection === "about"
                    ? "text-brand-orange border-brand-orange"
                    : "text-gray-200 border-transparent hover:text-brand-orange"
                }`}
              >
                About Us
              </button>

              <button
                type="button"
                data-ocid="nav.contact.link"
                onClick={() => navigateTo("contact")}
                className={`px-4 py-5 text-sm font-medium transition-colors border-b-2 ${
                  activeSection === "contact"
                    ? "text-brand-orange border-brand-orange"
                    : "text-gray-200 border-transparent hover:text-brand-orange"
                }`}
              >
                Contact Us
              </button>

              <button
                type="button"
                data-ocid="nav.quote.open_modal_button"
                onClick={onOpenQuote}
                className="ml-2 bg-brand-orange text-white px-4 py-2 text-sm font-semibold hover:bg-brand-orange-dark transition-colors rounded"
              >
                Get Quote
              </button>

              <button
                type="button"
                data-ocid="nav.admin.link"
                onClick={() => navigateTo("admin")}
                title={isAdminLoggedIn ? "Admin Dashboard" : "Admin Login"}
                className={`ml-1 p-2 rounded transition-colors ${
                  activeSection === "admin"
                    ? "text-brand-orange"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <Shield className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              data-ocid="nav.mobile.toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-navy-light border-t border-navy-light">
            <button
              type="button"
              onClick={() => {
                navigateTo("home");
                setMobileOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-sm text-gray-200 hover:text-brand-orange border-b border-navy-light"
            >
              Home
            </button>
            {serviceLinks.map((link) => (
              <button
                type="button"
                key={link.section}
                onClick={() => {
                  navigateTo(link.section);
                  setMobileOpen(false);
                }}
                className="block w-full text-left px-6 py-2.5 text-sm text-gray-300 hover:text-brand-orange border-b border-navy-light"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                navigateTo("about");
                setMobileOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-sm text-gray-200 hover:text-brand-orange border-b border-navy-light"
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => {
                navigateTo("contact");
                setMobileOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-sm text-gray-200 hover:text-brand-orange border-b border-navy-light"
            >
              Contact Us
            </button>
            <button
              type="button"
              data-ocid="nav.quote.open_modal_button"
              onClick={() => {
                onOpenQuote();
                setMobileOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-sm text-brand-orange font-semibold hover:text-brand-orange-dark border-t border-navy-light"
            >
              Get Quote
            </button>
            <button
              type="button"
              data-ocid="nav.admin.link"
              onClick={() => {
                navigateTo("admin");
                setMobileOpen(false);
              }}
              className="flex items-center gap-2 w-full text-left px-4 py-3 text-xs text-gray-500 hover:text-gray-300 border-t border-navy-light"
            >
              <Shield className="w-3.5 h-3.5" />
              {isAdminLoggedIn ? "Admin Dashboard" : "Admin"}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
