import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice/counterSlice";
import langSlice from "./slices/langSlice/langSlice";
<<<<<<< HEAD
=======
import ismobileSlice from "./slices/isMobileslice/ismobileSlice";
>>>>>>> f50c9cf511023b582f6bff622673ff36a4b87d41

export default configureStore({
  reducer: {
    counter: counterSlice,
    lang: langSlice,
<<<<<<< HEAD
=======
    isMobile: ismobileSlice,
>>>>>>> f50c9cf511023b582f6bff622673ff36a4b87d41
  },
});
