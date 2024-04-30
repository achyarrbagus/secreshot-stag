"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import LayoutWrapper from "../components/layout-wrapper";
import Helper from "../../../../lib/helper/helper";
import Accordion from "react-bootstrap/Accordion";
import { useLocale, useTranslations } from "next-intl";

const RemoteTelemedic = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const t = useTranslations("remote-telemedicine");

  const [book, setBook] = useState("Book a visit at your place now");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    service: "Select Service",
  });

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "General Practitioner Online Consultation":
        window.location.replace(
          "https://www.sehatcepat.com/payments/dr-ayu/?camp=drumum"
        );
        // setBook("Book for GP Consultation now");
        break;
      case "Medical Doctor Online Consultation":
        window.location.replace(
          "https://www.sehatcepat.com/payments/dr-lia/?camp=dranak"
        );
        // setBook("Book for MD Consultation now");
        break;
      case "Online Medical Prescription":
        setBook("Request for online medical prescription now");
        break;
      case "Online Sick Leave Letter":
        window.location.replace("https://www.sickleave.cepatsehat.com/");
        setBook("Request for online sick leave letter now");
        break;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      service: serviceSelect,
    }));
    window.location.href = "#book";
  };
  const lang = useSelector((state) => state.lang.value);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const redirectWa = () => {
    const helper = new Helper();
    helper.RedirectToWa(formData, lang, true);
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
            backgroundImage: "url('/assets/img/bg-remote.png')",
          }}
        >
          <div className="container">
            <div className="text">
              {/* <h3>Home Nursing and Wound Care</h3>
              <p>
                Receive top-notch nursing and wound care services in the comfort
                of your villa or hotel, from recovery support to chronic
                condition management.
              </p>
              <a href="#book" className="btn btn-warning fs-14">
                Book Now
              </a> */}
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
              <img src="/assets/img/plus-vector.svg" width="30px" alt="" />
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                {t("sub-title")}
              </h3>
            </div>
            <Accordion className="accordion accordion-custom row">
              <Accordion.Item className="accordion-item col-md-6" eventKey="1">
                <Accordion.Header>
                  <i className="icon-menu-icon-remotetelemedicine01 me-2 fs-32"></i>{" "}
                  {t("service-menu.1.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/remote-telemedicine/img-sub-remotetelemedicine01.png"
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
                  <i className="icon-menu-icon-remotetelemedicine02 me-2 fs-32"></i>{" "}
                  {t("service-menu.2.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/remote-telemedicine/img-sub-remotetelemedicine02.png"
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
                              handleBook("Monitoring and Prevention")
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
                  <i className="icon-menu-icon-remotetelemedicine03 me-2 fs-32"></i>{" "}
                  {t("service-menu.3.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/remote-telemedicine/img-sub-remotetelemedicine03.png"
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
                              handleBook("Monitoring and Prevention")
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
                  <i className="icon-menu-icon-remotetelemedicine04 me-2 fs-32"></i>{" "}
                  {t("service-menu.4.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/remote-telemedicine/img-sub-remotetelemedicine04.png"
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
                              handleBook("Monitoring and Prevention")
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
                    <option value="Wound Care">Wound Care</option>
                    <option value="Monitoring and Prevention">
                      Monitoring and Prevention
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
        <RemoteTelemedic />
      </Suspense>
    </LayoutWrapper>
  );
}
