import { createSlice } from "@reduxjs/toolkit";

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    isLoading: false,
    locations: null,
    error: null,
  },
  reducers: {
    fetchLocationsInProgress: (state) => {
      state.isLoading = true;
    },
    fetchLocationsSuccess: (state, action) => {
      state.isLoading = false;
      state.locations = action.payload;
      state.error = null;
    },
    fetchLocationsFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchLocationsInProgress,
  fetchLocationsSuccess,
  fetchLocationsFail,
} = locationsSlice.actions;
export const locationsReducer = locationsSlice.reducer;
