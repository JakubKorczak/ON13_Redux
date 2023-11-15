import { createReducer, createSlice } from "@reduxjs/toolkit";
// import {
//   DECREMENT,
//   INCREMENT,
//   decrement,
//   increment,
// } from "../actions/counterActions";

const initialState = {
  counter: 0,
};

// 👷 reducer
// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return {
//       counter: state.counter + 1,
//     };
//   } else if (action.type === DECREMENT) {
//     return {
//       counter: state.counter - action.payload,
//     };
//   }
//   return state;
// };

// const counterReducer = createReducer(initialState, {
//   [increment]: (state) => {
//     state.counter++;
//     // return {
//     //   counter: 999,
//     // };
//   },
//   [decrement]: (state, action) => {
//     state.counter = state.counter - action.payload;
//   },
// });

// export default counterReducer;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state, action) => {
      state.counter = state.counter - action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
