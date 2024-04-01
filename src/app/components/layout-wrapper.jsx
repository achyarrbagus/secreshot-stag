"use client";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import React, { useEffect } from "react";
import Helper from "../../../lib/helper/helper";
import MyFooter from "../components/footer";
import MyScript from "../components/script";
import MyNavbar from "../components/navbar";
import MyHead from "../components/Head";
import "../../../public/assets/css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { GoogleTagManager } from "@next/third-parties/google";
import HotjarInit from "./hotjar";
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";
import { hotjar } from "react-hotjar";

export default function LayoutWrapper({ children }) {
  const helper = new Helper();
  const lang = useSelector((state) => state.lang.value);
  const dispatch = useDispatch();
  useEffect(() => {
    hotjar.initialize(3831085, 6);
  }, []);

  return (
    <>
      <GoogleTagManager gtmId="GTM-PFX6ZWQ4" />
      <MyHead />
      <MyNavbar lang={lang} dispatch={dispatch} setLang={setLang} />
      {children}
      <OverlayTrigger
        placement="left"
        overlay={
          <Tooltip id="tooltip-left" className="custom-tooltip">
            Consult with Our Medical Team
          </Tooltip>
        }
      >
        <div className="btn-float">
          <div className="btn-circle whatsapp">
            <a
              onClick={() => helper.RedirectToWa("", "", false)}
              className="text-white"
            >
              <i className="fs-24 fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="btn-circle telegram">
            <a href="https://t.me/cepat_sehat" className="text-white">
              <i className="fs-24 fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </OverlayTrigger>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PFX6ZWQ4"
        height="0"
        width="0"
        style={{ display: "display:none;visibility:hidden" }}
      ></iframe>

      <MyFooter />
      <MyScript />
    </>
  );
}
