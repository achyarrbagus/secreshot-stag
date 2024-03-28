"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import Helper from "../../../lib/helper/helper";
import MyFooter from "../components/footer";
import MyScript from "../components/script";

export default function LayoutWrapper({ children }) {
  const lang = useSelector((state) => state.lang.value);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Hotjar tracking code
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

    // gtm tracking
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-PFX6ZWQ4");
  }, []);

  const helper = new Helper();

  return (
    <>
      <body>
        <nav className="nav nav-top fixed-top">
          <div className="container">
            <div className="d-flex align-items-center gap-3">
              <Link
                href={`/?${
                  lang == "EN" ? "lang=en&locale=en" : "lang=idn&locale=id"
                }`}
              >
                <div style={{ cursor: "pointer" }} className="nav-brand">
                  <img src="/assets/img/logo.png" alt="" />
                </div>
              </Link>

              <div className="btn-group ms-auto">
                {(() => {
                  switch (lang) {
                    case "ID":
                      return (
                        <button
                          type="button"
                          className="btn btn-secondary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-earth me-2"></i> ID
                        </button>
                      );
                    default:
                      return (
                        <button
                          type="button"
                          className="btn btn-secondary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-earth me-2"></i> EN
                        </button>
                      );
                  }
                })()}

                <ul className="dropdown-menu dropdown-menu-end">
                  <li className="">
                    <button
                      onClick={() => dispatch(setLang("EN"))}
                      className="dropdown-item d-flex gap-1"
                      type="button"
                    >
                      <img
                        src="assets/img/flag/EN Flag_new.png"
                        alt=""
                        className="mt-1"
                        width={25}
                      />
                      English
                    </button>
                  </li>
                  <li className="">
                    <button
                      onClick={() => dispatch(setLang("ID"))}
                      className="dropdown-item d-flex gap-1"
                      type="button"
                    >
                      <img
                        src="assets/img/flag/ID Flag_new.png"
                        alt=""
                        className="mt-1"
                        width={25}
                      />
                      Indonesia
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

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
      </body>
    </>
  );
}
