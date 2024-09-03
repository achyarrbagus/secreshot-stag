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
    helper.RedirectToWa(formData, locale, false);
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

  console.log("root");

  return (
    <>
      <div className="content">
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
                    Consult For Free With Our Medical Team
                  </span>
                </h3>
                <a href="#book" className="btn btn-primary fs-14 w-75">
                  Book Now
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
                <Link href={locale + "/acne"} className="button-menu blue">
                  <img src="assets/img/icon/icon-acne.svg" alt="" />
                  <h5>Acne</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  href={locale + "/anti-aging"}
                  className="button-menu blue"
                >
                  <img src="assets/img/icon/icon-antiaging.svg" alt="" />
                  <h5>Anti Aging</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href={locale + "/hair-loss"} className="button-menu blue">
                  <img src="assets/img/icon/icon-hairloss.svg" alt="" />
                  <h5>Hair Loss</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href={locale + "/scars"} className="button-menu blue">
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
                <Link
                  href={locale + `/arthritis`}
                  className="button-menu warning"
                >
                  <img src="assets/img/icon/icon-arthritis.svg" alt="" />
                  <h5>Arthritis</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  href={locale + `/auto-immune`}
                  className="button-menu warning"
                >
                  <img src="assets/img/icon/icon-autoimmune.svg" alt="" />
                  <h5>Auto Immune</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  href={locale + "/covid-19"}
                  className="button-menu warning"
                >
                  <img src="assets/img/icon/icon-covid.svg" alt="" />
                  <h5>Covid-19</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href={locale + "/stroke"} className="button-menu warning">
                  <img src="assets/img/icon/icon-stroke.svg" alt="" />
                  <h5>Stroke</h5>
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
              <span className="fw-normal">Potential Uses of</span> <br />
              <span className="text-primary">Secretome and Stem Cells</span>
            </h3>
            <div className="d-flex justify-content-center">
              <img
                src="assets/img/img-potential.png"
                className="img-potential"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="potential">
          <div className="container">
            <h3 className="title-section">Stem Cells Review From Experts</h3>
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
                      src="assets/img/img-video01.png"
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
                      src="assets/img/img-video02.png"
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
                      src="assets/img/img-video03.png"
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
            <h3 className="title-section"> Book Now </h3>
            <form>
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    onChange={handleChange}
                    placeholder="Your Address"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Service</label>
                  <select
                    id="service"
                    onChange={handleChange}
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
