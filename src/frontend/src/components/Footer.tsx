import { Building2 } from "lucide-react";
import type { ActiveSection } from "../App";

interface FooterProps {
  navigateTo: (s: ActiveSection) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-brand-orange" />
              <div className="leading-none">
                <div className="font-bold text-white text-sm tracking-wide">
                  ALOK
                </div>
                <div className="text-xs text-brand-orange tracking-widest">
                  INFRASTRUCTURE
                </div>
              </div>
            </div>
            <h4 className="font-semibold text-white text-sm mb-2 border-b border-brand-orange pb-1">
              About Alok Infrastructure
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Alok Infrastructure is a leading Pre-Engineered Building &
              Infrastructure company in Waluj MIDC, Aurangabad. We specialize in
              PEB structures, steel fabrication, and civil works for industrial
              clients across Maharashtra.
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3 border-b border-brand-orange pb-1">
              Contact Us
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-gray-300 font-medium">Director:</span>{" "}
                Datta Rajguru
              </p>
              <p>
                <a
                  href="tel:+918208118583"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  📞 +91 8208118583
                </a>
              </p>
              <p>
                <a
                  href="tel:+918856940369"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  📞 +91 8856940369
                </a>
              </p>
              <p>
                <a
                  href="mailto:alokinfra@gmail.com"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  ✉ alokinfra@gmail.com
                </a>
              </p>
              <p className="text-gray-400 leading-snug">
                📍 Sai Udyog Nagari, Waluj MIDC,
                <br />
                Chhatrapati Sambhajinagar, Maharashtra
              </p>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3 border-b border-brand-orange pb-1">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {(
                [
                  ["Home", "home"],
                  ["PEB Structures", "peb"],
                  ["Steel Fabrication", "steel"],
                  ["Civil Works & RCC", "civil"],
                  ["About Us", "about"],
                  ["Contact Us", "contact"],
                ] as [string, ActiveSection][]
              ).map(([label, section]) => (
                <li key={section}>
                  <button
                    type="button"
                    data-ocid={`footer.${section}.link`}
                    onClick={() => navigateTo(section)}
                    className="text-gray-400 hover:text-brand-orange text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-brand-orange">›</span> {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center text-xs text-gray-500">
          <span>© {year} Alok Infrastructure. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
