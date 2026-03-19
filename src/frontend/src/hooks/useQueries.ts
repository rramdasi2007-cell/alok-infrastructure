import { useMutation, useQuery } from "@tanstack/react-query";
import type { CompanyStats } from "../backend.d";
import { useActor } from "./useActor";

export function useGetCompanyStats() {
  const { actor, isFetching } = useActor();
  return useQuery<CompanyStats>({
    queryKey: ["companyStats"],
    queryFn: async () => {
      if (!actor)
        return {
          yearsExperience: 10n,
          projectsCompleted: 250n,
          clientsServed: 50n,
        };
      return actor.getCompanyStats();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
      serviceType: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitEnquiry(
        data.name,
        data.email,
        data.phone,
        data.message,
        data.serviceType,
      );
    },
  });
}
