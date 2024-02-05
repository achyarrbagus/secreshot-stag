"use client";
import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useSelector } from "react-redux";
import LayoutWrapper from "../components/layout-wrapper";
import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Helper from "../../../../lib/helper/helper";

const Index = () => {
  const locales = useLocale();
  const t = useTranslations("covid-19");
  // const isMobile = useSelector((state) => state.isMobile.value);

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
    helper.RedirectToWa(formData, locales, true);
  };

  const redirectTele = () => {
    const helper = new Helper();
    helper.RedirectToTele(formData);
  };

  return (
    <>
      <div className="content">
        <section
          className="banner-pages"
          style={{
            backgroundImage: "url('/assets/img/covid/banner-covid.png')",
          }}
        >
          <div className="container">
            <div className="text">
              {/* <p>Ready to Beat</p>
              <h3>COVID-19</h3>
              <p>at Its Own Game?</p> */}
              <p>{t("title-slogan")}</p>
              <a href="#book" className="btn btn-warning fs-14">
                {t("book-button")}
              </a>
            </div>
          </div>
        </section>

        <section className="desc">
          <div className="container">
            <h3>{t("revealing")}</h3>
            <p>{t("revealing-slogan")}</p>
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
                  src="/assets/img/covid/covid01.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <p className="text-center fs-20 text-dark fw-semibold mb-0 py-4">
                  {t("discover")}
                </p>
              </div>
            </div>
            <div className="row align-items-stretch align-items-center g-0 mt-4">
              <div className="col-md-6">
                <img
                  src="/assets/img/covid/covid02.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6 order-last order-md-first">
                <div className="rate">
                  <div className="file">
                    <img src="/assets/img/icon_pdf.svg" alt="" />
                    <div className="name-file">
                      <h5>Stem Cells for Covid-19 Doc.PDF</h5>
                      {/* {isMobile ? (
                        <a
                          className="me-4"
                          href={"/assets/pdf/covid-19.pdf"}
                          download
                        >
                          <i className="mdi mdi-eye me-1"></i> View
                        </a>
                      ) : (
                        <a
                          href={"/viewer-pdf?pdf=covid-19.pdf"}
                          target="_blank"
                          className="me-4"
                        >
                          <i className="mdi mdi-eye me-1"></i> View
                        </a>
                      )} */}
                      <a
                        href={`/${locales}/viewer-pdf?pdf=covid-19.pdf`}
                        target="_blank"
                        className="me-4"
                      >
                        <i className="mdi mdi-eye me-1"></i> View
                      </a>

                      <a
                        className=""
                        href={"/assets/pdf/covid-19.pdf"}
                        download
                      >
                        <i className="mdi mdi-download me-1"></i> Download
                      </a>
                    </div>
                  </div>
                  <div className="price">
                    {t("start-from")}: <b> Rp 1.500.000 </b>{" "}
                    <small>/{t("treatment")}</small>
                  </div>
                  <div className="desc">
                    <p>{t("treatment-procedure")} :</p>
                    <ul>
                      <li>{t("treatment-procedure-slogan")}</li>
                    </ul>
                  </div>
                  <div className="desc">
                    <p>{t("benefit")} :</p>
                    <ul>
                      <li>{t("benefit-list.1")}</li>
                      <li>{t("benefit-list.2")}</li>
                      <li>{t("benefit-list.3")}</li>
                    </ul>
                  </div>
                  <div className="w-100 d-flex justify-content-center">
                    <a href="#book" className="btn btn-warning mt-4">
                      {" "}
                      {t("book-button")}
                    </a>
                  </div>
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
        <Index />
      </LayoutWrapper>
    </>
  );
}
