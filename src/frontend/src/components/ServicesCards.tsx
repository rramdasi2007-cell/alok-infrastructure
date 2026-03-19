import type { ActiveSection } from "../App";

interface ServicesCardsProps {
  navigateTo: (s: ActiveSection) => void;
}

const services = [
  {
    section: "peb" as ActiveSection,
    image: "/assets/uploads/prefabricated-steel-structure-1000x1000-1.webp",
    title: "Pre-Fabrication & PEB Structures",
    tags: "PEB • Industrial • Turnkey",
    desc: "Design and execution of robust pre-engineered buildings tailored for industrial plants, warehouses, and manufacturing units, ensuring structural efficiency and cost optimization.",
  },
  {
    section: "steel" as ActiveSection,
    image: "/assets/generated/steel-fab.dim_800x500.jpg",
    title: "Heavy & Light Steel Fabrication",
    tags: "MS • SS • Structural Steel",
    desc: "Precision fabrication of structural steel, machinery supports, platforms, and customized industrial components using high-grade materials and strict quality control.",
  },
  {
    section: "civil" as ActiveSection,
    image: "/assets/generated/civil-rcc.dim_800x500.jpg",
    title: "Civil Works & RCC Construction",
    tags: "RCC • Civil • Infrastructure",
    desc: "Complete civil construction services including foundations, RCC structures, flooring, and infrastructure development executed with engineering accuracy and safety compliance.",
  },
];

export default function ServicesCards({ navigateTo }: ServicesCardsProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-brand-orange text-xs font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mt-1">
            Our Core Services
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.section}
              data-ocid={`services.item.${i + 1}`}
              className="bg-white shadow-card hover:shadow-card-hover transition-shadow group"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-brand-orange text-xs font-semibold tracking-wide">
                  {svc.tags}
                </span>
                <h3 className="font-bold text-navy text-base mt-1 mb-2">
                  {svc.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {svc.desc}
                </p>
                <button
                  type="button"
                  data-ocid={`services.item.${i + 1}.link`}
                  onClick={() => navigateTo(svc.section)}
                  className="text-sm font-semibold text-brand-orange hover:text-navy transition-colors flex items-center gap-1"
                >
                  Read More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
