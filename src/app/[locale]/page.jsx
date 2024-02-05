"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { Suspense } from "react";
import { Autoplay } from "swiper/modules";
import useSWR from "swr";
import "../../../public/assets/css/style.css";
import "../../../public/assets/fontello/css/csehat.css";

import LayoutWrapper from "./components/layout-wrapper";

import Helper from "../../../lib/helper/helper";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const Home = () => {
  const locale = useLocale();
  const [city, setCity] = useState("error");
  const [cordinate, setCordinates] = useState("error");
  // const [location, setLocation] = useState("");

  const t = useTranslations("home");

  const { data: articles, error: articlesError } = useSWR(
    `https://api.cepatsehat.com/api/v2/articles?locale=${locale}`,
    fetcher
  );

  const redirectWa = (e) => {
    e.preventDefault();
    const helper = new Helper();
    helper.RedirectToWa(formData, locale, true);
  };

  const redirectTele = () => {
    const helper = new Helper();
    helper.RedirectToTele(formData);
  };
  const [formData, setFormData] = React.useState({
    name: "",
    address: "",
    service: "Select Service",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const GetCity = async () => {
    try {
      const response = await axios.get(
        "https://api.cepatsehat.com/api/v1/get-city"
      );
      setCity(response.data?.data?.city);
      console.log(response.data?.data?.city);
    } catch (error) {
      console.error(error?.response?.data);
      setCity("error");
    }
  };

  const SuccessGetLocation = (position) => {
    const { latitude, longitude } = position.coords;

    axios
      .get(
        `https://api.cepatsehat.com/api/v1/get-cordinate?latitude=${latitude}&longitude=${longitude}`
      )
      .then((response) => {
        // setCordinates(response.data.data);
        setCordinates("error");
      })
      .catch((error) => setCordinates("error"));
  };

  // stag
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(SuccessGetLocation, () => {
        setCordinates("error");
      });
    }
  }, []);

  return (
    <>
      <div className="content">
        <section className="banner-pages homepage">
          <div className="container">
            <div className="text">
              <h3>
                <span className="fw-normal"> {t("title-banner")} </span>{" "}
                {t("title-banner-2")}
              </h3>
            </div>
          </div>
        </section>

        <section className="banner-consult">
          <div className="container">
            <div className="d-flex justify-content-end">
              <div className="text">
                <h3>
                  <span className="fw-normal">{t("consult-for")}</span>
                </h3>
                <a href="#book" className="btn btn-primary fs-14 w-75">
                  {t("book-button")}
                </a>
                <h3 className="line">
                  <span>{t("or")}</span>
                </h3>
                {/* i-experience */}
                <h3 className="mt-3">{t("i-experience")}</h3>

                {/* <h3 className="mt-3">I Experience one of those Symptoms</h3> */}
              </div>
            </div>
          </div>
        </section>

        <section className="menus">
          <div className="container">
            <h3 className="title-line blue">
              <span> {t("aesthetic")} </span>
            </h3>
            <div className="row g-3">
              <div className="col-6">
                <Link href={locale + "/acne"} className="button-menu blue">
                  <img src="/assets/img/icon/icon-acne.svg" alt="" />
                  <h5>{t("service-menu.1")}</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  href={locale + "/anti-aging"}
                  className="button-menu blue"
                >
                  <img src="/assets/img/icon/icon-antiaging.svg" alt="" />
                  <h5>{t("service-menu.2")}</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href={locale + "/hair-loss"} className="button-menu blue">
                  <img src="/assets/img/icon/icon-hairloss.svg" alt="" />
                  <h5>{t("service-menu.3")}</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href={locale + "/scars"} className="button-menu blue">
                  <img src="/assets/img/icon/icon-scars.svg" alt="" />
                  <h5>{t("service-menu.4")}</h5>
                </Link>
              </div>
            </div>

            <h3 className="title-line warning">
              <span> {t("fast-recovery")}</span>
            </h3>
            <div className="row g-3">
              <div className="col-6">
                <Link
                  href={locale + `/arthritis`}
                  className="button-menu warning"
                >
                  <img src="/assets/img/icon/icon-arthritis.svg" alt="" />
                  <h5>{t("service-menu.5")}</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  href={locale + `/auto-immune`}
                  className="button-menu warning"
                >
                  <img src="/assets/img/icon/icon-autoimmune.svg" alt="" />
                  <h5>{t("service-menu.6")}</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  href={locale + "/covid-19"}
                  className="button-menu warning"
                >
                  <img src="/assets/img/icon/icon-covid.svg" alt="" />
                  <h5>{t("service-menu.7")}</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href={locale + "/stroke"} className="button-menu warning">
                  <img src="/assets/img/icon/icon-stroke.svg" alt="" />
                  <h5>{t("service-menu.8")}</h5>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="potential bg-soft">
          <div className="container">
            <h3 className="title-section">
              <span className="fw-normal">Potential Uses of</span> <br />
              <span className="text-primary">Secretome and Stem Cells</span>
            </h3>
            <img src="assets/img/img-potential.png" className="w-100" alt="" />
          </div>
        </section> */}

        <section className="potential bg-soft">
          <div className="container">
            <h3 className="title-section">
              <span className="fw-normal">{t("potential")}</span> <br />
              <span className="text-primary">{t("secretome-and")}</span>
            </h3>
            <div className="d-flex justify-content-center">
              <img
                src={
                  locale == "en"
                    ? "/assets/img/img-potential.png"
                    : "/assets/img/potential-uses-id.webp"
                }
                className="img-potential"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="potential">
          <div className="container">
            <h3 className="title-section">{t("stem-cells-review")}</h3>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="row g-3">
                  <a
                    href="https://www.youtube.com/embed/Ve2CL-eRlao?si=H4PDxfD_rhfWBTgQ"
                    data-toggle="lightbox"
                    data-gallery="youtubevideos"
                    className="col-6 gallery-video"
                  >
                    <img
                      src="/assets/img/img-video01.png"
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
                      src="/assets/img/img-video02.png"
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
                      src="/assets/img/img-video03.png"
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
                      src="assets/img/img-video04.png"
                      className="thumbnail-yt"
                    />
                    <div className="play-button">
                      <img src="assets/img/circle-play.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section"> {t("book-button")} </h3>
            <form>
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">{t("form-book.name")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={handleChange}
                    placeholder={t("form-book.name-label")}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">{t("form-book.address")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    onChange={handleChange}
                    placeholder={t("form-book.address-label")}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">{t("form-book.service")}</label>
                  <select
                    id="service"
                    onChange={handleChange}
                    className="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>{t("form-book.service-label")}</option>
                    <option value="Acne">{t("service-menu.1")}</option>
                    <option value="Hair Loss">{t("service-menu.2")}</option>
                    <option value="Anti Aging">{t("service-menu.3")}</option>
                    <option value="Scars">{t("service-menu.4")}</option>
                    <option value="Arthritis">{t("service-menu.5")}</option>
                    <option value="Auto Immune">{t("service-menu.6")}</option>
                    <option value="Covid-19">{t("service-menu.7")}</option>
                    <option value="Stroke">{t("service-menu.8")}</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <button
                    type="submit"
                    onClick={redirectWa}
                    className="btn btn-whatsapp w-100"
                  >
                    <i className="mdi mdi-whatsapp fs-18 me-2"></i>
                    Whatsapp
                  </button>
                </div>
                <div className="col-6 col-md-3">
                  <button
                    type="submit"
                    onClick={redirectTele}
                    className="btn btn-telegram w-100"
                  >
                    <i className="fa-brands fa-telegram fs-18 me-2"></i>
                    Telegram
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default function App() {
  useEffect(() => {
    if (window.location.hostname === "www.cepat-sehat.com") {
      window.location.replace("https://www.cepatsehat.com");
    }
  }, []);

  return (
    <>
      <LayoutWrapper>
        <Home />
      </LayoutWrapper>
    </>
  );
}
