import { createSlice } from "@reduxjs/toolkit";
import { filtersValue } from "../consts";

const filterSlice = createSlice({
  name: "filter",
  initialState: filtersValue.all,
  reducers: {
    setFilterValue: (_, action) => {
      return action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
