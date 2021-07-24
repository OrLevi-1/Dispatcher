import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search";
import filterReducer from "./filter";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
  },
});

export default store;
