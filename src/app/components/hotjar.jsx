"use client";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

const HotjarInit = () => {
  useEffect(() => {
    hotjar.initialize(3831085, 6);
  }, []);
  return <></>;
};

export default HotjarInit;
