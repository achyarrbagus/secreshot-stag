"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import LayoutWrapper from "../components/layout-wrapper";
import Helper from "../../../../lib/helper/helper";
import Accordion from "react-bootstrap/Accordion";
import { useLocale, useTranslations } from "next-intl";

const HolisticAlternative = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const t = useTranslations("holistic-alternative");
  const locale = useLocale();

  const [book, setBook] = useState(t("form-book.title"));

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Akupuntur":
        setBook(t("form-book-title.1"));
        break;
      case "Acupunture":
        setBook(t("form-book-title.1"));
        break;
      case "Therapeutic Massage":
        setBook(t("form-book-title.2"));
        break;
      case "Pijat Terapi":
        setBook(t("form-book-title.2"));
        break;
      case "Energy Balancing Reiki":
        setBook(t("form-book-title.3"));
        break;
      case "Penyeimbang Energy Reiki":
        setBook(t("form-book-title.3"));
        break;
      case "Yoga Guidance & Sessions":
        setBook(t("form-book-title.4"));
        break;
      case "Bimbingan & Sesi Yoga":
        setBook(t("form-book-title.4"));
        break;
      case "Meditation Practices":
        setBook(t("form-book-title.5"));
        break;
      case "Praktik Meditasi":
        setBook(t("form-book-title.5"));
        break;
      case "6":
        setBook(t("form-book-title.6"));
        break;
      case "6":
        setBook(t("form-book-title.6"));
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
          style={{ backgroundImage: "url('/assets/img/bg-therapies.png')" }}
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

        <div className="faq pt-4">
          <div className="container">
            <div className="d-flex align-items-center">
              <img src="/assets/img/plus-vector.svg" width="30px" alt="" />
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                {t("sub-title")}
              </h3>
            </div>

            <Accordion className="accordion accordion-custom row">
              <Accordion.Item className="accordion-item col-md-6" eventKey="1">
                <Accordion.Header>
                  <i className="icon-menu-icon-therapis01 me-2 fs-32"></i>{" "}
                  {t("service-menu.1.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/holistic/img-sub-holistic01.webp"
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
                              {t("service-menu.1.list-benefit.1.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.1.list-benefit.2.title")}
                            </h6>
                            <span>
                              {t("service-menu.1.list-benefit.2.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.1.list-benefit.3.title")}
                            </h6>
                            <span>
                              {t("service-menu.1.list-benefit.3.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.1.list-benefit.4.title")}
                            </h6>
                            <span>
                              {t("service-menu.1.list-benefit.4.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.1.list-benefit.5.title")}
                            </h6>
                            <span>
                              {t("service-menu.1.list-benefit.5.desc")}
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
                            onClick={() =>
                              handleBook(t("service-menu.1.title"))
                            }
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
                  <i className="icon-menu-icon-therapis01 me-2 fs-32"></i>{" "}
                  {t("service-menu.2.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/holistic/img-sub-holistic02.webp"
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
                              {t("service-menu.2.list-benefit.1.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.2.list-benefit.2.title")}
                            </h6>
                            <span>
                              {t("service-menu.2.list-benefit.2.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.2.list-benefit.3.title")}
                            </h6>
                            <span>
                              {t("service-menu.2.list-benefit.3.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.2.list-benefit.4.title")}
                            </h6>
                            <span>
                              {t("service-menu.2.list-benefit.4.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.2.list-benefit.5.title")}
                            </h6>
                            <span>
                              {t("service-menu.2.list-benefit.5.desc")}
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
                            onClick={() =>
                              handleBook(t("service-menu.2.title"))
                            }
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
                  <i className="icon-menu-icon-therapis01 me-2 fs-32"></i>{" "}
                  {t("service-menu.3.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/holistic/img-sub-holistic03.webp"
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
                              {t("service-menu.3.list-benefit.1.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.3.list-benefit.2.title")}
                            </h6>
                            <span>
                              {t("service-menu.3.list-benefit.2.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.3.list-benefit.3.title")}
                            </h6>
                            <span>
                              {t("service-menu.3.list-benefit.3.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.3.list-benefit.4.title")}
                            </h6>
                            <span>
                              {t("service-menu.3.list-benefit.4.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.3.list-benefit.5.title")}
                            </h6>
                            <span>
                              {t("service-menu.3.list-benefit.5.desc")}
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
                            onClick={() =>
                              handleBook(t("service-menu.3.title"))
                            }
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
                  <i className="icon-menu-icon-therapis01 me-2 fs-32"></i>{" "}
                  {t("service-menu.4.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/holistic/img-sub-holistic04.webp"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.4.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.4.list-benefit.1.title")}
                            </h6>
                            <span>
                              {t("service-menu.4.list-benefit.1.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.4.list-benefit.2.title")}
                            </h6>
                            <span>
                              {t("service-menu.4.list-benefit.2.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.4.list-benefit.3.title")}
                            </h6>
                            <span>
                              {t("service-menu.4.list-benefit.3.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.4.list-benefit.4.title")}
                            </h6>
                            <span>
                              {t("service-menu.4.list-benefit.4.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.4.list-benefit.5.title")}
                            </h6>
                            <span>
                              {t("service-menu.4.list-benefit.5.desc")}
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>
                              {t("service-menu.4.start-from")}:{" "}
                              {t("service-menu.4.start-from-price")}
                            </b>
                          </div>
                          <div
                            onClick={() =>
                              handleBook(t("service-menu.4.title"))
                            }
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
              <Accordion.Item className="accordion-item col-md-6" eventKey="5">
                <Accordion.Header>
                  <i className="icon-menu-icon-therapis01 me-2 fs-32"></i>{" "}
                  {t("service-menu.5.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/holistic/img-sub-holistic05.webp"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.5.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.5.list-benefit.1.title")}
                            </h6>
                            <span>
                              {t("service-menu.5.list-benefit.1.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.5.list-benefit.2.title")}
                            </h6>
                            <span>
                              {t("service-menu.5.list-benefit.2.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.5.list-benefit.3.title")}
                            </h6>
                            <span>
                              {t("service-menu.5.list-benefit.3.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.5.list-benefit.4.title")}
                            </h6>
                            <span>
                              {t("service-menu.5.list-benefit.4.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.5.list-benefit.5.title")}
                            </h6>
                            <span>
                              {t("service-menu.5.list-benefit.5.desc")}
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>
                              {t("service-menu.5.start-from")}:{" "}
                              {t("service-menu.5.start-from-price")}
                            </b>
                          </div>
                          <div
                            onClick={() =>
                              handleBook(t("service-menu.5.title"))
                            }
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
              <Accordion.Item className="accordion-item col-md-6" eventKey="6">
                <Accordion.Header>
                  <i className="icon-menu-icon-therapis01 me-2 fs-32"></i>{" "}
                  {t("service-menu.6.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/holistic/img-sub-holistic06.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>{t("service-menu.6.desc")}</p>
                        <h6 className="title-line">
                          <span>{t("benefit")}</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.6.list-benefit.1.title")}
                            </h6>
                            <span>
                              {t("service-menu.6.list-benefit.1.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.6.list-benefit.2.title")}
                            </h6>
                            <span>
                              {t("service-menu.6.list-benefit.2.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.6.list-benefit.3.title")}
                            </h6>
                            <span>
                              {t("service-menu.6.list-benefit.3.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.6.list-benefit.4.title")}
                            </h6>
                            <span>
                              {t("service-menu.6.list-benefit.4.desc")}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              {t("service-menu.6.list-benefit.5.title")}
                            </h6>
                            <span>
                              {t("service-menu.6.list-benefit.5.desc")}
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>
                              {t("service-menu.6.start-from")}:{" "}
                              {t("service-menu.6.start-from-price")}
                            </b>
                          </div>
                          <div
                            onClick={() => handleBook("6")}
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
            </Accordion>
          </div>
        </div>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section">{book}</h3>
            <div>
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
                    type="text"
                    className="form-control"
                    id="address"
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
                    <option>Select Service</option>
                    <option value={t("service-menu.1.title")}>
                      {t("service-menu.1.title")}
                    </option>
                    <option value={t("service-menu.2.title")}>
                      {t("service-menu.2.title")}
                    </option>
                    <option value={t("service-menu.3.title")}>
                      {t("service-menu.3.title")}
                    </option>
                    <option value={t("service-menu.4.title")}>
                      {t("service-menu.4.title")}
                    </option>
                    <option value={t("service-menu.5.title")}>
                      {t("service-menu.5.title")}
                    </option>
                    <option value={t("service-menu.6.title")}>
                      {t("service-menu.6.title")}
                    </option>
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
        <HolisticAlternative />
      </Suspense>
    </LayoutWrapper>
  );
}
