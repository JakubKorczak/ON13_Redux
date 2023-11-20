import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, toggleTask } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // extraReducers: {
  //   [fetchTasks.pending]: (state, action) => {
  //     state.isLoading = true;
  //   },
  //   [fetchTasks.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.items = action.payload;
  //     state.error = null;
  //   },
  //   [fetchTasks.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, (state, action) => {
        // state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(toggleTask.pending, (state, action) => {
        // state.isLoading = true;
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        // state.isLoading = false;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.error = null;
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleTask.rejected, (state, action) => {
        // state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
