import { LOGGED_IN, LOGGED_OUT } from "../actions/authActions";

const authInitialState = {
  isLoggedIn: false,
  user: null,
};

// 👷 reducer
const authReducer = (state = authInitialState, action) => {
  if (action.type === LOGGED_IN) {
    return {
      isLoggedIn: true,
      user: action.payload,
    };
  } else if (action.type === LOGGED_OUT) {
    return authInitialState;
  }
  return state;
};

export default authReducer;
