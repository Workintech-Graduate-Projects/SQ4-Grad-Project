import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./gridApi";
export const store = configureStore({
  reducer: { counter: counterReducer },
});
