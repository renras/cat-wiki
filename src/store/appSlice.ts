import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getCats = createAsyncThunk("cats/getCats", async () => {
  const response = await Axios.get(`https://api.thecatapi.com/v1/breeds`);
  return response.data;
});

interface InitialState {
  status: string;
  cats: [];
}

const initialState: InitialState = {
  status: "",
  cats: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCats.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCats.fulfilled, (state, action) => {
      state.status = "success";
      state.cats = action.payload;
    });
    builder.addCase(getCats.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
