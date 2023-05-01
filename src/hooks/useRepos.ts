import { apiSigned } from "@/axios";
import { useQuery } from "@tanstack/react-query";
import reposService from "@/services/repos-service";
import endpoints from "@/enpoints";

// Esto podria estar directamente en el componente
export const useFetchRepositories = (githubUser: string) => {
  return useQuery([endpoints.user_repo(githubUser), githubUser], (ctx) =>
    reposService.fetchRepos(ctx)
  );
};
