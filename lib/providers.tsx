"use client";
<<<<<<< HEAD

/* Core */
import { Provider, useDispatch } from "react-redux";
import React from "react";

=======
import React from "react";
import ismobileSlice from "./redux/slices/isMobileslice/ismobileSlice";
import { useDispatch } from "react-redux";
import { setIsMobile } from "./redux/slices/isMobileslice/ismobileSlice";

/* Core */
import { Provider } from "react-redux";
>>>>>>> f50c9cf511023b582f6bff622673ff36a4b87d41

/* Instruments */
import store from "./redux/store";

<<<<<<< HEAD

export const Providers = (props: React.PropsWithChildren) => {

  return <Provider store={store}>{props.children}</Provider>
=======
export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
>>>>>>> f50c9cf511023b582f6bff622673ff36a4b87d41
};
