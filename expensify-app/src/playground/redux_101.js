import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());

// Actions - object that gets sent to the store

// increment
store.dispatch({
  type: "INCREMENT"
});

console.log(store.getState());

store.dispatch({
  type: "DECREMENT"
});

//reset
store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});

console.log(store.getState());
