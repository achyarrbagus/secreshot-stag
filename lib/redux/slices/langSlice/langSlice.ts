import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export const langSlice = createSlice({
  name: "lang",
  initialState: {
    value: "ID",
  },
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
     
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLang } = langSlice.actions;

export default langSlice.reducer;
