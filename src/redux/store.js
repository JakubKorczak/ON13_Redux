import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import reducers from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import authReducer from "./reducers/authReducer";
import taskReducer from "./reducers/taskSlice";

// const enhancer = devToolsEnhancer();

// 🏭 store
// const store = createStore(reducers, enhancer);

const store = configureStore({
  reducer: {
    counterValue: counterReducer,
    auth: authReducer,
    task: taskReducer,
  },
});

export default store;
