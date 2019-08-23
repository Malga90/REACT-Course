import { createStore } from "redux";

console.log("redux, yeah");

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());
