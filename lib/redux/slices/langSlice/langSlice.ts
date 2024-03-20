import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: {
    value: "EN",
  },
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
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
