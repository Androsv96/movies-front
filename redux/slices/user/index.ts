import { Media } from "@/__generated__/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isAuthenticated: boolean;
  user: {
    name: string;
  };
}

const initialState: UserState = {
  isAuthenticated: false,
  user: {
    name: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.user.name = action.payload.user.name;
    },
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUser, setAuth } = userSlice.actions;

export default userSlice.reducer;
