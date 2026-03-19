import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, MapPin, Wrench } from "lucide-react";
import { useState } from "react";

const clients = [
  {
    name: "Cosmo Films Ltd.",
    industry: "Specialty Films & Packaging",
    project: "PEB Industrial Plant & Heavy Steel Fabrication",
    location: "Waluj MIDC, Aurangabad, Maharashtra",
    image: "/assets/generated/client-cosmofilms.dim_400x250.jpg",
  },
  {
    name: "Suraj Blow Plast Pvt Ltd",
    industry: "Plastic Molding & Containers",
    project: "Pre-Engineered Building & Civil Works",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    image: "/assets/generated/client-surajblowplast.dim_400x250.jpg",
  },
  {
    name: "Amvik Plastics & Pragati Plast Moulds",
    industry: "Household Plastics & Injection Molds",
    project: "Light Steel Fabrication & Structural Works",
    location: "MIDC, Maharashtra",
    image: "/assets/generated/client-amvikpragati.dim_400x250.jpg",
  },
  {
    name: "Sangkaj Steel Ltd.",
    industry: "Cold Forging & Steel Parts",
    project: "Turnkey Industrial Construction & RCC Works",
    location: "Aurangabad, Maharashtra",
    image: "/assets/generated/client-sangkajsteel.dim_400x250.jpg",
  },
  {
    name: "Phoenix Engineering",
    industry: "Industrial Machinery & Fabrication",
    project: "Heavy Steel Fabrication & Plant Structures",
    location: "Maharashtra",
    image: "/assets/generated/client-phoenixengineering.dim_400x250.jpg",
  },
  {
    name: "Mayur Engineering and Automation",
    industry: "Engineering & Industrial Fabrication",
    project: "Custom Fabrication & Civil Infrastructure",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    image: "/assets/generated/client-mayurengineering.dim_400x250.jpg",
  },
  {
    name: "Varad Automation & Robotics Pvt Ltd",
    industry: "Industrial Automation & Robotics",
    project: "PEB Facility & Structural Steel Works",
    location: "Waluj MIDC, Maharashtra",
    image: "/assets/generated/client-varadautomation.dim_400x250.jpg",
  },
  {
    name: "Focus Robotomation Pvt Ltd",
    industry: "Assembly Line & Robotic Integration",
    project: "Industrial Building & Steel Fabrication",
    location: "Maharashtra",
    image: "/assets/generated/client-focusrobotomation.dim_400x250.jpg",
  },
];

const CARDS_PER_PAGE = 3;

export default function ClientsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(clients.length / CARDS_PER_PAGE);

  const start = page * CARDS_PER_PAGE;
  const visible = clients.slice(start, start + CARDS_PER_PAGE);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-orange text-xs font-semibold tracking-widest uppercase">
            Trusted By
          </span>
          <h2 className="text-2xl font-bold text-navy mt-1">
            Our Valued Clients
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-3" />
          <p className="mt-4 text-gray-500 text-sm max-w-xl mx-auto">
            We are proud to have partnered with leading companies across
            plastics, steel, engineering, and industrial automation sectors.
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center text-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((client, i) => (
              <div
                key={client.name}
                data-ocid={`clients.item.${start + i + 1}`}
                className="bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md hover:border-brand-orange transition-all duration-200 group overflow-hidden"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={client.image}
                    alt={`${client.name} project`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-navy group-hover:bg-brand-orange transition-colors duration-200" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-navy leading-tight">
                      {client.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs border-brand-orange text-brand-orange ml-2 shrink-0 font-medium"
                    >
                      {client.industry}
                    </Badge>
                  </div>

                  <div className="flex items-start gap-2 mb-3">
                    <Wrench className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700 leading-snug">
                      {client.project}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="text-xs text-gray-500">
                      {client.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center text-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              // biome-ignore lint/suspicious/noArrayIndexKey: page index is stable
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`h-2.5 rounded-full transition-all duration-200 ${
                i === page ? "bg-brand-orange w-6" : "bg-gray-300 w-2.5"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
