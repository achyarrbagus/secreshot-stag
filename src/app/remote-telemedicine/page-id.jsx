"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import Helper from "../../../lib/helper/helper";
import Accordion from "react-bootstrap/Accordion";

const RemoteTelemedicId = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    service: "Select Service",
  });

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
    helper.redirectTele();
  };

  const [book, setBook] = useState("Pesan kunjungan sekarang");

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Konsultasi Online Dokter Umum":
        window.location.replace(
          "https://www.sehatcepat.com/payments/dr-ayu/?camp=drumum"
        );
        // setBook("Pesan konsultasi dokter umum sekarang");
        break;
      case "Konsultasi Online Dokter Spesialis":
        window.location.replace(
          "https://www.sehatcepat.com/payments/dr-lia/?camp=dranak"
        );
        // setBook("Pesan konsultasi dokter spesialis sekarang");
        break;
      case "Resep Medis Online":
        window.location.replace(
          "https://www.sehatcepat.com/payments/dr-ayu/?camp=resepobat"
        );
        // setBook("Pesan resep obat online sekarang");
        break;
      case "Sertifikat Medis Online":
        setBook("Pesan surat sakit online sekarang");
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
          style={{ backgroundImage: "url('assets/img/bg-remote.png')" }}
        >
          <div className="container">
            <div className="text">
              <h3>Telemedis jarak jauh</h3>
              <p>
                Akses konsultasi medis tanpa melangkah keluar, melalui platform
                online komprehensif kami.
              </p>
              <a href="#book" className="btn btn-warning fs-14">
                Pesan
              </a>
            </div>
          </div>
        </section>

        <section className="faq pt-4">
          <div className="container">
            <div className="d-flex align-items-center">
              <img src="assets/img/plus-vector.svg" width="30px" alt="" />
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                Layanan telemedis jarak jauh kami meliputi:
              </h3>
            </div>

            <Accordion className="accordion accordion-custom row">
              <Accordion.Item className="accordion-item col-md-6" eventKey="1">
                <Accordion.Header>
                  <i className="icon-menu-icon-remotetelemedicine01 me-2 fs-32"></i>{" "}
                  Konsultasi Online Dokter Umum
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
                          Akses perawatan kesehatan melalui konsultasi online
                          yang nyaman, diagnosis, perawatan, dan tindak lanjut
                          secara fleksibel dari rumah Anda sendiri.
                        </p>
                        <h6 className="title-line">
                          <span>Keuntungan</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Kenyamanan</h6>
                            <span>
                              Memungkinkan pasien untuk berkonsultasi dengan
                              profesional kesehatan dari rumah mereka sendiri,
                              menghemat waktu dan perjalanan.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Aksesibilitas</h6>
                            <span>
                              Memberikan akses saran dan resep medis untuk
                              penyakit umum tanpa perlu kunjungan langsung.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Perawatan Tepat Waktu</h6>
                            <span>
                              Memungkinkan konsultasi cepat untuk penyakit
                              ringan atau masalah kesehatan tanpa menunggu janji
                              temu.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Hemat Biaya</h6>
                            <span>
                              Memungkinkan lebih hemat biaya dibandingkan dengan
                              kunjungan langsung, mempertimbangkan biaya
                              perjalanan dan waktu.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Bimbingan Preventif</h6>
                            <span>
                              Menawarkan cara yang nyaman untuk membahas
                              perawatan preventif, gaya hidup, dan nasihat
                              kesehatan umum dengan profesional kesehatan.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp20.000
                          </div>

                          <div className="ms-auto d-flex gap-1">
                            {/* <div
                                onClick={() => (window.location.href = "https://www.sehatcepat.com/payments/dr-ayu/")}
                                id="general"
                                className="btn btn-warning"
                              >
                                <i class="fa-solid fa-user-doctor"></i>
                              </div> */}
                            <div
                              onClick={() =>
                                handleBook("Konsultasi Online Dokter Umum")
                              }
                              id="general"
                              className="btn btn-warning fs-14"
                            >
                              Pesan{" "}
                            </div>
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
                  Konsultasi Online Dokter Spesialis
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
                          Terhubung dengan tenaga spesialis dari jarak jauh,
                          menghilangkan kebutuhan akan perjalanan fisik melalui
                          platform online kami
                        </p>
                        <h6 className="title-line">
                          <span>Keuntungan</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Dokter anak</h6>
                            <span>
                              Konsultasikan dengan dokter yang berspesialisasi
                              dalam perawatan medis bayi, anak-anak, dan remaja,
                              dengan fokus pada kesejahteraan fisik, emosional,
                              dan perilaku mereka.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Ahli bedah</h6>
                            <span>
                              Konsultasikan dengan profesional medis yang
                              terampil dalam melakukan prosedur bedah, menangani
                              berbagai kondisi melalui teknik operasi.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Dokter estetika</h6>
                            <span>
                              Konsultasikan dengan praktisi medis dengan
                              keahlian dalam kedokteran kecantikan, mengetahui
                              tentang prosedur non-bedah untuk meningkatkan
                              penampilan seseorang.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp40.000
                          </div>

                          <div className="ms-auto d-flex gap-1">
                            {/* <div
                                onClick={() => (window.location.href = "https://www.sehatcepat.com/payments/dr-lia/")}
                                id="general"
                                className="btn btn-warning"
                              >
                                <i class="fa-solid fa-user-doctor"></i>
                              </div> */}
                            <div
                              onClick={() =>
                                handleBook("Konsultasi Online Dokter Spesialis")
                              }
                              id="medical"
                              className="btn btn-warning fs-14 ms-auto"
                            >
                              Pesan{" "}
                            </div>
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
                  Resep Obat Online
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
                          Resep medis online memungkinkan pasien menerima obat
                          dari jarak jauh melalui konsultasi virtual. jarak
                        </p>
                        <h6 className="title-line">
                          <span>Keuntungan</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Kenyamanan</h6>
                            <span>
                              Memungkinkan pasien untuk menerima resep tanpa
                              kunjungan klinik fisik, menghemat waktu dan
                              tenaga.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Aksesibilitas</h6>
                            <span>
                              Mengurangi Meningkatkan akses ke obat -obatan yang
                              diperlukan untuk individu dengan mobilitas
                              terbatas. yang dihabiskan untuk perjalanan dan
                              menunggu dalam antrian di apotek.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">*Efisiensi Waktu</h6>
                            <span>
                              Mengurangi waktu yang dihabiskan untuk perjalanan
                              dan menunggu dalam antrian di apotek.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Privasi</h6>
                            <span>
                              Menawarkan cara efektif bagi individu untuk
                              mendapatkan resep obat tanpa interaksi tatap muka.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Perawatan Berkelanjutan</h6>
                            <span>
                              Mendukung manajemen kondisi kronis yang
                              berkelanjutan dan konsisten melalui penyesuaian
                              resep tepat waktu.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp40.000
                          </div>

                          <div
                            onClick={() => handleBook("Resep Medis Online")}
                            id="prescription"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            Pesan{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="4">
                <Accordion.Header>
                  <i className="icon-menu-icon-remotetelemedicine04 me-2 fs-32"></i>
                  Surat Sakit Online
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
                          Surat sakit online memungkinkan individu untuk
                          berkonsultasi dengan profesional kesehatan dari jarak
                          jauh untuk mendapatkan surat sakit yang diperlukan
                          melalui platform digital atau situs web.
                        </p>
                        <h6 className="title-line">
                          <span>Keuntungan</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Kenyamanan</h6>
                            <span>
                              Memungkinkan individu untuk mendapatkan surat
                              sakit dari rumah mereka, mengurangi kebutuhan
                              untuk kunjungan langsung.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Penghematan Waktu</h6>
                            <span>
                              Merampingkan proses, menghemat waktu dibandingkan
                              dengan metode tradisional untuk mendapatkan surat
                              sakit.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Aksesibilitas</h6>
                            <span>
                              Memberikan akses surat sakit untuk individu yang
                              memiliki mobilitas terbatas.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Efisiensi</h6>
                            <span>
                              Memfasilitasi proses yang lebih cepat dalam
                              memperoleh dokumentasi yang diperlukan untuk
                              pekerjaan atau tujuan lain.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Mengurangi Penularan</h6>
                            <span>
                              Meminimalkan risiko paparan penyakit menular
                              dengan menghindari kunjungan yang tidak perlu ke
                              fasilitas perawatan kesehatan
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp75.000
                          </div>

                          <div
                            onClick={() =>
                              (window.location.href =
                                "https://www.suratsakit.cepatsehat.com/")
                            }
                            id="certificate"
                            className="btn btn-warning fs-14 ms-auto"
                          >
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
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section"> {book} </h3>
            <div>
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nama Anda"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Alamat</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Alamat Anda"
                    onChange={handleChange}
                    value={formData.address}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Layanan</label>
                  <select
                    id="service"
                    className="form-select form-control"
                    aria-label="Default select example"
                    onChange={handleChange}
                    value={formData.service}
                  >
                    <option>Pilih Layanan</option>
                    <option value="Konsultasi Online Dokter Umum">
                      Konsultasi Online Dokter Umum
                    </option>
                    <option value="Konsultasi Online Dokter Spesialis">
                      Konsultasi Online Dokter Spesialis
                    </option>
                    <option value="Resep Obat Online">Resep Obat Online</option>
                    <option value="Surat Sakit Online">
                      Surat Sakit Online
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
};

export default RemoteTelemedicId;
