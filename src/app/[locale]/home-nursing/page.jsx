"use client";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import LayoutWrapper from "../components/layout-wrapper";
import Helper from "../../../../lib/helper/helper";
import Accordion from "react-bootstrap/Accordion";
import { useLocale, useTranslations } from "next-intl";
import NurseCard from "../components/card-nurse";
import DoctorCard from "../components/card-doctor";

const HomeNursing = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    service: "Select Service",
  });

  const locale = useLocale();

  const t = useTranslations("home-nursing");

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

  const [book, setBook] = useState(t("form-book.title"));

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Wound Care":
        setBook(t("form-book-title.1"));
        break;
      case "Monitoring and Prevention":
        setBook(t("form-book-title.2"));
        break;
      case "Dengue Fever Home Care":
        setBook(t("form-book-title.3"));
        break;
      case "Perawatan Luka":
        setBook(t("form-book-title.1"));
        break;
      case "Pemantauan & Pencegahan":
        setBook(t("form-book-title.2"));
        break;
      case "Perawatan DBD di Rumah":
        setBook(t("form-book-title.3"));
        break;
    }

    // switch (serviceSelect) {
    //   case "Doctor Home Visit":
    //     setBook(t("form-book-title.1"));
    //     break;
    //   case "Nurse Home Visit":
    //     setBook(t("form-book-title.2"));
    //     break;
    //   case "Medical Check Up":
    //     setBook(t("form-book-title.3"));
    //     break;
    //   case "Kunjungan Dokter Kerumah":
    //     setBook(t("form-book-title.1"));
    //     break;
    //   case "Kunjungan Perawat Kerumah":
    //     setBook(t("form-book-title.2"));
    //     break;
    //   case "Pemeriksaan Kesehatan":
    //     setBook(t("form-book-title.3"));
    //     break;
    // }

    setFormData((prevFormData) => ({
      ...prevFormData,
      service: serviceSelect,
    }));
    window.location.href = "#book";
  };

  return (
    <>
      <div className="content">
        <section
          className="banner-pages"
          style={{
            backgroundImage: "url('/assets/img/bg-home-nursing.png')",
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
                  <i className="icon-menu-icon-nursing me-2 fs-32"></i>
                  {t("service-menu.1.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/home-nursing/img-home-nursing-sub01.png"
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
                  <i className="icon-menu-icon-nursing-2 me-2 fs-32"></i>{" "}
                  {t("service-menu.2.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/home-nursing/img-home-nursing-sub02.png"
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
                            id="nurse-visit"
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
                  <i className="icon-menu-icon-nursing me-2 fs-32"></i>{" "}
                  {t("service-menu.3.title")}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="/assets/img/home-nursing/img-home-nursing-sub03.png"
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
                            id="nurse-visit"
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

        {/* booking session */}
        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section">{book}</h3>
            <form>
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
                    id="address"
                    type="text"
                    className="form-control"
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
                    <option value="Select Service" disabled>
                      {t("form-book.service-label")}
                    </option>
                    <option value={t("service-menu.1.title")}>
                      {t("service-menu.1.title")}
                    </option>
                    <option value={t("service-menu.2.title")}>
                      {t("service-menu.2.title")}
                    </option>
                    <option value={t("service-menu.3.title")}>
                      {t("service-menu.3.title")}
                    </option>
                    {/* {locale == "id" ? (
                      <option value={t("service-menu.4")}>
                        {t("service-menu.4.title")}
                      </option>
                    ) : (
                      <></>
                    )} */}
                  </select>
                </div>
              </div>
            </form>
            <div className="row g-3 justify-content-center">
              <div className="col-6 col-md-3">
                <button onClick={redirectWa} className="btn btn-whatsapp w-100">
                  <i className="mdi mdi-whatsapp fs-18 me-2"></i> Whatsapp
                </button>
              </div>
              <div className="col-6 col-md-3">
                <button
                  onClick={redirectTele}
                  className="btn btn-telegram w-100"
                >
                  <i className="fa-brands fa-telegram fs-18 me-2"></i> Telegram
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="doctor nurse">
          <div className="container">
            <h3 className="title-section"> {t("our-nurse")} </h3>
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-8">
                <div className="row g-3 g-md-4 justify-content-center">
                  <NurseCard
                    name="Siti Rahma Derlauw"
                    str="3101522234737239"
                    isnurse={true}
                    image="/assets/img/doctor/nurse-siti.png"
                  />
                  <NurseCard
                    name="Loisa Lakamai"
                    str="1701721213519681"
                    isnurse={true}
                    image="/assets/img/doctor/nurse-loisa.png"
                  />
                  <NurseCard
                    name="Syarah Azzarah"
                    str="2601521224246624"
                    isnurse={true}
                    image="/assets/img/doctor/nurse-syarah.png"
                  />
                  <NurseCard
                    name="Andi Andriansyah S."
                    str="1201512214112821"
                    isnurse={true}
                    image="/assets/img/doctor/nurse-andi.png"
                  />
                  <NurseCard
                    name="Marsiani Talo"
                    str=" 190172122-4444051"
                    isnurse={true}
                    image="/assets/img/doctor/nurse-marsiani.png"
                  />
                  <NurseCard
                    name="Irfan Mustofa"
                    str="1401511224517960"
                    isnurse={true}
                    image="/assets/img/doctor/nurse-irfan.png"
                  />
                  <NurseCard
                    name="Dimas Catur Nugroho"
                    str="ED00000360053713"
                    isnurse={true}
                    image="/assets/img/doctor/nurse-dimas.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="doctor">
          <div className="container">
            <h3 className="title-section">{t("our-doctors")} </h3>
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-8">
                <div className="row g-3 g-md-5 justify-content-center">
                  <DoctorCard
                    image={`/assets/img/doctor/dr-dewi-f.png`}
                    name="dr. Dewi Fransiska, Sp.B"
                    job={t("dr-surgeon")}
                    str="3121101422105406"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("mayapada"), t("eka")]}
                  />
                  <DoctorCard
                    image={`/assets/img/doctor/dr-dwi-s.png`}
                    name="dr. Dwi Suryaning Ayu Aprilizia, Sp.A"
                    job={t("dr-pediatrician")}
                    str="3321201323154360"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("aysha")]}
                  />
                  <DoctorCard
                    image={`/assets/img/doctor/dr-ayu-a.png`}
                    name="dr. Ayu A. Istiana"
                    job={t("dr-asthetic")}
                    str="3321201323154360"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("cepat-sehat")]}
                  />
                  <DoctorCard
                    image={`/assets/img/doctor/dr-ernita-r.png`}
                    name="dr. Ernita Rosyanti Dewi"
                    job={t("dr-general")}
                    str="3121100220145544"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("cepat-sehat")]}
                  />
                  <DoctorCard
                    image={`/assets/img/doctor/dr-irvan-r.png`}
                    name="dr. Irvan Rizki Fitri"
                    job={t("dr-general")}
                    str="3121100220145544"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("cepat-sehat")]}
                  />
                  <DoctorCard
                    image={`/assets/img/doctor/dr-melchisedek-a.png`}
                    name="dr. Melchisedek A.V.P Marbun"
                    job={t("dr-general")}
                    str="3111100220155405"
                    titlelocation={t("practice-location")}
                    practiceLocation={[t("cepat-sehat")]}
                  />
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
        <HomeNursing />
      </Suspense>
    </LayoutWrapper>
  );
}
