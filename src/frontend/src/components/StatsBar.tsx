import { useQuery } from "@tanstack/react-query";
import { useActor } from "../hooks/useActor";

const statLabels = [
  "Years Experience",
  "Projects Completed",
  "Clients Served",
  "Expert Engineers",
];

export default function StatsBar() {
  const { actor, isFetching } = useActor();
  const { data: stats } = useQuery({
    queryKey: ["companyStats"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCompanyStats();
    },
    enabled: !!actor && !isFetching,
  });

  const items = [
    { label: statLabels[0], value: stats ? Number(stats.yearsExperience) : 10 },
    {
      label: statLabels[1],
      value: stats ? Number(stats.projectsCompleted) : 250,
    },
    { label: statLabels[2], value: stats ? Number(stats.clientsServed) : 80 },
    { label: statLabels[3], value: 45 },
  ];

  return (
    <section className="bg-navy py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="text-center"
              data-ocid={`stats.item.${i + 1}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-orange">
                {item.value}+
              </div>
              <div className="text-gray-300 text-sm mt-1 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
