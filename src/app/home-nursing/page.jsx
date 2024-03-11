"use client";
import HomeNursingId from "./page-id";
import { useSelector, useDispatch } from "react-redux";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";
import LayoutWrapper from "../components/layout-wrapper";
import Helper from "../../../lib/helper/helper";

const HomeNursing = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "idn") {
      dispatch(setLang("ID"));
    }
  }, []);

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
    helper.redirectTele();
  };

  const [book, setBook] = useState("Book a visit at your place now");

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Wound Care":
        setBook("Book a wound care now");
        break;
      case "Monitoring and Prevention":
        setBook("Book a monitoring & prevention now");
        break;
    }

    let serviceOption = document.getElementById("service");
    serviceOption.value = serviceSelect;
    window.location.href = "#book";
  };
  const lang = useSelector((state) => state.lang.value);

  switch (lang) {
    case "ID":
      return (
        <>
          <HomeNursingId />
        </>
      );
    default:
      return (
        <>
          <div className="content">
            <section
              className="banner-pages"
              style={{
                backgroundImage: "url('assets/img/bg-home-nursing.png')",
              }}
            >
              <div className="container">
                <div className="text">
                  <h3>Home Nursing and Wound Care</h3>
                  <p>
                    Receive top-notch nursing and wound care services in the
                    comfort of your villa or hotel, from recovery support to
                    chronic condition management.
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
                    Our comprehensive home nursing and wound care services
                    include :
                  </h3>
                </div>
                <div
                  className="accordion accordion-custom row"
                  id="accordionExample"
                >
                  <div className="accordion-item col-md-6">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i className="icon-menu-icon-nursing me-2 fs-32"></i>{" "}
                        Wound Care
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="list-data-faq">
                          <div className="row gy-3">
                            <div className="col-12">
                              <img
                                src="assets/img/home-nursing/img-home-nursing-sub01.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                Comprehensive healthcare services covering
                                expert wound and ostomy care, advanced wound
                                dressing methods, precise minor surgeries, and
                                thorough post-surgical care for optimal
                                recovery.
                              </p>
                              <h6 className="title-line">
                                <span> Benefit </span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Wound and Ostomy Care
                                  </h6>
                                  <span>
                                    Specialized care for faster healing,
                                    complications prevention, and improved
                                    patient well-being.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Advanced Wound Dressing
                                  </h6>
                                  <span>
                                    Accelerates healing, reduces infection
                                    risks, and provides optimal conditions for
                                    tissue recovery.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Minor Surgeries</h6>
                                  <span>
                                    {" "}
                                    Efficient and precise treatment, minimizing
                                    trauma and ensuring quick recovery.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Post-Surgical Care</h6>
                                  <span>
                                    Comprehensive care for pain management,
                                    infection prevention, and smooth
                                    rehabilitation, promoting a quicker recovery
                                    process.
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp250.000
                                </div>
                                <div
                                  onClick={() => handleBook("Wound Care")}
                                  id="wound"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item col-md-6">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        <i className="icon-menu-icon-nursing-2 me-2 fs-32"></i>{" "}
                        Monitoring and Prevention
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="list-data-faq">
                          <div className="row gy-3">
                            <div className="col-12">
                              <img
                                src="assets/img/home-nursing/img-home-nursing-sub02.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                Ensuring patient well-being through continuous
                                vital sign monitoring and implementing
                                preventive measures to curb the risk of
                                infections.
                              </p>
                              <h6 className="title-line">
                                <span> Benefit </span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Vital Sign Monitoring
                                  </h6>
                                  <span>
                                    Early intervention through regular
                                    monitoring detects health issues promptly,
                                    improving patient outcomes.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Infection Prevention</h6>
                                  <span>
                                    {" "}
                                    Minimized disease transmission, safeguarding
                                    patients and healthcare workers.{" "}
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp200.000
                                </div>
                                <div
                                  onClick={() =>
                                    handleBook("Monitoring and Prevention")
                                  }
                                  id="monitoring"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

            <section className="doctor nurse">
              <div className="container">
                <h3 className="title-section"> Our Nurses </h3>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-lg-8">
                    <div className="row g-3 g-md-4 justify-content-center">
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img
                              src="assets/img/doctor/nurse-siti.png"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h5>Siti Rahma Derlauw</h5>
                            <span>STR: 3101522234737239</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img
                              src="assets/img/doctor/nurse-loisa.png"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h5>Loisa Lakamai</h5>
                            <span>STR: 1701721213519681</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img
                              src="assets/img/doctor/nurse-syarah.png"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h5>Syarah Azzarah</h5>
                            <span>STR: 2601521224246624 </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img
                              src="assets/img/doctor/nurse-andi.png"
                              alt=" "
                            />
                          </div>
                          <div className="name">
                            <h5>Andi Andriansyah S.</h5>
                            <span>STR: 1201512214112821</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img
                              src="assets/img/doctor/nurse-marsiani.png"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h5>Marsiani Talo</h5>
                            <span>STR: 190172122-4444051</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img
                              src="assets/img/doctor/nurse-irfan.png"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h5>Irfan Mustofa</h5>
                            <span>STR: 1401511224517960</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img
                              src="assets/img/doctor/nurse-dimas.png"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h5>Dimas Catur Nugroho</h5>
                            <span>STR: ED00000360053713</span>
                          </div>
                        </div>
                      </div>
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
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/dr-dewi-f.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>dr. Dewi Fransiska, Sp.B</h5>
                            <p>Surgeon</p>
                            <span>STR: 3121101422105406</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location{" "}
                                <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Mayapada Hospital</li>
                                <li>Eka Hospital</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/dr-dwi-s.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>dr. Dwi Suryaning Ayu Aprilizia, Sp.A</h5>
                            <p>Pediatrician</p>
                            <span>STR: 3321201323154360</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location{" "}
                                <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Aysha Islamic Hospital</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/dr-ayu-a.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>dr. Ayu A. Istiana</h5>
                            <p>Aesthetic Doctor</p>
                            <span>STR: 3121100220145699</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location{" "}
                                <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Cepat Sehat Clinic</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img
                              src="assets/img/doctor/dr-ernita-r.png"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h5>dr. Ernita Rosyanti Dewi</h5>
                            <p>General Practitioner</p>
                            <span>STR: 3121100220145544</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location{" "}
                                <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Cepat Sehat Clinic</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img
                              src="assets/img/doctor/dr-irvan-r.png"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h5>dr. Irvan Rizki Fitri</h5>
                            <p>General Practitioner</p>
                            <span>STR: 3111100321119174</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location{" "}
                                <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Cepat Sehat Clinic</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img
                              src="assets/img/doctor/dr-melchisedek-a.png"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h5>dr. Melchisedek A.V.P Marbun</h5>
                            <p>General Practitioner</p>
                            <span>STR: 3111100220155405</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location{" "}
                                <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Cepat Sehat Clinic</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
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
        <HomeNursing />
      </Suspense>
    </LayoutWrapper>
  );
}
