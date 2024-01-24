"use client";

/* Core */
import { Provider, useDispatch } from "react-redux";
import React from "react";


/* Instruments */
import store from "./redux/store";


export const Providers = (props: React.PropsWithChildren) => {

  return <Provider store={store}>{props.children}</Provider>
};
