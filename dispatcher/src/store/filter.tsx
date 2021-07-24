import { createSlice } from "@reduxjs/toolkit";

const initialState = { mainFilter: "Everything" };

const filterSlice = createSlice({
  name: "main-filter",
  initialState,
  reducers: {
    setMainFilter(state, action) {
      state.mainFilter = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const filterActions = filterSlice.actions;
