import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "njinejia",
      description: "April rent",
      note: "Final payment",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
