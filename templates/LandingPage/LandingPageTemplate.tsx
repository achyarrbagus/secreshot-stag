import Script from "next/script";
import styles from "./LandingPageTemplate.module.css";
import { Container } from "./components/Container";
import { InlineCode } from "./components/InlineCode";
import { Link } from "./components/Link";
import { Paragraph } from "./components/Paragraph";
import { Section } from "./components/Section";
import { Subtitle } from "./components/Subtitle";
import { TechnologyGrid } from "./components/TechnologyGrid";
import { H1, H2 } from "./components/headings";
import { technologies } from "./technologies";
import Head from "next/head";
import React, { Children, ReactNode } from "react";

type WrapperComponentProps = {
  children: ReactNode;
};

const LandingPageTemplate: React.FC<WrapperComponentProps> = ({ children }) => {
  return (
    <>
      <nav className="nav nav-top fixed-top">
        <div className="container">
          <div className="d-flex align-items-center">
            <a href="/" className="nav-brand">
              <img src="assets/img/logo.png" alt="" />
            </a>
            <div className="btn-group ms-auto">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-earth me-2"></i> EN
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    English
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Indonesia
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <footer className="footer">
        <div className="container">
          <div className="d-flex align-items-center">
            <a href="/">
              <img src="assets/img/logo-white.png" className="logo" alt="" />
            </a>
            <img
              src="assets/img/logo-atensi.png"
              className="logo-atensi ms-auto"
              alt=""
            />
          </div>
          <div className="row mt-4">
            <div className="col-md-8 text-white">
              <h4 className="fs-14">PT Cepat Sehat Indonesia</h4>
              <p>
                Jalan Peternakan No. 13, Kel. Tengah, Kec. Kramat jati, Kota
                Adm. Jakarta Timur, Provinsi DKI Jakarta 13510 <br />
                sehatcepat.com
              </p>
            </div>
            <div className="col-md-12">
              <div className="d-flex align-items-center">
                <a
                  href="https://api.whatsapp.com/send/?phone=6282211189009&text&type=phone_number&app_absent=0"
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
      <script src="assets/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
      ></script>
      <script src="assets/js/swiper-bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.3/dist/index.bundle.min.js"></script>
    </>
  );
};

export default LandingPageTemplate;
