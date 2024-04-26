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
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";

export default function LayoutWrapper({ children }) {
  const lang = useSelector((state) => state.lang.value);
  const dispatch = useDispatch();
  useEffect(() => {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 3831085, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  }, []);

  const redirectWa = () => {
    const helper = new Helper();
    const formData = {
      name: "float_button_Wa",
      address: "float_button_wa",
      service: "float_button_wa",
    };
    helper.RedirectToWa(formData, lang, false);
  };

  const redirectTele = () => {
    const helper = new Helper();
    const formData = {
      name: "float_button_tele",
      address: "float_button_tele",
      service: "float_button_tele",
    };
    helper.RedirectToTele(formData);
  };

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
            <a onClick={() => redirectWa()} className="text-white">
              <i className="fs-24 fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="btn-circle telegram">
            <a onClick={() => redirectTele()} className="text-white">
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
