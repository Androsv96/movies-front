import { configureStore } from "@reduxjs/toolkit";
import favouritesMediaReducer from "./slices/favouritesMedia";
import pagesReducer from "./slices/pages";

export const store = configureStore({
  reducer: {
    favouritesMedia: favouritesMediaReducer,
    pages: pagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
