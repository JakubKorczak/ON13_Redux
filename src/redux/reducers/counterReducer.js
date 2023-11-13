import { DECREMENT, INCREMENT } from "../actions/counterActions";

const initialState = {
  counter: 0,
};

// 👷 reducer
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === DECREMENT) {
    return {
      counter: state.counter - action.payload,
    };
  }
  return state;
};

export default counterReducer;
