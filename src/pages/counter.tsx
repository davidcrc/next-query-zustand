import React, { useEffect } from "react";
import { useCounterStore } from "@/store/counterStore";
import { useStore } from "../store/store";

const Counter = () => {
  // const { count, title, posts } = useCounterStore((state) => ({
  //   count: state.count,
  //   title: state.title,
  //   posts: state.posts,
  // }));

  // TODO: posible fixpara el server rendering
  // causa muchos re-renderingsi se llama desde index x ejeemplo
  const { count, title, posts } =
    useStore(useCounterStore, (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    })) ?? {};

  const { increment, getPosts, clearStore, multiply } = useCounterStore();

  const handleIncrement = () => {
    //
    increment(1);
  };

  useEffect(() => {
    getPosts?.();
  }, [getPosts]);

  return (
    <div className="flex flex-col gap-4 p-8">
      Counter
      <h1>{count}</h1>
      <h1>{title}</h1>
      <button
        className="bg-white text-black w-fit p-4"
        onClick={handleIncrement}
      >
        Increment by 1
      </button>
      <button
        className="bg-white text-black w-fit p-4"
        onClick={() => clearStore()}
      >
        Clear
      </button>
      <button
        className="bg-white text-black w-fit p-4"
        onClick={() => multiply(5)}
      >
        Multiply by 5
      </button>
      <hr />
      {JSON.stringify(posts)}
    </div>
  );
};

export default Counter;
