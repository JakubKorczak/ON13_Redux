import { combineReducers } from "redux";
import authReducer from "./authReducer";
import counterReducer from "./counterReducer";

// 🏦 state
export default combineReducers({
  counterValue: counterReducer,
  auth: authReducer,
});
