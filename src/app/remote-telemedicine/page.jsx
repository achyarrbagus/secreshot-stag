"use client";

import { useSelector, useDispatch } from "react-redux";
import RemoteTelemedicId from "./page-id";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";
import LayoutWrapper from "../components/layout-wrapper";
import Helper from "../../../lib/helper/helper";
import Accordion from "react-bootstrap/Accordion";

const RemoteTelemedic = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

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

  switch (lang) {
    case "ID":
      return (
        <>
          <RemoteTelemedicId />
        </>
      );
    default:
      return (
        <>
          <div className="content">
            <section
              className="banner-pages"
              style={{ backgroundImage: "url('assets/img/bg-remote.png')" }}
            >
              <div className="container">
                <div className="text">
                  <h3>Remote Telemedicine</h3>
                  <p>
                    Access medical consultations without stepping out, via our
                    comprehensive telehealth platform.
                  </p>
                  <a href="#book" className="btn btn-warning fs-14">
                    Book Now
                  </a>
                </div>
              </div>
            </section>

            <section className="faq pt-4">
              <div className="container">
                <div className="d-flex align-items-center">
                  <img src="assets/img/plus-vector.svg" width="30px" alt="" />
                  <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                    Our Remote Telemedicine services include:
                  </h3>
                </div>
                <Accordion className="accordion accordion-custom row">
                  <Accordion.Item
                    className="accordion-item col-md-6"
                    eventKey="1"
                  >
                    <Accordion.Header>
                      <i className="icon-menu-icon-remotetelemedicine01 me-2 fs-32"></i>{" "}
                      General Practitioner Online Consultation
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/remote-telemedicine/img-sub-remotetelemedicine01.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              Access healthcare through convenient online
                              consultations, addressing diagnoses, treatments,
                              and follow-up care flexibly from your own space.
                            </p>
                            <h6 className="title-line">
                              <span>Benefit</span>
                            </h6>
                            <ul className="ps-3">
                              <li className="mb-2">
                                <h6 className="mb-1">Convenience</h6>
                                <span>
                                  Allows patients to consult with a healthcare
                                  professional from the comfort of their own
                                  home, saving time and travel.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Accessibility</h6>
                                <span>
                                  Provides access to medical advice and
                                  prescriptions for common ailments without the
                                  need for in-person visits.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Timely Care</h6>
                                <span>
                                  Enables quick consultations for minor
                                  illnesses or health concerns without waiting
                                  for an appointment.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Cost-Effective</h6>
                                <span>
                                  May be more cost-efficient compared to
                                  in-person visits, considering travel expenses
                                  and time off work.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Preventive Guidance</h6>
                                <span>
                                  Offers a convenient way to discuss preventive
                                  care, lifestyle changes, and general health
                                  advice with a healthcare professional.
                                </span>
                              </li>
                            </ul>
                            <div className="price">
                              <div className="value-price">
                                <b>Start from:</b> Rp20.000
                              </div>
                              <div className="ms-auto d-flex gap-1">
                                {/* <div
                                    onClick={() => (window.location.href = "https://www.sehatcepat.com/payments/dr-ernita/")}
                                    id="general"
                                    className="btn btn-warning"
                                  >
                                    <i class="fa-solid fa-user-doctor"></i>
                                  </div> */}
                                <div
                                  onClick={() =>
                                    handleBook(
                                      "General Practitioner Online Consultation"
                                    )
                                  }
                                  id="general"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now{" "}
                                </div>
                              </div>
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
                      <i className="icon-menu-icon-remotetelemedicine02 me-2 fs-32"></i>{" "}
                      Medical Doctor Online Consultation
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/remote-telemedicine/img-sub-remotetelemedicine02.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              Connect with specialized medical expertise
                              remotely, eliminating the need for physical travel
                              through our online platform
                            </p>
                            <h6 className="title-line">
                              <span>Benefit</span>
                            </h6>
                            <ul className="ps-3">
                              <li className="mb-2">
                                <h6 className="mb-1">Pediatrician</h6>
                                <span>
                                  consult with doctor specializing in the
                                  medical care of infants, children, and
                                  adolescents, focusing on their physical,
                                  emotional, and behavioral well-being.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Surgeon</h6>
                                <span>
                                  consult with medical professional skilled in
                                  performing surgical procedures, addressing a
                                  wide range of conditions through operative
                                  techniques.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Aesthetic Doctor</h6>
                                <span>
                                  consult with medical practitioner with
                                  expertise in aesthetic or cosmetic medicine,
                                  knowing about non-surgical procedures to
                                  enhance a person's appearance.
                                </span>
                              </li>
                            </ul>
                            <div className="price">
                              <div className="value-price">
                                <b>Start from:</b> Rp40.000
                              </div>

                              <div className="d-flex gap-1 ms-auto">
                                {/* <div
                                    onClick={() => (window.location.href = "https://www.sehatcepat.com/payments/dr-lia/")}
                                    id="general"
                                    className="btn btn-warning"
                                  >
                                    <i class="fa-solid fa-user-doctor"></i>
                                  </div> */}
                                <div
                                  onClick={() =>
                                    handleBook(
                                      "Medical Doctor Online Consultation"
                                    )
                                  }
                                  id="medical"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now
                                </div>
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
                      <i className="icon-menu-icon-remotetelemedicine03 me-2 fs-32"></i>{" "}
                      Online Medical Prescription
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/remote-telemedicine/img-sub-remotetelemedicine03.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              Online medical prescriptions enable patients to
                              receive medications remotely through virtual
                              consultations.
                            </p>
                            <h6 className="title-line">
                              <span>Benefit</span>
                            </h6>
                            <ul className="ps-3">
                              <li className="mb-2">
                                <h6 className="mb-1">Convenience</h6>
                                <span>
                                  Enables patients to receive prescriptions
                                  without visiting a physical clinic, saving
                                  time and effort.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Accessibility</h6>
                                <span>
                                  Improves access to necessary medications for
                                  individuals in remote areas or with limited
                                  mobility.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Time Efficiency</h6>
                                <span>
                                  Reduces the time spent on travel and waiting
                                  in queues at traditional pharmacies.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Privacy</h6>
                                <span>
                                  Offers a discreet way for individuals to
                                  obtain prescription medications without
                                  face-to-face interactions.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Continuity of Care</h6>
                                <span>
                                  Supports ongoing and consistent management of
                                  chronic conditions through timely prescription
                                  refills and adjustments.
                                </span>
                              </li>
                            </ul>
                            <div className="price">
                              <div className="value-price">
                                <b>Start from:</b> Rp40.000
                              </div>

                              <div
                                onClick={() =>
                                  handleBook("Online Medical Prescription")
                                }
                                id="prescription"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                Book Now{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="accordion-item col-md-6"
                    eventKey="4"
                  >
                    <Accordion.Header>
                      <i className="icon-menu-icon-remotetelemedicine04 me-2 fs-32"></i>
                      Online Sick Leave Letter
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/remote-telemedicine/img-sub-remotetelemedicine04.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              Online sick leave letter enables individuals to
                              consult with healthcare professionals remotely to
                              obtain the necessary sick leave letter through
                              digital platforms or websites.
                            </p>
                            <h6 className="title-line">
                              <span>Benefit</span>
                            </h6>
                            <ul className="ps-3">
                              <li className="mb-2">
                                <h6 className="mb-1">Convenience</h6>
                                <span>
                                  Allows individuals to obtain sick leave letter
                                  from the comfort of their own homes, reducing
                                  the need for in-person visits.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Time Savings</h6>
                                <span>
                                  Streamlines the process, saving time compared
                                  to traditional methods of obtaining a sick
                                  leave letter.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Accessibility</h6>
                                <span>
                                  Provides access to sick leave letter for
                                  individuals in remote locations or those with
                                  limited mobility.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Efficiency</h6>
                                <span>
                                  Facilitates a quicker turnaround in obtaining
                                  necessary documentation for work or other
                                  purposes.
                                </span>
                              </li>
                              <li className="mb-2">
                                <h6 className="mb-1">Reduced Exposure</h6>
                                <span>
                                  Minimizes the risk of exposure to contagious
                                  illnesses by avoiding unnecessary visits to
                                  healthcare facilities.
                                </span>
                              </li>
                            </ul>
                            <div className="price">
                              <div className="value-price">
                                <b>Start from:</b> Rp75.000
                              </div>

                              <div
                                onClick={() =>
                                  handleBook("Online Sick Leave Letter")
                                }
                                id="certificate"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                Book Now{" "}
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
                <h3 className="title-section"> {book}</h3>
                <div>
                  <div className="row mb-3 g-3">
                    <div className="col-md-4">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        value={formData.name}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Your Address"
                        onChange={handleChange}
                        value={formData.address}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Service Name</label>
                      <select
                        id="service"
                        className="form-select form-control"
                        aria-label="Default select example"
                        onChange={handleChange}
                        value={formData.service}
                      >
                        <option>Select Service</option>
                        <option value="General Practitioner Online Consultation">
                          General Practitioner Online Consultation
                        </option>
                        <option value="Medical Doctor Online Consultation">
                          Medical Doctor Online Consultation
                        </option>
                        <option value="Online Medical Prescription">
                          Online Medical Prescription
                        </option>
                        <option value="Online Medical Certificate">
                          Online Medical Certificate
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
    <LayoutWrapper>
      <Suspense fallback={<div>Loading</div>}>
        <RemoteTelemedic />
      </Suspense>
    </LayoutWrapper>
  );
}
