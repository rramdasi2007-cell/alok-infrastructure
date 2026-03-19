type ServiceKey = "peb" | "steel" | "civil";

const serviceData: Record<
  ServiceKey,
  {
    title: string;
    image: string;
    desc: string[];
    specs: { label: string; value: string }[];
    features: string[];
    applications: string[];
  }
> = {
  peb: {
    title: "Pre-Fabrication & PEB Structures",
    image: "/assets/generated/peb-building.dim_800x500.jpg",
    desc: [
      "Design and execution of robust pre-engineered buildings tailored for industrial plants, warehouses, and manufacturing units, ensuring structural efficiency and cost optimization.",
      "Our PEB structures are manufactured with precision using high-grade mild steel and high-tensile steel, then assembled on-site to ensure rapid installation without compromising structural integrity.",
    ],
    specs: [
      { label: "Material", value: "Mild Steel / High Grade Steel" },
      { label: "Finishing", value: "Color Coated" },
      { label: "Structure Type", value: "PEB / Industrial" },
      { label: "Roof Type", value: "Metal Sheet" },
      { label: "Customization", value: "Available" },
      { label: "Compliance", value: "IS 875, IS 800" },
    ],
    features: [
      "Cost-effective compared to conventional construction",
      "Quick installation — 30-40% faster than RCC",
      "Durable and long-lasting steel construction",
      "Weather resistant with color-coated panels",
      "Customizable spans up to 100m+ clear span",
      "Low maintenance over lifetime",
    ],
    applications: [
      "Industrial Plants",
      "Warehouses & Logistics Centers",
      "Manufacturing Units",
      "Storage Facilities",
      "Commercial Complexes",
      "Aircraft Hangars",
    ],
  },
  steel: {
    title: "Heavy & Light Steel Fabrication",
    image: "/assets/generated/steel-fab.dim_800x500.jpg",
    desc: [
      "Precision fabrication of structural steel, machinery supports, platforms, and customized industrial components using high-grade materials and strict quality control.",
      "Our fabrication unit is equipped with CNC cutting machines, welding robots, and precision measuring tools to ensure every component meets exact engineering specifications.",
    ],
    specs: [
      { label: "Material", value: "MS / SS / Structural Steel" },
      { label: "Process", value: "CNC Fabrication" },
      { label: "Grade", value: "IS 2062" },
      { label: "Finishing", value: "Primer + Painted" },
      { label: "Welding", value: "MIG / TIG / Arc" },
      { label: "Thickness Range", value: "3mm to 100mm" },
    ],
    features: [
      "High precision CNC cutting and forming",
      "Stringent quality controlled processes",
      "Custom dimensions as per design drawings",
      "Long lasting with anti-corrosion treatment",
      "Structural integrity certified by engineers",
      "Delivered to site with proper packaging",
    ],
    applications: [
      "Machinery Supports & Frames",
      "Industrial Platforms & Walkways",
      "Mezzanine Floors",
      "Equipment Bases & Skids",
      "Pipe Racks & Supports",
      "Structural Connections & Joints",
    ],
  },
  civil: {
    title: "Civil Works & RCC Construction",
    image: "/assets/generated/civil-rcc.dim_800x500.jpg",
    desc: [
      "Complete civil construction services including foundations, RCC structures, flooring, and infrastructure development executed with engineering accuracy and safety compliance.",
      "We undertake complete civil works from soil investigation and foundation design to finished flooring, ensuring every structure meets IS codes and safety norms.",
    ],
    specs: [
      { label: "Concrete Grade", value: "M20 / M25 / M30" },
      { label: "Steel", value: "Fe500 TMT Bars" },
      { label: "Foundation", value: "As per Soil Report" },
      { label: "Flooring", value: "Industrial Grade" },
      { label: "Design Standard", value: "IS 456, IS 875" },
      { label: "Finishing", value: "Vacuum Dewatered" },
    ],
    features: [
      "Engineering accuracy with qualified civil engineers",
      "Full safety compliance as per IS codes",
      "Durable construction with quality materials",
      "Quality assured with third-party testing",
      "Machine-finished industrial-grade flooring",
      "Complete documentation and handover",
    ],
    applications: [
      "Factory Foundations & Footings",
      "RCC Industrial Structures",
      "Industrial Flooring",
      "Boundary Walls & Roads",
      "Pump Houses & Utility Rooms",
      "Infrastructure Development",
    ],
  },
};

export default function ServiceDetail({ service }: { service: ServiceKey }) {
  const data = serviceData[service];

  return (
    <div data-ocid="service.detail.panel">
      <div className="bg-navy px-4 py-3 mb-4">
        <h2 className="text-xl font-bold text-white">{data.title}</h2>
      </div>

      <img
        src={data.image}
        alt={data.title}
        className="w-full h-56 object-cover mb-4"
      />

      <div className="space-y-3 mb-6">
        {data.desc.map((p) => (
          <p
            key={p.slice(0, 40)}
            className="text-gray-700 text-sm leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-navy text-base mb-3 border-b-2 border-brand-orange pb-1 inline-block">
          Technical Specifications
        </h3>
        <div className="border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {data.specs.map((spec, i) => (
                <tr
                  key={spec.label}
                  className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-2.5 font-semibold text-navy w-40 border-r border-gray-200">
                    {spec.label}
                  </td>
                  <td className="px-4 py-2.5 text-gray-700">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-navy text-base mb-3 border-b-2 border-brand-orange pb-1 inline-block">
            Key Features
          </h3>
          <ul className="space-y-2">
            {data.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <span className="text-brand-orange font-bold mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-navy text-base mb-3 border-b-2 border-brand-orange pb-1 inline-block">
            Applications
          </h3>
          <ul className="space-y-2">
            {data.applications.map((a) => (
              <li
                key={a}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <span className="text-brand-orange font-bold mt-0.5">›</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
