"use client";
import React from "react";
import ismobileSlice from "./redux/slices/isMobileslice/ismobileSlice";
import { useDispatch } from "react-redux";
import { setIsMobile } from "./redux/slices/isMobileslice/ismobileSlice";

/* Core */
import { Provider } from "react-redux";

/* Instruments */
import store from "./redux/store";

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
