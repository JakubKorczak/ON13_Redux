import { createSlice } from "@reduxjs/toolkit";
import { login, logout, me, register } from "./operation";

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log(action);
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        console.log(action);
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action);
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(me.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(me.rejected, () => initialState)
      .addCase(me.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user = action.payload.user;
      });
  },
});

export const authReducer = authSlice.reducer;
