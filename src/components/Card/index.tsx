import React from "react";
import { Repository } from "@/services/repos.dto";
import { useFavoriteReposStore } from "@/store/favoriteRepos";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

const Card = (props: CardProps) => {
  const {
    repository: { id, name, language },
    isFavorite,
  } = props;

  const [addFavoriteRepository, removeFavoriteRepo] = useFavoriteReposStore(
    (state) => [state.addFavoriteRepo, state.removeFavoriteRepo]
  );

  const toggleFavorite = () => {
    isFavorite ? removeFavoriteRepo(id) : addFavoriteRepository(id);
  };

  return (
    <div className="">
      <h2>{name}</h2>
      <h1>{language || "unknown"}</h1>

      <button className="bg-white text-black p-2" onClick={toggleFavorite}>
        {isFavorite ? "DisLike" : "Like"}
      </button>
    </div>
  );
};

export default Card;
