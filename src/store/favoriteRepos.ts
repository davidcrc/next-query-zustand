import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteReposState = {
  favoriteReposIds: number[];
  setFavoriteReposIds: (favoriteReposIds: number[]) => void; //agregado por mi
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

export const useFavoriteReposStore = create(
  persist<FavoriteReposState>(
    (set) => ({
      favoriteReposIds: [],
      setFavoriteReposIds: (favoriteReposIds: number[]) => {
        set({ favoriteReposIds });
      },
      addFavoriteRepo: (id: number) => {
        set((state) => ({
          favoriteReposIds: [...state.favoriteReposIds, id],
        }));
        [];
      },
      removeFavoriteRepo: (id: number) => {
        set((state) => ({
          favoriteReposIds: state.favoriteReposIds.filter(
            (repoId) => repoId !== id
          ),
        }));
        [];
      },
    }),
    {
      name: "favorite-storage",
    }
  )
);

// Sin storage persist
// export const useFavoriteReposStore = create<FavoriteReposState>((set) => {
//   return {
//     favoriteReposIds: [],
//     addFavoriteRepo: (id: number) => {
//       set((state) => ({
//         favoriteReposIds: [...state.favoriteReposIds, id],
//       }));
//       favoriteReposIds: [];
//     },
//     removeFavoriteRepo: (id: number) => {
//       set((state) => ({
//         favoriteReposIds: state.favoriteReposIds.filter(
//           (repoId) => repoId !== id
//         ),
//       }));
//       favoriteReposIds: [];
//     },
//   };
// });
