"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeId from "./page-id";
import React, { useState } from "react";
import { Suspense } from "react";
import { Autoplay } from "swiper/modules";
import useSWR from "swr";
import CardArticleSlide from "../components/card-article-slide";
import "../../../public/assets/css/style.css";
import "../../../public/assets/fontello/css/csehat.css";
import LayoutWrapper from "../components/layout-wrapper";
import DoctorCard from "../components/card-doctor";
import Helper from "../../../lib/helper/helper";
import axios from "axios";
import HeroBanner from "../components/hero-banner";
import NurseCard from "../components/card-nurse";
import { useLocale, useTranslations } from "next-intl";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const Home = () => {
  const locale = useLocale();

  const t = useTranslations("home");

  const { data: articles, error: articlesError } = useSWR(
    `https://api.cepatsehat.com/api/v2/articles?locale=${locale}`,
    fetcher
  );

  const redirectWa = (locale) => {
    console.log(locale);

    const helper = new Helper();
    helper.RedirectToWa(formData, locale, true);
  };

  const redirectTele = () => {
    const helper = new Helper();
    helper.RedirectToTele();
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

  return (
    <>
      <div className="content">
        <HeroBanner
          title={t("title-banner")}
          desc={t("title-slogan")}
          bookButton={t("book-button")}
        />
        <section className="service">
          <div className="container">
            <h3 className="title-section"> {t("our-service")} </h3>
            <div className="row g-3">
              <div className="col-4">
                <Link href="/doctor-home-visit" className="box-service">
                  <i className="icon-menu-doctor-home"></i>
                  <span className="title-service"> {t("service-menu.1")} </span>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/home-nursing" className="box-service">
                  <i className="icon-menu-home-nursing"></i>
                  <span className="title-service">{t("service-menu.2")}</span>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/remote-telemedicine" className="box-service">
                  <i className="icon-menu-remote-telemedicine"></i>
                  <span className="title-service">{t("service-menu.3")}</span>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/holistic-alternative" className="box-service">
                  <i className="icon-menu-holistic"></i>
                  <span className="title-service">{t("service-menu.4")}</span>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/inhome-therapy" className="box-service">
                  <i className="icon-menu-in-home-iv"></i>
                  <span className="title-service">{t("service-menu.5")}</span>
                </Link>
              </div>

              <div className="col-4">
                <Link href="/alternative-telemedicine" className="box-service">
                  <i className="icon-menu-alternative-telemedicine"></i>
                  <span className="title-service"> {t("service-menu.6")} </span>
                </Link>
              </div>
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
                    src="assets/img/Protect.png"
                    className="img-list"
                    alt=""
                  />
                  <span>{t("why-menu.1")}</span>
                </div>
              </div>
              <div className="list-why">
                <div className="items-why">
                  <img
                    src="assets/img/Diploma.png"
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
                    src="assets/img/Globe Network.png"
                    className="img-list"
                    alt=""
                  />
                  <span>{t("why-menu.4")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="doctor">
          <div className="container">
            <h3 className="title-section">{t("our-doctors")} </h3>
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-8">
                <div className="row g-3 g-md-5 justify-content-center">
                  <DoctorCard
                    image={`assets/img/doctor/dr-dewi-f.png`}
                    name="dr. Dewi Fransiska, Sp.B"
                    job={t("dr-surgeon")}
                    str="3121101422105406"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("mayapada"), t("eka")]}
                  />
                  <DoctorCard
                    image={`assets/img/doctor/dr-dwi-s.png`}
                    name="dr. Dwi Suryaning Ayu Aprilizia, Sp.A"
                    job={t("dr-pediatrician")}
                    str="3321201323154360"
                    titlelocation={t("practice-location")}
                    practiceLocation={["Aysha Islamic Hospital"]}
                  />
                  <DoctorCard
                    image={`assets/img/doctor/dr-ayu-a.png`}
                    name="dr. Ayu A. Istiana"
                    job="Aesthetic Doctor"
                    str="3321201323154360"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("cepat-sehat")]}
                  />
                  <DoctorCard
                    image={`assets/img/doctor/dr-ernita-r.png`}
                    name="dr. Ernita Rosyanti Dewi"
                    job="General Practitioner"
                    str="3121100220145544"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("cepat-sehat")]}
                  />
                  <DoctorCard
                    image={`assets/img/doctor/dr-irvan-r.png`}
                    name="dr. Irvan Rizki Fitri"
                    job="General Practitioner"
                    str="3121100220145544"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("cepat-sehat")]}
                  />
                  <DoctorCard
                    image={`assets/img/doctor/dr-melchisedek-a.png`}
                    name="dr. Melchisedek A.V.P Marbun"
                    job="General Practitioner"
                    str="3111100220155405"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("cepat-sehat")]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="doctor nurse">
          <div className="container">
            <h3 className="title-section"> {t("our-nurse")} </h3>
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-8">
                <div className="row g-3 g-md-4 justify-content-center">
                  <NurseCard
                    name="Siti Rahma Derlauw"
                    str="3101522234737239"
                    isnurse={true}
                    image="assets/img/doctor/nurse-siti.png"
                  />
                  <NurseCard
                    name="Loisa Lakamai"
                    str="1701721213519681"
                    isnurse={true}
                    image="assets/img/doctor/nurse-loisa.png"
                  />
                  <NurseCard
                    name="Syarah Azzarah"
                    str="2601521224246624"
                    isnurse={true}
                    image="assets/img/doctor/nurse-syarah.png"
                  />
                  <NurseCard
                    name="Andi Andriansyah S."
                    str="1201512214112821"
                    isnurse={true}
                    image="assets/img/doctor/nurse-andi.png"
                  />
                  <NurseCard
                    name="Marsiani Talo"
                    str=" 190172122-4444051"
                    isnurse={true}
                    image="assets/img/doctor/nurse-marsiani.png"
                  />
                  <NurseCard
                    name="Irfan Mustofa"
                    str="1401511224517960"
                    isnurse={true}
                    image="assets/img/doctor/nurse-irfan.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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
                            href={`/article?id=${item.article_id_v2}&locale=en`}
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
  return (
    <>
      <LayoutWrapper>
        <Suspense fallback={<div>Loading</div>}>
          <Home />
        </Suspense>
      </LayoutWrapper>
    </>
  );
}
