// import { combineReducers } from "redux";
// import { DECREMENT, INCREMENT } from "./actions/counterActions";
// import { LOGGED_IN, LOGGED_OUT } from "./actions/authActions";

// const initialState = {
//   counter: 0,
// };

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

// const authInitialState = {
//   isLoggedIn: false,
//   user: null,
// };

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

// export default combineReducers({
//   counterValue: counterReducer,
//   auth: authReducer,
// });
