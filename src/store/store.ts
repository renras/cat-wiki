import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./appSlice";
import searchBarReducer from "./searchBarSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    searchBar: searchBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
