import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "hfcusfui",
      description: "JAnuary rent",
      note: " This is the final payment for this address",
      amount: 54500,
      createAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
