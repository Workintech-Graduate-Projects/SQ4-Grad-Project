import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*/*const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;*/

/*const initialState = { data: [] };
export const gridSliceReducer = createSlice({
  name: "gridSliceReducer",
  initialState,
  reducers: {},
});*/
export const gridApi = createApi({
  reducerPath: "gridApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gradapp.adaptable.app/mongo",
  }),
  tagTypes: ["Post", "Get", "Delete", "Put"],
  endpoints: (builder) => ({
    getAll: builder.query({ query: () => "/" }),
  }),
});
