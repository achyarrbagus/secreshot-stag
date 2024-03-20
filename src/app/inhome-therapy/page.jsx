"use client";
import InHomeTherapyId from "./page-id";
import { useSelector, useDispatch } from "react-redux";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";
import LayoutWrapper from "../components/layout-wrapper";
import Helper from "../../../lib/helper/helper";
import Accordion from "react-bootstrap/Accordion";

const InHomeTherapy = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "idn") {
      dispatch(setLang("ID"));
    }
  }, []);
  const lang = useSelector((state) => state.lang.value);

  const [book, setBook] = useState("Book a visit at your place now");

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
    helper.RedirectToWa(formData, lang, true);
  };
  const redirectTele = () => {
    const helper = new Helper();
    helper.redirectTele();
  };

  switch (lang) {
    case "ID":
      return (
        <>
          <InHomeTherapyId />
        </>
      );
    default:
      return (
        <>
          <div className="content">
            <section
              className="banner-pages"
              style={{ backgroundImage: "url('assets/img/bg-homeiv.png')" }}
            >
              <div className="container">
                <div className="text">
                  <h3>In-Home IV Therapy & more</h3>
                  <p>
                    Receive vital intravenous treatments and medications,
                    ensuring safety and comfort.
                  </p>
                  <button href="#book" className="btn btn-warning fs-14">
                    {" "}
                    Book Now{" "}
                  </button>
                </div>
              </div>
            </section>

            <section className="faq pt-4">
              <div className="container">
                <div className="d-flex align-items-center">
                  <img src="assets/img/plus-vector.svg" width="30px" alt="" />
                  <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                    Our In-Home IV Therapy :
                  </h3>
                </div>

                <Accordion className="accordion accordion-custom row">
                  <Accordion.Item
                    className="accordion-item col-md-6"
                    eventKey="1"
                  >
                    <Accordion.Header>
                      <i className="icon-menu-icon-homeiv07 me-2 fs-32"></i>{" "}
                      Bali Belly Infusion
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/homeiv/img-sub-homeiv01.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              This IV drip provides a combination of therapeutic
                              components to alleviate pain, nausea, and protect
                              the gastrointestinal tract. The vitamin boosters
                              aim to enhance overall well-being, boost immunity,
                              and support various metabolic processes.
                            </p>
                            <h6 className="title-line">
                              <span> Composition </span>
                            </h6>
                            <div className="row gy-3">
                              <div className="col-12">
                                <p className="fw-medium mb-2">
                                  Therapeutic Components :
                                </p>
                                <ul className="ps-3">
                                  <li>Pain Killer IV</li>
                                  <li>Anti-Vomiting IV</li>
                                  <li>Gaster Protector IV</li>
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <p className="fw-medium mb-2">
                                  Vitamin Boosters :
                                </p>
                                <ul className="ps-3">
                                  <li>Vitamin C</li>
                                  <li>Vitamin B1 (Thiamine)</li>
                                  <li>Vitamin B2 (Riboflavin)</li>
                                  <li>Nicotinamide (Vitamin B3)</li>
                                  <li>Pantothenic Acid (Vitamin B5)</li>
                                  <li>Vitamin B6</li>
                                  <li>Folic Acid</li>
                                  <li>Vitamin B12</li>
                                  <li>Biotin</li>
                                </ul>
                              </div>
                            </div>
                            <div className="price">
                              <div className="value-price">
                                Start from:<b> Rp1.890.000 </b>
                              </div>
                              <button
                                onClick={() =>
                                  handleBook("Bali Belly Infusion")
                                }
                                id="bali"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                {" "}
                                Book Now{" "}
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
                      <i className="icon-menu-icon-homeiv07 me-2 fs-32"></i>{" "}
                      Super Bali Belly IV
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/homeiv/img-sub-homeiv02.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              A turbocharged upgrade to our Standard Bali Belly.
                              Infused with immune-empowering zinc, detoxifying
                              glutathione, and gut-nourishing probiotics, this
                              blend is designed for medical-grade resilience.
                              Beyond addressing Bali belly symptoms, it stands
                              as a robust solution, fortifying your well-being
                              at a cellular level. Immunity, detoxification, and
                              digestive health converge for your optimal
                              vitality.
                            </p>
                            <h6 className="title-line">
                              <span> Composition </span>
                            </h6>
                            <div className="row gy-3">
                              <div className="col-12">
                                <p className="fw-medium mb-2">
                                  Therapeutic Components :
                                </p>
                                <ul className="ps-3">
                                  <li>Pain Killer IV</li>
                                  <li>Anti-Vomiting IV</li>
                                  <li>Gaster Protector IV</li>
                                </ul>
                              </div>
                              <div className="col-12">
                                <p className="fw-medium mb-2">
                                  Vitamin Boosters :
                                </p>
                                <ul className="ps-3">
                                  <li>Vitamin C</li>
                                  <li>Vitamin B1 (Thiamine)</li>
                                  <li>Vitamin B2 (Riboflavin)</li>
                                  <li>Nicotinamide (Vitamin B3)</li>
                                  <li>Pantothenic Acid (Vitamin B5)</li>
                                  <li>Vitamin B6</li>
                                  <li>Folic Acid</li>
                                  <li>Vitamin B12</li>
                                  <li>Biotin</li>
                                  <li>Zinc (20mg)</li>
                                  <li>Glutathione</li>
                                  <li>Probiotics</li>
                                </ul>
                              </div>
                            </div>
                            <div className="price">
                              <div className="value-price">
                                Start from:<b> Rp2.380.000</b>
                              </div>
                              <button
                                onClick={() =>
                                  handleBook("Super Bali Belly IV")
                                }
                                id="super-bali"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                {" "}
                                Book Now{" "}
                              </button>
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
                      <i className="icon-menu-icon-homeiv08 me-2 fs-32"></i>{" "}
                      Basic Immune Booster
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/homeiv/img-sub-homeiv03.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              This IV drip comprises essential electrolytes, a
                              robust Vitamin B complex, and a dose of Vitamin C.
                              It acts to fortify the immune system, enhance
                              metabolic function, and promote the synthesis of
                              collagen, thereby supporting overall health.
                            </p>
                            <h6 className="title-line">
                              <span> Composition </span>
                            </h6>
                            <div className="row gy-3">
                              <div className="col-12">
                                <ul className="ps-3">
                                  <li>Electrolytes (500 ml)</li>
                                  <li>Vitamin B12 (5 mg)</li>
                                  <li>Biotin (60 mcg)</li>
                                  <li>Folic Acid (400 mcg)</li>
                                  <li>Vitamin B2 (3.6 mg)</li>
                                  <li>Nicotinamide (40 mg)</li>
                                  <li>Pantothenic acid (15 mg)</li>
                                  <li>Vitamin B1 (102.5 mg)</li>
                                  <li>Vitamin B6 (104 mg)</li>
                                  <li>Vitamin C (1,000 mg)</li>
                                </ul>
                              </div>
                            </div>
                            <div className="price">
                              <div className="value-price">
                                Start from: <b>Rp1.890.000</b>
                              </div>
                              <button
                                onClick={() =>
                                  handleBook("Basic Immune Booster")
                                }
                                id="basic"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                {" "}
                                Book Now{" "}
                              </button>
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
                      <i className="icon-menu-icon-homeiv08 me-2 fs-32"></i>{" "}
                      Standard Immune Booster
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/homeiv/img-sub-homeiv04.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              This IV drip delivers a blend of vital
                              electrolytes, an elevated quantity of Vitamin C,
                              and a comprehensive Vitamin B complex. It serves
                              to intensify the immune response, boost energy
                              metabolism, stimulate red blood cell production,
                              and contribute to collagen production for enhanced
                              skin health and immune system resilience.
                            </p>
                            <h6 className="title-line">
                              <span> Composition </span>
                            </h6>
                            <div className="row gy-3">
                              <div className="col-12">
                                <ul className="ps-3">
                                  <li>Electrolytes (500 ml)</li>
                                  <li>Vitamin C (2,100 mg)</li>
                                  <li>Vitamin B1 (102.5 mg)</li>
                                  <li>Vitamin B2 (103.6 mg)</li>
                                  <li>Nicotinamide (40 mg)</li>
                                  <li>Pantothenic acid (15 mg)</li>
                                  <li>Vitamin B6 (4 mg)</li>
                                  <li>Folic Acid (400 mcg)</li>
                                  <li>Vitamin B12 (10 mcg)</li>
                                  <li>Biotin (60 mcg)</li>
                                </ul>
                              </div>
                            </div>
                            <div className="price">
                              <div className="value-price">
                                Start from: <b>Rp2.075.000</b>
                              </div>
                              <button
                                onClick={() =>
                                  handleBook("Standard Immune Booster")
                                }
                                id="standard"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="accordion-item col-md-6"
                    eventKey="5"
                  >
                    <Accordion.Header>
                      <i className="icon-menu-icon-homeiv08 me-2 fs-32"></i>{" "}
                      Super Immune Booster
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/homeiv/img-sub-homeiv05.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              This potent IV drip combines electrolytes,
                              Glutathione, Zinc, and an extensive range of
                              vitamins and minerals, including A, D, E, C, B1,
                              B2, B6, B12, and B5. It provides a formidable
                              immune enhancement and supports various bodily
                              functions, including antioxidant defenses, immune
                              function, wound healing, and energy production.
                              This comprehensive approach contributes to overall
                              health and vitality.
                            </p>
                            <h6 className="title-line">
                              <span> Composition </span>
                            </h6>
                            <div className="row gy-3">
                              <div className="col-12">
                                <ul className="ps-3">
                                  <li>Electrolytes (500 ml)</li>
                                  <li>Glutathione (600 mg)</li>
                                  <li>Zinc (5 mg)</li>
                                  <li>Retinol (3,500 IU)</li>
                                  <li>Cholecalciferol (220 IU)</li>
                                  <li>Alphatocopherol (11.2 IU)</li>
                                  <li>Vitamin C (2125 mg)</li>
                                  <li>Vitamin B1 (103.51 mg)</li>
                                  <li>Vitamin B2 (4.14 mg)</li>
                                  <li>Vitamin B6 (104.53 mg)</li>
                                  <li>Vitamin B12 (5.006 mg)</li>
                                  <li>Folic acid (0.414 mg)</li>
                                  <li>Vitamin B5 (17.25 mg)</li>
                                  <li>Biotin (0.069 mg)</li>
                                  <li>Nicotinamide (46 mg)</li>
                                </ul>
                              </div>
                            </div>
                            <div className="price">
                              <div className="value-price">
                                Start from: <b>Rp2.480.000</b>
                              </div>
                              <button
                                onClick={() =>
                                  handleBook("Super Immune Booster")
                                }
                                id="super"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="accordion-item col-md-6"
                    eventKey="6"
                  >
                    <Accordion.Header>
                      <i className="icon-menu-icon-homeiv09 me-2 fs-32"></i>{" "}
                      Hangover Infusion
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/homeiv/img-sub-homeiv06.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              Hangover infusion treatment is a quick 30-60
                              minute procedure to help you quickly overcome
                              hangover symptoms through hydration and a
                              combination of vitamins and electrolytes.
                            </p>
                            <h6 className="title-line">
                              <span> Composition </span>
                            </h6>
                            <div className="row gy-3">
                              <div className="col-12">
                                <ul className="ps-3">
                                  <li>Pain Killer IV</li>
                                  <li>Anti-Vomiting IV</li>
                                  <li>Gaster Protector IV</li>
                                  <li>Vit B1, B6, B12 IV</li>
                                </ul>
                              </div>
                            </div>
                            <div className="price">
                              <div className="value-price">
                                Start from: <b>Rp1.860.000</b>
                              </div>
                              <button
                                onClick={() => handleBook("Hangover Infusion")}
                                id="hangover"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="accordion-item col-md-6"
                    eventKey="7"
                  >
                    <Accordion.Header>
                      <i className="icon-menu-icon-homeiv10 me-2 fs-32"></i>{" "}
                      Fever Infusion
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/homeiv/img-sub-homeiv07.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              Fever Infusion treatment is a rapid recovery of
                              high fever for adults through intravenous and can
                              be beneficial to restore body fluids.
                            </p>
                            <h6 className="title-line">
                              <span> Composition </span>
                            </h6>
                            <div className="row gy-3">
                              <div className="col-12">
                                <ul className="ps-3">
                                  <li>Pain Killer IV</li>
                                  <li>Anti-Vomiting IV</li>
                                  <li>Gaster Protector IV</li>
                                  <li>Vit B1, B6, B12 IV</li>
                                  <li>Paracetamol IV</li>
                                </ul>
                              </div>
                            </div>
                            <div className="price">
                              <div className="value-price">
                                Start from: <b>Rp1.140.000</b>
                              </div>
                              <button
                                onClick={() => handleBook("Fever Infusion")}
                                href="#book"
                                id="fever"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="accordion-item col-md-6"
                    eventKey="8"
                  >
                    <Accordion.Header>
                      <i className="icon-menu-icon-homeiv11 me-2 fs-32"></i>{" "}
                      Gerd / Gastritis Infusion
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="list-data-faq">
                        <div className="row gy-3">
                          <div className="col-12">
                            <img
                              src="assets/img/homeiv/img-sub-homeiv08.png"
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="col-12">
                            <p>
                              Gerd/Gastritis Infusion treatment is useful for
                              treating inflammation in the stomach or gaster
                              caused by irritation due to stomach acid.
                            </p>
                            <h6 className="title-line">
                              <span> Composition </span>
                            </h6>
                            <div className="row gy-3">
                              <div className="col-12">
                                <ul className="ps-3">
                                  <li>Pain Killer IV</li>
                                  <li>Anti-Vomiting</li>
                                  <li>Gaster Protector IV</li>
                                  <li>Vit B1, B6, B12 IV</li>
                                </ul>
                              </div>
                            </div>
                            <div className="price">
                              <div className="value-price">
                                Start from: <b>Rp1.660.000</b>
                              </div>
                              <button
                                onClick={() =>
                                  handleBook("Gerd / Gastritis Infusion")
                                }
                                id="gerd"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                {" "}
                                Book Now{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="accordion-item col-md-6"
                    eventKey="9"
                  >
                    <Accordion.Header>
                      <i className="icon-menu-icon-homeiv12 me-2 fs-32"></i>{" "}
                      Iron Infusion
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
                            <p>
                              Iron infusion is an effective treatment for iron
                              deficiency, the condition that causes tiredness
                              and affects your ability to function.
                            </p>
                            <h6 className="title-line">
                              <span> Composition </span>
                            </h6>
                            <div className="row gy-3">
                              <div className="col-12">
                                <ul className="ps-3">
                                  <li>Infusion Ringer Lactat 500 cc</li>
                                  <li>Infusion NACL 100 cc</li>
                                  <li>Vit C 1000 mg</li>
                                  <li>Vit B Compex 5000 mg</li>
                                  <li>Iron Sucrose Complex 100 mg</li>
                                </ul>
                              </div>
                            </div>
                            <div className="price">
                              <div className="value-price">
                                Start from: <b>Rp1.590.000</b>
                              </div>
                              <button
                                onClick={() => handleBook("Iron Infusion")}
                                id="iron"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                {" "}
                                Book Now{" "}
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
                        <option value="Hangover Infusion">
                          Hangover Infusion
                        </option>
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
  }
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
