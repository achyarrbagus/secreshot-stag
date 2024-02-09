import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice/counterSlice";
import langSlice from "./slices/langSlice/langSlice";
import ismobileSlice from "./slices/isMobileslice/ismobileSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    lang: langSlice,
    isMobile: ismobileSlice,
  },
});
