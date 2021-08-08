import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainFilter: "Everything",
  filterArray: [{ category: "", id: "" }],
  sourcesArray: [{ name: "", value: 0 }],
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "main-filter",
  initialState,
  reducers: {
    setMainFilter(state, action) {
      state.mainFilter = action.payload;
    },
    addSubFilter(state, action) {
      state.filterArray.push(action.payload);
    },
    clearFilterArray(state) {
      state.filterArray.splice(1, state.filterArray.length);
    },
    setSourceArray(state, action) {
      state.sourcesArray = action.payload;
    },
    clearSourceArray(state) {
      state.sourcesArray.splice(1, state.sourcesArray.length);
    },
    incrementPage(state) {
      state.currentPage++;
    },
    decrementPage(state) {
      state.currentPage--;
    },
  },
});

export default filterSlice.reducer;

export const filterActions = filterSlice.actions;
