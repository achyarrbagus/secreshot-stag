"use client";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import React from "react";
import Helper from "../../../lib/helper/helper";
import MyFooter from "../components/footer";
import MyScript from "../components/script";
import MyNavbar from "../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";

export default function LayoutWrapper({ children }) {
  const helper = new Helper();
  const lang = useSelector((state) => state.lang.value);
  const dispatch = useDispatch();
  return (
    <>
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
