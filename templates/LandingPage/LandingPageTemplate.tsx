"use client";
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
      <Head>
        <title>Sacretome</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css"
          integrity="sha512-LX0YV/MWBEn2dwXCYgQHrpa9HJkwB+S+bnBpifSOTO1No27TqNMKYoAn6ff2FBh03THAzAiiCwQ+aPX+/Qt/Ow=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="icon" type="image/x-icon" href="assets/img/favicon.svg" />

        <link rel="stylesheet" href="assets/fontello/css/csehat.css" />

        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />

        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />

        <link rel="stylesheet" href="assets/css/style.css"></link>
      </Head>
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
      {/* <div className="content">
        <section className="banner-pages homepage">
          <div className="container">
            <div className="text">
              <h3>
                <span className="fw-normal"> Boost Your Body With </span> Stem
                Cells Theraphy
              </h3>
            </div>
          </div>
        </section>

        <section className="banner-consult">
          <div className="container">
            <div className="d-flex justify-content-end">
              <div className="text">
                <h3>
                  <span className="fw-normal">
                    {" "}
                    Consult For Free With Our Medical Team{" "}
                  </span>
                </h3>
                <a href="#book" className="btn btn-primary fs-14 w-75">
                  {" "}
                  Book Now{" "}
                </a>
                <h3 className="line">
                  <span>Or</span>
                </h3>
                <h3 className="mt-3">I Experience one of those Symptoms</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="menus">
          <div className="container">
            <h3 className="title-line blue">
              <span> Aesthetic </span>
            </h3>
            <div className="row g-3">
              <div className="col-6">
                <Link href="/acne" className="button-menu blue">
                  <img src="assets/img/icon/icon-acne.svg" alt="" />
                  <h5>Acne</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/anti-aging" className="button-menu blue">
                  <img src="assets/img/icon/icon-antiaging.svg" alt="" />
                  <h5>Anti Aging</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/hair-loss" className="button-menu blue">
                  <img src="assets/img/icon/icon-hairloss.svg" alt="" />
                  <h5>Hair Loss</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/scars" className="button-menu blue">
                  <img src="assets/img/icon/icon-scars.svg" alt="" />
                  <h5>Scars</h5>
                </Link>
              </div>
            </div>

            <h3 className="title-line warning">
              <span> Fast Recovery </span>
            </h3>
            <div className="row g-3">
              <div className="col-6">
                <Link href="/arthritis" className="button-menu warning">
                  <img src="assets/img/icon/icon-arthritis.svg" alt="" />
                  <h5>Arthritis</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/auto-immune" className="button-menu warning">
                  <img src="assets/img/icon/icon-autoimmune.svg" alt="" />
                  <h5>Auto Immune</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/covid-19" className="button-menu warning">
                  <img src="assets/img/icon/icon-covid.svg" alt="" />
                  <h5>Covid-19</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/stroke" className="button-menu warning">
                  <img src="assets/img/icon/icon-stroke.svg" alt="" />
                  <h5>Stroke</h5>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="potential bg-soft">
          <div className="container">
            <h3 className="title-section">
              <span className="fw-normal">Potential Uses of</span> <br />
              <span className="text-primary">Secretome and Stem Cells</span>
            </h3>
            <img src="assets/img/img-potential.png" className="w-100" alt="" />
          </div>
        </section>

        <section className="potential">
          <div className="container">
            <h3 className="title-section">Stem Cells Review From Experts</h3>
            <div className="row g-3">
              <a
                href="https://www.youtube.com/embed/Ve2CL-eRlao?si=H4PDxfD_rhfWBTgQ"
                data-toggle="lightbox"
                data-gallery="youtubevideos"
                className="col-6 gallery-video"
              >
                <img
                  src="https://img.youtube.com/vi/Ve2CL-eRlao/hqdefault.jpg"
                  className="thumbnail-yt"
                />
                <div className="play-button">
                  <img src="assets/img/circle-play.png" alt="" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/embed/SM3cH7FU3Q8?si=H4PDxfD_rhfWBTgQ"
                data-toggle="lightbox"
                data-gallery="youtubevideos"
                className="col-6 gallery-video"
              >
                <img
                  src="https://i1.ytimg.com/vi/SM3cH7FU3Q8/mqdefault.jpg"
                  className="thumbnail-yt"
                />
                <div className="play-button">
                  <img src="assets/img/circle-play.png" alt="" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/embed/GIZp_DS2WvE?si=H4PDxfD_rhfWBTgQ"
                data-toggle="lightbox"
                data-gallery="youtubevideos"
                className="col-6 gallery-video"
              >
                <img
                  src="https://i1.ytimg.com/vi/GIZp_DS2WvE/mqdefault.jpg"
                  className="thumbnail-yt"
                />
                <div className="play-button">
                  <img src="assets/img/circle-play.png" alt="" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/embed/t9kWCxu7MR4?si=H4PDxfD_rhfWBTgQ"
                data-toggle="lightbox"
                data-gallery="youtubevideos"
                className="col-6 gallery-video"
              >
                <img
                  src="https://i1.ytimg.com/vi/t9kWCxu7MR4/mqdefault.jpg"
                  className="thumbnail-yt"
                />
                <div className="play-button">
                  <img src="assets/img/circle-play.png" alt="" />
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section"> Book Now </h3>
            <form>
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Your Address"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Service</label>
                  <select
                    id="service"
                    className="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Select Service</option>
                    <option value="Acne">Acne</option>
                    <option value="Hair Loss">Hair Loss</option>
                    <option value="Anti Aging">Anti Aging</option>
                    <option value="Scars">Scars</option>
                    <option value="Arthritis">Arthritis</option>
                    <option value="Auto Immune">Auto Immune</option>
                    <option value="Covid-19">Covid-19</option>
                    <option value="Stroke">Stroke</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="row g-3 justify-content-center">
              <div className="col-6 col-md-3">
                <button
                  id="whatsappSubmit"
                  onClick={() => console.log("hello world")}
                  className="btn btn-whatsapp w-100"
                >
                  <i className="mdi mdi-whatsapp fs-18 me-2"></i>
                  Whatsapp
                </button>
              </div>
              <div className="col-6 col-md-3">
                <button
                  type="submit"
                  id="telegramSubmit"
                  className="btn btn-telegram w-100"
                >
                  <i className="fa-brands fa-telegram fs-18 me-2"></i>
                  Telegram
                </button>
              </div>
            </div>
          </div>
        </section>
      </div> */}
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
      <script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.3/dist/index.bundle.min.js"></script>
    </>
  );
};

export default LandingPageTemplate;
