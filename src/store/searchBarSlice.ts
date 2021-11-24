import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  textInput: string;
  showSearchMobile: boolean;
}

const initialState: InitialState = {
  textInput: "",
  showSearchMobile: false,
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    changeText(state, action: PayloadAction<string>) {
      state.textInput = action.payload;
      state.showSearchMobile = true;
    },
    showSearchBar(state) {
      state.showSearchMobile = !state.showSearchMobile;
      state.textInput = "";
    },
  },
});

export const searchBarActions = searchBarSlice.actions;

export default searchBarSlice.reducer;
