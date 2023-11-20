import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./reducers/taskSlice";
import { locationsReducer } from "./reducers/locationsSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    locations: locationsReducer,
  },
});

export default store;
