import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./reducers/tasks/taskSlice";
import { authReducer } from "./reducers/auth/authSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
});

export default store;
