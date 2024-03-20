"use client";

import { useState } from "react";
import Helper from "../../../lib/helper/helper";
import Accordion from "react-bootstrap/Accordion";

const InHomeDiagnosticId = () => {
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
  const [book, setBook] = useState("Pesan kunjungan sekarang");

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Pemutihan gigi":
        setBook("Pesan layanan pemutihan gigi");
        break;
      case "Terapi Sekretom dan Stem Cells":
        setBook("Pesan layanan terapi stem cell");
        break;
      case "Terapi Ozon":
        setBook("Pesan layanan terapi ozon");
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
          style={{
            backgroundImage: "url('assets/img/bg-home-diagnostic.png')",
          }}
        >
          <div className="container">
            <div className="text">
              <h3>Layanan Alternatif</h3>
              <p>
                Pemutihan gigi untuk mempercantik penampilan, terapi sekretom
                untuk perawatan regeneratif, dan terapi ozon untuk meningkatkan
                sistem kekebalan tubuh.
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
                Layanan Alternatif kami terdiri dari:
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
                    Pemutihan gigi
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
                            Tingkatkan kecerahan senyum Anda dengan layanan
                            pemutihan gigi profesional kami.
                          </p>
                          <h6 className="title-line">
                            <span>Keuntungan</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Peningkatan Estetika</h6>
                              <span>
                                Meningkatkan penampilan gigi dengan mengurangi
                                noda dan perubahan warna, sehingga menghasilkan
                                senyuman yang lebih cerah dan putih.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">
                                Meningkatkan Kepercayaan Diri
                              </h6>
                              <span>
                                Gigi yang lebih putih sering kali berkontribusi
                                pada peningkatan kepercayaan diri dan citra diri
                                yang positif.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Penampilan Awet Muda</h6>
                              <span>
                                Senyuman yang lebih cerah dikaitkan dengan
                                penampilan yang lebih muda, karena perubahan
                                warna gigi bisa menjadi tanda penuaan.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">
                                Peningkatan Kebersihan Mulut
                              </h6>
                              <span>
                                Proses pemutihan gigi sering kali melibatkan
                                pembersihan profesional, sehingga berkontribusi
                                terhadap peningkatan kebersihan mulut secara
                                keseluruhan.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Kesan Sosial Positif</h6>
                              <span>
                                Senyum cerah dapat meninggalkan kesan positif
                                dalam situasi sosial dan profesional,
                                menumbuhkan rasa menarik dan ramah.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp889.000
                            </div>
                            <button
                              onClick={() => handleBook("Pemutihan gigi")}
                              id="teeth"
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
                <Accordion.Item
                  className="accordion-item col-md-6"
                  eventKey="2"
                >
                  <Accordion.Header>
                    <i className="icon-menu-icon-alternative02 me-2 fs-32"></i>{" "}
                    Terapi Sekretom dan Stem Cells
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
                            Rasakan manfaat peremajaan dari Secretome, terapi
                            mutakhir yang memanfaatkan kekuatan protein
                            regeneratif.
                          </p>
                          <h6 className="title-line">
                            <span>Keuntungan</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Regenerasi Jaringan</h6>
                              <span>
                                Mempromosikan perbaikan dan regenerasi jaringan
                                yang rusak.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Antiinflamasi</h6>
                              <span>
                                Menunjukkan sifat anti-inflamasi, membantu
                                modulasi kekebalan tubuh.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Mempercepat Penyembuhan</h6>
                              <span>
                                Mempercepat proses penyembuhan alami dengan
                                mendorong pertumbuhan sel dan remodeling
                                jaringan.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">
                                Perawatan Kondisi Degeneratif
                              </h6>
                              <span>
                                Memiliki potensi untuk mengobati kondisi seperti
                                osteoartritis dan penyakit neurodegeneratif.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">
                                Meminimalkan Respon Kekebalan Tubuh
                              </h6>
                              <span>
                                Mengurangi risiko penolakan kekebalan tubuh,
                                menjadikannya cocok untuk transplantasi dan
                                terapi regeneratif.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp2.499.000
                            </div>

                            <div className="d-flex gap-1 ms-auto">
                              {/* <div
                                onClick={() => (window.location.href = "https://www.sehatcepat.com/payments/dr-ayu/")}
                                id="general"
                                className="btn btn-warning"
                              >
                                <i class="fa-solid fa-user-doctor"></i>
                              </div> */}
                              <button
                                onClick={() =>
                                  handleBook("Terapi Sekretom dan Stem Cells")
                                }
                                id="secretome"
                                className="btn btn-warning fs-14 ms-auto"
                              >
                                Pesan{" "}
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
                    Terapi Ozon
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
                            Manjakan diri Anda dalam khasiat penyembuhan terapi
                            ozon. Temukan pendekatan holistik terhadap kesehatan
                            dengan terapi ozon.
                          </p>
                          <h6 className="title-line">
                            <span>Keuntungan</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Peningkatan Oksigenasi</h6>
                              <span>
                                Dapat meningkatkan pengiriman oksigen ke
                                jaringan, berpotensi meningkatkan tingkat
                                energi.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">
                                Meningkatkan Sistem Kekebalan Tubuh
                              </h6>
                              <span>
                                Diklaim merangsang sistem kekebalan tubuh untuk
                                meningkatkan resistensi terhadap infeksi.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Efek Anti Inflamasi</h6>
                              <span> Memiliki sifat anti-inflamasi.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Dukungan Detoksifikasi</h6>
                              <span>
                                Diadvokasi karena peran potensialnya dalam
                                membantu detoksifikasi.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Sifat Antimikroba</h6>
                              <span>
                                {" "}
                                Memiliki efek antimikroba yang dapat membantu
                                memerangi infeksi.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp3.125.000
                            </div>
                            <a
                              onClick={() => handleBook("Terapi Ozon")}
                              id="ozone"
                              className="btn btn-warning fs-14 ms-auto"
                            >
                              Pesan{" "}
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
                  <label className="form-label">Nama Layanan</label>
                  <select
                    id="service"
                    className="form-select form-control"
                    aria-label="Default select example"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Pilihan Layanan</option>
                    <option value="Pemutihan gigi">Pemutihan gigi</option>
                    <option value="Terapi Sekretom dan Stem Cells">
                      Terapi Sekretom dan Stem Cells
                    </option>
                    <option value="Terapi Ozon">Terapi Ozon</option>
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

export default InHomeDiagnosticId;
