import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MediaType } from "@/__generated__/graphql";

interface FavouritesMediaState {
  favouriteMedias: { id: number; type: MediaType }[];
}

const initialState: FavouritesMediaState = {
  favouriteMedias: [],
};

export const favouritesMediaSlice = createSlice({
  name: "favouriteMedia",
  initialState,
  reducers: {
    addMediaID: (
      state,
      action: PayloadAction<{ id: number; type: MediaType }>
    ) => {
      state.favouriteMedias = [...state.favouriteMedias, action.payload];
    },
    removeMediaID: (state, action: PayloadAction<number>) => {
      state.favouriteMedias = state.favouriteMedias.filter(
        (media) => media.id !== action.payload
      );
    },
  },
});

export const { addMediaID, removeMediaID } = favouritesMediaSlice.actions;

export default favouritesMediaSlice.reducer;
