"use client";

import InHomeDiagnosticId from "./page-id";
import { useSelector } from "react-redux";
import { useState } from "react";
import Helper from "../../../lib/helper/helper";
import { Suspense } from "react";
import LayoutWrapper from "../components/layout-wrapper";
import Accordion from "react-bootstrap/Accordion";

const InHomeDiagnostic = () => {
  const [book, setBook] = useState("Book a visit at your place now");

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Teeth Whitening":
        setBook("Book teeth whitening now");
        break;
      case "Secretome and Stem Cells Therapy":
        setBook("Book stem cell therapy now");
        break;
      case "Ozone Therapy":
        setBook("Book ozone therapy now");
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
    helper.RedirectToWa(formData, lang, true);
  };
  const redirectTele = () => {
    const helper = new Helper();
    helper.RedirectToTele(formData);
  };

  const lang = useSelector((state) => state.lang.value);
  switch (lang) {
    case "ID":
      return (
        <>
          <InHomeDiagnosticId />
        </>
      );
    default:
      return (
        <>
          <div className="content">
            <section
              className="banner-pages"
              style={{
                backgroundImage: "url('assets/img/bg-home-diagnostic.png')",
              }}
            >
              <div className="container">
                <div className="text">
                  <h3>Alternative Medicine</h3>
                  <p>
                    Teeth whitening for enhanced appearance, secretome therapy
                    for regenerative treatments, and ozone therapy for boost
                    immune system.
                  </p>
                  <a href="#book" className="btn btn-warning fs-14">
                    {" "}
                    Book Now{" "}
                  </a>
                </div>
              </div>
            </section>

            <section className="faq pt-4">
              <div className="container">
                <div className="d-flex align-items-center">
                  <img src="assets/img/plus-vector.svg" width="30px" alt="" />
                  <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                    Our Alternative Medicine services consist of:
                  </h3>
                </div>
                <div
                  className="accordion accordion-custom row"
                  id="accordionExample"
                >
                  <Accordion className="accordion accordion-custom row">
                    <Accordion.Item
                      className="accordion-item col-md-6"
                      eventKey="1"
                    >
                      <Accordion.Header>
                        <i className="icon-menu-icon-alternative01 me-2 fs-32"></i>{" "}
                        Teeth Whitening
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="list-data-faq">
                          <div className="row gy-3">
                            <div className="col-12">
                              <img
                                src="assets/img/alternative/img-sub-alternative01.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                Enhance the brightness of your smile with our
                                professional teeth whitening service.
                              </p>
                              <h6 className="title-line">
                                <span>Benefit</span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Improved Aesthetics</h6>
                                  <span>
                                    Enhances the appearance of teeth by reducing
                                    stains and discoloration, resulting in a
                                    brighter and whiter smile.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Boosted Confidence</h6>
                                  <span>
                                    Whiter teeth often contribute to increased
                                    self-confidence and a positive self-image.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Youthful Appearance</h6>
                                  <span>
                                    A whiter smile is associated with a more
                                    youthful look, as tooth discoloration can be
                                    a sign of aging.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Enhanced Oral Hygiene
                                  </h6>
                                  <span>
                                    The process of teeth whitening often
                                    involves professional cleaning, contributing
                                    to improved overall oral hygiene.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Positive Social Impression
                                  </h6>
                                  <span>
                                    A bright smile can leave a positive
                                    impression in social and professional
                                    situations, fostering a sense of
                                    attractiveness and friendliness.
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp889.000
                                </div>
                                <button
                                  onClick={() => handleBook("Teeth Whitening")}
                                  id="teeth"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      className="accordion-item col-md-6"
                      eventKey="2"
                    >
                      <Accordion.Header>
                        <i className="icon-menu-icon-alternative02 me-2 fs-32"></i>{" "}
                        Secretome and Stem Cells Therapy
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="list-data-faq">
                          <div className="row gy-3">
                            <div className="col-12">
                              <img
                                src="assets/img/alternative/img-sub-alternative02.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                Experience the rejuvenating benefits of
                                Secretome, a cutting-edge therapy that harnesses
                                the power of regenerative proteins.
                              </p>
                              <h6 className="title-line">
                                <span>Benefit</span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Tissue Regeneration</h6>
                                  <span>
                                    Promotes repair and regeneration of damaged
                                    tissues.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Anti-Inflammatory</h6>
                                  <span>
                                    Exhibits anti-inflammatory properties,
                                    aiding in immune modulation.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Accelerated Healing</h6>
                                  <span>
                                    Speeds up the natural healing process by
                                    promoting cell growth and tissue remodeling.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Degenerative Condition Treatment
                                  </h6>
                                  <span>
                                    Holds potential for treating conditions like
                                    osteoarthritis and neurodegenerative
                                    diseases.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Minimized Immune Response
                                  </h6>
                                  <span>
                                    Reduces the risk of immune rejection, making
                                    them suitable for transplantation and
                                    regenerative therapies.
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp2.499.000
                                </div>
                                <div className="d-flex ms-auto gap-1">
                                  {/* <div
                                    onClick={() => (window.location.href = "https://www.sehatcepat.com/payments/dr-ayu/")}
                                    id="general"
                                    className="btn btn-warning"
                                  >
                                     <i class="fa-solid fa-user-doctor"></i>
                                  </div> */}

                                  <button
                                    onClick={() =>
                                      handleBook(
                                        "Secretome and Stem Cells Therapy"
                                      )
                                    }
                                    id="secretome"
                                    className="btn btn-warning fs-14 ms-auto"
                                  >
                                    Book Now{" "}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      className="accordion-item col-md-6"
                      eventKey="3"
                    >
                      <Accordion.Header>
                        <i className="icon-menu-icon-alternative03 me-2 fs-32"></i>{" "}
                        Ozone Therapy
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="list-data-faq">
                          <div className="row gy-3">
                            <div className="col-12">
                              <img
                                src="assets/img/alternative/img-sub-alternative03.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                Immerse yourself in the healing properties of
                                ozone therapy. Discover a holistic approach to
                                wellness with ozone therapy.
                              </p>
                              <h6 className="title-line">
                                <span>Benefit</span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Improved Oxygenation</h6>
                                  <span>
                                    May enhance oxygen delivery to tissues,
                                    potentially boosting energy levels.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Enhanced Immune System
                                  </h6>
                                  <span>
                                    Claimed to stimulate the immune system for
                                    increased resistance to infections.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Anti-Inflammatory Effects
                                  </h6>
                                  <span>
                                    Proposed to have anti-inflammatory
                                    properties.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Detoxification Support
                                  </h6>
                                  <span>
                                    Advocated for its potential role in aiding
                                    detoxification.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Antimicrobial Properties
                                  </h6>
                                  <span>
                                    Suggested to have antimicrobial effects that
                                    may help combat infections.
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp3.125.000
                                </div>
                                <a
                                  onClick={() => handleBook("Ozone Therapy")}
                                  id="ozone"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </section>

            <section className="book" id="book">
              <div className="container">
                <h3 className="title-section"> {book} </h3>
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
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Secretome and Stem Cells Therapy">
                          Secretome and Stem Cells Therapy
                        </option>
                        <option value="Ozone Therapy">Ozone Therapy</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3 justify-content-center">
                    <div className="col-6 col-md-3">
                      <button
                        onClick={redirectWa}
                        className="btn btn-whatsapp w-100"
                      >
                        <i className="mdi mdi-whatsapp fs-18 me-2"></i>
                        Whatsapp
                      </button>
                    </div>
                    <div className="col-6 col-md-3">
                      <button
                        onClick={redirectTele}
                        className="btn btn-telegram w-100"
                      >
                        <i className="fa-brands fa-telegram fs-18 me-2"></i>
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
  }
};

export default function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <LayoutWrapper>
        <InHomeDiagnostic />
      </LayoutWrapper>
    </Suspense>
  );
}
