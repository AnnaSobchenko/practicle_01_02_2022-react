import { combineReducers } from "redux";

const costsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "transactions/addCosts":
          return [...state, payload];
          case "transactios/getCosts":
              return payload;
        default:
          return state;
      }
};

const incomesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "transactions/addIncomes":
      return [...state, payload];
      case "transactios/getIncomes":
              return payload;
    default:
      return state;
  }
};

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export default transactionsReducer;
