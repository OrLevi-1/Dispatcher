import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchTerm: "", searchArray: [""] };

const searchSlice = createSlice({
  name: "search-input",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setArrayTerm(state, action) {
      state.searchArray.push(action.payload);
    },
    removeArrayTerm(state, action) {
      state.searchArray.splice(action.payload, 1);
    },
    clearArrayTerm(state) {
      state.searchArray.splice(1, state.searchArray.length);
    },
  },
});

export default searchSlice.reducer;

export const searchActions = searchSlice.actions;
