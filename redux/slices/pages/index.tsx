import { Media } from "@/__generated__/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PagesState {
  currentPage: number;
  filteredMedia: Media[];
  query: string;
}

const initialState: PagesState = {
  currentPage: 1,
  filteredMedia: [],
  query: "",
};

export const pagesSlice = createSlice({
  name: "pagesMedia",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilteredMedia: (state, action: PayloadAction<Media[]>) => {
      state.filteredMedia = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setCurrentPage, setFilteredMedia, setQuery } =
  pagesSlice.actions;

export default pagesSlice.reducer;
