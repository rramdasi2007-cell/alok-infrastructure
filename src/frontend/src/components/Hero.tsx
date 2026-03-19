import type { ActiveSection } from "../App";

interface HeroProps {
  navigateTo: (s: ActiveSection) => void;
  onOpenQuote: () => void;
}

export default function Hero({ navigateTo, onOpenQuote }: HeroProps) {
  return (
    <section className="relative">
      {/* Hero Banner */}
      <div
        className="relative h-96 md:h-[520px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1400x700.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="text-brand-orange text-xs font-semibold tracking-widest uppercase mb-2">
            PEB • Industrial • Turnkey
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Building India's
            <br />
            <span className="text-brand-orange">Industrial Future</span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-xl mb-6">
            Pre-Engineered Buildings, Steel Fabrication & Civil Works for
            Industrial Excellence
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              type="button"
              data-ocid="hero.get_quote.primary_button"
              onClick={onOpenQuote}
              className="bg-brand-orange text-white px-6 py-3 font-semibold hover:bg-brand-orange-dark transition-colors text-sm"
            >
              Get Free Quote
            </button>
            <button
              type="button"
              data-ocid="hero.our_services.secondary_button"
              onClick={() => navigateTo("peb")}
              className="border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-navy transition-colors text-sm"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Intro section */}
      <div className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-4 border-brand-orange pl-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-navy">
              Leading Pre-Engineered Building & Infrastructure Company in
              Aurangabad
            </h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
            Alok Infrastructure is a trusted name in industrial construction and
            fabrication, headquartered at Waluj MIDC, Chhatrapati Sambhajinagar.
            We deliver end-to-end solutions — from pre-engineered buildings and
            steel structures to complete civil works — serving India's leading
            industrial brands with precision, quality, and on-time delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
