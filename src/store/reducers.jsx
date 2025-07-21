import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  RESULT,
  MEMORY_ADD,
  MEMORY_RECALL,
  MEMORY_CLEAR,
} from "./actions.jsx";

export const initialState = {
  total: 0,
  temp: 0,
  operation: "+",
  memory: 0
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": return num2 !== 0 ? num1 / num2 : 0;
    default: return num1;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER: {
      const newTemp = state.temp * 10 + action.payload;
      return {
        ...state,
        temp: newTemp
      };
    }

    case CHANGE_OPERATION: {
      const newTotal = calculateResult(state.total, state.temp, state.operation);
      return {
        ...state,
        operation: action.payload,
        total: newTotal,
        temp: 0
      };
    }

    case CLEAR_DISPLAY:
      return {
        ...state,
        temp: 0,
        total: 0
      };

    case RESULT: {
      const result = calculateResult(state.total, state.temp, state.operation);
  return {
    ...state,
    total: result,
    temp: 0
      };
    }

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.temp !== 0 ? state.temp : state.total
      };

    case MEMORY_RECALL:
      return {
        ...state,
        temp: state.memory
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0
      };

    default:
      return state;
  }
};
