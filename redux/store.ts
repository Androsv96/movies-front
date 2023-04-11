import { configureStore } from "@reduxjs/toolkit";
import favouritesMediaReducer from "./slices/favouritesMedia";
import pagesReducer from "./slices/pages";
import userReducer from "./slices/user";

export const store = configureStore({
  reducer: {
    favouritesMedia: favouritesMediaReducer,
    pages: pagesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
