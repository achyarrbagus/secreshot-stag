"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Dropdown } from "flowbite-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { Spinner } from "flowbite-react";
import Helper from "../../../lib/helper/helper";
import locale from "antd/es/date-picker/locale/en_US";

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

        <footer className="footer">
          <div className="container">
            <div className="d-flex align-items-center">
              <a href="index.html">
                <img src="assets/img/logo-white.png" className="logo" alt="" />
              </a>
              <a href="https://atensi.or.id/" className="ms-auto">
                <img
                  src="assets/img/logo-atensi.png"
                  className="logo-atensi"
                  alt=""
                />
              </a>
            </div>
            <div className="row mt-4">
              <div className="col-md-8 text-white">
                <h4 className="fs-14">Klinik Cepat Sehat Indonesia</h4>
                <p>Registered Number 04102100035090001</p>
                <p>
                  Jalan Peternakan No. 13, Kel. Tengah, Kec. Kramat jati, Kota
                  Adm. Jakarta Timur, Provinsi DKI Jakarta 13510
                </p>
              </div>
              <div className="col-md-12">
                <div className="d-flex align-items-center">
                  <a
                    href="https://api.whatsapp.com/send/?phone=6285212500030&text&type=phone_number&app_absent=0"
                    className="phone text-white fs-14 d-flex align-items-center"
                  >
                    <i className="mdi mdi-phone me-2 fs-24"></i> 0822 1118 9009
                  </a>
                  <div className="sosmed list-inline ms-auto">
                    <a href="#" className="list-inline-item text-white">
                      <i className="mdi mdi-web fs-24"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/klinikcepatsehat"
                      className="list-inline-item text-white"
                    >
                      <i className="mdi mdi-facebook fs-24"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/sehatcepat.mobi/ "
                      className="list-inline-item text-white"
                    >
                      <i className="mdi mdi-instagram fs-24"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            Copyright © 2024 Cepat Sehat. All Rights Reserved.
          </div>
        </footer>
      </body>

      <script type="module" src="/src/main.tsx"></script>
      <script src="assets/bootstrap/js/main.js"></script>
      <script src="assets/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
      ></script>
      <script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.3/dist/index.bundle.min.js"></script>
    </>
  );
}
