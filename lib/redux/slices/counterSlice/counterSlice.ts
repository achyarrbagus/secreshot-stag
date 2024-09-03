import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
<<<<<<< HEAD
    increment: (state) => {
=======
    increment: (state: any) => {
>>>>>>> f50c9cf511023b582f6bff622673ff36a4b87d41
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
<<<<<<< HEAD
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
=======
    decrement: (state: any) => {
      state.value -= 1;
    },
    incrementByAmount: (state: any, action: any) => {
>>>>>>> f50c9cf511023b582f6bff622673ff36a4b87d41
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
