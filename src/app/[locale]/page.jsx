"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { Suspense } from "react";
import { Autoplay } from "swiper/modules";
import useSWR from "swr";
import CardArticleSlide from "./components/card-article-slide";
import "../../../public/assets/css/style.css";
import "../../../public/assets/fontello/css/csehat.css";
import NurseSection from "@/app/[locale]/components/nurse-section";
import DoctorSection from "./components/doctor-serction";

import LayoutWrapper from "./components/layout-wrapper";
import CardService from "./components/card-service";

import DoctorCard from "./components/card-doctor";
import Helper from "../../../lib/helper/helper";
import axios from "axios";
import HeroBanner from "./components/hero-banner";
import NurseCard from "./components/card-nurse";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const Home = () => {
  const locale = useLocale();
  const [city, setCity] = useState("error");
  const [location, setLocation] = useState("");

  const t = useTranslations("home");

  const { data: articles, error: articlesError } = useSWR(
    `https://api.cepatsehat.com/api/v2/articles?locale=${locale}`,
    fetcher
  );

  const redirectWa = (locale) => {
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

  // stag
  useEffect(() => {
    // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      () => {
        alert("failed to get location");
      }
    );
  }, []);

  console.log(location, "======");

  return (
    <>
      <div className="content">
        <HeroBanner
          title={t("title-banner")}
          locale={locale}
          city={city}
          desc={t("title-slogan")}
          bookButton={t("book-button")}
          backgroundImage={"/assets/img/banner-homepage.webp"}
        />
        <section className="service">
          <div className="container">
            <h3 className="title-section"> {t("our-service")} </h3>
            <div className="row g-3">
              <CardService
                link={locale + "/home-care-services"}
                titleService={t("service-menu.1")}
                icon={"icon-menu-doctor-home"}
              />
              <CardService
                link={locale + "/home-nursing"}
                titleService={t("service-menu.2")}
                icon={"icon-menu-home-nursing"}
              />
              <CardService
                link={locale + "/remote-telemedicine"}
                titleService={t("service-menu.3")}
                icon={"icon-menu-remote-telemedicine"}
              />
              <CardService
                link={locale + "/holistic-alternative"}
                titleService={t("service-menu.4")}
                icon={"icon-menu-holistic"}
              />
              <CardService
                link={locale + "/inhome-therapy"}
                titleService={t("service-menu.5")}
                icon={"icon-menu-in-home-iv"}
              />
              <CardService
                link={locale + "/alternative-telemedicine"}
                titleService={t("service-menu.6")}
                icon={"icon-menu-alternative-telemedicine"}
              />
            </div>
          </div>
        </section>

        <section className="why">
          <div className="container">
            <div className="text">
              <h3>{t("why")}</h3>
              <div className="list-why">
                <div className="items-why">
                  <span>{t("why-slogan")}</span>
                </div>
              </div>
              <div className="list-why">
                <div className="items-why">
                  <img
                    src="/assets/img/Protect.png"
                    className="img-list"
                    alt=""
                  />
                  <span>{t("why-menu.1")}</span>
                </div>
              </div>
              <div className="list-why">
                <div className="items-why">
                  <img
                    src="/assets/img/Diploma.png"
                    className="img-list"
                    alt=""
                  />
                  <span>{t("why-menu.2")}</span>
                </div>
              </div>
              <div className="list-why">
                <div className="items-why">
                  <img
                    src="assets/img/Last 24 Hours.png"
                    className="img-list"
                    alt=""
                  />
                  <span>{t("why-menu.3")}</span>
                </div>
              </div>
              <div className="list-why">
                <div className="items-why">
                  <img
                    src="/assets/img/Globe Network.png"
                    className="img-list"
                    alt=""
                  />
                  <span>{t("why-menu.4")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DoctorSection />
        <NurseSection />

        <section className="article">
          <div className="container">
            <h3 className="title-section text-white"> {t("article")} </h3>
            <div className="swiper swiper-article mt-5">
              <div className="swiper-wrapper">
                <div className="swiper-wrapper">
                  <Swiper
                    loop
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3.5}
                    speed={1000}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1.5,
                      },
                      480: {
                        slidesPerView: 2.5,
                      },
                      768: {
                        slidesPerView: 3.5,
                      },
                    }}
                  >
                    {articles &&
                      articles.map((item, index) => (
                        <SwiperSlide key={item.id}>
                          <Link
                            href={`/${locale}/article?id=${item.article_id_v2}&locale=${locale}`}
                            scroll={true}
                          >
                            <CardArticleSlide item={item} path={item.image} />
                          </Link>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* booking session */}
        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section">{t("form-book.title")}</h3>
            <form>
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">{t("form-book.name")}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder={t("form-book.name-label")}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">{t("form-book.address")}</label>
                  <input
                    id="address"
                    type="text"
                    className="form-control"
                    placeholder={t("form-book.address-label")}
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">{t("form-book.service")}</label>
                  <select
                    id="service"
                    className="form-select form-control"
                    aria-label="Default select example"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Select Service" disabled>
                      {t("form-book.service-label")}
                    </option>
                    <option value={t("service-menu.1")}>
                      {t("service-menu.1")}
                    </option>
                    <option value={t("service-menu.2")}>
                      {t("service-menu.2")}
                    </option>
                    <option value={t("service-menu.3")}>
                      {t("service-menu.3")}
                    </option>
                    <option value={t("service-menu.4")}>
                      {t("service-menu.4")}
                    </option>
                    <option value={t("service-menu.5")}>
                      {t("service-menu.5")}
                    </option>
                    <option value={t("service-menu.6")}>
                      {t("service-menu.6")}
                    </option>
                  </select>
                </div>
              </div>
            </form>
            <div className="row g-3 justify-content-center">
              <div className="col-6 col-md-3">
                <button
                  onClick={() => redirectWa(locale)}
                  className="btn btn-whatsapp w-100"
                >
                  <i className="mdi mdi-whatsapp fs-18 me-2"></i> Whatsapp
                </button>
              </div>
              <div className="col-6 col-md-3">
                <button
                  onClick={redirectTele}
                  className="btn btn-telegram w-100"
                >
                  <i className="fa-brands fa-telegram fs-18 me-2"></i> Telegram
                </button>
              </div>
            </div>
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
    console.log(window.location.hostname, "==hell==");
  }, []);

  return (
    <>
      <LayoutWrapper>
        <Home />
      </LayoutWrapper>
    </>
  );
}
