import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "../../types";

const initialState: SearchState = {
  query: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state: SearchState, action: PayloadAction<SearchState>): void => {
      const { payload } = action;

      state.query = payload.query;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
