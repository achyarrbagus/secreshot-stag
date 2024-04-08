"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeId from "./page-id";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Suspense } from "react";
import { Autoplay } from "swiper/modules";
import useSWR from "swr";
import CardArticleSlide from "./components/card-article-slide";
import "../../public/assets/css/style.css";
import "../../public/assets/fontello/css/csehat.css";
import LayoutWrapper from "./components/layout-wrapper";
import DoctorCard from "./components/card-doctor";
import NUrseCard from "./components/card-nurse";

import Helper from "../../lib/helper/helper";
import axios from "axios";
import HeroBanner from "./components/hero-banner";
import NurseCard from "./components/card-nurse";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const Home = () => {
  const lang = useSelector((state) => state.lang.value);
  const [locale, setLocale] = useState("en");
  const { data: articles, error: articlesError } = useSWR(
    `https://api.cepatsehat.com/api/v2/articles?locale=${locale}`,
    fetcher
  );

  const redirectWa = () => {
    const helper = new Helper();
    helper.RedirectToWa(formData, lang, true);
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

  switch (lang) {
    case "ID":
      return (
        <>
          <HomeId />
        </>
      );
    default:
      return (
        <>
          <div className="content">
            <HeroBanner
              title={
                "Your Trusted Partner in Personalized Home Healthcare in Bali"
              }
              desc={
                "We deliver personalized and compassionate healthcare to your home through our experienced professionals"
              }
            />
            <section className="service">
              <div className="container">
                <h3 className="title-section"> Our Services </h3>
                <div className="row g-3">
                  <div className="col-4">
                    <Link href="/doctor-home-visit" className="box-service">
                      <i className="icon-menu-doctor-home"></i>
                      <span className="title-service"> Doctor Home Visit </span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link href="/home-nursing" className="box-service">
                      <i className="icon-menu-home-nursing"></i>
                      <span className="title-service">
                        Home Nursing and Wound Care
                      </span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link href="/remote-telemedicine" className="box-service">
                      <i className="icon-menu-remote-telemedicine"></i>
                      <span className="title-service">Remote Telemedicine</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link href="/holistic-alternative" className="box-service">
                      <i className="icon-menu-holistic"></i>
                      <span className="title-service">
                        Holistic Alternative Therapies
                      </span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link href="/inhome-therapy" className="box-service">
                      <i className="icon-menu-in-home-iv"></i>
                      <span className="title-service">
                        In-Home IV Therapy & More
                      </span>
                    </Link>
                  </div>

                  <div className="col-4">
                    <Link
                      href="/alternative-telemedicine"
                      className="box-service"
                    >
                      <i className="icon-menu-alternative-telemedicine"></i>
                      <span className="title-service">
                        {" "}
                        Alternative Medicine{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="why">
              <div className="container">
                <div className="text">
                  <h3>Why Choose Us?</h3>
                  <div className="list-why">
                    <div className="items-why">
                      <span>More than 5000 patients well treated in 2023</span>
                    </div>
                  </div>
                  <div className="list-why">
                    <div className="items-why">
                      <img
                        src="assets/img/Protect.png"
                        className="img-list"
                        alt=""
                      />
                      <span>Easy, safe & comfortable service</span>
                    </div>
                  </div>
                  <div className="list-why">
                    <div className="items-why">
                      <img
                        src="assets/img/Diploma.png"
                        className="img-list"
                        alt=""
                      />
                      <span>
                        Supported by certified & trained health workers
                      </span>
                    </div>
                  </div>
                  <div className="list-why">
                    <div className="items-why">
                      <img
                        src="assets/img/Last 24 Hours.png"
                        className="img-list"
                        alt=""
                      />
                      <span>24 hours service</span>
                    </div>
                  </div>
                  <div className="list-why">
                    <div className="items-why">
                      <img
                        src="assets/img/Globe Network.png"
                        className="img-list"
                        alt=""
                      />
                      <span>Wide coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="doctor">
              <div className="container">
                <h3 className="title-section"> Our Doctors </h3>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-lg-8">
                    <div className="row g-3 g-md-5 justify-content-center">
                      <DoctorCard
                        image={`assets/img/doctor/dr-dewi-f.png`}
                        name="dr. Dewi Fransiska, Sp.B"
                        job="Surgeon"
                        str="3121101422105406"
                        practiceLocation={["Mayapada Hospital", "Eka Hospital"]}
                      />
                      <DoctorCard
                        image={`assets/img/doctor/dr-dwi-s.png`}
                        name="dr. Dwi Suryaning Ayu Aprilizia, Sp.A"
                        job="Pediatrician"
                        str="3321201323154360"
                        practiceLocation={["Aysha Islamic Hospital"]}
                      />
                      <DoctorCard
                        image={`assets/img/doctor/dr-ayu-a.png`}
                        name="dr. Ayu A. Istiana"
                        job="Aesthetic Doctor"
                        str="3121100220145699"
                        practiceLocation={["Cepat Sehat Clinic"]}
                      />
                      <DoctorCard
                        image={`assets/img/doctor/dr-ernita-r.png`}
                        name="dr. Ernita Rosyanti Dewi"
                        job="General Practitioner"
                        str="3121100220145544"
                        practiceLocation={["Cepat Sehat Clinic"]}
                      />
                      <DoctorCard
                        image={`assets/img/doctor/dr-irvan-r.png`}
                        name="dr. Irvan Rizki Fitri"
                        job="General Practitioner"
                        str="3111100321119174"
                        practiceLocation={["Cepat Sehat Clinic"]}
                      />
                      <DoctorCard
                        image={`assets/img/doctor/dr-melchisedek-a.png`}
                        name="dr. Melchisedek A.V.P Marbun"
                        job="General Practitioner"
                        str="3111100220155405"
                        practiceLocation={["Cepat Sehat Clinic"]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="doctor nurse">
              <div className="container">
                <h3 className="title-section"> Our Nurses </h3>
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
                <h3 className="title-section text-white"> Article </h3>
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
                                <CardArticleSlide
                                  item={item}
                                  path={item.image}
                                />
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
                <h3 className="title-section">
                  Book a visit at your place now
                </h3>
                <form>
                  <div className="row mb-3 g-3">
                    <div className="col-md-4">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Address</label>
                      <input
                        id="address"
                        type="text"
                        className="form-control"
                        placeholder="Your Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Service</label>
                      <select
                        id="service"
                        className="form-select form-control"
                        aria-label="Default select example"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="Select Service" disabled>
                          Select Service
                        </option>
                        <option value="Doctor Home Visit">
                          Doctor Home Visit
                        </option>
                        <option value="Home Nursing and Wound Care">
                          Home Nursing and Wound Care
                        </option>
                        <option value="Remote Telemedicine">
                          Remote Telemedicine
                        </option>
                        <option value="Holistic Alternative Therapies">
                          Holistic Alternative Therapies
                        </option>
                        <option value="In-Home IV Therapy & more">
                          In-Home IV Therapy & more
                        </option>
                        <option value="Alternative Medicine">
                          Alternative Medicine
                        </option>
                      </select>
                    </div>
                  </div>
                </form>
                <div className="row g-3 justify-content-center">
                  <div className="col-6 col-md-3">
                    <button
                      onClick={redirectWa}
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
                      <i className="fa-brands fa-telegram fs-18 me-2"></i>{" "}
                      Telegram
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      );
  }
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
