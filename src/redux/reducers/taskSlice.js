import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const taskSlice = createSlice({
  name: "task",
  initialState: [
    {
      id: 1,
      name: "Task 1",
      active: true,
    },
    {
      id: 2,
      name: "Task 2",
      active: true,
    },
    {
      id: 3,
      name: "Task 3",
      active: false,
    },
  ],
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name) => {
        return {
          payload: {
            name,
            id: nanoid(),
            active: true,
          },
        };
      },
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, active: !task.active };
        }
        return task;
      });
    },
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
