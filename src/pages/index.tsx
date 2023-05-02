import React, { useEffect, useState } from "react";
import { useFetchRepositories } from "@/hooks/useRepos";
import Card from "@/components/Card";
import { useFavoriteReposStore } from "@/store/favoriteRepos";
import { useCounterStore } from "../store/counterStore";

function Home() {
  const { data, isLoading } = useFetchRepositories("davidcrc");

  const { favoriteReposIds } = useFavoriteReposStore();

  console.log("data", data);

  const { count, title, posts } = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
    posts: state.posts,
  }));

  // otra solucion es añadir states y useEffect que vuelvan a setear los valores
  const [myCount, setMyCount] = useState(0);
  const [myTitle, setMyTitle] = useState("");

  useEffect(() => {
    setMyTitle(title);
  }, [title]);

  useEffect(() => {
    setMyCount(count);
  }, [count]);

  return (
    <div className="flex flex-col gap-4 p-8">
      <h2>My repos</h2>

      <h1>{myCount}</h1>
      <h1>{myTitle}</h1>

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
