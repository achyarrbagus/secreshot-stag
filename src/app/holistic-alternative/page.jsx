"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";
import LayoutWrapper from "../components/layout-wrapper";

import HolisticAlternativeId from "./page-id";

const HolisticAlternative = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "idn") {
      dispatch(setLang("ID"));
    }
  }, []);

  const [book, setBook] = useState("Book a visit at your place now");

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Acupuncture":
        setBook("Book acupunture now");
        break;
      case "Therapeutic Massage":
        setBook("Book therapeutic massage now");
        break;
      case "Energy-Balancing Reiki":
        setBook("Book energy-balancing reiki now");
        break;
      case "Yoga Guidance and Sessions":
        setBook("Book yoga guidance now");
        break;
      case "Meditation Practices":
        setBook("Book meditation practices now");
        break;
      case "Osteopathy and Chiropractic services":
        setBook("Book osteopathy and chiropractic now");
        break;
    }

    let serviceOption = document.getElementById("service");
    serviceOption.value = serviceSelect;
    window.location.href = "#book";
  };

  const redirectWa = (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const address = document.getElementById("address");

    const service = document.getElementById("service");
    if (name?.value && address?.value && service?.value) {
      const wardingWa = encodeURIComponent(`
Hello CepatSehat.com by Cepat Sehat Clinic, i want a consultation

Name :  ${name.value}
Address : ${address.value} 
Service : ${service.value}
`);

      let url = `https://api.whatsapp.com/send/?phone=6285212500030&text=${wardingWa}&type=phone_number&app_absent=0`;
      window.location.href = url;

      return;
    } else {
      alert("please fill form with correctly");
    }
  };

  const redirectTele = () => {
    window.location.replace("https://t.me/cepat_sehat");
  };

  const lang = useSelector((state) => state.lang.value);
  switch (lang) {
    case "ID":
      return (
        <>
          <HolisticAlternativeId />
        </>
      );
    default:
      return (
        <>
          <div className="content">
            <section
              className="banner-pages"
              style={{ backgroundImage: "url('assets/img/bg-therapies.png')" }}
            >
              <div className="container">
                <div className="text">
                  <h3>Holistic Alternative Therapies</h3>
                  <p>
                    Dive into holistic well-being with our range of alternative
                    therapy solutions.
                  </p>
                  <a href="#book" className="btn btn-warning fs-14">
                    {" "}
                    Book Now{" "}
                  </a>
                </div>
              </div>
            </section>

            <div className="faq pt-4">
              <div className="container">
                <div className="d-flex align-items-center">
                  <img src="assets/img/plus-vector.svg" width="30px" alt="" />
                  <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                    Our Holistic Alternative Therapies offer:
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
                        <i className="icon-menu-icon-therapis01 me-2 fs-32"></i>{" "}
                        Acupuncture
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
                                src="assets/img/holistic/img-sub-holistic01.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                An ancient Chinese medicine practice that
                                involves inserting thin needles into the body at
                                specific points.
                              </p>
                              <h6 className="title-line">
                                <span> Benefit </span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Pain Management</h6>
                                  <span>
                                    {" "}
                                    Alleviates various types of pain, including
                                    chronic conditions.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Stress Reduction</h6>
                                  <span>
                                    {" "}
                                    Promotes relaxation and balances the nervous
                                    system.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Improved Sleep</h6>
                                  <span>
                                    {" "}
                                    Enhances sleep quality and helps manage
                                    insomnia.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Enhanced Immune Function
                                  </h6>
                                  <span>
                                    {" "}
                                    Supports overall immune system health.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Complementary Treatment
                                  </h6>
                                  <span>
                                    {" "}
                                    Used alongside conventional therapies for
                                    various conditions.{" "}
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp600.000
                                </div>
                                <button
                                  onClick={() => handleBook("Acupuncture")}
                                  id="acupuncture"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  {" "}
                                  Book Now{" "}
                                </button>
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
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        <i className="icon-menu-icon-therapis02 me-2 fs-32"></i>{" "}
                        Therapeutic Massage
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="list-data-faq">
                          <div className="row gy-3">
                            <div className="col-12">
                              <img
                                src="assets/img/holistic/img-sub-holistic02.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                A traditional massage that uses long, flowing
                                strokes, kneading, and pressure to relax muscles
                                and improve circulation.
                              </p>
                              <h6 className="title-line">
                                <span> Benefit </span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Pain Relief</h6>
                                  <span>
                                    {" "}
                                    Eases muscle tension and reduces discomfort.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Stress Reduction</h6>
                                  <span>
                                    {" "}
                                    Promotes relaxation, lowering stress levels.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Improved Circulation</h6>
                                  <span>
                                    {" "}
                                    Enhances blood flow, aiding in overall
                                    health.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Flexibility and Range of Motion
                                  </h6>
                                  <span>
                                    {" "}
                                    Helps increase flexibility and joint
                                    mobility.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Mood Enhancement</h6>
                                  <span>
                                    {" "}
                                    Releases endorphins, contributing to a
                                    positive mood.{" "}
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp300.000
                                </div>
                                <button
                                  onClick={() =>
                                    handleBook("Therapeutic Massage")
                                  }
                                  id="therapeutic"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  {" "}
                                  Book Now{" "}
                                </button>
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
                        <i className="icon-menu-icon-therapis03 me-2 fs-32"></i>{" "}
                        Energy-Balancing Reiki
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
                                src="assets/img/holistic/img-sub-holistic03.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                A Japanese technique that uses gentle touch to
                                channel energy into the body.
                              </p>
                              <h6 className="title-line">
                                <span> Benefit </span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Stress Reduction</h6>
                                  <span>
                                    {" "}
                                    Promotes relaxation, easing stress and
                                    tension.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Emotional Well-Being</h6>
                                  <span>
                                    {" "}
                                    Supports emotional balance and clarity.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Pain Management</h6>
                                  <span>
                                    {" "}
                                    May help alleviate physical discomfort and
                                    pain.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Enhanced Energy Flow</h6>
                                  <span>
                                    {" "}
                                    Aids in balancing and harmonizing the body's
                                    energy.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Overall Relaxation</h6>
                                  <span>
                                    {" "}
                                    Induces a state of deep relaxation for
                                    holistic well-being.{" "}
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp400.000
                                </div>
                                <button
                                  onClick={() =>
                                    handleBook("Energy-Balancing Reiki")
                                  }
                                  id="energy"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  {" "}
                                  Book Now{" "}
                                </button>
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
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        <i className="icon-menu-icon-therapis04 me-2 fs-32"></i>{" "}
                        Yoga Guidance and Sessions
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="list-data-faq">
                          <div className="row gy-3">
                            <div className="col-12">
                              <img
                                src="assets/img/holistic/img-sub-holistic04.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                A type of yoga that combines traditional yoga
                                poses with relaxation techniques.
                              </p>
                              <h6 className="title-line">
                                <span> Benefit </span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Flexibility and Strength
                                  </h6>
                                  <span>
                                    {" "}
                                    Improves flexibility, balance, and overall
                                    physical strength.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Stress Reduction</h6>
                                  <span>
                                    {" "}
                                    Promotes relaxation and reduces stress
                                    levels through mindful movements and
                                    breathing.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Mental Clarity</h6>
                                  <span>
                                    {" "}
                                    Enhances mental focus, concentration, and
                                    mindfulness.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Improved Posture</h6>
                                  <span>
                                    {" "}
                                    Helps correct and maintain good posture,
                                    reducing strain on the body.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Mind-Body Connection</h6>
                                  <span>
                                    {" "}
                                    Strengthens the connection between the body
                                    and mind for holistic well-being.{" "}
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp400.000
                                </div>
                                <button
                                  onClick={() =>
                                    handleBook("Yoga Guidance and Sessions")
                                  }
                                  id="yoga"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now
                                </button>
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
                        data-bs-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        <i className="icon-menu-icon-therapis05 me-2 fs-32"></i>{" "}
                        Meditation Practices
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="list-data-faq">
                          <div className="row gy-3">
                            <div className="col-12">
                              <img
                                src="assets/img/holistic/img-sub-holistic05.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                A type of meditation that involves a relaxed
                                state and focusing on the breath.
                              </p>
                              <h6 className="title-line">
                                <span> Benefit </span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Stress Reduction</h6>
                                  <span>
                                    {" "}
                                    Promotes relaxation, reducing overall stress
                                    levels.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Improved Focus and Concentration
                                  </h6>
                                  <span>
                                    {" "}
                                    Enhances mental clarity and attention.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Emotional Well-Being</h6>
                                  <span>
                                    {" "}
                                    Helps manage emotions and cultivate a
                                    positive mindset.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Better Sleep</h6>
                                  <span>
                                    {" "}
                                    Supports relaxation and can contribute to
                                    improved sleep quality.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Mindfulness</h6>
                                  <span>
                                    Fosters awareness of the present moment,
                                    leading to a greater sense of peace and
                                    balance.
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp400.000
                                </div>
                                <button
                                  onClick={() =>
                                    handleBook("Meditation Practices")
                                  }
                                  id="meditation"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  {" "}
                                  Book Now{" "}
                                </button>
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
                        data-bs-target="#collapseSix"
                        aria-expanded="true"
                        aria-controls="collapseSix"
                      >
                        <i className="icon-menu-icon-therapis05 me-2 fs-32"></i>{" "}
                        Osteopathy and Chiropractic services
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="list-data-faq">
                          <div className="row gy-3">
                            <div className="col-12">
                              <img
                                src="assets/img/holistic/img-sub-holistic06.png"
                                className="w-100"
                                alt=""
                              />
                            </div>
                            <div className="col-12">
                              <p>
                                Discover the healing touch of our osteopathy ,
                                where experienced practitioners employ gentle
                                manual techniques to restore balance and
                                alleviate musculoskeletal issues.
                              </p>
                              <h6 className="title-line">
                                <span> Benefit </span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Pain Relief</h6>
                                  <span>
                                    {" "}
                                    Alleviates musculoskeletal pain and
                                    discomfort through manual adjustments.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Improved Mobility</h6>
                                  <span>
                                    {" "}
                                    Enhances joint flexibility and overall range
                                    of motion.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Posture Correction</h6>
                                  <span>
                                    {" "}
                                    Helps address and correct posture issues,
                                    reducing strain on the body.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">
                                    Headache and Migraine Relief
                                  </h6>
                                  <span>
                                    {" "}
                                    Can provide relief from tension headaches
                                    and migraines through spinal adjustments.{" "}
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Whole-body Wellness</h6>
                                  <span>
                                    Promotes overall well-being by addressing
                                    the interconnectedness of the
                                    musculoskeletal system and other bodily
                                    functions.
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp450.000
                                </div>
                                <div
                                  onClick={() =>
                                    handleBook(
                                      "Osteopathy and Chiropractic services"
                                    )
                                  }
                                  id="osteopathy"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  {" "}
                                  Book Now{" "}
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
            </div>

            <section className="book" id="book">
              <div className="container">
                <h3 className="title-section">{book}</h3>
                <form action="#">
                  <div className="row mb-3 g-3">
                    <div className="col-md-4">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Your Address"
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Service Name</label>
                      <select
                        id="service"
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option>Select Service</option>
                        <option value="Acupuncture">Acupuncture</option>
                        <option value="Therapeutic Massage">
                          Therapeutic Massage
                        </option>
                        <option value="Energy-Balancing Reiki">
                          Energy-Balancing Reiki
                        </option>
                        <option value="Yoga Guidance and Sessions">
                          Yoga Guidance and Sessions
                        </option>
                        <option value="Meditation Practices">
                          Meditation Practices
                        </option>
                        <option value="Osteopathy and Chiropractic services">
                          Osteopathy and Chiropractic services
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
                </form>
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
        <HolisticAlternative />
      </Suspense>
    </LayoutWrapper>
  );
}
