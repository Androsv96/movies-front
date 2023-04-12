import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "./interfaces";

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    name: "",
    id: 0,
    ratedMedia: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUser, setAuth } = userSlice.actions;

export default userSlice.reducer;
