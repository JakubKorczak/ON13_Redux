import { createReducer, createSlice } from "@reduxjs/toolkit";
// import {
//   LOGGED_IN,
//   LOGGED_OUT,
//   loggedIn,
//   loggedOut,
// } from "../actions/authActions";

const authInitialState = {
  isLoggedIn: false,
  user: null,
};

// 👷 reducer
// const authReducer = (state = authInitialState, action) => {
//   if (action.type === LOGGED_IN) {
//     return {
//       isLoggedIn: true,
//       user: action.payload,
//     };
//   } else if (action.type === LOGGED_OUT) {
//     return authInitialState;
//   }
//   return state;
// };

// const authReducer = createReducer(authInitialState, {
//   [loggedIn]: (state, action) => {
//     state.isLoggedIn = true;
//     state.user = action.payload;
//   },
//   [loggedOut]: () => authInitialState,
// });

// export default authReducer;

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    loggedIn: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload;
    },
    loggedOut: () => authInitialState,
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;
