"use client";

import React from "react";
import { useState } from "react";
import Helper from "../../../lib/helper/helper";
import Accordion from "react-bootstrap/Accordion";

const HolisticAlternativeId = () => {
  const [book, setBook] = useState("Pesan perawatan luka sekarang");

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
    helper.RedirectToWa(formData, "ID", true);
  };
  const redirectTele = () => {
    const helper = new Helper();
    helper.redirectTele();
  };

  return (
    <>
      <div className="content">
        <section
          className="banner-pages"
          style={{ backgroundImage: "url('assets/img/bg-therapies.png')" }}
        >
          <div className="container">
            <div className="text">
              <h3>Terapi Alternatif Holistik</h3>
              <p>
                Nikmati pengalaman holistik dengan berbagai solusi terapi
                alternatif kami.
              </p>
              <a href="#book" className="btn btn-warning fs-14">
                Pesan
              </a>
            </div>
          </div>
        </section>

        <div className="faq pt-4">
          <div className="container">
            <div className="d-flex align-items-center">
              <img src="assets/img/plus-vector.svg" width="30px" alt="" />
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                Terapi alternatif holistik kami meliputi :
              </h3>
            </div>

            <Accordion className="accordion accordion-custom row">
              <Accordion.Item className="accordion-item col-md-6" eventKey="1">
                <Accordion.Header>
                  <i className="icon-menu-icon-therapis01 me-2 fs-32"></i>
                  Akupuntur
                </Accordion.Header>
                <Accordion.Body>
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
                          Praktik pengobatan Tiongkok kuno yang dengan memasukan
                          jarum tipis ke dalam tubuh pada titik -titik tertentu.
                        </p>
                        <h6 className="title-line">
                          <span> Keuntungan </span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Manajemen Rasa Sakit</h6>
                            <span>
                              {" "}
                              Mengurangi berbagai jenis rasa sakit, termasuk
                              kondisi kronis.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Pengurangan Stres</h6>
                            <span>
                              {" "}
                              Relaksasi dan menyeimbangkan sistem saraf.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Peningkatan Kualitas Tidur</h6>
                            <span>
                              {" "}
                              Meningkatkan kualitas tidur dan membantu mengelola
                              insomnia.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Peningkatan Fungsi Imun</h6>
                            <span>
                              {" "}
                              Mendukung kesehatan sistem kekebalan tubuh secara
                              keseluruhan.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Perawatan Komplementer</h6>
                            <span>
                              {" "}
                              Digunakan bersama terapi konvensional untuk
                              berbagai kondisi.{" "}
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp600.000
                          </div>
                          <button
                            onClick={() => handleBook("Akupuntur")}
                            id="acupuncture"
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
                  <i className="icon-menu-icon-therapis02 me-2 fs-32"></i> Pijat
                  Terapi
                </Accordion.Header>
                <Accordion.Body>
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
                          Pijat tradisional yang menggunakan gerakan, dan
                          tekanan untuk mengendurkan otot dan meningkatkan
                          sirkulasi.
                        </p>
                        <h6 className="title-line">
                          <span> Keuntungan </span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Pereda Sakit</h6>
                            <span>
                              {" "}
                              Menghilangkan ketegangan otot dan mengurangi
                              ketidaknyamanan.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Pengurangan Stres</h6>
                            <span>
                              {" "}
                              Meningkatkan relaksasi, menurunkan tingkat stres.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Peningkatan Sirkulasi</h6>
                            <span>
                              Meningkatkan aliran darah, membantu kesehatan
                              secara keseluruhan.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              Fleksibilitas dan Rentang Gerak
                            </h6>
                            <span>
                              Membantu meningkatkan fleksibilitas dan mobilitas
                              sendi.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Peningkatan Suasana Hati</h6>
                            <span>
                              {" "}
                              Melepaskan endorfin, berkontribusi pada suasana
                              hati yang positif.{" "}
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp300.000
                          </div>
                          <button
                            onClick={() => handleBook("Pijat Terapi")}
                            id="therapeutic"
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
              <Accordion.Item className="accordion-item col-md-6" eventKey="3">
                <Accordion.Header>
                  <i className="icon-menu-icon-therapis03 me-2 fs-32"></i>{" "}
                  Penyeimbang Energi Reiki
                </Accordion.Header>
                <Accordion.Body>
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
                          Teknik Jepang yang menggunakan sentuhan lembut untuk
                          menyalurkan energi ke dalam tubuh.
                        </p>
                        <h6 className="title-line">
                          <span> Keuntungan </span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Pengurangan Stres</h6>
                            <span>
                              Meningkatkan relaksasi, mengurangi stres dan
                              ketegangan.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Kesimbangan Emosional</h6>
                            <span> Mendukung keseimbangan emosional. </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Manajemen Rasa Sakit</h6>
                            <span>
                              {" "}
                              Membantu mengurangi ketidaknyamanan dan rasa sakit
                              fisik.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Peningkatan Aliran Energi</h6>
                            <span>
                              {" "}
                              Membantu dalam menyeimbangkan dan menyelaraskan
                              energi tubuh.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Relaksasi</h6>
                            <span>
                              {" "}
                              Meningkatkan relaksasi yang mendalam untuk
                              kenyamanan holistik.{" "}
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp400.000
                          </div>
                          <button
                            onClick={() =>
                              handleBook("Penyeimbang Energi Reiki")
                            }
                            id="energy"
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
              <Accordion.Item className="accordion-item col-md-6" eventKey="4">
                <Accordion.Header>
                  <i className="icon-menu-icon-therapis04 me-2 fs-32"></i>{" "}
                  Bimbingan dan Sesi Yoga
                </Accordion.Header>
                <Accordion.Body>
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
                          Jenis yoga yang menggabungkan pose yoga tradisional
                          dengan teknik relaksasi.
                        </p>
                        <h6 className="title-line">
                          <span> Keuntungan </span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Fleksibilitas dan Kekuatan</h6>
                            <span>
                              {" "}
                              Meningkatkan fleksibilitas, keseimbangan, dan
                              kekuatan fisik secara keseluruhan.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Pengurangan Stres</h6>
                            <span>
                              {" "}
                              Meningkatkan relaksasi dan mengurangi tingkat
                              stres melalui gerakan dan pernapasan.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Kejernihan Mental</h6>
                            <span>
                              {" "}
                              Meningkatkan fokus mental, konsentrasi, dan
                              meditasi.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Postur yang Lebih Baik</h6>
                            <span>
                              Membantu memperbaiki dan mempertahankan postur
                              yang baik, mengurangi ketegangan pada tubuh.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Koneksi Pikiran-Tubuh</h6>
                            <span>
                              {" "}
                              Memperkuat hubungan antara tubuh dan pikiran untuk
                              kesejahteraan holistik.{" "}
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp400.000
                          </div>
                          <button
                            onClick={() =>
                              handleBook("Bimbingan dan Sesi Yoga")
                            }
                            id="yoga"
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
              <Accordion.Item className="accordion-item col-md-6" eventKey="5">
                <Accordion.Header>
                  <i className="icon-menu-icon-therapis05 me-2 fs-32"></i>
                  Praktik Meditasi
                </Accordion.Header>
                <Accordion.Body>
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
                          Jenis meditasi yang melibatkan keadaan yang rileks dan
                          fokus pada pernapasan.
                        </p>
                        <h6 className="title-line">
                          <span> Keuntungan </span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Pengurangan Stres</h6>
                            <span>
                              {" "}
                              Meningkatkan relaksasi, mengurangi tingkat stres
                              secara keseluruhan.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              Peningkatan Fokus dan Konsentrasi
                            </h6>
                            <span>
                              {" "}
                              Meningkatkan fokus dan kejernihan mental.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Kesejahteraan Emosional</h6>
                            <span>
                              {" "}
                              Membantu mengelola emosi dan menumbuhkan pola
                              pikir yang positif.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Kualitas Tidur</h6>
                            <span>
                              {" "}
                              Mendukung relaksasi dan dapat berkontribusi pada
                              peningkatan kualitas tidur.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Kesadaran</h6>
                            <span>
                              Menumbuhkan kesadaran, yang mengarah pada rasa
                              damai dan keseimbangan.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp400.000
                          </div>
                          <button
                            onClick={() => handleBook("Praktik Meditasi")}
                            id="meditation"
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
                  <i className="icon-menu-icon-therapis05 me-2 fs-32"></i>{" "}
                  Osteopati dan Layanan Chiropraktik
                </Accordion.Header>
                <Accordion.Body>
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
                          Temukan sentuhan penyembuhan osteopati kami, dengan
                          praktisi yang berpengalaman menggunakan teknik lembut
                          untuk memulihkan keseimbangan dan mengurangi masalah
                          muskuloskeletal.
                        </p>
                        <h6 className="title-line">
                          <span> Keuntungan </span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Pereda Sakit</h6>
                            <span>
                              {" "}
                              Mengurangi nyeri muskuloskeletal dan
                              ketidaknyamanan.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Peningkatan Mobilitas</h6>
                            <span>
                              {" "}
                              Meningkatkan fleksibilitas sendi dan keseluruhan
                              rentang gerak.{" "}
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Postur</h6>
                            <span>
                              {" "}
                              Membantu mengatasi dan memperbaiki masalah postur,
                              mengurangi ketegangan pada tubuh.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Kesehatan Seluruh Tubuh</h6>
                            <span>
                              Peningkatan kondisi secara keseluruhan dengan
                              mengatasi keterkaitan sistem muskuloskeletal dan
                              fungsi tubuh lainnya.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Sakit Kepala dan Migrain</h6>
                            <span>
                              Meringankan sakit kepala dan migrain yang tegang
                              melalui penyesuaian tulang belakang.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp450.000
                          </div>
                          <div
                            onClick={() =>
                              handleBook("Osteopati dan Layanan Chiropraktik")
                            }
                            id="osteopathy"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            {" "}
                            Pesan{" "}
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
      </div>

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
                  <option value="Akupuntur">Akupuntur</option>
                  <option value="Pijat Terapi">Pijat Terapi</option>
                  <option value="Penyeimbang Energi Reiki">
                    Penyeimbang Energi Reiki
                  </option>
                  <option value="Bimbingan dan Sesi Yoga">
                    Bimbingan dan Sesi Yoga
                  </option>
                  <option value="Praktik Meditasi">Praktik Meditasi</option>
                  <option value="Osteopati dan Layanan Chiropraktik">
                    Osteopati dan Layanan Chiropraktik
                  </option>
                </select>
              </div>
            </div>
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
        </div>
      </section>
    </>
  );
};

export default HolisticAlternativeId;
