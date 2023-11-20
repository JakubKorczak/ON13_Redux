import axios from "axios";
import {
  fetchLocationsFail,
  fetchLocationsInProgress,
  fetchLocationsSuccess,
} from "./locationsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";
// axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchLocations = () => async (dispatch) => {
  dispatch(fetchLocationsInProgress());
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );
    dispatch(fetchLocationsSuccess(response.data));
  } catch (err) {
    dispatch(fetchLocationsFail(err));
  }
};

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`/tasks/${id}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkApi) => {
    try {
      const response = await axios.post(`/tasks`, { text });
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const toggleTask = createAsyncThunk(
  "tasks/toggleTask",
  async (task, thunkApi) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
