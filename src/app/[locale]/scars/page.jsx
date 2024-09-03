"use client";

import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LayoutWrapper from "../components/layout-wrapper";
import { useLocale, useTranslations } from "next-intl";
import Helper from "../../../../lib/helper/helper";

const Index = () => {
  const locale = useLocale();
  const [formData, setFormData] = React.useState({
    name: "",
    address: "",
    service: "Select Service",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const redirectWa = (e) => {
    e.preventDefault();
    const helper = new Helper();
    helper.RedirectToWa(formData, locale, false);
  };

  const redirectTele = () => {
    const helper = new Helper();
    helper.RedirectToTele(formData);
  };
  // const isMobile = useSelector((state) => state.isMobile.value);

  return (
    <>
      <div className="content">
        <section
          className="banner-pages"
          style={{
            backgroundImage: "url('/assets/img/scars/banner-scars.png')",
          }}
        >
          <div className="container">
            <div className="text">
              <p>
                Are you in search of groundbreaking solutions to address{" "}
                <b>Scars</b> and improve your skin`s appearance?
              </p>
              <a href="#book" className="btn btn-warning fs-14">
                {" "}
                Book Now{" "}
              </a>
            </div>
          </div>
        </section>

        <section className="desc">
          <div className="container">
            <h3>Unlocking the Future of Scar Treatment</h3>
            <p>
              Scars can be a result of various injuries, surgeries, or skin
              conditions, often leaving individuals self-conscious about their
              appearance.
            </p>
          </div>
        </section>

        <section className="detail-pages">
          <div className="container">
            <div className="d-flex align-items-center mb-4">
              <img src="/assets/img/icon_lamp.svg" className="me-3" alt="" />
              <h6 className="title-line">
                <span>How it works?</span>
              </h6>
            </div>
            <div className="row align-items-center gy-4">
              <div className="col-md-6">
                <img
                  src="/assets/img/scars/scars01.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <p className="text-center fs-20 text-dark fw-semibold mb-0 py-4">
                  Discover how the power of secretome and stem cells is
                  transforming scar treatment and offering hope for smoother,
                  healthier skin.
                </p>
              </div>
            </div>
            <div className="row align-items-stretch align-items-center g-0 mt-4">
              <div className="col-md-6">
                <img
                  src="/assets/img/scars/scars02.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6 order-last order-md-first">
                <div className="rate">
                  <div className="file">
                    <img src="/assets/img/icon_pdf.svg" alt="" />
                    <div className="name-file">
                      <h5>Stem Cells for Scars Doc.PDF</h5>
                      {/* {isMobile ? (
                        <a
                          className="me-4"
                          href={"/assets/pdf/scars.pdf"}
                          download
                        >
                          <i className="mdi mdi-eye me-1"></i> View
                        </a>
                      ) : (
                        <a
                          href={"/viewer-pdf?pdf=scars.pdf"}
                          target="_blank"
                          className="me-4"
                        >
                          <i className="mdi mdi-eye me-1"></i> View
                        </a>
                      )} */}
                      <a
                        href={`${locale}/viewer-pdf?pdf=scars.pdf`}
                        target="_blank"
                        className="me-4"
                      >
                        <i className="mdi mdi-eye me-1"></i> View
                      </a>

                      <a className="" href={"/assets/pdf/scars.pdf"} download>
                        <i className="mdi mdi-download me-1"></i> Download
                      </a>
                    </div>
                  </div>
                  <div className="price">
                    Start from: <b> Rp 1.500.000 </b> <small>/Treatment</small>
                  </div>
                  <div className="desc">
                    <p>Treatment Procedure :</p>
                    <ul>
                      <li>Need 4 times treatment in a month</li>
                    </ul>
                  </div>
                  <div className="desc">
                    <p>Benefit :</p>
                    <ul>
                      <li>Fade scars</li>
                      <li>Improves collagen</li>
                      <li>Moisturizes skin</li>
                      <li>Skin looks younger and brighter</li>
                    </ul>
                  </div>
                  <div className="w-100 d-flex justify-content-center">
                    <a href="#book" className="btn btn-warning mt-4">
                      {" "}
                      Book Now{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section"> Book Now </h3>
            <form action="#">
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
                  <label className="form-label">Service Name</label>
                  <select
                    id="service"
                    onChange={handleChange}
                    className="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option>Select Service</option>
                    <option value="Acne">Acne</option>
                    <option value="Hair Loss">Hair Loss</option>
                    <option value="Anti Aging">Anti Aging</option>
                    <option selected value="Scars">
                      Scars
                    </option>
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
        <Index />
      </LayoutWrapper>
    </>
  );
}
