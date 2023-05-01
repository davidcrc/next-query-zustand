import React from "react";
import { useFetchRepositories } from "@/hooks/useRepos";
import Card from "@/components/Card";
import { useFavoriteReposStore } from "@/store/favoriteRepos";

function Home() {
  const { data, isLoading } = useFetchRepositories("davidcrc");

  const { favoriteReposIds } = useFavoriteReposStore();

  console.log("data", data);

  return (
    <div className="flex flex-col gap-4 p-8">
      <h2>My repos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.map((repository) => {
          return (
            <Card
              key={repository.id}
              repository={repository}
              isFavorite={favoriteReposIds.includes(repository.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
