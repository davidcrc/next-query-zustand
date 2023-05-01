import { apiSigned } from "@/axios";
import endpoints from "@/enpoints";
import { Repository } from "./repos.dto";
import { QueryFunctionContext } from "@tanstack/react-query";

const fetchRepos = async (ctx: QueryFunctionContext) => {
  // TODO: no estoy seguro de que el ctx este correcto
  const [_, githubUser] = ctx.queryKey;

  if (!githubUser) {
    return;
  }

  const { data } = await apiSigned.get(
    endpoints.user_repo(githubUser as string)
  );
  return data as Repository[];
};

const repositories = {
  fetchRepos,
};

export default repositories;
