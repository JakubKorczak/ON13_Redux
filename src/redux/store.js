import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./reducers/taskSlice";
import { locationsReducer } from "./reducers/locationsSlice";
import { filterReducer } from "./reducers/filterSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    locations: locationsReducer,
    filter: filterReducer,
  },
});

export default store;
