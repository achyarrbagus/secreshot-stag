"use client";
import { useState } from "react";
import LayoutWrapper from "../components/layout-wrapper";
import Helper from "../../../lib/helper/helper";

import Accordion from "react-bootstrap/Accordion";

const InHomeTherapyId = () => {
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
    helper.RedirectToWa(formData, "ID", true);
  };
  const redirectTele = () => {
    const helper = new Helper();
    helper.RedirectToTele(formData);
  };

  const [book, setBook] = useState("Pesan kunjungan sekarang");
  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Infus Bali Belly":
        setBook("Pesan bali belly infusion sekarang");
        break;
      case "Super Bali Belly IV":
        setBook("Pesan super bali belly infusion sekarang");
        break;
      case "Basic Immune Booster":
        setBook("Pesan basic immnue booster sekarang");
        break;
      case "Standard Immune Booster":
        setBook("Pesan standard immnue booster sekarang");
        break;
      case "Super Immune Booster":
        setBook("Pesan super immune booster sekarang");
        break;
      case "Hangover Infusion":
        setBook("Pesan hangover infusion sekarang");
        break;
      case "Fever Infusion":
        setBook("Pesan fever infusion sekarang");
        break;
      case "Gerd / Gastritis Infusion":
        setBook("Pesan gerd infusion sekarang");
        break;
      case "Iron Infusion":
        setBook("Pesan iron infusion sekarang");
        break;
    }
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
          style={{ backgroundImage: "url('assets/img/bg-homeiv.png')" }}
        >
          <div className="container">
            <div className="text">
              <h3>Terapi IV di Rumah & lainnya</h3>
              <p>
                Menerima perawatan dan pengobatan intravena yang tepat,
                memastikan keamanan dan kenyamanan.
              </p>
              <button href="#book" className="btn btn-warning fs-14">
                Pesan
              </button>
            </div>
          </div>
        </section>

        <section className="faq pt-4">
          <div className="container">
            <div className="d-flex align-items-center">
              <img src="assets/img/plus-vector.svg" width="30px" alt="" />
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                Terapi IV Di Rumah :
              </h3>
            </div>

            <Accordion className="accordion accordion-custom row">
              <Accordion.Item className="accordion-item col-md-6" eventKey="1">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv07 me-2 fs-32"></i>Infus
                  Bali Belly
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
                          Tipe IV ini memberikan kombinasi komponen terapeutik
                          untuk mengurangi rasa sakit, mual, dan melindungi
                          saluran pencernaan. Bertujuan untuk meningkatkan
                          kondisi secara keseluruhan, meningkatkan kekebalan,
                          dan mendukung berbagai proses metabolisme.
                        </p>
                        <h6 className="title-line">
                          <span> Komposisi </span>
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <p className="fw-medium mb-2">Komponen Terapi :</p>
                            <ul className="ps-3">
                              <li>IV Pereda Sakit</li>
                              <li>IV Anti-Mual</li>
                              <li>IV Gaster Protector </li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <p className="fw-medium mb-2">Penguat Vitamin :</p>
                            <ul className="ps-3">
                              <li>Vitamin C</li>
                              <li>Vitamin B1 (Tiamin)</li>
                              <li>Vitamin B2 (Riboflavin)</li>
                              <li>Nikotinamid (Vitamin B3)</li>
                              <li>Asam Pantotenat (Vitamin B5)</li>
                              <li>Vitamin B6</li>
                              <li>Asam folat</li>
                              <li>Vitamin B12</li>
                              <li>Biotin</li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            Mulai dari:<b> Rp1.890.000 </b>
                          </div>
                          <button
                            onClick={() => handleBook("Infus Bali Belly")}
                            id="bali"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            Pesan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="2">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv07 me-2 fs-32"></i> Super
                  Bali Belly IV
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
                          Peningkatan Standard Bali Belly kami. Diperkaya dengan
                          zinc yang memperkuat kekebalan tubuh, detoksifikasi
                          glutathione, dan probiotik yang memberi nutrisi pada
                          usus, campuran ini dirancang untuk ketahanan tingkat
                          medis. Selain mengatasi gejala perut buncit, ini juga
                          merupakan solusi ampuh yang memperkuat pertumbuhan
                          sel. Imunitas, detoksifikasi, dan kesehatan pencernaan
                          untuk vitalitas optimal Anda.
                        </p>
                        <h6 className="title-line">
                          <span> Komposisi </span>
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <p className="fw-medium mb-2">Komponen Terapi :</p>
                            <ul className="ps-3">
                              <li>IV Pereda Sakit</li>
                              <li>IV Anti-Mual</li>
                              <li>IV Gaster Protector</li>
                            </ul>
                          </div>
                          <div className="col-12">
                            <p className="fw-medium mb-2">
                              Peningkat Vitamin :
                            </p>
                            <ul className="ps-3">
                              <li>Vitamin C</li>
                              <li>Vitamin B1 (Tiamin)</li>
                              <li>Vitamin B2 (Riboflavin)</li>
                              <li>Nikotinamid (Vitamin B3)</li>
                              <li>Asam Pantotenat (Vitamin B5)</li>
                              <li>Vitamin B6</li>
                              <li>Asam folat</li>
                              <li>Vitamin B12</li>
                              <li>Biotin</li>
                              <li>Seng (20mg)</li>
                              <li>Glutathione</li>
                              <li>Probiotik</li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            Mulai dari:<b> Rp2.380.000</b>
                          </div>
                          <button
                            onClick={() => handleBook("Super Bali Belly IV")}
                            id="super-bali"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            Pesan{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="3">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv08 me-2 fs-32"></i> Basic
                  Immune Booster
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
                          Tipe IV ini terdiri dari elektrolit esensial, Vitamin
                          B kompleks yang kuat, dan Vitamin C. Bertindak untuk
                          memperkuat sistem kekebalan tubuh, meningkatkan fungsi
                          metabolisme, dan meningkatkan sintesis kolagen,
                          sehingga mendukung kesehatan secara keseluruhan.
                        </p>
                        <h6 className="title-line">
                          <span> Komposisi </span>
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>Elektrolit (500 ml)</li>
                              <li>Vitamin B12 (5mg)</li>
                              <li>Biotin (60 mcg)</li>
                              <li>Asam Folat (400 mcg)</li>
                              <li>Vitamin B2 (3.6 mg)</li>
                              <li>Nikotinamid (40 mg)</li>
                              <li>Asam pantotenat (15 mg)</li>
                              <li>Vitamin B1 (102.5 mg)</li>
                              <li>Vitamin B6 (104 mg)</li>
                              <li>Vitamin C (1,000 mg)</li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            Mulai dari: <b>Rp1.890.000</b>
                          </div>
                          <button
                            onClick={() => handleBook("Basic Immune Booster")}
                            id="basic"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            Pesan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="4">
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
                          Tipe IV ini memberikan campuran elektrolit penting,
                          Vitamin C dalam jumlah tinggi, dan Vitamin B kompleks
                          yang komprehensif. Berfungsi untuk mengintensifkan
                          respon imun, meningkatkan metabolisme, merangsang
                          produksi sel darah merah, dan produksi kolagen untuk
                          meningkatkan kesehatan kulit dan sistem kekebalan
                          tubuh.
                        </p>
                        <h6 className="title-line">
                          <span> Komposisi </span>
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>Elektrolit (500 ml)</li>
                              <li>Vitamin C (2,100 mg)</li>
                              <li>Vitamin B1 (102.5 mg)</li>
                              <li>Vitamin B2 (103.6 mg)</li>
                              <li>Nikotinamid (40 mg)</li>
                              <li>Asam pantotenat (15 mg)</li>
                              <li>Vitamin B6 (4 mg)</li>
                              <li>Asam Folat (400 mcg)</li>
                              <li>Vitamin B12 (10 mcg)</li>
                              <li>Biotin (60 mcg)</li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            Mulai dari: <b>Rp2.075.000</b>
                          </div>
                          <button
                            onClick={() =>
                              handleBook("Standard Immune Booster")
                            }
                            id="standard"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {" "}
                            Pesan{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="5">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv08 me-2 fs-32"></i> Super
                  Immune Booster
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
                          Tipe IV yang ampuhdengan menggabungkan elektrolit,
                          Glutathione, Zinc, dan beragam vitamin dan mineral,
                          termasuk A, D, E, C, B1, B2, B6, B12, dan B5.
                          Memberikan peningkatan kekebalan dan mendukung
                          berbagai fungsi tubuh, termasuk pertahanan
                          antioksidan, fungsi kekebalan, penyembuhan luka, dan
                          produksi energi. Berkontribusi terhadap kesehatan dan
                          vitalitas secara keseluruhan.
                        </p>
                        <h6 className="title-line">
                          <span> Komposisi </span>
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>Elektrolit (500 ml)</li>
                              <li>Glutathione (600 mg)</li>
                              <li>Zinc (5 mg)</li>
                              <li>Retinol (3,500 IU)</li>
                              <li>Kolekalsiferol (220 IU)</li>
                              <li>Alfatokoferol (11,2 IU)</li>
                              <li>Vitamin C (2125 mg)</li>
                              <li>Vitamin B1 (103.51 mg)</li>
                              <li>Vitamin B2 (4.14 mg)</li>
                              <li>Vitamin B6 (104.53 mg)</li>
                              <li>Vitamin B12 (5.006 mg)</li>
                              <li>Asam folat (0,414 mg)</li>
                              <li>Vitamin B5 (17.25 mg)</li>
                              <li>Biotin (0.069 mg)</li>
                              <li>Nikotinamid (46 mg)</li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            Mulai dari: <b>Rp2.480.000</b>
                          </div>
                          <button
                            onClick={() => handleBook("Super Immune Booster")}
                            id="super"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {" "}
                            Pesan{" "}
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
                          Perawatan infus mabuk adalah prosedur cepat selama
                          30-60 menit untuk membantu Anda mengatasi gejala mabuk
                          dengan cepat melalui hidrasi dan kombinasi vitamin dan
                          elektrolit.
                        </p>
                        <h6 className="title-line">
                          <span> Komposisi </span>
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>IV Pereda Sakit</li>
                              <li>IV Anti-Mual</li>
                              <li>IV Gaster Protector</li>
                              <li>IV Vit B1, B6, B12</li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            Mulai dari: <b>Rp1.860.000</b>
                          </div>
                          <button
                            onClick={() => handleBook("Hangover Infusion")}
                            id="hangover"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {" "}
                            Pesan{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="7">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv10 me-2 fs-32"></i> Fever
                  Infusion
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
                          Infus Pengobatan Demam merupakan pemulihan cepat demam
                          tinggi pada orang dewasa melalui infus dan dapat
                          bermanfaat untuk memulihkan cairan tubuh.
                        </p>
                        <h6 className="title-line">
                          <span> Komposisi </span>
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>IV Pereda Sakit</li>
                              <li>IV Anti-Mual</li>
                              <li>Gaster Protector IV</li>
                              <li>Vit B1, B6, B12 IV</li>
                              <li>IV Parasetamol</li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            Mulai dari: <b>Rp1.140.000</b>
                          </div>
                          <button
                            onClick={() => handleBook("Fever Infusion")}
                            href="#book"
                            id="fever"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {" "}
                            Pesan{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="8">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv11 me-2 fs-32"></i> Gerd /
                  Gastritis Infusion
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
                          Infus Pengobatan Gerd/Gastritis bermanfaat untuk
                          mengatasi peradangan pada lambung atau iritasi lambung
                          akibat asam lambung.
                        </p>
                        <h6 className="title-line">
                          <span> Komposisi </span>
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>IV Pereda Sakit</li>
                              <li>IV Anti-Mual</li>
                              <li>IV Gaster Protector</li>
                              <li>IV Vit B1, B6, B12</li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            Mulai dari: <b>Rp1.660.000</b>
                          </div>
                          <button
                            onClick={() =>
                              handleBook("Gerd / Gastritis Infusion")
                            }
                            id="gerd"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {" "}
                            Pesan{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="9">
                <Accordion.Header>
                  <i className="icon-menu-icon-homeiv12 me-2 fs-32"></i> Iron
                  Infusion
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
                          Infus zat besi adalah pengobatan yang efektif untuk
                          kekurangan zat besi, suatu kondisi yang menyebabkan
                          kelelahan dan memengaruhi fungsi tubuh Anda.
                        </p>
                        <h6 className="title-line">
                          <span> Komposisi </span>
                        </h6>
                        <div className="row gy-3">
                          <div className="col-12">
                            <ul className="ps-3">
                              <li>Infus Ringer Laktat 500 cc</li>
                              <li>Infus NACL 100 cc</li>
                              <li>Vit C 1000 mg</li>
                              <li>Vit B Kompeks 5000 mg</li>
                              <li>Zat Besi Sukrosa Kompleks 100 mg</li>
                            </ul>
                          </div>
                        </div>
                        <div className="price">
                          <div className="value-price">
                            Mulai dari: <b>Rp1.590.000</b>
                          </div>
                          <button
                            onClick={() => handleBook("Iron Infusion")}
                            id="iron"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            Pesan
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
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Alamat</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Alamat Anda"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Layanan</label>
                  <select
                    id="service"
                    className="form-select form-control"
                    aria-label="Default select example"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Pilih Layanan</option>
                    <option value="Infus Bali Belly">Infus Bali Belly</option>
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

export default InHomeTherapyId;
