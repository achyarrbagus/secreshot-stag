import { createSlice } from "@reduxjs/toolkit";

export const isMobileSlice = createSlice({
  name: "isMobile",
  initialState: {
    value: false,
  },
  reducers: {
    setIsMobile: (state: any) => {
      var Mobile = /Mobi|Android/i.test(navigator.userAgent);
      if (Mobile) {
        state.value = true;
      }
    },

    incrementByAmount: (state: any, action: any) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsMobile } = isMobileSlice.actions;

export default isMobileSlice.reducer;
