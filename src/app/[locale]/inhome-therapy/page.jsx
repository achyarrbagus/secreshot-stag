"use client";
import { useState, Suspense, useEffect } from "react";
import LayoutWrapper from "../components/layout-wrapper";
import Accordion from "react-bootstrap/Accordion";
import Helper from "../../../../lib/helper/helper";
import { useLocale, useTranslations } from "next-intl";

const InHomeTherapy = () => {
  const [book, setBook] = useState("Book a visit at your place now");
  const t = useTranslations("inhome-therapy");
  const locale = useLocale();

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Bali Belly Infusion":
        setBook("Book bali belly infusion now");
        break;
      case "Super Bali Belly IV":
        setBook("Book super bali belly infusion now");
        break;
      case "Basic Immnue Booster":
        setBook("Book basic immune booster now");
        break;
      case "Super Immune Booster":
        setBook("Book super immune booster now");
        break;
      case "Hangover Infusion":
        setBook("Book hangover infusion now");
        break;
      case "Fever Infusion":
        setBook("Book fever infusion now");
        break;
      case "Gerd / Gastritis Infusion":
        setBook("Book gerd infusion now");
        break;
      case "Iron Infusion":
        setBook("Book iron infusion now");
        break;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      service: serviceSelect,
    }));
    window.location.href = "#book";
  };
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    service: "Select Service",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const redirectWa = () => {
    const helper = new Helper();
    helper.RedirectToWa(formData, locale, true);
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
          style={{ backgroundImage: "url('/assets/img/bg-homeiv.png')" }}
        >
          <div className="container">
            <div className="text">
              <h3>{t("title-banner")}</h3>
              <p>{t("title-slogan")}</p>
              <a href="#book" className="btn btn-warning fs-14">
                {t("book-button")}
              </a>
            </div>
          </div>
        </section>

        <section className="faq pt-4">
          <div className="container">
            <div className="d-flex align-items-center">
              <img src="assets/img/plus-vector.svg" width="30px" alt="" />
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                {t("sub-title")}
              </h3>
            </div>

            <Accordion className="accordion accordion-custom row">
              <Accordion.Item className="accordion-item col-md-6" eventKey="1">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv07 me-2 fs-32"></i>
                  {t("service-menu.1.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/homeiv/img-sub-homeiv01.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.1.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.1.list-benefit.1.title")}
                            </h6>
                            <span>
                              <ul className="ps-3">
                                <li>
                                  {t("service-menu.1.list-benefit.1.desc.1")}
                                </li>
                                <li>
                                  {t("service-menu.1.list-benefit.1.desc.2")}
                                </li>
                                <li>
                                  {t("service-menu.1.list-benefit.1.desc.3")}
                                </li>
                              </ul>
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.1.list-benefit.2.title")}
                            </h6>
                            <span>
                              <ul className="ps-3">
                                <li>
                                  {t("service-menu.1.list-benefit.2.desc.1")}
                                </li>
                                <li>
                                  {t("service-menu.1.list-benefit.2.desc.2")}
                                </li>
                                <li>
                                  {t("service-menu.1.list-benefit.2.desc.3")}
                                </li>
                                <li>
                                  {t("service-menu.1.list-benefit.2.desc.4")}
                                </li>
                                <li>
                                  {t("service-menu.1.list-benefit.2.desc.5")}
                                </li>
                                <li>
                                  {t("service-menu.1.list-benefit.2.desc.6")}
                                </li>
                                <li>
                                  {t("service-menu.1.list-benefit.2.desc.7")}
                                </li>
                                <li>
                                  {t("service-menu.1.list-benefit.2.desc.8")}
                                </li>
                                <li>
                                  {t("service-menu.1.list-benefit.2.desc.9")}
                                </li>
                              </ul>
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>
                              {t("service-menu.1.start-from")}:{" "}
                              {t("service-menu.1.start-from-price")}
                            </b>
                          </div>
                          <div
                            onClick={() => handleBook("Doctor Home Visit")}
                            id="doctor-visit"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {t("book-button")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="2">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv07 me-2 fs-32"></i>
                  {t("service-menu.2.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/homeiv/img-sub-homeiv02.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.2.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.2.list-benefit.1.title")}
                            </h6>
                            <span>
                              <ul className="ps-3">
                                <li>
                                  {t("service-menu.2.list-benefit.1.desc.1")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.1.desc.2")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.1.desc.3")}
                                </li>
                              </ul>
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.2.list-benefit.2.title")}
                            </h6>
                            <span>
                              <ul className="ps-3">
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.1")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.2")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.3")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.4")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.5")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.6")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.7")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.8")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.9")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.10")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.11")}
                                </li>
                                <li>
                                  {t("service-menu.2.list-benefit.2.desc.12")}
                                </li>
                              </ul>
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>
                              {t("service-menu.2.start-from")}:{" "}
                              {t("service-menu.2.start-from-price")}
                            </b>
                          </div>
                          <div
                            onClick={() => handleBook("Doctor Home Visit")}
                            id="doctor-visit"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {t("book-button")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="3">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv08 me-2 fs-32"></i>
                  {t("service-menu.3.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/homeiv/img-sub-homeiv03.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.3.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.3.list-benefit.1.title")}
                            </h6>
                            <span>
                              <ul className="ps-3">
                                <li>
                                  {t("service-menu.3.list-benefit.1.desc.1")}
                                </li>
                                <li>
                                  {t("service-menu.3.list-benefit.1.desc.2")}
                                </li>
                                <li>
                                  {t("service-menu.3.list-benefit.1.desc.3")}
                                </li>
                                <li>
                                  {t("service-menu.3.list-benefit.1.desc.4")}
                                </li>
                                <li>
                                  {t("service-menu.3.list-benefit.1.desc.5")}
                                </li>
                                <li>
                                  {t("service-menu.3.list-benefit.1.desc.6")}
                                </li>
                                <li>
                                  {t("service-menu.3.list-benefit.1.desc.6")}
                                </li>
                                <li>
                                  {t("service-menu.3.list-benefit.1.desc.7")}
                                </li>
                                <li>
                                  {t("service-menu.3.list-benefit.1.desc.8")}
                                </li>
                                <li>
                                  {t("service-menu.3.list-benefit.1.desc.9")}
                                </li>
                              </ul>
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>
                              {t("service-menu.3.start-from")}:{" "}
                              {t("service-menu.3.start-from-price")}
                            </b>
                          </div>
                          <div
                            onClick={() => handleBook("Doctor Home Visit")}
                            id="doctor-visit"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {t("book-button")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="4">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv08 me-2 fs-32"></i>
                  {t("service-menu.4.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/homeiv/img-sub-homeiv04.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.4.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <h6 className="mb-1">
                          {t("service-menu.4.list-benefit.1.title")}
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>
                                {t("service-menu.4.list-benefit.1.desc.0")}
                              </li>
                              <li>
                                {t("service-menu.4.list-benefit.1.desc.1")}
                              </li>
                              <li>
                                {t("service-menu.4.list-benefit.1.desc.2")}
                              </li>
                              <li>
                                {t("service-menu.4.list-benefit.1.desc.3")}
                              </li>
                              <li>
                                {t("service-menu.4.list-benefit.1.desc.4")}
                              </li>
                              <li>
                                {t("service-menu.4.list-benefit.1.desc.5")}
                              </li>
                              <li>
                                {t("service-menu.4.list-benefit.1.desc.6")}
                              </li>
                              <li>
                                {t("service-menu.4.list-benefit.1.desc.7")}
                              </li>
                              <li>
                                {t("service-menu.4.list-benefit.1.desc.8")}
                              </li>
                              <li>
                                {t("service-menu.4.list-benefit.1.desc.9")}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            {t("service-menu.4.start-from")}:{" "}
                            {t("service-menu.4.start-from-price")}
                          </div>
                          <button
                            onClick={() => handleBook("Super Bali Belly IV")}
                            id="super-bali"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {" "}
                            {t("book-button")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="5">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv08 me-2 fs-32"></i>
                  {t("service-menu.5.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/homeiv/img-sub-homeiv05.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.5.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <h6 className="mb-1">
                          {t("service-menu.5.list-benefit.1.title")}
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.1")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.2")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.3")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.4")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.5")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.6")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.7")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.8")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.9")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.10")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.11")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.12")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.13")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.14")}
                              </li>
                              <li>
                                {t("service-menu.5.list-benefit.1.desc.15")}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            {t("service-menu.5.start-from")}:{" "}
                            {t("service-menu.5.start-from-price")}
                          </div>
                          <button
                            onClick={() => handleBook("Super Bali Belly IV")}
                            id="super-bali"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {" "}
                            {t("book-button")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="6">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv09 me-2 fs-32"></i>{" "}
                  {t("service-menu.6.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/homeiv/img-sub-homeiv06.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.6.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <h6 className="mb-1">
                          {t("service-menu.6.list-benefit.1.title")}
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>
                                {t("service-menu.6.list-benefit.1.desc.0")}
                              </li>
                              <li>
                                {t("service-menu.6.list-benefit.1.desc.1")}
                              </li>
                              <li>
                                {t("service-menu.6.list-benefit.1.desc.2")}
                              </li>
                              <li>
                                {t("service-menu.6.list-benefit.1.desc.3")}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            {t("service-menu.6.start-from")}:{" "}
                            {t("service-menu.6.start-from-price")}
                          </div>
                          <button
                            onClick={() => handleBook("Super Bali Belly IV")}
                            id="super-bali"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {" "}
                            {t("book-button")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="7">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv10 me-2 fs-32"></i>
                  {t("service-menu.7.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/homeiv/img-sub-homeiv05.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.7.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <h6 className="mb-1">
                          {t("service-menu.7.list-benefit.1.title")}
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>
                                {t("service-menu.7.list-benefit.1.desc.0")}
                              </li>
                              <li>
                                {t("service-menu.7.list-benefit.1.desc.1")}
                              </li>
                              <li>
                                {t("service-menu.7.list-benefit.1.desc.2")}
                              </li>
                              <li>
                                {t("service-menu.7.list-benefit.1.desc.3")}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            {t("service-menu.7.start-from")}:{" "}
                            {t("service-menu.7.start-from-price")}
                          </div>
                          <button
                            onClick={() => handleBook("Super Bali Belly IV")}
                            id="super-bali"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {t("book-button")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="8">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv11 me-2 fs-32"></i>
                  {t("service-menu.8.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/homeiv/img-sub-homeiv08.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.8.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <h6 className="mb-1">
                          {t("service-menu.8.list-benefit.1.title")}
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>
                                {t("service-menu.8.list-benefit.1.desc.0")}
                              </li>
                              <li>
                                {t("service-menu.8.list-benefit.1.desc.1")}
                              </li>
                              <li>
                                {t("service-menu.8.list-benefit.1.desc.2")}
                              </li>
                              <li>
                                {t("service-menu.8.list-benefit.1.desc.3")}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            {t("service-menu.8.start-from")}:{" "}
                            {t("service-menu.8.start-from-price")}
                          </div>
                          <button
                            onClick={() => handleBook("Super Bali Belly IV")}
                            id="super-bali"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {t("book-button")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="9">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv11 me-2 fs-32"></i>
                  {t("service-menu.9.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/homeiv/img-sub-homeiv09.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.9.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <h6 className="mb-1">
                          {t("service-menu.9.list-benefit.1.title")}
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>
                                {t("service-menu.9.list-benefit.1.desc.0")}
                              </li>
                              <li>
                                {t("service-menu.9.list-benefit.1.desc.1")}
                              </li>
                              <li>
                                {t("service-menu.9.list-benefit.1.desc.2")}
                              </li>
                              <li>
                                {t("service-menu.9.list-benefit.1.desc.3")}
                              </li>
                              <li>
                                {t("service-menu.9.list-benefit.1.desc.4")}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            {t("service-menu.9.start-from")}:{" "}
                            {t("service-menu.9.start-from-price")}
                          </div>
                          <button
                            onClick={() => handleBook("Super Bali Belly IV")}
                            id="super-bali"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {t("book-button")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section">{book}</h3>
            <div>
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
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Your Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Service Name</label>
                  <select
                    id="service"
                    className="form-select form-control"
                    aria-label="Default select example"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Select Service</option>
                    <option value="Bali Belly Infusion">
                      Bali Belly Infusion
                    </option>
                    <option value="Super Bali Belly IV">
                      Super Bali Belly IV
                    </option>
                    <option value="Basic Immune Booster">
                      Basic Immune Booster
                    </option>
                    <option value="Standard Immune Booster">
                      Standard Immune Booster
                    </option>
                    <option value="Super Immune Booster">
                      Super Immune Booster
                    </option>
                    <option value="Hangover Infusion">Hangover Infusion</option>
                    <option value="Fever Infusion">Fever Infusion</option>
                    <option value="Gerd / Gastritis Infusion">
                      Gerd / Gastritis Infusion
                    </option>
                    <option value="Iron Infusion">Iron Infusion</option>
                  </select>
                </div>
              </div>
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
          </div>
        </section>
      </div>
    </>
  );
};

export default function App() {
  return (
    <LayoutWrapper>
      <Suspense fallback={<div>Loading</div>}>
        <InHomeTherapy />
      </Suspense>
    </LayoutWrapper>
  );
}
