import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addCosts,
  addIncomes,
  getCosts,
  getIncomes,
  removeCosts,
  removeIncomes,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [addCosts]: (state, { payload }) => [...state, payload],
  [getCosts]: (_, { payload }) => payload,
  [removeCosts]: (state, { payload }) => {
  return  state.filter((el) => el.id !== payload);
  },
});

const incomesReducer = createReducer([], {
  [addIncomes]: (state, { payload }) => [...state, payload],
  [getIncomes]: (_, { payload }) => payload,
  [removeIncomes]: (state, { payload }) => {
     return state.filter((el) => el.id !== payload);
  },
});

// const costsReducer = (state = [], { type, payload }) => {
//     switch (type) {
//         case "transactions/addCosts":
//           return [...state, payload];
//           case "transactios/getCosts":
//               return payload;
//         default:
//           return state;
//       }
// };

// const incomesReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case "transactions/addIncomes":
//       return [...state, payload];
//     case "transactios/getIncomes":
//       return payload;
//     default:
//       return state;
//   }
// };

export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
}); 
