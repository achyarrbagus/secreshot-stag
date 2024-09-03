<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: {
    value: "EN",
  },
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      console.log("hello world");
      const searchParams = new URLSearchParams(window.location.search);

      searchParams.set("locale", state.value === "EN" ? "en" : "id");

      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLang } = langSlice.actions;

export default langSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: {
    value: "EN",
  },
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLang } = langSlice.actions;

export default langSlice.reducer;
>>>>>>> f50c9cf511023b582f6bff622673ff36a4b87d41
