import { create } from "zustand";
import { persist } from "zustand/middleware";

type Post = {
  id: number;
  title: string;
  body: string;
};

type CounterState = {
  count: number;
  title: string;
  posts: Post[];
  getPosts: () => void;
  increment: (value: number) => void;
  multiply: (value: number) => void;
  clearStore: () => void;
};

export const useCounterStore = create(
  persist<CounterState>(
    (set, get) => ({
      count: 20,
      title: "some title",
      posts: [],
      getPosts: async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await resp.json();

        console.log("posts", posts);

        set((state) => ({
          ...state,
          posts,
        }));
      },
      increment: (value: number) => {
        // set((state) => ({ count: (state.count += value) }));
        // Esta otra manera, la anterior es una linea
        const { count } = get();
        set({ count: count + value });
      },
      multiply: (value: number) => {
        const { count } = get();
        set({ count: count * value }); //esto parece raro
      },
      clearStore: () => {
        set({}, true);
      },
    }),
    {
      name: "counter-storage",
    }
  )
);
